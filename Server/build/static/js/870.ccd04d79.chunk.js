"use strict";(self.webpackChunksuzs_blogg=self.webpackChunksuzs_blogg||[]).push([[870],{5568:function(e,s,t){t(2791);s.Z=t.p+"static/media/close.d6768e9f136d786f6e9f355b9f8f50ba.svg"},4921:function(e,s,t){t.d(s,{CZ:function(){return m},DT:function(){return v},Hj:function(){return A},Mx:function(){return p},VP:function(){return u},X4:function(){return g},Xi:function(){return l},qz:function(){return d}});var a=t(4165),n=t(5861),r=t(1243),o=t(8174),c=t(8035),i="custom-id-yes",l=function(e){var s=e.id;return function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.X8}),e.prev=1,e.next=4,r.Z.get("/blogs/api/".concat(s),{headers:{}});case 4:n=e.sent,l=n.data,t({type:c.c2,payload:l}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:c.sd,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(s){return e.apply(this,arguments)}}()},d=function(e){var s=e.searchTerm;return function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.Wb}),e.prev=1,e.next=4,r.Z.get("/blogs/api/search/".concat(s),{withCredentials:!0,headers:{credentials:"include"}});case 4:n=e.sent,l=n.data,t({type:c.Ux,payload:l}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:c.hO,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(s){return e.apply(this,arguments)}}()},u=function(e){return function(){var s=(0,n.Z)((0,a.Z)().mark((function s(t){var n,l;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t({type:c.FB}),s.prev=1,s.next=4,r.Z.get("/blogs/api/post/".concat(e),{withCredentials:!0,headers:{}});case 4:n=s.sent,l=n.data,t({type:c.hG,payload:l}),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(1),t({type:c.nA,payload:s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message}),o.Am.error(s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message,{toastId:i});case 13:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}()},p=function(e){var s=e.blogTitle;return function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.p5}),console.log(s),e.prev=2,e.next=5,r.Z.post("/likes/api/post",{title:"".concat(s)},{credentials:"include",withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 5:n=e.sent,l=n.data,t({type:c.Ii,payload:l}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:c.gd,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(s){return e.apply(this,arguments)}}()},m=function(e){var s=e.blogTitle;return function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.Ws}),e.prev=1,e.next=4,r.Z.delete("/likes/api/delete",{title:"".concat(s,",")},{credentials:"include",withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:n=e.sent,l=n.data,t({type:c.es,payload:l}),o.Am.success("Blog Deleted",{toastId:i}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:c.B0,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(s){return e.apply(this,arguments)}}()},A=function(e){var s=e.blogTitle;return function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.UF}),e.prev=1,e.next=4,r.Z.get("/likes/api/".concat(s),{withCredentials:!0});case 4:n=e.sent,l=n.data,t({type:c.B3,payload:l}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:c.hn,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(s){return e.apply(this,arguments)}}()},g=function(e){var s=e.id;return function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.x0}),e.prev=1,e.next=4,r.Z.delete("/admin/api/delete/".concat(s),{withCredentials:!0});case 4:n=e.sent,l=n.data,t({type:c.Ft,payload:l}),o.Am.success("Blog Deleted",{toastId:i}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:c.o0,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),o.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:i});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(s){return e.apply(this,arguments)}}()},v=function(e){return function(){var s=(0,n.Z)((0,a.Z)().mark((function s(t){var n,l;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t({type:c.VN}),s.prev=1,s.next=4,r.Z.get("/blogs/api/genres/".concat(e,"/0"),{withCredentials:!0});case 4:n=s.sent,l=n.data,t({type:c.Te,payload:l}),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(1),t({type:c.xm,payload:s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message}),o.Am.error(s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message,{toastId:i});case 13:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}()}},6528:function(e,s,t){var a=t(184);s.Z=function(){return(0,a.jsx)("div",{className:"circle-container",children:(0,a.jsxs)("div",{className:"circle-stn",children:[(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"}),(0,a.jsx)("div",{className:"circe"})]})})}},6561:function(e,s,t){t.d(s,{Z:function(){return u}});var a=t(9439),n=t(1087),r=t(2791),o=t(9086);var c=t.p+"static/media/hamburger.649f922ed52eb4bd14d82773e1719102.svg",i=t(5568),l=t(8329),d=t(184),u=function(e){var s=e.updateCurse,t=e.updateLeave,u=(0,r.useRef)(),p=(0,r.useRef)(),m=l.Z.get("username"),A=l.Z.get("loginStatus"),g=(0,r.useState)(!1),v=(0,a.Z)(g,2),h=v[0],x=v[1],j=function(){x(!h)};return(0,r.useEffect)((function(){p.current=o.p8.timeline({paused:!0}),p.current.fromTo(u.current,{x:"100%",duration:0},{x:"0%",duration:.5,ease:"power3.inOut"})}),[]),(0,r.useEffect)((function(){h?p.current.play():p.current.reverse()}),[h]),(0,d.jsxs)("div",{className:"navbar",children:[(0,d.jsx)("div",{className:"logo-wrapper",children:"ZEE"}),(0,d.jsxs)("ul",{id:"mobile-nav",ref:u,children:[(0,d.jsx)("li",{onClick:j,children:(0,d.jsx)(n.rU,{to:"/",children:"home"})}),(0,d.jsx)("li",{onClick:j,children:(0,d.jsx)(n.rU,{to:"/blogs/0",children:"blog"})}),(0,d.jsx)("li",{onClick:j,children:(0,d.jsx)(n.rU,{to:"/about",children:"about"})}),A?(0,d.jsxs)("li",{children:["Hi ",m]}):(0,d.jsx)("li",{onClick:j,children:(0,d.jsx)(n.rU,{to:"/login",id:"signup",children:(0,d.jsx)("button",{children:"log in"})})}),(0,d.jsx)("div",{className:"closeBtn-wrapper",onClick:j,children:(0,d.jsx)("img",{src:i.Z,alt:"close button"})})]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(n.rU,{to:"/",onMouseOver:s,onMouseLeave:t,onClick:t,children:"home"})}),(0,d.jsx)("li",{children:(0,d.jsx)(n.rU,{to:"/blogs/0",onMouseOver:s,onMouseLeave:t,onClick:t,children:"blog"})}),(0,d.jsx)("li",{children:(0,d.jsx)(n.rU,{to:"/about",onMouseOver:s,onMouseLeave:t,onClick:t,children:"about"})}),A?(0,d.jsxs)("li",{children:["Hi ",m]}):(0,d.jsx)("li",{children:(0,d.jsx)(n.rU,{to:"/login",id:"signup",onMouseOver:s,onMouseLeave:t,onClick:t,children:(0,d.jsx)("button",{children:" Log In"})})})]}),(0,d.jsx)("div",{className:"menu-btn-wrapper",onClick:j,children:(0,d.jsx)("img",{src:c,alt:"hamburger"})})]})}},5620:function(e,s,t){var a=t(184);s.Z=function(e){var s=e.htmlContent;return(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}},2266:function(e,s,t){t.r(s),t.d(s,{default:function(){return Q}});var a=t(9439),n=t(2791),r=t(7689),o=t(1087),c=t(9434),i=t(5904),l=t(6971),d=t.p+"static/media/copy.4ad11c8065f761e470c2.png",u=t(8029),p=t(184),m=function(e){var s=e.handleCopy,t=(0,n.useState)(0),r=(0,a.Z)(t,2),o=r[0],c=r[1];return(0,n.useEffect)((function(){c(window.location.href)}),[]),(0,p.jsxs)("div",{className:"share-container",children:[(0,p.jsx)(i.Z,{"data-tooltip":"Share to Twitter",className:"share-icons tweet-share",url:o,children:(0,p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvdVe1VwkAQnDkK0A6kA0MFYgViBWoFaAVCBaYEOhAq0A6EDqACsQBufEtCXnL5grzHH+5nbm9md2Z3Q5z58Mz4uDACSdckt02yWQyAMaQRgAjAGuSM5NTeSRqRnB8wChLJewu2gGUdibz/BnBXcW9vIpBvJOMSgaQI0g+ALchHkgZUOLmYOv4lpBWciw9JhhUoeynFcG6al8zKh/TZIOFfqkCWXEhg2j0EAHMkmq4BDCB9NBAs6Jx5k52MIDWvD8nAbjrNhzRlrzepJ5B+OwFnjhYNts/lLuqa/R6Ng7ADiwRJJ5lBVx0q2dC5fviutCrSTnkCUDCrlTDo/8pBSydxCOmrFbAYsAEZVW2BymWn3W4C8v1oEvK+ajBLJucB923rfQzS5Ko/5AvJWV1AdQWSyTRu8cGm9rUJvFCBElBbUrdHSLNIwW26mwsMbyU9w/uhmZYjW6VL0KZ8TrIVuLaL2jI69f7Cfpmnln9M/D80T5kZ2NbeOgAAAABJRU5ErkJggg==",alt:"twitter logo"})}),(0,p.jsx)(l.Z,{"data-tooltip":"Share to Whatsapp",className:"share-icons what-share",url:o,children:(0,p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgtJREFUSEvFVYttGkEUnNlrAFcQ6IAOQjrAFRhXAKkgTgWxKwgd5DowqSDnCkwHJgXcTvR290732QMUyfJKCCR237w3b+Y94p0P3zk+Ph5A0gre34FcArDPCUAF8gDgN+P35JmsQNIc0k8AKwB/Q1DJgs0S2OcUtQR5T9KARycLIGkJ6RkAIT2yKB5yjyXtIP0IVZG3uWpGAJJmkF5D1uSaZHWOgpTMHsAnkIthJWMA78tAC7my4AEQmJE8TgElkD8ASjp3273XA2gvSt+NltQHe3iic4sLlUS6IlWWZDh9gLp+BLkFeWOldjhGaqRRMXnkvSA9sSh2eQDvg+TonCkHA4BeZtmmD96PK/D+aFJkUWwSgEnVGm4U3VxyvSIDd927fYoMAKjo3LoJ1lYh7VkU92cpqusHkN/oXBt3CNCjqAWp671lBmkP574CiCaMzXxqpKmowCWdm19qsum5J8tU/jaNCnNtDJIUF356f4JUNhSPexDHw2v3UZeSMJckc3UzJsyMjV82qaovXUfnjJalaQBk2dunSnK2xMwvL40CsxSlMkdavmJU2FBcNNWcc/Ia0i+Q1sg3eL+Cc9aLtpEdddkI2cIGnhk2UTVMJu/kfMoHSAZmk9P2QjCj7QSQm6lZNZSpTc5jWiaHNOzm8H6XghrvlrnthgrOlf+9cC659tr/P34nX5vp1L1/DcgzKPJGk3YAAAAASUVORK5CYII=",alt:"whatsapp logo"})}),(0,p.jsx)(u.CopyToClipboard,{onCopy:s,"data-tooltip":"Copy Link to Clipboard",className:"copy-share",text:o,children:(0,p.jsx)("div",{className:"copied-share",children:(0,p.jsx)("img",{"data-tooltip":"Copy Link to Clipboard",src:d,alt:"clip path"})})})]})},A=t(6561),g=t(477),v=t(7127);var h=t.p+"static/media/comments.5cd1ddea4597087d29a89f2498a26ffd.svg",x=(t.p,t(5568)),j=t(1687),f=t(9086),C=t(8329),w=function(e){e.reminder;var s=e.setReminder,t=e.updateCurse,a=e.updateLeave;return(0,p.jsxs)("div",{className:"login-reminder-overlay",children:[(0,p.jsx)("div",{className:"login-reminder-overlay-child",children:"You need to be logged in!"}),(0,p.jsx)("div",{className:"login-link",onMouseOver:t,onMouseLeave:a,onClick:a,children:(0,p.jsx)(o.rU,{to:"/login",onMouseOver:t,onMouseLeave:a,onClick:a,children:"Login"})}),(0,p.jsx)("div",{className:"button-wrapper",onClick:function(){s(!1)},onMouseOver:t,onMouseLeave:a,children:(0,p.jsx)("img",{src:x.Z,alt:"cancel button"})})]})},k=t(4921),N=function(e){var s=e.blogTitle,t=e.updateCurse,r=e.updateLeave,o=(0,n.useState)(!1),i=(0,a.Z)(o,2),l=i[0],d=i[1],u=(0,n.useState)(0),m=(0,a.Z)(u,2),A=m[0],g=m[1],v=(0,n.useState)(!1),h=(0,a.Z)(v,2),x=h[0],j=h[1],f=C.Z.get("loginStatus"),N=(0,c.I0)();return(0,n.useEffect)((function(){N((0,k.Hj)({blogTitle:"".concat(s)})).then((function(e){null===e||void 0===e||e.json()})).then((function(e){g(e)}))}),[l,s,A]),(0,p.jsxs)("div",{className:"like-container",children:[(0,p.jsxs)("button",{onClick:l?function(){f?N((0,k.CZ)({blogTitle:"".concat(s)})).then((function(){d((function(e){return!e}))})):j(!0)}:function(){f?N((0,k.Mx)({blogTitle:"".concat(s)})).then((function(){d((function(e){return!e}))})):j(!0)},onMouseOver:t,onMouseLeave:r,children:[" ",(0,p.jsx)("img",{className:l?"liked":"unliked",src:l?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAABH1JREFUeF7t3E3IVUUYwPH/Q0hERd8oBGpUYLUISUVto1G0SiMjxYIW1SZIKCS/FgVqmhotTFzUKo3ICql2qUkQCX1DkLgwjaSCvgQDa9PEeGb1du+ZjztzzpxzZuDlfeHOeWae333OPeeeGV6htKgCEjVaCUYBjVwEBbSARhaIHK5UaAGNLBA5XKnQAhpZIHK4UqFdBVVwNTALuBg4q38Efomcz4VwCmYAVwJXAX8DPwj8kWKsqTGTVKiCm4G7gLuBW4GZwGVjEvoWOAQcBo5KBeDcFFwCLDVj3WvGG3X8XxoW+M6MdUTgpPNAjh2jgirYCDwJXO84/tRu54CX9I+ABhjbVPUGrQOeBi4NHE8D7xHYGXj8/w6LAqrgQWCXOaVjzO034AWBl0cFU7AW2ED1MRKjfQ88I/DepMEmAlVwHXAAWDLpRMYc/xmwUuC0+Wy8EXgLuCPReB8CqwV+D40fDKpgAdU7qi8AKZs+9R8zF7M9wOUpBwPOAPcLfBkyThCoqj4ndXJ9bk8IvOaboDeoghXAO74DdbT/QwJv+8zdC1TBPOATc/r5jNPVvv8ACwW+cU3AGdTcLOt7xmtdg/ek38/6Iiigf1ubD+j7wH3WiP3s8K5Ut4bW5gRqTvXPrdH620GZKv3alqIrqL4/u8cWrOevfyCwzJajFVTBneZCZIs1hNfnC3xRl6gL6KvA40PQcshxt8CaYFDFhWXmX4FrHAYbQpefxPLgp7ZCy+k+skbm1t2X2kC3AJuGUHoeOa4XeHFcfxvofuBhj8GG0HWvVM8yRjYb6BHz5H0IUK45HhR4IBRULxfc4jrSQPodE1gcCqoX0aYPBMo1zRMCc0JBj1NzsOsMetbvU6m+7AR9hh5NuLzRVefaByW2i9KbwKquZp5o3q8IPBVaodvNUm2iuXUy7FqplrqDTnm9geCjTqadbtK3SbVZIgj0Iqol1SvSza9TkU8L3FA3Y5enTfuARzqVdrrJ7hR4dlJQvT9J7z0qDWpPdw1krVDdScExvfo3cNEDAittBq6gequNvicdavsXuEnglA3ACdRU6ZAflLwu8KgN0/mUN6Czga/MJlaX2H3p8yNwu8CfLgk5V6hBXQR8DExzCd6DPueBeXX3nVNz9AI1qKuBN3qA5ZLCcgG9wcO5eYMaVL1zWH8t7XNbJ7DDN8EgUIO6HtjmO2BH+m+QwIIJBu0xajCm11V+XGUp6FOlToQZBbRHlToxZjTQHqBGwYwK2mHUaJjRQTuIGhUzCWiHUKNjJgPtAGoSzKSgGaMmw0wOmiFqUsxGQDNCTY7ZGGgGqI1gNgraImpjmI2DtoDaKGYroA2iNo7ZGmgDqK1gtgqaELU1zNZBE6C2ipkFaETU1jGzATWozwHP678DWhaYWYEaVL3op5dUfFo2mNmBBqBmhZklqAdqdpjZgjqgZomZNWgNaraY2YOOQM0asxOgBnWz/j+gAlt9Lv9t9J1oK04bE859zAIa+R0qoAU0skDkcKVCC2hkgcjhSoUW0MgCkcOVCo0M+h8uZetVlYHnTgAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAABLNJREFUeF7tnI9RFTEQxjc0oFagVOCjAqECtAKhArGCt3SAFSgViBWIFYgVCBUIDRDne5ObeeJdsslt/hwkM8xjhlw2+eXbzSYXnqFeVAkY1dZ6Y9SBKougA+1AlQkoN9cV2oEqE1Buriu0A1UmoNxcV+gSgTLzamdn59l23+/v7++Y+Up5PJvmStvbHkMWhZ6enh5aa/eJ6C0RvQpAuyaiC2PM5Xq9/pYCuLQ9Xx/VgDLzcyJaE9EREeH3lHJrjDmz1n5i5ltfA7BnjPlgrT0pYU86mNlAlQb2sL+TYEvbk4Ic6s0CilhFRJ+JCJ85CmLsO2ZGWEBsRPj4mtne8ZzYngyUmREjMbhU95ZOAFz/2FXG5JWwh0m8lHZw9qLEzIiTGNxjLlDql9gBRis0EeYNEW3cdqvAfV/Gdlha31p7Z4zZpGXW2pUx5p+0TdgOlHohrLupFgXUxczvQrcDxDOkREMMfNgxFxORWkHxr2M6PlIX9jB42Bt1VxemYA8/kslEuDmIialioC4t+inIKzEwjnUXp3wWDnSbZ2578Ky9UBoXvco7QO8DKjonohOp8RHFYsGBqkN2hkexETiaaQ9x8jA0LjfhQScSKdS5ClzdV04hy6BFQQXXDjYJLdmDSoNbZSlQwESaNFXOpTMo4LmpElj8klZgn22BB14y80Go/0GgAnX+cHVCtqL/PgFVHebQMadA3+KIBcqbn0qAIsb4Ytru1CoeTXDkAZdZIAtA+SJxu1S7Luv4PccTJUBhYOrESN3VU2FoPRdw/Wtm3vXZ8gJ16kCqNFWyqlMLUkw7ApV6F6cQUKzaU6vtLwc8pr+LqBuIpd5sJgTUFz8/MjNyxkdXAmkbzmpxBjtaQkCxor2ZeDa44i2VdCCz8WY1Heh4ZoGce2ojMwvoH89ByFNV6I1buLrLS0NQd3kpKWG9nED7Kv//JMxa5X156BUz7wknfVHVmBmbmakXj7PyUDTq2ym9SD2LbJVw1p0SBu0OPqZeFzy1vbx3hQcvyeFI1dOmkkoWqDMoIAlQX5KL8YoOXkuCSbUViJ1oNph7B4E6t/dtQVEF55TDZYTU8VR9jplxz2A4dx3ri+ggXQo0pFJ0INtJem7SwrsGeu+UnEpDsXSRUIUwg7FzmHSRQh1QvOLFW7/QBYHFKFUIE+/9V9L0UAzUQV1Zay8F11qahyqB6a7z7Me8x4oC6qBKL4o1C1UC07lw3rtNQ5yI6FBzUHP3PVqhS4aaG6Zop+RLWUp0UCtlKtXXZIUuSamlYM5W6BKgloSpBrTV1b80TFWgrUGtAVMdaCtQa8HMArQ21JowswGtBbU2zKxAS0NtAWZ2oKWgtgKzCNDcUFuCWQxoLqitwSwKVBtqizCLA9WC2irMKkDnQm0ZZjWgqVBbh1kVaCxUd7Il+R/9qm8JZp+HDkd4qZ8RqpOYqAqzukIHQkpQq8NsBmik+48ptQmYTQGdAbUZmM0BTYDaFMwmgUZAbQ5ms0AFUJuE2TRQB3Xsxl+zMJsH6qDiburw9Rz4CqHg935IEtZcdaon9rkGVqvdDlSZfAfagSoTUG6uK7QDVSag3FxXaAeqTEC5ua7QDlSZgHJzfwFfCbFzVDyPhwAAAABJRU5ErkJggg==",alt:"heart shape"})]}),(0,p.jsx)("p",{children:A}),x&&(0,p.jsx)(w,{reminder:x,setReminder:j,updateCurse:t,updateLeave:r})]})},Z=(t(8395),t(4165)),b=t(5861),B=t(1243),U=t(8174),y=t(2439),S="custom-id-yes",I=function(e,s){return function(){var t=(0,b.Z)((0,Z.Z)().mark((function t(a){var n,r;return(0,Z.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y.oO}),t.prev=1,t.next=4,B.Z.get("/comments/api/".concat(e,"/").concat(s),{withCredentials:"include"});case 4:n=t.sent,r=n.data,a({type:y.LK,payload:r}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:y.II,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message}),U.Am.error(t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,{toastId:S});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},D=function(e){var s=e.title,t=e.pag,r=(0,c.v9)((function(e){return null===e||void 0===e?void 0:e.fetchComments})),o=r.comments,i=r.loading,l=r.error,d=(0,c.I0)(),u=(0,n.useState)(),m=(0,a.Z)(u,2),A=m[0],g=m[1],v=(0,n.useState)(!1),h=(0,a.Z)(v,2),x=h[0],j=h[1],f=(0,n.useState)(!1),k=(0,a.Z)(f,2),N=k[0],D=k[1],E=new FormData;E.append("title",s),E.append("comment",A);var L=C.Z.get("loginStatus"),M=(0,n.useRef)();return(0,p.jsxs)("div",{className:"comments-wrapper",children:[i?(0,p.jsx)("div",{className:"header",children:"Loading..."}):(0,p.jsx)("div",{className:"header",children:"Comments"}),l&&(0,p.jsx)("div",{className:"err-msg",children:l}),(0,p.jsxs)("div",{className:"comment-form-container",children:[(0,p.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),M.current.reset(),j(!0),L?d(function(e){var s=e.title,t=e.comment;return function(){var e=(0,b.Z)((0,Z.Z)().mark((function e(a){var n,r;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:y.qf}),e.prev=1,e.next=4,B.Z.post("/comments/api/post/",{title:"".concat(s),comment:"".concat(t)},{withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:n=e.sent,r=n.data,a({type:y.MX,payload:r}),console.log("success!"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),a({type:y.FU,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),U.Am.error(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,{toastId:S});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(s){return e.apply(this,arguments)}}()}({title:"".concat(s),comment:"".concat(A)})).then((function(){j(!1),d(I(s,t))})).catch((function(){j(!1)})):D(!0)},ref:M,children:[(0,p.jsx)("textarea",{type:"text",name:"",id:"",placeholder:"Leave a comment...",onChange:function(e){g(e.target.value)}}),x?(0,p.jsx)("button",{disabled:!0,id:"disabled",children:"sending"}):(0,p.jsx)("button",{children:"send"})]}),N&&(0,p.jsx)(w,{reminder:N,setReminder:D})]}),o&&(0,p.jsxs)("div",{className:"comment-wrapper",children:[(0,p.jsxs)("p",{children:["(",null===o||void 0===o?void 0:o.length,") comments"]}),null===o||void 0===o?void 0:o.map((function(e){return(0,p.jsxs)("div",{className:"comment-stn",children:[(0,p.jsx)("h3",{children:null===e||void 0===e?void 0:e.username}),(0,p.jsx)("p",{children:null===e||void 0===e?void 0:e.body})]},null===e||void 0===e?void 0:e._id)}))]})]})},E=t(6528),L=t(9038),M=t(5620),Q=function(e){var s,t,i,l,d,u,w,Z,b,B=e.updateCurse,U=e.updateLeave,y=(0,n.useRef)(),S=(0,n.useRef)(),Q=(0,r.UO)().id,V=(0,r.s0)(),O=(0,c.I0)();(0,n.useEffect)((function(){O((0,k.VP)(Q))}),[O,Q]);var R=(0,c.v9)((function(e){return null===e||void 0===e?void 0:e.blogDetails})),X=R.blogDetails,T=R.loading,q=R.error,F=(0,n.useState)(!1),J=(0,a.Z)(F,2),z=J[0],W=J[1],H=(0,n.useState)(0),K=(0,a.Z)(H,2),Y=K[0],G=(K[1],(0,n.useState)(!1)),P=(0,a.Z)(G,2),_=P[0],$=P[1],ee=(0,n.useState)(!1),se=(0,a.Z)(ee,2),te=se[0],ae=se[1],ne=C.Z.get("username"),re=function(){var e;ae(!te),O(I(null===(e=X[0])||void 0===e?void 0:e.title,Y))};return(0,n.useEffect)((function(){window.scrollTo(0,0),S.current=f.p8.timeline({paused:!0}),S.current.fromTo(y.current,{x:"100%",duration:0},{x:"0%",duration:.5,ease:"power3.inOut"}),"rashadx"!==ne&&"omotayo"!==ne||$(!0)}),[X,ne]),(0,n.useEffect)((function(){te?S.current.play():S.current.reverse()}),[te]),(0,p.jsxs)("div",{className:"blog-details-container",children:[(0,p.jsx)(A.Z,{updateCurse:B,updateLeave:U}),(0,p.jsx)(E.Z,{}),(0,p.jsxs)("div",{className:"blog-details-container-2",children:[(0,p.jsxs)("div",{className:"blog-details",children:[T?(0,p.jsx)("div",{className:"load-msg",children:"ZEE."}):q?(0,p.jsx)(L.Z,{}):(0,p.jsxs)("article",{children:[(0,p.jsxs)("div",{className:"blog-nav",children:[(0,p.jsxs)("div",{className:"blog-stuff",children:[(0,p.jsxs)("div",{className:"zee-img-wrapper",children:[(0,p.jsx)("div",{className:"zee-head-wrapper"}),(0,p.jsx)("div",{className:"name",children:"ZEE"})]}),(0,p.jsxs)("div",{className:"blog-stats",children:[(0,p.jsxs)("div",{className:"date",children:["Invalid Date"===new Date(null===(s=X[0])||void 0===s?void 0:s.date).toString()?null===(t=X[0])||void 0===t?void 0:t.date:(0,j.Z)(new Date(null===(i=X[0])||void 0===i?void 0:i.date))," ago"]}),(0,p.jsx)("span",{className:"dot",children:"."}),(0,p.jsxs)("div",{className:"read-time",children:[null===(l=X[0])||void 0===l?void 0:l.readTime," read"]})]})]}),(0,p.jsx)(m,{handleCopy:function(){W(!0)}})]}),(0,p.jsx)("h2",{children:null===(d=X[0])||void 0===d?void 0:d.title}),(0,p.jsx)("div",{className:"header-image-wrapper",children:(0,p.jsx)("img",{src:null===(u=X[0])||void 0===u?void 0:u.image,alt:"blog",className:"header-image"})}),(0,p.jsx)("div",{id:"blog-body",children:(0,p.jsx)(M.Z,{htmlContent:null===(w=X[0])||void 0===w?void 0:w.body})}),_&&(0,p.jsx)("button",{onClick:function(){O((0,k.X4)({id:"".concat(Q)})).then((function(){V("/blogs/0")}))},children:"delete blog"}),(0,p.jsxs)("div",{className:"like-comment-hover",children:[(0,p.jsx)(N,{blogTitle:null===(Z=X[0])||void 0===Z?void 0:Z.title,updateCurse:B,updateLeave:U}),(0,p.jsx)("div",{className:"comments-btn-wrapper",onClick:re,onMouseOver:B,onMouseLeave:U,children:(0,p.jsx)("img",{src:h,alt:"message button"})})]}),(0,p.jsxs)("div",{ref:y,className:te?"comments-wall played":"comments-wall reversed",children:[(0,p.jsx)(D,{title:null===(b=X[0])||void 0===b?void 0:b.title,pag:Y}),(0,p.jsx)("div",{className:"close-button-wrapper",onClick:re,onMouseOver:B,onMouseLeave:U,children:(0,p.jsx)("img",{src:x.Z,alt:"close button"})})]})]}),z&&(0,p.jsx)("div",{className:"copy-alert",children:"Copied to Clipboard!"})]}),(0,p.jsxs)("div",{className:"sticky-footer-container",children:[(0,p.jsx)("div",{className:"name",children:"ZEE."}),(0,p.jsx)("p",{children:"Join many other lifestyle enthusiasts who receive our content in their inbox."}),(0,p.jsx)("div",{className:"links-wrapper",children:(0,p.jsxs)("div",{className:"socials-wrapper",children:[(0,p.jsx)("a",{href:"https://instagram.com/existentialcrisisgirl_?r=nametag",target:"_blank",rel:"noopener noreferrer",className:"socials",onMouseOver:B,onMouseLeave:U,onClick:U,children:(0,p.jsx)("img",{src:g,alt:"instagram logo"})}),(0,p.jsx)("a",{href:"https://mobile.twitter.com/jupiter_knows",target:"_blank",rel:"noopener noreferrer",className:"socials",onMouseOver:B,onMouseLeave:U,onClick:U,children:(0,p.jsx)("img",{src:v,alt:"twitter logo"})})]})}),(0,p.jsx)("div",{className:"nav",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/",onMouseOver:B,onMouseLeave:U,onClick:U,children:"Home"})}),(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/blogs/0",onMouseOver:B,onMouseLeave:U,onClick:U,children:"Blog"})}),(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/about",onMouseOver:B,onMouseLeave:U,onClick:U,children:"About"})})]})})]})]})]})}},8395:function(){},477:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgBlVPRcYMwDJVz+S8jsEFhAzpBO0IzASMAExQmSLtBOkHZIO0E7QZkA/pe/HznyzmEvLt3MkJPlmXZmTDPcwXzDBa2jG/wwzlHa07iBqYFT+BhQZxpg5zxSNJRXMwera0A4jLGSlPR0YO/K8V7cFIS2n4D/yP4cxGYg18KmrXOFTeidB71k9qtNFMshjma70cndy1fCXEfb7ZNVLqXuNROTPquBPz3FAdvEgkqcAhiQuvBElecSnCy68jWJOCA1Ox0cGjNPoyXwake7Myf9wjhIF+t3Xc3K8B5/2BKkPYNbLQu9S/gIZTHQZrsTnD4qD0/Ig1Lc4e4kaYIj6mNSmUTl27ixXw/OhypdVFW3vGr+dFeAsf5APHIj39KfrP0AaXwLQAAAABJRU5ErkJggg=="},7127:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADXSURBVHgBnVOLEYIwDA2eA7CBjMAGOgJuwAa6AW4gTqAbeE6gG+AGsAE6QXyhxSteP5Z3965ck7480pQIYOaUAkDODmxZQdZS72/AXD4yHcg8IhXb0YP34axWHDdLi0jKbvRfd5bEITD+rlHIhcKsenAkNdq6DyvRWLI0imgNvsDfpucUxtt01PI8NKPGQq9bsKN4nCZCSZI8sdwixST3MREyAhlFuIGBzhphde3NH72pvSVYzVTFatBcuLgOyxM5gteAgMT2ISciVrMaPlOsBc9gwYGH/QHv1+H8wDOP7AAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=870.ccd04d79.chunk.js.map