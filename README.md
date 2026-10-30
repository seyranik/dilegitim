# YDS Kelime

YDS-YÖKDİL Extreme kitabındaki kelime ve edat kalıpları için Duolingo tarzı çalışma uygulaması.
Sunucu gerekmez; düz HTML/CSS/JS.

## GitHub Pages'te yayınlama

1. github.com'da yeni bir repo aç (ör. `yds-kelime`, Public).
2. Bu klasördeki tüm dosyaları (`index.html`, `style.css`, `app.js`, `words.js`, `sw.js`) repoya yükle
   ("Add file → Upload files").
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
4. 1-2 dakika sonra adres: `https://KULLANICI-ADIN.github.io/yds-kelime/`

Telefonda tarayıcı menüsünden "Ana ekrana ekle" dersen uygulama gibi açılır.

## Yeni kelime ekleme

`words.js` içindeki `WORD_SETS` dizisine yeni bir küme ekle:

```js
{
  "id": "tw9", "title": "Target Words 9", "kind": "words",
  "items": [
    ["perception", "n", "algı"],
    ["tiny", "adj", "küçücük"]
  ]
}
```

- `kind`: `"words"` (kelime) veya `"prep"` (edat kalıbı).
- Birden fazla anlamı ` | ` ile ayır.
- `id` benzersiz olmalı. Mevcut kümelerin sırasını/kimliğini değiştirme, yoksa ilerlemen karışır.
- Değişiklikten sonra dosyayı GitHub'a yeniden yükle.

İlerleme (XP, seri, kelime puanları) tarayıcının `localStorage`'ında tutulur; cihazlar arası senkron olmaz.
