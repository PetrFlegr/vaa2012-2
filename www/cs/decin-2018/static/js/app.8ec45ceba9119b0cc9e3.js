webpackJsonp([10],{"+Gxq":function(t,e,n){"use strict";var s=n("fnDg").a,o=n("VU/8")(s,null,!1,function(t){n("NCXI")},null,null);e.a=o.exports},"1ZUK":function(t,e){},"1oVT":function(t,e){},"9R6X":function(t,e){},"C9v/":function(t,e){},"HUt/":function(t,e,n){"use strict";var s=n("qRo1").a,o=n("VU/8")(s,null,!1,function(t){n("LH4V")},null,null);e.a=o.exports},JCpY:function(t,e,n){"use strict";var s=n("rKsW").a,o=n("VU/8")(s,null,!1,function(t){n("C9v/")},null,null);e.a=o.exports},JDVb:function(t,e,n){"use strict";var s=n("9NuQ").a,o=n("VU/8")(s,null,!1,function(t){n("1oVT")},null,null);e.a=o.exports},KELc:function(t,e){t.exports={"cs-CZ":{header_name:"Volební kalkulačka - Děčín 2018",YES:"ANO",NO:"NE",yes:"Ano",no:"Ne",dont_know:"Nevím",not_important:"Je mi to jedno",skip:"Přeskočit",result:"Výsledek",back:"Zpět",select_extra_important_questions:"Vyberte otázky, které jsou pro vás extra důležité:",clicking_detailed_match:"Tip: kliknutím na jméno strany dostanete Vaši podrobnou shodu s ní",match:"Shoda",close:"Zavřít",question:"Otázka",me:"Já",candidate_comment:"Komentář strany",no_replies:"Snažili jsme se opakovaně oslovit všechny strany, ostatní zatím na otázky neodpověděly.",fb_1:"Volební kalkulačka 2018. U mě největší shoda: ",fb_2:" nejmenší ",share_on_fb:"Řekněte o tom na ",sent_by_email:"Pošlete emailem",email_1:"Zkus si volební kalkulačku. Ukáže ti strany a kandidáty, kteří jsou ti nejbližší.",email_2:"\n\nVolební kalkulačka je zde:\nhttps://volebnikalkulacka.cz/?from="}}},LH4V:function(t,e){},NCXI:function(t,e){},NHnr:function(t,e,n){"use strict";function s(t){return function(){return n("mUJ2")("./"+t+".vue")}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},i=n("VU/8")({name:"app"},a,!1,function(t){n("Uywm")},null,null).exports,u=n("/ocq");o.a.use(u.a);var r=new u.a({base:"/cs/decin-2018/",mode:"history",routes:[{path:"/helloworld",name:"HelloWorld",component:s("HelloWorld")},{path:"/",name:"VAA",component:s("VAA")},{path:"/selection",name:"Selection",component:s("Selection")},{path:"/results",name:"Results",component:s("Results")},{path:"/wall",name:"Wall",component:s("Wall")}]}),l=n("TXmL"),c=n("e6fC"),p=(n("qb6w"),n("Rive"),n("NYxO"));o.a.use(p.a);var m=new p.a.Store({state:{count:1,answers:{},weights:{},results:[]},mutations:{increment:function(t){t.count++},decrement:function(t){t.count--},addAnswer:function(t,e){t.answers[e.key]=e.value},storeWeights:function(t,e){t.weights=e},storeAnswers:function(t,e){t.answers=e},resetAnswers:function(t){t.answers={}},resetWeights:function(t){t.weights={}},storeResults:function(t,e){t.results=e},storeAnswersStored:function(t,e){t.answers_stored=e}},actions:{},getters:{getCount:function(t){return t.count},getAnswers:function(t){return t.answers},getWeights:function(t){return t.weights},getResults:function(t){return t.results},getAnswersStored:function(t){return t.answers_stored}}}),k=n("ppUw"),d=n.n(k),h=n("k0KG"),f=n.n(h),v=n("mtWM"),g=n.n(v),w={install:function(t){t.prototype.$beep=function(){console.log("beep")},t.prototype.$settings=f.a,t.prototype.$getSetCookie=function(t){var e="";return this.$cookies.isKey(t)?e=this.$cookies.get(t):(e="vk."+Date.now()+"."+Math.round(1e15*Math.random()),this.$cookies.set(t,e,432e6)),e},t.prototype.$clicked=function(t,e){var n={vkid:this.$getSetCookie(this.$settings.cookie),calc:this.$settings.calc,campaign:t,attributes:e};g.a.get(this.$settings.url+this.$settings.save_path+"match/click.php",{params:n})},t.prototype.$action=function(t){var e={vkid:this.$getSetCookie(this.$settings.cookie),calc:this.$settings.calc,action:t};g.a.get(this.$settings.url+this.$settings.save_path+"match/action.php",{params:e})},t.prototype.$save_results=function(t){var e={vkid:this.$getSetCookie(this.$settings.cookie),calc:this.$settings.calc,answer:t};g.a.get(this.$settings.url+this.$settings.save_path+"match/results.php",{params:e})}}},_=w;"undefined"!=typeof window&&window.Vue&&window.Vue.use(w);var y=n("KELc"),b=n("k0KG");o.a.config.productionTip=!1,o.a.use(l.a),o.a.use(c.a),o.a.use(d.a),o.a.use(_);var V=new l.a({locale:b.locale,messages:y});new o.a({el:"#app",router:r,i18n:V,store:m,template:"<App/>",components:{App:i}}),setTimeout(function(){document.getElementById("alternative").innerHTML=""},2e3),setTimeout(function(){document.getElementById("alternative").innerHTML=""},5e3),setTimeout(function(){document.getElementById("alternative").innerHTML=""},2e4)},SsFf:function(t,e,n){"use strict";var s=n("xT7b").a,o=n("VU/8")(s,null,!1,function(t){n("1ZUK")},null,null);e.a=o.exports},Uywm:function(t,e){},k0KG:function(t,e){t.exports={url:"https://volebnikalkulacka.cz/",_url:"http://192.168.1.4:8080/",cookie:"vkid",calc:"decin-2018",locale:"cs-CZ",_cdn:"http://192.168.1.4/michal/project/volebnikalkulacka.cz/www/",cdn:"https://volebnikalkulacka.azureedge.net/",_path:"vue/decin-2018/src/",path:"cs/decin-2018/",save_path:"decin-2018/",api_path_:"http://localhost:3003/",api_path:"https://api.volebnikalkulacka.cz/",fb_app_id:"200785490055088",pic_path_small:"statics/pictures/64x64/",pic_path_large:"statics/pictures/90x90/"}},mUJ2:function(t,e,n){function s(t){var e=o[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"./Analytics.vue":["msRV",0],"./Footer.vue":["TVmP",0],"./Header.vue":["teIl",0],"./Progress.vue":["wd1N",5],"./Results.vue":["YTlo",0,1],"./ResultsModal.vue":["LyJu",0],"./ResultsNoreply.vue":["OHOL",0,3],"./ResultsTable.vue":["3vJC",0,8],"./ResultsWinners.vue":["VPHt",0,7],"./Selection.vue":["bupt",0,6],"./Stars.vue":["WmC7",0],"./VAA.vue":["k5sO",0,2],"./Wall.vue":["+nVT",0,4]};s.keys=function(){return Object.keys(o)},s.id="mUJ2",t.exports=s},qb6w:function(t,e){},r15W:function(t,e,n){"use strict";var s=n("E9Zr").a,o=n("VU/8")(s,null,!1,function(t){n("9R6X")},null,null);e.a=o.exports}},["NHnr"]);
//# sourceMappingURL=app.8ec45ceba9119b0cc9e3.js.map