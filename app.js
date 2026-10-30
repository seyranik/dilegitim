(function () {
  "use strict";

  /* ============ Veri hazırlığı ============ */
  const CHUNK = 8;                       // bir derste kaç kelime
  const HEARTS = 5;
  const KEY = "yds-kelime-v1";
  const OPEN_KEY = "yds-kelime-open";      // akordiyonda açık üniteler

  const SETS = window.WORD_SETS;
  const WORDS = [];                      // düz liste
  const BYID = {};
  SETS.forEach((s, si) => {
    s.items.forEach((it, i) => {
      const w = { id: s.id + ":" + i, en: it[0], pos: it[1], tr: it[2], setId: s.id, kind: s.kind };
      WORDS.push(w); BYID[w.id] = w;
    });
    s.lessons = [];
    for (let i = 0; i < s.items.length; i += CHUNK) {
      let ids = [];
      const end = Math.min(i + CHUNK, s.items.length);
      for (let j = i; j < end; j++) ids.push(s.id + ":" + j);
      // son ders çok küçük kalırsa bir öncekine ekle
      if (s.items.length - end > 0 && s.items.length - end < 4) {
        for (let j = end; j < s.items.length; j++) ids.push(s.id + ":" + j);
        s.lessons.push({ id: s.id + "#" + s.lessons.length, ids });
        break;
      }
      s.lessons.push({ id: s.id + "#" + s.lessons.length, ids });
    }
  });

  /* ============ Durum ============ */
  const today = () => new Date().toISOString().slice(0, 10);
  const yesterday = () => new Date(Date.now() - 864e5).toISOString().slice(0, 10);

  let S = load();
  function load() {
    try {
      const x = JSON.parse(localStorage.getItem(KEY));
      if (x) return Object.assign({ xp: 0, streak: 0, last: "", lessons: {}, words: {}, speech: true }, x);
    } catch (e) {}
    return { xp: 0, streak: 0, last: "", lessons: {}, words: {}, speech: true };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} updateStats(); }
  function updateStats() {
    let st = S.streak;
    if (S.last && S.last !== today() && S.last !== yesterday()) st = 0;
    document.getElementById("st-streak").textContent = st;
    document.getElementById("st-xp").textContent = S.xp;
  }
  function wstat(id) { return S.words[id] || (S.words[id] = { s: 0, ok: 0, bad: 0 }); }
  function bump(id, good) {
    const w = wstat(id);
    if (good) { w.ok++; w.s = Math.min(5, w.s + 1); } else { w.bad++; w.s = Math.max(0, w.s - 1); }
  }

  /* ============ Yardımcılar ============ */
  const $ = (s, el) => (el || document).querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const norm = (s) => s.toLowerCase().replace(/[’'`.,]/g, "").replace(/\s+/g, " ").trim();
  const posLabel = (p) => ({ n: "isim", v: "fiil", adj: "sıfat", adv: "zarf", pv: "deyim/fiil", pp: "edat grb.", prep: "edat", q: "niceleyici", conj: "bağlaç", trans: "geçiş", pron: "zamir", num: "sayı", corr: "bağlaç" }[p] || p);

  function speak(text) {
    if (!S.speech || !("speechSynthesis" in window)) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text.replace(/\.\.\./g, " ").replace(/\bsth\b/g, "something").replace(/\bsb\b/g, "somebody").replace(/[\/]/g, " or "));
      u.lang = "en-US"; u.rate = 0.9;
      speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ============ Sekmeler ============ */
  let tab = "home";
  function go(t) {
    tab = t;
    document.querySelectorAll("#tabs button").forEach((b) => b.classList.toggle("active", b.dataset.tab === t));
    ({ home: renderHome, practice: renderPractice, words: renderWords, settings: renderSettings })[t]();
    window.scrollTo(0, 0);
  }
  document.querySelectorAll("#tabs button").forEach((b) => b.addEventListener("click", () => go(b.dataset.tab)));

  const app = $("#app");

  /* ---------- Yol ---------- */
  function lessonDone(id) { return S.lessons[id] && S.lessons[id].done; }
  function renderHome() {
    app.innerHTML = "";
    const total = SETS.reduce((n, s) => n + s.lessons.length, 0);
    const done = SETS.reduce((n, s) => n + s.lessons.filter((l) => lessonDone(l.id)).length, 0);
    const learned = WORDS.filter((w) => wstat(w.id).s >= 3).length;
    const top = el("div", "card");
    top.innerHTML = `<div class="row"><div class="grow"><b>Genel ilerleme</b><div class="muted">${done}/${total} ders · ${learned}/${WORDS.length} kelime öğrenildi</div></div><div style="font-size:30px">🏆</div></div><div class="bar" style="margin-top:10px"><i style="width:${(done / total) * 100}%"></i></div>`;
    app.appendChild(top);

    // akordiyon: hangi üniteler açık? (kayıt yoksa: bitmemiş ilk ünite açık)
    let openSet = null;
    try { openSet = JSON.parse(localStorage.getItem(OPEN_KEY)); } catch (e) {}
    if (!Array.isArray(openSet)) {
      const cur = SETS.find((s) => s.lessons.some((l) => !lessonDone(l.id))) || SETS[0];
      openSet = cur ? [cur.id] : [];
    }
    const saveOpen = () => { try { localStorage.setItem(OPEN_KEY, JSON.stringify(openSet)); } catch (e) {} };

    SETS.forEach((s) => {
      const isOpen = openSet.includes(s.id);
      const u = el("div", "unit" + (isOpen ? " open" : ""));
      const d = s.lessons.filter((l) => lessonDone(l.id)).length;
      const head = el("button", "unit-head " + (s.kind === "prep" ? "prep" : "") + (d === s.lessons.length ? " complete" : ""), `<div><b>${esc(s.title)}</b><br><small>${s.items.length} ${s.kind === "prep" ? "kalıp" : "kelime"}</small></div><div class="uh-r"><small>${d}/${s.lessons.length}</small><span class="chev">▾</span></div>`);
      head.setAttribute("aria-expanded", isOpen ? "true" : "false");
      head.addEventListener("click", () => {
        const open = u.classList.toggle("open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
        openSet = openSet.filter((x) => x !== s.id); if (open) openSet.push(s.id);
        saveOpen();
      });
      u.appendChild(head);
      const nodes = el("div", "nodes");
      s.lessons.forEach((l, i) => {
        const b = el("button", "node" + (lessonDone(l.id) ? " done" : ""), lessonDone(l.id) ? "★" : i + 1);
        const best = S.lessons[l.id] && S.lessons[l.id].best;
        b.appendChild(el("span", "lbl", best != null ? "%" + best : l.ids.length + " kelime"));
        b.addEventListener("click", () => startLesson(l.ids, { lessonId: l.id, title: s.title }));
        nodes.appendChild(b);
      });
      u.appendChild(nodes);
      app.appendChild(u);
    });
  }

  /* ---------- Pratik ---------- */
  function renderPractice() {
    app.innerHTML = "";
    const seen = WORDS.filter((w) => S.words[w.id]);
    const weak = seen.filter((w) => wstat(w.id).s < 3).sort((a, b) => wstat(a.id).s - wstat(b.id).s);
    app.appendChild(el("h2", "", "Pratik"));
    app.appendChild(el("p", "muted", "Çalıştığın kelimeleri pekiştir. Zayıf kelimeler öne alınır."));

    const c1 = el("div", "card");
    c1.innerHTML = `<b>🎯 Zayıf kelimelerim</b><div class="muted">${weak.length} kelime</div>`;
    const b1 = el("button", "btn", "Başla"); b1.style.marginTop = "10px";
    b1.disabled = weak.length < 4;
    b1.addEventListener("click", () => startLesson(weak.slice(0, 10).map((w) => w.id), { title: "Zayıf kelimeler" }));
    c1.appendChild(b1);
    if (weak.length < 4) c1.appendChild(el("div", "muted", "<small>Önce birkaç ders tamamla.</small>"));
    app.appendChild(c1);

    const c2 = el("div", "card");
    c2.innerHTML = `<b>🎲 Rastgele karışık</b><div class="muted">Tüm kelimelerden 10 tane</div>`;
    const b2 = el("button", "btn blue", "Başla"); b2.style.marginTop = "10px";
    b2.addEventListener("click", () => startLesson(pick(WORDS, 10).map((w) => w.id), { title: "Karışık pratik" }));
    c2.appendChild(b2); app.appendChild(c2);

    const c3 = el("div", "card");
    c3.innerHTML = `<b>📖 Sadece edat kalıpları</b><div class="muted">Target Prepositions</div>`;
    const b3 = el("button", "btn blue", "Başla"); b3.style.marginTop = "10px";
    b3.addEventListener("click", () => startLesson(pick(WORDS.filter((w) => w.kind === "prep"), 10).map((w) => w.id), { title: "Edat pratiği" }));
    c3.appendChild(b3); app.appendChild(c3);

    const c4 = el("div", "card");
    c4.innerHTML = `<b>🏷️ Sadece kelimeler</b><div class="muted">Edatlar hariç</div>`;
    const b4 = el("button", "btn blue", "Başla"); b4.style.marginTop = "10px";
    b4.addEventListener("click", () => startLesson(pick(WORDS.filter((w) => w.kind === "words"), 10).map((w) => w.id), { title: "Kelime pratiği" }));
    c4.appendChild(b4); app.appendChild(c4);
  }

  /* ---------- Kelime listesi ---------- */
  function renderWords() {
    app.innerHTML = "";
    app.appendChild(el("h2", "", "Kelimeler"));
    const inp = el("input"); inp.type = "search"; inp.placeholder = "İngilizce veya Türkçe ara…";
    app.appendChild(inp);
    const chips = el("div", "chips");
    let filter = "all";
    [["all", "Hepsi"], ["words", "Kelime"], ["prep", "Edat"], ["weak", "Zayıf"], ["learned", "Öğrenilen"]].forEach(([k, t]) => {
      const c = el("button", "chip" + (k === "all" ? " on" : ""), t);
      c.addEventListener("click", () => { filter = k; chips.querySelectorAll(".chip").forEach((x) => x.classList.remove("on")); c.classList.add("on"); draw(); });
      chips.appendChild(c);
    });
    app.appendChild(chips);
    const info = el("div", "muted"); app.appendChild(info);
    const list = el("div"); app.appendChild(list);
    function draw() {
      const q = norm(inp.value);
      const res = WORDS.filter((w) => {
        if (filter === "words" && w.kind !== "words") return false;
        if (filter === "prep" && w.kind !== "prep") return false;
        if (filter === "weak" && !(S.words[w.id] && S.words[w.id].s < 3)) return false;
        if (filter === "learned" && !(S.words[w.id] && S.words[w.id].s >= 3)) return false;
        return !q || norm(w.en).includes(q) || norm(w.tr).includes(q);
      });
      info.textContent = res.length + " sonuç";
      list.innerHTML = "";
      res.slice(0, 300).forEach((w) => {
        const s = wstat(w.id).s;
        const dots = Array.from({ length: 5 }, (_, i) => `<i class="${i < s ? "on" : ""}"></i>`).join("");
        const r = el("div", "wl-item", `<div><span class="en">${esc(w.en)}</span><span class="tag">${posLabel(w.pos)}</span><span class="dots">${dots}</span></div><div class="tr">${esc(w.tr)}</div>`);
        r.addEventListener("click", () => speak(w.en));
        list.appendChild(r);
      });
    }
    inp.addEventListener("input", draw);
    draw();
  }

  /* ---------- Ayarlar ---------- */
  function renderSettings() {
    app.innerHTML = "";
    app.appendChild(el("h2", "", "Ayarlar"));
    const c = el("div", "card");
    c.innerHTML = `<div class="row"><div class="grow"><b>Sesli okuma</b><div class="muted">İngilizce kelimeleri seslendir</div></div></div>`;
    const t = el("button", "btn small " + (S.speech ? "" : "ghost"), S.speech ? "Açık" : "Kapalı");
    t.style.marginTop = "10px";
    t.addEventListener("click", () => { S.speech = !S.speech; save(); renderSettings(); });
    c.appendChild(t); app.appendChild(c);

    const c2 = el("div", "card");
    c2.innerHTML = `<b>İstatistik</b><div class="muted">Toplam ${WORDS.length} kayıt · ${SETS.length} sayfa/ünite · ${SETS.reduce((n, s) => n + s.lessons.length, 0)} ders</div>`;
    app.appendChild(c2);

    const c3 = el("div", "card");
    c3.innerHTML = `<b>İlerlemeyi sıfırla</b><div class="muted">Tüm XP, seri ve kelime puanları silinir.</div>`;
    const r = el("button", "btn red small", "Sıfırla"); r.style.marginTop = "10px";
    r.addEventListener("click", () => { if (confirm("Tüm ilerleme silinsin mi?")) { S = { xp: 0, streak: 0, last: "", lessons: {}, words: {}, speech: S.speech }; save(); go("home"); } });
    c3.appendChild(r); app.appendChild(c3);
    app.appendChild(el("p", "muted", "<small>Yeni kelime eklemek için <b>words.js</b> dosyasını düzenle.</small>"));
  }

  /* ============ Ders motoru ============ */
  let L = null;   // aktif ders

  function distractors(w, n, field) {
    // aynı türden ve aynı tipten (words/prep) olanlardan seç
    // aynı anlama gelen (tr'si aynı) kelimeler şık olarak çıkmasın: biri doğru, öteki yanlış sayılırdı
    let pool = WORDS.filter((x) => x.id !== w.id && x.kind === w.kind && x[field] !== w[field] && x.tr !== w.tr);
    const same = pool.filter((x) => x.pos === w.pos);
    let chosen = pick(same, n);
    if (chosen.length < n) chosen = chosen.concat(pick(pool.filter((x) => !chosen.includes(x)), n - chosen.length));
    // aynı metin çıkmasın
    const seen = new Set([w[field]]); const out = [];
    for (const x of chosen) { if (!seen.has(x[field])) { seen.add(x[field]); out.push(x); } }
    return out;
  }

  function mkMC(w, dir) {
    // dir: "en2tr" | "tr2en"
    const f = dir === "en2tr" ? "tr" : "en";
    const opts = shuffle([w[f]].concat(distractors(w, 3, f).map((x) => x[f])));
    return { type: "mc", w, dir, prompt: dir === "en2tr" ? w.en : w.tr, answer: w[f], opts, title: dir === "en2tr" ? "Bu ne demek?" : "İngilizcesi hangisi?" };
  }
  function mkListen(w) {
    const opts = shuffle([w.en].concat(distractors(w, 3, "en").map((x) => x.en)));
    return { type: "listen", w, answer: w.en, opts, title: "Duyduğunu seç" };
  }
  function mkType(w) { return { type: "type", w, answer: w.en, prompt: w.tr, title: "İngilizcesini yaz" }; }
  function mkMatch(ws) { return { type: "match", ws, title: "Eşleştir" }; }

  function buildQuestions(ids) {
    const ws = ids.map((id) => BYID[id]);
    const qs = [];
    ws.forEach((w) => {
      const st = wstat(w.id).s;
      qs.push(mkMC(w, "en2tr"));
      if (w.kind === "words") {
        const r = Math.random();
        qs.push(st >= 2 ? (r < 0.5 ? mkType(w) : mkListen(w)) : (r < 0.5 ? mkMC(w, "tr2en") : mkListen(w)));
      } else qs.push(mkMC(w, "tr2en"));
    });
    let seq = shuffle(qs);
    // eşleştirme turu araya
    if (ws.length >= 5) {
      const m = mkMatch(pick(ws, Math.min(5, ws.length)));
      seq.splice(Math.floor(seq.length / 2), 0, m);
    }
    return seq;
  }

  function startLesson(ids, meta) {
    if (!ids.length) return;
    L = { ids, meta: meta || {}, queue: buildQuestions(ids), total: 0, done: 0, hearts: HEARTS, right: 0, wrong: 0, retried: new Set(), xp: 0 };
    L.total = L.queue.length;
    document.body.classList.add("in-lesson");
    let root = $("#lesson"); if (root) root.remove();
    root = el("div"); root.id = "lesson";
    root.innerHTML = `<div class="l-top"><button class="l-x" aria-label="Kapat">✕</button><div class="bar"><i id="l-bar" style="width:0"></i></div><div class="hearts">❤️ <span id="l-hearts">${HEARTS}</span></div></div><div class="l-body" id="l-body"></div><div class="l-foot" id="l-foot"><div class="inner" id="l-foot-in"></div></div>`;
    document.body.appendChild(root);
    $(".l-x", root).addEventListener("click", () => { if (confirm("Dersten çıkılsın mı? İlerleme kaybolur.")) endLesson(true); });
    next();
  }

  function endLesson(quit) {
    const r = $("#lesson"); if (r) r.remove();
    document.body.classList.remove("in-lesson");
    try { speechSynthesis.cancel(); } catch (e) {}
    L = null;
    go(tab);
  }

  function setBar() {
    $("#l-bar").style.width = Math.min(100, (L.done / L.total) * 100) + "%";
    $("#l-hearts").textContent = L.hearts;
  }

  function foot(html, cls) { const f = $("#l-foot"); f.className = "l-foot " + (cls || ""); $("#l-foot-in").innerHTML = html; }

  function next() {
    setBar();
    if (L.hearts <= 0) return result(false);
    if (!L.queue.length) return result(true);
    const q = L.queue[0];
    const body = $("#l-body"); body.innerHTML = "";
    body.appendChild(el("div", "q-title", q.title));
    ({ mc: showMC, listen: showListen, type: showType, match: showMatch })[q.type](q, body);
  }

  function resolve(q, good, extra) {
    // good: bool. Sonucu işle, alt çubuğu göster
    if (q.w) bump(q.w.id, good);
    if (good) { L.right++; L.done++; L.xp += 2; }
    else {
      L.wrong++; L.hearts--;
      if (q.type !== "match" && !L.retried.has(q.w.id + q.type)) { L.retried.add(q.w.id + q.type); L.queue.push(Object.assign({}, q)); L.total++; }
    }
    L.queue.shift();
    setBar();
  }

  function showFoot(good, correct, extra) {
    const f = $("#l-foot");
    const msg = good ? ["Harika!", "Doğru!", "Süper!", "Aferin!"][Math.floor(Math.random() * 4)] : "Doğru cevap:";
    const hearts = L.hearts <= 0;
    foot(`<div class="fb">${msg}${!good ? `<small>${esc(correct)}</small>` : ""}${extra ? `<small>${extra}</small>` : ""}</div><button class="btn ${good ? "" : "red"}" id="l-next">${hearts ? "Devam" : "Devam"}</button>`, good ? "ok" : "bad");
    const b = $("#l-next"); b.focus();
    b.addEventListener("click", next);
  }

  function showMC(q, body) {
    const p = el("div", "q-prompt");
    p.innerHTML = `<button class="speak" aria-label="Dinle">🔊</button><div><div class="q-word">${esc(q.prompt)}</div><div class="q-sub">${q.dir === "en2tr" ? posLabel(q.w.pos) : ""}</div></div>`;
    $(".speak", p).addEventListener("click", () => speak(q.w.en));
    body.appendChild(p);
    if (q.dir === "en2tr") speak(q.w.en);
    const wrap = el("div", "opts"); body.appendChild(wrap);
    let chosen = null;
    q.opts.forEach((o) => {
      const b = el("button", "opt", esc(o));
      b.addEventListener("click", () => {
        if (b.disabled) return;
        wrap.querySelectorAll(".opt").forEach((x) => x.classList.remove("sel"));
        b.classList.add("sel"); chosen = o;
        foot(`<button class="btn" id="l-check">Kontrol et</button>`);
        $("#l-check").addEventListener("click", check);
      });
      wrap.appendChild(b);
    });
    foot(`<button class="btn" disabled>Kontrol et</button>`);
    function check() {
      const good = chosen === q.answer;
      wrap.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (x.textContent === q.answer) x.classList.add("ok"); else if (x.classList.contains("sel")) x.classList.add("bad"); x.classList.remove("sel"); });
      if (good) speak(q.w.en);
      resolve(q, good); showFoot(good, q.answer);
    }
  }

  function showListen(q, body) {
    const p = el("div", "q-prompt"); p.style.justifyContent = "center";
    p.innerHTML = `<button class="speak big" aria-label="Dinle">🔊</button>`;
    $(".speak", p).addEventListener("click", () => speak(q.answer));
    body.appendChild(p);
    setTimeout(() => speak(q.answer), 250);
    if (!S.speech || !("speechSynthesis" in window)) {
      // ses yoksa metni göster (alıştırma anlamsız kalmasın)
      body.appendChild(el("div", "muted", "<center><small>Ses kapalı/desteklenmiyor — kelime: <b>" + esc(q.answer) + "</b> kelimesinin anlamını düşün</small></center>"));
    }
    const wrap = el("div", "opts"); body.appendChild(wrap);
    let chosen = null;
    q.opts.forEach((o) => {
      const b = el("button", "opt", esc(o));
      b.addEventListener("click", () => {
        if (b.disabled) return;
        wrap.querySelectorAll(".opt").forEach((x) => x.classList.remove("sel"));
        b.classList.add("sel"); chosen = o;
        foot(`<button class="btn" id="l-check">Kontrol et</button>`);
        $("#l-check").addEventListener("click", check);
      });
      wrap.appendChild(b);
    });
    foot(`<button class="btn" disabled>Kontrol et</button>`);
    function check() {
      const good = chosen === q.answer;
      wrap.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (x.textContent === q.answer) x.classList.add("ok"); else if (x.classList.contains("sel")) x.classList.add("bad"); x.classList.remove("sel"); });
      resolve(q, good); showFoot(good, q.answer, "= " + esc(q.w.tr));
    }
  }

  function showType(q, body) {
    const p = el("div", "q-prompt");
    p.innerHTML = `<div><div class="q-word">${esc(q.prompt)}</div><div class="q-sub">${posLabel(q.w.pos)}</div></div>`;
    body.appendChild(p);
    const inp = el("input", "typebox"); inp.type = "text"; inp.placeholder = "İngilizcesini yaz…";
    inp.autocomplete = "off"; inp.autocapitalize = "off"; inp.spellcheck = false;
    body.appendChild(inp);
    setTimeout(() => inp.focus(), 100);
    const doCheck = () => {
      if (!inp.value.trim()) return;
      // aynı Türkçe anlama sahip eş anlamlılar da kabul edilir (doğru = accurate / correct gibi)
      const ok = new Set(WORDS.filter((x) => x.kind === q.w.kind && x.tr === q.w.tr).map((x) => norm(x.en)));
      ok.add(norm(q.answer));
      const good = ok.has(norm(inp.value));
      inp.disabled = true;
      resolve(q, good); if (good) speak(q.answer); showFoot(good, q.answer);
    };
    foot(`<button class="btn" id="l-check" disabled>Kontrol et</button>`);
    inp.addEventListener("input", () => { $("#l-check").disabled = !inp.value.trim(); });
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { if (!inp.disabled) doCheck(); else next(); } });
    $("#l-check").addEventListener("click", doCheck);
    const skip = el("button", "btn ghost small", "Bilmiyorum"); skip.style.marginTop = "14px";
    skip.addEventListener("click", () => { if (inp.disabled) return; inp.value = "—"; inp.disabled = true; resolve(q, false); showFoot(false, q.answer); });
    body.appendChild(skip);
  }

  function showMatch(q, body) {
    const left = shuffle(q.ws), right = shuffle(q.ws);
    const grid = el("div", "match"); body.appendChild(grid);
    const colL = el("div", "opts"), colR = el("div", "opts");
    grid.appendChild(colL); grid.appendChild(colR);
    let selL = null, selR = null, remaining = q.ws.length, mistakes = 0;
    const mk = (w, side) => {
      const b = el("button", "opt", esc(side === "l" ? w.en : w.tr));
      b.dataset.id = w.id;
      b.addEventListener("click", () => {
        if (b.classList.contains("gone")) return;
        if (side === "l") { selL && selL.classList.remove("sel"); selL = b; speak(w.en); } else { selR && selR.classList.remove("sel"); selR = b; }
        b.classList.add("sel");
        if (selL && selR) {
          if (selL.dataset.id === selR.dataset.id) {
            bump(selL.dataset.id, true);
            const a = selL, c = selR; a.classList.replace("sel", "ok"); c.classList.replace("sel", "ok");
            setTimeout(() => { a.classList.add("gone"); c.classList.add("gone"); }, 250);
            selL = selR = null; remaining--;
            if (remaining === 0) setTimeout(finish, 350);
          } else {
            const a = selL, c = selR; a.classList.replace("sel", "bad"); c.classList.replace("sel", "bad");
            bump(a.dataset.id, false); bump(c.dataset.id, false);
            mistakes++; L.hearts--; setBar();
            selL = selR = null;
            setTimeout(() => { a.classList.remove("bad"); c.classList.remove("bad"); }, 450);
            if (L.hearts <= 0) setTimeout(() => result(false), 500);
          }
        }
      });
      return b;
    };
    left.forEach((w) => colL.appendChild(mk(w, "l")));
    right.forEach((w) => colR.appendChild(mk(w, "r")));
    foot("");
    function finish() {
      L.queue.shift(); L.done++; L.right++; L.xp += 4; if (mistakes) L.wrong += mistakes;
      setBar();
      foot(`<div class="fb">${mistakes ? "Tamamlandı" : "Mükemmel!"}</div><button class="btn" id="l-next">Devam</button>`, "ok");
      $("#l-next").addEventListener("click", next);
    }
  }

  function result(win) {
    const body = $("#l-body"); body.innerHTML = "";
    const acc = L.right + L.wrong ? Math.round((L.right / (L.right + L.wrong)) * 100) : 0;
    let xp = 0;
    if (win) {
      xp = 10 + L.xp + (L.wrong === 0 ? 5 : 0);
      S.xp += xp;
      if (S.last !== today()) { S.streak = S.last === yesterday() ? S.streak + 1 : 1; S.last = today(); }
      const id = L.meta.lessonId;
      if (id) {
        const cur = S.lessons[id] || {};
        S.lessons[id] = { done: true, best: Math.max(cur.best || 0, acc) };
      }
    }
    save();
    body.appendChild(el("div", "result",
      win
        ? `<div class="big">🎉</div><h2>Ders tamamlandı!</h2><div class="muted">${esc(L.meta.title || "")}</div>
           <div class="grid"><div class="box"><small>Toplam XP</small><span style="color:var(--gold)">+${xp}</span></div><div class="box"><small>Doğruluk</small><span style="color:var(--green)">%${acc}</span></div><div class="box"><small>Seri</small><span style="color:var(--red)">${S.streak}🔥</span></div></div>`
        : `<div class="big">💔</div><h2>Canların bitti</h2><div class="muted">Sorun değil, tekrar dene!</div>`));
    foot(`<button class="btn ${win ? "" : "blue"}" id="l-end">${win ? "Devam" : "Tekrar dene"}</button>${win ? "" : `<button class="btn ghost" id="l-quit" style="margin-top:10px">Çık</button>`}`, win ? "ok" : "");
    const lbar = $("#l-bar"); if (lbar) lbar.style.width = win ? "100%" : lbar.style.width;
    $("#l-end").addEventListener("click", () => {
      if (win) endLesson();
      else { const ids = L.ids, meta = L.meta; startLesson(ids, meta); }
    });
    const qb = $("#l-quit"); if (qb) qb.addEventListener("click", () => endLesson());
  }

  /* ============ Başlat ============ */
  updateStats();
  go("home");

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    // basit çevrimdışı destek (isteğe bağlı)
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
