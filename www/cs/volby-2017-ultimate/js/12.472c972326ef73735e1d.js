webpackJsonp([12],{169:function(t,i,s){var e=s(170);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(30)("3e39fb69",e,!0)},170:function(t,i,s){i=t.exports=s(29)(void 0),i.push([t.i,".smaller[data-v-f63dc92e]{font-size:.75em}.buttons[data-v-f63dc92e]{border:0;bottom:50px;margin:0}.lr-padding[data-v-f63dc92e]{padding-left:40px;padding-right:40px}.inner-item[data-v-f63dc92e]{max-width:768px}.description p[data-v-f63dc92e]{font-size:.85rem;color:#666}@media (max-height:360px){.description[data-v-f63dc92e]{display:none}}@media (max-width:460px) and (max-height:460px){.description[data-v-f63dc92e]{display:none}}.h2[data-v-f63dc92e]{font-size:1.5em;padding:0;border-left:0}@media (min-width:576px){.h2[data-v-f63dc92e]{font-size:2em;font-weight:700;border-left:5px solid #027be3;padding:0 20px}.description p[data-v-f63dc92e]{font-size:1rem}}@media (min-height:640px) and (min-width:992px){.inner[data-v-f63dc92e]{padding-top:calc(15vh - 66px);min-height:calc(500px + 15vh - 66px)}.h2[data-v-f63dc92e]{font-size:3em}}@media (min-height:758px) and (min-width:1356px){.inner[data-v-f63dc92e]{padding-top:calc(33vh - 66px);min-height:calc(500px + 15vh - 66px)}}",""])},171:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(1);i.default={props:["question"],data:function(){return{value:0,answs:{0:!1,1:!1,"-1":!1}}},methods:{addAnswer:function(t){var i=this,s={key:this.question.id,value:t};this.$store.commit("addAnswer",s);for(var e=-1;e<=1;e++)this.answs[e.toString()]=!1;this.answs[t.toString()]=!0,setTimeout(function(){i.$emit("next")},250)}},mounted:function(){for(var t=-1;t<=1;t++)this.$store.state.answers[this.question.id]===t&&(this.answs[t]=!0)},components:{QList:e.s,QItem:e.m,QBtn:e.c}}},172:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"inner lr-padding"},[s("div",{staticClass:"row justify-center"},[s("q-item",{staticClass:"col-md-6 no-padding inner-item question"},[s("h2",{staticClass:"h2"},[t._v(t._s(t.question.question))])])],1)]),t._v(" "),s("q-list",{staticClass:"row justify-center buttons"},[s("q-item",{staticClass:"col-xs-4 col-md-2"},[s("q-btn",{staticClass:"full-width",class:{"bg-primary":t.answs[1],"text-white":t.answs[1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(i){t.addAnswer(1)}}},[t._v("ANO")])],1),t._v(" "),s("q-item",{staticClass:"col-xs-4 col-md-2"},[s("q-btn",{staticClass:"full-width",class:{"bg-primary":t.answs[-1],"text-white":t.answs[-1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(i){t.addAnswer(-1)}}},[t._v("NE")])],1),t._v(" "),s("q-item",{staticClass:"col-xs-4 col-md-2"},[s("q-btn",{staticClass:"full-width smaller",class:{"bg-tertiary":t.answs[0],"text-white":t.answs[0]},attrs:{color:"tertiary",big:"",outline:""},on:{click:function(i){t.addAnswer(0)}}},[s("span",[t._v("nevím ")]),s("span",{staticClass:"gt-md"},[t._v(" / je mi to jedno")])])],1)],1)],1)},staticRenderFns:[]}},43:function(t,i,s){function e(t){s(169)}var a=s(3)(s(171),s(172),e,"data-v-f63dc92e",null);t.exports=a.exports}});