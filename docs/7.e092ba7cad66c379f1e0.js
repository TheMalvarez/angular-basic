(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6E1j":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),r=t("pMnS"),a=t("Ip0R"),o=function(){function n(){var n=this;this.getSpeedClass=function(){return n.currentSpeed<n.getThreshold()?"primary":"secondary"},this.getThreshold=function(){return.8*n.topSpeed}}return n.prototype.ngOnInit=function(){},n}(),i=e.nb({encapsulation:2,styles:[],data:{}});function c(n){return e.Hb(0,[e.zb(0,a.d,[e.u]),(n()(),e.pb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,[" Speed:\n"])),(n()(),e.pb(3,0,null,null,6,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.pb(4,0,null,null,2,"div",[["class","section"]],null,null,null,null,null)),(n()(),e.Fb(5,null,[" "," "," "])),e.Bb(6,2),(n()(),e.pb(7,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"progress",[],[[8,"value",0],[8,"max",0]],null,null,null,null)),e.ob(9,278528,null,0,a.j,[e.s,e.t,e.k,e.D],{ngClass:[0,"ngClass"]},null)],function(n,l){n(l,9,0,l.component.getSpeedClass())},function(n,l){var t=l.component,u=e.Gb(l,5,0,n(l,6,0,e.xb(l,0),t.currentSpeed,"1.2-2"));n(l,5,0,u,t.units),n(l,8,0,t.currentSpeed,t.topSpeed)})}var p=function(){function n(){this.brake=new e.m,this.throttle=new e.m}return n.prototype.ngOnInit=function(){},n}(),s=e.nb({encapsulation:2,styles:[],data:{}});function b(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,[" Pedals:\n"])),(n()(),e.pb(2,0,null,null,2,"form",[],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,0,"input",[["class","secondary"],["type","button"],["value","brake"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.brake.emit(1)&&e),e},null,null)),(n()(),e.pb(4,0,null,null,0,"input",[["class","tertiary"],["type","button"],["value","throttle"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.throttle.emit(1)&&e),e},null,null))],null,function(n,l){var t=l.component;n(l,3,0,t.disableBrake),n(l,4,0,t.disableThrottle)})}var d=function(){function n(){var n=this;this.getDelta=function(l){return l+(n.car.maxSpeed-n.car.currentSpeed)/10}}return n.prototype.ngOnInit=function(){this.car={name:"Roadster",maxSpeed:120,currentSpeed:0},this.checkLimits()},n.prototype.onBrake=function(n){this.car.currentSpeed-=this.getDelta(n),this.checkLimits()},n.prototype.onThrottle=function(n){this.car.currentSpeed+=this.getDelta(n),this.checkLimits()},n.prototype.checkLimits=function(){this.disableBrake=!1,this.disableThrottle=!1,this.car.currentSpeed<=0?(this.car.currentSpeed=0,this.disableBrake=!0):this.car.currentSpeed>=this.car.maxSpeed&&(this.car.currentSpeed=this.car.maxSpeed,this.disableThrottle=!0)},n}(),h=e.nb({encapsulation:2,styles:[],data:{}});function f(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Fb(1,null,[" ","\n"])),(n()(),e.pb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Fb(3,null,[" Top speed: ",""])),(n()(),e.pb(4,0,null,null,1,"app-display",[],null,null,null,c,i)),e.ob(5,114688,null,0,o,[],{currentSpeed:[0,"currentSpeed"],topSpeed:[1,"topSpeed"],units:[2,"units"]},null),(n()(),e.pb(6,0,null,null,1,"app-pedals",[],null,[[null,"brake"],[null,"throttle"]],function(n,l,t){var e=!0,u=n.component;return"brake"===l&&(e=!1!==u.onBrake(t)&&e),"throttle"===l&&(e=!1!==u.onThrottle(t)&&e),e},b,s)),e.ob(7,114688,null,0,p,[],{disableBrake:[0,"disableBrake"],disableThrottle:[1,"disableThrottle"]},{brake:"brake",throttle:"throttle"})],function(n,l){var t=l.component;n(l,5,0,t.car.currentSpeed,t.car.maxSpeed,"Km/h"),n(l,7,0,t.disableBrake,t.disableThrottle)},function(n,l){var t=l.component;n(l,1,0,t.car.name),n(l,3,0,t.car.maxSpeed)})}function m(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-car",[],null,null,null,f,h)),e.ob(1,114688,null,0,d,[],null,null)],function(n,l){n(l,1,0)},null)}var S=e.lb("app-car",d,m,{},{},[]),k=t("ZYCi"),v=function(){return function(){}}();t.d(l,"CarModuleNgFactory",function(){return y});var y=e.mb(u,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[r.a,S]],[3,e.j],e.x]),e.wb(4608,a.n,a.m,[e.u,[2,a.u]]),e.wb(1073742336,a.b,a.b,[]),e.wb(1073742336,k.n,k.n,[[2,k.t],[2,k.k]]),e.wb(1073742336,v,v,[]),e.wb(1073742336,u,u,[]),e.wb(1024,k.i,function(){return[[{path:"",component:d}]]},[])])})}}]);