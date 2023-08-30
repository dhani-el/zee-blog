/*! For license information please see 236.09b5a8e1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksuzs_blogg=self.webpackChunksuzs_blogg||[]).push([[236],{5063:function(e,t,n){n.d(t,{a$:function(){return l},pH:function(){return u},pt:function(){return p}});var s=n(4165),a=n(5861),r=n(1243),o=n(8174),c=n(6981),i="custom-id-yes",u=function(e){var t=e.userName,n=e.password;return function(){var e=(0,a.Z)((0,s.Z)().mark((function e(a){var u,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:c.mA}),e.prev=1,e.next=4,r.Z.post("{BASE_URL}/auth/api/login",{username:"".concat(t),password:"".concat(n)},{credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:u=e.sent,p=u.data,a({type:c.wW,payload:p}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),a({type:c.HW,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){var t=e.username;return function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var a,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:c.HQ}),e.prev=1,e.next=4,r.Z.post("/user/api/exists",{username:"".concat(t)},{credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:a=e.sent,u=a.data,n({type:c.ct,payload:u}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n({type:c.eN,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){var t=e.userName,n=e.email,u=e.password;return function(){var e=(0,a.Z)((0,s.Z)().mark((function e(a){var p,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:c.O2}),e.prev=1,e.next=4,r.Z.post("/auth/api/signup",{name:"".concat(t),email:"".concat(n),password:"".concat(u)},{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:p=e.sent,l=p.data,a({type:c.Vx,payload:l}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),a({type:c.W1,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},7489:function(e,t,n){n.d(t,{$:function(){return u}});var s=n(4165),a=n(5861),r=n(1243),o=n(8174),c=n(8278),i="custom-id-yes",u=function(e){var t=e.email;return function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var a,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:c.Dd}),e.prev=1,e.next=4,r.Z.post("/blogs/api/newsletter",{email:t},{withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:a=e.sent,u=a.data,n({type:c.hF,payload:u}),o.Am.success("Successfully subscribed to newsletter!",{toastId:i}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),n({type:c.Ye,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}},6236:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n(9439),a=n(2791),r=n(7689),o=n(8329),c=n(9328),i=n(5383),u=n(9434),p=n(5063),l=n(7489),d=n(184),m=function(){var e=(0,a.useState)(""),t=(0,s.Z)(e,2),n=t[0],m=t[1],A=(0,a.useState)(!1),f=(0,s.Z)(A,2),g=(f[0],f[1]),v=(0,a.useState)(""),x=(0,s.Z)(v,2),w=x[0],h=x[1],Z=(0,a.useState)(""),y=(0,s.Z)(Z,2),C=y[0],b=y[1],I=(0,a.useState)(!1),k=(0,s.Z)(I,2),j=k[0],B=k[1],N=(0,r.s0)(),U=(0,u.I0)(),S=(0,a.useRef)();return(0,d.jsxs)("div",{className:"signup-container",children:[(0,d.jsxs)("div",{className:"form",children:[(0,d.jsx)("h2",{children:"Sign Up for ZEE"}),(0,d.jsx)("p",{children:"Become a part of our subscribers."}),(0,d.jsx)("input",{type:"text",value:n,onChange:function(e){m(e.target.value),console.log("validation starting soon"),S.current=setTimeout((function(){U((0,p.pt)({username:"".concat(e.target.value)})).then((function(e){g(e),clearTimeout(S.current)}))}),500)},placeholder:"Name"}),(0,d.jsx)("input",{type:"email",value:w,onChange:function(e){h(e.target.value)},placeholder:"Email"}),(0,d.jsx)("input",{type:"password",value:C,onChange:function(e){b(e.target.value)},placeholder:"Password"}),(0,d.jsxs)("label",{children:[(0,d.jsx)("input",{type:"checkbox",onChange:function(){B(!j)}})," i want newsLetters"]}),(0,d.jsx)("button",{type:"submit",onClick:function(e){U((0,p.a$)({userName:"".concat(n),email:"".concat(w),password:"".concat(C)})).then((function(){o.Z.set("email",w,{expires:2}),N("/login"),U((0,l.$)({email:"".concat(w)}))}))},children:"sign me up!"})]}),(0,d.jsxs)("div",{className:"container2",children:[(0,d.jsx)("div",{className:"overlay"}),(0,d.jsxs)("div",{className:"secondary-overlay",children:[(0,d.jsx)("div",{className:"quotes",children:(0,d.jsx)("img",{src:c,alt:"left quotes"})}),(0,d.jsx)("div",{className:"quotes",children:(0,d.jsx)("img",{src:c,alt:"right quotes"})}),(0,d.jsx)("div",{className:"text",children:"Like gemstones, your enduring uniqueness makes you particularly beautiful."})]})]}),(0,d.jsx)("div",{className:"marks mark-1",children:(0,d.jsx)("img",{src:i,alt:"exclamation mark"})}),(0,d.jsx)("div",{className:"marks mark-2",children:(0,d.jsx)("img",{src:i,alt:"exclamation mark"})}),(0,d.jsx)("div",{className:"marks mark-3",children:(0,d.jsx)("img",{src:i,alt:"exclamation mark"})}),(0,d.jsx)("div",{className:"marks mark-4",children:(0,d.jsx)("img",{src:i,alt:"exclamation mark"})}),(0,d.jsx)("div",{className:"marks mark-5",children:(0,d.jsx)("img",{src:i,alt:"exclamation mark"})})]})}},5383:function(e){e.exports="data:image/png;base64,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"},9328:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABACAYAAADlNHIOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgB7dqBTdtAFAbgP1UHaCfA3SAjZJOyQbsB6QRtJ0CdoCOQDYAJ8AawweOdbCQEnH2X3MvvwP9JFpJj9Of57pzz2YCIiIiIiIiIiAiRmX0BETufxgvf+Hbl2zUI2Pk0XnA3Fv7cFkfCzqfyQn/4dm+vpX0dgrHzaTK97qU/CMLOp/LC1r7dTRSePtsgCDufaiz+fqrXWeAshJ1PVVD8TwRi51PZcM3NFZ/2bxCInU81Fn9neWsEYufTeYGXE8WHD3t2PpUXeD5R/CWCsfPpLD/00/4Owdj5VDO97xzB2Pl0U70PR8DOL/EJQcYe1mU+3iEYO5/OT8D//OiPn/ax8+ksf9NzrMsPNb/UZwSw4a4yt55yOx7T+Z/1eNyDb/1qtbrBO8ivEdIAGArLOUu9E2+cIN/fY7g+//KT0eN087lsWFE81N53qOz8GlGzoBbLub/9JFxgP+z8YmHT0Ea2xl2rCc9fegMkF8Z9QBKafwoNkIpnjoLQ/KgG6NHWd9Tp0VZtfrFTaYD0QOWs4vgebdXmF4tqgB3a+1px7A7t1eQXC2mA8SamR1vFP4Ts/BqRP8L/0FbtMgE7v8gKQcapW1r4atFz0jrNt5p/YOeXChsB/oXTAtdftLFDJXb+IqRe6Nu1HWbvl2TZ+Ytg8+/kzDnoJoidvwg2/zJszhYNsPMXwcpeB3+Shn3TnsfOXwwbXhW5mig8reV3CMLOfylsGjrHhmni0yPB5KiPBNn5IiIiIiIiIiIiIh/LI461Fwqwm3zaAAAAAElFTkSuQmCC"},8329:function(e,t,n){function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)e[s]=n[s]}return e}n.d(t,{Z:function(){return a}});var a=function e(t,n){function a(e,a,r){if("undefined"!==typeof document){"number"===typeof(r=s({},n,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var c in r)r[c]&&(o+="; "+c,!0!==r[c]&&(o+="="+r[c].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+o}}return Object.create({set:a,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],s={},a=0;a<n.length;a++){var r=n[a].split("="),o=r.slice(1).join("=");try{var c=decodeURIComponent(r[0]);if(s[c]=t.read(o,c),e===c)break}catch(i){}}return e?s[e]:s}},remove:function(e,t){a(e,"",s({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,s({},this.attributes,t))},withConverter:function(t){return e(s({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=236.09b5a8e1.chunk.js.map