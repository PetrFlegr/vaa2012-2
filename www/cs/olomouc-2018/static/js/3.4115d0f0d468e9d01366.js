webpackJsonp([3],{"+ukx":function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\n.rating {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating {\n        padding-right: 1.5rem\n}\n}\n.picture {\n    height: 64px;\n    border-radius: 50%;\n}\n","",{version:3,sources:["/home/michal/project/volebnikalkulacka.cz/vue/olomouc-2018/src/components/ResultsNoreply.vue"],names:[],mappings:";AACA;IACI,qBAAqB;CACxB;AACD;AACA;QACQ,qBAAqB;CAC5B;CACA;AACD;IACI,aAAa;IACb,mBAAmB;CACtB",file:"ResultsNoreply.vue",sourcesContent:["\n.rating {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating {\n        padding-right: 1.5rem\n}\n}\n.picture {\n    height: 64px;\n    border-radius: 50%;\n}\n"],sourceRoot:""}])},H7k0:function(n,e){n.exports=[{abbreviation:"ANO",id:"8",name:"ANO 2011",picture:"ano.png",weight:1},{abbreviation:"JAUNER",id:"9",name:"JAUNER Československo 2018",picture:"jauner.png",weight:0},{abbreviation:"MZH",id:"15",name:"Moravské zemské hnutí",picture:"mzh.png",weight:0},{abbreviation:"ODS",id:"14",name:"Občanská demokratická strana",picture:"ods.png",weight:1},{abbreviation:"Svobodní, SS a VOK",id:"7",name:"Svobodní, Soukromníci a Volba OK",picture:"svobodni.png",weight:0},{abbreviation:"TOP 09",id:"5",name:"TOP 09 a nezávislí",picture:"top09.png",weight:1},{abbreviation:"ČSSD",id:"16",name:"Česká strana sociálně demokratická",picture:"cssd.png",weight:1}]},OHOL:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("H7k0"),s=t.n(i),a={props:["questions"],data:function(){return{exist:!1,noreply:s.a}},mounted:function(){this.noreply.length>0&&(this.exist=!0)},methods:{createImageLink:function(n){return this.$settings.cdn+this.$settings.path+this.$settings.pic_path_small+n}},components:{"component-stars":t("WmC7").default}},r={render:function(){var n=this.$createElement,e=this._self._c||n;return this.exist?e("div",{staticClass:"noreply pt-3"},[e("p",[this._v("\n        "+this._s(this.$t("no_replies"))+"\n    ")])]):this._e()},staticRenderFns:[]},o=t("VU/8")(a,r,!1,function(n){t("fRiY")},null,null);e.default=o.exports},fRiY:function(n,e,t){var i=t("+ukx");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("a6ccd7fe",i,!0)}});
//# sourceMappingURL=3.4115d0f0d468e9d01366.js.map