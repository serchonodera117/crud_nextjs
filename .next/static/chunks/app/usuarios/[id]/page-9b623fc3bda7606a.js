(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{8922:function(s,e,n){Promise.resolve().then(n.bind(n,8567))},8567:function(s,e,n){"use strict";n.r(e);var r=n(7437),c=n(2265);n(4896),e.default=function(s){let{params:e}=s,[n,i]=(0,c.useState)(null);async function getSingleUser(){let s="https://fakestoreapi.com/users/".concat(e.id);try{let e=await fetch(s),n=await e.json();console.log(n),i(n)}catch(s){console.log(s)}}return(0,c.useEffect)(()=>{getSingleUser()},[]),(0,r.jsxs)("div",{className:"page",children:[(0,r.jsxs)("nav",{className:"nav-back",children:[(0,r.jsx)("button",{onClick:function(){history.back()},children:"Back"}),(0,r.jsx)("h1",{children:"User"})]}),null!=n?(0,r.jsxs)("div",{className:"card-user-details",children:[(0,r.jsxs)("div",{className:"col-left",children:[(0,r.jsx)("h3",{children:"user data"}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["ID: ",n.id]})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Username: ",n.username]})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Password: ",n.passsword]})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Name: ",n.name.firstname," ",n.name.lastname]})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Phone: ",n.phone]})})]}),(0,r.jsxs)("div",{className:"col-right",children:[(0,r.jsx)("h3",{children:"Address"}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["city: ",n.address.city]})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Street: ",n.address.street]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Number: ",n.address.number]})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Zipcode: ",n.address.zipcode]})}),(0,r.jsx)("br",{}),(0,r.jsx)("hr",{}),(0,r.jsx)("h3",{children:"Geolocation"}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Lat: ",n.address.geolocation.lat]})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("h4",{children:["Long: ",n.address.geolocation.long]})}),(0,r.jsx)("br",{})]})]}):(0,r.jsx)("img",{className:"page-not-found",src:"https://www.hostpapa.com/blog/app/uploads/2019/05/image4-1.png"})]})}},4896:function(){},622:function(s,e,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),c=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(s,e,n){var r,t={},o=null,d=null;for(r in void 0!==n&&(o=""+n),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(d=e.ref),e)i.call(e,r)&&!l.hasOwnProperty(r)&&(t[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps)void 0===t[r]&&(t[r]=e[r]);return{$$typeof:c,type:s,key:o,ref:d,props:t,_owner:a.current}}e.jsx=q,e.jsxs=q},7437:function(s,e,n){"use strict";s.exports=n(622)}},function(s){s.O(0,[971,864,744],function(){return s(s.s=8922)}),_N_E=s.O()}]);