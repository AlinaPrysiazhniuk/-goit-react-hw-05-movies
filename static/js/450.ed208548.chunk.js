"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[450],{722:function(e,t,r){r.d(t,{CE:function(){return m},CN:function(){return p},Df:function(){return u},TP:function(){return f},gH:function(){return l}});var n=r(861),a=r(757),c=r.n(a),o=r(294),s="https://api.themoviedb.org/3",i="19d2d0f24e837c8f3ad6ea805c1086b1",u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return o.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i))},m=function(e){return o.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i))},l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},450:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(861),a=r(439),c=r(757),o=r.n(c),s=r(791),i=r(722),u="SearchBar_search_form__JD4pT",f="SearchBar_container_form__Jw+G9",p="SearchBar_input__bIy50",m="SearchBar_search_button__nzXi6",l="SearchBar_title__l+gon",_=r(184),h=function(e){var t=e.onSearch,r=(0,s.useState)(""),n=(0,a.Z)(r,2),c=n[0],o=n[1];return(0,_.jsxs)("div",{className:f,children:[(0,_.jsx)("p",{className:l,children:"Please, enter name of movie for search"}),(0,_.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return alert("Enter data for search");t(c),o("")},className:u,children:[(0,_.jsx)("input",{type:"text",name:"movie",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,className:p}),(0,_.jsx)("button",{type:"submit",className:m,children:"Search"})]})]})},v=r(87),d=r(689),x=r(556),g=r(94),k="Movie_section_movies__5mvkq",w="Movie_container_movie__F1GFJ",y="Movie_list__3jSH+",j="Movie_item__uYRzM",b="Movie_link__XtdTs",N="Movie_img__PWLne",S="Movie_text__65fbV",Z=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],u=(0,v.lr)(),f=(0,a.Z)(u,2),p=f[0],m=f[1],l=(0,d.TH)(),Z=p.get("query");(0,s.useEffect)((function(){if(Z){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.gH)(Z);case 3:0===(t=e.sent).length&&(g.Am.error('There are no movies on your request "'.concat(Z,'"')),c([])),c(t),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("...ooopppsssss");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]);return(0,_.jsxs)("section",{className:k,children:[(0,_.jsx)(h,{onSearch:function(e){m({query:"".concat(e)})}}),(0,_.jsx)("div",{className:w,children:r&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("ul",{className:y,children:r.map((function(e){var t=e.id,r=e.poster_path,n=e.title;return(0,_.jsx)("li",{className:j,children:(0,_.jsxs)(v.rU,{to:"/movies/".concat(t),state:{from:l},className:b,children:[(0,_.jsx)("img",{className:N,src:r?"https://image.tmdb.org/t/p/w200/".concat(r):x,alt:n}),(0,_.jsx)("p",{className:S,children:n})]})},t)}))})})})]})}},556:function(e,t,r){e.exports=r.p+"static/media/noImage.5882c20d3ddf67c36e30.jpeg"}}]);
//# sourceMappingURL=450.ed208548.chunk.js.map