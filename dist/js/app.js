(function(e){function t(t){for(var r,s,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"073e":function(e,t,n){},"6af5":function(e,t,n){"use strict";var r=n("073e"),o=n.n(r);o.a},"85ec":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-router")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.routedComponent,{tag:"component"})},a=[],c=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),l=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"LabelmakerApp"}},[n("FormSpreadsheetPicker"),n("FormLabelSearch"),n("FormLabelDesign"),n("section",[n("div",{staticClass:"modal-dialog-buttons"},[n("a",{staticClass:"modal-dialog-buttons-alternative",attrs:{href:"https://groups.google.com/forum/#!forum/labelmaker",target:"_blank"}},[e._v("Learn more")]),n("button",{on:{click:function(t){return t.preventDefault(),e.closeUI(t)}}},[e._v(" Cancel ")]),n("button",{staticClass:"button-action",attrs:{disabled:!e.isMergeDoable},on:{click:function(t){return t.preventDefault(),e.initializeMerge(t)}}},[e.isMergeInProgress?n("div",[n("span",{staticClass:"spinner-border spinner-border-xs"})]):n("span",[e._v("Create labels")])])])])],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fieldset",[n("div",[n("label",[n("span",[e._v("Select spreadsheet")]),e.isSpreadsheetPicked?n("a",{attrs:{href:e.spreadsheet.url,target:"_blank"}},[n("img",{staticStyle:{"padding-left":"4px"},attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAASUVORK5CYII=",alt:"Link to the spreadsheet"}})]):e._e()])]),e.isSpreadsheetPicked?n("div",{staticStyle:{"max-width":"478px"}},[n("div",{staticClass:"labelmaker-data-picker"},[n("SpreadsheetFilename",{attrs:{spreadsheet:e.spreadsheet}}),n("svg",{attrs:{x:"0px",y:"0px",viewBox:"0 0 24 24",focusable:"false",fill:"#000000"}},[n("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.sheet,expression:"sheet"}],staticClass:"ellipsis",attrs:{disabled:!e.sheets.length},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sheet=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select sheet")]),e._l(e.sheets,(function(t,r){return n("option",{key:r,domProps:{value:t.title}},[e._v(" "+e._s(t.title)+" ")])}))],2)],1)]):n("div",[n("SpreadsheetFilename",{attrs:{spreadsheet:e.spreadsheet}})],1)])])},h=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"ellipsis",attrs:{title:e.spreadsheet.title},on:{click:function(t){return t.preventDefault(),e.showFilePicker(t)}}},[n("img",{staticStyle:{"vertical-align":"middle","padding-right":"4px","margin-top":"-3px",display:"inline-block"},attrs:{src:"https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_spreadsheet_x128.png",width:"16",height:"16"}}),e.spreadsheet&&e.spreadsheet.title?n("span",[e._v(e._s(e.spreadsheet.title))]):n("span",[e._v("Select spreadsheet")])])},m=[],g=r["a"].extend({name:"FormSpreadsheetPicker",props:["spreadsheet"],methods:{showFilePicker:function(){this.$store.dispatch("setLocation","/filepicker")}}}),v=g,b=n("2877"),w=Object(b["a"])(v,f,m,!1,null,null,null),k=w.exports,_=r["a"].extend({name:"FormSpreadsheetPicker",components:{SpreadsheetFilename:k},data:function(){return{sheets:[]}},mounted:function(){this.initializeSheets()},computed:{isSpreadsheetPicked:function(){return this.spreadsheet&&""!==this.spreadsheet.id},spreadsheet:function(){return this.$store.state.spreadsheet},sheet:{get:function(){return this.$store.state.sheet.title},set:function(e){this.$store.dispatch("setSheet",e)}}},methods:{initializeSheets:function(){this.$store.dispatch("clearSheet"),this.spreadsheet.id&&window._backend.withSuccessHandler(this.onSheetsFetched).uiGetSheets(this.spreadsheet.id)},onSheetsFetched:function(e){this.sheets=e,e.length>0&&this.$store.dispatch("setSheet",e[0].title)}}}),y=_,A=(n("6af5"),Object(b["a"])(y,p,h,!1,null,"491ee635",null)),S=A.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fieldset",[e._m(0),n("div",{staticClass:"autocomplete",class:{"autocomplete-active":e.isAutocompleteActive}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{id:"labelmaker-labels-search",type:"search",placeholder:"Enter the label code (e.g. 5160)"},domProps:{value:e.keyword},on:{focus:e.onAutocompleteFocused,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onAutocompleteDismissed(t)},e.onAutocompleteKeyed],input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),n("div",{staticClass:"autocomplete-results"},[e.hits.length>0?n("ol",e._l(e.hits,(function(t,r){return n("li",{key:r,staticClass:"autocomplete-item",attrs:{"data-id":"hit[0]"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.onAutocompleteItemClicked(t)}}},[n("span",[e._v(e._s(t[1]))])])})),0):n("div",{staticClass:"autocomplete-nohits"},[n("div",[e._v(" No result found for "),n("i",[e._v('"'+e._s(e.keyword)+'"')])]),n("div",{staticClass:"hint"},[e._v(' Try to search for a label code (e.g. enter "5160") ')])])])])])])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"labelmaker-labels-search"}},[e._v("Label product")])])}],j=(n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),r["a"].extend({name:"FormLabelSearch",data:function(){return{hits:[],isAutocompleteActive:!1,hasAutocompleteBlurListener:!1,autocompleteWorker:-1,autocompleteListener:null}},computed:{keyword:{get:function(){return this.$store.state.product},set:function(e){this.$store.dispatch("setProduct",e)}}},mounted:function(){if(!window._storage){var e=window._app&&window._app.app_version||"2",t=document,n=t.createElement("script");n.src="https://cdn.jsdelivr.net/gh/frenchcooc/labelmaker-landing@"+e+"/dist/js/catalog.min.js",n.async=!0,n.defer=!0,t.body.appendChild(n)}this.$store.state.product&&(this.keyword=this.$store.state.product)},methods:{onAutocompleteFocused:function(){if(""!==this.keyword&&this.hits.length){if(1===this.hits.length&&this.hits[0][1]===this.keyword)return void this.hideAutocomplete();this.showAutocomplete()}},onAutocompleteKeyed:function(){""!==this.keyword?(this.showAutocomplete(),this.autocompleteSearch()):this.hideAutocomplete()},onAutocompleteItemClicked:function(e){var t=e.target||e.srcElement,n=t&&t.innerText.toString();this.keyword=n,this.hideAutocomplete()},onAutocompleteDismissed:function(){this.hideAutocomplete()},showAutocomplete:function(){if(this.isAutocompleteActive=!0,!this.hasAutocompleteBlurListener){var e=this;document.addEventListener("click",(function(t){var n=t.target||t.srcElement;if(n.closest){var r=n.closest(".autocomplete");r||e.onAutocompleteDismissed()}})),this.hasAutocompleteBlurListener=!0}},hideAutocomplete:function(){this.isAutocompleteActive=!1},newAutocompleteWorker:function(){var e=(new Date).getTime();return this.autocompleteWorker=e,e},newEscapedKeywords:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},autocompleteSearch:function(){for(var e=this.getLabelsCatalog(),t=this.keyword,n=[],r=10,o=new RegExp(this.newEscapedKeywords(t),"gi"),i=this.newAutocompleteWorker(),s=0,a=e.length;s<a;s++){if(this.autocompleteWorker!==i)return;if(n.length>=r)break;var c=e[s],l=c[1];o.test(l)&&n.push(c)}this.hits=n},getLabelsCatalog:function(){return window._storage&&window._storage.ALL_LABELS||[]}}}));Element&&!Element.prototype.matches&&(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var E=j,x=Object(b["a"])(E,O,P,!1,null,null,null),C=x.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fieldset",[e._m(0),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.template,expression:"template"}],staticStyle:{resize:"none","max-height":"100px"},attrs:{rows:"5",id:"labelmaker-template",placeholder:e.mergefieldsPlaceholder},domProps:{value:e.template},on:{input:function(t){t.target.composing||(e.template=t.target.value)}}})])])},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"labelmaker-template"}},[e._v(" Add merge fields "),n("span",{staticClass:"hint"},[e._v("(e.g. <<firstname>>)")])])])}],D=(n("a15b"),r["a"].extend({name:"FormLabelDesign",computed:{template:{get:function(){return this.$store.state.template},set:function(e){this.$store.dispatch("setTemplate",e)}},mergefieldsPlaceholder:function(){return["<<firstname>> <<lastname>>","<<address>>","<<zipcode>> <<city>>"].join("\n")}}})),M=D,$=Object(b["a"])(M,L,F,!1,null,null,null),I=$.exports;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=r["a"].extend({name:"FormCreateLabels",components:{FormLabelDesign:I,FormLabelSearch:C,FormSpreadsheetPicker:S},data:function(){return{isMergeInProgress:!1}},computed:U({},Object(l["b"])(["spreadsheet","sheet","template","product"]),{isMergeDoable:function(){return""!=this.spreadsheet.id&&""!==this.sheet.title&&""!==this.product&&""!==this.template}}),methods:{reloadUI:function(){window._backend.uiReloadModal()},closeUI:function(){window._frontend.close()},initializeMerge:function(){this.isMergeInProgress=!0;var e=this;setTimeout((function(){window._backend.withFailureHandler(e.onMergeFailure).withSuccessHandler(e.onMergeSuccess).uiStartMerge(e.spreadsheet.id,e.sheet.title,e.product,e.template)}),800)},onMergeSuccess:function(e){this.isMergeInProgress=!1,e&&e.metadata?(window._logger("Merge succeeded"),window.gtag("event","merge",{event_category:"engagement",event_label:this.product,value:e.metadata.metrics.labels||0})):window._logger(new Error("Merge did not returned metadata"))},onMergeFailure:function(e){this.isMergeInProgress=!1,window._logger(e)}}}),z=N,B=Object(b["a"])(z,u,d,!1,null,null,null),R=B.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("center",{staticStyle:{"margin-top":"150px"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[e.error?n("p",[e._v(e._s(e.error)),n("br"),e._v("Please try again")]):n("p",[e._v("Fetching spreadsheets."),n("br"),e._v("Please wait a few seconds...")])]),n("button",{on:{click:e.cancelFilePicker}},[e._v("Cancel")])])],1)},W=[],V=r["a"].extend({data:function(){return{googFilePickerAPIKey:"AIzaSyBtJIilOStGntZyOsEx9DEgDlkCbMSeTT0",userOAuthToken:"",isPickerApiLoaded:!1,error:""}},mounted:function(){if(!window.gapi)return this.error="Unable to initialize Google File Picker",window._logger(new Error(this.error));if(window.google&&window.google.picker)this.isPickerApiLoaded=!0;else{var e=this;window.gapi.load("picker",{callback:function(){e.isPickerApiLoaded=!0,e.initPicker()}})}window._backend.withSuccessHandler(this.initPicker).uiGetOAuthToken()},methods:{initPicker:function(e){e&&(this.userOAuthToken=e),this.userOAuthToken&&this.isPickerApiLoaded&&this.renderPicker()},renderPicker:function(){var e={width:window.innerWidth,height:window.innerHeight},t=window.google.picker,n=(new t.PickerBuilder).addView(t.ViewId.SPREADSHEETS).enableFeature(t.Feature.NAV_HIDDEN).hideTitleBar().setOAuthToken(this.userOAuthToken).setDeveloperKey(this.googFilePickerAPIKey).setCallback(this.pickerCallback).setOrigin(window._frontend.origin).setSize(e.width-2,e.height-2).build();n.setVisible(!0)},pickerCallback:function(e){var t=window.google.picker,n=e[t.Response.ACTION];if(n==t.Action.PICKED){var r=e[t.Response.DOCUMENTS][0],o=r[t.Document.ID],i=r[t.Document.URL],s=r[t.Document.NAME];this.$store.dispatch("setSpreadsheet",{id:o,url:i,title:s}),this.cancelFilePicker()}else n==t.Action.CANCEL&&this.cancelFilePicker()},cancelFilePicker:function(){this.$store.dispatch("setLocation","/")}}}),H=V,G=Object(b["a"])(H,K,W,!1,null,null,null),Q=G.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("label",{attrs:{for:"labelsFinder"}},[e._v("Select an Avery product")]),n("fieldset",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selection,expression:"selection"}],staticStyle:{height:"250px"},attrs:{size:"5",id:"labelsFinder"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selection=t.target.multiple?n:n[0]}}},e._l(e.products,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"modal-dialog-buttons"},[n("a",{staticClass:"modal-dialog-buttons-alternative",attrs:{href:"https://groups.google.com/forum/#!forum/labelmaker",target:"_blank"}},[e._v("Suggest a new template")]),n("button",{on:{click:function(t){return t.preventDefault(),e.closeUI(t)}}},[e._v(" Cancel ")]),n("button",{staticClass:"button-action",attrs:{disabled:""===e.selection},on:{click:function(t){return t.preventDefault(),e.labelCreationUI(t)}}},[e._v("Use ")])])])},Y=[],q=r["a"].extend({name:"LabelsFinder",data:function(){return{selection:"",products:[]}},beforeCreate:function(){if(!window._storage){var e=window._app&&window._app.app_version||"2",t=document,n=t.createElement("script");n.src="https://cdn.jsdelivr.net/gh/frenchcooc/labelmaker-landing@"+e+"/dist/js/catalog.min.js",n.async=!0,n.defer=!0,t.body.appendChild(n)}},mounted:function(){this.fetchCatalog()},methods:{labelCreationUI:function(){this.$store.dispatch("setProduct",this.selection),this.$store.dispatch("setLocation","/")},closeUI:function(){window._frontend.close()},fetchCatalog:function(){if(!window._storage)return window.setTimeout(this.fetchCatalog,200);for(var e=window._storage.ALL_LABELS,t=e.length,n=[],r=0;r<t;r++)n.push(e[r][1]);this.products=n.sort()}}}),J=q,Z=Object(b["a"])(J,X,Y,!1,null,null,null),ee=Z.exports;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={"/":R,"/filepicker":Q,"/labels":ee},oe=r["a"].extend({mounted:function(){window.gtag("event","user_event",{user_account:"free"})},computed:ne({},Object(l["b"])(["location"]),{routedComponent:function(){return window.gtag("config","UA-136395985-5",{page_path:this.location}),re[this.location]}})}),ie=oe,se=ie,ae=Object(b["a"])(se,s,a,!1,null,null,null),ce=ae.exports;r["a"].use(l["a"]);var le=new l["a"].Store({state:{spreadsheet:{id:"",url:"",title:""},sheet:{title:""},product:"",template:"",location:window._app&&window._app.location||"/"},mutations:{setSpreadsheet:function(e,t){e.spreadsheet=t},clearSheet:function(e){e.sheet.title=""},setSheet:function(e,t){e.sheet.title=t},setProduct:function(e,t){e.product=t},setTemplate:function(e,t){e.template=t},setLocation:function(e,t){e.location=t}},actions:{setSpreadsheet:function(e,t){e.commit("setSpreadsheet",t)},clearSheet:function(e){e.commit("clearSheet")},setSheet:function(e,t){e.commit("setSheet",t)},setProduct:function(e,t){e.commit("setProduct",t)},setTemplate:function(e,t){e.commit("setTemplate",t)},setLocation:function(e,t){e.commit("setLocation",t)}}}),ue=r["a"].extend({name:"app",store:le,components:{AppRouter:ce}}),de=ue,pe=(n("034f"),Object(b["a"])(de,o,i,!1,null,null,null)),he=pe.exports;r["a"].config.productionTip=!0,new r["a"]({render:function(e){return e(he)}}).$mount("#app")}});
//# sourceMappingURL=app.js.map