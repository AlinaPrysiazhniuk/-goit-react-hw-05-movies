"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{722:function(t,e,n){n.d(e,{CE:function(){return m},CN:function(){return f},Df:function(){return i},TP:function(){return p},gH:function(){return l}});var r=n(861),a=n(757),c=n.n(a),s=n(294),o="https://api.themoviedb.org/3",u="19d2d0f24e837c8f3ad6ea805c1086b1",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(u));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},936:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(861),a=n(439),c=n(757),s=n.n(c),o=n(722),u=n(791),i=n(87),p="Home_section_home__eJjbL",f="Home_container_home__QNq3E",m="Home_title__L087v",l="Home_list__aopnc",h="Home_item__hquEN",v="Home_link__2zIq5",_="Home_img__6O+7s",d="Home_text__YlQ2v",w=n(184),x=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Df)();case 3:e=t.sent,c(e),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error("woops, something went wromg... Please, try agin later.");case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,w.jsx)("section",{className:p,children:n&&(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("h2",{className:m,children:"Trending today"}),(0,w.jsx)("ul",{className:l,children:n.map((function(t){var e=t.id,n=t.poster_path,r=t.title;return(0,w.jsx)("li",{className:h,children:(0,w.jsxs)(i.rU,{to:"movies/".concat(e),className:v,children:[(0,w.jsx)("img",{className:_,src:n?"https://image.tmdb.org/t/p/w200/".concat(n):(0,w.jsx)("div",{children:"noPhoto"}),alt:r}),(0,w.jsx)("p",{className:d,children:r})]})},e)}))})]})})}}}]);
//# sourceMappingURL=936.416c5509.chunk.js.map