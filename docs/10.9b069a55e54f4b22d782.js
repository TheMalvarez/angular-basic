(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{fap8:function(t,e,n){"use strict";n.r(e);var r=n("CcnG"),o=function(){return function(){}}(),s=n("pMnS"),i=n("Ip0R"),a=n("ZYCi"),u=function(){function t(t){this.httpClient=t,this.ratesApi="https://api.exchangeratesapi.io/latest",this.myRatesApi="https://api-base.herokuapp.com/api/pub/rates",this.currentEuroRates=null,this.myRates=null}return t.prototype.ngOnInit=function(){this.getCurrentEuroRates()},t.prototype.getCurrentEuroRates=function(){var t=this;this.httpClient.get(this.ratesApi+"?symbols=USD,GBP,CHF,JPY").subscribe(function(e){return t.currentEuroRates=e})},t.prototype.postRates=function(){var t=this;this.transformData().forEach(function(e){return t.httpClient.post(t.myRatesApi,e).subscribe()})},t.prototype.transformData=function(){var t=this,e=this.currentEuroRates.rates;return Object.keys(e).map(function(n){return{date:t.currentEuroRates.date,currency:n,euros:e[n]}})},t.prototype.getMyRates=function(){var t=this;this.httpClient.get(this.myRatesApi).subscribe(function(e){return t.myRates=e})},t.prototype.deleteMyRates=function(){this.httpClient.delete(this.myRatesApi).subscribe()},t}(),l=n("mrSG"),p=n("F/XL"),c=n("6blF"),h=n("Phjn"),d=n("VnD/"),f=n("67Y/"),y=function(){return function(){}}(),b=function(){return function(){}}(),m=function(){function t(t){var e=this;this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){e.headers=new Map,t.split("\n").forEach(function(t){var n=t.indexOf(":");if(n>0){var r=t.slice(0,n),o=r.toLowerCase(),s=t.slice(n+1).trim();e.maybeSetNormalizedName(r,o),e.headers.has(o)?e.headers.get(o).push(s):e.headers.set(o,[s])}})}:function(){e.headers=new Map,Object.keys(t).forEach(function(n){var r=t[n],o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(e.headers.set(o,r),e.maybeSetNormalizedName(n,o))})}:this.headers=new Map}return t.prototype.has=function(t){return this.init(),this.headers.has(t.toLowerCase())},t.prototype.get=function(t){this.init();var e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null},t.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},t.prototype.getAll=function(t){return this.init(),this.headers.get(t.toLowerCase())||null},t.prototype.append=function(t,e){return this.clone({name:t,value:e,op:"a"})},t.prototype.set=function(t,e){return this.clone({name:t,value:e,op:"s"})},t.prototype.delete=function(t,e){return this.clone({name:t,value:e,op:"d"})},t.prototype.maybeSetNormalizedName=function(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)},t.prototype.init=function(){var e=this;this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(t){return e.applyUpdate(t)}),this.lazyUpdate=null))},t.prototype.copyFrom=function(t){var e=this;t.init(),Array.from(t.headers.keys()).forEach(function(n){e.headers.set(n,t.headers.get(n)),e.normalizedNames.set(n,t.normalizedNames.get(n))})},t.prototype.clone=function(e){var n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n},t.prototype.applyUpdate=function(t){var e=t.name.toLowerCase();switch(t.op){case"a":case"s":var n=t.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(t.name,e);var r=("a"===t.op?this.headers.get(e):void 0)||[];r.push.apply(r,Object(l.g)(n)),this.headers.set(e,r);break;case"d":var o=t.value;if(o){var s=this.headers.get(e);if(!s)return;0===(s=s.filter(function(t){return-1===o.indexOf(t)})).length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}else this.headers.delete(e),this.normalizedNames.delete(e)}},t.prototype.forEach=function(t){var e=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(n){return t(e.normalizedNames.get(n),e.headers.get(n))})},t}(),v=function(){function t(){}return t.prototype.encodeKey=function(t){return g(t)},t.prototype.encodeValue=function(t){return g(t)},t.prototype.decodeKey=function(t){return decodeURIComponent(t)},t.prototype.decodeValue=function(t){return decodeURIComponent(t)},t}();function g(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var w=function(){function t(t){void 0===t&&(t={});var e,n,r,o=this;if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new v,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(e=t.fromString,n=this.encoder,r=new Map,e.length>0&&e.split("&").forEach(function(t){var e=t.indexOf("="),o=Object(l.f)(-1==e?[n.decodeKey(t),""]:[n.decodeKey(t.slice(0,e)),n.decodeValue(t.slice(e+1))],2),s=o[0],i=o[1],a=r.get(s)||[];a.push(i),r.set(s,a)}),r)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(function(e){var n=t.fromObject[e];o.map.set(e,Array.isArray(n)?n:[n])})):this.map=null}return t.prototype.has=function(t){return this.init(),this.map.has(t)},t.prototype.get=function(t){this.init();var e=this.map.get(t);return e?e[0]:null},t.prototype.getAll=function(t){return this.init(),this.map.get(t)||null},t.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},t.prototype.append=function(t,e){return this.clone({param:t,value:e,op:"a"})},t.prototype.set=function(t,e){return this.clone({param:t,value:e,op:"s"})},t.prototype.delete=function(t,e){return this.clone({param:t,value:e,op:"d"})},t.prototype.toString=function(){var t=this;return this.init(),this.keys().map(function(e){var n=t.encoder.encodeKey(e);return t.map.get(e).map(function(e){return n+"="+t.encoder.encodeValue(e)}).join("&")}).join("&")},t.prototype.clone=function(e){var n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([e]),n},t.prototype.init=function(){var t=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(e){return t.map.set(e,t.cloneFrom.map.get(e))}),this.updates.forEach(function(e){switch(e.op){case"a":case"s":var n=("a"===e.op?t.map.get(e.param):void 0)||[];n.push(e.value),t.map.set(e.param,n);break;case"d":if(void 0===e.value){t.map.delete(e.param);break}var r=t.map.get(e.param)||[],o=r.indexOf(e.value);-1!==o&&r.splice(o,1),r.length>0?t.map.set(e.param,r):t.map.delete(e.param)}}),this.cloneFrom=null)},t}();function R(t){return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer}function E(t){return"undefined"!=typeof Blob&&t instanceof Blob}function T(t){return"undefined"!=typeof FormData&&t instanceof FormData}var C=function(){function t(t,e,n,r){var o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new m),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=e;else{var i=e.indexOf("?");this.urlWithParams=e+(-1===i?"?":i<e.length-1?"&":"")+s}}else this.params=new w,this.urlWithParams=e}return t.prototype.serializeBody=function(){return null===this.body?null:R(this.body)||E(this.body)||T(this.body)||"string"==typeof this.body?this.body:this.body instanceof w?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},t.prototype.detectContentTypeHeader=function(){return null===this.body?null:T(this.body)?null:E(this.body)?this.body.type||null:R(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof w?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},t.prototype.clone=function(e){void 0===e&&(e={});var n=e.method||this.method,r=e.url||this.url,o=e.responseType||this.responseType,s=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress,u=e.headers||this.headers,l=e.params||this.params;return void 0!==e.setHeaders&&(u=Object.keys(e.setHeaders).reduce(function(t,n){return t.set(n,e.setHeaders[n])},u)),e.setParams&&(l=Object.keys(e.setParams).reduce(function(t,n){return t.set(n,e.setParams[n])},l)),new t(n,r,s,{params:l,headers:u,reportProgress:a,responseType:o,withCredentials:i})},t}(),O=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}({}),k=function(){return function(t,e,n){void 0===e&&(e=200),void 0===n&&(n="OK"),this.headers=t.headers||new m,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}(),x=function(t){function e(e){void 0===e&&(e={});var n=t.call(this,e)||this;return n.type=O.ResponseHeader,n}return Object(l.c)(e,t),e.prototype.clone=function(t){return void 0===t&&(t={}),new e({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})},e}(k),j=function(t){function e(e){void 0===e&&(e={});var n=t.call(this,e)||this;return n.type=O.Response,n.body=void 0!==e.body?e.body:null,n}return Object(l.c)(e,t),e.prototype.clone=function(t){return void 0===t&&(t={}),new e({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})},e}(k),P=function(t){function e(e){var n=t.call(this,e,0,"Unknown Error")||this;return n.name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):"Http failure response for "+(e.url||"(unknown url)")+": "+e.status+" "+e.statusText,n.error=e.error||null,n}return Object(l.c)(e,t),e}(k);function N(t,e){return{body:e,headers:t.headers,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}var A=function(){function t(t){this.handler=t}return t.prototype.request=function(t,e,n){var r,o=this;if(void 0===n&&(n={}),t instanceof C)r=t;else{var s;s=n.headers instanceof m?n.headers:new m(n.headers);var i=void 0;n.params&&(i=n.params instanceof w?n.params:new w({fromObject:n.params})),r=new C(t,e,void 0!==n.body?n.body:null,{headers:s,params:i,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}var a=Object(p.a)(r).pipe(Object(h.a)(function(t){return o.handler.handle(t)}));if(t instanceof C||"events"===n.observe)return a;var u=a.pipe(Object(d.a)(function(t){return t instanceof j}));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return u.pipe(Object(f.a)(function(t){if(null!==t.body&&!(t.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return t.body}));case"blob":return u.pipe(Object(f.a)(function(t){if(null!==t.body&&!(t.body instanceof Blob))throw new Error("Response is not a Blob.");return t.body}));case"text":return u.pipe(Object(f.a)(function(t){if(null!==t.body&&"string"!=typeof t.body)throw new Error("Response is not a string.");return t.body}));case"json":default:return u.pipe(Object(f.a)(function(t){return t.body}))}case"response":return u;default:throw new Error("Unreachable: unhandled observe type "+n.observe+"}")}},t.prototype.delete=function(t,e){return void 0===e&&(e={}),this.request("DELETE",t,e)},t.prototype.get=function(t,e){return void 0===e&&(e={}),this.request("GET",t,e)},t.prototype.head=function(t,e){return void 0===e&&(e={}),this.request("HEAD",t,e)},t.prototype.jsonp=function(t,e){return this.request("JSONP",t,{params:(new w).append(e,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},t.prototype.options=function(t,e){return void 0===e&&(e={}),this.request("OPTIONS",t,e)},t.prototype.patch=function(t,e,n){return void 0===n&&(n={}),this.request("PATCH",t,N(n,e))},t.prototype.post=function(t,e,n){return void 0===n&&(n={}),this.request("POST",t,N(n,e))},t.prototype.put=function(t,e,n){return void 0===n&&(n={}),this.request("PUT",t,N(n,e))},t}(),S=function(){function t(t,e){this.next=t,this.interceptor=e}return t.prototype.handle=function(t){return this.interceptor.intercept(t,this.next)},t}(),z=new r.p("HTTP_INTERCEPTORS"),F=function(){function t(){}return t.prototype.intercept=function(t,e){return e.handle(t)},t}(),H=/^\)\]\}',?\n/,L=function(){return function(){}}(),U=function(){function t(){}return t.prototype.build=function(){return new XMLHttpRequest},t}(),D=function(){function t(t){this.xhrFactory=t}return t.prototype.handle=function(t){var e=this;if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new c.a(function(n){var r=e.xhrFactory.build();if(r.open(t.method,t.urlWithParams),t.withCredentials&&(r.withCredentials=!0),t.headers.forEach(function(t,e){return r.setRequestHeader(t,e.join(","))}),t.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){var o=t.detectContentTypeHeader();null!==o&&r.setRequestHeader("Content-Type",o)}if(t.responseType){var s=t.responseType.toLowerCase();r.responseType="json"!==s?s:"text"}var i=t.serializeBody(),a=null,u=function(){if(null!==a)return a;var e=1223===r.status?204:r.status,n=r.statusText||"OK",o=new m(r.getAllResponseHeaders()),s=function(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(r)||t.url;return a=new x({headers:o,status:e,statusText:n,url:s})},l=function(){var e=u(),o=e.headers,s=e.status,i=e.statusText,a=e.url,l=null;204!==s&&(l=void 0===r.response?r.responseText:r.response),0===s&&(s=l?200:0);var p=s>=200&&s<300;if("json"===t.responseType&&"string"==typeof l){var c=l;l=l.replace(H,"");try{l=""!==l?JSON.parse(l):null}catch(h){l=c,p&&(p=!1,l={error:h,text:l})}}p?(n.next(new j({body:l,headers:o,status:s,statusText:i,url:a||void 0})),n.complete()):n.error(new P({error:l,headers:o,status:s,statusText:i,url:a||void 0}))},p=function(t){var e=u().url,o=new P({error:t,status:r.status||0,statusText:r.statusText||"Unknown Error",url:e||void 0});n.error(o)},c=!1,h=function(e){c||(n.next(u()),c=!0);var o={type:O.DownloadProgress,loaded:e.loaded};e.lengthComputable&&(o.total=e.total),"text"===t.responseType&&r.responseText&&(o.partialText=r.responseText),n.next(o)},d=function(t){var e={type:O.UploadProgress,loaded:t.loaded};t.lengthComputable&&(e.total=t.total),n.next(e)};return r.addEventListener("load",l),r.addEventListener("error",p),t.reportProgress&&(r.addEventListener("progress",h),null!==i&&r.upload&&r.upload.addEventListener("progress",d)),r.send(i),n.next({type:O.Sent}),function(){r.removeEventListener("error",p),r.removeEventListener("load",l),t.reportProgress&&(r.removeEventListener("progress",h),null!==i&&r.upload&&r.upload.removeEventListener("progress",d)),r.abort()}})},t}(),I=new r.p("XSRF_COOKIE_NAME"),M=new r.p("XSRF_HEADER_NAME"),q=function(){return function(){}}(),B=function(){function t(t,e,n){this.doc=t,this.platform=e,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return t.prototype.getToken=function(){if("server"===this.platform)return null;var t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(i.w)(t,this.cookieName),this.lastCookieString=t),this.lastToken},t}(),K=function(){function t(t,e){this.tokenService=t,this.headerName=e}return t.prototype.intercept=function(t,e){var n=t.url.toLowerCase();if("GET"===t.method||"HEAD"===t.method||n.startsWith("http://")||n.startsWith("https://"))return e.handle(t);var r=this.tokenService.getToken();return null===r||t.headers.has(this.headerName)||(t=t.clone({headers:t.headers.set(this.headerName,r)})),e.handle(t)},t}(),G=function(){function t(t,e){this.backend=t,this.injector=e,this.chain=null}return t.prototype.handle=function(t){if(null===this.chain){var e=this.injector.get(z,[]);this.chain=e.reduceRight(function(t,e){return new S(t,e)},this.backend)}return this.chain.handle(t)},t}(),J=function(){function t(){}var e;return e=t,t.disable=function(){return{ngModule:e,providers:[{provide:K,useClass:F}]}},t.withOptions=function(t){return void 0===t&&(t={}),{ngModule:e,providers:[t.cookieName?{provide:I,useValue:t.cookieName}:[],t.headerName?{provide:M,useValue:t.headerName}:[]]}},t}(),X=function(){return function(){}}(),$=r.nb({encapsulation:2,styles:[],data:{}});function V(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(t()(),r.Fb(-1,null,[" Currency Rates.\n"])),(t()(),r.pb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),r.Fb(-1,null,[" From Euro to the world\n"])),(t()(),r.pb(4,0,null,null,2,"pre",[],null,null,null,null,null)),(t()(),r.Fb(5,null,["",""])),r.zb(0,i.g,[]),(t()(),r.pb(7,0,null,null,0,"input",[["class","primary"],["type","button"],["value","Save Rates"]],null,[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==t.component.postRates()&&r),r},null,null)),(t()(),r.pb(8,0,null,null,0,"input",[["class","primary"],["type","button"],["value","Refresh Rates"]],null,[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==t.component.getMyRates()&&r),r},null,null)),(t()(),r.pb(9,0,null,null,2,"pre",[],null,null,null,null,null)),(t()(),r.Fb(10,null,["",""])),r.zb(0,i.g,[]),(t()(),r.pb(12,0,null,null,0,"input",[["class","secondary"],["type","button"],["value","Delete Rates"]],null,[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==t.component.deleteMyRates()&&r),r},null,null)),(t()(),r.pb(13,0,null,null,4,"p",[],null,null,null,null,null)),(t()(),r.pb(14,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,e,n){var o=!0;return"click"===e&&(o=!1!==r.xb(t,15).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&o),o},null,null)),r.ob(15,671744,null,0,a.m,[a.k,a.a,i.j],{routerLink:[0,"routerLink"]},null),r.yb(16,1),(t()(),r.Fb(-1,null,["Observables"]))],function(t,e){var n=t(e,16,0,"observables");t(e,15,0,n)},function(t,e){var n=e.component;t(e,5,0,r.Gb(e,5,0,r.xb(e,6).transform(n.currentEuroRates))),t(e,10,0,r.Gb(e,10,0,r.xb(e,11).transform(n.myRates))),t(e,14,0,r.xb(e,15).target,r.xb(e,15).href)})}function W(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"app-rates",[],null,null,null,V,$)),r.ob(1,114688,null,0,u,[A],null,null)],function(t,e){t(e,1,0)},null)}var _=r.lb("app-rates",u,W,{},{},[]),Y=n("S1nX"),Z=function(){function t(t){this.httpClient=t,this.ratesApi="https://api.exchangeratesapi.io/latest",this.currentEuroRates$=null,this.myRates$=null}return t.prototype.ngOnInit=function(){this.getCurrentEuroRates()},t.prototype.getCurrentEuroRates=function(){this.currentEuroRates$=this.httpClient.get(this.ratesApi+"?symbols=USD,GBP,CHF,JPY").pipe(Object(Y.a)()),this.myRates$=this.currentEuroRates$.pipe(Object(f.a)(this.transformData))},t.prototype.transformData=function(t){var e=t.rates;return Object.keys(e).map(function(n){return{date:t.date,currency:n,euros:e[n]}})},t}(),Q=r.nb({encapsulation:2,styles:[],data:{}});function tt(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(t()(),r.Fb(-1,null,[" Currency Observable Rates.\n"])),(t()(),r.pb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),r.Fb(-1,null,[" From Euro to the $ world\n"])),(t()(),r.pb(4,0,null,null,3,"pre",[],null,null,null,null,null)),(t()(),r.Fb(5,null,["",""])),r.zb(131072,i.b,[r.h]),r.zb(0,i.g,[]),(t()(),r.pb(8,0,null,null,3,"pre",[],null,null,null,null,null)),(t()(),r.Fb(9,null,["",""])),r.zb(131072,i.b,[r.h]),r.zb(0,i.g,[])],null,function(t,e){var n=e.component;t(e,5,0,r.Gb(e,5,0,r.xb(e,7).transform(r.Gb(e,5,0,r.xb(e,6).transform(n.currentEuroRates$))))),t(e,9,0,r.Gb(e,9,0,r.xb(e,11).transform(r.Gb(e,9,0,r.xb(e,10).transform(n.myRates$)))))})}function et(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"app-obserates",[],null,null,null,tt,Q)),r.ob(1,114688,null,0,Z,[A],null,null)],function(t,e){t(e,1,0)},null)}var nt=r.lb("app-obserates",Z,et,{},{},[]),rt=n("xMyE"),ot=function(){function t(){}return t.prototype.intercept=function(t,e){var n=this,r=Date.now();return e.handle(t).pipe(Object(d.a)(function(t){return t instanceof j}),Object(rt.a)(function(t){return n.auditEvent(t,r)}))},t.prototype.auditEvent=function(t,e){var n=Date.now()-e;console.log(t.statusText+" on "+t.url+" in "+n+"ms")},t}(),st=function(){return function(){}}();n.d(e,"RatesModuleNgFactory",function(){return it});var it=r.mb(o,[],function(t){return r.vb([r.wb(512,r.j,r.bb,[[8,[s.a,_,nt]],[3,r.j],r.x]),r.wb(4608,i.o,i.n,[r.u,[2,i.v]]),r.wb(4608,q,B,[i.d,r.B,I]),r.wb(4608,K,K,[q,M]),r.wb(5120,z,function(t){return[t,new ot]},[K]),r.wb(4608,U,U,[]),r.wb(6144,L,null,[U]),r.wb(4608,D,D,[L]),r.wb(6144,b,null,[D]),r.wb(4608,y,G,[b,r.q]),r.wb(4608,A,A,[y]),r.wb(1073742336,i.c,i.c,[]),r.wb(1073742336,J,J,[]),r.wb(1073742336,X,X,[]),r.wb(1073742336,a.n,a.n,[[2,a.t],[2,a.k]]),r.wb(1073742336,st,st,[]),r.wb(1073742336,o,o,[]),r.wb(256,I,"XSRF-TOKEN",[]),r.wb(256,M,"X-XSRF-TOKEN",[]),r.wb(1024,a.i,function(){return[[{path:"",component:u},{path:"observables",component:Z}]]},[])])})}}]);