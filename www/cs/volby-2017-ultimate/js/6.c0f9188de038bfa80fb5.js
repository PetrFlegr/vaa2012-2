webpackJsonp([6,10,13,17,18],{115:function(e,o,n){var t=n(116);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(30)("fbee71dc",t,!0)},116:function(e,o,n){o=e.exports=n(29)(void 0),o.push([e.i,".q-list+.q-list[data-v-29582a95]{margin-top:0}.selection[data-v-29582a95]{max-width:992px;margin-left:auto;margin-right:auto;min-height:calc(100vh - 56px)}.next-button[data-v-29582a95]{margin:20px}.upper-text[data-v-29582a95]{padding:20px}",""])},117:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(68),a=n.n(t),i=n(56),r=n.n(i),s=n(31),d=n.n(s),l=n(32),v=n.n(l),u=n(1);o.default={data:function(){for(var e={},o=0;o<r.a.length;o++)e[r.a[o].id]=!1;var n={},t={};for(var a in r.a){var i=r.a[a];Math.abs(this.$store.state.answers[parseInt(i.id)])>0?n[i.id]=!0:n[i.id]=!1,-1===this.$store.state.answers[parseInt(i.id)]&&(t[i.id]="Ne"),1===this.$store.state.answers[parseInt(i.id)]&&(t[i.id]="Ano")}return{questions:r.a,answered:n,answers:t,checked:e,ok:!0}},methods:{addChecked:function(){this.checked.push({question_id:!1})},storeWeights:function(){this.$store.commit("storeWeights",this.checked)},goResults:function(){this.$router.push({path:"/results",query:{q:a()(this.$store.state.answers),w:a()(this.$store.state.weights)}})}},mounted:function(){for(var e in this.checked)this.$store.state.weights[e]&&(this.checked[e]=!0)},components:{"component-header":d.a,"component-footer":v.a,QLayout:u.r,QList:u.s,QItem:u.m,QItemSide:u.p,QItemMain:u.n,QCheckbox:u.h,QItemTile:u.q,QBtn:u.c}}},118:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("q-layout",{ref:"layout",attrs:{view:"hHr lpr fFf"}},[n("component-header"),e._v(" "),n("div",{staticClass:"selection"},[n("h4",[e._v("\n            Vyberte otázky, které jsou pro vás extra důležité:\n        ")]),e._v(" "),n("q-btn",{staticClass:"full-width next-button",attrs:{big:"",outline:"",color:"tertiary"},on:{click:function(o){e.goResults()}}},[e._v("\n            > Přeskočit >\n        ")]),e._v(" "),e._l(e.questions,function(o){return e.answered[o.id]?n("q-list",{key:o.id,attrs:{link:""}},[n("q-item",{staticClass:"selection-row col-md-8",attrs:{question:o,tag:"label"}},[n("q-item-side",[n("q-checkbox",{on:{change:function(o){e.storeWeights()}},model:{value:e.checked[o.id],callback:function(n){var t=e.checked,a=o.id;Array.isArray(t)?t.splice(a,1,n):e.checked[o.id]=n},expression:"checked[question.id]"}})],1),e._v(" "),n("q-item-main",[n("q-item-tile",{attrs:{label:""}},[e._v("\n                         "+e._s(o.name)+" ("+e._s(e.answers[o.id])+")\n                     ")]),e._v(" "),n("q-item-tile",{attrs:{sublabel:""}},[e._v("\n                         "+e._s(o.question)+"\n                     ")])],1)],1)],1):e._e()}),e._v(" "),n("q-btn",{staticClass:"full-width next-button",attrs:{big:"",outline:"",color:"positive"},on:{click:function(o){e.goResults()}}},[e._v("\n            > Výsledek >\n        ")])],2),e._v(" "),n("component-footer")],1)},staticRenderFns:[]}},119:function(e,o,n){var t=n(120);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(30)("07da8a60",t,!0)},120:function(e,o,n){o=e.exports=n(29)(void 0),o.push([e.i,".h2[data-v-14cc3cba]{font-size:2em;border-left:5px solid #027be3;padding:0 20px}@media (max-width:576px){.h2[data-v-14cc3cba]{font-size:1.5em;padding:0;border-left:0}}.wider[data-v-14cc3cba]{border:0;bottom:50px;margin:0}",""])},121:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(1);o.default={props:["question"],data:function(){return{value:0,answs:{0:!1,1:!1,"-1":!1}}},methods:{addAnswer:function(e){var o=this,n={key:this.question.id,value:e};this.$store.commit("addAnswer",n);for(var t=-1;t<=1;t++)this.answs[t.toString()]=!1;this.answs[e.toString()]=!0,setTimeout(function(){o.$emit("next")},250)}},components:{QList:t.s,QItem:t.m,QBtn:t.c}}},122:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"inner lr-padding"},[n("div",[n("h2",{staticClass:"h2"},[e._v(e._s(e.question.question))]),e._v(" "),n("p",[e._v(e._s(e.question.description))])]),e._v(" "),n("q-list",{staticClass:"row wider"},[n("q-item",{staticClass:"col-sm-3"}),e._v(" "),n("q-item",{staticClass:"col-md-2 col-xs-4"},[n("q-btn",{staticClass:"full-width",class:{"bg-positive":e.answs[1],"text-white":e.answs[1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(o){e.addAnswer(1)}}},[e._v("ANO")])],1),e._v(" "),n("q-item",{staticClass:"col-md-2 col-xs-4"},[n("q-btn",{staticClass:"full-width",class:{"bg-positive":e.answs[-1],"text-white":e.answs[-1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(o){e.addAnswer(-1)}}},[e._v("NE")])],1),e._v(" "),n("q-item",{staticClass:"col-md-2 col-xs-4"},[n("q-btn",{staticClass:"full-width smaller",class:{"bg-tertiary":e.answs[0],"text-white":e.answs[0]},attrs:{color:"tertiary",big:"",outline:""},on:{click:function(o){e.addAnswer(0)}}},[n("span",[e._v("nevím ")]),n("span",{staticClass:"gt-md"},[e._v(" / je mi to jedno")])])],1)],1)],1)},staticRenderFns:[]}},211:function(e,o,n){var t=n(212);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(30)("482f26bd",t,!0)},212:function(e,o,n){o=e.exports=n(29)(void 0),o.push([e.i,"body{font-size:15px}.smaller{font-size:.75em}.bg-positive,.bg-tertiary{border:1px solid}.lr-padding{padding-left:52px;padding-right:52px}.q-carousel-inner{height:calc(100vh - 56px)}.q-carousel-left-button,.q-carousel-right-button{max-height:calc(100vh - 64px)}.q-progress{height:8px}",""])},213:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(56),a=n.n(t),i=n(4),r=n.n(i),s=n(31),d=n.n(s),l=n(35),v=n.n(l),u=n(1),m=n(36);o.default={data:function(){return{questions:a.a,settings:r.a,progress:50}},methods:{moveNext:function(){this.$refs.carousel.next()}},components:{"component-header":d.a,"component-slide":m,"component-selection":v.a,QLayout:u.r,QCarousel:u.f,QToolbar:u.y,QProgress:u.v}}},214:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("q-layout",{ref:"layout",attrs:{view:"hHr lpr fFf"}},[n("q-toolbar",{attrs:{color:"primary"},slot:"header"},[n("component-header")],1),e._v(" "),n("q-progress",{attrs:{percentage:e.progress,color:"negative"}}),e._v(" "),n("q-carousel",{ref:"carousel",attrs:{arrows:""}},[e._l(e.questions,function(o){return n("div",{staticClass:"bg-light no-padding",slot:"slide"},[n("div",{staticClass:"centered"},[n("component-slide",{attrs:{question:o},on:{next:e.moveNext}})],1)])}),e._v(" "),n("component-selection",{on:{next:e.moveNext},slot:"slide"})],2),e._v(" "),n("div",[e._v("\n        XXX\n    ")])],1)},staticRenderFns:[]}},31:function(e,o,n){function t(e){n(61)}var a=n(3)(n(63),n(64),t,null,null);e.exports=a.exports},32:function(e,o,n){function t(e){n(57)}var a=n(3)(n(59),n(60),t,null,null);e.exports=a.exports},35:function(e,o,n){function t(e){n(115)}var a=n(3)(n(117),n(118),t,"data-v-29582a95",null);e.exports=a.exports},36:function(e,o,n){function t(e){n(119)}var a=n(3)(n(121),n(122),t,"data-v-14cc3cba",null);e.exports=a.exports},51:function(e,o,n){function t(e){n(211)}var a=n(3)(n(213),n(214),t,null,null);e.exports=a.exports},54:function(e,o){var n=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},56:function(e,o){e.exports=[{order:1,id:"1",question:"Měla by se uzákonit možnost celostátního referenda vypisovaného na základě petice.",name:"Celostátní referendum"},{order:2,id:"2",question:"Občané by měli mít možnost předložit návrh zákona pomocí petice.",name:"Návrh zákona - petice"},{order:3,id:"3",question:"Měla by být zavedena možnost volit po internetu.",name:"Volby po internetu"},{order:4,id:"4",question:"Prezident má být i nadále volen přímo občany.",name:"Přímá volba prezidenta"},{order:5,id:"5",question:"Měla by se snížit hranice pro platnost místního referenda alespoň pro velká města, dnes 25 % obyvatel.",name:"Lehčí místní referendum"},{order:6,id:"6",question:"Měl by být zaveden tzv. klouzavý mandát - za poslance nastupuje po dobu jeho členství ve vládě dočasný náhradník.",name:"Klouzavý mandát"},{order:7,id:"7",question:"Senát by měl být zrušen.",name:"Zrušení Senátu"},{order:8,id:"8",question:"ČR by měla zcela zastavit přijímání uprchlíků muslimského vyznání.",name:"Proti přijímání muslimů"},{order:9,id:"9",question:"Burkini by měly být v ČR zakázány.",name:"Zákaz burkin"},{order:10,id:"10",question:"V ČR by měla být plošně zakázána stavba mešit.",name:"Zákaz mešit"},{order:11,id:"11",question:"ČR by měla usilovat o zavedení společné evropské měny (euro).",name:"Euro v ČR"},{order:12,id:"12",question:"ČR by měla vystoupit z EU.",name:"Výstup z EU"},{order:13,id:"13",question:"ČR by měla vystoupit z NATO.",name:"Výstup z NATO"},{order:14,id:"14",question:"Souhlasíte se zavedením kvót pro přijímání uprchlíků pro členské země EU?",name:"Kvóty pro žadatele o azyl"},{order:15,id:"15",question:"Státy EU by měly řešit otázky týkající se azylu a uprchlictví jednotně a koordinovaně.",name:"Azyl a migrace v EU koordinovaně"},{order:16,id:"16",question:"Česká vláda by měla v případě nedostatku pracovníků (např. lékaři, řemeslníci) aktivně lákat zahraniční pracovníky.",name:"Zvaní zahraničních pracovníků"},{order:17,id:"17",question:"ČR by měla financovat ze státního rozpočtu integraci cizinců legálně žijících na území ČR (např. kurzy češtiny).",name:"Finance na integraci cizinců"},{order:18,id:"18",question:"ČR by měla být zůstat v Schengenském prostoru s volným pohybem občanů EU.",name:"ČR v Schengenu"},{order:19,id:"19",question:"ČR by měla vydávat na rozvojovou pomoc více než dnešních 6 mld, což je méně než polovina toho, co vláda přislíbila v OSN.",name:"Rozvojová pomoc"},{order:20,id:"20",question:"Armáda ČR se má nadále zúčastňovat operací v Afghánistánu.",name:"AČR v Afghánistánu"},{order:21,id:"21",question:"ČR by měla usilovat o udržování obchodních vztahů i se zeměmi, které porušují lidská práva",name:"Obchodní styk, lidská práva"},{order:22,id:"22",question:"ČR by měla při přijímání zákonů brát ohled i na rozvojové země (např. v oblasti změn klimatu).",name:"Ohled na rozvojové země"},{order:23,id:"23",question:"Místo ČR je v jádru EU.",name:"ČR v jádru EU"},{order:24,id:"24",question:"Majitel restaurace má mít právo si určit, zda bude tato kuřácká, nebo nekuřácká.",name:"Kouření v restauracích"},{order:25,id:"25",question:"Pokuty za dopravní přestupky by měly odpovídat výši příjmů řidiče.",name:"Pokuty dle příjmů řidiče"},{order:26,id:"26",question:"Minimální hrubá mzda by měla být nejméně 14 000 Kč měsíčně.",name:"Minimální mzda 14000Kč"},{order:27,id:"27",question:"Zaměstnavatel by měl mít možnost dát výpověď bez udání důvodu.",name:"Výpověď bez udání důvodu"},{order:28,id:"28",question:"Systém datových schránek by se měl otevřít pro více provozovatelů.",name:"Datové schránky - více provozovatelů."},{order:29,id:"29",question:"“Švarcsystém” by měl být legální.",name:"“Švarcsystém” legální"},{order:30,id:"30",question:'Daň z převodu ("nabytí") nemovitosti 4 % by se měla snížit.',name:"Snížení daně z nabytí nemovitosti"},{order:31,id:"31",question:"Spotřební daň na alkohol by se měla zvýšit.",name:"Zvýšení daně na alkohol"},{order:32,id:"32",question:"Povinnost posílat kontrolní hlášení k DPH by se měla zrušit.",name:"Zrušení kontrolních hlášení k DPH"},{order:33,id:"33",question:"Národní podnik Budějovický Budvar by měl být privatizován.",name:"Privatizace Budvaru"},{order:34,id:"34",question:"Projekt elektronické evidence tržeb (EET) by se měl zrušit.",name:"Zrušení EET"},{order:35,id:"35",question:"Další vlna elektronické evidence tržeb (EET, např. ve službách) se má spustit v roce 2018, jak je naplánováno.",name:"Další vlna EET"},{order:36,id:"36",question:"K zajištění důchodů je nutné zvýšit věk odchodu do důchodu.",name:"Zvýšení věku odchodu do důchodu"},{order:37,id:"37",question:"Tzv. druhý pilíř důchodové reformy by měl být opět zaveden.",name:"Zavedení 2. důchodového pilíře"},{order:38,id:"38",question:"Sazba DPH na základní potraviny by měla být nejvýše 10 %.",name:"Snížení DPH na potraviny"},{order:39,id:"39",question:"V ČR by se měl vyzkoušet základní nepodmíněný příjem.",name:"Základní nepodmíněný příjem"},{order:40,id:"40",question:"Zaměstnaní lidé v předdůchodovém věku by měli být daňově zvýhodněni.",name:"Daňové zvýhodnění pro starší lidi"},{order:41,id:"41",question:"Měla by se zvýšit daňová progrese daně z příjmů u lidí (tj. vyšší sazba daně pro vyšší příjmy)",name:"Daňová progrese DPFO"},{order:42,id:"42",question:"Státní podpora žákovských slev ve veřejné dopravě by měla zůstat zachována alespoň na dnešní úrovni.",name:"Podpora žákovských slev"},{order:43,id:"43",question:"Měl by být schválen zákon o vyrovnaném státním rozpočtu.",name:"Zákon o vyrovnaném rozpočtu"},{order:44,id:"44",question:"Povinné přidávání biosložek do paliv by mělo být i nadále zachováno.",name:"Bionafta"},{order:45,id:"45",question:"Ekologické zemědělství má být podporováno více než ostatní zemědělství.",name:"Podpora ekologického zemědělství"},{order:46,id:"46",question:"Soudci by nadále měli být jmenováni do funkce doživotně.",name:"Soudci doživotně"},{order:47,id:"47",question:"Stát by měl platy a odměny vrcholných politiků a vysokých státních úředníků pravidelně zveřejňovat.",name:"Veřejné platy státních úředníků"},{order:48,id:"48",question:"Politické strany by měly vést povinně transparentní účetnictví.",name:"Transparentní účetnictví stran"},{order:49,id:"49",question:"Data vytvářená veřejnou správou by měla být poskytována zdarma a ve strojově čitelné podobě.",name:"Open data"},{order:50,id:"50",question:"Inkluzivní vzdělávání se má podporovat alespoň tak jako dnes.",name:"Inkluzivní vzdělávání"},{order:51,id:"51",question:"Technické vzdělávání na středních a vysokých školách by mělo být státem podporováno na úkor jiných oborů.",name:"Podpora technického vzdělávání"},{order:52,id:"52",question:"Měla by se podporovat možnost výuky romštiny jako volitelného předmětu, pokud o ni bude mezi žáky zájem.",name:"Výuka romštiny"},{order:53,id:"53",question:"Mělo by se začít platit školné na veřejných vysokých školách.",name:"Školné na VŠ"},{order:54,id:"54",question:"Vláda by měla finančně podporovat služby péče o děti mladší 3 let.",name:"Péče o děti do 3 let"},{order:55,id:"55",question:"Pro obsazování vysokých funkcí veřejných úřadů by měly být zavedeny kvóty pro ženy.",name:"Kvóty pro ženy"},{order:56,id:"56",question:"Na prvních dvou místech kandidátky politické strany by ze zákona měl vždy být 1 muž a 1 žena.",name:"Kvóty na kandidátkách"},{order:57,id:"57",question:"Část rodičovské dovolené by měla být vyhrazena pouze otci.",name:"Rodičovská dovolená pro otce"},{order:58,id:"58",question:"Vláda by měla platit zálohu alimentů na děti za neplatící rodiče.",name:"Výživné"},{order:59,id:"59",question:"Porodní asistentky pro ženy, které se rozhodnou rodit doma, by měl platit stát.",name:"Porodní asistentky pro ženy rodící doma"},{order:60,id:"60",question:"Pěstovat marihuanu pro vlastní potřebu by mělo být legální.",name:"Pěstování konopí legální"},{order:61,id:"61",question:"Měl by být zrušen poplatek autorským organizacím při koupi prázdných médií (např. počítačový disk, paměťová karta do mobilu).",name:"Poplatek za prázdná média (zrušení)"},{order:62,id:"62",question:"V ČR by měl být zaveden trest smrti.",name:"Trest smrti"},{order:63,id:"63",question:"Homosexuální páry by měly mít možnost adoptovat děti.",name:"Adopce homosexuály"},{order:64,id:"64",question:"Interrupce by měla být zakázána - alespoň krom výjimečných případů, jako je znásilnění či ohrožení života matky.",name:"Zákaz interrupcí"},{order:65,id:"65",question:"Měla by být zavedena možnost eutanazie.",name:"Eutanazie"},{order:66,id:"66",question:"Domácí porody by měly být trestné.",name:"Domácí porody trestné"},{order:67,id:"67",question:"Odměny exekutorům by se měly podstatně snížit.",name:"Snížení odměn exekutorům"},{order:68,id:"68",question:"Konkurence mezi exekutory by se měla odstranit zavedením místní příslušnosti exekutorů.",name:"Místní příslušnost exekutorů"},{order:69,id:"69",question:"Insolvenční zákon by měl být upraven tak, aby umožnil návrat do ekonomicky aktivního života většímu počtu osob i za cenu zhoršení postavení věřitelů.",name:"Insolvenční zákon"},{order:70,id:"70",question:"Zákaz jízdy kamionů by měl být oproti současnému stavu rozšířen.",name:"Zákaz jízdy kamionů"},{order:71,id:"71",question:"Spotřební daň z pohonýnch hmot by se měla snížit alespoň o 1 Kč/litr.",name:"Snížení daně na benzin"},{order:72,id:"72",question:"Billboardy u dálnic by měly být opět povolené.",name:"Billboardy u dálnic"},{order:73,id:"73",question:"Reklama zaměřená na děti by měla být zakázána.",name:"Zákaz reklamy pro děti"},{order:74,id:"74",question:"Ministři mají mít nadále zakázáno vlastnit média.",name:"Ministři nesmějí vlastnit média"},{order:75,id:"75",question:"Imunita poslanců a senátorů by měla být omezena tak, že by se vztahovala jen na proslovy v Parlamentu.",name:"Omezení imunity"},{order:76,id:"76",question:"Měl by být zachován Ústav pro studium totalitních režimů.",name:"Ústav pro studium totalitních režimů"},{order:77,id:"77",question:"Spolky mají mít právo připomínkovat dopady stavebních projektů na přírodu a zdraví lidí.",name:"Spolky a stavební řízení"},{order:78,id:"78",question:"Mají dotčené obce získat právo účastnit se všech fází rozhodování o umísťování hlubinného úložiště jaderného odpadu v ČR?",name:"Obce a úložiště jaderného odpadu"},{order:79,id:"79",question:"Jednorázové plastové nádobí by mělo být zakázáno.",name:"Zákaz jednorázového nádobí"},{order:80,id:"80",question:"Používání glyfosátu (např. v Roundup) by mělo být zakázáno.",name:"Zákaz glyfosátu"},{order:81,id:"81",question:"ČR má dělat proti klimatickým změnám více než nyní.",name:"ČR vs. klimatické změny"},{order:82,id:"82",question:"ČEZ by měl pokračovat v plánu na výstavbu dalších dvou bloků v Temelíně.",name:"Další bloky Temelína"},{order:83,id:"83",question:"ČR má finančně podporovat jadernou energetiku.",name:"Podpora jaderné energetiky"},{order:84,id:"84",question:"ČR má finančně podporovat rozvoj obnovitelných zdrojů energie.",name:"Podpora obnovitelných zdrojů"},{order:85,id:"85",question:"Limity těžby uhlí v ČR se mohou prolomit.",name:"Prolomení limitů"},{order:86,id:"86",question:"Očkování dětí by mělo být nanejvýš doporučené.",name:"Očkování nepovinné"},{order:87,id:"87",question:"Za újmu vzniklou očkováním by mělo být odškodnění.",name:"Odškodnění za očkování"},{order:88,id:"88",question:"Do školek by se měly přijímat i neočkované děti (dnes nelze krom předškoláků).",name:"Neočkované děti ve školkách"},{order:89,id:"89",question:"Věk, od kdy lidé mohou volit, by se měl snížit.",name:"Snížení volebního věku"},{order:90,id:"90",question:'Provozovatelé internetových stránek a aplikací mají být povinni vymazat "falešné zprávy" (Fake News), na které byli upozorněni.',name:"Fake News – povinnost odstraňovat"},{order:91,id:"91",question:"Stát by měl garantovat základní připojení k internetu pro všechny občany.",name:"internet jako právo"},{order:92,id:"92",question:"Měly by se znovu zavést tzv. regulační poplatky za návštěvu lékaře.",name:"Regulační poplatky u lékaře"},{order:93,id:"93",question:"Zdraví škodlivé potraviny (např. limonády, cukrovinky, hranolky) by měly mít vyšší sazbu DPH.",name:"Vyšší DPH na nezdravé potraviny"},{order:94,id:"94",question:"Reklama na léky hrazené ze zdravotního pojištění by měla být zakázána.",name:"Zákaz reklamy na hrazené léky"},{order:95,id:"95",question:"V cirkusech má být zakázáno účinkování volně žijících druhů zvířat (např. lvů, velbloudů, slonů).",name:"Zákaz divokých zvířat v cirkusech"},{order:96,id:"96",question:"Norování lišek a jezevců by mělo být zakázáno.",name:"Zákaz norování"},{order:97,id:"97",question:"Stát by měl usilovat o širší zařazení vegetariánské nebo veganské stravy ve státních zařízeních.",name:"Podpora ekologičtějších způsobů stravování"},{order:98,id:"98",question:"Klecový velkochov zvířat (např. slepic) by měl být zakázán.",name:"Zákaz klecového velkochovu"},{order:99,id:"99",question:"Uzeniny a salámy by měly být povinně označeny jako karcinogenní potraviny.",name:"Škodlivost uzenin"},{order:100,id:"100",question:"Vlastnit zbraň má být ústavní právo",name:"Ústavní právo na zbraň"}]},57:function(e,o,n){var t=n(58);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(30)("1db2191e",t,!0)},58:function(e,o,n){o=e.exports=n(29)(void 0),o.push([e.i,"footer{margin-top:40px;color:#666}",""])},59:function(e,o){},60:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("footer",[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-md-6 text-center"},[n("a",{attrs:{href:"http://kohovolit.eu",title:"KohoVolit.eu",id:"footer-kohovolit-logo"}},[n("img",{attrs:{src:"https://volebnikalkulacka.cz/image/logo.png",alt:"logo kohovolit.eu"}})]),e._v(" "),n("p",{staticClass:"lead black"},[e._v("Volební kalkulačky pro Vás už od roku 2006 vytváří sdružení "),n("a",{attrs:{href:"http://kohovolit.eu"}},[e._v("KohoVolit.eu")])]),e._v(" "),n("hr"),e._v(" "),n("p",{staticClass:"black"},[e._v("Creative Commons BY 4.0 | "),n("a",{attrs:{href:"http://kohovolit.eu",id:"footer-kohovolit-licence"}},[e._v("KohoVolit.eu")]),e._v(" 2017")])])])])])}]}},61:function(e,o,n){var t=n(62);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(30)("75032494",t,!0)},62:function(e,o,n){o=e.exports=n(29)(void 0),o.push([e.i,"",""])},63:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(1);o.default={components:{QToolbar:t.y,QToolbarTitle:t.z,QIcon:t.k,QBtn:t.c}}},64:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("q-toolbar",{attrs:{color:"primary"},slot:"header"},[n("q-toolbar-title",[n("router-link",{attrs:{to:"/"}},[n("q-icon",{staticClass:"ion-chatboxes",attrs:{color:"warning"}}),e._v(" "),n("span",{staticClass:"text-light"},[e._v("\n                Volební kalkulačka 2017\n            ")])],1)],1)],1)},staticRenderFns:[]}},68:function(e,o,n){e.exports={default:n(69),__esModule:!0}},69:function(e,o,n){var t=n(54),a=t.JSON||(t.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});