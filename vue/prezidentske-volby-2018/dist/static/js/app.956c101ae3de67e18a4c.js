webpackJsonp([10],{"+Gxq":function(e,t,n){"use strict";var o=n("fnDg").a,s=n("VU/8")(o,null,!1,function(e){n("NCXI")},null,null);t.a=s.exports},"1ZUK":function(e,t){},"1oVT":function(e,t){},"9R6X":function(e,t){},"C9v/":function(e,t){},"HUt/":function(e,t,n){"use strict";var o=n("qRo1").a,s=n("VU/8")(o,null,!1,function(e){n("LH4V")},null,null);t.a=s.exports},JCpY:function(e,t,n){"use strict";var o=n("rKsW").a,s=n("VU/8")(o,null,!1,function(e){n("C9v/")},null,null);t.a=s.exports},JDVb:function(e,t,n){"use strict";var o=n("9NuQ").a,s=n("VU/8")(o,null,!1,function(e){n("1oVT")},null,null);t.a=s.exports},KELc:function(e,t){e.exports={"cs-CZ":{header_name:"Volební kalkulačka - prezident 2018",YES:"ANO",NO:"NE",yes:"Ano",no:"Ne",dont_know:"Nevím",not_important:"Je mi to jedno",skip:"Přeskočit",result:"Výsledek",back:"Zpět",select_extra_important_questions:"Vyberte otázky, které jsou pro vás extra důležité:",clicking_detailed_match:"Tip: kliknutím na jméno kandidáta dostanete Vaši podrobnou shodu s ním",match:"Shoda",close:"Zavřít",question:"Otázka",me:"Já",candidate_comment:"Komentář kandidáta",no_replies:"Oslovili jsme všechny kandidáty, zatím na otázky neodpověděli:",fb_1:"Volební kalkulačka 2018. U mě největší shoda: ",fb_2:" nejmenší ",share_on_fb:"Ŕekněte o tom na ",sent_by_email:"Pošlete emailem",email_1:"Zkus si volební kalkulačku. Ukáže ti kandiáty na prezidenta, kteří jsou ti nejbližší.",email_2:"\n\nVolební kalkulačka je zde:\nhttps://volebnikalkulacka.cz/cs/volby-2017?from="}}},LH4V:function(e,t){},NCXI:function(e,t){},NHnr:function(e,t,n){"use strict";function o(e){return function(){return n("mUJ2")("./"+e+".vue")}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},u=n("VU/8")({name:"app"},a,!1,function(e){n("Uywm")},null,null).exports,i=n("/ocq");s.a.use(i.a);var r=new i.a({base:"/cs/prezidentske-volby-2018/",mode:"history",routes:[{path:"/helloworld",name:"HelloWorld",component:o("HelloWorld")},{path:"/",name:"VAA",component:o("VAA")},{path:"/selection",name:"Selection",component:o("Selection")},{path:"/results",name:"Results",component:o("Results")}]}),l=n("TXmL"),c=n("e6fC"),p=(n("qb6w"),n("Rive"),n("NYxO"));s.a.use(p.a);var d=new p.a.Store({state:{count:1,answers:{},weights:{},results:[]},mutations:{increment:function(e){e.count++},decrement:function(e){e.count--},addAnswer:function(e,t){e.answers[t.key]=t.value},storeWeights:function(e,t){e.weights=t},storeAnswers:function(e,t){e.answers=t},resetAnswers:function(e){e.answers={}},resetWeights:function(e){e.weights={}},storeResults:function(e,t){e.results=t},storeAnswersStored:function(e,t){e.answers_stored=t}},actions:{},getters:{getCount:function(e){return e.count},getAnswers:function(e){return e.answers},getWeights:function(e){return e.weights},getResults:function(e){return e.results},getAnswersStored:function(e){return e.answers_stored}}}),m=n("ppUw"),f=n.n(m),k=n("k0KG"),v=n.n(k),h=(n("mtWM"),{install:function(e){e.prototype.$beep=function(){console.log("beep")},e.prototype.$settings=v.a,e.prototype.$getSetCookie=function(e){var t="";return this.$cookies.isKey(e)?t=this.$cookies.get(e):(t="vk."+Date.now()+"."+Math.round(1e15*Math.random()),this.$cookies.set(e,t,432e6)),t}}}),w=h;"undefined"!=typeof window&&window.Vue&&window.Vue.use(h);var _=n("KELc"),b=n("k0KG");s.a.config.productionTip=!1,s.a.use(l.a),s.a.use(c.a),s.a.use(f.a),s.a.use(w);var y=new l.a({locale:b.locale,messages:_});new s.a({el:"#app",router:r,i18n:y,store:d,template:"<App/>",components:{App:u}}),setTimeout(function(){document.getElementById("alternative").innerHTML=""},2e3),setTimeout(function(){document.getElementById("alternative").innerHTML=""},5e3),setTimeout(function(){document.getElementById("alternative").innerHTML=""},2e4)},SsFf:function(e,t,n){"use strict";var o=n("xT7b").a,s=n("VU/8")(o,null,!1,function(e){n("1ZUK")},null,null);t.a=s.exports},Uywm:function(e,t){},k0KG:function(e,t){e.exports={url:"https://volebnikalkulacka.cz/",cookie:"vkid",locale:"cs-CZ",_cdn:"http://192.168.1.4/michal/project/volebnikalkulacka.cz/",cdn:"https://volebnikalkulacka.azureedge.net/",_path:"vue/prezidentske-volby-2018/src/",path:"cs/prezidentske-volby-2018/",api_path_:"http://localhost:3003/",api_path:"https://api.volebnikalkulacka.cz/",fb_app_id:"200785490055088",pic_path_small:"statics/pictures/48x64/",pic_path_large:"statics/pictures/68x90/"}},mUJ2:function(e,t,n){function o(e){var t=s[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./Footer.vue":["TVmP",0],"./Header.vue":["teIl",0],"./HelloWorld.vue":["gORT",7],"./Progress.vue":["wd1N",4],"./Results.vue":["YTlo",0,1],"./ResultsModal.vue":["LyJu",0],"./ResultsNoreply.vue":["OHOL",0,3],"./ResultsTable.vue":["3vJC",0,8],"./ResultsWinners.vue":["VPHt",0,5],"./Selection.vue":["bupt",0,6],"./Stars.vue":["WmC7",0],"./VAA.vue":["k5sO",0,2]};o.keys=function(){return Object.keys(s)},o.id="mUJ2",e.exports=o},qb6w:function(e,t){},r15W:function(e,t,n){"use strict";var o=n("E9Zr").a,s=n("VU/8")(o,null,!1,function(e){n("9R6X")},null,null);t.a=s.exports}},["NHnr"]);
//# sourceMappingURL=app.956c101ae3de67e18a4c.js.map