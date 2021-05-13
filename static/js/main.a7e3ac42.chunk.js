(this["webpackJsonpreacting-to-apis"]=this["webpackJsonpreacting-to-apis"]||[]).push([[0],{65:function(e,t,c){"use strict";c.r(t);var s,n,a,r=c(0),i=c(30),l=c.n(i),d=c(34),j=c(66),o=c(7),m=c(8),b=c.p+"static/media/Studio_Ghibli_logo.09c1a923.svg",h=c(1),x=m.b.button(s||(s=Object(o.a)(["\n    width: 320px;\n    height: 164px;\n    background-color:white;\n    background-image: url(",");\n    background-position: center center;\n    background-repeat: no-repeat;\n    padding:10px;\n"])),b),u=m.b.button(n||(n=Object(o.a)(["\n    background-color:inherit;\n    border: none;\n    display: block;\n    padding: .5rem 1rem;\n    color: #0d6efd;\n    text-decoration: none;\n"]))),O=function(e){var t,c="";switch(e.active){case"films":t="nav-link disabled";break;case"people":c="nav-link disabled"}return Object(h.jsxs)("nav",{className:"mb-5",children:[Object(h.jsx)("div",{className:"row justify-content-center mb-3",children:Object(h.jsx)(x,{className:"rounded-3 border border-secondary shadow",onClick:function(){return e.setKey("home")}})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("ul",{className:"nav justify-content-center",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u,{className:t,onClick:function(){return e.setKey("films")},children:"Films"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u,{className:c,onClick:function(){return e.setKey("people")},children:"People"})})]})})]})},p=function(){return Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"col-md-5 shadow bg-white border border-secondary rounded-3 p-3",children:[Object(h.jsx)("h2",{className:"text-center mb-3",children:"Studio Ghibli API Lab"}),Object(h.jsx)("p",{className:"text-justify",children:"This lab shows off my awesome React skillz. It utilizes conditional rendering, fetching data from a REST API utilizing an useEffect hook, managing multiple array maps utilizing an useState hook, and Bootstrape for that iconic style. Click a button to view the resources from Studio Ghibli and enjoy!"}),Object(h.jsx)("p",{className:"text-center text-muted mb-0",children:Object(h.jsxs)("small",{children:["If you like what you see, then hit me up",Object(h.jsx)("br",{}),"at ",Object(h.jsx)("a",{href:"mailto:agarwala@me.com",children:"agarwala@me.com"})," and let's talk!"]})})]})})},f=c(10),g=c(68),y=c(67),N=function(e){Object(r.useEffect)((function(){var t=document.createElement("script");return t.src=e,t.async=!0,document.body.appendChild(t),function(){document.body.removeChild(t)}}),[e])},v=function(){return N("https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Films"}),Object(h.jsx)(f.Get,{url:"https://ghibliapi.herokuapp.com/films",children:function(e,t,c,s,n){if(e)return Object(h.jsxs)("div",{children:["Something bad happened: ",e.message," ",Object(h.jsx)("button",{onClick:function(){return s({params:{reload:!0}})},children:"Retry"})]});if(c)return Object(h.jsx)("div",{children:"Loading..."});if(null!==t){return Object(h.jsxs)("div",{className:"row g-3","data-masonry":"{'percentPosition': true }",children:[t.data.map((function(e){var t,c="https://ghibliapi.herokuapp.com/films/".concat(e.id);return t=e.rt_score>79?Object(h.jsx)("span",{className:"text-success",children:e.rt_score}):Object(h.jsx)("span",{className:"text-danger",children:e.rt_score}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(g.a,{className:"shadow-sm rounded-3",children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(g.a.Title,{children:e.title}),Object(h.jsxs)(y.a,{variant:"flush",className:"mb-3",children:[Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Produced by"})," ",e.producer]}),Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Directed by"})," ",e.director]}),Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Released in"})," ",e.release_date]}),Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Rotten Tomato Score"})," ",t]})]}),Object(h.jsx)(g.a.Text,{children:e.description}),Object(h.jsx)(g.a.Text,{children:Object(h.jsx)("small",{children:Object(h.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:"API Resource Link"})})})]})})},e.id)})),Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){return s({params:{refresh:!0}})},children:"Refresh"})]})}return Object(h.jsx)("div",{children:"Welcome to our Films Page!"})}})]})},k=function(){return N("https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"People"}),Object(h.jsx)(f.Get,{url:"https://ghibliapi.herokuapp.com/people",children:function(e,t,c,s,n){if(e)return Object(h.jsxs)("div",{children:["Something bad happened: ",e.message," ",Object(h.jsx)("button",{onClick:function(){return s({params:{reload:!0}})},children:"Retry"})]});if(c)return Object(h.jsx)("div",{children:"Loading..."});if(null!==t){return Object(h.jsxs)("div",{className:"row g-3","data-masonry":'{"percentPosition": true }',children:[t.data.map((function(e){var t="https://ghibliapi.herokuapp.com/people/".concat(e.id);return Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)(g.a,{className:"shadow-sm rounded-3",children:Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(g.a.Title,{children:e.name}),Object(h.jsxs)(y.a,{variant:"flush",className:"mb-3",children:[Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Gender"})," ",e.gender]}),Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Age"})," ",e.age]}),Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Eye Color"})," ",e.eye_color]}),Object(h.jsxs)(y.a.Item,{className:"px-0",children:[Object(h.jsx)("small",{className:"text-muted",children:"Hair Color"})," ",e.hair_color]})]}),Object(h.jsx)(g.a.Text,{children:e.description}),Object(h.jsx)(g.a.Text,{children:Object(h.jsx)("small",{children:Object(h.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:"API Resource Link"})})})]})})},e.id)})),Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){return s({params:{refresh:!0}})},children:"Refresh"})]})}return Object(h.jsx)("div",{children:"Welcome to our People Page!"})}})]})},w=Object(m.a)(a||(a=Object(o.a)(["\n    }\n"]))),I=function(){var e=Object(r.useState)("home"),t=Object(d.a)(e,2),c=t[0],s=t[1];switch(c){case"home":return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)(O,{setKey:s,active:"home"}),Object(h.jsx)(p,{})]})]});case"films":return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)(O,{setKey:s,active:"films"}),Object(h.jsx)(v,{})]})]});case"people":return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)(O,{setKey:s,active:"people"}),Object(h.jsx)(k,{})]})]});default:return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)(O,{setKey:s,active:"home"}),Object(h.jsx)(p,{})]})]})}};c(64);l.a.render(Object(h.jsx)(I,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a7e3ac42.chunk.js.map