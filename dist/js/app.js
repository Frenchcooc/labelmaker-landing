(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"360e":function(e,t,n){},"45a1":function(e,t,n){},"4e65":function(e,t,n){"use strict";var r=n("45a1"),a=n.n(r);a.a},7885:function(e,t,n){"use strict";var r=n("360e"),a=n.n(r);a.a},"85ec":function(e,t,n){},a5a7:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-router")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.routedComponent,{tag:"component"})},s=[],l=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"LabelmakerApp"}},[n("div",{staticClass:"modal-dialog-content"},[n("LabelsCreateProduct"),n("LabelsCreateSpreadsheet"),n("LabelsCreateDesign")],1),n("div",{staticClass:"modal-dialog-buttons"},[n("a",{staticClass:"modal-dialog-buttons-alternative",attrs:{href:"https://groups.google.com/forum/#!forum/labelmaker",target:"_blank",rel:"noopener"}},[e._v("Learn more")]),n("button",{on:{click:function(t){return t.preventDefault(),e.closeUI(t)}}},[e._v(" Cancel ")]),e.isOwner?n("button",{on:{click:function(t){return t.preventDefault(),e.testUI(t)}}},[e._v(" Test ")]):e._e(),n("button",{staticClass:"button-action",attrs:{disabled:!e.isMergeDoable},on:{click:function(t){return t.preventDefault(),e.initializeMerge(t)}}},[e.isMergeInProgress?n("div",[n("span",{staticClass:"spinner-border spinner-border-xs"})]):n("span",[e._v("Create labels")])])])])},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fieldset",[n("div",[n("label",{attrs:{for:"labelmaker-spreadsheet-picker"}},[n("span",[e._v("Select spreadsheet")]),e.isSpreadsheetPicked?n("a",{attrs:{href:e.spreadsheet.url,target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon",attrs:{width:"10px",height:"10px",viewBox:"0 0 18 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{fill:"#5F6368","fill-rule":"nonzero"}},[n("path",{attrs:{d:"M16,16 L16,9 L18,9 L18,16 C18,17.1 17.1,18 16,18 L2,18 C0.89,18 0,17.1 0,16 L0,2 C0,0.9 0.89,0 2,0 L9,0 L9,2 L2,2 L2,16 L16,16 Z M11,0 L18,0 L18,7 L16,7 L16,3.41 L6.17,13.24 L4.76,11.83 L14.59,2 L11,2 L11,0 Z",id:"Shape"}})])])])]):n("span",{staticClass:"hint"},[e._v(" (optional)")])])]),e.isSpreadsheetPicked?n("div",{staticStyle:{"max-width":"478px"}},[n("div",{staticClass:"labelmaker-data-picker"},[n("SpreadsheetFilename",{attrs:{spreadsheet:e.spreadsheet}}),n("svg",{attrs:{x:"0px",y:"0px",viewBox:"0 0 24 24",focusable:"false",fill:"#000000"}},[n("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.sheet,expression:"sheet"}],staticClass:"ellipsis",attrs:{disabled:!e.sheets.length},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sheet=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select sheet")]),e._l(e.sheets,(function(t,r){return n("option",{key:r,domProps:{value:t.title}},[e._v(" "+e._s(t.title)+" ")])}))],2)],1)]):n("div",[n("SpreadsheetFilename",{attrs:{spreadsheet:e.spreadsheet}})],1)])])},f=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"ellipsis",attrs:{title:e.spreadsheet.title,id:"labelmaker-spreadsheet-picker"},on:{click:function(t){return t.preventDefault(),e.showFilePicker(t)}}},[n("img",{staticStyle:{"vertical-align":"middle","padding-right":"4px","margin-top":"-3px",display:"inline-block"},attrs:{src:"https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_spreadsheet_x128.png",width:"16",height:"16"}}),e.spreadsheet&&e.spreadsheet.title?n("span",[e._v(e._s(e.spreadsheet.title))]):n("span",[e._v("Select spreadsheet")])])},m=[],g=r["a"].extend({name:"LabelsCreateSpreadsheetButton",props:["spreadsheet"],methods:{showFilePicker:function(){this.$store.dispatch("setLocation","/filepicker")}}}),b=g,v=n("2877"),w=Object(v["a"])(b,h,m,!1,null,null,null),_=w.exports,y=r["a"].extend({name:"LabelsCreateSpreadsheet",components:{SpreadsheetFilename:_},data:function(){return{sheets:[]}},mounted:function(){this.initializeSheets()},computed:{isSpreadsheetPicked:function(){return this.spreadsheet&&""!==this.spreadsheet.id},spreadsheet:function(){return this.$store.state.spreadsheet},sheet:{get:function(){return this.$store.state.sheet.title},set:function(e){this.$store.dispatch("setSheet",e)}}},methods:{initializeSheets:function(){this.spreadsheet.id&&window._backend.withSuccessHandler(this.onSheetsFetched).uiGetSheets(this.spreadsheet.id)},onSheetsFetched:function(e){this.sheets=e,e.length>0&&!this.sheet&&this.$store.dispatch("setSheet",e[0].title)}}}),k=y,O=(n("d81f"),Object(v["a"])(k,p,f,!1,null,"7e5e890f",null)),P=O.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fieldset",[n("label",{attrs:{for:"labelmaker-labels-product"}},[e._v("Label product")]),n("button",{attrs:{id:"labelmaker-labels-product",type:"button"},on:{click:function(t){return t.preventDefault(),e.uiLabelsFinder(t)}}},[n("span",{staticClass:"ellipsis",staticStyle:{"max-width":"445px",display:"block"}},[e._v(e._s(e.product||"Select a template"))])])])])},x=[],L=r["a"].extend({name:"CreateLabelsProduct",computed:{product:function(){return this.$store.state.product}},methods:{uiLabelsFinder:function(){this.$store.dispatch("setLocation","/labels")}}});Element&&!Element.prototype.matches&&(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var j=L,C=Object(v["a"])(j,S,x,!1,null,null,null),D=C.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fieldset",[n("div",[n("label",{attrs:{for:"labelmaker-template"}},[e._v(" Content ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mergefield,expression:"mergefield"}],staticClass:"labelmaker-mergefields",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mergefield=t.target.multiple?n:n[0]},e.addMergeField]}},[n("option",{attrs:{disabled:"",selected:"",value:""}},[e._v("Add a merge field")]),e._l(e.mergefields,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])}))],2)]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.template,expression:"template"}],staticStyle:{resize:"none","max-height":"100px"},attrs:{rows:"5",id:"labelmaker-template",placeholder:"Enter the label's content..."},domProps:{value:e.template},on:{input:function(t){t.target.composing||(e.template=t.target.value)}}})])])},M=[];n("fb6a");function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=r["a"].extend({name:"CreateLabelsDesign",data:function(){return{mergefield:""}},computed:F({},Object(c["b"])(["mergefields"]),{template:{get:function(){return this.$store.state.template},set:function(e){this.$store.dispatch("setTemplate",e)}}}),methods:{addMergeField:function(e){var t=e.target?e.target:e.srcElement,n=t.value,r=this.template;">>"===r.slice(-2)&&(r+=" "),r+="<<"+n+">>",this.template=r,this.mergefield="";var a=document.getElementById("labelmaker-template");a&&a.focus()}}}),I=A,T=(n("7885"),Object(v["a"])(I,E,M,!1,null,"f1bfd78a",null)),U=T.exports;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=r["a"].extend({name:"LabelsCreate",components:{LabelsCreateSpreadsheet:P,LabelsCreateProduct:D,LabelsCreateDesign:U},data:function(){return{isMergeInProgress:!1}},computed:N({},Object(c["b"])(["spreadsheet","sheet","template","product"]),{isMergeDoable:function(){return""!==this.product},isOwner:function(){return window._user&&"-Lz12Exoz56yKHV_Q19U"===window._user.id||!1}}),methods:{reloadUI:function(){window._backend.uiReloadModal()},closeUI:function(){window._frontend.close()},testUI:function(){this.$store.dispatch("setLocation","/tester")},initializeMerge:function(){this.isMergeInProgress=!0;var e=this;window._backend.withFailureHandler(e.onMergeFailure).withSuccessHandler(e.onMergeSuccess).uiStartMerge(e.spreadsheet.id,e.sheet.title,e.product,e.template)},onMergeSuccess:function(e){e&&e.metadata?(this.isMergeInProgress=!1,this.$store.dispatch("setDocument",e.metadata.document.url),this.$store.dispatch("setLocation","/ready"),window.gtag("event","merge",{event_category:"engagement",event_label:this.product,value:e.metadata.metrics.labels||0}),window.saasmetrics("event",{category:"engagement",action:"merge",label:this.product,value:e.metadata.metrics.labels||0})):window._logger(new Error("Merge did not returned metadata"))},onMergeFailure:function(e){this.isMergeInProgress=!1,window._logger(e),window.saasmetrics("event",{category:"engagement",action:"merge_failure",label:this.product})}}}),B=H,G=Object(v["a"])(B,u,d,!1,null,null,null),R=G.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("center",{staticStyle:{"margin-top":"150px"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[e.error?n("p",[e._v(e._s(e.error)),n("br"),e._v("Please try again")]):n("p",[e._v("Fetching spreadsheets."),n("br"),e._v("Please wait a few seconds...")])]),n("button",{on:{click:e.cancelFilePicker}},[e._v("Cancel")])])],1)},K=[],J=(n("a15b"),r["a"].extend({data:function(){return{googFilePickerAPIKey:["AIzaSyBtJ","IilOStGntZyOsEx9DEg","DlkCbMSeTT0"].join(""),userOAuthToken:"",isPickerApiLoaded:!1,error:""}},mounted:function(){var e=this,t=function(){window.google&&window.google.picker?e.isPickerApiLoaded=!0:window.gapi.load("picker",{callback:function(){e.isPickerApiLoaded=!0,e.initPicker()}}),window._backend.withSuccessHandler(e.initPicker).uiGetOAuthToken()};window.gapi?t():window.setTimeout((function(){if(!window.gapi)return e.error="Unable to initialize Google File Picker. GAPI object is undefined",void window._logger(new Error(e.error));t()}),3500)},methods:{initPicker:function(e){e&&(this.userOAuthToken=e),this.userOAuthToken&&this.isPickerApiLoaded&&this.renderPicker()},renderPicker:function(){var e={width:window.innerWidth,height:window.innerHeight},t=window.google.picker,n=new t.DocsView(t.ViewId.SPREADSHEETS);n.setMode(t.DocsViewMode.LIST);var r=(new t.PickerBuilder).addView(n).enableFeature(t.Feature.NAV_HIDDEN).hideTitleBar().setOAuthToken(this.userOAuthToken).setDeveloperKey(this.googFilePickerAPIKey).setCallback(this.pickerCallback).setOrigin(window._frontend.origin).setSize(e.width-2,e.height-2).build();r.setVisible(!0)},pickerCallback:function(e){var t=window.google.picker,n=e[t.Response.ACTION];if(n==t.Action.PICKED){var r=e[t.Response.DOCUMENTS][0],a=r[t.Document.ID],i=r[t.Document.URL],o=r[t.Document.NAME];this.$store.dispatch("clearSheet"),this.$store.dispatch("setSpreadsheet",{id:a,url:i,title:o}),window.gtag("event","picker",{event_category:"engagement",event_label:o}),window.saasmetrics("event",{category:"engagement",action:"picker",label:o}),this.cancelFilePicker()}else n==t.Action.CANCEL&&this.cancelFilePicker()},cancelFilePicker:function(){this.$store.dispatch("setLocation","/")}}})),Z=J,Q=Object(v["a"])(Z,V,K,!1,null,null,null),W=Q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"modal-dialog-content"},[n("fieldset",[n("label",{attrs:{for:"labelsFinder"}},[e._v("Select an Avery product")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.manufacturer,expression:"manufacturer"}],attrs:{id:"labelsFinder"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.manufacturer=t.target.multiple?n:n[0]},e.setProducts]}},e._l(e.manufacturers,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0),n("select",{directives:[{name:"model",rawName:"v-model",value:e.product,expression:"product"}],staticStyle:{height:"200px","margin-top":"8px"},attrs:{size:"4"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.product=t.target.multiple?n:n[0]}}},e._l(e.products,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0)])]),n("div",{staticClass:"modal-dialog-buttons"},[n("a",{staticClass:"modal-dialog-buttons-alternative",attrs:{href:"https://groups.google.com/forum/#!forum/labelmaker",target:"_blank",rel:"noopener"}},[e._v("Suggest a new template")]),n("button",{on:{click:function(t){return t.preventDefault(),e.goback(t)}}},[e._v(" Cancel ")]),n("button",{staticClass:"button-action",attrs:{disabled:""===e.product},on:{click:function(t){return t.preventDefault(),e.labelCreationUI(t)}}},[e._v("Use ")])])])},q=[],X=(n("ac1f"),n("1276"),r["a"].extend({name:"LabelsFinder",data:function(){return{manufacturer:"Avery US Letter",manufacturers:{},product:"",products:[],separator:" - "}},beforeCreate:function(){if(!window._catalog){var e=window._app&&window._app.app_version||"2.17",t=document,n=t.createElement("script");n.src="https://cdn.jsdelivr.net/gh/frenchcooc/labelmaker-landing@"+e+"/dist/js/catalog.min.js",n.async=!0,n.defer=!0,t.body.appendChild(n)}},mounted:function(){this.fetchCatalog(),this.setProductFromStore()},methods:{labelCreationUI:function(){var e=[this.manufacturer,this.separator,this.product].join("");this.$store.dispatch("setProduct",e),this.$store.dispatch("setLocation","/"),window.gtag("event","finder",{event_category:"engagement",event_label:e}),window.saasmetrics("event",{category:"engagement",action:"finder",label:e})},goback:function(){this.$store.dispatch("setLocation","/")},fetchCatalog:function(){if(!window._catalog)return window.setTimeout(this.fetchCatalog,200);this.manufacturers=window._catalog.allManufacturers,this.setProducts()},setProductFromStore:function(){var e=this.$store.state.product;if(e&&"string"===typeof e){var t=e.split(this.separator);this.manufacturer=t.shift(),this.setProducts(),this.product=t.join(this.separator)}},setProducts:function(){if(window._catalog){var e=window._catalog.allLabelsByManufacturers[this.manufacturer];this.products=e.sort()}}}})),ee=X,te=Object(v["a"])(ee,Y,q,!1,null,null,null),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"modal-dialog-content"},[n("table",[n("tbody",[n("tr",[n("td",[n("h2",[e._v("Your labels are ready!")]),n("p",[e._v("To print your labels, "),"sheets"===e.mode?n("span",[e._v("open the document")]):n("span",[e._v("close the add-on")]),e._v(' then click on the print icon (or select "File" > "Print").')]),n("p",[e._v("In the print dialogue, make sure that margins are set to none. ")])]),e._m(0)])])])]),n("div",{staticClass:"modal-dialog-buttons"},[n("button",{on:{click:function(t){return t.preventDefault(),e.createUI(t)}}},[e._v(" Create again ")]),"sheets"===e.mode?n("a",{staticClass:"button button-action",attrs:{href:e.documentUrl,target:"_blank",rel:"noopener"}},[e._v(" Open document ")]):n("button",{staticClass:"button-action",on:{click:function(t){return t.preventDefault(),e.closeUI(t)}}},[e._v(" Close & print labels ")])])])},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",[n("img",{attrs:{alt:"How to print labels. Select File then Print in the Google Docs interface",src:"https://labelsmerge.com/dist/img/how-to-print-labels.jpg",height:"200px",width:"255px"}})])}],ie=r["a"].extend({name:"LabelsReady",data:function(){return{isMergeInProgress:!1}},computed:{mode:function(){return window._app&&window._app.mode},documentUrl:function(){return this.$store.state.document}},methods:{createUI:function(){this.$store.dispatch("setLocation","/")},closeUI:function(){window._frontend.close()}}}),oe=ie,se=(n("4e65"),Object(v["a"])(oe,re,ae,!1,null,"40f90e20",null)),le=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("center",{staticStyle:{"margin-top":"150px"}},[n("form",{attrs:{action:"#"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.layout,expression:"layout"}],staticStyle:{width:"280px"},attrs:{placeholder:"S;8128;4657;7874;4657;2499;872;2;6;21000;29700",type:"text"},domProps:{value:e.layout},on:{input:function(t){t.target.composing||(e.layout=t.target.value)}}})]),n("button",{staticClass:"button-action",staticStyle:{"margin-right":"4px"},attrs:{type:"submit"},on:{click:e.buildTestLabels,submit:function(t){return t.preventDefault(),e.buildTestLabels(t)}}},[e._v("Test")]),n("button",{on:{click:e.labelCreationUI}},[e._v("Cancel")])])])],1)},ue=[],de=r["a"].extend({name:"LabelsTester",data:function(){return{layout:""}},methods:{labelCreationUI:function(){this.$store.dispatch("setLocation","/")},buildTestLabels:function(){window._backend.uiTestLayout(this.layout)}}}),pe=de,fe=Object(v["a"])(pe,ce,ue,!1,null,null,null),he=fe.exports;function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be={"/":R,"/filepicker":W,"/labels":ne,"/ready":le,"/tester":he},ve=r["a"].extend({mounted:function(){window.gtag("event","user_event",{user_account:"free"})},computed:ge({},Object(c["b"])(["location"]),{routedComponent:function(){return window.gtag("config","UA-136395985-5",{page_path:this.location}),be[this.location]}})}),we=ve,_e=we,ye=Object(v["a"])(_e,o,s,!1,null,null,null),ke=ye.exports,Oe=r["a"].extend({name:"app",components:{AppRouter:ke}}),Pe=Oe,Se=(n("034f"),Object(v["a"])(Pe,a,i,!1,null,null,null)),xe=Se.exports;r["a"].use(c["a"]);var Le=new c["a"].Store({state:{spreadsheet:{id:"",url:"",title:""},sheet:{title:""},product:"",template:"",document:"",mergefields:[],location:window._app&&window._app.location||"/"},mutations:{setSpreadsheet:function(e,t){t&&t.id&&(e.spreadsheet.id=t.id,e.spreadsheet.url=t.url,e.spreadsheet.title=t.title)},clearSheet:function(e){e.sheet.title=""},setSheet:function(e,t){e.sheet.title=t},setProduct:function(e,t){e.product=t},setTemplate:function(e,t){e.template=t},setDocument:function(e,t){e.document=t},setMergefields:function(e,t){e.mergefields=t},setLocation:function(e,t){e.location=t}},actions:{initializeFromUserLatestMerge:function(e){var t=window._user&&window._user.latest,n=t&&t.product,r=t&&t.template;n&&e.commit("setProduct",n),r&&e.commit("setTemplate",r||"")},initializeFromAppContext:function(e){var t=window._app&&window._app.context,n=t&&t.spreadsheet,r=t&&t.sheet;n&&e.dispatch("setSpreadsheet",n),r&&e.dispatch("setSheet",r.title)},setSpreadsheet:function(e,t){e.commit("setSpreadsheet",t)},clearSheet:function(e){e.commit("clearSheet")},setSheet:function(e,t){e.commit("setSheet",t),e.dispatch("getMergefields")},setProduct:function(e,t){e.commit("setProduct",t)},setTemplate:function(e,t){e.commit("setTemplate",t)},setDocument:function(e,t){e.commit("setDocument",t)},getMergefields:function(e){var t=function(t){e.dispatch("setMergefields",t)},n=e.state.spreadsheet.id,r=e.state.sheet.title;e.commit("setMergefields",[]),window._backend.withSuccessHandler(t).uiGetSheetHeaders(n,r)},setMergefields:function(e,t){e.commit("setMergefields",t)},setLocation:function(e,t){e.commit("setLocation",t)}}});r["a"].config.productionTip=!0,new r["a"]({store:Le,beforeCreate:function(){this.$store.dispatch("initializeFromAppContext"),this.$store.dispatch("initializeFromUserLatestMerge")},render:function(e){return e(xe)}}).$mount("#app")},d81f:function(e,t,n){"use strict";var r=n("a5a7"),a=n.n(r);a.a}});
//# sourceMappingURL=app.js.map