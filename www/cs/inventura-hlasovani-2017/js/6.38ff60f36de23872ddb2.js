webpackJsonp([6,9,12,14,15],{110:function(o,e,n){var t=n(111);"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);n(30)("b2016b6c",t,!0)},111:function(o,e,n){e=o.exports=n(29)(void 0),e.push([o.i,".q-list+.q-list[data-v-275227b8]{margin-top:0}.selection[data-v-275227b8]{max-width:992px;margin-left:auto;margin-right:auto;min-height:calc(100vh - 56px)}.next-button[data-v-275227b8]{margin:20px}.upper-text[data-v-275227b8]{padding:20px}",""])},112:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(57),a=n.n(t),i=n(53),s=n.n(i),r=n(31),l=n.n(r),c=n(32),d=n.n(c),p=n(1);e.default={data:function(){for(var o={},e=0;e<s.a.length;e++)o[s.a[e].id]=!1;var n={};for(var t in s.a){var a=s.a[t];Math.abs(this.$store.state.answers[parseInt(a.id)])>0?n[a.id]=!0:n[a.id]=!1}return{questions:s.a,answered:n,checked:o,ok:!0}},methods:{addChecked:function(){this.checked.push({question_id:!1})},storeWeights:function(){this.$store.commit("storeWeights",this.checked)},goResults:function(){this.$router.push({path:"/results",query:{q:a()(this.$store.state.answers),w:a()(this.$store.state.weights)}})}},mounted:function(){for(var o in this.checked)this.$store.state.weights[o]&&(this.checked[o]=!0)},components:{"component-header":l.a,"component-footer":d.a,QLayout:p.p,QList:p.q,QItem:p.k,QItemSide:p.n,QItemMain:p.l,QCheckbox:p.h,QItemTile:p.o,QBtn:p.c}}},113:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("q-layout",{ref:"layout",attrs:{view:"hHr lpr fFf"}},[n("component-header"),o._v(" "),n("div",{staticClass:"selection"},[n("h4",[o._v("\n            Vyberte otázky, které jsou pro vás extra důležité:\n        ")]),o._v(" "),n("q-btn",{staticClass:"full-width next-button",attrs:{big:"",outline:"",color:"tertiary"},on:{click:function(e){o.goResults()}}},[o._v("\n            > Přeskočit >\n        ")]),o._v(" "),o._l(o.questions,function(e){return o.answered[e.id]?n("q-list",{key:e.id,attrs:{link:""}},[n("q-item",{staticClass:"selection-row col-md-8",attrs:{question:e,tag:"label"}},[n("q-item-side",[n("q-checkbox",{on:{change:function(e){o.storeWeights()}},model:{value:o.checked[e.id],callback:function(n){var t=o.checked,a=e.id;Array.isArray(t)?t.splice(a,1,n):o.checked[e.id]=n},expression:"checked[question.id]"}})],1),o._v(" "),n("q-item-main",[n("q-item-tile",{attrs:{label:""}},[o._v("\n                         "+o._s(e.name)+"\n                     ")]),o._v(" "),n("q-item-tile",{attrs:{sublabel:""}},[o._v("\n                         "+o._s(e.question)+"\n                     ")])],1)],1)],1):o._e()}),o._v(" "),n("q-btn",{staticClass:"full-width next-button",attrs:{big:"",outline:"",color:"positive"},on:{click:function(e){o.goResults()}}},[o._v("\n            > Výsledek >\n        ")])],2),o._v(" "),n("component-footer")],1)},staticRenderFns:[]}},114:function(o,e,n){var t=n(115);"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);n(30)("051a3962",t,!0)},115:function(o,e,n){e=o.exports=n(29)(void 0),e.push([o.i,".h2[data-v-0f40435d]{font-size:2em;border-left:5px solid #027be3;padding:0 20px}@media (max-width:576px){.h2[data-v-0f40435d]{font-size:1.5em;padding:0;border-left:0}}.wider[data-v-0f40435d]{border:0;bottom:50px;margin:0}",""])},116:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(1);e.default={props:["question"],data:function(){return{value:0,answs:{0:!1,1:!1,"-1":!1}}},methods:{addAnswer:function(o){var e=this,n={key:this.question.id,value:o};this.$store.commit("addAnswer",n);for(var t=-1;t<=1;t++)this.answs[t.toString()]=!1;this.answs[o.toString()]=!0,setTimeout(function(){e.$emit("next")},250)}},components:{QList:t.q,QItem:t.k,QBtn:t.c}}},117:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("div",{staticClass:"inner lr-padding"},[n("div",[n("h2",{staticClass:"h2"},[o._v(o._s(o.question.question))]),o._v(" "),n("p",[o._v(o._s(o.question.description))])]),o._v(" "),n("q-list",{staticClass:"row wider"},[n("q-item",{staticClass:"col-sm-3"}),o._v(" "),n("q-item",{staticClass:"col-md-2 col-xs-4"},[n("q-btn",{staticClass:"full-width",class:{"bg-positive":o.answs[1],"text-white":o.answs[1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(e){o.addAnswer(1)}}},[o._v("ANO")])],1),o._v(" "),n("q-item",{staticClass:"col-md-2 col-xs-4"},[n("q-btn",{staticClass:"full-width",class:{"bg-positive":o.answs[-1],"text-white":o.answs[-1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(e){o.addAnswer(-1)}}},[o._v("NE")])],1),o._v(" "),n("q-item",{staticClass:"col-md-2 col-xs-4"},[n("q-btn",{staticClass:"full-width smaller",class:{"bg-tertiary":o.answs[0],"text-white":o.answs[0]},attrs:{color:"tertiary",big:"",outline:""},on:{click:function(e){o.addAnswer(0)}}},[n("span",[o._v("nevím ")]),n("span",{staticClass:"gt-md"},[o._v(" / je mi to jedno")])])],1)],1)],1)},staticRenderFns:[]}},195:function(o,e,n){var t=n(196);"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);n(30)("eadf1cf8",t,!0)},196:function(o,e,n){e=o.exports=n(29)(void 0),e.push([o.i,"body{font-size:15px}.smaller{font-size:.75em}.bg-positive,.bg-tertiary{border:1px solid}.lr-padding{padding-left:52px;padding-right:52px}.q-carousel-inner{height:calc(100vh - 56px)}.q-carousel-left-button,.q-carousel-right-button{max-height:calc(100vh - 64px)}.q-progress{height:8px}",""])},197:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(53),a=n.n(t),i=n(4),s=n.n(i),r=n(31),l=n.n(r),c=n(34),d=n.n(c),p=n(1),v=n(35);e.default={data:function(){return{questions:a.a,settings:s.a,progress:50}},methods:{moveNext:function(){this.$refs.carousel.next()}},components:{"component-header":l.a,"component-slide":v,"component-selection":d.a,QLayout:p.p,QCarousel:p.f,QToolbar:p.w,QProgress:p.t}}},198:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("q-layout",{ref:"layout",attrs:{view:"hHr lpr fFf"}},[n("q-toolbar",{attrs:{color:"primary"},slot:"header"},[n("component-header")],1),o._v(" "),n("q-progress",{attrs:{percentage:o.progress,color:"negative"}}),o._v(" "),n("q-carousel",{ref:"carousel",attrs:{arrows:""}},[o._l(o.questions,function(e){return n("div",{staticClass:"bg-light no-padding",slot:"slide"},[n("div",{staticClass:"centered"},[n("component-slide",{attrs:{question:e},on:{next:o.moveNext}})],1)])}),o._v(" "),n("component-selection",{on:{next:o.moveNext},slot:"slide"})],2),o._v(" "),n("div",[o._v("\n        XXX\n    ")])],1)},staticRenderFns:[]}},31:function(o,e,n){function t(o){n(63)}var a=n(3)(n(65),n(66),t,null,null);o.exports=a.exports},32:function(o,e,n){function t(o){n(59)}var a=n(3)(n(61),n(62),t,null,null);o.exports=a.exports},34:function(o,e,n){function t(o){n(110)}var a=n(3)(n(112),n(113),t,"data-v-275227b8",null);o.exports=a.exports},35:function(o,e,n){function t(o){n(114)}var a=n(3)(n(116),n(117),t,"data-v-0f40435d",null);o.exports=a.exports},48:function(o,e,n){function t(o){n(195)}var a=n(3)(n(197),n(198),t,null,null);o.exports=a.exports},51:function(o,e){var n=o.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},53:function(o,e){o.exports=[{order:"1",name:"Důvěra vládě",question:"Hlasoval/a bych pro vznik vlády Bohuslava Sobotky.",year:"2014",description:"Vláda Bohuslava Sobotky byla složena ze zástupců ČSSD, ANO a KDU-ČSL.",id:"58720",document_link:""},{order:"2",name:"Celostátní referendum – zamítnutí",question:"Zamítl/a bych zavedení možnosti vypsat celostátní referendum.",year:"2014",description:"Návrh ústavního zákona by zavedl možnost vypsat referendum na základě návrhu skupiny zákonodárců, vlády či petice občanů. Bylo by v něm možné rozhodovat o vnitřní i zahraniční politice včetně ústavních zákonů a mezinárodních smluv. Hlasovalo se o zamítnutí, tj. Zde ANO=proti referendu, NE=pro referendum.",id:"58818",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=114"},{order:"3",name:"Registr smluv",question:"Smlouvy uzavírané veřejnou správou by měly být povinně zveřejňovány na internetu",year:"2015",description:"De návrhu měla každá smlouva veřejné správy a podniků veřejně vlastněných má být zveřejněna. Smlouvy nezveřejněné v určené lhůtě jsou neplatné.",id:"61825",document_link:"http://www.psp.cz/sqw/historie.sqw?T=42"},{order:"4",name:"Omezení zveřejňovaných smluv - státní a národní podniky",question:"Státní podniky mají být vyňaty z povinnosti zveřejňovat svoje smlouvy",year:"2017",description:"Návrh umožňoval státním a národním podnikům (např. Budvar, Česká pošta, Povodí, Národní hřebčín) nezveřejňovat svoje smlouvy v Registru smluv.",id:"65387",document_link:"http://www.psp.cz/sqw/historie.sqw?T=699&O=7"},{order:"5",name:"Snížení DPH",question:"Hlasoval/a bych pro snížení DPH na léky, knihy a kojeneckou výživu",year:"2014",description:"Novela zákona o dani z přidané hodnoty zavádí třetí (sníženou z 15 na 10 %) sazbu DPH pro léky, knihy, noviny a kojeneckou výživu.",id:"59664",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=251"},{order:"6",name:"Zrušení 2. pilíře",question:"Tzv. 2. důchodový pilíř se měl zrušit",year:"2015",description:"Tzv. “2. důchodový plíř” znamená, že část povinného “důchodového spoření” jde namísto do dnešního průběžného systému do soukromých fondů. V ČR byl zaveden v roce 2013 a přihlásilo se do něj asi 85 000 lidí.",id:"61711",document_link:"http://www.psp.cz/sqw/historie.sqw?T=493&O=7"},{order:"7",name:"Církevní restituce",question:"Hlasoval/a bych pro referendum o zrušení církevních restitucí",year:"2014",description:"Návrhem ústavního zákona mělo být vyvoláno referendum o zrušení zákona o církevních restitucích, který přijala minulá Sněmovna.",id:"58748",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=66"},{order:"8",name:"Zákaz prodeje o svátcích",question:"Hlasoval/a byste pro zákaz prodeje o svátcích?",year:"2016",description:"V obchodech nad 200m2 mělo být zakázán prodej 1.1., 8.5., 28.9., 28.10., 25.12., 26.12 a o velikonočním pondělí.",id:"63022",document_link:"http://www.psp.cz/sqw/historie.sqw?T=275&O=7"},{order:"9",name:"Valorizace důchodů",question:"Hlasoval/a bych pro rychlejší růst důchodů",year:"2014",description:"Novela zákona o důchodovém pojištění vrací rychlejší pravidla pro růst důchodů platná před rokem 2012 - důchody porostou o inflaci a třetinu růstu reálných mezd. Novela navíc důchody jednorázově zvyšuje.",id:"59235",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=175"},{order:"10",name:"Daňový balíček 2014",question:'Hlasoval/a bych pro tzv. "daňový balíček" (2014)',year:"2014",description:'Tzv. "daňový balíček” z roku 2014 mimo jiné zvyšuje daňovou slevu na druhé a další dítě, zavádí slevu pro aktivní důchodce, na druhou stranu omezuje výdajové paušály pro živnostníky',id:"59651",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=252"},{order:"11",name:"Daňový balíček 2017",question:'Hlasoval/a bych pro tzv. "daňový balíček" (2017)',year:"2017",description:'Tzv. "daňový balíček” z roku 2017 mj. zvyšuje daňovou slevu na druhé a další dítě, umožňuje opět živnostníkům používat paušály bez ztráty daňového zvýhodnění na děti.',id:"65670",document_link:""},{order:"12",name:"Zdravotnické poplatky",question:"Hlasoval/a bych pro zrušení zdravotnických regulačních poplatků",year:"2014",description:"Novela zákona o veřejném zdravotním pojištění ruší většinu regulačních zdravotnických poplatků, zejména poplatek 30 Kč za recept a návštěvu ambulantních specialistů. Zachován zůstává pouze poplatek 90 Kč za pohotovost.",id:"59766",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=260"},{order:"13",name:"Zákon o rozpočtové odpovědnosti",question:"Hlasoval/a bych pro zákon o rozpočtové odpovědnosti.",year:"2014",description:"Návrh měl např. zavést limity výše veřejného dluhu či založit Národní rozpočtovou radu, jež by kontrolovala jejich dodržování. Při přílišném zadlužení státu by mimo jiné došlo k automatickému snižování platů poslanců a senátorů.",id:"58646",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=24"},{order:"14",name:"Omezení volebních kampaní",question:"Volební kampaně stran by měly mít finanční limity",year:"2016",description:"Návrh závádí např. pro sněmovní volby pro strany limit 90 milionů Kč na kampaň.",id:"63810",document_link:"http://www.psp.cz/sqw/historie.sqw?T=568&O=7"},{order:"15",name:"Omezení nahlížení do registru ",question:"Nahlížení do registru majetkových přiznání veřejných funkcionářů by mělo být omezeno",year:"2016",description:"Veřejní funkcionáři a politici (zhruba 35 000 lidí) musejí podávat majetková přiznání do veřejně dostupného centrálního registru. Padl návrh na omezení přístupu do tohoto registru tak, aby přniznání z doby vstupu do veřejné funkce nebyla zveřejňována.",id:"64153",document_link:"http://www.psp.cz/sqw/text/tiskt.sqw?o=7&ct=564&ct1=10"},{order:"16",name:"Sankce vůči Rusku",question:"Hlasoval/a bych pro podporu sankcí EU vůči Rusku",year:"2014",description:'Hlasování o usnesení: "Poslanecká sněmovna vyzývá předsedu vlády, aby při nadcházejících jednáních o sankcích Evropské unie vůči Rusku postupoval v maximální shodě a jednotě s postojem většiny členských států EU."',id:"59516",document_link:""},{order:"17",name:"Kvóty pro uprchlíky",question:"Odmítáte kvóty pro přijímání uprchlíků pro členské země EU?",year:"2015",description:'Sněmovna hlasovala o přijetí usnesení: "Poslanecká sněmovna odmítá povinné kvóty pro přijímání uprchlíků v jednotlivých členských zemích EU."',id:"60481",document_link:""},{order:"18",name:"Zahraniční mise armády",question:"Česká armáda má působit na misích v Afghánistánu a v Mali",year:"2017",description:"Návrh na působení sil ministerstva obrany v letech 2017-2018 počítá s nasazením českých vojáků nejvíce  v Afghánistánu (do 270 lidí) a v Mali (do 60 lidí)",id:"63873",document_link:""},{order:"19",name:"Vyhoštění cizinců",question:"Stát by měl mít možnost vyhostit cizince kvůli spáchání trestného činu",year:"2015",description:"Návrh zavádí možnost zrušit povolení k dlouhodobému pobytu cizincům, kteří spáchali úmyslný trestný čin. Podle zastánců návrh pomůže zbavit se nežádoucích cizinců, podle odpůrců návrh prohlubuje dvojí standard práva pro cizince a občany ČR, což je překážkou integrace cizinců do společnosti.",id:"61521",document_link:"http://www.psp.cz/sqw/historie.sqw?T=463"},{order:"20",name:"Doplatek na bydlení",question:"Hlasoval/a bych pro přísnější pravidla pro vyplácení doplatku na bydlení",year:"2014",description:"Novela zpřísňuje podmínky vydávání doplatku na bydlení. Jejím cílem má být omezení příp. zneužívání těchto sociálních dávek provozovateli ubytoven. Maximální výše nájemného má být úměrná částce místně obvyklé.",id:"59710",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=256"},{order:"21",name:"Nepovinné očkování",question:"Do školky by měly být přijímány i děti bez očkování",year:"2015",description:"Podle dosavadní úpravy nesmí do školky docházet neočkované dítě (pokud není imunní nebo mu očkování škodí). Návrh Senátu tuto povinnost ruší, čímž fakticky oslabuje povinnost očkovat.",id:"61326",document_link:"http://www.psp.cz/sqw/historie.sqw?T=270"},{order:"22",name:"Lesní školky",question:"Hlasoval/a bych pro faktické zrušení lesních školek.",year:"2014",description:'Návrh by mj. vedl k faktické likvidaci tzv. "lesních školek" např. z důvodu příliš přísných hygienických nároků. Podle zastánců povede návrh ke zvýšení kvality předškolních zařízení. Podle odpůrců by lesní školky měly být zachovány.',id:"59955",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=82"},{order:"23",name:"Umělé oplodnění",question:"Možnost podstoupit umělé oplodnění by měly mít i nesezdané ženy",year:"2017",description:"Nyní lze v ČR podstoupit umělé oplodnění jen na žádost manželů.",id:"66081",document_link:"http://www.psp.cz/sqw/text/tiskt.sqw?o=7&ct=874&ct1=2"},{order:"24",name:"Zaměstnávání učitelů",question:"Školy by měly mít povinnost zaměstnávat učitele i přes prázdniny",year:"2015",description:"Návrh zakazuje zaměstnávat učitele jen na deset měsíců v roce, tzn. před prázdninami je propustit a opět je přijmout až na začátku školního roku.",id:"61457",document_link:"http://www.psp.cz/sqw/historie.sqw?T=407"},{order:"25",name:"Ne kontrole kotlů",question:"Ochrana domovní svobody má mít přednost před kontrolami topení v kotlích",year:"2017",description:"Vláda navrhla, že v případě podezření na to, že někdo doma topí nekvalitním palivem, mohou to úředníci zkontrolovat přímo v domě. Padl návrh na vyřazení této nové pravomoci úřadů.",id:"64057",document_link:"http://www.psp.cz/sqw/historie.sqw?T=678&O=7"},{order:"26",name:"Podpora biopaliv",question:"Finanční podpora výroby biopaliv by měla skončit",year:"2015",description:"Návrh vypouští ze zákona o spotřebních daních podporu tzv. biopaliv.",id:"61770",document_link:"http://www.psp.cz/sqw/historie.sqw?T=418"},{order:"27",name:"Národní park Šumava",question:"Hlasoval/a bych pro omezení ochrany přírody v Národním parku Šumava.",year:"2014",description:"Návrh zákona o Národním parku Šumava rozšiřuje 3. zónu parku, umožňuje za splnění určitých podmínek kácet na celém území parku a lovit všude mimo obce. Ochrana přírody se tedy fakticky snižuje na úroveň v běžných hospodářských lesích.",id:"59928",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=250"},{order:"28",name:"Recyklace obalů",question:"Hlasoval/a bych pro omezení povinnosti recyklovat obaly.",year:"2014",description:"Pozměňovací návrh omezuje předchozí úroveň povinné recyklace obalů, a to nejvíce ze všech podaných pozměňovacích návrhů.",id:"58699",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=53"},{order:"29",name:"Zdražení cigaret",question:"Cigarety by měly zdražit v důsledku vyšší spotřební daně",year:"2015",description:"Příslušný návrh zvyšuje spotřební daň tabákových výrobků, což podle odhadů zdraží cigarety o tři až čtyři koruny za krabičku. Podle zastánců vyšší ceny cigaret zvyšují příjmy státního rozpočtu, podle odpůrců snižují životní úroveň lidí, kteří jsou na cigaretách závislí.",id:"61494",document_link:"http://www.psp.cz/sqw/historie.sqw?T=512"},{order:"30",name:"Zákaz kouření v restauracích",question:"V restauracích by mělo být zakázáno kouřit",year:"2016",description:"Návrh zakazoval kouření v restauracích, kinech nebo sportovních halách s výjimkou elektronických cigaret nebo vodních dýmek.",id:"64925",document_link:"http://www.psp.cz/sqw/historie.sqw?T=828&O=7"},{order:"31",name:"Rychlost na dálnicích",question:"Měla by být na některých úsecích dálnice zvýšena nejvyšší povolená rychlost?",year:"2015",description:"Příslušný návrh umožní zvýšit rychlostní limit ze 130 na 150 km/h na čtyřech vybraných úsecích dálnic a z 90 na 110 km/h na celkem 200 km silnic 1. třídy. Podle zastánců pomůže urychlit dopravu, podle odpůrců zvýší riziko dopravních nehod.",id:"60828",document_link:"http://www.psp.cz/sqw/historie.sqw?T=374"},{order:"32",name:"Právo nosit zbraň v ústavě",question:"Mělo by být kupování si a nošení zbraně ústavním právem?",year:"2017",description:"Šlo o formulaci “Občané České republiky mají právo nabývat, držet a nosit zbraně a střelivo” s odkazem na to, že jsou povinni podílet se na zajišťování bezpečnosti ČR.",id:"66611",document_link:"http://www.psp.cz/sqw/historie.sqw?T=1021&O=7"},{order:"33",name:"Přímá volba starostů",question:"Starostové mají být nadále voleni zastupitelstvem, nikoliv přímo",year:"2015",description:"Podle kritiků volby zastupitelstvem by přímá volba zvýšila možnosti občanů rozhodovat o vedení obce, podle zastánců by hrozilo nebezpečí populismu.",id:"60462",document_link:"http://www.psp.cz/sqw/historie.sqw?T=319"},{order:"34",name:"Pravomoci NKÚ",question:"Hlasoval/a bych pro posílení kontrolních pravomocí NKÚ",year:"2014",description:"Novela ústavy rozšiřuje pravomoci Nejvyššího kontrolního úřadu (NKÚ). Ten může nově kontrolovat i hospodaření krajů, obcí, dalších veřejných institucí a veřejně vlastněných podniků. ",id:"59042",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=43"},{order:"35",name:"Služební zákon",question:"Hlasoval/a bych pro novelu Služebního zákona",year:"2014",description:"Novela mj. zavádí povinnost skládat úřednickou zkoušku, rozděluje náměstky na úřednické a politické a zavádí pozice státních tajemníků. Podle zastánců novela pomůže v boji proti korupci, podle odpůrců změny nezajistí dostatečné odpolitizování veřejné správy.",id:"59475",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=71"},{order:"36",name:'Zrušení "přílepků"',question:'Hlasoval/a bych pro zrušení "přílepků" k návrhům zákonů.',year:"2014",description:'Novela zakazuje k návrhům zákonů připojovat nesouvisející změny legislativy, tzv. "přílepky". Kromě toho ukládá povinnost identifikovat předkladatele pozměňovacích návrhů ve výboru a zaznamenávat hlasování na schůzích výborů po jménech.',id:"59801",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=26"},{order:"37",name:"Lustrační zákon",question:"Hlasoval/a bych pro zrušení lustračních zákonů.",year:"2014",description:"Návrh zákona, kterým se zrušují zákony o předpokladech na výkon funkcí (tzv. lustrační zákony), má zrušit zákaz zastávat některé funkce ve veřejné správě pro osoby spojené s komunistickým režimem před rokem 1989.",id:"58640",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=21"},{order:"38",name:"Komise k Opencard",question:"Hlasoval/a bych pro zřízení sněmovní vyšetřovací komise ke kauze Opencard.",year:"2014",description:"Vyšetřovací komise Poslanecké sněmovny má za úkol prověřit činnost orgánů činných v trestním řízení a kontrolních orgánů v kauze multifunkčních čipových karet Opencard pro obyvatele Prahy. Kauza je spojena s podezřením na korupci ohledně nevýhodných smluv mezi Prahou a firmami, které Opencard provozují.",id:"58782",document_link:""},{order:"39",name:"Práva zákazníků operátorů",question:"Hlasoval/a bych pro snížení práv a ochrany zákazníků mobilních operátorů.",year:"2014",description:"Novela zhoršuje zejména postavení podnikatelů a firem. Ti musí nově při předčasném odstoupení od smlouvy uhradit celý zbývající závazek. Pro všechny zákazníky se např. nově zhoršují možnosti jak mobilního operátora opustit bez sankcí.",id:"59773",document_link:"http://www.psp.cz/sqw/historie.sqw?o=7&T=135"},{order:"40",name:"Blokování webů jen soudy",question:"O blokování webových stránek kvůli nepovolenému hazardu by měl rozhodovat soud, nikoliv ministerští úředníci",year:"2017",description:"Vláda navrhla, aby webové stránky s hazardem, které nejsou povolené v ČR, mohlo Ministerstvo financí nechat blokovat. Zastánci návrhu poukazovali na pomalost soudů v ČR, odpůrci na možnost cenzurování ze strany MFČR.",id:"62898",document_link:"http://www.psp.cz/sqw/historie.sqw?T=578&O=7"},{order:"41",name:"Zpravodajské služby",question:"Zpravodajské služby by měly mít možnost používat data mobilních operátorů",year:"2015",description:"Příslušný návrh rozšiřuje pravomoci zpravodajských služeb, nově by měly mít možnost např. zjistit majitele telefonního čísla. Omezí se rovněž ochrana údajů bankovním tajemstvím. Podle zastánců návrh pomůže v boji proti kriminalitě, podle odpůrců povede k omezení soukromí občanů.",id:"61186",document_link:"http://www.psp.cz/sqw/historie.sqw?T=400"},{order:"42",name:"Čapí hnízdo – přerušení",question:"Hlasoval/a byste pro přerušení jednání Sněmovny o Čapím hnízdě?",year:"2017",description:"Ve Sněmovně se projednával bod Kauza Čapí hnízdo a padl návrh, aby se projednání přerušilo až do zveřejnění výsledků šetření této věci od OLAF (Evropský úřad pro boj proti podvodům), tj. až do doby po volbách.",id:"62855",document_link:""},{order:"43",name:"Souhlas se stíháním poslance",question:"Policie měla mít možnost obvinit poslance Novotného",year:"2017",description:"Poslance Novotného a Borku chtěla policie obvinit v případu machinací s evropskými dotacemi v Karlovarském a Ústeckém kraji.",id:"66509",document_link:"http://www.psp.cz/eknih/2013ps/stenprot/057schuz/s057364.htm"},{order:"44",name:"Velký pátek",question:"Velký pátek by měl být státním svátkem",year:"2015",description:"",id:"61685",document_link:"http://www.psp.cz/sqw/historie.sqw?T=491"},{order:"45",name:"EET",question:"Hlasoval/a bych pro zavedení EET (elektronické evidence tržeb)",year:"2016",description:"Elektronická evidence tržeb (EET) vyžaduje, aby každá tržba v restauraci nebo obchodě (a za další služby od příštího roku) byla okamžitě odeslána po internetu Finanční správě. ",id:"62358",document_link:"http://www.psp.cz/sqw/historie.sqw?T=514&O=7"}]},57:function(o,e,n){o.exports={default:n(58),__esModule:!0}},58:function(o,e,n){var t=n(51),a=t.JSON||(t.JSON={stringify:JSON.stringify});o.exports=function(o){return a.stringify.apply(a,arguments)}},59:function(o,e,n){var t=n(60);"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);n(30)("53c56f63",t,!0)},60:function(o,e,n){e=o.exports=n(29)(void 0),e.push([o.i,"footer{margin-top:40px;color:#666}",""])},61:function(o,e){},62:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement;o._self._c;return o._m(0)},staticRenderFns:[function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-md-6 text-center"},[n("a",{attrs:{href:"http://kohovolit.eu",title:"KohoVolit.eu",id:"footer-kohovolit-logo"}},[n("img",{attrs:{src:"https://volebnikalkulacka.cz/image/logo.png",alt:"logo kohovolit.eu"}})]),o._v(" "),n("p",{staticClass:"lead black"},[o._v("Volební kalkulačky pro Vás už od roku 2006 vytváří sdružení "),n("a",{attrs:{href:"http://kohovolit.eu"}},[o._v("KohoVolit.eu")])]),o._v(" "),n("hr"),o._v(" "),n("p",{staticClass:"black"},[o._v("Creative Commons BY 4.0 | "),n("a",{attrs:{href:"http://kohovolit.eu",id:"footer-kohovolit-licence"}},[o._v("KohoVolit.eu")]),o._v(" 2016")])])])])])}]}},63:function(o,e,n){var t=n(64);"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);n(30)("6a3867dd",t,!0)},64:function(o,e,n){e=o.exports=n(29)(void 0),e.push([o.i,"",""])},65:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(1);e.default={components:{QToolbar:t.w,QToolbarTitle:t.x,QIcon:t.i,QBtn:t.c}}},66:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("q-toolbar",{attrs:{color:"primary"},slot:"header"},[n("q-toolbar-title",[n("router-link",{attrs:{to:"/"}},[n("q-icon",{staticClass:"ion-chatboxes",attrs:{color:"warning"}}),o._v(" "),n("span",{staticClass:"text-light"},[o._v("\n                Volební kalkulačka 2017 - Inventura hlasování\n            ")])],1)],1)],1)},staticRenderFns:[]}}});