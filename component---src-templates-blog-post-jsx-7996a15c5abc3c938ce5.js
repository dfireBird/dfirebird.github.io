(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),a=n("Kuth"),o=n("2OiF"),c=n("y3w9"),i=n("0/R4"),u=n("eeVq"),l=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,s=u((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),p=!u((function(){f((function(){}))}));r(r.S+r.F*(s||p),"Reflect",{construct:function(e,t){o(e),c(t);var n=arguments.length<3?e:o(arguments[2]);if(p&&!s)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var u=n.prototype,m=a(i(u)?u:Object.prototype),y=Function.apply.call(e,m,t);return i(y)?y:m}})},L12J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),c=n("fcpr"),i=n.n(c),u=n("dmsj");t.a=function(e){var t=e.tabTitle,n=e.pageTitle,r=e.description,c=e.children;return a.a.createElement("div",{className:i.a.container},a.a.createElement(u.a,{title:t,description:r}),a.a.createElement("div",{className:i.a.nav},a.a.createElement("div",{className:i.a.nav__left},a.a.createElement(o.Link,{to:"/"},a.a.createElement("h3",null,"A Programmer's Journey"))),a.a.createElement("div",{className:i.a.nav__right},a.a.createElement("nav",null,a.a.createElement(o.Link,{to:"/about"},"About"),a.a.createElement(o.Link,{to:"/blog"},"Blog"),a.a.createElement(o.Link,{to:"/projects"},"Projects"),a.a.createElement(o.Link,{to:"/watchlist"},"Watch List")))),a.a.createElement("div",{className:i.a.title},a.a.createElement("h1",null,n)),c,a.a.createElement("div",{className:i.a.footer},a.a.createElement("footer",null,"Aadhish Sriram © 2020. This website is built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"),". The source can be found"," ",a.a.createElement("a",{href:"https://github.com/dfireBird/dfireBird.github.io"},"here"))))}},X8hv:function(e,t,n){function r(e,t,n){return(r=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var s=n("q1tI"),p=n("7ljp"),m=p.useMDXComponents,y=p.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),i=m(n),u=d(t),f=s.useMemo((function(){if(!a)return null;var e=l({React:s,mdx:y},u),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+a])).apply(void 0,[{}].concat(c(n)))}),[a,t]);return s.createElement(f,l({components:i},o))}},fcpr:function(e,t,n){e.exports={container:"layout-module--container--zLeA4",nav:"layout-module--nav--39tRJ",nav__left:"layout-module--nav__left--mYDjA",nav__right:"layout-module--nav__right--1NfxM"}},lRrx:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("A2+M"),c=n("L12J");t.default=function(e){var t=e.data.mdx;return a.a.createElement(c.a,{tabTitle:t.frontmatter.title,pageTitle:t.frontmatter.title},a.a.createElement(o.MDXRenderer,null,t.body))};var i="381472333"}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-7996a15c5abc3c938ce5.js.map