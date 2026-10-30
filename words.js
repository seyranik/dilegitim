/*
  KELİME VERİSİ
  Yeni sayfa eklemek için WORD_SETS dizisinin sonuna yeni bir küme ekle:
  { "id": "benzersiz-id", "title": "Başlık", "kind": "words" | "prep",
    "items": [ ["ingilizce", "tür", "türkçe anlamı"], ... ] }
  kind: "words" -> kelime (yazma/dinleme alıştırması da çıkar)
        "prep"  -> edat kalıbı (sadece çoktan seçmeli/eşleştirme)
*/
window.WORD_SETS = [
  {
    "id": "u3-basics", "title": "Unit 3 · Basics", "kind": "words",
    "items": [
      ["initially","adv","ilk başlarda"],["rapidly","adv","hızlı bir şekilde"],["widely","adv","yaygın olarak"],
      ["particularly","adv","özellikle"],["primarily","adv","esas olarak"],["susceptible","adj","savunmasız"],
      ["almost","adv","neredeyse"],["impact","n","etki | darbe"],["supply","n","kaynak"],["tendency","n","eğilim"],
      ["distinguish","v","ayırt etmek"],["expose","v","ortaya çıkarmak | maruz bırakmak"],["promote","v","teşvik etmek | terfi ettirmek"],
      ["trigger","v","tetiklemek"],["utilize","v","yararlanmak"],["abundant","adj","bol"],["accurate","adj","doğru"],
      ["adequate","adj","yeterli"],["challenging","adj","zorlayıcı"],["compatible","adj","uyumlu"],["ability","n","yetenek"],
      ["advance","n","ilerleme | avans"],["association","n","kuruluş | ilişki"],["accept","v","kabul etmek"],["assess","v","değerlendirmek"],
      ["fairly","adv","oldukça | adil şekilde"],["accordingly","adv","bu doğrultuda"],["incidentally","adv","bu arada"],
      ["rarely","adv","nadiren"],["adequately","adv","yeterli ölçüde"],["restrict","v","sınırlamak"],["consistent","adj","tutarlı"],
      ["sensitive","adj","hassas"],["expression","n","ifade"],["increase","n","artış"],["reference","n","referans"],
      ["eliminate","v","yok etmek | saf dışı bırakmak"],["maintain","v","devam ettirmek | bakım yapmak | iddia etmek"],
      ["competitive","adj","rekabetçi"],["complete","adj","tam"],["essential","adj","gerekli"],["influence","n","etki"],
      ["avoid","v","kaçınmak"],["compete","v","rekabet etmek"],["conduct","n","davranış | yürütme"],["base on","pv","...ya dayandırmak"],
      ["focus on","pv","odaklanmak"],["deal with","pv","başa çıkmak | ...ile ilgili olmak"],["carry out","pv","yapmak"],["result in","pv","...ile sonuçlanmak"]
    ]
  },
  {
    "id": "tw3", "title": "Target Words 3", "kind": "words",
    "items": [
      ["insect","n","böcek"],["colleague","n","iş arkadaşı"],["commonly","adv","yaygın olarak | ortaklaşa"],["degree","n","derece | diploma"],
      ["draw","v","çizmek | çekmek"],["effectively","adv","etkili bir şekilde"],["factory","n","fabrika"],["on the other hand","trans","öte yandan"],
      ["distance","n","mesafe"],["location","n","konum"],["think of","pv","...yapmayı düşünmek | ...hakkında düşünmek"],["extreme","adj","aşırı"],
      ["historian","n","tarihçi"],["instrument","n","çalgı | alet"],["observation","n","gözlem"],["ship","n","gemi"],["constantly","adv","sürekli olarak"],
      ["estimate","v","tahmin etmek"],["philosopher","n","filozof"],["unique","adj","eşsiz"],["agriculture","n","tarım"],["connection","n","bağlantı"],
      ["found","v","kurmak"],["love","n","aşk"],["minute","n","dakika | an"],["network","n","ağ"],["preserve","v","korumak"],["rare","adj","nadir | az pişmiş (et)"],
      ["result from","pv","...dan kaynaklanmak"],["commercial","adj","ticari"],["existence","n","varlık"],["forget","v","unutmak"],["invent","v","icat etmek | uydurmak"],
      ["millions of","q","milyonlarca"],["nor","trans","ne de"],["propose","v","önermek | evlenme teklifi etmek"],["adverse","adj","olumsuz"],
      ["anyone","pron","hiç kimse | herhangi biri"],["beginning","n","başlangıç"],["combine","v","birleştirmek"],["diagnosis","n","teşhis"],
      ["find out","pv","keşfetmek, öğrenmek"],["in addition to","pp","...e ilaveten"],["remarkable","adj","kayda değer"],["wild","adj,n","vahşi, yabani | vahşi doğa"],
      ["childhood","n","çocukluk"],["customer","n","müşteri"],["demonstrate","v","göstermek | gösteri yapmak"],["profit","n","kâr"],["sale","n","satış | indirim"]
    ]
  },
  {
    "id": "tp3", "title": "Target Prepositions 3", "kind": "prep",
    "items": [
      ["to a degree","prep","bir dereceye kadar"],["distance between","prep","...arasındaki mesafe"],["connection with","prep","...ile bağlantı"],
      ["connection between","prep","...arasında bağlantı"],["preserve from","prep","...dan korumak"],["forget about","prep","...yı unutmak"],
      ["combine with","prep","... ile birleştirmek"],["profit from","prep","...dan kâr"],["for sale","prep","satılık"],["on sale","prep","satılık / indirimde"],
      ["indispensable for / to","prep","... için vazgeçilmez"],["responsible for / to","prep","...dan sorumlu"],["sufficient for","prep","... için yeterli"],
      ["benefit from","prep","...dan yarar"],["benefit for / to","prep","... için yarar"],["concern about","prep","... hakkında endişe"],["concern for","prep","...için endişe"],
      ["out of concern","prep","endişeden dolayı"],["provide sth for sb","prep","birine bir şey sağlamak/vermek"],["provide sb with sth","prep","birine bir şey sağlamak/vermek"],
      ["irrelevant to","prep","...ile alakasız"],["demand for","prep","...için talep"],["in demand","prep","talep gören"],["on demand","prep","talep üzerine"],
      ["implication for","prep","... için olası sonuç"],["involvement in","prep","...ya dahil olma / karışma"],["convenient for","prep","... için uygun"]
    ]
  },
  {
    "id": "u4-past", "title": "Unit 4 · Past Tenses", "kind": "words",
    "items": [
      ["efficiently","adv","verimli bir şekilde"],["extensively","adv","kapsamlı bir şekilde"],["heavily","adv","büyük ölçüde"],["immediately","adv","derhal"],
      ["inevitably","adv","kaçınılmaz şekilde"],["profoundly","adv","derinden"],["considerable","adj","kayda değer"],["deterrent","adj","caydırıcı"],
      ["diverse","adj","çeşitli"],["indispensable","adj","vazgeçilmez"],["profitable","adj","kârlı"],["responsible","adj","sorumlu"],["sufficient","adj","yeterli"],
      ["benefit","n","yarar | devlet yardımı"],["combination","n","birleşim | kilit şifresi"],["concern","n","endişe | ilgi"],["consequence","n","sonuç"],
      ["defect","n","kusur"],["deficit","n","eksiklik"],["boost","v","artırmak"],["constitute","v","oluşturmak | teşkil etmek"],["occur","v","meydana gelmek"],
      ["offer","v","teklif etmek | sunmak"],["provide","v","sağlamak"],["raise","v","yükseltmek | yetiştirmek (çocuk vs) | ortaya atmak"],["scarcely","adv","neredeyse hiç"],
      ["previously","adv","önceden"],["properly","adv","düzgünce"],["deliberately","adv","kasten"],["respectively","adv","sırasıyla"],["irrelevant","adj","ilgisiz"],
      ["sustainable","adj","sürdürülebilir"],["exceed","v","aşmak"],["expand","v","genişlemek"],["receive","v","almak"],["resist","v","direnmek"],["threaten","v","tehdit etmek"],
      ["compulsive","adj","istem dışı"],["demand","n","talep"],["distribution","n","dağıtım"],["implication","n","olası sonuç | ima | suça karışma"],["intention","n","niyet"],
      ["involvement","n","katılım"],["convenient","adj","uygun"],["urgent","adj","acil"],["refer to","pv","söz etmek | ifade etmek | göz atmak | havale etmek"],
      ["come from","pv","...dan gelmek"],["suffer from","pv","...dan muzdarip olmak"],["take place","pv","meydana gelmek"],["make up","pv","oluşturmak | uydurmak | telafi etmek | makyaj yapmak | barışmak"]
    ]
  },
  {
    "id": "tw4", "title": "Target Words 4", "kind": "words",
    "items": [
      ["absorb","v","emmek | odaklanmak | kavramak (bilgi)"],["basis","n","temel | ... şekilde"],["exploration","n","keşif"],["numerous","adj","çok sayıda"],
      ["satellite","n","(yapay) uydu"],["worldwide","adj,adv","dünya çapında"],["alter","v","değiştirmek"],["cheap","adj","ucuz"],["dry","adj","kuru"],["express","v","ifade etmek"],
      ["interaction","n","etkileşim"],["rely on","pv","bel bağlamak | güvenmek"],["required","adj","gerekli"],["wonder","v","merak etmek"],["architecture","n","mimarlık | mimari tarz"],
      ["as a result","trans","sonuç olarak"],["communicate","v","iletişim kurmak | (hastalık) bulaştırmak"],["cure","v","tedavi etmek"],["dark","adj","karanlık | ürkütücü"],
      ["fund","n","fon"],["promise","v","söz vermek | gelecek vaat etmek"],["struggle","v","mücadele etmek | dövüşmek"],["winter","n","kış mevsimi"],["crime","n","suç"],
      ["map","n","harita"],["obvious","adj","bariz"],["speaker","n","konuşmacı | hoparlör"],["sunlight","n","güneş ışığı"],["top","n","tepe | kapak"],["traffic","n","trafik | kaçakçılık"],
      ["weapon","n","silah"],["dam","n","baraj"],["elderly","adj","ihtiyar"],["given that","conj","...i düşünürsek"],["intake","n","alım"],["male","adj,n","erkek"],["evolve","v","evrilmek"],
      ["exchange","n","değiş tokuş | diyalog"],["phenomenon","n","olgu | fenomen"],["slowly","adv","yavaşça"],["wall","n","duvar"],["whenever","conj","her ne zaman ...sa"],
      ["summer","n","yaz mevsimi"],["whale","n","balina"],["content","n","içerik"],["currently","adv","şu anda"],["extinction","n","nesli tükenme"],["health care","n","sağlık hizmeti"],
      ["neither ... nor","corr","ne... ne de..."],["ordinary","adj","sıradan"]
    ]
  },
  {
    "id": "tp4", "title": "Target Prepositions 4", "kind": "prep",
    "items": [
      ["on a ... basis","prep","... bir şekilde"],["interaction with","prep","... ile etkileşim"],["interaction between","prep","... arasında etkileşim"],["wonder about","prep","...yı merak etmek"],
      ["communicate with","prep","...ile iletişim kurmak"],["struggle with","prep","...ile mücadele etmek"],["struggle against","prep","...ya karşı mücadele etmek"],["on display","prep","sergide, gösterimde"],
      ["evidence for","prep","... için kanıt"],["susceptibility to","prep","...ya karşı hassasiyet"],["vary from ... to ...","prep","...dan ...ya değişiklik göstermek"],["vary in","prep","...bakımından değişiklik göstermek"],
      ["beneficial to / for","prep","...ya faydalı"],["in common","prep","ortak"],["in abundance","prep","bol olarak, bol bol"],["access to","prep","...ya erişim"],["access for","prep","(birisi) için erişim"],
      ["admire for","prep","...için hayranlık duymak"],["allocate to","prep","...ya tahsis etmek"],["cite as","prep","... olarak belirtmek"],["resistance to","prep","...ya karşı direnç"],
      ["admission to","prep","...ya giriş, kabul"],["detrimental to","prep","...ya zararlı"]
    ]
  },
  {
    "id": "u5-future", "title": "Unit 5 · Future Tenses", "kind": "words",
    "items": [
      ["relatively","adv","nispeten"],["usually","adv","genellikle"],["immense","adj","muazzam"],["apparently","adv","görünüşte"],["considerably","adv","bir hayli"],["entirely","adv","tamamen"],
      ["especially","adv","özellikle"],["firmly","adv","sıkıca"],["display","n","sergi | gösteri | bilgisayar ekranı"],["evidence","n","kanıt"],["susceptibility","n","hassasiyet"],
      ["recognize","v","tanımak | takdir etmek"],["vary","v","çeşitlilik göstermek"],["beneficial","adj","yararlı"],["common","adj","yaygın | ortak"],["compelling","adj","inandırıcı | heyecan verici"],
      ["distinct","adj","farklı"],["distinctive","adj","ayırt edici"],["abundance","n","bolluk"],["access","n","erişim"],["adoption","n","evlat edinme | benimseme"],["admire","v","hayran olmak"],
      ["allocate","v","tahsis etmek"],["appear","v","ortaya çıkmak | ... gibi görünmek"],["cite","v","bahsetmek | mahkemeye çağırmak"],["randomly","adv","rastgele"],["vaguely","adv","belirsiz bir şekilde"],
      ["doubtfully","adv","şüpheyle"],["likely","adv","muhtemelen"],["precisely","adv","tam olarak"],["obligation","n","zorunluluk"],["release","n","serbest bırakma | salınım | piyasaya çıkarma"],
      ["resistance","n","direnç"],["restriction","n","kısıtlama"],["abandon","v","terk etmek"],["claim","v","iddia etmek | talep etmek | canını almak"],["destroy","v","yok etmek"],
      ["deteriorate","v","kötüleşmek"],["disturb","v","rahatsız etmek"],["admission","n","giriş | kabul etme"],["ambiguous","adj","belirsiz"],["comprehensive","adj","kapsamlı"],
      ["detrimental","adj","zararlı"],["elaborate","adj","teferruatlı"],["fragile","adj","kırılgan"],["benefit from","pv","...dan yararlanmak"],["give up","pv","bırakmak | pes etmek"],
      ["search for","pv","aramak"],["turn out","pv","... olduğu ortaya çıkmak | bir araya gelmek"],["break down","pv","bozulmak | parçalanmak | kendini tutamayıp ağlamak"]
    ]
  },
  {
    "id": "tw5", "title": "Target Words 5", "kind": "words",
    "items": [
      ["particle","n","parçacık | edat"],["survival","n","hayatta kalma"],["unfortunately","adv","maalesef"],["whom","pron","kimi, kime?"],["marine","adj","deniz ile ilgili"],
      ["undergo","v","maruz kalmak"],["vehicle","n","taşıt"],["appearance","n","dış görünüş | ortaya çıkma"],["compound","n","bileşik"],["construct","v","inşa etmek"],["contrary to","pp","...nın aksine"],
      ["court","n","mahkeme | kort | saray"],["below","prep,adv","...nın altında"],["hair","n","saç | kıl"],["inside","prep,adv","... içinde, içine"],
      ["strike","v","çarpmak | etkilemek (afet vb) | grev yapmak | saldırmak"],["trait","n","özellik"],["charge","n","ücret | sorumluluk | suçlama | şarj"],["complicated","adj","karmaşık"],
      ["concentrate","v","odaklanmak"],["ill","adj","hasta | kötü"],["invest","v","yatırım yapmak"],["legal","adj","yasal"],["settle","v","halletmek | yerleşmek | yatışmak"],["user","n","kullanıcı"],
      ["wealth","n","zenginlik"],["check","v","kontrol etmek | işaretlemek"],["creative","adj","yaratıcı"],["efficiency","n","verimlilik"],["harm","n","zarar"],["imagine","v","hayal etmek | sanmak"],
      ["manner","n","tavır | biçim"],["nevertheless","trans","yine de"],["think about","pv","...hakkında düşünmek | ... yapmayı düşünmek"],["account for","pv","oluşturmak"],["electric","adj","elektrikli"],
      ["increasing","adj","artan"],["internal","adj","iç"],["none","q","hiç"],["original","adj","orijinal"],["practical","adj","pratik"],["closely","adv","yakından"],["entire","adj","bütün"],
      ["foot","n","ayak | fit (ölçü birimi)"],["respect","n","saygı | özellik"],["appreciate","v","takdir etmek | farkına varmak"],["concerned","adj","endişeli | ilgili"],["everyday","adj","günlük"],
      ["inspire","v","ilham vermek"],["northern","adj","kuzey"]
    ]
  },
  {
    "id": "tp5", "title": "Target Prepositions 5", "kind": "prep",
    "items": [
      ["charge for","prep","... için ücret"],["in charge","prep","yetkili, sorumlu"],["concentrate on","prep","...ya odaklanmak"],["invest in","prep","...ya yatırım yapmak"],["harm to","prep","...ya zarar"],
      ["harm from","prep","...dan zarar"],["in a ... manner","prep","... bir şekilde, biçimde"],["respect for","prep","... için saygı"],["out of respect","prep","saygıdan"],["concerned for","prep","... için endişeli"],
      ["concerned about / over","prep","... konuda endişeli"],["concerned with","prep","...ile ilgili"],["gap between","prep","...arasındaki boşluk, fark"],["growth in","prep","...da büyüme, gelişme"],
      ["explanation for","prep","...için açıklama"],["invisible to","prep","...ya görünmez"],["impression on / upon","prep","... üzerindeki izlenim, etki"],["expenditure for","prep","...için harcama"],
      ["expenditure on","prep","...ya harcama"],["explain about","prep","... hakkında açıklama yapmak"],["notorious for","prep","...ile ünlü, meşhur"],["extend to","prep","...ya kadar uzanmak"],
      ["extend beyond","prep","... ötesine uzanmak"],["involve in","prep","...ya dahil olmak/karışmak"],["approach to","prep","...ya yaklaşım"],["complaint about","prep","...konuda şikayet"],
      ["applicable to","prep","...ya uygulanabilir"],["confident about","prep","... hakkında emin"]
    ]
  },
  {
    "id": "u7-modals", "title": "Unit 7 · Modals", "kind": "words",
    "items": [
      ["gap","n","boşluk | fark"],["continually","adv","devamlı olarak"],["abundantly","adv","bol bol"],["clearly","adv","açık bir şekilde"],["growth","n","büyüme"],["precise","adj","tam, eksiksiz"],
      ["explanation","n","açıklama"],["invisible","adj","görünmez"],["impression","n","izlenim"],["embark","v","(gemiye) binmek"],["emit","v","(gaz, ısı, ışık vb.) yaymak"],["expenditure","n","harcama"],
      ["explain","v","açıklamak"],["enormously","adv","son derece"],["notorious","adj","kötü şöhretli"],["inseparable","adj","ayrılmaz"],["disrupt","v","bozmak"],["inevitable","adj","kaçınılmaz"],
      ["flow","v","akmak"],["encompass","v","kapsamak"],["potential","adj","potansiyel"],["consistently","adv","tutarlı bir şekilde"],["drastically","adv","büyük ölçüde"],
      ["establishment","n","ticari kuruluş | kuruluş"],["extend","v","uzatmak | kapsamak"],["sustain","v","sürdürmek"],["sensitively","adv","hassasiyetle"],["attempt","v","teşebbüs etmek"],
      ["delay","v","ertelemek | geciktirmek"],["enforce","v","zorla kabul ettirmek"],["involve","v","içermek | gerektirmek"],["vague","adj","belirsiz"],["already","adv","çoktan"],
      ["coincidentally","adv","tesadüfen"],["equally","adv","eşit şekilde"],["excessively","adv","aşırı derecede"],["approach","n","yaklaşım | yaklaşma"],["complaint","n","şikayet"],
      ["determination","n","kararlılık"],["elimination","n","ortadan kaldırma"],["exclusion","n","hariç tutma"],["applicable","adj","uygulanabilir"],["confident","adj","kendinden emin"],
      ["considerate","adj","düşünceli"],["current","adj","güncel"],["apply to","pv","başvurmak | uygulamak"],["take to","pv","...ya götürmek | ...ya başlamak | hoşlanmaya başlamak"],
      ["take over","pv","devralmak"],["engage in","pv","katılmak"],["date back","pv","bir tarihe dayanmak"]
    ]
  },
  {
    "id": "tw6", "title": "Target Words 6", "kind": "words",
    "items": [
      ["as far as","conj","...dığı kadarıyla"],["seed","n","tohum"],["survey","n","anket | araştırma"],["trend","n","eğilim"],["earn","v","(para) kazanmak | hak etmek"],["in particular","adv","özellikle"],
      ["peace","n","barış | huzur"],["recover","v","iyileşmek"],["rural","adj","kırsal"],["scholar","n","alim"],["sort","n","tür"],["suppose","v","sanmak"],["visual","adj","görsel"],["citizen","n","vatandaş"],
      ["cook","v","pişirmek"],["left","adj,n","sol"],["previous","adj","önceki"],["recommend","v","tavsiye etmek"],["southern","adj","güney"],["vision","n","görme yeteneği | vizyon"],
      ["whatever","pron","her ne"],["besides","prep,trans","...e ilaveten | ayrıca"],["campaign","n","kampanya | (askeri) sefer"],["correct","adj","doğru"],["ear","n","kulak | başak"],
      ["import","n","ithalat"],["interview","n","mülakat | röportaj"],["letter","n","mektup | harf"],["monitor","n","monitör | ölçüm cihazı | denetçi"],["salt","n","tuz"],
      ["set up","pv","kurmak | ayarlamak | oyuna getirmek"],["wait","v","beklemek"],["even so","trans","öyle bile olsa"],["in addition","trans","ayrıca"],["succeed","v","başarmak | sonrasında gelmek"],
      ["thousand","num","bin"],["transform","v","dönüşmek"],["trouble","n","sorun"],["advise","v","tavsiye vermek"],["attend","v","katılmak | dikkatini vermek"],["following","adj","sonraki"],
      ["fundamental","adj","temel"],["gold","adj,n","altın"],["presence","n","(bir yerde) bulunma"],["religious","adj","dinî"],["sophisticated","adj","gelişmiş | kültürlü"],["weak","adj","zayıf"],
      ["criticize","v","eleştirmek"],["director","n","yönetici | yönetmen"],["drag","v","sürüklemek"]
    ]
  },
  {
    "id": "tp6", "title": "Target Prepositions 6", "kind": "prep",
    "items": [
      ["trend towards","prep","...ya doğru eğilim"],["trend in","prep","...de eğilim"],["in peace","prep","huzur içinde"],["recover from","prep","...dan kurtulmak, iyileşmek"],["recommend for","prep","... için tavsiye etmek"],
      ["campaign against","prep","...ya karşı kampanya"],["campaign for","prep","...için kampanya"],["import from","prep","...dan ithalat"],["interview with","prep","...ile röportaj / mülakat"],["wait for","prep","...yı beklemek"],
      ["succeed in","prep","...da başarılı olmak"],["transform from","prep","...dan dönüşmek"],["transform into","prep","...ya dönüşmek"],["in trouble","prep","başı belada"],["trouble with","prep","...ile sorun"],
      ["advise on / about","prep","... konuda tavsiye vermek"],["criticize for","prep","...için eleştirmek"],["progress in","prep","...daki ilerleme"],["progress towards","prep","...ya doğru ilerleme"],
      ["in progress","prep","devam etmekte"],["react to","prep","...ya tepki göstermek"],["priority over","prep","... üzerinde öncelik"],["with precision","prep","hassasiyetle"],
      ["range from ... to ...","prep","... ile ... arasında değişmek"],["widespread among","prep","...arasında yaygın"],["uncertain about","prep","...hakkında kararsız"],["solution for","prep","... için çözüm"],
      ["solution to","prep","...ya çözüm"],["exclude from","prep","...dan hariç tutmak"],["peculiar to","prep","...ya özgü"]
    ]
  },
  {
    "id": "u9-verbal", "title": "Unit 9 · Verbal", "kind": "words",
    "items": [
      ["progress","n","ilerleme"],["regularly","adv","düzenli olarak"],["uniquely","adv","eşsiz olarak"],["proliferation","n","çoğalma"],["require","v","gerektirmek"],["unreliable","adj","güvenilmez"],
      ["react","v","tepki göstermek"],["priority","n","öncelik"],["subsequently","adv","sonradan"],["remain","v","kalmak"],["progressively","adv","gittikçe"],["substantial","adj","epey | dayanıklı"],
      ["process","n","süreç | işlem"],["precision","n","hassaslık"],["unlikely","adj","mümkün olmayan"],["objective","n","hedef"],["predict","v","tahmin etmek"],["range","v","... arasında değişmek"],
      ["remarkably","adv","dikkat çekecek şekilde"],["widespread","adj","yaygın"],["launch","v","fırlatma | açılış"],["uncertain","adj","belirsiz"],["acutely","adv","ciddi şekilde"],["abrupt","adj","ani"],
      ["absolutely","adv","kesinlikle"],["rejection","n","ret"],["solution","n","çözüm | çözelti"],["violate","v","ihlal etmek"],["regulation","n","düzenleme"],["surpass","v","üstün gelmek"],
      ["exclude","v","dahil etmemek"],["result","n","sonuç"],["undermine","v","baltalamak"],["conclusively","adv","kesin olarak"],["reversible","adj","tersine çevrilebilir"],["reasonable","adj","makul"],
      ["recurrent","adj","tekrarlayan"],["cautiously","adv","dikkatlice"],["conversely","adv","aksine"],["alteration","n","değiştirme"],["predictable","adj","tahmin edilebilir"],
      ["conventionally","adv","geleneksel olarak"],["commit","v","suç işlemek | adamak"],["peculiar","adj","tuhaf | özgü"],["decisively","adv","kararlı bir şekilde"],["work for","pv","...da çalışmak"],
      ["divide into","pv","...ya bölmek"],["make sure","pv","...dan emin olmak"],["turn to","pv","yardımını istemek | ...ya yönelmek"],["belong to","pv","ait olmak"]
    ]
  },
  {
    "id": "tw7", "title": "Target Words 7", "kind": "words",
    "items": [
      ["dramatic","adj","çarpıcı | tiyatroyla ilgili"],["economics","n","iktisat"],["mammal","n","memeli"],["transmit","v","iletmek | bulaştırmak"],["disappear","v","ortadan kaybolmak"],
      ["hundreds of","q","yüzlerce"],["official","adj","resmi"],["poverty","n","yoksulluk"],["sample","n","örnek"],["characterize","v","simgesi olmak"],["independence","n","bağımsızlık"],["lifestyle","n","yaşam tarzı"],
      ["primitive","adj","ilkel"],["careful","adj","dikkatli"],["conclude","v","sonuçlandırmak"],["era","n","çağ"],["listen","v","dinlemek"],["mouth","n","ağız"],["poet","n","şair"],["press","n","basın"],
      ["room","n","oda | alan"],["unknown","adj,n","bilinmeyen"],["warn","v","uyarmak"],["a series of","q","bir dizi ..."],["away from","prep","...dan uzak"],["feed","v","beslemek"],["fibre","n","lif"],
      ["journalist","n","gazeteci"],["prosperity","n","refah"],["root","n","kök"],["worry","v","endişelenmek"],["address","n","adres | resmi konuşma"],["border","n","sınır"],["brother","n","erkek kardeş"],
      ["immigrant","n","göçmen"],["in that","conj","...mesi bakımından"],["massive","adj","muazzam"],["regarding","prep","... ile ilgili"],["shopping","n","alışveriş"],["side effect","n","yan etki"],
      ["critic","n","eleştirmen"],["eruption","n","patlama (yanardağ)"],["facility","n","tesis | beceri"],["finding","n","bulgu | hüküm"],["fit","v","uymak | takmak | uygun olmak"],["fresh","adj","taze | ferah | yeni"],
      ["globalization","n","küreselleşme"],["intellectual","adj,n","entelektüel"],["minister","n","bakan"],["nerve","n","sinir | asap | cesaret"]
    ]
  },
  {
    "id": "tp7", "title": "Target Prepositions 7", "kind": "prep",
    "items": [
      ["disappear from","prep","...dan kaybolmak"],["in poverty","prep","yoksulluk içinde"],["to be characterized by","prep","... ile nitelenmek / tanımlanmak"],["independence from","prep","...dan bağımsızlık"],
      ["careful about","prep","...konusunda dikkatli"],["careful with","prep","...konusunda dikkatli"],["listen to","prep","...yı dinlemek"],["unknown to","prep","... tarafından bilinmeyen"],["warn about","prep","... konusunda uyarmak"],
      ["warn against","prep","...ya karşı uyarmak"],["feed on","prep","... ile beslenmek"],["worry about","prep","...hakkında endişelenmek"],["along the border","prep","sınır boyunca"],["immigrant from","prep","...dan göçmen"],
      ["immigrant to","prep","...ya göç eden"],["finding about","prep","... hakkında bulgu"],["threat to","prep","...ya tehdit"],["under threat","prep","tehdit altında"],["threat from","prep","...dan tehdit"],
      ["seek for","prep","...yı aramak, istemek"],["task for","prep","...için görev"],["survive from","prep","...dan sağ çıkmak"]
    ]
  },
  {
    "id": "u10-active", "title": "Unit 10 · Active & Passive", "kind": "words",
    "items": [
      ["sensation","n","his, sansasyon"],["threat","n","tehdit"],["seek","v","aramak, ...yapmaya çalışmak"],["task","n","görev"],["utilization","n","kullanım"],["survive","v","hayatta kalmak"],
      ["view","v","görmek, seyretmek"],["settlement","n","antlaşma, yerleşim alanı"],["time","n","zaman, defa"],["stimulate","v","harekete geçirmek"],["proximity","n","yakınlık"],["adult","adj","yetişkin"],
      ["comparatively","adv","nispeten"],["confidentially","adv","gizli bir şekilde"],["annual","adj","yıllık"],["admittedly","adv","kabul etmek gerekir ki ..."],["accomplish","v","başarmak"],["affordable","adj","makul fiyatlı"],
      ["conscientiously","adv","titizlikle"],["attractive","adj","çekici"],["abolish","v","(yürürlükten) kaldırmak"],["anxious","adj","endişeli, çok istekli"],["approximately","adv","yaklaşık olarak"],
      ["advisory","adj","tavsiye niteliğinde"],["chiefly","adv","esas olarak"],["various","adj","çeşitli"],["diminish","v","azalmak"],["ever","adv","şimdiye kadar (hiç)"],["opportunity","n","fırsat"],["separate","adj","ayrı"],
      ["complain","v","şikayet etmek"],["obstacle","n","engel"],["mutually","adv","karşılıklı olarak"],["expansion","n","genişleme"],["severe","adj","ciddi"],["temporary","adj","geçici"],["conceal","v","gizlemek"],
      ["deliver","v","teslim etmek, doğum yapmak"],["externally","adv","dıştan"],["occasionally","adv","ara sıra"],["conflict","n","anlaşmazlık, çatışma"],["instantly","adv","anında"],["convert","v","dönüştürmek"],
      ["prediction","n","tahmin"],["controversial","adj","tartışmalı"],["be concerned about","pv","... konuda endişeli olmak"],["grow up","pv","büyümek"],["pay attention to","pv","...ya dikkat etmek"],
      ["turn into","pv","dönüşmek"],["look like","pv","... gibi görünmek"]
    ]
  },
  {
    "id": "tp10", "title": "Unit 10 · Prepositions", "kind": "prep",
    "items": [
      ["survive on","prep","... ile hayatta kalmak"],["view as","prep","...olarak görmek"],["on time","prep","vaktinde"],["in time","prep","zamanla, vaktinde"],["at that time","prep","o zamanda"],
      ["over time","prep","zamanla, zaman içerisinde"],["proximity to","prep","...ya yakınlık"],["attractive for","prep","... için cazip"],["anxious for","prep","...için çok istekli"],["anxious about","prep","...konusunda endişeli"],
      ["opportunity for","prep","...için fırsat"],["separate from","prep","...dan ayrı"],["complain about","prep","...konuda şikayet etmek"],["obstacle for","prep","...için engel"],["obstacle to","prep","...ya engel / ...nın önündeki engel"],
      ["conceal from","prep","...dan gizlemek"],["deliver to","prep","...ya teslim etmek"],["conflict with","prep","...ile çatışma"],["conflict over","prep","... üzerine anlaşmazlık"],["conflict between","prep","... arasındaki çatışma"],
      ["convert from","prep","...dan dönüştürmek"],["convert to / into","prep","...ya dönüştürmek"]
    ]
  },
  {
    "id": "tw8", "title": "Target Words 8", "kind": "words",
    "items": [
      ["perception","n","algı"],["regardless of","pp","...e bakmaksızın"],["steel","n","çelik"],["tiny","adj","küçücük"],["carefully","adv","dikkatlice"],["dietary","adj","beslenmeyle ilgili"],
      ["existing","adj","mevcut"],["investigate","v","araştırmak"],["sky","n","gökyüzü"],["treaty","n","antlaşma"],["wear","v","giymek"],["worth","adj","... değerinde"],["ban","v","yasaklamak"],
      ["deserve","v","hak etmek"],["holiday","n","tatil"],["kidney","n","böbrek"],["lead","v","öncülük etmek"],["medieval","adj","Orta Çağ"],["noise","n","gürültü"],["option","n","seçenek"],["repair","v","onarmak"],
      ["successfully","adv","başarılı bir şekilde"],["wage","n","maaş"],["encounter","v","karşılaşmak"],["freedom","n","özgürlük"],["nervous","adj","gergin | sinirsel"],["owing to","pp","...den dolayı"],
      ["stem cell","n","kök hücre"],["unusual","adj","sıra dışı"],["employed","adj","çalışan"],["familiar","adj","aşina"],["human being","n","insanoğlu"],["orbit","n","yörünge"],["suspect","v","şüphelenmek"],
      ["witness","n","şahit"],["afford","v","parası yetmek"],["along with","prep","... ile birlikte"],["changing","adj","değişen"],["criminal","n","suçlu"],["educational","adj","eğitimsel"],["equal","adj","eşit"],
      ["flower","n","çiçek"],["gravity","n","yer çekimi | ciddiyet"],["host","n","ev sahibi | sunucu | konakçı (biyoloji)"],["prize","n","ödül"],["village","n","köy"],["architect","n","mimar"],
      ["as well","adv","ayrıca"],["deal","v","uyuşturucu satmak"],["hit","v","vurmak, çarpmak"]
    ]
  },
  {
    "id": "tp8", "title": "Target Prepositions 8", "kind": "prep",
    "items": [
      ["worthy of","prep","...ya layık/değer"],["ban from","prep","...dan yasaklamak"],["deserve for","prep","... için hak etmek"],["on holiday","prep","tatilde"],["option for","prep","... için seçenek"],
      ["freedom from","prep","... özgürlüğü"],["nervous about","prep","...konusunda gergin"],["familiar with","prep","...ya aşina"],["orbit around","prep","... etrafında yörünge"],
      ["suspect sb of doing sth","prep","birinin bir şey yaptığından şüphelenmek"],["witness to","prep","...ya şahit"],["equal to","prep","...ya eşit"],["host to","prep","...ya ev sahibi"],["prize for","prep","... için ödül"],
      ["with accuracy","prep","isabetle"],["cautious about","prep","... hakkında dikkatli"],["absence from","prep","...ya gitmeme, orada bulunmama"],["acknowledge as","prep","... olarak kabul etmek"],
      ["accustom to","prep","kendini ...ya alıştırmak"],["adjust to","prep","...ya uyum sağlamak"],["recovery from","prep","...dan kurtulma, iyileşme"],["beyond recovery","prep","iyileşemeyecek kadar/derecede"],
      ["treatment for","prep","...için tedavi"],["restrain from","prep","...dan alıkoymak"],["hazardous for / to","prep","... için tehlikeli"],["approve of","prep","...yı onaylamak"]
    ]
  },
  {
    "id": "u11-cond", "title": "Unit 11 · Conditionals", "kind": "words",
    "items": [
      ["accuracy","n","doğruluk"],["cautious","adj","dikkatli"],["acquisition","n","edinim"],["attributable","adj","atfedilebilir"],["continuously","adv","aralıksız"],["accumulate","v","biriktirmek"],
      ["absence","n","(bir yerde) bulunmama"],["acknowledge","v","kabul etmek"],["acceleration","n","hızlanma"],["accustom","v","alıştırmak"],["brilliant","adj","çok akıllı | çok iyi | parlak"],
      ["accumulation","n","birikim"],["abolition","n","(yürürlükten) kaldırma"],["distinctly","adv","farklı bir biçimde"],["densely","adv","yoğun olarak"],["evenly","adv","eşit şekilde"],["achieve","v","başarmak"],
      ["brief","adj","kısa"],["adjust","v","ayarlamak | alışmak"],["coherent","adj","tutarlı"],["commonplace","adj","sıradan"],["desperately","adv","çaresizce | son derece"],["assign","v","görevlendirmek"],
      ["conveniently","adv","uygun olarak"],["affect","v","etkilemek"],["offensively","adv","kırıcı bir biçimde"],["temporarily","adv","geçici olarak"],["urgently","adv","acilen"],["recovery","n","iyileşme"],
      ["support","n","destek"],["treatment","n","tedavi | muamele"],["violation","n","ihlal"],["fulfil","v","yerine getirmek"],["restrain","v","kısıtlamak"],["convertible","adj","dönüştürülebilen | çevrilebilir (döviz)"],
      ["deceptive","adj","aldatıcı"],["delicate","adj","kırılgan"],["desperate","adj","çaresiz | krizi tutmuş | vahim"],["hazardous","adj","tehlikeli"],["alternatively","adv","alternatif olarak"],
      ["consecutively","adv","ardışık bir şekilde"],["adjustment","n","ayarlama | uyum sağlama"],["approve","v","onaylamak"],["compel","v","zorlamak"],["deceive","v","kandırmak"],["attribute to","pv","...ya atfetmek"],
      ["pay for","pv","cezasını çekmek"],["be made up of","pv","...dan oluşmak"],["take up","pv","almak (zaman, yer) | başlamak"],["call for","pv","gerektirmek | birini gidip almak"]
    ]
  }
];
