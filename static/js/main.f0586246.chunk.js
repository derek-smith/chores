(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(10),i=n.n(c),s=n(18),u=n(47),l=n(28),p=n(123),m=n(124),E=n(126),d=n(46),h=n.n(d),g=n(125),f=n(37),C=n(7),O=n.n(C),S=n(20),v=n(55),y=function(){var e=Object(S.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){window.gapi.load("client:auth2",Object(S.a)(O.a.mark(function t(){var n,a,r;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.gapi.client.init({apiKey:v.api_key,clientId:v.client_id,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"});case 2:if(n=window.gapi.auth2.getAuthInstance()){t.next=6;break}return e({isSignedIn:!1}),t.abrupt("return");case 6:if(a=n.isSignedIn.get()){t.next=10;break}return e({isSignedIn:a}),t.abrupt("return");case 10:r=n.currentUser.get().getBasicProfile().getGivenName(),e({isSignedIn:a,name:r});case 12:case"end":return t.stop()}},t)})))}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(S.a)(O.a.mark(function e(){var t,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.gapi.auth2.getAuthInstance()){e.next=3;break}return e.abrupt("return",{isSignedIn:!1});case 3:if(t=window.gapi.auth2.getAuthInstance().isSignedIn.get()){e.next=8;break}return e.next=7,window.gapi.auth2.getAuthInstance().signIn();case 7:t=window.gapi.auth2.getAuthInstance().isSignedIn.get();case 8:if(t){e.next=10;break}return e.abrupt("return",{isSignedIn:t});case 10:return n=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName(),e.abrupt("return",{isSignedIn:t,name:n});case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b={getChoreList:function(){var e=Object(S.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:"1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA",range:"Chore List!A:B"});case 2:return t=e.sent,e.abrupt("return",t.result.values);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getCompletedChores:function(){var e=Object(S.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:"1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA",range:"Completed Chores!A:D"});case 2:return t=e.sent,e.abrupt("return",t.result.values);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),init:y,saveCompletedChores:function(){var e=Object(S.a)(O.a.mark(function e(t){var n,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:"1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA",range:"Completed Chores!A:A"});case 2:return n=e.sent,a=n.result.values.length+1,e.next=6,window.gapi.client.sheets.spreadsheets.values.update({spreadsheetId:"1jCoMWe-Xjsr3tf7V1Bf8iFb2k1v_2v1veFRztEyZNCA",range:"Completed Chores!A".concat(a),valueInputOption:"USER_ENTERED",values:t});case 6:return n=e.sent,e.abrupt("return",n.result.values);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),signIn:_},I=function(){return function(){var e=Object(S.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_CHORE_LIST_PENDING"}),b.getChoreList().then(function(e){console.log("getChoreList()",e),t({type:"GET_CHORE_LIST_SUCCESS",payload:{choreList:e}})}).catch(function(){t({type:"GET_CHORE_LIST_ERROR"})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=function(){return function(){var e=Object(S.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GET_COMPLETED_CHORES_PENDING"}),b.getCompletedChores().then(function(e){console.log("getCompletedChores()",e),t({type:"GET_COMPLETED_CHORES_SUCCESS",payload:{completedChores:e}})}).catch(function(){t({type:"GET_COMPLETED_CHORES_ERROR"})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=Object(p.a)(function(){return{spaceBetween:{display:"flex",justifyContent:"space-between",alignItems:"center"},userNameButton:{paddingLeft:12},userName:{marginLeft:8}}}),j={openChangePersonDialog:function(){return{type:"OPEN_CHANGE_PERSON_DIALOG"}}},D=Object(s.b)(function(e){return{name:e.name}},j)(function(e){var t=e.isChangePersonButtonHidden,n=e.name,a=e.openChangePersonDialog,r=N();return o.a.createElement(m.a,{position:"fixed",color:"default"},o.a.createElement(g.a,{classes:{root:r.spaceBetween}},o.a.createElement(f.a,{variant:"h6",color:"inherit"},"Chores"),n&&!t&&o.a.createElement(E.a,{variant:"contained",color:"primary",classes:{root:r.userNameButton},onClick:a},o.a.createElement(h.a,null),o.a.createElement("span",{className:r.userName},n))))}),R=n(50),L=n(128),P=n(129),k=n(136),x=n(132),A=n(69),T=n.n(A),G=n(131),H=n(138),B=n(127),M=n(130),U={changePerson:function(e){return{type:"CHANGE_PERSON",payload:{person:e}}},closeChangePersonDialog:function(){return{type:"CLOSE_CHANGE_PERSON_DIALOG"}}},W=Object(s.b)(function(e){return{isChangePersonDialogOpen:e.isChangePersonDialogOpen,people:e.people}},U)(function(e){var t=e.changePerson,n=e.closeChangePersonDialog,a=e.isChangePersonDialogOpen,r=e.people;return o.a.createElement(H.a,{open:a,onClose:n},o.a.createElement(B.a,null,"Change person"),o.a.createElement(L.a,null,r.map(function(e){return o.a.createElement(P.a,{button:!0,onClick:function(){return t(e)},key:e},o.a.createElement(M.a,null,o.a.createElement(G.a,null,o.a.createElement(h.a,null))),o.a.createElement(x.a,{primary:e}))})))}),F=n(135),V=n(133),z=n(134),X={closeSaveChoresDialog:function(e){return function(t){t({type:"CLOSE_SAVE_CHORES_DIALOG"}),e&&(w()(t),window.location.hash="/payouts")}}},$=Object(s.b)(function(e){return{isSaveChoresDialogOpen:e.isSaveChoresDialogOpen,saveStatus:e.saveStatus}},X)(function(e){var t=e.closeSaveChoresDialog,n=e.isSaveChoresDialogOpen,a=e.saveStatus;return o.a.createElement(H.a,{open:n,onClose:t},"PENDING"===a?o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null,"In progress"),o.a.createElement(V.a,null,o.a.createElement(z.a,null,"We're saving your chores now..."))):"SUCCESS"===a?o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null,"Done"),o.a.createElement(V.a,null,o.a.createElement(z.a,null,"Nice work!! Your chores have been saved.")),o.a.createElement(F.a,null,o.a.createElement(E.a,{onClick:function(){return t(!0)}},"Ok"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null,"Error"),o.a.createElement(V.a,null,o.a.createElement(z.a,null,"We weren't able to save your chores right now. Try again later.")),o.a.createElement(F.a,null,o.a.createElement(E.a,{onClick:function(){return t(!1)}},"Ok"))))}),Z=Object(p.a)(function(){return{"@media (min-width: 600px)":{container:{margin:"56px 0"}},container:{margin:"64px 0"},centered:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},list:{padding:"4px 0 0 0"},chore:{alignItems:"flex-start"},choreName:{},count:{flex:"unset",maxWidth:100},spaceBetween:{display:"flex",justifyContent:"space-between",alignItems:"center"},footer:{top:"auto",bottom:0},removeIcon:{justifyContent:"center",minWidth:0,paddingRight:8,marginTop:2,color:"red"},itemLeft:{display:"flex"}}}),J={decrementChore:function(e){return function(t){t({type:"DECREMENT_CHORE",payload:{choreId:e}})}},getChoreList:I,incrementChore:function(e){return function(t){t({type:"INCREMENT_CHORE",payload:{choreId:e}})}},saveCompletedChores:function(e){return function(){var t=Object(S.a)(O.a.mark(function t(n){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SAVE_COMPLETED_CHORES_PENDING"}),b.saveCompletedChores(e).then(function(){console.log("saveCompletedChores() success"),n({type:"SAVE_COMPLETED_CHORES_SUCCESS"})}).catch(function(){n({type:"SAVE_COMPLETED_CHORES_ERROR"})});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},signIn:function(){return function(){var e=Object(S.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SIGN_IN_PENDING"}),b.signIn().then(function(e){e.isSignedIn?t({type:"SIGN_IN_SUCCESS",payload:e}):t({type:"SIGN_IN_ERROR"})}).catch(function(){t({type:"SIGN_IN_ERROR"})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},K=Object(s.b)(function(e){var t=e.choreList,n=e.isSignedIn,a=e.name;return{choreList:Object.values(t),isSignedIn:n,name:a}},J)(function(e){var t=e.choreList,n=e.decrementChore,a=e.getChoreList,c=e.incrementChore,i=e.isSignedIn,s=e.name,u=e.saveCompletedChores,l=e.signIn,p=Z();Object(r.useEffect)(function(){i&&a()},[i]);var d=function(e){return function(t){t.stopPropagation(),n(e)}},h=Object.values(t).reduce(function(e,t){return e+t.count*t.price},0);return o.a.createElement("div",{className:p.container},o.a.createElement(D,null),i?t.length?o.a.createElement(L.a,{dense:!0,classes:{root:p.list}},t.map(function(e){return o.a.createElement(P.a,{key:e.name,classes:{root:p.chore},onClick:(t=e.id,function(){return c(t)}),button:!0,divider:!0},e.count>0&&o.a.createElement(k.a,{classes:{root:p.removeIcon},onClick:d(e.id)},o.a.createElement(T.a,null)),o.a.createElement(x.a,{classes:{root:p.choreName}},e.name),o.a.createElement(x.a,{classes:{root:p.count}},e.count," @ $",e.price/100));var t})):o.a.createElement("div",{className:p.centered},o.a.createElement(f.a,{variant:"body1"},"We don't have the chore list yet.")):o.a.createElement("div",{className:p.centered},o.a.createElement(E.a,{variant:"contained",onClick:l},"Sign in to Google")),o.a.createElement(m.a,{position:"fixed",color:"default",classes:{root:p.footer}},o.a.createElement(g.a,{classes:{root:p.spaceBetween}},i&&o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{variant:"contained",color:"primary",disabled:h<=0,onClick:function(){var e=(new Date).toISOString(),n=Object.values(t).filter(function(e){return e.count>0}).reduce(function(t,n){return[].concat(Object(R.a)(t),Object(R.a)(Object(R.a)(Array(n.count)).map(function(){return[e,s,n.name,n.price/100]})))},[]);u(n)}},"Save"),h>0&&o.a.createElement(f.a,{variant:"h6",color:"primary"},o.a.createElement("span",null,"+")," $",h/100)))),o.a.createElement($,null),o.a.createElement(W,null))}),Y=n(48),q=n(71),Q=n.n(q),ee=n(137),te=Object(p.a)(function(){return{"@media (min-width: 600px)":{container:{margin:"56px 0"}},container:{margin:"64px 0"},center:{width:"100%",textAlign:"center"},week:{paddingTop:0,marginBottom:16},split:{display:"flex",justifyContent:"space-between",alignContent:"center","& > *":{flex:1,margin:"0 32px"},"& > :first-child":{flex:1,textAlign:"right",margin:"0 8px 0 32px"},"& > :last-child":{flex:1,textAlign:"left",margin:"0 32px 0 8px"}},add:{position:"absolute",bottom:16,right:16}}}),ne=Object(s.b)(function(e){return{completedChores:e.completedChores,currentWeek:e.currentWeek}})(function(e){var t=e.completedChores,n=e.currentWeek,a=te(),r=n.start&&n.start.toLocaleDateString("en-US",{month:"short",weekday:"short",day:"numeric"}),c=n.end&&n.end.toLocaleDateString("en-US",{month:"short",weekday:"short",day:"numeric"}),i=t.filter(function(e){var t=new Date(e[0]);return t>=n.start&&t<=n.end});console.log("currentWeek completedChores:",i);var s=Object.entries(i.reduce(function(e,t){return e[t[1]]=e[t[1]]||0,e[t[1]]+=parseInt(t[3]),e},{})).map(function(e){var t=Object(Y.a)(e,2);return{name:t[0],sum:t[1]}}).sort(function(e,t){return t.sum-e.sum});return console.log("payouts:",s),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:a.container},o.a.createElement(L.a,null,o.a.createElement(P.a,{alignItems:"center"},o.a.createElement(x.a,{disableTypography:!0},o.a.createElement(f.a,{variant:"subtitle1",align:"center",gutterBottom:!0},"Week of"))),o.a.createElement(P.a,{divider:!0,classes:{root:a.week}},o.a.createElement(f.a,{variant:"h4",classes:{root:a.center}},r," - ",c)),s.map(function(e){return o.a.createElement(P.a,{key:e.name,classes:{root:a.split}},o.a.createElement(f.a,{variant:"body1"},e.name),o.a.createElement(f.a,{variant:"h6",color:"primary"},"$",e.sum))}))),o.a.createElement(u.b,{to:"chores",className:a.add},o.a.createElement(ee.a,{color:"primary"},o.a.createElement(Q.a,null))))}),ae=function(){return o.a.createElement(u.a,null,o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/payouts"},o.a.createElement(D,{isChangePersonButtonHidden:!0}),o.a.createElement(ne,null)),o.a.createElement(l.b,{path:"/chores"},o.a.createElement(D,null),o.a.createElement(K,null)),o.a.createElement(l.a,{to:"/payouts"})))},re=n(34),oe=n(72),ce=n(36),ie=n(9),se={choreList:[],completedChores:[],currentWeek:function(){var e=new Date;console.log("today:",e);for(var t=new Date(e.getTime()),n=new Date(e.getTime());6!==t.getDay();)t.setDate(t.getDate()-1);for(;5!==n.getDay();)n.setDate(n.getDate()+1);var a={start:t,end:n,today:e};return console.log("currentWeek:",a),a}(),isChangePersonDialogOpen:!1,isSaveChoresDialogOpen:!1,isSignedIn:!1,name:"",people:[],saveStatus:"PENDING"},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN_SUCCESS":return Object(ie.a)({},e,{isSignedIn:t.payload.isSignedIn,name:t.payload.name});case"GET_CHORE_LIST_SUCCESS":return Object(ie.a)({},e,{choreList:t.payload.choreList.filter(function(e,t){return t>0}).reduce(function(e,t,n){var a=Object(Y.a)(t,2),r=a[0],o=a[1];return Object(ie.a)({},e,Object(ce.a)({},n+1,{id:n+1,name:r,price:100*parseFloat(o),count:0}))},{})});case"INCREMENT_CHORE":return Object(ie.a)({},e,{choreList:Object(ie.a)({},e.choreList,Object(ce.a)({},t.payload.choreId,Object(ie.a)({},e.choreList[t.payload.choreId],{count:e.choreList[t.payload.choreId].count+1})))});case"DECREMENT_CHORE":return Object(ie.a)({},e,{choreList:Object(ie.a)({},e.choreList,Object(ce.a)({},t.payload.choreId,Object(ie.a)({},e.choreList[t.payload.choreId],{count:e.choreList[t.payload.choreId].count-1})))});case"SAVE_COMPLETED_CHORES_PENDING":return Object(ie.a)({},e,{isSaveChoresDialogOpen:!0,saveStatus:"PENDING"});case"SAVE_COMPLETED_CHORES_SUCCESS":return Object(ie.a)({},e,{saveStatus:"SUCCESS"});case"SAVE_COMPLETED_CHORES_ERROR":return Object(ie.a)({},e,{saveStatus:"ERROR"});case"CLOSE_SAVE_CHORES_DIALOG":return Object(ie.a)({},e,{isSaveChoresDialogOpen:!1,choreList:Object(ie.a)({},Object.keys(e.choreList).map(function(t){return Object(ie.a)({},e.choreList[t],{count:0})}))});case"OPEN_CHANGE_PERSON_DIALOG":return Object(ie.a)({},e,{isChangePersonDialogOpen:!0});case"CLOSE_CHANGE_PERSON_DIALOG":return Object(ie.a)({},e,{isChangePersonDialogOpen:!1});case"CHANGE_PERSON":return Object(ie.a)({},e,{isChangePersonDialogOpen:!1,name:t.payload.person});case"GET_COMPLETED_CHORES_SUCCESS":return Object(ie.a)({},e,{completedChores:t.payload.completedChores.filter(function(e,t){return t>0}),people:Array.from(new Set(t.payload.completedChores.filter(function(e,t){return t>0}).map(function(e){return e[1]}))).sort()});default:return e}},le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.c,pe=Object(re.d)(ue,le(Object(re.a)(oe.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,{store:pe},o.a.createElement(ae,null)),document.getElementById("root")),pe.subscribe(function(){var e=pe.getState().isSignedIn,t=a;(a=e)!==t&&a&&(pe.dispatch(I()),pe.dispatch(w()))}),pe.dispatch(function(e){return e({type:"INIT_SHEETS_API_PENDING"}),b.init().then(function(t){e({type:"INIT_SHEETS_API_SUCCESS",payload:t}),t.isSignedIn&&e({type:"SIGN_IN_SUCCESS",payload:t})}).catch(function(){e({type:"INIT_SHEETS_API_ERROR"})})}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e){e.exports={client_id:"965002260915-v77visb8dlu3oohk47mdt0ojr3osvbaa.apps.googleusercontent.com",api_key:"AIzaSyBmBiPWa8zyPsjNSEBVtrbVPzP8Fdu3UjI"}},81:function(e,t,n){e.exports=n(100)}},[[81,1,2]]]);
//# sourceMappingURL=main.f0586246.chunk.js.map