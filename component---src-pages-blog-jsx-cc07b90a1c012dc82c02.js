(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{L12J:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("fcpr"),o=a.n(i),c=a("dmsj");t.a=function(e){var t=e.tabTitle,a=e.pageTitle,n=e.description,i=e.children;return l.a.createElement("div",{className:o.a.container},l.a.createElement(c.a,{title:t,description:n}),l.a.createElement("div",{className:o.a.nav},l.a.createElement("div",{className:o.a.nav__left},l.a.createElement(r.Link,{to:"/"},l.a.createElement("h3",null,"A Programmer's Journey"))),l.a.createElement("div",{className:o.a.nav__right},l.a.createElement("nav",null,l.a.createElement(r.Link,{to:"/about"},"About"),l.a.createElement(r.Link,{to:"/blog"},"Blog"),l.a.createElement(r.Link,{to:"/projects"},"Projects"),l.a.createElement(r.Link,{to:"/watchlist"},"Watch List")))),l.a.createElement("div",{className:o.a.title},l.a.createElement("h1",null,a)),i,l.a.createElement("div",{className:o.a.footer},l.a.createElement("footer",null,"Aadhish Sriram © 2020. This website is built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"),". The source can be found"," ",l.a.createElement("a",{href:"https://github.com/dfireBird/dfireBird.github.io"},"here"))))}},fcpr:function(e,t,a){e.exports={container:"layout-module--container--zLeA4",nav:"layout-module--nav--39tRJ",nav__left:"layout-module--nav__left--mYDjA",nav__right:"layout-module--nav__right--1NfxM"}},hKLK:function(e,t,a){e.exports={blogTitle:"blog-module--blog-title--19Yur",subTitle:"blog-module--sub-title--YGeba"}},"xGn/":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("hKLK"),o=a.n(i),c=a("L12J");t.default=function(e){var t=e.data;return l.a.createElement(c.a,{tabTitle:"Blog",pageTitle:"Blog Posts"},t.allMdx.edges.map((function(e){var t=e.node;return l.a.createElement("div",{key:t.id},l.a.createElement(r.Link,{to:t.fields.slug},l.a.createElement("h2",{className:o.a.blogTitle},t.frontmatter.title)),l.a.createElement("h3",{className:o.a.subTitle},t.frontmatter.date),l.a.createElement("p",{className:o.a.excerpt},t.excerpt))})))};var s="1425097550"}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-cc07b90a1c012dc82c02.js.map