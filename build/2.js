webpackJsonp([2],{401:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),a=(u(4),u(97),function(){return function(l,n,u){this.name=l,this.state=n,this.description=u}}()),e=u(157),o=function(){function l(l,n,u,t){this.navParams=l,this.viewCtrl=n,this._TodoListProvider=u,this.toastCtrl=t}return l.prototype.ngOnInit=function(){this._item=new a("",!1,""),this._AddOrEdit=!!this.navParams.get("addOrEdit"),this.todoList=this.navParams.get("todoList"),this._AddOrEdit||(this._item=this.navParams.get("item"))},l.prototype.addItem=function(){var l=this;this._TodoListProvider.addItem(this.todoList,this._item).then(function(n){l.presentToast("Task succesfuly added"),l.leave()}).catch(function(n){l.presentToast("Something wrong happened"),l.leave()})},l.prototype.updateItem=function(){var l=this;this._TodoListProvider.updateItem(this.todoList,this._item).then(function(n){l.presentToast("Task succesfuly updated"),l.leave()}).catch(function(n){l.presentToast("Something wrong happened"),l.leave()})},l.prototype.presentToast=function(l){this.toastCtrl.create({message:l,duration:3e3,cssClass:"text-center"}).present()},l.prototype.leave=function(l){this.viewCtrl.dismiss(l)},l}(),i=function(){return function(){}}(),s=u(277),c=u(278),r=u(279),d=u(280),_=u(281),g=u(282),b=u(283),p=u(284),m=u(285),h=u(52),f=u(26),k=u(2),v=u(163),C=u(6),Y=u(405),y=u(53),I=u(11),j=u(27),Z=u(406),x=u(156),T=u(68),w=u(402),z=u(29),P=u(5),A=u(12),M=u(47),U=u(21),F=u(286),L=u(22),S=u(18),O=u(55),q=u(99),D=u(56),E=u(408),X=u(161),V=u(166),B=t.X({encapsulation:2,styles:[],data:{}});function K(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","checkbox-icon"]],[[2,"checkbox-checked",null]],null,null,null,null)),(l()(),t.Z(1,0,null,null,0,"div",[["class","checkbox-inner"]],null,null,null,null,null)),(l()(),t.Z(2,0,null,null,2,"button",[["class","item-cover"],["ion-button","item-cover"],["role","checkbox"],["type","button"]],[[8,"id",0],[1,"aria-checked",0],[1,"aria-labelledby",0],[1,"aria-disabled",0]],null,null,h.b,h.a)),t.Y(3,1097728,null,0,f.a,[[8,"item-cover"],k.a,t.j,t.z],null,null),(l()(),t._20(-1,0,[" "]))],null,function(l,n){var u=n.component;l(n,0,0,u._value),l(n,2,0,u.id,u._value,u._labelId,u._disabled)})}var N=u(160),R=u(159),J=u(17),W=u(14),G=u(100),H=t.X({encapsulation:2,styles:[],data:{}});function Q(l){return t._22(0,[(l()(),t.Z(0,0,null,null,2,"button",[["block",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.addItem()&&t);return t},h.b,h.a)),t.Y(1,1097728,null,0,f.a,[[8,""],k.a,t.j,t.z],{block:[0,"block"]},null),(l()(),t._20(-1,0,["Add Task"]))],function(l,n){l(n,1,0,"")},null)}function $(l){return t._22(0,[(l()(),t.Z(0,0,null,null,2,"button",[["block",""],["color","warning"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.updateItem()&&t);return t},h.b,h.a)),t.Y(1,1097728,null,0,f.a,[[8,""],k.a,t.j,t.z],{color:[0,"color"],block:[1,"block"]},null),(l()(),t._20(-1,0,["Update Task"]))],function(l,n){l(n,1,0,"warning","")},null)}function ll(l){return t._22(0,[(l()(),t._20(-1,null,["\n"])),(l()(),t.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Y(2,16384,null,0,v.a,[k.a,t.j,t.z,[2,C.a]],null,null),(l()(),t._20(-1,null,["\n\n  "])),(l()(),t.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Y.b,Y.a)),t.Y(5,49152,null,0,y.a,[I.a,[2,C.a],[2,j.a],k.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(7,0,null,3,2,"ion-title",[],null,null,null,Z.b,Z.a)),t.Y(8,49152,null,0,x.a,[k.a,t.j,t.z,[2,T.a],[2,y.a]],null,null),(l()(),t._20(-1,0,["Task Details"])),(l()(),t._20(-1,3,["\n  "])),(l()(),t._20(-1,null,["\n\n"])),(l()(),t._20(-1,null,["\n\n\n"])),(l()(),t.Z(13,0,null,null,86,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,w.b,w.a)),t.Y(14,4374528,null,0,z.a,[k.a,P.a,A.a,t.j,t.z,I.a,M.a,t.u,[2,C.a],[2,j.a]],null,null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(16,0,null,1,60,"form",[["novalidate",""],["style","overflow: hidden;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var a=!0,e=l.component;"submit"===n&&(a=!1!==t._13(l,18).onSubmit(u)&&a);"reset"===n&&(a=!1!==t._13(l,18).onReset()&&a);"ngSubmit"===n&&(a=!1!==e.submit()&&a);return a},null,null)),t.Y(17,16384,null,0,U.n,[],null,null),t.Y(18,4210688,null,0,U.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t._17(2048,null,U.b,null,[U.j]),t.Y(20,16384,null,0,U.i,[U.b],null,null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(22,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,F.b,F.a)),t.Y(23,1097728,null,3,L.a,[S.a,k.a,t.j,t.z,[2,O.a]],null,null),t._18(335544320,1,{contentLabel:0}),t._18(603979776,2,{_buttons:1}),t._18(603979776,3,{_icons:1}),t.Y(27,16384,null,0,q.a,[],null,null),(l()(),t._20(-1,2,["\n      "])),(l()(),t.Z(29,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),t.Y(30,16384,[[1,4]],0,D.a,[k.a,t.j,t.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(-1,null,["Task Name"])),(l()(),t._20(-1,2,["\n      "])),(l()(),t.Z(33,0,null,3,4,"ion-input",[["name","title"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var t=!0;"ngModelChange"===n&&(t=!1!==(l.component._item.name=u)&&t);return t},E.b,E.a)),t.Y(34,671744,null,0,U.k,[[2,U.b],[8,null],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t._17(2048,null,U.g,null,[U.k]),t.Y(36,16384,null,0,U.h,[U.g],null,null),t.Y(37,5423104,null,0,X.a,[k.a,P.a,S.a,I.a,t.j,t.z,[2,z.a],[2,L.a],[2,U.g],A.a],{type:[0,"type"]},null),(l()(),t._20(-1,2,["\n    "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(40,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,F.b,F.a)),t.Y(41,1097728,null,3,L.a,[S.a,k.a,t.j,t.z,[2,O.a]],null,null),t._18(335544320,4,{contentLabel:0}),t._18(603979776,5,{_buttons:1}),t._18(603979776,6,{_icons:1}),t.Y(45,16384,null,0,q.a,[],null,null),(l()(),t._20(-1,2,["\n      "])),(l()(),t.Z(47,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),t.Y(48,16384,[[4,4]],0,D.a,[k.a,t.j,t.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(-1,null,["Description"])),(l()(),t._20(-1,2,["\n      "])),(l()(),t.Z(51,0,null,3,4,"ion-textarea",[["name","description"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var t=!0;"ngModelChange"===n&&(t=!1!==(l.component._item.description=u)&&t);return t},E.b,E.a)),t.Y(52,671744,null,0,U.k,[[2,U.b],[8,null],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t._17(2048,null,U.g,null,[U.k]),t.Y(54,16384,null,0,U.h,[U.g],null,null),t.Y(55,5423104,null,0,X.a,[k.a,P.a,S.a,I.a,t.j,t.z,[2,z.a],[2,L.a],[2,U.g],A.a],null,null),(l()(),t._20(-1,2,["\n    "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(58,0,null,null,17,"ion-item",[["class","item item-block"],["padding",""]],null,null,null,F.b,F.a)),t.Y(59,1097728,null,3,L.a,[S.a,k.a,t.j,t.z,[2,O.a]],null,null),t._18(335544320,7,{contentLabel:0}),t._18(603979776,8,{_buttons:1}),t._18(603979776,9,{_icons:1}),t.Y(63,16384,null,0,q.a,[],null,null),(l()(),t._20(-1,2,["\n      "])),(l()(),t.Z(65,0,null,1,2,"ion-label",[],null,null,null,null,null)),t.Y(66,16384,[[7,4]],0,D.a,[k.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._20(-1,null,["Finished"])),(l()(),t._20(-1,2,["\n      "])),(l()(),t.Z(69,0,null,0,5,"ion-checkbox",[["name","state"]],[[2,"checkbox-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"]],function(l,n,u){var a=!0,e=l.component;"click"===n&&(a=!1!==t._13(l,70)._click(u)&&a);"ngModelChange"===n&&(a=!1!==(e._item.state=u)&&a);return a},K,B)),t.Y(70,1228800,null,0,V.a,[k.a,S.a,[2,L.a],t.j,t.z],null,null),t._17(1024,null,U.f,function(l){return[l]},[V.a]),t.Y(72,671744,null,0,U.k,[[2,U.b],[8,null],[8,null],[2,U.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t._17(2048,null,U.g,null,[U.k]),t.Y(74,16384,null,0,U.h,[U.g],null,null),(l()(),t._20(-1,2,["\n    "])),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(78,0,null,1,20,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(79,16384,null,0,N.a,[],null,null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(81,0,null,null,6,"ion-col",[["class","col"]],null,null,null,null,null)),t.Y(82,16384,null,0,R.a,[],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(84,0,null,null,2,"button",[["block",""],["color","danger"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.leave(!0)&&t);return t},h.b,h.a)),t.Y(85,1097728,null,0,f.a,[[8,""],k.a,t.j,t.z],{color:[0,"color"],block:[1,"block"]},null),(l()(),t._20(-1,0,["cancel"])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(89,0,null,null,8,"ion-col",[["class","col"]],null,null,null,null,null)),t.Y(90,16384,null,0,R.a,[],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.U(16777216,null,null,1,null,Q)),t.Y(93,16384,null,0,J.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.U(16777216,null,null,1,null,$)),t.Y(96,16384,null,0,J.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n"])),(l()(),t._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,5,0,"primary");l(n,34,0,"title",u._item.name);l(n,37,0,"text");l(n,52,0,"description",u._item.description);l(n,72,0,"state",u._item.state);l(n,85,0,"danger",""),l(n,93,0,u._AddOrEdit),l(n,96,0,!u._AddOrEdit)},function(l,n){l(n,4,0,t._13(n,5)._hidden,t._13(n,5)._sbPadding),l(n,13,0,t._13(n,14).statusbarPadding,t._13(n,14)._hasRefresher),l(n,16,0,t._13(n,20).ngClassUntouched,t._13(n,20).ngClassTouched,t._13(n,20).ngClassPristine,t._13(n,20).ngClassDirty,t._13(n,20).ngClassValid,t._13(n,20).ngClassInvalid,t._13(n,20).ngClassPending),l(n,33,0,t._13(n,36).ngClassUntouched,t._13(n,36).ngClassTouched,t._13(n,36).ngClassPristine,t._13(n,36).ngClassDirty,t._13(n,36).ngClassValid,t._13(n,36).ngClassInvalid,t._13(n,36).ngClassPending),l(n,51,0,t._13(n,54).ngClassUntouched,t._13(n,54).ngClassTouched,t._13(n,54).ngClassPristine,t._13(n,54).ngClassDirty,t._13(n,54).ngClassValid,t._13(n,54).ngClassInvalid,t._13(n,54).ngClassPending),l(n,69,0,t._13(n,70)._disabled,t._13(n,74).ngClassUntouched,t._13(n,74).ngClassTouched,t._13(n,74).ngClassPristine,t._13(n,74).ngClassDirty,t._13(n,74).ngClassValid,t._13(n,74).ngClassInvalid,t._13(n,74).ngClassPending)})}var nl=t.V("page-item-details",o,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"page-item-details",[],null,null,null,ll,H)),t.Y(1,114688,null,0,o,[W.a,C.a,e.a,G.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),ul=u(162),tl=u(48);u.d(n,"ItemDetailsPageModuleNgFactory",function(){return al});var al=t.W(i,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[s.a,c.a,r.a,d.a,_.a,g.a,b.a,p.a,m.a,nl]],[3,t.i],t.s]),t._11(4608,J.l,J.k,[t.r,[2,J.t]]),t._11(4608,U.o,U.o,[]),t._11(4608,U.d,U.d,[]),t._11(512,J.c,J.c,[]),t._11(512,U.m,U.m,[]),t._11(512,U.e,U.e,[]),t._11(512,U.l,U.l,[]),t._11(512,ul.a,ul.a,[]),t._11(512,ul.b,ul.b,[]),t._11(512,i,i,[]),t._11(256,tl.a,o,[])])})},402:function(l,n,u){"use strict";u.d(n,"a",function(){return a}),n.b=e;var t=u(0),a=(u(2),u(5),u(12),u(47),u(6),u(27),t.X({encapsulation:2,styles:[],data:{}}));function e(l){return t._22(2,[t._18(402653184,1,{_fixedContent:0}),t._18(402653184,2,{_scrollContent:0}),(l()(),t.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t._12(null,0),(l()(),t.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t._12(null,1),t._12(null,2)],null,null)}},405:function(l,n,u){"use strict";u.d(n,"a",function(){return c}),n.b=r;var t=u(0),a=u(17),e=u(52),o=u(26),i=u(2),s=u(54),c=(u(6),u(27),t.X({encapsulation:2,styles:[],data:{}}));function r(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.backButtonClick(u)&&t);return t},e.b,e.a)),t.Y(3,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(4,1097728,null,0,o.a,[[8,"bar-button"],i.a,t.j,t.z],null,null),(l()(),t.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(6,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(7,147456,null,0,s.a,[i.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t.Y(9,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._20(10,null,["",""])),t._12(null,0),t._12(null,1),t._12(null,2),(l()(),t.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t.Y(15,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,t._13(n,7)._hidden),l(n,10,0,u._backText)})}},406:function(l,n,u){"use strict";u.d(n,"a",function(){return e}),n.b=o;var t=u(0),a=u(17),e=(u(2),t.X({encapsulation:2,styles:[],data:{}}));function o(l){return t._22(2,[(l()(),t.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}},408:function(l,n,u){"use strict";u.d(n,"a",function(){return s}),n.b=g;var t=u(0),a=u(17),e=u(52),o=u(26),i=u(2),s=(u(5),u(18),u(12),t.X({encapsulation:2,styles:[],data:{}}));function c(l){return t._22(0,[(l()(),t.Z(0,0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"],["dir","auto"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,u){var t=!0,a=l.component;"input"===n&&(t=!1!==a.onInput(u)&&t);"blur"===n&&(t=!1!==a.onBlur(u)&&t);"focus"===n&&(t=!1!==a.onFocus(u)&&t);"keydown"===n&&(t=!1!==a.onKeydown(u)&&t);return t},null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var u=n.component;l(n,0,0,u._type,u._labelId,u.min,u.max,u.step,u.autocomplete,u.autocorrect,u.placeholder,u._disabled,u._readonly)})}function r(l){return t._22(0,[(l()(),t.Z(0,0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(l,n,u){var t=!0,a=l.component;"input"===n&&(t=!1!==a.onInput(u)&&t);"blur"===n&&(t=!1!==a.onBlur(u)&&t);"focus"===n&&(t=!1!==a.onFocus(u)&&t);"keydown"===n&&(t=!1!==a.onKeydown(u)&&t);return t},null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"text-input","text-input-"+n.component._mode)},function(l,n){var u=n.component;l(n,0,0,u._labelId,u.autocomplete,u.autocorrect,u.placeholder,u._disabled,u._readonly)})}function d(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(l,n,u){var t=!0,a=l.component;"click"===n&&(t=!1!==a.clearTextInput(u)&&t);"mousedown"===n&&(t=!1!==a.clearTextInput(u)&&t);return t},e.b,e.a)),t.Y(1,1097728,null,0,o.a,[[8,""],i.a,t.j,t.z],{clear:[0,"clear"]},null)],function(l,n){l(n,1,0,"")},null)}function _(l){return t._22(0,[(l()(),t.Z(0,0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(l,n,u){var t=!0,a=l.component;"touchstart"===n&&(t=!1!==a._pointerStart(u)&&t);"touchend"===n&&(t=!1!==a._pointerEnd(u)&&t);"mousedown"===n&&(t=!1!==a._pointerStart(u)&&t);"mouseup"===n&&(t=!1!==a._pointerEnd(u)&&t);return t},null,null))],null,null)}function g(l){return t._22(2,[t._18(671088640,1,{_native:0}),(l()(),t.U(16777216,null,null,1,null,c)),t.Y(2,16384,null,0,a.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t.U(16777216,null,null,1,null,r)),t.Y(4,16384,null,0,a.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t.U(16777216,null,null,1,null,d)),t.Y(6,16384,null,0,a.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t.U(16777216,null,null,1,null,_)),t.Y(8,16384,null,0,a.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,!u._isTextarea),l(n,4,0,u._isTextarea),l(n,6,0,u._clearInput),l(n,8,0,u._useAssist)},null)}}});