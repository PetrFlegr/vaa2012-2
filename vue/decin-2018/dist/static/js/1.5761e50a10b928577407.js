webpackJsonp([1,3,7,8],{"+ukx":function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.rating {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating {\n        padding-right: 1.5rem\n}\n}\n.picture {\n    height: 64px;\n    border-radius: 50%;\n}\n","",{version:3,sources:["/home/michal/project/volebnikalkulacka.cz/vue/decin-2018/src/components/ResultsNoreply.vue"],names:[],mappings:";AACA;IACI,qBAAqB;CACxB;AACD;AACA;QACQ,qBAAqB;CAC5B;CACA;AACD;IACI,aAAa;IACb,mBAAmB;CACtB",file:"ResultsNoreply.vue",sourcesContent:["\n.rating {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating {\n        padding-right: 1.5rem\n}\n}\n.picture {\n    height: 64px;\n    border-radius: 50%;\n}\n"],sourceRoot:""}])},"2QDH":function(e,n,t){e.exports={default:t("NLm3"),__esModule:!0}},"3vJC":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Dd8w"),a=t.n(o),i=t("NYxO"),s=t("WmC7"),r=t("LyJu"),d={props:["questions"],data:function(){return{index:0}},computed:a()({},Object(i.b)({results:"getResults",answers:"getAnswers",weights:"getWeights"})),methods:{clicked:function(e,n){this.openingModal(n.rank),this.$clicked(e,n)},getResults:function(){return this.$store.state.results},createImageLink:function(e){return this.$settings.cdn+this.$settings.path+this.$settings.pic_path_small+e},openingModal:function(e){this.index=e}},components:{"component-stars":s.default,"component-results-modal":r.default}},l={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"result-table"},[t("div",{staticClass:"py-1 col-md-8 result-text"},[e._v("\n        "+e._s(e.$t("clicking_detailed_match"))+"\n    ")]),e._v(" "),t("div",{staticClass:"list m-1"},e._l(e.results,function(n,o){return t("div",{staticClass:"list-group"},[t("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start",attrs:{"data-toggle":"modal","data-target":"#modal"},on:{click:function(t){e.clicked("result_table",{rank:o,id:n.info.id})}}},[t("div",{staticClass:"d-flex"},[t("div",[t("img",{staticClass:"picture mr-2",attrs:{src:e.createImageLink(n.info.picture)}})]),e._v(" "),t("div",[t("h3",{staticClass:"pl-2"},[e._v(e._s(n.info.abbreviation))]),e._v(" "),t("div",{staticClass:"pl-2"},[e._v(e._s(n.info.name))])]),e._v(" "),t("div",{staticClass:"rating ml-auto pt-1"},[t("component-stars",{attrs:{stars:n.rating}}),e._v(" "),t("div",{staticClass:"text-center"},[e._v(e._s(n.result_percent)+"%")])],1)])])])})),e._v(" "),t("div",{staticClass:"modal fade",attrs:{id:"modal",tabindex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"}},[t("component-results-modal",{attrs:{index:e.index,questions:e.questions,results:e.results,answers:e.answers,weights:e.weights}})],1)])},staticRenderFns:[]},v=t("VU/8")(d,l,!1,function(e){t("Q+7B")},"data-v-1ac3efae",null);n.default=v.exports},"9iXT":function(e,n){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},DTx7:function(e,n,t){var o=t("RGAN");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("7c9c754b",o,!0)},H7k0:function(e,n){e.exports=[{abbreviation:"ANO",id:"6",name:"ANO 2011",picture:"ano.png",weight:1},{abbreviation:"ČSSD",id:"3",name:"Česká str.sociálně demokrat.",picture:"cssd.png",weight:1}]},NLm3:function(e,n,t){t("Zujg"),e.exports=t("FeBl").Math.sign},OBfA:function(e,n,t){var o=t("kcVU");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("347ffd8a",o,!0)},OHOL:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("H7k0"),a=t.n(o),i={props:["questions"],data:function(){return{exist:!1,noreply:a.a}},mounted:function(){this.noreply.length>0&&(this.exist=!0)},methods:{createImageLink:function(e){return this.$settings.cdn+this.$settings.path+this.$settings.pic_path_small+e}},components:{"component-stars":t("WmC7").default}},s={render:function(){var e=this.$createElement,n=this._self._c||e;return this.exist?n("div",{staticClass:"noreply pt-3"},[n("p",[this._v("\n        "+this._s(this.$t("no_replies"))+"\n    ")])]):this._e()},staticRenderFns:[]},r=t("VU/8")(i,s,!1,function(e){t("fRiY")},null,null);n.default=r.exports},"Q+7B":function(e,n,t){var o=t("oJpZ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("341f5506",o,!0)},RGAN:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.results[data-v-31300e90] {\n    max-width: 576px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.downer[data-v-31300e90] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    /*height: 6vw;*/\n    height: 110px;\n    width: 100%;\n    color: white;\n    font-size: 1.2em;\n    /*background-color: #abc;*/\n}\n.filler[data-v-31300e90] {\n    height: 3vw;\n}\n.image[data-v-31300e90] {\n    max-height: 32px;\n}\n.text[data-v-31300e90] {\n    color: #092e67;\n    line-height: 1.2em;\n    font-size: .8rem;\n}\n.wall-text[data-v-31300e90] {\n    font-size: 0.9em;\n}\n@media (min-width: 576px) {\n.text[data-v-31300e90] {\n        font-size: 1rem;\n}\n.wall-text[data-v-31300e90] {\n        font-size: 1em;\n}\n}\n","",{version:3,sources:["/home/michal/project/volebnikalkulacka.cz/vue/decin-2018/src/components/Results.vue"],names:[],mappings:";AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,gBAAgB;IAChB,UAAU;IACV,QAAQ;IACR,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,2BAA2B;CAC9B;AACD;IACI,YAAY;CACf;AACD;IACI,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;AACA;QACQ,gBAAgB;CACvB;AACD;QACQ,eAAe;CACtB;CACA",file:"Results.vue",sourcesContent:["\n.results[data-v-31300e90] {\n    max-width: 576px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.downer[data-v-31300e90] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    /*height: 6vw;*/\n    height: 110px;\n    width: 100%;\n    color: white;\n    font-size: 1.2em;\n    /*background-color: #abc;*/\n}\n.filler[data-v-31300e90] {\n    height: 3vw;\n}\n.image[data-v-31300e90] {\n    max-height: 32px;\n}\n.text[data-v-31300e90] {\n    color: #092e67;\n    line-height: 1.2em;\n    font-size: .8rem;\n}\n.wall-text[data-v-31300e90] {\n    font-size: 0.9em;\n}\n@media (min-width: 576px) {\n.text[data-v-31300e90] {\n        font-size: 1rem;\n}\n.wall-text[data-v-31300e90] {\n        font-size: 1em;\n}\n}\n"],sourceRoot:""}])},VPHt:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Dd8w"),a=t.n(o),i=t("NYxO"),s=t("WmC7"),r=t("LyJu"),d={props:["questions"],data:function(){return{index:0}},computed:a()({},Object(i.b)({results:"getResults",answers:"getAnswers",weights:"getWeights"})),methods:{clicked:function(e,n){this.openingModal(n.rank),this.$clicked(e,n)},getResults:function(){return this.$store.state.results},createImageLink:function(e){return this.$settings.cdn+this.$settings.path+this.$settings.pic_path_small+e},openingModal:function(e){this.index=e}},components:{"component-stars":s.default,"component-results-modal":r.default}},l={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"row result-winners justify-center m-1"},[e._l(e.results,function(n,o){return t("div",{staticClass:"col-4"},[o<3?t("div",{staticClass:"card",attrs:{"data-toggle":"modal","data-target":"#modal-winners"},on:{click:function(t){e.clicked("result_winners",{rank:o,id:n.info.id})}}},[t("div",{staticClass:"card-body"},[t("img",{staticClass:"picture mr-2",attrs:{src:e.createImageLink(n.info.picture)}}),e._v(" "),t("h4",{staticClass:"card-title"},[e._v(e._s(n.info.abbreviation))]),e._v(" "),t("div",{staticClass:"card-text"},[t("component-stars",{attrs:{stars:n.rating}})],1),e._v(" "),t("div",{staticClass:"card-text text-muted"},[e._v(e._s(e.$t("match"))+": "+e._s(n.result_percent)+"%")])]),e._v(" "),t("span",{staticClass:"badge badge-secondary"},[e._v(e._s(o+1))])]):e._e()])}),e._v(" "),t("div",{staticClass:"modal fade",attrs:{id:"modal-winners",tabindex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"}},[t("component-results-modal",{attrs:{index:e.index,questions:e.questions,results:e.results,answers:e.answers,weights:e.weights}})],1)],2)},staticRenderFns:[]},v=t("VU/8")(d,l,!1,function(e){t("OBfA")},"data-v-39c5a7e8",null);n.default=v.exports},"Y+ui":function(e,n){e.exports=[{abbreviation:"Volba",details:{1:"Město Děčín byl mělo být v oblasti Východního nádraží jednoznačně aktivním hráčem. Nemůžeme město přenechat developerům, bez toho, že bychom stanovili limity využitelnosti území a nezačlenili ho dobře do urbanistické struktury města. Je na městě, aby nechalo vypracovat územní studii, případně regulační plán pro tuto místní část. Je třeba také zdůraznit, že dobře zorganizované a pro investory předvídatelné území má daleko větší hodnotu využitelnosti. Volba pro Děčín doporučuje čerpat zkušenosti z konverzí podobných ploch, které úspěšně proběhly v jiných evropských městech.",2:"Jakési centrum pro rozvoj města, architekturu, územní plánování, informace a komunikaci s občany by mělo být podle našeho soudu jednou z náplní staré podmokelské knihovny. Vyplývá to logicky z pozitivní cesty, na kterou jsme se nedávno vydali ustanovením pozice městského architekta. Obyvatelé Děčína dlouhodobě pociťují nedostatek informací v této oblasti. Této poptávce je třeba vyjít vstříc. Děčín má šanci stát se moderním a přívětivým městem.",3:"Lanovka na Pastýřskou stěnu je podle našeho soudu zbloudilá myšlenka, které odvádí pozornost od daleko důležitějších témat. Děčín nutně potřebuje masivně investovat do obnovy veřejných prostranství a obecně do městského majetku, včetně např. sportovišť. Město, které je v pořádku a je příjemné pro život místních, přirozeně láká i turisty. Představa, že stavba nějaké lanovky bude míst pozitivní přínos pro naše životy, je zcela scestná. Umíme si představit hledání využití stávající šachty ve skále, ale pokud bychom si seřadili priority, tak třeba opravy labských nábřeží jsou daleko potřebnější. Údržba a provoz lanovky by generovaly další náklady pro město. Ohledně otázky soukromého investora říkáme, že Mariánská louka není na prodej.",4:"Klidová zóna na Mariánské louce má pro město a jeho obyvatele skutečně nevyčíslitelnou hodnotu. Kromě toho je zde řada překážek, které hovoří proti jakékoli výstavbě. Místo je v záplavové zóně, jedná se o archeologicky cennou lokalitu. Ohledně otázky soukromého investora říkáme, že Mariánská louka není na prodej.",5:"Určitě ano, vždy je co zlepšovat a úřední postup může být nejen technologicky, ale i lidsky přívětivější. Nelze se však vyhnout řadě formulací, které jsou v úředních postupech dány zákonem či jinými normami. Za posledních šest let vnímáme výrazné zlepšení vzájemné komunikace mezi úřadem a občanem.",6:"Pokud budou vyvolána další jednání o zpřístupnění Bukové hory, město Děčín by na nich nemělo chybět, případně je může samo iniciovat, pokud se na tom shodne budoucí koalice. Současné argumenty Českých radiokomunikací však mnoho optimismu nebudí, technologické parametry stavby jsou dle vlastníka limitující a neumožňují úpravy pro turistický provoz.",7:"Městu Děčín chybí celé oddělení komunikace a vnějších vztahů, které by mělo na starosti komunikaci jak externí, tak interní a mediální. V této oblasti vidíme velké rezervy. Otázku komunikace s občany by měl mít na starost pracovník tohoto oddělení, který by byl v otázkách koordinace velkých staveb detailně obeznámen. Neradi bychom rozšiřovali již tak náročnou agendu odborných úředníků magistrátu.",8:"Tato otázka je pro nás předčasná, nejprve bychom rádi viděli vyřešenou tranzitní dopravu Děčínem. Po dokončení Vilsnické spojky nás čeká Folknářská spojka a teprve pak bude čas a prostor diskutovat o názvech. Určitě bychom se v této záležitosti obrátili na veřejnost. Název Nový most považujeme mezi veřejností za velmi vžitý a mnohem lepší, než původní Most budovatelů, nevidíme důvod proč by každý most měl mít v názvu jméno konkrétní osoby.",9:"Určitě jsme pro nastavení pravidel pro reklamu ve veřejném prostoru. Jednoznačně je to téma pro městského architekta.",10:"Novelou zákona u výzev těchto odvětví jsou již předem daná pravidla, podle kterých jsou již vyhodnocovány.  S narovnáváním prostředí máme již zkušenost při vytváření dodatku smluv se sportovními kluby, které mají činnost v městských zařízeních. Jsme si jisti, že kritéria lze nastavit tak, aby byla použitelná a spravedlivá pro všechna sportovní odvětví. To samé platí i v případě kultury.",11:"Otázka Kozí dráhy má i v našich řadách své zastánce a odpůrce, převažuje však názor, že ekonomické přínosy z případného turistického ruchu prospějí městu a regionu více, než zachování drahé železniční dopravy. Kromě Děčína je to záležitost i dalších obcí na trati a kraje.",12:"Městských policistů je nedostatek a nábor nových je v této době složitý. Jednak z důvodu nízké nezaměstnanosti, jednak z důvodu náročných testů fyzické zdatnosti. Ani to však nesmí být důvodem k tomu, abychom se o navýšení počtu městských strážníků přestali snažit.",13:"Rozšíření kamerového systému je důležitá věc, protože pomáhá nejen objasňovat kriminalitu, ale zvyšuje tzv. pocit bezpečí. Domníváme se, že souběžně s novými kamerami by mohla být vytvořena nová pracovní místa např. pro osoby se sníženou pracovní schopností (OZP). Vždy je však třeba poměřovat zájem bezpečnosti a problematické lokality se zájmem nezasahovat a nemonitorovat veškerý pohyb obyvatel. Raději strážníky v ulicích.",14:"Veřejně prospěšná místa jsou vhodným nástrojem pro zapojování dlouhodobě nezaměstnaných osob do pracovního procesu, případně obnovení jejich pracovních návyků. Nesmíme však zapomínat na koordinátory těchto pracovníků, kteří budou důsledně kontrolovat odvedenou práci.",15:'Městské bydlení se zdaleka netýká jen tzv. "nepřizpůsobivých", které rozhodně nelze upřednostňovat. Bydlení by mělo být dostupné i pro jiné sociálně znevýhodněné skupiny obyvatel a osoby v tíživé životní situaci - například maminky samoživitelky, zdravotně hendikepované či seniory. Paní náměstkyně Hana Cermonová z Volby pro Děčín se svým týmem zpracovala historicky první strategii bytové politiky města Děčína, která by měla být během září 2018 schválena Radou města. Celá problematika je natolik složitá, že ji nelze vměstnat do několika řádků. Zájemcům ochotně poskytneme bližší informace na vyžádání.',16:"Z popisu otázky není zcela jasné, jakou agendou by se centrum zabývalo, přesto pokud by podobný smysluplný záměr vznikal, město by o jeho podpoře rozhodně mělo jednat. Jsme rovněž přesvědčeni, že tuto otázku by bylo vhodné řešit společně s krajskými zastupiteli, MŠMT, hospodářskou komoru, MPO, úřadem práce apod. Město může nabídnout i nefinanční spoluúčast, například prostory pro zázemí apod.",18:"Otázka není jednoznačně formulovaná, my jako Volba pro Děčín jsme pro variantu, která je nešetrnější pro obyvatele města, tedy pro rozšíření stávající komunikace I.třídy I/62 na Ústí nad Labem.",19:"Přestože bychom veřejnosti rádi nabídli výrazné snížení jízdného pro městskou hromadnou dopravu, neboť by nepochybně vedlo ke zklidnění dopravy ve městě, snížení prašnosti v centru (méně aut) a k řešení otázky parkování, současný finanční stav města toto neumožňuje. Je ale třeba hledat cesty, jak ulevit znevýhodněným skupinám obyvatel.",22:"Podle zákona je jedná rady neveřejné.",24:"Jsme pro změnu jednacího řádu tak, aby občané měli důstojný prostor pro vyjádření svých názorů. V jednacím řádu je ale třeba akcentovat to, že případné zneužívání této možnosti může primátor řešit odnětím slova.",27:"Bylo by dobré aktualizovat podmínky, a to na základě vyhodnocení zrealizovaných projektů z první výzvy."},extra_important:{1:"Ano",2:"Ano",3:"Ano",4:"Ano",5:"Ano",7:"Ano",9:"Ano",10:"Ano",12:"Ano",13:"Ano",15:"Ano",17:"Ano",18:"Ano",19:"Ano",20:"Ano",21:"Ano",25:"Ano",26:"Ano",27:"Ano"},id:"10",name:"Volba pro Děčín",picture:"volba.png",votes:{1:1,2:1,3:-1,4:-1,5:1,6:1,7:1,8:-1,9:1,10:1,11:1,12:1,13:1,14:1,15:0,16:0,17:1,18:1,19:-1,20:1,21:-1,22:-1,23:-1,24:1,25:1,26:1,27:1},weight:1},{abbreviation:"Náš Děčín",details:{2:"Budova a její prostory už své nové využití navržené mají.",4:"Zatraktivnit, lépe využít ano, ale oplotit a vybudovat kemp??? Nesmysl !",5:"Město se v této oblasti velmi zlepšilo, ale proč stagnovat?",7:"Koordinace při realizaci velkých investičních akcí je důležitá. A včasné poskytnutí informací nejen dotčeným je žádoucí.",8:"Zdravé posilování patriotismu našemu městu rozhodně chybí.",9:"Nevidíme důvod. Město může dělat reklamu i samo sobě...",10:'Nicméně ony pravidla už v základu jsou. Nelze najít "naprosto spravedlivý" parametr.',12:"Určitě, ale kvalitních a kvalifikovaných.",14:"Počet veřejně prospěšných pracovníků by se měl odvíjet od počtu nezaměstnaných a pobírajících státní podporu. A ty logicky nechceme, že?",16:"Výrazně podporovat ano. Spolufinancovat může třeba Hospodářská komora.",17:"Tvrdou regulaci ano. Striktní a úplný zákaz hazardu stejně nezabrání !",18:"Aktivní účast při projednávání ano, ale město by mělo respektovat takovou variantu přeložky silnice 1/13, o které rozhodnou ve finále odborníci a která bude ufinancovatelná investorem stavby.",19:"Pro seniory a děti ano.",22:"Alespoň při projednávání zásadních věcí jako např. investice, vyhlášky apod.",23:"V případě žádosti či dotazu by to mělo být automatické!",24:"Mohlo by docházet k blokování či neúměrnému prodlužování jednání. Většina zastupitelů nejsou profesionální (uvolnění pro výkon funkce) politici a jejich čas tak nepatří beze zbytku voličům-občanům.",26:"Určitě by šlo o posun v dostupnosti informací."},extra_important:{1:"Ano",2:"Ano",4:"Ano",7:"Ano",10:"Ano",11:"Ano",12:"Ano",13:"Ano",18:"Ano",22:"Ano",24:"Ano",27:"Ano"},id:"1",name:"Náš Děčín",picture:"nas_decin.png",votes:{1:1,2:-1,3:-1,4:-1,5:1,6:-1,7:1,8:1,9:-1,10:1,11:1,12:1,13:1,14:-1,15:1,16:-1,17:-1,18:-1,19:-1,20:1,21:-1,22:1,23:1,24:-1,25:1,26:1,27:1},weight:1},{abbreviation:"SPD",details:{1:"Referendum",3:"Referendum",11:"Referendum - rozhodování bez podkladů k nákladům není možné",15:"Město by se mělo snažit o výkup bytů, které rozprodalo.",19:"Důchodci zdarma včetně školních dětí",20:"Dle podmínek",21:"Důchodci a děti ano"},extra_important:{},id:"5",name:"Svob.a př.dem.-T.Okamura (SPD)",picture:"spd.png",votes:{1:1,2:1,3:-1,4:1,5:0,6:1,7:1,8:-1,9:0,10:1,11:0,12:1,13:1,14:-1,15:0,16:-1,17:0,18:0,19:0,20:1,21:1,22:1,23:1,24:0,25:1,26:1,27:1},weight:1},{abbreviation:"Změna",details:{},extra_important:{1:"Ano",4:"Ano",11:"Ano",17:"Ano"},id:"8",name:"Změna pro Děčín",picture:"zmena_pro_decin.png",votes:{1:1,2:1,3:-1,4:-1,5:1,6:1,7:1,8:-1,9:1,10:1,11:1,12:1,13:-1,14:1,15:1,16:1,17:1,18:1,19:-1,20:1,21:-1,22:1,23:1,24:-1,25:1,26:1,27:1},weight:1},{abbreviation:"Piráti",details:{8:"Jsme pro referendum, ať o tom rozhodnou sami občané města.",13:"Jsme pro chytrý a účelný monitoring. Je potřeba nejprve udělat audit stávajícího rozmístění a využití a zaměřit se na kvalitu nikoliv kvantitu.",16:"Je třeba prověřit poptávku, případně jaké má být zaměření poskytovaných služeb.",17:"Pouze pokud o tom rozhodnou občané města v referendu.",22:"Tento návrh přinesli Piráti Děčín.",23:"Tento návrh přinesli Piráti Děčín.",24:"Tento návrh přinesli Piráti Děčín.",25:"Tento návrh přinesli Piráti Děčín.",26:"Tento návrh přinesli Piráti Děčín."},extra_important:{5:"Ano",22:"Ano",23:"Ano",24:"Ano",25:"Ano",26:"Ano"},id:"7",name:"Česká pirátská strana",picture:"pirati.png",votes:{1:1,2:1,3:-1,4:-1,5:1,6:1,7:1,8:0,9:1,10:1,11:1,12:1,13:0,14:1,15:1,16:0,17:1,18:1,19:-1,20:1,21:-1,22:1,23:1,24:1,25:1,26:1,27:1},weight:1},{abbreviation:"KSČM",details:{},extra_important:{},id:"4",name:"Komunistická str.Čech a Moravy",picture:"kscm.png",votes:{1:1,2:0,3:-1,4:-1,5:0,6:1,7:1,8:-1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:0,21:1,22:1,23:1,24:-1,25:0,26:1,27:1},weight:1},{abbreviation:"ODS",details:{1:"Území může mít různá využití. Je potřeba všechna z nich uvážit, analyzovat a následně vyvinout intenzivní tlak na stát.",2:"Vestavba kanceláří by byla znehodnocením stávající architektonicko-provozní koncepce budovy. Je absurdní zničit unikátní autorskou architekturu z důvodu „Už jsme zaplatili za projekt, tak to tak musí být.“",3:"V žádném případě! Kdyby ten projekt byl ekonomicky životaschopný, už dávno by ho realizoval soukromý subjekt. Nepotřebujeme drahé pomníky. Jeden už na Pastýřské stěně je.",4:"Mariánská louka je cenný, unikátní a veřejnosti celoročně přístupný kus přírody v centru města, a taková by i měla zůstat. Není nutné všechno vybetonovat, zazdít a oplotit.",5:"Veřejná správa nemá překážet, nýbrž sloužit. Lidský přístup a selský rozum nemusí být v rozporu s legislativou, i když ta současná je často převzatá z kocourkovské sbírky zákonů.",6:"Lze předpokládat, že místo by se těšilo velkému zájmu turistů z Děčína a okolí. Naše město by mělo být u toho a záměr podpořit.",7:"V soukromé sféře je běžná existence odpovědného „styčného důstojníka“. Proč by to ve veřejné správě živené soukromými penězi mělo být jinak?",8:"Děčín má mnoho významných historických osobností, kterým je vhodné vzdát úctu. Ale není uctivé přidělit něčí jméno mostu, který byl postaven nekvalitně, vedl tranzit centrem města místo oklikou, mnohokrát se nákladně opravoval a plně dokončen byl až po více než třiceti letech.",9:"Regulace omezuje svobodu podnikání a uměle vytváří neproduktivní papírovou „práci pro práci“ pro další úředníky. Bohatnutí občanů přinese jinou poptávku a s ní i jiný druh designově čistší a vkusnější reklamy. Zaměřme se proto na růst životní úrovně obyvatel Děčína, ne na regulace. Svítivé nápisy pak zmizí samy.",10:"Ne vše se dá vměstnat do jednotných tabulek a systémů, ale s veřejnými prostředky je třeba zacházet nejvýše hospodárně a měřit stejným metrem.",11:"Železnice je v daném místě a při aktuálním potenciálu její přepravní práce nerentabilní historický relikt, jehož údržba stojí velké peníze a přínos je když ne nulový, tak minimální. Cyklostezka má v trase Kozí dráhy větší smysl a potenciál.",12:"Více strážníků, převážně v ulicích a pěšmo. Tak veliké město se nedá uhlídat s tak nízkým počtem strážníků v aktivní denní službě.",13:"Kamer je už dost, ale v některých problémových lokalitách by bylo vhodné ještě určité minimum kusů doplnit.",14:"Tento nástroj je velice užitečný. Těm, kdo chtějí pracovat, vrací základní návyky a pomáhá jim začlenit se do společnosti. Těm, kdo pracovat nechtějí za žádnou cenu, umožňuje odebrat některé finanční dávky a doplatky.",15:"Města nemají vlastnit byty. Vzniká tím korupční potenciál a vysoké náklady s často nereálnou návratností. Nepřizpůsobivé je třeba motivovat, aby se stali „přizpůsobivými“, nikoliv jim rozdávat bydlení za peníze daňového poplatníka.",16:"Město má nastavit rovné a přívětivé podmínky pro všechny podnikatele a živnostníky. Když zavedení podnikatelé ze svých daní zaplatí nové dílny a sklady pro svou konkurenci, pak to rovné podmínky nejsou. Opět to skýtá možnosti pro korupci a nehospodárné nakládání s veřejnými penězi.",17:"Žádná prohibice nikdy v historii nefungovala. Vede ke vzniku černého trhu. Legální herny jsou mnohem menší problém, než automaty a rulety tajně zastrkané ve sklepích a drogových doupatech. Stačí kontrolovat dodržování aktuální legislativy.",18:"Týká se to bytostně obyvatel našeho města. Úředníci od vzdáleného stolu v Praze se na to každý den dívat nebudou. Nedopusťme rozhodování „O nás – bez nás!“",19:"V Děčíně není nutno preferovat MHD za každou cenu. Jeho dopravní obslužnost netrpí tolik, jako ve větších městech. Kromě toho, žádný jiný druh dopravy v Děčíně nikoho nepřeveze za dvacet korun přes celé město v komfortním klimatu za každého počasí.",20:"Vzrostlá zeleň historicky do centra města vždy patřila a měla by se tam vrátit v rámci celkové rekultivace veřejného prostoru a hledání jeho kořenů.",21:"Likvidace odpadu je služba jako každá jiná a za služby je fér platit.",22:"Veřejnost má právo být informována, o čem bude jednat elektorát, který je živen z jejích daní.",23:"Vše, co souvisí s výkonem veřejné správy, musí být transparentní. Veřejná správa je služba placená z daní zaměstnanců, živnostníků a podnikatelů. Ti všichni mají právo vědět, jak a o čem jejich zástupci rozhodují.",24:"Některá témata není reálné vměstnat do krátkého časového limitu. Diskuse jsou kořením demokracie a i blbec by měl dostat příležitost se historicky znemožnit.",25:"Vše, co souvisí s výkonem veřejné správy, musí být transparentní. Veřejná správa je služba placená z daní zaměstnanců, živnostníků a podnikatelů. Ti všichni mají právo vědět, kam jimi vydělané peníze putují.",26:"Přináší to další administrativní náklady navíc. Za tímto účelem lze využít existující informační kanály (magistrátní web, městský zpravodaj).",27:"Občané jsou veřejnou správou znechuceni. Ve vztahu ke svému městu jsou mnohdy pasivní až apatičtí. Participativní rozpočet je dobrý nápad, jak ve veřejnosti vzbudit zájem o své okolí, dát dohromady konkrétní zlepšující návrhy a použít je i v případě neúspěchu v soutěži jako podklad pro další práci."},extra_important:{3:"Ano",5:"Ano",7:"Ano",10:"Ano",12:"Ano",18:"Ano",20:"Ano",22:"Ano",23:"Ano",25:"Ano"},id:"2",name:"Občanská demokratická strana",picture:"ods.png",votes:{1:1,2:1,3:-1,4:-1,5:1,6:1,7:1,8:-1,9:-1,10:1,11:1,12:1,13:1,14:1,15:-1,16:-1,17:-1,18:1,19:-1,20:1,21:-1,22:1,23:1,24:1,25:1,26:-1,27:1},weight:1},{abbreviation:"Severočeši",details:{3:"Ale až bude město v pořádku a pouze podpořit lanovku, která bude kopírovat skalní masiv. Navíc už stude tohoto druhu snad existuje. Bad Schandau, tento typ je motivací.",4:"NE oplotit, ale lépe využít rozhodně. Koncerty z nábřeží v rámci slavností pro mladé i seniory přesunout do parku. Vodní prvek slíben a nedodržen. Klidové další zóny mohu být v dalších částech a budou určitě stejně oblíbené.",5:"Odpůrci jsou t, kteří nechtějí aby úřad byl k občanům přívětivější, platí že úředníc jsou zde pro nás, nikoliv my pro ně.",6:"Rozhodně a je velmi smutné, že všichni ti politici celé roky dobře usazení v zastupitelstvu města Děčín, Ústeckého kraje, královsky placení z našich daní nebyli schopní tento SEN dotáhnout do zdárného konce.",7:"Odpůrci přihlížejí tomu jak úřad bobtná, ale vadí jim jeden úředník, dva navíc i třeba z oddělení, ve kterých až tak nemají do čeho píchnout, kteří by plnili zadání informovat. A dokonce pro ne formou po vzoru zákaznické linky?",8:"Proboha, jsou schopní dát jméno Grešíkův most, nebo Raškův most a nedej bože Medkův či Sinkův most :) to byl vtip. Děčínský most, tento název je v pořádku.",9:"Rozhodně regulovat, reklamní smog vidíme například v Ústí.",10:"Kritizuji dotace podle ksichtu několik let, kritizuji mimořádné dotace a stále stejnému subjektu. pojede se jedině podle pravidel.",11:"Ti, kteří prosazují zlikvidovat Kozí dráhu jen hledají téma, kterého by se chytl, nerespektují historicky jaký přínos měla Kozí dráha a stále může mít. Jnde podobné traťě zachraňují, ale v Děčíně v Ústeckém kraji se najdou hlupáci, kteří by ničili.",12:"Samozřejmě a také jim zaplatit. Více s vážit toho, že budou v ulicích a že šlapat jak se říká chodník, je náročná práce a už jen z principu by mělo být více policistů, protože se budeme cítit bezpečněji a ti co nejsou schopni dodržovat pořádek, pravidla, vyhlášky ti budou vědět, že jim policejní složky dýchají na záda.",13:"Osobně mám dobrý pocit, že mohu jít městem bezpečněji a že i naše auta budou v bezpečí, včetně majetku města i podnikatelů v centru.",14:"Samozřejmě a dobře je zaplatit. Jsou potřební, mám s námi výbornou zkušenost, na pana vedoucího Horáka se mohu vždy spolehnout a co navíc, v mých očích hodně nefunkční Technické služby mohou v některých oblastech velmi dobře doplnit. Nevnímám navýšení i finanční jako mrhání peněz, naopak. Vyhazují se peníze za hovadiny a mocným to nevadí. Toto je potřebné a ti lidé odvádějí dobrou práci.",15:"Každé jednání ZM vidíme, kolik lidí s není schopno plnit závazky v městských bytech. Platí tedy: neplníte si povinnost? Ok, uhraďte dluhy a vystěhujeme Vás do ubytovny. Dejte si do pořádku život, pak velice rádi pomůžeme znovu k lepšímu bydlení.",16:"V Děčíně působí Hospodářská komora, ať lépe pracuje a my nemáme pocit, že se chodí vedení do práce jen vyprdět.",17:"Dospělým lidem nemůže nikdo bránit v zábavě. Souhlasím, že současná regulace je dostatečná, a zmiňují svobodu podnikání a finance, které město na daních získá",18:"V tomto směru se angažuje Děčínské Fórum a my jej ve variantě Zelená podpoříme. Maximálně.Je to jedná možná, nejméně bolestná varianta a to že je dražší? A co? Spočítal někdo kolik miliard se zbytečně od roku 89 promrhalo?",19:"Zdarma pro seniory od 65 let, pro děti do 7 let. Nevidím důvod proč by neměli lidé platit za dopravu. Až, až bude město v pořádku, finančně silné, pak ZDARMA pro všechny, proč ne. Ale to musí být Dopravní podnik v dobrých rukou, to za A, za B mít dobře zmáknutou marketingovou činnost a lépe získávat peníze  z jiných činností, nikoliv čekat s nataženou rukou směrem k městu a jen požadovat peníze. Dobrou správou DPmD se dá mnohé i jezdit v budoucnu zdarma.",20:"Podpoříme dobré záměry, co bude dobré pro město, bude dobré především pro občany města. Jen už rozhodně ne stromy do tzv. Grešíkovic kontejnerů na stromy. Tuhle hrůzu v Děčíně už nechceme.",21:"POZOR: ANO, ale až bude maximálně ponížen současný dluh od nezodpovědných občanů. Pak by to bylo možné, ale je to hudba budoucnosti a protože je velmi špatný výběr poplatků, zatím ani nevidíme důvod proč neplatit poplatek za svoz svého odpadu. Zase by to jen odskákali odpovědní občané, řádně platící a nezodpovědná lůza, které dluhy procházejí a kromě exekucí na ně nejsou jiné páky, by si jen oddychla.",22:"Není to náročné a brzy to bude samozřejmost a budeme požadovat aby bylo zvěřejněno i kdo jak z radních hlasoval. To samé platí o členech výborů: finančního i kontrolního. Maximální kontrola veřejnosti musí být. Zrušíme proces podepisování mlčenlivosti.",23:"Budeme požadovat aby bylo zvěřejněno i kdo jak z radních hlasoval.",24:"Rozhodně! To je cílem, máme v programu. Konkrétně mé osoby se tento bod velmi dotýká. Bylo mi dvakrát odebráno slovo, byl v mém případě porušen zákon, což potvrdilo i Ministerstvo vnitra, primátorka Blažková porušila zákon . Zastupitelé tu jsou pro občany a musí umět unést kritiku občanů, když jim nesmrdí jejich daně, nesmí smrdět ani kritika.",25:"V každém případě. Osobní údaje? Jaké? Nechápu. Únikem osobních údajů se oháněji ti, co by měli být nejvíce kontrolováni.",26:"Čím více zveřejnění, tím lépe pro ty co mají chuť a čas se zajímat a stačí na webu města upozornit odkazem, který se nedá přehlédnout.",27:"Proč ne, projekt zvýšil zájem občanů o dění ve městě a je fajn, že se mohou zapojit a co je dobré pro občany, je dobré pro město a tím je zájem občanů o svá blízká místa v okolí, i v centru města."},extra_important:{1:"Ano",2:"Ano",4:"Ano",5:"Ano",6:"Ano",7:"Ano",10:"Ano",11:"Ano",12:"Ano",14:"Ano",15:"Ano",17:"Ano",18:"Ano",19:"Ano",20:"Ano",21:"Ano",22:"Ano",23:"Ano",24:"Ano",25:"Ano",27:"Ano"},id:"9",name:"Severočeši Děčín",picture:"severocesi.png",votes:{1:1,2:1,3:1,4:-1,5:1,6:1,7:1,8:-1,9:1,10:1,11:-1,12:1,13:1,14:1,15:1,16:-1,17:-1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:-1,27:1},weight:1}]},YTlo:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("2QDH"),a=t.n(o),i=t("mvHQ"),s=t.n(i),r=t("teIl"),d=t("TVmP"),l=t("VPHt"),v=t("3vJC"),u=t("OHOL"),c=t("0mEi"),p=t.n(c),m=t("Y+ui"),k=t.n(m),h=t("msRV"),b={data:function(){return{questions:p.a,votes:k.a,results:[{info:""},{info:""},{info:""}],answers:{}}},computed:{rhSrc:function(){return this.$settings.cdn+"image/"+this.$settings.save_path+"rekonstrukce-hradu-2.png"}},methods:{clicked:function(e,n){this.$clicked(e,n)},createProjectsLink:function(){return"https://projects.kohovolit.eu/?vkid="+this.$getSetCookie(this.$settings.cookie)},createFBLink:function(){function e(e){var n=[];for(var t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&")}var n={ref:this.$getSetCookie(this.$settings.cookie),pic:s()({w:[this.results[0].info.id,this.results[1].info.id,this.results[2].info.id],s:[this.results[0].rating5,this.results[1].rating5,this.results[2].rating5],calc:this.$settings.calc})};console.log(n);var t={app_id:this.$settings.fb_app_id,display:"page",link:this.$settings.url+"?"+e(n),redirect_uri:this.$settings.url+this.$settings.path+this.$route.fullPath.substring(1)};console.log(t);return"https://www.facebook.com/dialog/feed?"+e(t)},createEmailLink:function(){var e=this.$t("email_1"),n=this.$t("email_2")+this.$getSetCookie(this.$settings.cookie);return"mailto:?subject="+encodeURIComponent(e)+"&body="+encodeURIComponent(n)},clickedDetails:function(e){},calcMatch:function(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,a=[];for(var i in t){var s=t[i],r=this.calcOneMatch(e,n,s.votes,o);r.id=s.id,r.info=s,a.push(r)}return a},calcOneMatch:function(e,n,t,o){var i=0,s=0,r=0;for(var d in e)Math.abs(e[d])>0&&(r=1,n[d]&&(r=o),void 0!==t[d]?(i+=a()(e[d])*t[d]*r,s+=r):s+=r);0===s&&(s=1);return{result:(1+i/s)/2,result_percent:Math.round((100+100*i/s)/2),rating:Math.round((1+i/s)/2*10)/2,rating5:Math.round((1+i/s)/2*5),random:Math.random()}}},mounted:function(){this.$action("results_shown"),this.$getSetCookie(this.$settings.cookie),void 0!==this.$route.query.q?this.$store.commit("storeAnswers",JSON.parse(this.$route.query.q)):this.$store.commit("resetAnswers"),this.answers=this.$store.state.answers,void 0!==this.$route.query.w?this.$store.commit("storeWeights",JSON.parse(this.$route.query.w)):this.$store.commit("resetWeights"),this.results=this.calcMatch(this.$store.state.answers,this.$store.state.weights,this.votes,2),this.results.sort(function(e,n){return n.random-e.random}),this.results.sort(function(e,n){return n.result-e.result}),this.$store.commit("storeResults",this.results);var e={};for(var n in this.$route.query)e[n]=JSON.parse(this.$route.query[n]);this.$save_results(e)},components:{"component-header":r.default,"component-footer":d.default,"component-results-winners":l.default,"component-results-table":v.default,"component-results-noreply":u.default,Analytics:h.default}},j={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("component-header"),e._v(" "),t("div",{staticClass:"results"},[t("component-results-winners",{attrs:{questions:e.questions,results:e.results}}),e._v(" "),t("div",{staticClass:"row px-2"},[t("div",{staticClass:"col-md-6"},[t("a",{attrs:{href:e.createFBLink(),target:"_blank"}},[t("button",{staticClass:"btn btn-primary btn-block btn-lg",on:{click:function(n){e.clicked("fb_top",{})}}},[e._v(e._s(e.$t("share_on_fb"))),t("i",{staticClass:"fa fa-facebook-official"})])])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("a",{attrs:{href:e.createEmailLink()}},[t("button",{staticClass:"btn btn-warning btn-block btn-lg",on:{click:function(n){e.clicked("email_top",{})}}},[e._v(e._s(e.$t("sent_by_email"))+" "),t("i",{staticClass:"fa fa-envelope"})])])])]),e._v(" "),t("component-results-table",{attrs:{questions:e.questions,answers:e.$store.state.answers},on:{clickedDetails:e.clickedDetails}}),e._v(" "),t("component-results-noreply",{attrs:{questions:e.questions}}),e._v(" "),t("a",{staticClass:"btn btn-warning btn-block btn-lg mt-4",attrs:{href:"wall"},on:{click:function(n){e.clicked("wall_of_fame",{text:"wall"})}}},[t("i",{staticClass:"fa fa-heart text-danger"}),e._v(" "),t("span",{staticClass:"wall-text"},[e._v("Zeď podporovatelů Volební kalkulačky")])])],1),e._v(" "),t("component-footer"),e._v(" "),t("div",{staticClass:"filler"}),e._v(" "),t("Analytics")],1)},staticRenderFns:[]},y=t("VU/8")(b,j,!1,function(e){t("DTx7")},"data-v-31300e90",null);n.default=y.exports},Zujg:function(e,n,t){var o=t("kM2E");o(o.S,"Math",{sign:t("9iXT")})},fRiY:function(e,n,t){var o=t("+ukx");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("a6ccd7fe",o,!0)},kcVU:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.col-4[data-v-39c5a7e8] {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n.card-title[data-v-39c5a7e8] {\n    margin-bottom: 0;\n}\n.picture[data-v-39c5a7e8] {\n    height: 90px;\n    border-radius: 50%;\n}\n.badge[data-v-39c5a7e8] {\n    font-size: 1.5em;\n}\n.card[data-v-39c5a7e8] {\n    cursor: pointer;\n}\n.card[data-v-39c5a7e8]:hover {\n    background-color: #f8f9fa;\n}\n@media (max-width: 576px) {\n.card[data-v-39c5a7e8] {\n}\n.card-body[data-v-39c5a7e8] {\n        padding: 0.25rem;\n}\n.card-title[data-v-39c5a7e8] {\n        font-size: 1.1rem;\n}\n.badge[data-v-39c5a7e8] {\n        font-size: 1em;\n}\n}\n","",{version:3,sources:["/home/michal/project/volebnikalkulacka.cz/vue/decin-2018/src/components/ResultsWinners.vue"],names:[],mappings:";AACA;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,0BAA0B;CAC7B;AACD;AACA;CACC;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,eAAe;CACtB;CACA",file:"ResultsWinners.vue",sourcesContent:["\n.col-4[data-v-39c5a7e8] {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n.card-title[data-v-39c5a7e8] {\n    margin-bottom: 0;\n}\n.picture[data-v-39c5a7e8] {\n    height: 90px;\n    border-radius: 50%;\n}\n.badge[data-v-39c5a7e8] {\n    font-size: 1.5em;\n}\n.card[data-v-39c5a7e8] {\n    cursor: pointer;\n}\n.card[data-v-39c5a7e8]:hover {\n    background-color: #f8f9fa;\n}\n@media (max-width: 576px) {\n.card[data-v-39c5a7e8] {\n}\n.card-body[data-v-39c5a7e8] {\n        padding: 0.25rem;\n}\n.card-title[data-v-39c5a7e8] {\n        font-size: 1.1rem;\n}\n.badge[data-v-39c5a7e8] {\n        font-size: 1em;\n}\n}\n"],sourceRoot:""}])},oJpZ:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.picture[data-v-1ac3efae] {\n    height: 64px;\n    border-radius: 50%;\n}\n.list-group-item[data-v-1ac3efae] {\n    border: 0;\n}\n.list-group[data-v-1ac3efae]:hover {\n    cursor: pointer;\n}\n.list[data-v-1ac3efae] {\n    border: 1px solid rgba(0,0,0,.125);\n}\n.rating[data-v-1ac3efae] {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating[data-v-1ac3efae] {\n        padding-right: 1.5rem\n}\n}\n","",{version:3,sources:["/home/michal/project/volebnikalkulacka.cz/vue/decin-2018/src/components/ResultsTable.vue"],names:[],mappings:";AACA;IACI,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,UAAU;CACb;AACD;IACI,gBAAgB;CACnB;AACD;IACI,mCAAmC;CACtC;AACD;IACI,qBAAqB;CACxB;AACD;AACA;QACQ,qBAAqB;CAC5B;CACA",file:"ResultsTable.vue",sourcesContent:["\n.picture[data-v-1ac3efae] {\n    height: 64px;\n    border-radius: 50%;\n}\n.list-group-item[data-v-1ac3efae] {\n    border: 0;\n}\n.list-group[data-v-1ac3efae]:hover {\n    cursor: pointer;\n}\n.list[data-v-1ac3efae] {\n    border: 1px solid rgba(0,0,0,.125);\n}\n.rating[data-v-1ac3efae] {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating[data-v-1ac3efae] {\n        padding-right: 1.5rem\n}\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=1.5761e50a10b928577407.js.map