(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6932:function(e,s,t){Promise.resolve().then(t.bind(t,9741))},9741:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return RootLayout}});var n=t(7437),i=t(6691),a=t.n(i),o=t(2265);t(8512),t(4896);var l={src:"/_next/static/media/user_icon.8fadb945.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mOAAiYz/7xy+/gJR+zj+w+b+eWWAsUYYZIsVpEt2+3TF/zXie7/rxs94T+IbRXRvAWkkcE8sLjZIWPRfzHfsl91cy78rZ11/q8okA0SMw8orGewi5941TJ5+n9u14y/bUvv/m9dfOc/h0v6X5CYbfyEiwwOSVNuakR0/4+qXPZvxvYv/0E4onzxP63Inv9AuasMthH104wTZv5PqF/3c86u7//m7Pr2L65uzU+QmG1E7SQGIBCwje25ZJky979F0pT/5olT/oPYtrHdF4ByfAxQIGQdXrfAJmHyM9uEyU+tw+rmAcUEGRgYGAAF6XEuQMBQxAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};t(4440);var components_login=function(e,s){let[t,i]=(0,o.useState)(!1),[r,c]=(0,o.useState)({username:"",password:""}),[d,h]=(0,o.useState)("password");async function startMySession(s){s.preventDefault();let t={username:r.username,password:r.password};try{let s=await fetch("https://fakestoreapi.com/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await s.json();n.hasOwnProperty("token")&&(e.onLogin(),localStorage.setItem("token_session",n.token))}catch(s){e.onToast("Error",s.toString())}}return(0,n.jsx)("div",{className:"login-container",children:(0,n.jsxs)("div",{className:"login-card",children:[(0,n.jsx)(a(),{src:l,className:"icon-user"}),(0,n.jsx)("br",{}),(0,n.jsx)("h1",{children:"Login"}),(0,n.jsx)("div",{className:"content",children:(0,n.jsxs)("form",{onSubmit:startMySession,children:[(0,n.jsxs)("div",{className:"section",children:[(0,n.jsx)("label",{htmlFor:"username",children:"Username"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{id:"username",type:"text",placeholder:"example123",required:!0,onChange:function(e){let s=e.target.value;c(e=>({...e,username:s}))},value:r.username})]}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"section",children:[(0,n.jsx)("label",{htmlFor:"password",children:"pasword"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{id:"input-password",type:d,placeholder:"*******",required:!0,onChange:function(e){let s=e.target.value;c(e=>({...e,password:s}))},value:r.password}),(0,n.jsxs)("div",{className:"container-pass-visibility",children:[(0,n.jsx)("label",{id:"btn-pass",htmlFor:"pasword-visibility",onClick:()=>{let e,s;return e=document.getElementById("btn-pass"),void(i(s=!t),h(s?"text":"password"),e.innerHTML=s?"Show":"Hide")},children:"Show"}),(0,n.jsx)("input",{type:"checkbox",id:"pasword-visibility"})]})]}),(0,n.jsx)("button",{type:"submit",className:"btn-log",children:"Log in"})]})})]})})},r=t(1898);function RootLayout(){let[e,s]=(0,o.useState)(!1),[t,i]=(0,o.useState)(""),[a,l]=(0,o.useState)("");return(0,o.useEffect)(()=>{s(!!localStorage.getItem("token_session"))},[]),(0,n.jsxs)("main",{className:"page",children:[(0,n.jsxs)("div",{className:"toast",children:[(0,n.jsxs)("div",{className:"toast-header",children:[(0,n.jsx)("div",{className:"content-name",children:(0,n.jsx)("span",{children:a})}),(0,n.jsxs)("div",{className:"close-btn",children:[(0,n.jsx)("label",{id:"btn-close-toast",htmlFor:"check-toast",children:(0,n.jsx)("small",{children:"X"})}),(0,n.jsx)("input",{id:"check-toast",type:"checkbox",hidden:!0})]})]}),(0,n.jsx)("div",{className:"toast-body",children:(0,n.jsx)("span",{children:t})})]}),e?(0,n.jsx)(r.default,{onLogout:function(){s(!1),localStorage.removeItem("token_session")}}):(0,n.jsx)(components_login,{onLogin:function(){s(!0)},onToast:function(e,s){document.getElementById("btn-close-toast").click(),i(s),l(e)}}),e?(0,n.jsxs)("div",{className:"page",children:[(0,n.jsx)("div",{id:"home-title",children:(0,n.jsx)("h1",{children:"Home"})}),(0,n.jsx)("img",{className:"page-not-found",src:"https://i.pinimg.com/736x/d6/48/b3/d648b38b1907508b37588225ad42fa35.jpg"})]}):(0,n.jsx)("div",{})]})}},1898:function(e,s,t){"use strict";t.r(s);var n=t(7437);t(2872);var i=t(1396),a=t.n(i);t(2265),t(4896),s.default=function(e){return(0,n.jsxs)("div",{children:[(0,n.jsxs)("nav",{className:"navbar",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"./usuarios",children:"Users"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"./productos",children:"products"})})]}),(0,n.jsx)("a",{id:"logout",onClick:function(e){document.getElementById("show-modal-navigation").click()},children:(0,n.jsx)("small",{children:"Close Session"})})]}),(0,n.jsxs)("div",{className:"modal",children:[(0,n.jsx)("input",{id:"show-modal-navigation",type:"checkbox",hidden:!0}),(0,n.jsxs)("div",{className:"modal-head",children:[(0,n.jsx)("h2",{children:"warning"}),(0,n.jsx)("label",{htmlFor:"show-modal-navigation",children:"X"})]}),(0,n.jsx)("div",{className:"modal-body",children:(0,n.jsxs)("div",{style:{display:"table",marginLeft:"auto",marginRight:"auto"},children:[(0,n.jsx)("h3",{style:{textAlign:"center",width:"100%"},children:"Are you sure you want to leave this page?"}),(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:"https://media.tenor.com/eGrPITajENUAAAAC/bocchi-bocchi-the-rock.gif",style:{borderRadius:"10px",height:"300px",width:"100%"}})]})}),(0,n.jsx)("hr",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("label",{className:"modal-cancel",htmlFor:"show-modal-navigation",children:"No"}),(0,n.jsx)("a",{className:"modal-submit",href:"/",type:"button",onClick:function(){e.onLogout()},children:"Yes, I want to leave"})]}),(0,n.jsx)("br",{})]})]})}},4440:function(){},2872:function(){},8512:function(){},4896:function(){}},function(e){e.O(0,[176,691,971,864,744],function(){return e(e.s=6932)}),_N_E=e.O()}]);