(this["webpackJsonpless-than"]=this["webpackJsonpless-than"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(7),a=c.n(s),r=(c(13),c(0));var i=function(){return Object(r.jsxs)("header",{className:"Header",children:[Object(r.jsx)("h3",{children:"Less Than"}),Object(r.jsx)("h2",{children:"3"})]})},o=c(2),l=c.n(o),j=c(4),u=c(3),h=c(8);var d=function(e){var t,c=e.game,n=e.storeList;return Object(r.jsxs)("li",{id:c.gameID,className:"GameList__item",children:[Object(r.jsxs)("div",{className:"GameList__item--naming",children:[Object(r.jsx)("h3",{children:(t=c.title||c.external,t.length<=18?t:t.substring(0,13)+"...")}),Object(r.jsx)("a",{href:"https://www.cheapshark.com/redirect?dealID=".concat(c.dealID||c.cheapestDealID),children:Object(r.jsx)("img",{src:c.thumb,alt:c.title||c.external})})]}),Object(r.jsx)("div",{className:"GameList__item--anim",children:Object(r.jsx)("div",{className:"shape",children:Object(r.jsx)("img",{src:"https://www.cheapshark.com/".concat(function(e){var t,c=Object(h.a)(n);try{for(c.s();!(t=c.n()).done;){var s=t.value;if(e===s.storeID)return s.images.icon}}catch(a){c.e(a)}finally{c.f()}}(c.storeID)||"/img/stores/icons/26.png"),alt:c.title||c.external})})}),Object(r.jsxs)("div",{className:"GameList__item--info",children:[Object(r.jsx)("p",{className:"ex--price",children:c.normalPrice||"tot"}),Object(r.jsx)("p",{className:"actual--price",children:c.salePrice||c.cheapest}),Object(r.jsx)("a",{href:"https://www.cheapshark.com/redirect?dealID=".concat(c.dealID||c.cheapestDealID),children:"buy it! "})]})]})};c(16);var b=function(e){var t=e.gameList,c=e.storeList;return Object(r.jsx)("ul",{className:"GameList",children:t&&t.map((function(e,t){return Object(r.jsx)(d,{game:e,storeList:c},t)}))})};c(17);var m=function(e){var t=e.storeList,c=Object(n.useState)([]),s=Object(u.a)(c,2),a=s[0],i=s[1],o=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#searchInput"),e.next=3,fetch("https://www.cheapshark.com/api/1.0/games?title=".concat(t.value));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,i(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"Search",children:[Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(a),document.querySelector("#searchInput").value=""},children:[Object(r.jsx)("input",{type:"search",name:"",id:"searchInput",placeholder:"Title ..."}),Object(r.jsx)("button",{type:"submit",children:" Find it! "})]}),Object(r.jsx)(b,{gameList:a,storeList:t})]})};c(18);var p=function(){return Object(r.jsx)("div",{className:"Loader",children:Object(r.jsx)("div",{className:"Loader__anim",children:Object(r.jsx)("h2",{children:"LOADING..."})})})};var x=function(e){var t=e.pageNumber;return Object(r.jsxs)("div",{className:"Footer",children:[Object(r.jsxs)("p",{className:"Footer--text",children:["Less Than ",Object(r.jsx)("em",{children:"3"}),", by Casiimir. \xa9 2021"]}),Object(r.jsxs)("div",{className:"Footer--status",children:[Object(r.jsx)("p",{children:"Page:"}),Object(r.jsxs)("p",{children:[" ",t]})]})]})},O="https://www.cheapshark.com/api/1.0",f="deal+rating",v="onSale=1",w="lowerPrice=0",N="upperPrice=3",g="metacritic=60",y="&sortBy=deal+rating&onSale=1&lowerPrice=0&upperPrice=3&metacritic=60";var S=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(u.a)(a,2),o=i[0],h=i[1],d=Object(n.useState)(!1),S=Object(u.a)(d,2),L=S[0],k=S[1],I=Object(n.useState)(0),D=Object(u.a)(I,2),_=D[0],C=D[1],G=Object(n.useState)(!1),P=Object(u.a)(G,2),T=P[0],B=P[1];Object(n.useEffect)((function(){H(),q(),C(1)}),[]);var H=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O,f,c=v,w,N,g,n=y,e.next=3,fetch("".concat(t,"/deals?").concat(n,"&").concat(c,"&pageNumber=").concat(_));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,s(r.filter((function(e,t,c){return c.findIndex((function(t){return t.title===e.title}))===t})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/stores"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,h(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("main",{className:"Main",children:[Object(r.jsx)("button",{className:"searchExpanderBtn",onClick:function(){var e=document.querySelector(".searchExpanderBtn");"\ud83c\udfe0"===e.textContent?e.textContent="\ud83d\udd0d":e.textContent="\ud83c\udfe0",k(!L)},children:"\ud83d\udd0d"}),L?Object(r.jsx)(m,{storeList:o}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{gameList:c,storeList:o}),T?Object(r.jsx)(p,{}):Object(r.jsxs)("div",{className:"carosello",children:[Object(r.jsxs)("button",{className:"navButtonRight",onClick:function(){_<7&&(B(!0),H(),setTimeout((function(){window.scrollTo(0,0),C(_+1),B(!1)}),500))},children:[" ",">"," "]}),Object(r.jsxs)("button",{className:"navButtonLeft",onClick:function(){_>1&&(B(!0),H(),setTimeout((function(){C(_-1),B(!1)}),500))},children:[" ","<"," "]})]})]}),Object(r.jsx)(x,{pageNumber:_})]})};c(19);var L=function(){return Object(r.jsxs)("div",{className:"SplashScreen",children:[Object(r.jsxs)("div",{className:"SplashScreen--way",children:[Object(r.jsx)("p",{children:"Now is no time to think of what you do not have. Think of what you can do with what there is."}),Object(r.jsx)("em",{children:"Ernest Hemingway"})]}),Object(r.jsx)("h2",{className:"SplashScreen--title",children:"Hi Gamer"}),Object(r.jsxs)("div",{className:"SplashScreen--text",children:[Object(r.jsxs)("p",{children:["Here you can find ",Object(r.jsx)("strong",{children:"cheap game keys"}),", under 3$. Let me know if you appreciate it."]}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{children:"One last thing - Have fun with whatever make you Happy!"})]}),Object(r.jsx)("button",{onClick:function(){document.querySelector(".SplashScreen").style.opacity=0,document.querySelector(".SplashScreen").style.zIndex=0},children:"Load it..."})]})};c(20);var k=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(L,{}),Object(r.jsx)(i,{}),Object(r.jsx)(S,{})]})};a.a.render(Object(r.jsx)(k,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.20e23995.chunk.js.map