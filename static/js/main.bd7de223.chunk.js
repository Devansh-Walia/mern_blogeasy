(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{42:function(e,t,s){},44:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(30),r=s.n(n),i=s(31),l=s(5),o=s(9),j=s(3),b=(s(42),s(0));function u(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("div",{className:"headerTitles",children:[Object(b.jsx)("span",{className:"headerTitleSm",children:"React & Node"}),Object(b.jsx)("span",{className:"headerTitleLg",children:"BlogEasy"})]}),Object(b.jsx)("img",{className:"headerImg",src:"https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""})]})}s(44);var d=s(7),p=s.p+"static/media/positive.cc9c1aa0.png",O=s.p+"static/media/negative.3c470431.png",m=s.p+"static/media/neutral.1e0ed287.png";function h(e){var t=e.post;return Object(b.jsxs)("div",{className:"post",children:[t.photo&&Object(b.jsx)("img",{className:"postImg",src:"https://blog-easy.herokuapp.com/images/"+t.photo,alt:""}),Object(b.jsxs)("div",{className:"postInfo",children:[Object(b.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(b.jsx)("span",{className:"postCat",children:e.name})}))}),Object(b.jsx)(d.b,{to:"/post/".concat(t._id),className:"link",children:Object(b.jsx)("span",{className:"postTitle",children:t.title})}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"Stats",children:[Object(b.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()}),Object(b.jsx)("img",{src:t.rating<-2?O:t.rating>=-2&&t.rating<=2?m:p,className:"rating",alt:"rating"}),Object(b.jsxs)("p",{className:"ratingPara",children:["rating: ",t.rating]})]})]}),Object(b.jsx)("p",{className:"postDesc",children:t.desc})]})}s(47);function x(e){var t=e.posts;return Object(b.jsx)("div",{className:"posts",children:t.map((function(e){return Object(b.jsx)(h,{post:e})}))})}s(48);function g(){return Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsxs)("div",{className:"sidebarItem",children:[Object(b.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(b.jsx)("img",{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d13db1b9-cbb6-46ae-b32d-72a22ba00036/d2cfyp3-4d2c4cd9-7fb8-4b52-bf11-4788d384ddc9.jpg/v1/fill/w_900,h_830,q_75,strp/_hi_there_____by_crimsonkanji_d2cfyp3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMwIiwicGF0aCI6IlwvZlwvZDEzZGIxYjktY2JiNi00NmFlLWIzMmQtNzJhMjJiYTAwMDM2XC9kMmNmeXAzLTRkMmM0Y2Q5LTdmYjgtNGI1Mi1iZjExLTQ3ODhkMzg0ZGRjOS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nmrNRmWExOh6ElJLzI5YWz5XVZNf-pgyw0ibah0DmXQ",alt:"",className:"sidebarImage"}),Object(b.jsxs)("p",{children:['This is a group project for the course "Web Development" at the',Object(b.jsx)("br",{}),"Chitkara University of Engineering and Technology.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"This would be a blog where you can write and share your own posts. Your posts will then be assesed by our ",Object(b.jsx)("b",{children:"bot-team"})," and you will be given a",Object(b.jsx)("b",{children:"sentiment"})," score which will be displayed on the front-end.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"You can also see the sentiment score of other people's posts.",Object(b.jsx)("br",{})]})]}),Object(b.jsxs)("div",{className:"sidebarItem",children:[Object(b.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(b.jsxs)("div",{className:"sidebarSocial",children:[Object(b.jsx)("i",{className:"sidebarIcon fab fa-facebook-square"}),Object(b.jsx)("i",{className:"sidebarIcon fab fa-twitter-square"}),Object(b.jsx)("i",{className:"sidebarIcon fab fa-pinterest-square"}),Object(b.jsx)("i",{className:"sidebarIcon fab fa-instagram-square"})]})]})]})}s(49);var f=s(8),v=s.n(f),N=s(4),w="https://blog-easy.herokuapp.com/api";function y(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(N.f)().search;return Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(w,"/posts")+n);case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(x,{posts:s}),Object(b.jsx)(g,{})]})]})}var I=s(19),S=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!0});case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},T={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},k=Object(c.createContext)(T),E=function(e){var t=e.children,s=Object(c.useReducer)(S,T),a=Object(j.a)(s,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(b.jsx)(k.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},C=(s(69),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"white",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#009578";e=e.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();var c=document.createElement("canvas"),a=c.getContext("2d");return c.width=200,c.height=200,a.fillStyle=s,a.fillRect(0,0,c.width,c.height),a.font="bold 100px Assistant",a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.fillText(e,c.width/2,c.height/2),c.toDataURL("image/png")});function L(){var e=Object(c.useContext)(k),t=e.user,s=e.dispatch;return Object(b.jsxs)("div",{className:"top",children:[Object(b.jsxs)("div",{className:"topLeft",children:[Object(b.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(b.jsx)("i",{className:"topIcon fab fa-twitter-square"}),Object(b.jsx)("i",{className:"topIcon fab fa-pinterest-square"}),Object(b.jsx)("i",{className:"topIcon fab fa-instagram-square"})]}),Object(b.jsx)("div",{className:"topCenter",children:Object(b.jsxs)("ul",{className:"topList",children:[Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{className:"link",to:"/",children:"HOME"})}),Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{className:"link",to:"/about",children:"ABOUT"})}),Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{className:"link",to:"/write",children:"WRITE"})}),Object(b.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(b.jsx)("div",{className:"topRight",children:t?Object(b.jsx)(d.b,{to:"/settings",children:Object(b.jsx)("img",{className:"topImg",src:""!==t.profilePic?"https://blog-easy.herokuapp.com/images/"+t.profilePic:C(t.username),alt:"avatar"})}):Object(b.jsxs)("ul",{className:"topList",children:[Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{className:"link",to:"/register",children:"REGISTER"})})]})})]})}s(70),s(71);function D(){var e=Object(N.f)().pathname.split("/")[2],t=Object(c.useState)({}),s=Object(j.a)(t,2),a=s[0],n=s[1],r=Object(c.useContext)(k).user,i=Object(c.useState)(""),u=Object(j.a)(i,2),p=u[0],O=u[1],m=Object(c.useState)(""),h=Object(j.a)(m,2),x=h[0],g=h[1],f=Object(c.useState)(!1),w=Object(j.a)(f,2),y=w[0],I=w[1];Object(c.useEffect)((function(){var t=function(){var t=Object(o.a)(Object(l.a)().mark((function t(){var s;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/posts/"+e);case 2:s=t.sent,n(s.data),O(s.data.title),g(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var S=function(){var e=Object(o.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/posts/".concat(a._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.put("/posts/".concat(a._id),{username:r.username,title:p,desc:x});case 3:I(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"singlePost",children:Object(b.jsxs)("div",{className:"singlePostWrapper",children:[a.photo&&Object(b.jsx)("img",{src:"https://blog-easy.herokuapp.com/images/"+a.photo,alt:"",className:"singlePostImg"}),y?Object(b.jsx)("input",{type:"text",value:p,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return O(e.target.value)}}):Object(b.jsxs)("h1",{className:"singlePostTitle",children:[p,a.username===(null===r||void 0===r?void 0:r.username)&&Object(b.jsxs)("div",{className:"singlePostEdit",children:[Object(b.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return I(!0)}}),Object(b.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:S})]})]}),Object(b.jsxs)("div",{className:"singlePostInfo",children:[Object(b.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(b.jsx)(d.b,{to:"/?user=".concat(a.username),className:"link",children:Object(b.jsxs)("b",{children:[" ",a.username]})})]}),Object(b.jsx)("span",{className:"singlePostDate",children:new Date(a.createdAt).toDateString()})]}),y?Object(b.jsx)("textarea",{className:"singlePostDescInput",value:x,onChange:function(e){return g(e.target.value)}}):Object(b.jsx)("p",{className:"singlePostDesc",children:x}),y&&Object(b.jsx)("button",{className:"singlePostButton",onClick:T,children:"Update"})]})})}function R(){return Object(b.jsxs)("div",{className:"single",children:[Object(b.jsx)(D,{}),Object(b.jsx)(g,{})]})}s(72);function P(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],u=r[1],d=Object(c.useState)(null),p=Object(j.a)(d,2),O=p[0],m=p[1],h=Object(c.useContext)(k).user,x=function(){var e=Object(o.a)(Object(l.a)().mark((function e(t){var c,a,n,r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c={username:h.username,title:s,desc:i},!O){e.next=15;break}return a=new FormData,n=Date.now()+O.name,a.append("name",n),a.append("file",O),c.photo=n,e.prev=8,e.next=11,v.a.post("".concat(w,"/upload"),a);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,v.a.post("/posts",c);case 18:r=e.sent,window.location.replace("/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"write",children:[O&&Object(b.jsx)("img",{className:"writeImg",src:URL.createObjectURL(O),alt:""}),Object(b.jsxs)("form",{className:"writeForm",onSubmit:x,children:[Object(b.jsxs)("div",{className:"writeFormGroup",children:[Object(b.jsx)("label",{htmlFor:"fileInput",children:Object(b.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(b.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return m(e.target.files[0])}}),Object(b.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsx)("div",{className:"writeFormGroup",children:Object(b.jsx)("textarea",{placeholder:"Tell your story...",type:"text",className:"writeInput writeText",onChange:function(e){return u(e.target.value)}})}),Object(b.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}s(73);function U(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],u=r[1],d=Object(c.useState)(""),p=Object(j.a)(d,2),O=p[0],m=p[1],h=Object(c.useState)(""),x=Object(j.a)(h,2),f=x[0],N=x[1],y=Object(c.useState)(!1),I=Object(j.a)(y,2),S=I[0],T=I[1],E=Object(c.useContext)(k),C=E.user,L=E.dispatch,D=function(){var e=Object(o.a)(Object(l.a)().mark((function e(t){var c,a,n,r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L({type:"UPDATE_START"}),c={userId:C._id,username:i,email:O,password:f},!s){e.next=16;break}return a=new FormData,n=Date.now()+s.name,a.append("name",n),a.append("file",s),c.profilePic=n,e.prev=9,e.next=12,v.a.post("".concat(w,"/upload"),a);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,v.a.put("".concat(w,"/users/")+C._id,c);case 19:r=e.sent,T(!0),L({type:"UPDATE_SUCCESS",payload:r.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),L({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return console.log(C),Object(b.jsxs)("div",{className:"settings",children:[Object(b.jsxs)("div",{className:"settingsWrapper",children:[Object(b.jsxs)("div",{className:"settingsTitle",children:[Object(b.jsx)("span",{className:"settingsUpdateTitle",children:"Update Your Account"}),Object(b.jsx)("span",{className:"settingsDeleteTitle",children:"Delete Account"})]}),Object(b.jsxs)("form",{className:"settingsForm",onSubmit:D,children:[Object(b.jsx)("label",{children:"Profile Picture"}),Object(b.jsxs)("div",{className:"settingsPP",children:[Object(b.jsx)("img",{src:s?URL.createObjectURL(s):"https://blog-easy.herokuapp.com/images/"+C.profilePic,alt:""}),Object(b.jsx)("label",{htmlFor:"fileInput",children:Object(b.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})}),Object(b.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return a(e.target.files[0])}})]}),Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",placeholder:C.username,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"email",placeholder:C.email,onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",onChange:function(e){return N(e.target.value)}}),Object(b.jsx)("button",{className:"settingsSubmit",type:"submit",children:"Update"}),S&&Object(b.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(b.jsx)(g,{})]})}s(74);function A(){var e=Object(c.useRef)(),t=Object(c.useRef)(),s=Object(c.useContext)(k),a=s.dispatch,n=s.isFetching,r=s.error,i=function(){var s=Object(o.a)(Object(l.a)().mark((function s(c){var n;return Object(l.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c.preventDefault(),a({type:"LOGIN_START"}),s.prev=2,s.next=5,v.a.post("".concat(w,"/auth/login"),{username:e.current.value,password:t.current.value});case 5:n=s.sent,a({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),a({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return console.log("error logging in",r),Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("span",{className:"loginTitle",children:"Login"}),Object(b.jsxs)("form",{className:"loginForm",onSubmit:i,children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),r?Object(b.jsx)("span",{className:"loginError",children:r}):null,Object(b.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]}),Object(b.jsx)("button",{className:"loginRegisterButton",children:Object(b.jsx)(d.b,{className:"link",to:"/register",children:"Register"})})]})}s(75);function _(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],u=r[1],p=Object(c.useState)(""),O=Object(j.a)(p,2),m=O[0],h=O[1],x=Object(c.useState)(!1),g=Object(j.a)(x,2),f=g[0],N=g[1],y=function(){var e=Object(o.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!1),e.prev=2,e.next=5,v.a.post("".concat(w,"/auth/register"),{username:s,email:i,password:m});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"register",children:[Object(b.jsx)("span",{className:"registerTitle",children:"Register"}),Object(b.jsxs)("form",{className:"registerForm",onSubmit:y,children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(b.jsx)("button",{className:"registerLoginButton",children:Object(b.jsx)(d.b,{className:"link",to:"/login",children:"Login"})}),f&&Object(b.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}s(76),s(77);function F(e){var t=e.dev;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"dev-card",children:[Object(b.jsxs)("div",{className:"dev-card-header",children:[Object(b.jsx)("div",{className:"dev-card-header-img",children:Object(b.jsx)("img",{src:t.avatar_url,alt:"dev-img"})}),Object(b.jsx)("div",{className:"dev-card-header-name",children:Object(b.jsx)("h1",{children:t.login})})]}),Object(b.jsx)("div",{className:"dev-card-about",children:t.bio}),Object(b.jsxs)("div",{className:"dev-card-body",children:[Object(b.jsxs)("p",{children:["location: ",t.location]}),Object(b.jsxs)("p",{children:["followers: ",t.followers]}),Object(b.jsxs)("p",{children:["public repos: ",t.public_repos]}),Object(b.jsxs)("p",{children:["following: ",t.following]})]})]})})}var M=["Devansh-Walia"];function G(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(N.f)().search;return Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(w,"/devs"),{devs:M});case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),console.log(s),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"about-body",children:[Object(b.jsx)("div",{className:"about-body-title",children:Object(b.jsx)("h1",{children:"About"})}),Object(b.jsx)("div",{className:"about-body-content",children:Object(b.jsxs)("div",{className:"about-body-content-text",children:[Object(b.jsx)("p",{children:"This is a simple app that allows you to search for developers and see their profile."}),Object(b.jsx)("p",{children:"The app is built using React, Redux, React Router, and Axios."}),Object(b.jsx)("p",{children:"The app is hosted on Heroku."})]})})]}),Object(b.jsx)("h1",{className:"headding",children:"Developers"}),Object(b.jsx)("div",{className:"about-devs",children:s.map((function(e){return Object(b.jsx)(F,{dev:e},e.id)}))})]})}var J=function(){var e=Object(c.useContext)(k).user;return Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(i.a,{children:[Object(b.jsx)("meta",{charSet:"utf-8"}),Object(b.jsx)("title",{children:"BlogEasy"}),Object(b.jsx)("meta",{name:"description",content:"A MERN Sentiment based blog writing website"}),Object(b.jsx)("meta",{itemprop:"name",content:"BlogEasy"}),Object(b.jsx)("meta",{itemprop:"description",content:"A MERN Sentiment based blog writing website"}),Object(b.jsx)("meta",{itemprop:"image",content:"https://www.webreedigito.com/wp-content/uploads/2020/12/blogs.jpg"}),Object(b.jsx)("meta",{property:"og:url",content:"https://www.bloggEasy.tech"}),Object(b.jsx)("meta",{property:"og:type",content:"website"}),Object(b.jsx)("meta",{property:"og:title",content:"BlogEasy"}),Object(b.jsx)("meta",{property:"og:description",content:"A MERN Sentiment based blog writing website"}),Object(b.jsx)("meta",{property:"og:image",content:"https://www.webreedigito.com/wp-content/uploads/2020/12/blogs.jpg"}),Object(b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(b.jsx)("meta",{name:"twitter:title",content:"BlogEasy"}),Object(b.jsx)("meta",{name:"twitter:description",content:"A MERN Sentiment based blog writing website"}),Object(b.jsx)("meta",{name:"twitter:image",content:"https://www.webreedigito.com/wp-content/uploads/2020/12/blogs.jpg"})]}),Object(b.jsx)(L,{}),Object(b.jsxs)(N.c,{children:[Object(b.jsx)(N.a,{exact:!0,path:"/",children:Object(b.jsx)(y,{})}),Object(b.jsx)(N.a,{path:"/register",children:e?Object(b.jsx)(y,{}):Object(b.jsx)(_,{})}),Object(b.jsx)(N.a,{path:"/about",children:Object(b.jsx)(G,{})}),Object(b.jsx)(N.a,{path:"/login",children:e?Object(b.jsx)(y,{}):Object(b.jsx)(A,{})}),Object(b.jsx)(N.a,{path:"/write",children:e?Object(b.jsx)(P,{}):Object(b.jsx)(_,{})}),Object(b.jsx)(N.a,{path:"/settings",children:e?Object(b.jsx)(U,{}):Object(b.jsx)(_,{})}),Object(b.jsx)(N.a,{path:"/post/:postId",children:Object(b.jsx)(R,{})})]})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(E,{children:Object(b.jsx)(J,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.bd7de223.chunk.js.map