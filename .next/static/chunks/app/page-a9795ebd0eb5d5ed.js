(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6932:function(e,s,n){Promise.resolve().then(n.bind(n,9741))},9741:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return RootLayout}});var t=n(7437),i=n(6691),a=n.n(i),o=n(2265);n(8512),n(4896);var r={src:"/_next/static/media/user_icon.8fadb945.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mOAAiYz/7xy+/gJR+zj+w+b+eWWAsUYYZIsVpEt2+3TF/zXie7/rxs94T+IbRXRvAWkkcE8sLjZIWPRfzHfsl91cy78rZ11/q8okA0SMw8orGewi5941TJ5+n9u14y/bUvv/m9dfOc/h0v6X5CYbfyEiwwOSVNuakR0/4+qXPZvxvYv/0E4onzxP63Inv9AuasMthH104wTZv5PqF/3c86u7//m7Pr2L65uzU+QmG1E7SQGIBCwje25ZJky979F0pT/5olT/oPYtrHdF4ByfAxQIGQdXrfAJmHyM9uEyU+tw+rmAcUEGRgYGAAF6XEuQMBQxAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};n(4440);var components_login=function(e,s){let[n,i]=(0,o.useState)(!1),[c,l]=(0,o.useState)({username:"",password:""}),[d,u]=(0,o.useState)("password");async function startMySession(s){s.preventDefault();let n={username:c.username,password:c.password};try{let s=await fetch("https://fakestoreapi.com/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),t=await s.json();t.hasOwnProperty("token")&&(e.onLogin(),localStorage.setItem("token_session",t.token))}catch(s){e.onToast("Error",s.toString())}}return(0,t.jsx)("div",{className:"login-container",children:(0,t.jsxs)("div",{className:"login-card",children:[(0,t.jsx)(a(),{src:r,className:"icon-user"}),(0,t.jsx)("br",{}),(0,t.jsx)("h1",{children:"Login"}),(0,t.jsx)("div",{className:"content",children:(0,t.jsxs)("form",{onSubmit:startMySession,children:[(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("label",{htmlFor:"username",children:"Username"}),(0,t.jsx)("br",{}),(0,t.jsx)("input",{id:"username",type:"text",placeholder:"example123",required:!0,onChange:function(e){let s=e.target.value;l(e=>({...e,username:s}))},value:c.username})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("label",{htmlFor:"password",children:"pasword"}),(0,t.jsx)("br",{}),(0,t.jsx)("input",{id:"input-password",type:d,placeholder:"*******",required:!0,onChange:function(e){let s=e.target.value;l(e=>({...e,password:s}))},value:c.password}),(0,t.jsxs)("div",{className:"container-pass-visibility",children:[(0,t.jsx)("label",{id:"btn-pass",htmlFor:"pasword-visibility",onClick:()=>{let e,s;return e=document.getElementById("btn-pass"),void(i(s=!n),u(s?"text":"password"),e.innerHTML=s?"Show":"Hide")},children:"Show"}),(0,t.jsx)("input",{type:"checkbox",id:"pasword-visibility"})]})]}),(0,t.jsx)("button",{type:"submit",className:"btn-log",children:"Log in"})]})})]})})},c=n(1898);function RootLayout(){let[e,s]=(0,o.useState)(!1),[n,i]=(0,o.useState)(""),[a,r]=(0,o.useState)("");return(0,o.useEffect)(()=>{s(!!localStorage.getItem("token_session"))},[]),(0,t.jsxs)("main",{className:"page",children:[(0,t.jsxs)("div",{className:"toast",children:[(0,t.jsxs)("div",{className:"toast-header",children:[(0,t.jsx)("div",{className:"content-name",children:(0,t.jsx)("span",{children:a})}),(0,t.jsxs)("div",{className:"close-btn",children:[(0,t.jsx)("label",{id:"btn-close-toast",htmlFor:"check-toast",children:(0,t.jsx)("small",{children:"X"})}),(0,t.jsx)("input",{id:"check-toast",type:"checkbox",hidden:!0})]})]}),(0,t.jsx)("div",{className:"toast-body",children:(0,t.jsx)("span",{children:n})})]}),e?(0,t.jsx)(c.default,{onLogout:function(){s(!1),localStorage.removeItem("token_session")}}):(0,t.jsx)(components_login,{onLogin:function(){s(!0)},onToast:function(e,s){document.getElementById("btn-close-toast").click(),i(s),r(e)}}),e?(0,t.jsxs)("div",{className:"page",children:[(0,t.jsx)("div",{id:"home-title",children:(0,t.jsx)("h1",{children:"Home"})}),(0,t.jsx)("img",{className:"page-not-found",src:"https://i.pinimg.com/736x/d6/48/b3/d648b38b1907508b37588225ad42fa35.jpg"})]}):(0,t.jsx)("div",{})]})}},1898:function(e,s,n){"use strict";n.r(s);var t=n(7437);n(2872);var i=n(1396),a=n.n(i);n(2265),s.default=function(e){return(0,t.jsxs)("nav",{className:"navbar",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"./usuarios",children:"Users"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"./productos",children:"products"})})]}),(0,t.jsx)("a",{id:"logout",href:"/",onClick:function(){e.onLogout()},children:(0,t.jsx)("small",{children:"Close Session"})})]})}},4440:function(){},2872:function(){},8512:function(){},4896:function(){}},function(e){e.O(0,[176,691,971,864,744],function(){return e(e.s=6932)}),_N_E=e.O()}]);