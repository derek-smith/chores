(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={client_id:"965002260915-v77visb8dlu3oohk47mdt0ojr3osvbaa.apps.googleusercontent.com",api_key:"AIzaSyBmBiPWa8zyPsjNSEBVtrbVPzP8Fdu3UjI"}},15:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},18:function(e,n,t){e.exports=t(30)},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(6),o=t.n(r),c=t(7),s=(t(27),t(15)),u=t.n(s),p=(t(28),t(1)),g=t.n(p),d=t(5),I=t(11),l={init:function(){var e=Object(d.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){window.gapi.load("client:auth2",Object(d.a)(g.a.mark(function n(){var t,a,i;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.gapi.client.init({apiKey:I.api_key,clientId:I.client_id,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"});case 2:if(t=window.gapi.auth2.getAuthInstance()){n.next=6;break}return e({isSignedIn:!1}),n.abrupt("return");case 6:if(a=t.isSignedIn.get()){n.next=10;break}return e({isSignedIn:a}),n.abrupt("return");case 10:i=t.currentUser.get().getBasicProfile().getGivenName(),e({isSignedIn:a,name:i});case 12:case"end":return n.stop()}},n)})))}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),googleSignIn:function(){var e=Object(d.a)(g.a.mark(function e(){var n,t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.gapi.auth2.getAuthInstance()){e.next=3;break}return e.abrupt("return",{isSignedIn:!1});case 3:if(n=window.gapi.auth2.getAuthInstance().isSignedIn.get()){e.next=8;break}return e.next=7,window.gapi.auth2.getAuthInstance().signIn();case 7:n=window.gapi.auth2.getAuthInstance().isSignedIn.get();case 8:if(n){e.next=10;break}return e.abrupt("return",{isSignedIn:n});case 10:return t=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName(),e.abrupt("return",{isSignedIn:n,name:t});case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},S={signIn:function(){return function(){var e=Object(d.a)(g.a.mark(function e(n){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"SIGN_IN_PENDING"}),l.googleSignIn().then(function(e){e.isSignedIn?n({type:"SIGN_IN_SUCCESS",payload:e}):n({type:"SIGN_IN_ERROR"})}).catch(function(){n({type:"SIGN_IN_ERROR"})});case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}},f=Object(c.b)(function(e){return{isSignedIn:e.isSignedIn,name:e.name}},S)(function(e){var n=e.isSignedIn,t=e.name,a=e.signIn;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,n?"Hi ".concat(t):i.a.createElement("button",{onClick:a},"Sign in to Google"))))}),h=t(4),w=t(16),m=t(17),_={isSignedIn:!1,name:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SIGN_IN_SUCCESS":return Object(m.a)({},e,{isSignedIn:n.payload.isSignedIn,name:n.payload.name});default:return e}},E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.c,N=Object(h.d)(v,E(Object(h.a)(w.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(c.a,{store:N},i.a.createElement(f,null)),document.getElementById("root")),N.dispatch(function(e){return e({type:"INIT_SHEETS_API_PENDING"}),l.init().then(function(n){e({type:"INIT_SHEETS_API_SUCCESS",payload:n}),n.isSignedIn&&e({type:"SIGN_IN_SUCCESS",payload:n})}).catch(function(){e({type:"INIT_SHEETS_API_ERROR"})})}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.eb8de7a0.chunk.js.map