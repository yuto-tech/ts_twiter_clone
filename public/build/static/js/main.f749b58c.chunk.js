(this.webpackJsonpts_twitter_clone=this.webpackJsonpts_twitter_clone||[]).push([[0],{79:function(n,e,t){"use strict";t.r(e);var a,o,i,r,s,c,p,d,l=t(2),x=t.n(l),b=t(24),j=t.n(b),m=t(12),f=t(13),g=f.a.div(a||(a=Object(m.a)(["\n  border-right: 1px solid #e6ecf0;\n  flex: 0.3;\n  margin-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  .sidebar__tweet {\n    background-color: #50b7f5 !important;\n    border: none !important;\n    color: white !important;\n    font-weight: 900 !important;\n    text-transform: inherit !important;\n    border-radius: 30px !important;\n    height: 50px !important;\n    margin-top: 20px !important;\n  }\n  .sidebar__twitterIcon {\n    color: #50b7f5;\n    font-size: 30px !important;\n    margin-left: 20px;\n    margin-bottom: 20px;\n  }\n"]))),h=f.a.div(o||(o=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #e8f5fe;\n    border-radius: 30px;\n    color: #50b7f5;\n    transition: color 100ms ease-out;\n  }\n\n  &:active {\n    color: #50b7f5;\n  }\n\n  .MuiSvgIcon-root {\n    padding: 20px;\n  }\n\n  h2 {\n    font-weight: 800;\n    font-size: 20px;\n    margin-right: 20px;\n  }\n"]))),u=t(4),_=function(n){var e=n.text,t=n.Icon;return Object(u.jsxs)(h,{children:[Object(u.jsx)(t,{}),Object(u.jsx)("h2",{children:e})]})},O=t(47),w=t.n(O),v=t(52),y=t.n(v),I=t(38),N=t.n(I),k=t(53),S=t.n(k),z=t(54),B=t.n(z),E=t(55),C=t.n(E),M=t(56),D=t.n(M),L=t(57),A=t.n(L),F=t(58),P=t.n(F),H=t(94),R=function(){return Object(u.jsxs)(g,{children:[Object(u.jsx)(w.a,{className:"sidebar__twitterIcon"}),Object(u.jsx)(_,{Icon:y.a,text:"Home"}),Object(u.jsx)(_,{Icon:N.a,text:"Explore"}),Object(u.jsx)(_,{Icon:S.a,text:"Notifications"}),Object(u.jsx)(_,{Icon:B.a,text:"Messages"}),Object(u.jsx)(_,{Icon:C.a,text:"Bookmarks"}),Object(u.jsx)(_,{Icon:D.a,text:"Lists"}),Object(u.jsx)(_,{Icon:A.a,text:"Profile"}),Object(u.jsx)(_,{Icon:P.a,text:"More"}),Object(u.jsx)(H.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0,children:"Tweet"})]})},T=t(33),U=f.a.div(i||(i=Object(m.a)(["\n  padding-bottom: 10px;\n  border-bottom: 8px solid #e6ecf0;\n  padding-right: 10px;\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .tweetBox__input {\n    padding: 20px;\n    display: flex;\n    input {\n      flex: 1;\n      margin-left: 20px;\n      font-size: 20px;\n      border: none;\n    }\n  }\n\n  .tweetBox__imageInput {\n    border: none;\n    padding: 10px;\n  }\n\n  .tweetBox__tweetButton {\n    background-color: #50b7f5 !important;\n    border: none !important;\n    color: white !important;\n    font-weight: 900 !important;\n    text-transform: inherit !important;\n    border-radius: 30px !important;\n    width: 80px;\n    height: 40px !important;\n    margin-top: 20px !important;\n    margin-left: auto !important;\n  }\n"]))),W=t(95),q=t(64).a.initializeApp({apiKey:"AIzaSyAXBqfxIAoPRL1_bB4P7LG9NZKMf8NPhqk",authDomain:"ts-twitter-clone.firebaseapp.com",projectId:"ts-twitter-clone",storageBucket:"ts-twitter-clone.appspot.com",messagingSenderId:"659575359261",appId:"1:659575359261:web:4316ed506123cbdb55c3f4",measurementId:"G-5LVEES83EF"}).firestore(),G=function(){var n=Object(l.useState)(""),e=Object(T.a)(n,2),t=e[0],a=e[1],o=Object(l.useState)(""),i=Object(T.a)(o,2),r=i[0],s=i[1];return Object(u.jsx)(U,{children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"tweetBox__input",children:[Object(u.jsx)(W.a,{src:"https://firebasestorage.googleapis.com/v0/b/ts-twitter-clone.appspot.com/o/pics1.jpg?alt=media&token=4165cecd-3ae9-4cc6-a914-0732c34d13e0"}),Object(u.jsx)("input",{onChange:function(n){return a(n.target.value)},value:t,placeholder:"What's happening?",type:"text"})]}),Object(u.jsx)("input",{value:r,onChange:function(n){return s(n.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),Object(u.jsx)(H.a,{onClick:function(n){n.preventDefault(),q.collection("posts").add({displayName:"yuto",username:"yuto-tech",verified:!0,text:t,image:r,avatar:"https://firebasestorage.googleapis.com/v0/b/ts-twitter-clone.appspot.com/o/pics1.jpg?alt=media&token=4165cecd-3ae9-4cc6-a914-0732c34d13e0"}),a(""),s("")},type:"submit",className:"tweetBox__tweetButton",children:"Tweet"})]})})},J=f.a.div(r||(r=Object(m.a)(["\n  flex: 0.45;\n  border-right: 1px solid #e6ecf0;\n  min-width: fit-content;\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  .feed__header {\n    position: sticky;\n    top: 0;\n    background-color: white;\n    z-index: 100;\n    border-bottom: 1px solid #e6ecf0;\n    padding: 15px 20px;\n    .h2 {\n      font-size: 20px;\n      font-weight: 800;\n    }\n  }\n"]))),K=f.a.div(s||(s=Object(m.a)(["\n  display: flex;\n  align-items: flex-start;\n  border-bottom: 1px solid #e6ecf0;\n  padding-bottom: 10px;\n  .post__body {\n    flex: 1;\n    padding: 10px;\n    img {\n      border-radius: 20px;\n    }\n  }\n\n  .post__footer {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 20px;\n  }\n\n  .post__headerDescription {\n    margin-bottom: 10px;\n    font-size: 15px;\n  }\n\n  .post__header__text {\n    h3 {\n      font-size: 15px;\n      margin-bottom: 5px;\n    }\n  }\n\n  .post__badge {\n    font-size: 14px !important;\n    color: #50b7f5;\n  }\n\n  .post__headerSpecial {\n    font-weight: 600;\n    font-size: 12px;\n    color: gray;\n  }\n\n  .post__avatar {\n    padding: 20px;\n  }\n"]))),V=t(59),X=t.n(V),Z=t(60),Q=t.n(Z),Y=t(61),$=t.n(Y),nn=t(62),en=t.n(nn),tn=t(63),an=t.n(tn),on=function(n){var e=n.displayName,t=n.username,a=n.verified,o=n.text,i=n.image,r=n.avatar;return Object(u.jsxs)(K,{children:[Object(u.jsx)("div",{className:"post__avatar",children:Object(u.jsx)(W.a,{src:r})}),Object(u.jsxs)("div",{className:"post__body",children:[Object(u.jsxs)("div",{className:"post__header",children:[Object(u.jsx)("div",{className:"post__header__text",children:Object(u.jsxs)("h3",{children:[e," ",Object(u.jsxs)("span",{className:"post__headerSpecial",children:[a&&Object(u.jsx)(X.a,{className:"post__badge"})," @",t]})]})}),Object(u.jsx)("div",{className:"post__headerDescription",children:Object(u.jsx)("p",{children:o})})]}),Object(u.jsx)("img",{src:i,alt:""}),Object(u.jsxs)("div",{className:"post__footer",children:[Object(u.jsx)(Q.a,{fontSize:"small"}),Object(u.jsx)($.a,{fontSize:"small"}),Object(u.jsx)(en.a,{fontSize:"small"}),Object(u.jsx)(an.a,{fontSize:"small"})]})]})]})},rn=function(n){var e=Object(l.useState)([]),t=Object(T.a)(e,2),a=t[0],o=t[1];return Object(l.useEffect)((function(){q.collection("posts").onSnapshot((function(n){return o(n.docs.map((function(n){return n.data()})))}))}),[]),Object(u.jsxs)(J,{children:[Object(u.jsx)("div",{className:"feed__header",children:Object(u.jsx)("h2",{children:"Home"})}),Object(u.jsx)(G,{}),a.map((function(n){return Object(u.jsx)(on,{displayName:n.displayName,username:n.username,verified:n.verified,text:n.text,avatar:n.avatar,image:n.image},n.text)}))]})},sn=f.a.div(c||(c=Object(m.a)(["\n  flex: 0.3;\n  .widgets__input {\n    display: flex;\n    align-items: center;\n    background-color: #e6ecf0;\n    padding: 10px;\n    border-radius: 20px;\n    margin-top: 10px;\n    margin-left: 20px;\n    input {\n      border: none;\n      background-color: #e6ecf0;\n    }\n  }\n\n  .widgets__searchIcon {\n    color: gray;\n  }\n\n  .widgets__widgetContainer {\n    margin-top: 15px;\n    margin-left: 20px;\n    padding: 20px;\n    background-color: #f5f8fa;\n    border-radius: 20px;\n    h2 {\n      font-size: 18px;\n      font-weight: 800;\n    }\n  }\n"]))),cn=function(){return Object(u.jsxs)(sn,{children:[Object(u.jsxs)("div",{className:"widgets__input",children:[Object(u.jsx)(N.a,{className:"widgets__searchIcon"}),Object(u.jsx)("input",{placeholder:"Search Twitter",type:"text"})]}),Object(u.jsx)("div",{className:"widgets__widgetContainer",children:Object(u.jsx)("h2",{children:"What's happening"})})]})},pn=(f.a.body(p||(p=Object(m.a)(['\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  --twitter-color: #50b7f5;\n  --twitter-background: #e6ecf0;\n']))),f.a.div(d||(d=Object(m.a)(["\n  display: flex;\n  height: 100vh;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 10px;\n"])))),dn=function(){return Object(u.jsxs)(pn,{children:[Object(u.jsx)(R,{}),Object(u.jsx)(rn,{}),Object(u.jsx)(cn,{})]})};j.a.render(Object(u.jsx)(x.a.StrictMode,{children:Object(u.jsx)(dn,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.f749b58c.chunk.js.map