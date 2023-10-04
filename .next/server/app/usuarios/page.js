(()=>{var e={};e.id=69,e.ids=[69],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3542:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>r.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>m,routeModule:()=>x,tree:()=>d});var a=t(3137),i=t(4647),n=t(4183),r=t.n(n),l=t(1775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let c=a.AppPageRouteModule,d=["",{children:["usuarios",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7366)),"D:\\LENGUAJES_DE_PROGRAMACION\\nextjs\\crud_nextjs\\app\\usuarios\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,8746)),"D:\\LENGUAJES_DE_PROGRAMACION\\nextjs\\crud_nextjs\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["D:\\LENGUAJES_DE_PROGRAMACION\\nextjs\\crud_nextjs\\app\\usuarios\\page.jsx"],u="/usuarios/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:i.x.APP_PAGE,page:"/usuarios/page",pathname:"/usuarios",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3260:(e,s,t)=>{Promise.resolve().then(t.bind(t,427))},427:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=t(80),i=t(9885),n=t(9785);t(2451),t(9030);let __WEBPACK_DEFAULT_EXPORT__=function(){let[e,s]=(0,i.useState)(!0),[t,r]=(0,i.useState)([]);async function getUsers(){try{let e=await fetch("https://fakestoreapi.com/users"),s=await e.json();r(s)}catch(e){console.log(e)}}function loadModal(){document.getElementById("show-modal").click()}async function addUser(e){e.preventDefault();let s={email:document.getElementById("input-email").value,username:document.getElementById("input-username").value,password:document.getElementById("input-password").value,name:{firstname:document.getElementById("input-name").value,lastname:document.getElementById("input-lastname").value},address:{city:document.getElementById("input-city").value,street:document.getElementById("input-street").value,number:document.getElementById("input-number").value,zipcode:document.getElementById("input-zipcode").value,geolocalization:{lat:document.getElementById("input-lat").value,long:document.getElementById("input-long").value},phone:document.getElementById("input-phone").value}};try{let e=await fetch("https://fakestoreapi.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),a=await e.json();s.id=a.id;let i=[...t];i.push(s),r(i),setTimeout(()=>{loadModal(),s.email=""},500)}catch(e){console.log(e)}}return(0,i.useEffect)(()=>{s(!!localStorage.getItem("token_session")),getUsers()},[]),(0,a.jsxs)("div",{className:"page",children:[e?a.jsx(n.default,{className:"static",onLogout:function(){localStorage.removeItem("token_session"),s(!1)}}):a.jsx("div",{}),e?(0,a.jsxs)("div",{className:"container",children:[a.jsx("h1",{className:"title",children:"Users"}),a.jsx("br",{}),a.jsx("hr",{}),a.jsx("br",{}),t.map(e=>(0,a.jsxs)("div",{className:"card-user",children:[(0,a.jsxs)("div",{className:"col-left",children:[a.jsx("img",{className:"image-user",src:"https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg",alt:"..."}),a.jsx("h3",{children:e.username}),a.jsx("br",{}),a.jsx("a",{className:"btn-page",href:`/usuarios/${e.id}`,children:"more info"})]}),(0,a.jsxs)("div",{className:"col-right",children:[a.jsx("br",{}),a.jsx("h3",{children:e.username}),a.jsx("br",{}),(0,a.jsxs)("h3",{children:[e.name.firstname," ",e.name.lastname]}),a.jsx("br",{}),a.jsx("h4",{children:e.email}),a.jsx("br",{}),(0,a.jsxs)("h5",{children:["ID:  ",e.id]}),a.jsx("br",{}),(0,a.jsxs)("button",{className:"btn-delete",onClick:()=>{var s;s=e.id,r(t.filter(e=>e.id!==s))},children:["Delete ",e.username]})]})]},e.id))]}):a.jsx("img",{className:"page-not-found",src:"https://www.hostpapa.com/blog/app/uploads/2019/05/image4-1.png"}),e?(0,a.jsxs)("div",{className:"menu-options",children:[a.jsx("a",{className:"btn-option",onClick:function(){getUsers()},children:"Reset"}),a.jsx("a",{className:"btn-option",onClick:function(){let e=[...t];e.sort((e,s)=>e.id-s.id),r(e)},children:" Asc ^"}),a.jsx("a",{className:"btn-option",onClick:function(){let e=[...t];e.sort((e,s)=>s.id-e.id),r(e)},children:"Desc v"}),a.jsx("a",{className:"btn-option",onClick:function(){let e=[...t];e.sort((e,s)=>e.email.localeCompare(s.email)),r(e)},children:"by Email"}),a.jsx("a",{className:"btn-option",onClick:loadModal,children:"Add +"}),a.jsx("label",{className:"control",htmlFor:"show-options",children:a.jsx("span",{children:"+"})}),a.jsx("input",{id:"show-options",type:"checkbox",hidden:!0})]}):a.jsx("div",{}),(0,a.jsxs)("div",{className:"modal",children:[a.jsx("input",{id:"show-modal",type:"checkbox",hidden:!0}),(0,a.jsxs)("div",{className:"modal-head",children:[a.jsx("h2",{children:"Add"}),a.jsx("label",{htmlFor:"show-modal",children:"X"})]}),(0,a.jsxs)("form",{onSubmit:addUser,children:[(0,a.jsxs)("div",{className:"modal-body",children:[(0,a.jsxs)("div",{className:"col-left",children:[a.jsx("h3",{children:"Data"}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-email",children:"Email"}),a.jsx("br",{}),a.jsx("input",{className:"form-input",id:"input-email",type:"email",placeholder:"example@exanple.com",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-username",children:"Username"}),a.jsx("br",{}),a.jsx("input",{id:"input-username",className:"form-input",type:"text",placeholder:"example117",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-password",children:"Password"}),a.jsx("br",{}),a.jsx("input",{id:"input-password",className:"form-input",type:"password",placeholder:"******",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-name",children:"Name"}),a.jsx("br",{}),a.jsx("input",{id:"input-name",className:"form-input",type:"text",placeholder:"Buzz",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-lastname",children:"Last Name"}),a.jsx("br",{}),a.jsx("input",{id:"input-lastname",className:"form-input",type:"text",placeholder:"Aldrin",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-phone",children:"phone"}),a.jsx("br",{}),a.jsx("input",{id:"input-phone",className:"form-input",type:"number",placeholder:"143 123 1234",required:!0})]}),a.jsx("br",{})]}),(0,a.jsxs)("div",{className:"col-right",children:[a.jsx("h3",{children:"Address"}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-city",children:"City"}),a.jsx("br",{}),a.jsx("input",{id:"input-city",className:"form-input",type:"text",placeholder:"city",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-street",children:"Street"}),a.jsx("br",{}),a.jsx("input",{id:"input-street",className:"form-input",type:"text",placeholder:"Avenida siempre viva",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-number",children:"Number"}),a.jsx("br",{}),a.jsx("input",{id:"input-number",className:"form-input",type:"number",placeholder:"42",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-zipcode",children:"zipcode"}),a.jsx("br",{}),a.jsx("input",{id:"input-zipcode",className:"form-input",type:"number",placeholder:"423122",required:!0})]}),a.jsx("br",{}),a.jsx("h3",{children:"Geolocalizacion"}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-lat",children:"Latitude"}),a.jsx("br",{}),a.jsx("input",{id:"input-lat",className:"form-input",type:"number",placeholder:"-64.313",required:!0})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"form-section",children:[a.jsx("label",{htmlFor:"input-long",children:"Longitude"}),a.jsx("br",{}),a.jsx("input",{id:"input-long",className:"form-input",type:"number",placeholder:"-64.313",required:!0})]}),a.jsx("br",{})]})]}),a.jsx("br",{}),(0,a.jsxs)("div",{className:"modal-footer",children:[a.jsx("label",{className:"modal-cancel",htmlFor:"show-modal",children:"cancelar"}),a.jsx("button",{className:"modal-submit",type:"submit",children:"Submit"})]})]})]})]})}},7366:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>r,__esModule:()=>n,default:()=>o});var a=t(7536);let i=(0,a.createProxy)(String.raw`D:\LENGUAJES_DE_PROGRAMACION\nextjs\crud_nextjs\app\usuarios\page.jsx`),{__esModule:n,$$typeof:r}=i,l=i.default,o=l},7481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=t(6885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let s=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:s+""}]}},9030:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[356,885,958],()=>__webpack_exec__(3542));module.exports=t})();