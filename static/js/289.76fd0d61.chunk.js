"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[289],{2839:function(e,n,t){t.d(n,{Vu:function(){return o},IT:function(){return p},A7:function(){return x},x1:function(){return l},_:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),s=t(4569),c=t.n(s);function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/trending/movie/day?api_key=1eb38d59a687bed126a4b0cccb43fe8f");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=1eb38d59a687bed126a4b0cccb43fe8f&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=1eb38d59a687bed126a4b0cccb43fe8f&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=1eb38d59a687bed126a4b0cccb43fe8f&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=1eb38d59a687bed126a4b0cccb43fe8f"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5289:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r,a,i,s,c,o,u=t(5861),p=t(885),d=t(7757),x=t.n(d),l=t(6871),h=t(2839),f=t(2791),v=t(577),b=t(168),m=t(6031),g=t(501),w=m.ZP.img(r||(r=(0,b.Z)(["\nheight: 350px;\n"]))),j=m.ZP.div(a||(a=(0,b.Z)(["\nmargin-right: 20px;\n"]))),y=m.ZP.div(i||(i=(0,b.Z)(["\ndisplay: flex;\np:not(:last-child) {\n    margin-right: 15px;\n}\np {\n    margin-top: 0px;\n}\n"]))),k=m.ZP.div(s||(s=(0,b.Z)(["\ndisplay: flex;\n-webkit-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);\n-moz-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);\nbox-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);\nmargin-top: 15px;\n"]))),Z=m.ZP.div(c||(c=(0,b.Z)(["\n-webkit-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);\n-moz-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);\nbox-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"]))),_=(0,m.ZP)(g.OL)(o||(o=(0,b.Z)(["\nmargin-right: 15px;\n"]))),P=t(6355),U=t(184),A=function(e){var n,t,r,a,i,s,c=e.item,o=c.id,u=(0,l.TH)();return(0,U.jsxs)("main",{children:[(0,U.jsxs)(g.rU,{to:null!==(n=null===u||void 0===u||null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/home",children:[(0,U.jsx)(P.kcB,{}),"Go back"]}),(0,U.jsxs)(k,{children:[(0,U.jsx)(j,{children:(0,U.jsx)(w,{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:"alt"})}),(0,U.jsxs)("div",{children:[(0,U.jsxs)("h2",{children:[c.title,"(",c.release_date.slice(0,4),")"]}),(0,U.jsxs)("p",{children:["User score: ",10*c.vote_average,"%"]}),(0,U.jsx)("h3",{children:"Overview"}),(0,U.jsx)("p",{children:c.overview}),(0,U.jsx)("h3",{children:"Genres"}),(0,U.jsx)(y,{children:c.genres.map((function(e){return(0,U.jsx)("p",{children:e.name},e.id)}))})]})]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)("h3",{children:"Additional information"}),(0,U.jsxs)("ul",{children:[(0,U.jsx)(_,{to:"/movies/".concat(o,"/cast"),state:{from:null!==(r=null===u||void 0===u||null===(a=u.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/"},children:"Cast"}),(0,U.jsx)(g.OL,{to:"/movies/".concat(o,"/reviews"),state:{from:null!==(i=null===u||void 0===u||null===(s=u.state)||void 0===s?void 0:s.from)&&void 0!==i?i:"/"},children:"Reviews"})]})]}),(0,U.jsx)(l.j3,{})]})};function O(){var e=(0,l.UO)().itemId,n=(0,f.useState)(null),t=(0,p.Z)(n,2),r=t[0],a=t[1];return(0,f.useEffect)((function(){function n(){return(n=(0,u.Z)(x().mark((function n(){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.A7)(e);case 3:t=n.sent,a(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),v.Am.error("Negative, try again!",{position:"top-center"});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,U.jsx)(U.Fragment,{children:r&&(0,U.jsx)(A,{item:r})})}}}]);
//# sourceMappingURL=289.76fd0d61.chunk.js.map