webpackJsonp([4],{157:function(t,e,a){"use strict";a.d(e,"a",function(){return o});a(4);var n=a(32),o=(a.n(n),a(89),function(){function t(t,e){this.db=t,this.storage=e}return t.prototype.getTodoList=function(){var t=this;return this.storage.get("user").then(function(e){var a=JSON.parse(e);return t.baseUrl="/users/"+a.uid+"/todo-lists",t.todoLists=t.db.list(t.baseUrl),t.todoLists.valueChanges()})},t.prototype.addList=function(t){var e=this.todoLists.push({});return t.id=e.key,e.set(t)},t.prototype.deleteList=function(t){return this.todoLists.remove(t.id)},t.prototype.updateList=function(t,e){return t.name=e,this.todoLists.set(t.id,t)},t.prototype.getOneList=function(t){return this.db.object(this.baseUrl+"/"+t+"/").valueChanges()},t.prototype.addItem=function(t,e){var a=this.buildAngularFireListOfItems(t).push({});return e.id=a.key,a.set(e)},t.prototype.deleteItem=function(t,e){return this.buildAngularFireListOfItems(t).remove(e.id)},t.prototype.updateItem=function(t,e){return this.buildAngularFireListOfItems(t).set(e.id,e)},t.prototype.buildAngularFireListOfItems=function(t){return this.db.list(this.baseUrl+"/"+t.id+"/items/")},t}())},184:function(t,e){function a(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id=184},210:function(t,e,a){var n={"../pages/auth/auth.module.ngfactory":[398,3],"../pages/details/details.module.ngfactory":[399,1],"../pages/home/home.module.ngfactory":[400,0],"../pages/item-details/item-details.module.ngfactory":[401,2]};function o(t){var e=n[t];return e?a.e(e[1]).then(function(){return a(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(n)},o.id=210,t.exports=o},287:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(42),o=a(0),i=(a(4),a(97),a(95)),r=a(96),u=a(98),s=a(157),l=function(){function t(t,e,a,n,o){var i=this;this._AuthProvider=o,this.rootPage="AuthPage",t.ready().then(function(){a.styleDefault(),n.hide()}),e.viewDidLoad.subscribe(function(t){console.log(t),i.getUserData()})}return t.prototype.getUserData=function(){var t=this;this._AuthProvider.getUserData().then(function(e){console.log("user from storage:",e),e?(t.user=JSON.parse(e),(t.rootPage="AuthPage")&&(t.rootPage="HomePage")):t.rootPage="AuthPage"})},t}(),d=a(275),c=a(81),h=a(124),g=a(276),_=a(127),f=a(28),p=a(89),m=function(){return function(){}}(),b=function(){return function(){}}(),y=a(60),v=a(277),P=a(278),A=a(279),L=a(280),O=a(281),w=a(282),I=a(283),U=a(284),k=a(285),D=a(397),N=a(44),S=a(64),j=a(6),F=a(27),C=a(11),G=a(2),H=a(5),M=a(10),R=a(38),T=a(16),J=a(12),q=o.X({encapsulation:2,styles:[],data:{}});function z(t){return o._22(0,[(t()(),o.Z(0,0,null,null,2,"ion-nav",[],null,null,null,D.b,D.a)),o._17(6144,null,N.a,null,[S.a]),o.Y(2,4374528,null,0,S.a,[[2,j.a],[2,F.a],C.a,G.a,H.a,o.j,o.u,o.z,o.i,M.l,R.a,[2,T.a],J.a,o.k],{root:[0,"root"]},null),(t()(),o._20(-1,null,["\n"]))],function(t,e){t(e,2,0,e.component.rootPage)},null)}var E=o.V("ng-component",l,function(t){return o._22(0,[(t()(),o.Z(0,0,null,null,1,"ng-component",[],null,null,null,z,q)),o.Y(1,49152,null,0,l,[H.a,C.a,i.a,r.a,u.a],null,null)],null,null)},{},{},[]),X=a(17),K=a(138),W=a(21),x=a(252),B=a(114),Y=a(101),Z=a(137),V=a(18),Q=a(40),$=a(47),tt=a(121),et=a(162),at=a(62),nt=a(48),ot=a(102),it=a(76),rt=a(145),ut=a(140),st=a(100),lt=a(274),dt=a(139),ct=a(36),ht=a(122),gt=a(141),_t=o.W(b,[y.b],function(t){return o._10([o._11(512,o.i,o.S,[[8,[v.a,P.a,A.a,L.a,O.a,w.a,I.a,U.a,k.a,E]],[3,o.i],o.s]),o._11(5120,o.r,o._9,[[3,o.r]]),o._11(4608,X.l,X.k,[o.r,[2,X.t]]),o._11(5120,o.b,o._0,[]),o._11(5120,o.p,o._6,[]),o._11(5120,o.q,o._7,[]),o._11(4608,n.c,n.q,[X.d]),o._11(6144,o.D,null,[n.c]),o._11(4608,n.f,K.a,[]),o._11(5120,n.d,function(t,e,a,o,i){return[new n.k(t,e),new n.o(a),new n.n(o,i)]},[X.d,o.u,X.d,X.d,n.f]),o._11(4608,n.e,n.e,[n.d,o.u]),o._11(135680,n.m,n.m,[X.d]),o._11(4608,n.l,n.l,[n.e,n.m]),o._11(6144,o.B,null,[n.l]),o._11(6144,n.p,null,[n.m]),o._11(4608,o.G,o.G,[o.u]),o._11(4608,n.h,n.h,[X.d]),o._11(4608,n.i,n.i,[X.d]),o._11(4608,W.o,W.o,[]),o._11(4608,W.d,W.d,[]),o._11(4608,d.h,d.m,[X.d,o.w,d.k]),o._11(4608,d.n,d.n,[d.h,d.l]),o._11(5120,d.a,function(t){return[t]},[d.n]),o._11(4608,d.j,d.j,[]),o._11(6144,d.i,null,[d.j]),o._11(4608,d.g,d.g,[d.i]),o._11(6144,d.b,null,[d.g]),o._11(5120,d.f,d.o,[d.b,[2,d.a]]),o._11(4608,d.c,d.c,[d.f]),o._11(5120,f.b,f.f,[f.c,f.d]),o._11(5120,h.a,h.c,[f.b]),o._11(5120,c.a,c.c,[f.b]),o._11(4608,g.a,g.a,[f.b,[2,g.c]]),o._11(5120,x.a,x.c,[x.b]),o._11(4608,_.a,_.a,[]),o._11(4608,u.a,u.a,[H.a,h.a,c.a,_.a,x.a]),o._11(4608,s.a,s.a,[c.a,x.a]),o._11(4608,B.a,B.a,[C.a,G.a]),o._11(4608,Y.a,Y.a,[C.a,G.a]),o._11(4608,Z.a,Z.a,[]),o._11(4608,V.a,V.a,[]),o._11(4608,Q.a,Q.a,[H.a]),o._11(4608,$.a,$.a,[G.a,H.a,o.u,J.a]),o._11(4608,tt.a,tt.a,[C.a,G.a]),o._11(5120,X.g,et.c,[X.r,[2,X.a],G.a]),o._11(4608,X.f,X.f,[X.g]),o._11(5120,at.b,at.d,[C.a,at.a]),o._11(5120,T.a,T.b,[C.a,at.b,X.f,nt.b,o.i]),o._11(4608,ot.a,ot.a,[C.a,G.a,T.a]),o._11(4608,it.a,it.a,[C.a,G.a]),o._11(4608,rt.a,rt.a,[C.a,G.a,T.a]),o._11(4608,ut.a,ut.a,[G.a,H.a,J.a,C.a,M.l]),o._11(4608,st.a,st.a,[C.a,G.a]),o._11(4608,R.a,R.a,[H.a,G.a]),o._11(4608,i.a,i.a,[]),o._11(4608,r.a,r.a,[]),o._11(512,X.c,X.c,[]),o._11(512,o.k,lt.a,[]),o._11(256,G.b,{},[]),o._11(1024,dt.a,dt.b,[]),o._11(1024,H.a,H.b,[n.b,dt.a,o.u]),o._11(1024,G.a,G.c,[G.b,H.a]),o._11(512,J.a,J.a,[H.a]),o._11(512,ct.a,ct.a,[]),o._11(512,C.a,C.a,[G.a,H.a,[2,ct.a]]),o._11(512,M.l,M.l,[C.a]),o._11(256,at.a,{links:[{loadChildren:"../pages/auth/auth.module.ngfactory#AuthPageModuleNgFactory",name:"AuthPage",segment:"auth",priority:"low",defaultHistory:[]},{loadChildren:"../pages/details/details.module.ngfactory#DetailsPageModuleNgFactory",name:"DetailsPage",segment:"details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-details/item-details.module.ngfactory#ItemDetailsPageModuleNgFactory",name:"ItemDetailsPage",segment:"item-details",priority:"low",defaultHistory:[]}]},[]),o._11(512,o.h,o.h,[]),o._11(512,ht.a,ht.a,[o.h]),o._11(1024,nt.b,nt.c,[ht.a,o.o]),o._11(1024,o.c,function(t,e,a,o,i,r,u,s,l,d,c,h,g){return[n.s(t),gt.a(e),Z.b(a,o),ut.b(i,r,u,s,l),nt.d(d,c,h,g)]},[[2,o.t],G.a,H.a,J.a,G.a,H.a,J.a,C.a,M.l,G.a,at.a,nt.b,o.u]),o._11(512,o.d,o.d,[[2,o.c]]),o._11(131584,o.f,o.f,[o.u,o.T,o.o,o.k,o.i,o.d]),o._11(512,o.e,o.e,[o.f]),o._11(512,n.a,n.a,[[3,n.a]]),o._11(512,W.m,W.m,[]),o._11(512,W.e,W.e,[]),o._11(512,W.l,W.l,[]),o._11(512,et.a,et.a,[]),o._11(512,d.e,d.e,[]),o._11(512,d.d,d.d,[]),o._11(512,f.a,f.a,[]),o._11(512,h.b,h.b,[]),o._11(512,c.b,c.b,[]),o._11(512,g.b,g.b,[]),o._11(512,p.a,p.a,[]),o._11(512,m,m,[]),o._11(512,b,b,[]),o._11(256,d.k,"XSRF-TOKEN",[]),o._11(256,d.l,"X-XSRF-TOKEN",[]),o._11(256,f.c,{apiKey:"AIzaSyAzamPI7qF93z18oStf4b_iuyJ5ROhtTvo",authDomain:"m2gi-ionic-21b7b.firebaseapp.com",databaseURL:"https://m2gi-ionic-21b7b.firebaseio.com",projectId:"m2gi-ionic-21b7b",storageBucket:"m2gi-ionic-21b7b.appspot.com",messagingSenderId:"588101161325"},[]),o._11(256,f.d,void 0,[]),o._11(256,x.b,null,[]),o._11(256,y.a,l,[]),o._11(256,X.a,"/",[])])});Object(o.M)(),Object(n.j)().bootstrapModuleFactory(_t)},98:function(t,e,a){"use strict";a.d(e,"a",function(){return i});a(4);var n=a(306),o=(a.n(n),a(126)),i=(a.n(o),a(127),a(97),a(89),function(){function t(t,e,a,n,o){this.plt=t,this.afAuth=e,this.db=a,this.googlePlus=n,this.storage=o}return t.prototype.signInGoogle=function(){return this.plt.is("ios")||this.plt.is("android")?this.nativeloginUser():this.plt.is("core")?this.browserGoogleLogin():void 0},t.prototype.browserGoogleLogin=function(){var t=new n.auth.GoogleAuthProvider;return this.oAuthLogin(t)},t.prototype.oAuthLogin=function(t){var e=this;return this.afAuth.auth.signInWithPopup(t).then(function(t){return e.updateUserData(t)})},t.prototype.nativeloginUser=function(){var t=this;return this.googlePlus.login({webClientId:"588101161325-f3p5ulsoe22ok3gbblq8itej4msbfvht.apps.googleusercontent.com"}).then(function(e){return t.oAuthNativeLogin(e)})},t.prototype.oAuthNativeLogin=function(t){var e=this,a=n.auth.GoogleAuthProvider.credential(t.idToken);return this.afAuth.auth.signInAndRetrieveDataWithCredential(a).then(function(t){return e.updateUserData(t)})},t.prototype.updateUserData=function(t){var e={uid:t.user.uid,email:t.user.email,displayName:t.user.displayName,photoURL:t.user.photoURL};return t.additionalUserInfo.isNewUser&&this.db.list("/users/").set(e.uid,e),this.storage.set("user",JSON.stringify(e))},t.prototype.getUserData=function(){return this.storage.get("user")},t.prototype.signOut=function(){return this.plt.is("ios")||this.plt.is("android")?this.nativeSignOut():this.plt.is("core")?this.clearStorage():void 0},t.prototype.nativeSignOut=function(){var t=this;this.googlePlus.disconnect().then(function(e){return t.clearStorage()})},t.prototype.clearStorage=function(){var t=this;return this.storage.clear().then(function(e){return t.afAuth.auth.signOut()})},t}())}},[287]);