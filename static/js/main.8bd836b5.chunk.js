(this["webpackJsonpposv2-events-frontend"]=this["webpackJsonpposv2-events-frontend"]||[]).push([[0],{63:function(e,t,n){e.exports=n(78)},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a,r=n(0),s=n.n(r),l=n(8),c=n.n(l),i=(n(68),n(69),n(32)),o=n(33),u=n(57),m=n(55),h=n(38),p=n(49),f=n.n(p),v=n(27),d=(n(70),"https://orbs-v2-matic-event-explorer.herokuapp.com/"),E="https://orbs-network.github.io/v2-matic-event-explorer",b=n(109),g=n(119),y=n(114),k=n(115),w=n(116),x=n(117),S=n(113),j=n(118),N=n(43),O=n.n(N),T=n(54),_=n.n(T),I=function(e){return r.createElement("div",{className:"error-msg-container"},r.createElement("div",{className:"error-header"},"Error loading events"),r.createElement("div",{className:"error-txt"},e.err.toString()))},z=function(e){return r.createElement("a",{target:"_blank",href:"https://etherscan.io/address/"+e.addr},e.caption||e.addr)},L=function(e){return r.createElement("a",{target:"_blank",href:"https://etherscan.io/block/"+e.block.toString()},e.caption||"#"+e.block)},A=function(e){return r.createElement("a",{target:"_blank",href:"https://etherscan.io/tx/"+e.txn.toString()},e.caption||e.txn)},C=function(){return r.createElement("div",{className:"loading-msg"},r.createElement("span",null,"Loading.."))};var P=/^0x[0-9a-fA-F]{40}$/;var B=Object(v.b)("events")(a=Object(v.c)(a=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).eventNameInput=void 0,e.searchTextInput=void 0,e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=function(){var t=new URLSearchParams(window.location.search);e.searchTextInput.value=t.get("searchText")||"",e.eventNameInput.value=t.get("eventName")||"",e.props.events.limit=parseInt(t.get("limit"))||10,e.search(parseInt(t.get("offset"))||0)};t(),window.onpopstate=function(){t()}}},{key:"render",value:function(){var e=this,t=this.props.events,n=t.syncStatus,a=null!=n?n.latestBlock-n.topSyncedBlock:0;return r.createElement("div",null,r.createElement("div",{className:"header"},r.createElement("img",{src:E+"/orbs-logo.svg"}),r.createElement("span",{style:{fontSize:53}},"ORBS v2"),r.createElement("span",{style:{fontSize:53,marginLeft:40,fontWeight:"normal"}},"Event Explorer"),r.createElement("div",{style:{flex:1}}),n&&r.createElement("span",{style:{fontSize:15}},a>10?r.createElement("span",null,"Sync status: ",a," blocks remaining"):r.createElement("span",null,"Sync status: complete"),r.createElement(b.a,{"aria-label":"Refresh",onClick:function(){return e.search()}},r.createElement(_.a,{style:{color:"white"}})))),r.createElement("div",{className:"events-body"},t.loading&&r.createElement(C,null),t.error&&r.createElement(I,{err:t.error}),r.createElement("div",{className:"search-box"},r.createElement("form",{onSubmit:function(t){t.preventDefault(),e.search()}},r.createElement("span",null,"Filter by \xa0"),r.createElement("datalist",{id:"events-list"},t.eventNames.sort().map((function(e){return r.createElement("option",{value:e})}))),r.createElement("input",{ref:function(t){return e.eventNameInput=t},placeholder:"Event Name",list:"events-list"}),r.createElement("span",null,"\xa0and/or\xa0"),r.createElement("input",{ref:function(t){return e.searchTextInput=t},placeholder:"Address, Number, Text, etc.."}),r.createElement(b.a,{"aria-label":"Search",onClick:function(){return e.search()}},r.createElement(O.a,null)),r.createElement("input",{type:"submit",style:{position:"absolute",left:-9999,width:1,height:1},tabIndex:-1}),r.createElement(g.a,{className:"table-pagination",rowsPerPageOptions:[5],component:"span",count:t.totalEvents||-1,rowsPerPage:t.limit,page:t.offset/t.limit,onChangePage:function(e,n){t.offset=t.limit*n,t.load()},onChangeRowsPerPage:function(){}}))),r.createElement("div",{className:"events-container"},r.createElement(y.a,{className:"events-table"},r.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},r.createElement(w.a,null,r.createElement(x.a,null,r.createElement(S.a,null,"Timestamp (UTC)"),r.createElement(S.a,null,"Contract"),r.createElement(S.a,null,"Event"),r.createElement(S.a,null,"Data"))),r.createElement(j.a,null,t.events.map((function(n){return r.createElement(x.a,{hover:!0,role:"checkbox",tabIndex:-1},r.createElement(S.a,null,r.createElement("div",{style:{display:"inlineBlock",paddingTop:17}},f.a.utc(1e3*n.event_timestamp_seconds).format("MMMM Do YYYY, HH:mm:ss"),r.createElement("br",null),r.createElement("span",{className:"block-span",style:{fontSize:12}}," Block ",r.createElement(L,{block:n.block_number}),"\xa0\xa0\xa0"),r.createElement(A,{txn:n.tx_hash,caption:"Txn"}))),r.createElement(S.a,null,r.createElement(z,{addr:n.contract_address,caption:(a=(t.lookupAddress(n.contract_address)||{name:"<unknown>"}).name,""==a?a:a[0].toUpperCase()+a.slice(1))})),r.createElement(S.a,null,r.createElement("span",{style:{fontSize:20,fontWeight:500}},n.event_name)),r.createElement(S.a,null,e.renderEventData(n)));var a}))))))))}},{key:"search",value:function(e){var t=this.props.events;t.offset=e||0,t.eventName=this.eventNameInput.value.trim(),t.searchText=this.searchTextInput.value.trim(),t.load()}},{key:"renderEventData",value:function(e){var t=this;if(!e.parsed)return r.createElement("pre",{style:{display:"inline-block",maxWidth:150}},e.data);if(function(e){var t=h.values(e.parsed_data);return 0!=t.length&&0==t.filter((function(e){return!Array.isArray(e)})).length&&0==t.filter((function(e){return e.length!=t[0].length})).length}(e)){var n=function(e){for(var t={},n=0,a=Object.keys(e);n<a.length;n++){var r=a[n];t[r]=e[r],"weights"==r.toLowerCase()&&function(){var e=h.sum(t[r].map((function(e){return parseInt(e)})));t[r]=t[r].map((function(t){return"".concat(t," (").concat(Math.floor(parseInt(t)/e*100),"%)")}))}()}return t}(e.parsed_data),a=Object.keys(n);return r.createElement(k.a,{className:"tabular-event-data",size:"small"},r.createElement(w.a,null,r.createElement(x.a,null,a.map((function(e){return r.createElement(S.a,null,e)})))),r.createElement(j.a,null,h.zip.apply(null,a.map((function(e){return n[e]}))).map((function(e){return r.createElement(x.a,null,e.map((function(e){return r.createElement(S.a,null,t.renderValue(e.toString()))})))}))))}return r.createElement(k.a,{size:"small",className:"tabular-event-data"},r.createElement(j.a,null,Object.keys(e.parsed_data).map((function(n){return r.createElement(x.a,null,r.createElement(S.a,null,r.createElement("span",{style:{fontWeight:500}},n)),r.createElement(S.a,null,t.renderValue(e.parsed_data[n].toString())))}))))}},{key:"renderValue",value:function(e){var t,n=this.props.events.lookupAddress(e);return r.createElement("span",null,null!=n?r.createElement("span",null,n.name," ",this.ethereumAddr(e)):(t=e,P.exec(t)?this.ethereumAddr(e):e))}},{key:"ethereumAddr",value:function(e){var t=this;return r.createElement("span",null,r.createElement(z,{addr:e}),r.createElement(b.a,{style:{padding:"0 0 0 5px"}},r.createElement(O.a,{onClick:function(){t.searchTextInput.value=e,t.search()}})))}}]),n}(r.Component))||a)||a;var M=function(){return s.a.createElement(B,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D,R,W,Q,U,Y,H,V,F=n(56),J=n(15),$=n.n(J),q=n(30),G=n(20),K=n(21),X=(n(77),n(6));var Z={events:new(D=function(){function e(){Object(i.a)(this,e),this.offset=0,this.limit=10,this.searchText="",this.eventName="",Object(G.a)(this,"loading",R,this),Object(G.a)(this,"error",W,this),Object(G.a)(this,"events",Q,this),Object(G.a)(this,"totalEvents",U,this),Object(G.a)(this,"addressLookup",Y,this),Object(G.a)(this,"eventNames",H,this),Object(G.a)(this,"syncStatus",V,this)}return Object(o.a)(e,[{key:"setQueryParams",value:function(){var e=new URLSearchParams(window.location.search);e.set("offset",this.offset.toString()),e.set("limit",this.limit.toString()),e.set("searchText",this.searchText.toString()),e.set("eventName",this.eventName.toString()),e.toString()!=window.location.search&&window.history.pushState({},null,window.location.pathname+"?"+e.toString())}},{key:"load",value:function(){var e=Object(q.a)($.a.mark((function e(){var t,n,a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setQueryParams(),this.loading=!0,this.error=null,this.events=[],e.prev=4,t=this.getQuerystring(),e.next=8,this.loadAddressLookup();case 8:return e.next=10,this.loadEventNames();case 10:return e.next=12,this.loadSyncStatus();case 12:return e.next=14,fetch(d+"/events?"+t);case 14:if(n=e.sent,this.getQuerystring()!=t){e.next=21;break}return e.next=18,n.json();case 18:a=e.sent,this.events=a.events,this.totalEvents=a.total;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(4),console.error(e.t0),this.error=e.t0;case 27:this.loading=!1;case 28:case"end":return e.stop()}}),e,this,[[4,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"loadAddressLookup",value:function(){var e=Object(q.a)($.a.mark((function e(){var t,n,a,r,s,l;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d+"/address_lookup");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a={},r=Object(F.a)(n);try{for(r.s();!(s=r.n()).done;)l=s.value,a[l.address.toLowerCase()]=l}catch(c){r.e(c)}finally{r.f()}this.addressLookup=a;case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadEventNames",value:function(){var e=Object(q.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d+"/event_names");case 2:return t=e.sent,e.next=5,t.json();case 5:this.eventNames=e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadSyncStatus",value:function(){var e=Object(q.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d+"/sync_status");case 2:return t=e.sent,e.next=5,t.json();case 5:this.syncStatus=e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"lookupAddress",value:function(e){return this.addressLookup[e.toLowerCase()]}},{key:"getQuerystring",value:function(){var e=new URLSearchParams("");return e.set("offset",this.offset.toString()),e.set("limit",this.limit.toString()),this.searchText&&e.set("searchText",this.searchText),this.eventName&&e.set("eventName",this.eventName),e.toString()}}]),e}(),R=Object(K.a)(D.prototype,"loading",[X.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),W=Object(K.a)(D.prototype,"error",[X.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=Object(K.a)(D.prototype,"events",[X.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),U=Object(K.a)(D.prototype,"totalEvents",[X.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=Object(K.a)(D.prototype,"addressLookup",[X.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),H=Object(K.a)(D.prototype,"eventNames",[X.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),V=Object(K.a)(D.prototype,"syncStatus",[X.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D)};window.stores=Z,c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v.a,Z,s.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.8bd836b5.chunk.js.map