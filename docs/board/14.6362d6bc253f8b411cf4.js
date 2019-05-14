(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"LO/y":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),r=u("gIcY"),i=u("mrSG"),s=u("26FU"),a=function(){function n(){var n=this;this.token="",this.token$=new s.a(""),this.select$=function(){return n.token$.asObservable()}}return n.prototype.dispatch=function(n){this.token=n,this.token$.next(this.token)},n.ngInjectableDef=t.S({factory:function(){return new n},token:n,providedIn:"root"}),n}(),b=function(){function n(n,l,u,t){this.formBuilder=n,this.httpClient=l,this.tokenStore=u,this.router=t}return n.prototype.ngOnInit=function(){this.buildForm()},n.prototype.buildForm=function(){var n=(new Date).toISOString().substring(0,10);this.formGroup=this.formBuilder.group({registeredOn:n,name:["JOHN DOE".toLowerCase(),r.s.required],email:["john@angular.io",[r.s.required,r.s.email]],password:["",[r.s.required,r.s.minLength(4),this.validatePassword]]})},n.prototype.validatePassword=function(n){var l=n.value,u=null;return l.includes("$")||(u=i.a({},u,{dollar:"needs a dollar symbol"})),parseFloat(l[0])||(u=i.a({},u,{number:"must start with a number"})),u},n.prototype.register=function(){var n=this;this.httpClient.post("https://api-base.herokuapp.com/api/pub/credentials/registration",this.formGroup.value).subscribe(function(l){n.tokenStore.dispatch(l.token),n.router.navigate(["security/secret"])})},n.prototype.getError=function(n){var l="",u=this.formGroup.get(n);return u.touched&&null!=u.errors&&(l=JSON.stringify(u.errors)),l},n}(),c=u("t/Na"),p=u("ZYCi"),d=t.nb({encapsulation:2,styles:[],data:{}});function g(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,[" User registration\n"])),(n()(),t.pb(2,0,null,null,49,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.xb(n,4).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.xb(n,4).onReset()&&e),e},null,null)),t.ob(3,16384,null,0,r.v,[],null,null),t.ob(4,540672,null,0,r.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.Cb(2048,null,r.c,null,[r.g]),t.ob(6,16384,null,0,r.l,[[4,r.c]],null,null),(n()(),t.pb(7,0,null,null,8,"section",[],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,1,"label",[["for","registeredOn"]],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Registered On"])),(n()(),t.pb(10,0,null,null,5,"input",[["formControlName","registeredOn"],["name","registeredOn"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,11)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,11).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,11)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,11)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(11,16384,null,0,r.d,[t.D,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.i,function(n){return[n]},[r.d]),t.ob(13,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.i],[2,r.x]],{name:[0,"name"]},null),t.Cb(2048,null,r.j,null,[r.f]),t.ob(15,16384,null,0,r.k,[[4,r.j]],null,null),(n()(),t.pb(16,0,null,null,10,"section",[],null,null,null,null,null)),(n()(),t.pb(17,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Name"])),(n()(),t.pb(19,0,null,null,5,"input",[["formControlName","name"],["name","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,20)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,20).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,20)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,20)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(20,16384,null,0,r.d,[t.D,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.i,function(n){return[n]},[r.d]),t.ob(22,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.i],[2,r.x]],{name:[0,"name"]},null),t.Cb(2048,null,r.j,null,[r.f]),t.ob(24,16384,null,0,r.k,[[4,r.j]],null,null),(n()(),t.pb(25,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Fb(26,null,["",""])),(n()(),t.pb(27,0,null,null,10,"section",[],null,null,null,null,null)),(n()(),t.pb(28,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(n()(),t.Fb(-1,null,["E-mail"])),(n()(),t.pb(30,0,null,null,5,"input",[["formControlName","email"],["name","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,31)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,31).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,31)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,31)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(31,16384,null,0,r.d,[t.D,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.i,function(n){return[n]},[r.d]),t.ob(33,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.i],[2,r.x]],{name:[0,"name"]},null),t.Cb(2048,null,r.j,null,[r.f]),t.ob(35,16384,null,0,r.k,[[4,r.j]],null,null),(n()(),t.pb(36,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Fb(37,null,["",""])),(n()(),t.pb(38,0,null,null,10,"section",[],null,null,null,null,null)),(n()(),t.pb(39,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Password"])),(n()(),t.pb(41,0,null,null,5,"input",[["formControlName","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,42)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,42).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,42)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,42)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(42,16384,null,0,r.d,[t.D,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.i,function(n){return[n]},[r.d]),t.ob(44,671744,null,0,r.f,[[3,r.c],[8,null],[8,null],[6,r.i],[2,r.x]],{name:[0,"name"]},null),t.Cb(2048,null,r.j,null,[r.f]),t.ob(46,16384,null,0,r.k,[[4,r.j]],null,null),(n()(),t.pb(47,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Fb(48,null,["",""])),(n()(),t.pb(49,0,null,null,2,"section",[],null,null,null,null,null)),(n()(),t.pb(50,0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.register()&&t),t},null,null)),(n()(),t.Fb(-1,null,["Register me!"]))],function(n,l){n(l,4,0,l.component.formGroup),n(l,13,0,"registeredOn"),n(l,22,0,"name"),n(l,33,0,"email"),n(l,44,0,"password")},function(n,l){var u=l.component;n(l,2,0,t.xb(l,6).ngClassUntouched,t.xb(l,6).ngClassTouched,t.xb(l,6).ngClassPristine,t.xb(l,6).ngClassDirty,t.xb(l,6).ngClassValid,t.xb(l,6).ngClassInvalid,t.xb(l,6).ngClassPending),n(l,10,0,t.xb(l,15).ngClassUntouched,t.xb(l,15).ngClassTouched,t.xb(l,15).ngClassPristine,t.xb(l,15).ngClassDirty,t.xb(l,15).ngClassValid,t.xb(l,15).ngClassInvalid,t.xb(l,15).ngClassPending),n(l,19,0,t.xb(l,24).ngClassUntouched,t.xb(l,24).ngClassTouched,t.xb(l,24).ngClassPristine,t.xb(l,24).ngClassDirty,t.xb(l,24).ngClassValid,t.xb(l,24).ngClassInvalid,t.xb(l,24).ngClassPending),n(l,26,0,u.getError("name")),n(l,30,0,t.xb(l,35).ngClassUntouched,t.xb(l,35).ngClassTouched,t.xb(l,35).ngClassPristine,t.xb(l,35).ngClassDirty,t.xb(l,35).ngClassValid,t.xb(l,35).ngClassInvalid,t.xb(l,35).ngClassPending),n(l,37,0,u.getError("email")),n(l,41,0,t.xb(l,46).ngClassUntouched,t.xb(l,46).ngClassTouched,t.xb(l,46).ngClassPristine,t.xb(l,46).ngClassDirty,t.xb(l,46).ngClassValid,t.xb(l,46).ngClassInvalid,t.xb(l,46).ngClassPending),n(l,48,0,u.getError("password")),n(l,50,0,u.formGroup.invalid)})}function m(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-register",[],null,null,null,g,d)),t.ob(1,114688,null,0,b,[r.e,c.c,a,p.k],null,null)],function(n,l){n(l,1,0)},null)}var f=t.lb("app-register",b,m,{},{},[]),h=u("Ip0R"),x=u("67Y/"),v=function(){function n(n){this.httpClient=n}return n.prototype.ngOnInit=function(){},n.prototype.getSecret=function(){this.secret$=this.httpClient.get("https://api-base.herokuapp.com/api/priv/operations").pipe(Object(x.a)(function(n){return"Ok"}))},n}(),C=t.nb({encapsulation:2,styles:[],data:{}});function w(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,[" The secret\n"])),(n()(),t.pb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.getSecret()&&t),t},null,null)),(n()(),t.Fb(-1,null,["Get from secured server"])),(n()(),t.pb(4,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),t.Fb(5,null,["","\n"])),t.zb(131072,h.b,[t.h]),t.zb(0,h.h,[])],null,function(n,l){var u=l.component;n(l,5,0,t.Gb(l,5,0,t.xb(l,7).transform(t.Gb(l,5,0,t.xb(l,6).transform(u.secret$)))))})}function k(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-secret",[],null,null,null,w,C)),t.ob(1,114688,null,0,v,[c.c],null,null)],function(n,l){n(l,1,0)},null)}var y=t.lb("app-secret",v,k,{},{},[]),S=u("XlPw"),F=u("9Z1F"),O=function(){function n(n,l){var u=this;this.router=n,this.tokenStore=l,this.token="",this.tokenStore.select$().subscribe(function(n){return u.token=n})}return n.prototype.intercept=function(n,l){var u=n.clone({setHeaders:{Authorization:"bearer "+this.token}});return l.handle(u).pipe(Object(F.a)(this.handleError.bind(this)))},n.prototype.handleError=function(n){return n instanceof c.f&&401===n.status&&this.router.navigate(["security/register"]),Object(S.a)(n)},n.ngInjectableDef=t.S({factory:function(){return new n(t.W(p.k),t.W(a))},token:n,providedIn:"root"}),n}(),j=function(){return function(){}}();u.d(l,"SecurityModuleNgFactory",function(){return I});var I=t.mb(e,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[o.a,f,y]],[3,t.j],t.x]),t.wb(4608,h.p,h.o,[t.u,[2,h.w]]),t.wb(4608,r.e,r.e,[]),t.wb(4608,r.w,r.w,[]),t.wb(4608,c.j,c.p,[h.d,t.B,c.n]),t.wb(4608,c.q,c.q,[c.j,c.o]),t.wb(5120,c.a,function(n,l,u){return[n,new O(l,u)]},[c.q,p.k,a]),t.wb(4608,c.m,c.m,[]),t.wb(6144,c.k,null,[c.m]),t.wb(4608,c.i,c.i,[c.k]),t.wb(6144,c.b,null,[c.i]),t.wb(4608,c.g,c.l,[c.b,t.q]),t.wb(4608,c.c,c.c,[c.g]),t.wb(1073742336,h.c,h.c,[]),t.wb(1073742336,p.n,p.n,[[2,p.t],[2,p.k]]),t.wb(1073742336,j,j,[]),t.wb(1073742336,r.t,r.t,[]),t.wb(1073742336,r.q,r.q,[]),t.wb(1073742336,c.e,c.e,[]),t.wb(1073742336,c.d,c.d,[]),t.wb(1073742336,e,e,[]),t.wb(1024,p.i,function(){return[[{path:"register",component:b},{path:"secret",component:v},{path:"**",redirectTo:"secret"}]]},[]),t.wb(256,c.n,"XSRF-TOKEN",[]),t.wb(256,c.o,"X-XSRF-TOKEN",[])])})}}]);