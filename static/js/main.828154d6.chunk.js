(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(3),o=a.n(i),s=(a(10),{summer:{text:"Let's hit the beach!",iconName:"sun"},winter:{text:"Burr it is cold!",iconName:"snowflake"}}),l=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),c=s[n],i=c.text,o=c.iconName;return r.a.createElement("div",{className:"season-display ".concat(n)},r.a.createElement("i",{className:"icon-left massive ".concat(o," icon")}),r.a.createElement("h1",null,i),r.a.createElement("i",{className:"icon-right massive ".concat(o," icon")}))},u=function(e){return r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui big text loader"},e.message))};u.defaultProps={message:"Loading..."};var m=u;o.a.render(r.a.createElement(function(){var e,t=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),o=Object(n.a)(i,2),s=o[0],l=o[1];return Object(c.useEffect)(function(){window.navigator.geolocation.getCurrentPosition(function(e){return r(e.coords.latitude)},function(e){return l(e.message)})},[]),[a,s]}(),a=Object(n.a)(t,2),i=a[0],o=a[1];return e=o?r.a.createElement("div",null,"Error: ",o):i?r.a.createElement(l,{lat:i}):r.a.createElement(m,{message:"Please Accept location request"}),r.a.createElement("div",{className:"border red"},e)},null),document.querySelector("#root"))},4:function(e,t,a){e.exports=a(12)}},[[4,2,1]]]);
//# sourceMappingURL=main.828154d6.chunk.js.map