webpackJsonp([12],{115:function(t,s,i){var e=i(116);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(30)("62f7b038",e,!0)},116:function(t,s,i){s=t.exports=i(29)(void 0),s.push([t.i,".h2[data-v-12f2e99b]{font-size:2em;border-left:5px solid #027be3;padding:0 20px}@media (max-width:576px){.h2[data-v-12f2e99b]{font-size:1.5em;padding:0;border-left:0}}.wider[data-v-12f2e99b]{border:0;bottom:50px;margin:0}",""])},117:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(1);s.default={props:["question"],data:function(){return{value:0,answs:{0:!1,1:!1,"-1":!1}}},methods:{addAnswer:function(t){var s=this,i={key:this.question.id,value:t};this.$store.commit("addAnswer",i);for(var e=-1;e<=1;e++)this.answs[e.toString()]=!1;this.answs[t.toString()]=!0,setTimeout(function(){s.$emit("next")},250)}},components:{QList:e.q,QItem:e.k,QBtn:e.c}}},118:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"inner lr-padding"},[i("div",[i("h2",{staticClass:"h2"},[t._v(t._s(t.question.question))]),t._v(" "),i("p",[t._v(t._s(t.question.description))])]),t._v(" "),i("q-list",{staticClass:"row wider"},[i("q-item",{staticClass:"col-sm-3"}),t._v(" "),i("q-item",{staticClass:"col-md-2 col-xs-4"},[i("q-btn",{staticClass:"full-width",class:{"bg-positive":t.answs[1],"text-white":t.answs[1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(s){t.addAnswer(1)}}},[t._v("ANO")])],1),t._v(" "),i("q-item",{staticClass:"col-md-2 col-xs-4"},[i("q-btn",{staticClass:"full-width",class:{"bg-positive":t.answs[-1],"text-white":t.answs[-1]},attrs:{color:"primary",big:"",outline:""},on:{click:function(s){t.addAnswer(-1)}}},[t._v("NE")])],1),t._v(" "),i("q-item",{staticClass:"col-md-2 col-xs-4"},[i("q-btn",{staticClass:"full-width smaller",class:{"bg-tertiary":t.answs[0],"text-white":t.answs[0]},attrs:{color:"tertiary",big:"",outline:""},on:{click:function(s){t.addAnswer(0)}}},[i("span",[t._v("nevím ")]),i("span",{staticClass:"gt-md"},[t._v(" / je mi to jedno")])])],1)],1)],1)},staticRenderFns:[]}},35:function(t,s,i){function e(t){i(115)}var n=i(3)(i(117),i(118),e,"data-v-12f2e99b",null);t.exports=n.exports}});