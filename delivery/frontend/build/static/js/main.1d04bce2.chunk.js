(this.webpackJsonpclup=this.webpackJsonpclup||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),o=n(34),i=n.n(o),a=(n(44),n(45),n(5)),l=(n(46),n.p+"static/media/LoginPageClupLogo.13974f22.png"),r=n(14),d=n(2),u=n(8),j=n(18),h=n.n(j),p="http://localhost:8081/SSW-1.0-SNAPSHOT/api/SSW",b="http://localhost:8089/QSW-1.0-SNAPSHOT/api/QSW",m="http://localhost:8082/AMW-1.0-SNAPSHOT/api/AMW",O="login_access_token";n(64);var x=function(e){if(null!=e){var t=document.createElement("div");t.classList.add("errorBackground"),t.id="error";var n=document.createElement("div");n.classList.add("flexColumnCenter"),n.classList.add("error");var s=document.createElement("h3");s.innerHTML="ERROR!";var c=document.createElement("h3");c.innerHTML="STATUS CODE: "+e.status;var o=document.createElement("h3");o.innerHTML="ERROR MESSAGE: "+e.data;var i=document.createElement("button");i.innerHTML="Go to Login";i.addEventListener("click",(function(){window.location.href="/"}));var a=document.createElement("button");a.innerHTML="Close";a.addEventListener("click",(function(){document.getElementById("App").removeChild(document.getElementById("error"))})),n.appendChild(s),n.appendChild(c),n.appendChild(o),n.appendChild(i),n.appendChild(a),t.appendChild(n),document.getElementById("App").appendChild(t)}},f={accept:"application/json","Content-Type":"application/json"},g={accept:"application/json"},v="username",C=function(){return localStorage.getItem(O)},S=function(e){localStorage.setItem(O,e)},k=function(){return localStorage.getItem(v)},T=function(e,t){localStorage.setItem(v,e),localStorage.setItem("isManager",t)},N=function(e,t,n,s,c,o,i,a,l,r){console.log("############################################"),console.log("ASYNC HTTP REQUEST:");var u,j={headers:Object(d.a)(Object(d.a)({},s),f)};a&&(console.log("old session-token: "+C()+" ."),j.headers["session-token"]=C()),r&&(console.log("username: "+k()),j.headers.username=k()),u="AMW"===e?m:"QSW"===e?b:p,u+=t,console.log("POST"),console.log(u),console.log(n),console.log(j.headers),console.log("useOldSessionToken: "+a),console.log("setNewSessionToken: "+l),console.log("useUsername: "+r),console.log("--------------------------------------------"),console.log("HTTP RESPONSE:"),h.a.post(u,n,j).then((function(e){console.log("response data:"),console.log(e.data),console.log("response status:"),console.log(e.status),console.log("response headers"),console.log(e.headers),200===e.status?(l&&(console.log("new session-token: "+e.headers["session-token"]+" ."),S(e.headers["session-token"])),c(e)):x(e)})).catch((function(e){console.log(e),e.response?(console.log("error data:"),console.log(e.response.data),console.log("error status:"),console.log(e.response.status),console.log("error headers"),console.log(e.response.headers),null!==o&&500===e.response.status?o(e):x(e.response)):null!==i?i(e):x(e.response)}))},E=function(e,t,n,s,c,o,i,a,l){console.log("############################################"),console.log("ASYNC HTTP REQUEST:");var r,u={headers:Object(d.a)(Object(d.a)({},n),g)};i&&(u.headers["session-token"]=C()),l&&(u.headers.username=k()),r="AMW"===e?m:"QSW"===e?b:p,r+=t,console.log("GET"),console.log(r),console.log(u.headers),console.log("useOldSessionToken: "+i),console.log("setNewSessionToken: "+a),console.log("useUsername: "+l),console.log("--------------------------------------------"),console.log("HTTP RESPONSE:"),h.a.get(r,u).then((function(e){console.log("response data:"),console.log(e.data),console.log("response status:"),console.log(e.status),console.log("response headers"),console.log(e.headers),200===e.status?(a&&(console.log("new session-token: "+e.headers["session-token"]+" ."),S(e.headers["session-token"])),s(e)):x(e)})).catch((function(e){console.log(e),e.response?(console.log("error data:"),console.log(e.response.data),console.log("error status:"),console.log(e.response.status),console.log("error headers"),console.log(e.response.headers),null!==c&&500===e.response.status?c(e):x(e.response)):null!==o?o(e):x(e.response)}))},L=n(6),w=n(0),y=function(e){var t=Object(s.useState)({username:"",password:""}),n=Object(a.a)(t,2),c=n[0],o=n[1],i=Object(L.f)(),l=function(e){var t=e.target,n=t.id,s=t.value;o((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(r.a)({},n,s))}))},j=function(){if(0!==c.username.length&&0!==c.password.length){var e={username:c.username,password:c.password};N("AMW","/login",e,{},(function(e){T(e.data.username,e.data.isManager),console.log("username setted in local storage: "+e.data.username),e.data.isManager?p():h()}),null,null,!1,!0,!1)}},h=function(){i.push("/Home")},p=function(){i.push("/HomeManager")};return Object(w.jsx)("div",{className:"loginFormContainer",children:e.open?Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reportValidity()&&j()},autoComplete:"off",children:[Object(w.jsxs)("div",{className:"inputContainer",children:[Object(w.jsx)("h3",{children:"Login to your account"}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Username"}),Object(w.jsx)("input",{onChange:l,value:c.username,id:"username",type:"text",placeholder:"Username",name:"username",required:!0})]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Password"}),Object(w.jsx)("input",{onChange:l,id:"password",value:c.password,type:"password",placeholder:"Password",name:"password",required:!0})]}),Object(w.jsx)("button",{className:"activeButton",type:"submit",children:"Confirm"})]}),Object(w.jsx)("div",{className:"forgotPasswordContainer",children:Object(w.jsxs)("span",{children:["Forgot ",Object(w.jsx)(u.b,{to:"/",children:"password?"})]})})]}):Object(w.jsx)("form",{method:"post",autoComplete:"off",children:Object(w.jsxs)("div",{className:"inputContainer",children:[Object(w.jsx)("h3",{children:" Already have an account?"}),Object(w.jsx)("button",{className:"activeButton",onClick:e.renderLogin,children:"Login"})]})})})},I=function(e){var t=Object(s.useState)({nextBool:!1,username:"",password:"",repeatPassword:"",email:"",phonenumber:"",shopOwner:!1,credentialError:null}),n=Object(a.a)(t,2),c=n[0],o=n[1],i=Object(L.f)(),l=function(e){var t=e.target,n=t.id,s=t.value;o((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(r.a)({},n,s))}))},u=function(){var e={username:c.username,password:c.password,password2:c.repeatPassword,email:c.email,phoneNumber:c.phonenumber,isManager:c.shopOwner};N("AMW","/registration",e,{},(function(e){T(e.data.username,e.data.isManager),console.log("username setted in local storage: "+e.data.username),e.data.isManager?h():j()}),null,null,!1,!0,!1)},j=function(){i.push("/Home")},h=function(){i.push("/HomeManager")};return Object(w.jsx)("div",{className:"loginFormContainer",children:e.open?Object(w.jsx)("form",{onSubmit:function(e){e.preventDefault(),!0===c.nextBool&&document.getElementById("signupForm").reportValidity()&&(c.password===c.repeatPassword?u():alert("password do not match!"))},id:"signupForm",autoComplete:"off",children:c.nextBool?Object(w.jsxs)("div",{className:"inputContainer",children:[Object(w.jsx)("h3",{children:"Create a password"}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Password"}),Object(w.jsx)("input",{onChange:l,value:c.password,id:"password",type:"password",placeholder:"Password",name:"password",required:!0})]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Repeat password"}),Object(w.jsx)("input",{onChange:l,value:c.repeatPassword,id:"repeatPassword",type:"password",placeholder:"Repeat password",name:"repeatPassword",required:!0})]}),Object(w.jsxs)("div",{className:"flexRowCenter",children:[Object(w.jsx)("button",{className:"activeButton",type:"submit",onClick:function(){o((function(e){return Object(d.a)(Object(d.a)({},e),{},{nextBool:!1})}))},children:" Back "}),Object(w.jsx)("button",{className:"activeButton",children:"Confirm"})]})]}):Object(w.jsxs)("div",{className:"inputContainer",children:[Object(w.jsx)("h3",{children:"Create a new account"}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Username"}),Object(w.jsx)("input",{onChange:l,value:c.username,id:"username",type:"text",placeholder:"Username",name:"username",required:!0})]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Email"}),Object(w.jsx)("input",{onChange:l,value:c.email,id:"email",type:"email",placeholder:"email@example.com",name:"email",required:!0})]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Phone number"}),Object(w.jsx)("input",{onChange:l,value:c.phonenumber,id:"phonenumber",type:"number",placeholder:"+39 0123456789",name:"phoneNumber",required:!0})]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{className:"labelSignup",children:"Are you a shop owner?"}),Object(w.jsx)("input",{onChange:function(e){var t=e.target,n=t.id,s=t.checked;console.log(s),o((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(r.a)({},n,s))}))},value:c.shopOwner,id:"shopOwner",type:"checkbox",name:"shopOwner"})]}),Object(w.jsx)("button",{className:"activeButton",onClick:function(e){document.getElementById("signupForm").reportValidity()&&o((function(e){return Object(d.a)(Object(d.a)({},e),{},{nextBool:!0})}))},children:"Next"})]})}):Object(w.jsxs)("form",{id:"signupForm",autoComplete:"off",children:[Object(w.jsx)("h3",{children:" Don't have an account?"}),Object(w.jsx)("button",{className:"activeButton",onClick:e.renderSignup,children:"Signup"})]})})},M=function(){var e=Object(s.useState)("login"),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(w.jsxs)("div",{className:"appContainer",children:[Object(w.jsxs)("div",{className:"topContainer ".concat("login"===n?"topContainerOpen":"topContainerClosed"),children:[Object(w.jsx)("div",{className:"clupLogoContainer",children:Object(w.jsx)("img",{src:l,alt:""})}),Object(w.jsx)(y,{open:"login"===n,renderLogin:function(){c("login")}})]}),Object(w.jsx)("div",{className:"bottomContainer ".concat("login"===n?"bottomContainerClosed":"bottomContainerOpen"),children:Object(w.jsx)(I,{open:"login"!==n,renderSignup:function(){c("signup")}})})]})},D=function(){var e=Object(L.f)();return Object(w.jsx)("div",{children:Object(w.jsx)("h3",{onClick:function(){e.push("/Search")},children:" Where do you want to go? "})})},W=function(e){return Math.ceil(Date.parse(e)/1e3/60)},q=function(e){var t=e.toString(),n="";return t.contains("1")&&(n+="Monday; "),t.contains("2")&&(n+="Tuesday; "),t.contains("3")&&(n+="Wednesday; "),t.contains("4")&&(n+="Thursday; "),t.contains("5")&&(n+="Friday; "),t.contains("6")&&(n+="Saturday; "),t.contains("7")&&(n+="Sunday; "),t.contains("0")&&(n+="Every Day of the Week;"),n},P=function(e){var t=Object(L.f)();return Object(w.jsxs)("div",{className:"flexColumnCenter card",children:[Object(w.jsxs)("bold",{children:["TICKET (ID: ",e.ticket.id,")"]}),Object(w.jsxs)("div",{className:"clickable",onClick:function(){t.push("/Ticket/"+e.ticket.id)},children:[Object(w.jsxs)("div",{children:[" Status: ",e.ticket.status," "]}),Object(w.jsxs)("div",{children:[" Time To Reach The Shop: ",W(e.ticket.timeToReachTheShop)," minutes "]}),Object(w.jsxs)("div",{children:[" Declared duration of the Permanence: ",W(e.ticket.expectedDuration)," minutes "]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[e.ticket.scheduledEnteringTime?Object(w.jsxs)("div",{children:[" Scheduled Entering Time: ",e.ticket.scheduledEnteringTime," "]}):"",e.ticket.scheduledExitingTime?Object(w.jsxs)("div",{children:[" Scheduled Exiting Time: ",e.ticket.scheduledExitingTime," "]}):""]})]}),e.showShop?Object(w.jsxs)("div",{className:"flexColumnCenter clickable",onClick:function(){t.push("/Shop/"+e.ticket.shop.id)},children:[Object(w.jsxs)("div",{children:[" Shop Name ",e.ticket.shop.name," "]}),Object(w.jsxs)("div",{children:[" Shop Position ",e.ticket.shop.position," "]}),Object(w.jsxs)("div",{children:[" Shop Image ",e.ticket.shop.image," "]})]}):""]})},A=n(9),B=function(e){return e.isLoaded?Object(w.jsx)("div",{className:"flexColumnCenter",children:null!==e.tickets&&0!==e.tickets.length?e.tickets.map((function(e){return Object(w.jsx)(P,{ticket:e,showShop:!0},e.id)})):"You have no tickets."}):Object(w.jsxs)("div",{className:"flexColumnCenter",children:[" ",Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})]})},H=function(e){var t=Object(L.f)(),n=Object(s.useState)(!1),c=Object(a.a)(n,2),o=c[0],i=c[1],l=function(){i(!o)};return e.isLoaded?Object(w.jsx)("div",{className:"flexColumnCenter",children:o?Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:" Account info: "}),Object(w.jsxs)("div",{children:[" Username: ",e.account.username," "]}),Object(w.jsxs)("div",{children:[" Email: ",e.account.email," "]}),Object(w.jsxs)("div",{children:[" Phone Number: ",e.account.phoneNumber," "]}),Object(w.jsxs)("div",{children:[" isManager: ",e.account.isManager?"true":"false"," "]}),Object(w.jsx)("button",{onClick:function(){E("AMW","/logout",{},(function(e){localStorage.removeItem(O),t.push("/")}),null,null,!1,!1,!0)},children:" Logout "}),Object(w.jsx)("button",{onClick:l,children:" close "})]}):Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:l,children:" Account "})})}):Object(w.jsxs)("div",{className:"flexColumnCenter",children:[" ",Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})]})},R=function(){var e=Object(s.useState)({isLoadedTickets:!1,isLoadedAccount:!1,tickets:null,account:null}),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){E("SSW","/tickets",{},(function(e){c((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedTickets:!0,tickets:e.data})}))}),null,null,!0,!1,!0)}),[]),Object(s.useEffect)((function(){E("AMW","/userinfo",{},(function(e){c((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedAccount:!0,account:e.data})}))}),null,null,!0,!1,!0)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(H,{isLoaded:n.isLoadedAccount,account:n.account}),Object(w.jsx)(D,{}),Object(w.jsx)(B,{isLoaded:n.isLoadedTickets,tickets:n.tickets})]})},Q=function(){var e=Object(L.f)();return Object(w.jsx)("button",{onClick:function(){e.goBack()},children:" Go back "})},F=function(){var e=Object(L.f)();return Object(w.jsx)("button",{onClick:function(){localStorage.getItem("isManager")?e.push("/HomeManager"):e.push("/Home")},children:" Home "})},U=function(e){return Object(w.jsxs)("div",{className:"flexRowCenter",children:[e.goBack?Object(w.jsx)(Q,{}):"",e.goHome?Object(w.jsx)(F,{}):""]})},G=function(){var e=Object(L.f)();return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(U,{goBack:!0,goHome:!1}),Object(w.jsx)("div",{className:"flexRowCenter",children:Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("function not availble")},children:[Object(w.jsx)("input",{id:"searchInput",name:"searchInput",type:"text",placeholder:"search a shop"}),Object(w.jsx)("button",{type:"submit",children:" search "})]})}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:function(){e.push("/Shops")},children:" ALL SHOPS "})})]})},V=function(e){var t=Object(L.f)();return Object(w.jsxs)("div",{className:"flexColumnCenter card clickable",onClick:function(){t.push("/Shop/"+e.shop.id)},children:[Object(w.jsxs)("div",{children:[" ",e.shop.name," "]}),Object(w.jsxs)("div",{children:[" ",e.shop.image," "]}),Object(w.jsxs)("div",{children:[" ",e.shop.description," "]}),Object(w.jsxs)("div",{children:[" ",e.shop.position," "]})]})},J=function(e){return e.isLoaded?Object(w.jsx)("div",{className:"flexColumnCenter",children:null!==e.shops&&0!==e.shops.length?e.shops.map((function(e){return Object(w.jsx)(V,{shop:e},e.id)})):"There are no shops."}):Object(w.jsxs)("div",{className:"flexColumnCenter",children:[" ",Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})]})},K=function(){var e=Object(s.useState)({isLoadedShops:!1,shops:null}),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){E("SSW","/AllShops",{},(function(e){c((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedShops:!0,shops:e.data})}))}),null,null,!0,!1,!0)}),[]),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(U,{goBack:!0,goHome:!0}),Object(w.jsx)(D,{}),Object(w.jsx)(J,{isLoaded:n.isLoadedShops,shops:n.shops})]})},X=function(e){var t=Object(L.f)();return Object(w.jsxs)("button",{onClick:function(){t.push(e.to)},children:[" ",e.content," "]})},Y=function(e){var t=Object(s.useState)({isLoadedShop:!1,shop:null,isLoadedQueueMaxDuration:!1,queueMaxDuration:null,shopId:e.match.params.id}),n=Object(a.a)(t,2),c=n[0],o=n[1];return Object(s.useEffect)((function(){E("SSW","/shopDetail/"+c.shopId,{},(function(e){o((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedShop:!0,shop:e.data.shop})}))}),null,null,!0,!1,!0)}),[c.shopId]),Object(s.useEffect)((function(){E("QSW","/queueInfo/"+c.shopId,{},(function(e){o((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedQueueMaxDuration:!0,queueMaxDuration:e.data})}))}),null,null,!0,!1,!0)}),[c.shopId]),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(U,{goBack:!0,goHome:!0}),c.isLoadedShop?Object(w.jsxs)("div",{className:"flexColumnCenter card",children:[Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsxs)("div",{children:[" ",c.shop.name," "]}),Object(w.jsxs)("div",{children:[" ",c.shop.image," "]}),Object(w.jsxs)("div",{children:[" ",c.shop.description," "]}),Object(w.jsxs)("div",{children:[" ",c.shop.position," "]})]}),Object(w.jsx)("div",{className:"flexColumnCenter",children:c.isLoadedQueueMaxDuration?Object(w.jsxs)("div",{children:[" Expected Queue duration: ",c.queueMaxDuration]}):Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})}),c.shop.shifts?c.shop.shifts.map((function(e){return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsxs)("div",{children:[" Day: ",q(e.day)]}),Object(w.jsxs)("div",{children:[e.openingTime," - ",e.closingTime]})]})})):"",Object(w.jsx)(X,{to:"/Lineup/"+c.shopId,content:"Enqueue"})]}):Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})]})},_=function(e){var t=Object(s.useState)({ttr:"",duration:"",shopId:parseInt(e.match.params.id)}),n=Object(a.a)(t,2),c=n[0],o=n[1],i=Object(L.f)(),l=function(e){var t=e.target,n=t.id,s=t.value;o((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(r.a)({},n,s))}))},u=function(){var e={timeToGetToTheShop:new Date(60*c.ttr*1e3),permanence:new Date(60*c.duration*1e3),shopid:c.shopId};N("QSW","/enqueue",e,{},(function(e){e.data.id?i.push("/Ticket/"+e.data.id):(e=Object(d.a)(Object(d.a)({},e),{},{data:"server was not ble to enqueue you (Lineup.js message, because response has no body)"}),x(e))}),null,null,!0,!1,!0)};return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(U,{goBack:!0,goHome:!0}),Object(w.jsxs)("form",{id:"lineUp",onSubmit:function(e){e.preventDefault(),document.getElementById("lineUp").reportValidity()&&u()},autoComplete:"off",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Time to reach the shop (in minutes)"}),Object(w.jsx)("input",{onChange:l,value:c.ttr,id:"ttr",type:"number",placeholder:"10",name:"ttr",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Duration of the permanence (in minutes)"}),Object(w.jsx)("input",{onChange:l,value:c.duration,id:"duration",type:"number",placeholder:"15",name:"duration",required:!0})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",children:"Lineup"})})]})]})},z=function(e){var t=Object(s.useState)({isLoadedTicket:!1,ticket:null,ticketId:e.match.params.id}),n=Object(a.a)(t,2),c=n[0],o=n[1],i=Object(L.f)();Object(s.useEffect)((function(){E("SSW","/ticketDetail/"+c.ticketId,{},(function(e){o((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedTicket:!0,ticket:e.data})}))}),null,null,!0,!1,!0)}),[c.ticketId]);return Object(w.jsxs)("div",{className:"flexColumnCenter card",children:[Object(w.jsx)(U,{goBack:!0,goHome:!0}),c.isLoadedTicket?Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[" Status: ",c.ticket.status," "]}),Object(w.jsxs)("div",{children:[" Time To Reach The Shop: ",W(c.ticket.timeToReachTheShop)," minutes "]}),Object(w.jsxs)("div",{children:[" Declared duration of the Permanence: ",W(c.ticket.expectedDuration)," minutes "]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[c.ticket.enterTime?Object(w.jsxs)("div",{children:[" Entering Time: ",c.ticket.enteringTime," "]}):"",c.ticket.exitTime?Object(w.jsxs)("div",{children:[" Exit Time ",c.ticket.exitTime," "]}):"",c.ticket.scheduledEnteringTime?Object(w.jsxs)("div",{children:[" Scheduled Entering Time: ",c.ticket.scheduledEnteringTime," "]}):"",c.ticket.scheduledExitingTime?Object(w.jsxs)("div",{children:[" Scheduled Exiting Time: ",c.ticket.scheduledExitingTime," "]}):""]})]}),Object(w.jsxs)("div",{className:"flexColumnCenter clickable",onClick:function(){i.push("/Shop/"+c.ticket.shop.id)},children:[Object(w.jsxs)("div",{children:[" Shop Name ",c.ticket.shop.name," "]}),Object(w.jsxs)("div",{children:[" Shop Position ",c.ticket.shop.position," "]}),Object(w.jsxs)("div",{children:[" Shop Image ",c.ticket.shop.image," "]})]}),Object(w.jsx)("button",{onClick:function(){E("QSW","/dequeue/"+c.ticketId,{},(function(){i.push("/Home")}),null,null,!0,!1,!0)},children:" Dequeue "})]}):Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})]})},Z=function(e){var t=Object(L.f)();return Object(w.jsxs)("div",{className:"flexColumnCenter card clickable",onClick:function(){t.push("/ShopManager/"+e.shop.id)},children:[Object(w.jsxs)("div",{children:[" ",e.shop.name," "]}),Object(w.jsxs)("div",{children:[" ",e.shop.image," "]}),Object(w.jsxs)("div",{children:[" ",e.shop.description," "]}),Object(w.jsxs)("div",{children:[" ",e.shop.position," "]})]})},$=function(e){return e.isLoaded?Object(w.jsx)("div",{className:"flexColumnCenter",children:null!==e.shops&&0!==e.shops.length?e.shops.map((function(e){return Object(w.jsx)(Z,{shop:e},e.id)})):"There are no shops."}):Object(w.jsxs)("div",{className:"flexColumnCenter",children:[" ",Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})]})},ee=function(){var e=Object(s.useState)({isLoadedShops:!1,isLoadedAccount:!1,account:null,shops:null}),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){E("SSW","/shops",{},(function(e){c((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedShops:!0,shops:e.data})}))}),null,null,!0,!1,!0)}),[]),Object(s.useEffect)((function(){E("AMW","/userinfo",{},(function(e){c((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedAccount:!0,account:e.data})}))}),null,null,!0,!1,!0)}),[]),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(H,{isLoaded:n.isLoadedAccount,account:n.account}),Object(w.jsx)($,{isLoaded:n.isLoadedShops,shops:n.shops}),Object(w.jsx)(X,{to:"/NewShop",content:"New shop"})]})},te=function(){var e=Object(s.useState)({name:"",description:"",position:"",image:"",shopCapacity:0,timeslotMinutesDuration:0,maxEnteringClientInATimeslot:0,shiftsProto:[],quantityOfSshifts:1}),t=Object(a.a)(e,2),n=t[0],c=t[1],o=L.f,i=function(e){var t=e.target,n=t.id,s=t.value;c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(r.a)({},n,s))}))},l=function(){var e=new FormData(document.getElementById("newShop"));console.log(e),h()({method:"post",url:p+"/newshop",data:e}).then((function(e){console.log("response data:"),console.log(e.data),console.log("response status:"),console.log(e.status),console.log("response headers"),console.log(e.headers),200===e.status?function(e){e.id?o.push("/ShopManager/"+e.id):(e=Object(d.a)(Object(d.a)({},e),{},{data:"server was not able to register a new shop"}),x(e))}(e):x(e)})).catch((function(e){console.log(e),e.response?(console.log("error data:"),console.log(e.response.data),console.log("error status:"),console.log(e.response.status),console.log("error headers"),console.log(e.response.headers),x(e.response)):x(e.response)}))};return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(U,{goBack:!0,goHome:!0}),Object(w.jsxs)("form",{id:"newShop",onSubmit:function(e){e.preventDefault(),document.getElementById("newShop").reportValidity()&&l()},autoComplete:"off",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Shop name:"}),Object(w.jsx)("input",{onChange:i,value:n.name,id:"name",type:"text",placeholder:"shop name",name:"name",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Description:"}),Object(w.jsx)("input",{onChange:i,value:n.description,id:"description",type:"text",placeholder:"This shop is...",name:"description",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Position:"}),Object(w.jsx)("input",{onChange:i,value:n.position,id:"position",type:"text",placeholder:"ShopStreet, 5, ShopCity",name:"position",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Shop capacity:"}),Object(w.jsx)("input",{onChange:i,value:n.shopCapacity,id:"shopCapacity",type:"number",placeholder:"max number of clients",name:"shopCapacity",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Duration of a time slot (in minutes):"}),Object(w.jsx)("input",{onChange:i,value:n.timeslotMinutesDuration,id:"timeslotMinutesDuration",type:"number",placeholder:"3",name:"timeslotMinutesDuration",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Shop image:"}),Object(w.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];console.log("FILEEE"),console.log(t),c((function(e){return Object(d.a)(Object(d.a)({},e),{},{image:t})}))},id:"image",name:"image",required:!0})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",children:"Create Shop"})})]})]})},ne=function(e){console.log("queue:"),console.log(e.tickets);var t=function(){},n=function(){};return Object(w.jsx)("div",{className:"flexColumnCenter",children:e.tickets.map((function(e){return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(P,{ticket:e,showShop:!1},e.id),Object(w.jsxs)("div",{className:"flexRowCenter",children:[Object(w.jsx)("button",{onClick:t,children:"Enter"}),Object(w.jsx)("button",{onClick:n,children:"Exit"})]})]},e.id)}))})},se=function(e){var t=Object(s.useState)({isLoadedShop:!1,shop:null,isLoadedQueueMaxDuration:!1,queueMaxDuration:null,shopId:e.match.params.id,queueTrigger:!1,tickets:null}),n=Object(a.a)(t,2),c=n[0],o=n[1];Object(s.useEffect)((function(){E("SSW","/shopDetail/"+c.shopId,{},(function(e){o((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedShop:!0,shop:e.data.shop,tickets:e.data.tickets})}))}),null,null,!0,!1,!0)}),[c.shopId]),Object(s.useEffect)((function(){E("QSW","/queueInfo/"+c.shopId,{},(function(e){o((function(t){return Object(d.a)(Object(d.a)({},t),{},{isLoadedQueueMaxDuration:!0,queueMaxDuration:e.data})}))}),null,null,!0,!1,!0)}),[c.shopId]);return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)(U,{goBack:!0,goHome:!0}),c.isLoadedShop?Object(w.jsxs)("div",{className:"flexColumnCenter card",children:[Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsxs)("div",{children:[" ",c.shop.name," "]}),Object(w.jsxs)("div",{children:[" ",c.shop.image," "]}),Object(w.jsxs)("div",{children:[" ",c.shop.description," "]}),Object(w.jsxs)("div",{children:[" ",c.shop.position," "]})]}),Object(w.jsx)("div",{className:"flexColumnCenter",children:c.isLoadedQueueMaxDuration?Object(w.jsxs)("div",{children:[" Expected Queue duration: ",c.queueMaxDuration]}):Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}})}),c.shop.shifts?c.shop.shifts.map((function(e){return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsxs)("div",{children:[" Day: ",q(e.day)]}),Object(w.jsxs)("div",{children:[e.openingTime," - ",e.closingTime]})]})})):""]}):Object(w.jsx)(A.WaveLoading,{style:{position:"relative"}}),c.isLoadedShop?Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsxs)("button",{onClick:function(){o((function(e){return Object(d.a)(Object(d.a)({},e),{},{queueTrigger:!e.queueTrigger})}))},children:[c.queueTrigger?"Hide":"Show"," tickets"]}),c.queueTrigger?Object(w.jsx)(ne,{tickets:c.tickets}):""]}):"",Object(w.jsx)(X,{to:"/TimeLine",content:"Go to Time Line visualizer"})]})},ce=function(e){var t=e.ticketTracker;return Object(w.jsxs)("div",{className:"flexColumnCenter cardWhite",children:[Object(w.jsxs)("div",{children:[" TICKET (ID: ",t.Ticket.id,") "]}),Object(w.jsxs)("div",{children:[" status ",t.Ticket.status]}),Object(w.jsxs)("div",{children:[" prev: ",t.previousMatchingTicket,", follow: ",t.followingMatchingTicket," "]})]})},oe=function(e){var t=e.timeSlot;return Object(w.jsxs)("div",{className:"flexColumnCenter card",children:[Object(w.jsxs)("div",{className:"simpleTitle",children:[" TIME SLOT (ID: ",t.id,") "]}),Object(w.jsxs)("div",{children:[" from:  ",t.startingTime," ",Object(w.jsx)("br",{})," to: ",t.endingTime," "]}),Object(w.jsxs)("div",{className:"flexRowStart",children:[Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("div",{className:"simpleTitle",children:" EXPECTED ENTERING TICKETS "}),t.expectedEnteringTickets?t.expectedEnteringTickets.map((function(e){return Object(w.jsx)(ce,{ticketTracker:e})})):""]}),Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("div",{className:"simpleTitle",children:" EXPECTED EXITING TICKETS "}),t.expectedExitingTickets?t.expectedExitingTickets.map((function(e){return Object(w.jsx)(ce,{ticketTracker:e})})):""]})]})]})},ie=function(e){var t=Object(s.useState)(null),n=Object(a.a)(t,2),c=n[0],o=n[1];return Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsxs)("div",{className:"flexColumnCenter",children:[Object(w.jsx)("label",{children:"Insert JSON to parse:"}),Object(w.jsx)("input",{onChange:function(e){o(JSON.parse(e.target.value))},type:"text"})]}),null!=c?Object(w.jsx)("div",{children:c.map((function(e){return Object(w.jsx)(oe,{timeSlot:e},e.id)}))}):""]})};var ae=function(){return Object(w.jsx)(u.a,{children:Object(w.jsx)("div",{id:"App",className:"App",children:Object(w.jsxs)(L.c,{children:[Object(w.jsx)(L.a,{path:"/",exact:!0,component:M})," ",Object(w.jsx)(L.a,{path:"/Home",exact:!0,component:R})," ",Object(w.jsx)(L.a,{path:"/Search",exact:!0,component:G})," ",Object(w.jsx)(L.a,{path:"/Shops",exact:!0,component:K})," ",Object(w.jsx)(L.a,{path:"/Shop/:id",exact:!0,component:Y})," ",Object(w.jsx)(L.a,{path:"/Lineup/:id",exact:!0,component:_})," ",Object(w.jsx)(L.a,{path:"/Ticket/:id",exact:!0,component:z})," ",Object(w.jsx)(L.a,{path:"/HomeManager",exact:!0,component:ee})," ",Object(w.jsx)(L.a,{path:"/NewShop",exact:!0,component:te})," ",Object(w.jsx)(L.a,{path:"/ShopManager/:id",exact:!0,component:se})," ",Object(w.jsx)(L.a,{path:"/TimeLine",exact:!0,component:ie})]})})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),o(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(ae,{})}),document.getElementById("root")),le()},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},64:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.1d04bce2.chunk.js.map