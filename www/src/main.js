/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./www/assets/css/base.css":
/*!*********************************!*\
  !*** ./www/assets/css/base.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/cookie.css":
/*!***********************************!*\
  !*** ./www/assets/css/cookie.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/fa.css":
/*!*******************************!*\
  !*** ./www/assets/css/fa.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/home.css":
/*!*********************************!*\
  !*** ./www/assets/css/home.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/langMenu.css":
/*!*************************************!*\
  !*** ./www/assets/css/langMenu.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/map.css":
/*!********************************!*\
  !*** ./www/assets/css/map.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/navbar.css":
/*!***********************************!*\
  !*** ./www/assets/css/navbar.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/simple-lightbox.css":
/*!********************************************!*\
  !*** ./www/assets/css/simple-lightbox.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/css/slides.css":
/*!***********************************!*\
  !*** ./www/assets/css/slides.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/unpkg/flickity.css":
/*!***************************************!*\
  !*** ./www/assets/unpkg/flickity.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/unpkg/fullscreen.css":
/*!*****************************************!*\
  !*** ./www/assets/unpkg/fullscreen.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./www/assets/js/jquery.iosslider.min.js":
/*!***********************************************!*\
  !*** ./www/assets/js/jquery.iosslider.min.js ***!
  \***********************************************/
/***/ (() => {

/*
 * iosSlider - http://iosscripts.com/iosslider/
 * 
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser 
 * content slider into your web presence. Designed for use as a content slider, carousel, 
 * scrolling website banner, or image gallery.
 * 
 * Copyright (c) 2013 Marc Whitbread
 * 
 * Version: v1.3.43 (06/17/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */
 
(function(b){var oa=0,X=0,ga=0,T=0,Da="ontouchstart"in window||0<navigator.msMaxTouchPoints,Ea="onorientationchange"in window,ca=!1,da=!1,Y=!1,pa=!1,ia=!1,ea="pointer",va="pointer",ja=[],N=[],wa=[],R=[],B=[],aa=[],y=[],n=[],t=[],qa=[],fa=[],f={showScrollbar:function(e,c){e.scrollbarHide&&b("."+c).css({opacity:e.scrollbarOpacity,filter:"alpha(opacity:"+100*e.scrollbarOpacity+")"})},hideScrollbar:function(b,c,a,v,g,d,n,t,y,B){if(b.scrollbar&&b.scrollbarHide)for(var w=a;w<a+25;w++)c[c.length]=f.hideScrollbarIntervalTimer(10* w,v[a],(a+24-w)/24,g,d,n,t,y,B,b)},hideScrollbarInterval:function(e,c,a,v,g,d,n,y,B){T=-1*e/t[y]*(g-d-n-v);f.setSliderOffset("."+a,T);b("."+a).css({opacity:B.scrollbarOpacity*c,filter:"alpha(opacity:"+B.scrollbarOpacity*c*100+")"})},slowScrollHorizontalInterval:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k,l){if(l.infiniteSlider){if(a<=-1*t[m]||a<=-1*qa[m]){var q=b(e).width();if(a<=-1*qa[m]){var s=-1*w[0];b(c).each(function(a){f.setSliderOffset(b(c)[a],s+D);a<x.length&&(x[a]=-1*s);s+=u[a]});a+=-1* x[0];n[m]=-1*x[0]+D;t[m]=n[m]+q-d;y[m]=0}for(;a<=-1*t[m];){var h=0,C=f.getSliderOffset(b(c[0]),"x");b(c).each(function(a){f.getSliderOffset(this,"x")<C&&(C=f.getSliderOffset(this,"x"),h=a)});A=n[m]+q;f.setSliderOffset(b(c)[h],A);n[m]=-1*x[1]+D;t[m]=n[m]+q-d;x.splice(0,1);x.splice(x.length,0,-1*A+D);y[m]++}}if(a>=-1*n[m]||0<=a){q=b(e).width();if(0<a)for(s=-1*w[0],b(c).each(function(a){f.setSliderOffset(b(c)[a],s+D);a<x.length&&(x[a]=-1*s);s+=u[a]}),a-=-1*x[0],n[m]=-1*x[0]+D,t[m]=n[m]+q-d,y[m]=r;0< -1*x[0]-q+D;){var z=0,L=f.getSliderOffset(b(c[0]),"x");b(c).each(function(a){f.getSliderOffset(this,"x")>L&&(L=f.getSliderOffset(this,"x"),z=a)});A=n[m]-u[z];f.setSliderOffset(b(c)[z],A);x.splice(0,0,-1*A+D);x.splice(x.length-1,1);n[m]=-1*x[0]+D;t[m]=n[m]+q-d;y[m]--;B[m]++}for(;a>-1*n[m];)z=0,L=f.getSliderOffset(b(c[0]),"x"),b(c).each(function(a){f.getSliderOffset(this,"x")>L&&(L=f.getSliderOffset(this,"x"),z=a)}),A=n[m]-u[z],f.setSliderOffset(b(c)[z],A),x.splice(0,0,-1*A+D),x.splice(x.length-1,1), n[m]=-1*x[0]+D,t[m]=n[m]+q-d,y[m]--}}w=!1;d=f.calcActiveOffset(l,a,x,d,y[m],r,K,m);A=(d+y[m]+r)%r;l.infiniteSlider?A!=aa[m]&&(w=!0):d!=B[m]&&(w=!0);if(w&&(r=new f.args("change",l,e,b(e).children(":eq("+A+")"),A,k),b(e).parent().data("args",r),""!=l.onSlideChange))l.onSlideChange(r);B[m]=d;aa[m]=A;a=Math.floor(a);if(m!=b(e).parent().data("args").data.sliderNumber)return!0;f.setSliderOffset(e,a);l.scrollbar&&(T=Math.floor((-1*a-n[m]+D)/(t[m]-n[m]+D)*(I-O-g)),e=g-J,a>=-1*n[m]+D?(e=g-J- -1*T,f.setSliderOffset(b("."+ v),0)):(a<=-1*t[m]+1&&(e=I-O-J-T),f.setSliderOffset(b("."+v),T)),b("."+v).css({width:e+"px"}))},slowScrollHorizontal:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k,l,q,s){var h=f.getSliderOffset(e,"x");d=[];var C=0,z=25/1024*O;frictionCoefficient=s.frictionCoefficient;elasticFrictionCoefficient=s.elasticFrictionCoefficient;snapFrictionCoefficient=s.snapFrictionCoefficient;g>s.snapVelocityThreshold&&s.snapToChildren&&!l?C=1:g<-1*s.snapVelocityThreshold&&s.snapToChildren&&!l&&(C=-1);g<-1*z?g=-1*z:g>z&& (g=z);b(e)[0]!==b(k)[0]&&(C*=-1,g*=-2);k=y[u];if(s.infiniteSlider)var L=n[u],p=t[u];l=[];for(var z=[],G=0;G<A.length;G++)l[G]=A[G],G<c.length&&(z[G]=f.getSliderOffset(b(c[G]),"x"));for(;1<g||-1>g;){g*=frictionCoefficient;h+=g;(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider&&(g*=elasticFrictionCoefficient,h+=g);if(s.infiniteSlider){if(h<=-1*p){for(var p=b(e).width(),N=0,P=z[0],G=0;G<z.length;G++)z[G]<P&&(P=z[G],N=G);G=L+p;z[N]=G;L=-1*l[1]+q;p=L+p-O;l.splice(0,1);l.splice(l.length,0,-1*G+q);k++}if(h>=-1* L){p=b(e).width();N=0;P=z[0];for(G=0;G<z.length;G++)z[G]>P&&(P=z[G],N=G);G=L-r[N];z[N]=G;l.splice(0,0,-1*G+q);l.splice(l.length-1,1);L=-1*l[0]+q;p=L+p-O;k--}}d[d.length]=h}z=!1;g=f.calcActiveOffset(s,h,l,O,k,D,B[u],u);L=(g+k+D)%D;s.snapToChildren&&(s.infiniteSlider?L!=aa[u]&&(z=!0):g!=B[u]&&(z=!0),0>C&&!z?(g++,g>=A.length&&!s.infiniteSlider&&(g=A.length-1)):0<C&&!z&&(g--,0>g&&!s.infiniteSlider&&(g=0)));if(s.snapToChildren||(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider){(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider? d.splice(0,d.length):(d.splice(.1*d.length,d.length),h=0<d.length?d[d.length-1]:h);for(;h<l[g]-.5||h>l[g]+.5;)h=(h-l[g])*snapFrictionCoefficient+l[g],d[d.length]=h;d[d.length]=l[g]}C=1;0!=d.length%2&&(C=0);for(h=0;h<a.length;h++)clearTimeout(a[h]);k=(g+k+D)%D;L=0;for(h=C;h<d.length;h+=2)if(h==C||1<Math.abs(d[h]-L)||h>=d.length-2)L=d[h],a[a.length]=f.slowScrollHorizontalIntervalTimer(10*h,e,c,d[h],v,I,O,J,K,w,g,x,A,m,D,r,u,q,k,s);L=(g+y[u]+D)%D;""!=s.onSlideComplete&&1<d.length&&(a[a.length]=f.onSlideCompleteTimer(10* (h+1),s,e,b(e).children(":eq("+L+")"),k,u));a[a.length]=f.updateBackfaceVisibilityTimer(10*(h+1),c,u,D,s);R[u]=a;f.hideScrollbar(s,a,h,d,v,I,O,K,w,u)},onSlideComplete:function(e,c,a,v,g){a=new f.args("complete",e,b(c),a,v,v);b(c).parent().data("args",a);if(""!=e.onSlideComplete)e.onSlideComplete(a)},getSliderOffset:function(e,c){var a=0;c="x"==c?4:5;if(!ca||da||Y)a=parseInt(b(e).css("left"),10);else{for(var a=["-webkit-transform","-moz-transform","transform"],f,g=0;g<a.length;g++)if(void 0!=b(e).css(a[g])&& 0<b(e).css(a[g]).length){f=b(e).css(a[g]).split(",");break}a=void 0==f[c]?0:parseInt(f[c],10)}return a},setSliderOffset:function(e,c){c=parseInt(c,10);!ca||da||Y?b(e).css({left:c+"px"}):b(e).css({msTransform:"matrix(1,0,0,1,"+c+",0)",webkitTransform:"matrix(1,0,0,1,"+c+",0)",MozTransform:"matrix(1,0,0,1,"+c+",0)",transform:"matrix(1,0,0,1,"+c+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(ea="-webkit-grab",va="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")? (ia=!0,ea="move",va="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?pa=da=!0:null!=navigator.userAgent.match("MSIE 8")?pa=Y=!0:null!=navigator.userAgent.match("MSIE 9")&&(pa=!0)},has3DTransform:function(){var e=!1,c=b("<div />").css({msTransform:"matrix(1,1,1,1,1,1)",webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});""==c.attr("style")?e=!1:ia&&21<=parseInt(navigator.userAgent.split("/")[3],10)?e=!1:void 0!=c.attr("style")&&(e=!0); return e},getSlideNumber:function(b,c,a){return(b-y[c]+a)%a},calcActiveOffset:function(b,c,a,f,g,d,n,t){g=!1;b=[];var y;c>a[0]&&(y=0);c<a[a.length-1]&&(y=d-1);for(d=0;d<a.length;d++)a[d]<=c&&a[d]>c-f&&(g||a[d]==c||(b[b.length]=a[d-1]),b[b.length]=a[d],g=!0);0==b.length&&(b[0]=a[a.length-1]);for(d=g=0;d<b.length;d++)n=Math.abs(c-b[d]),n<f&&(g=b[d],f=n);for(d=0;d<a.length;d++)g==a[d]&&(y=d);return y},changeSlide:function(e,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D,k){f.autoSlidePause(r);for(var l=0;l<v.length;l++)clearTimeout(v[l]); var q=Math.ceil(k.autoSlideTransTimer/10)+1,s=f.getSliderOffset(c,"x"),h=x[e],h=h-s,C=e-(B[r]+y[r]+m)%m;if(k.infiniteSlider){e=(e-y[r]+2*m)%m;l=!1;0==e&&2==m&&(e=m,x[e]=x[e-1]-b(a).eq(0).outerWidth(!0),l=!0);var h=x[e],h=h-s,z=[x[e]-b(c).width(),x[e]+b(c).width()];l&&x.splice(x.length-1,1);for(l=0;l<z.length;l++)Math.abs(z[l]-s)<Math.abs(h)&&(h=z[l]-s)}0>h&&-1==C?h+=b(c).width():0<h&&1==C&&(h-=b(c).width());C=[];f.showScrollbar(k,g);for(l=0;l<=q;l++)z=l,z/=q,z--,z=s+h*(Math.pow(z,5)+1),C[C.length]= z;q=(e+y[r]+m)%m;for(l=s=0;l<C.length;l++){if(0==l||1<Math.abs(C[l]-s)||l>=C.length-2)s=C[l],v[l]=f.slowScrollHorizontalIntervalTimer(10*(l+1),c,a,C[l],g,d,n,t,J,K,e,w,x,u,m,A,r,D,q,k);0==l&&""!=k.onSlideStart&&(h=(B[r]+y[r]+m)%m,k.onSlideStart(new f.args("start",k,c,b(c).children(":eq("+h+")"),h,e)))}s=!1;k.infiniteSlider?q!=aa[r]&&(s=!0):e!=B[r]&&(s=!0);s&&""!=k.onSlideComplete&&(v[v.length]=f.onSlideCompleteTimer(10*(l+1),k,c,b(c).children(":eq("+q+")"),q,r));R[r]=v;f.hideScrollbar(k,v,l,C,g,d, n,J,K,r);f.autoSlide(c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D,k)},changeOffset:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k){f.autoSlidePause(r);for(var l=0;l<v.length;l++)clearTimeout(v[l]);k.infiniteSlider||(e=e>-1*n[r]+D?-1*n[r]+D:e,e=e<-1*t[r]?-1*t[r]:e);var q=Math.ceil(k.autoSlideTransTimer/10)+1,s=f.getSliderOffset(c,"x"),l=(f.calcActiveOffset(k,e,x,I,y,m,B[r],r)+y[r]+m)%m,h=x.slice();if(k.snapToChildren&&!k.infiniteSlider)e=x[l];else if(k.infiniteSlider&&k.snapToChildren){for(;e>=h[0];)h.splice(0,0, h[m-1]+b(c).width()),h.splice(m,1);for(;e<=h[m-1];)h.splice(m,0,h[0]-b(c).width()),h.splice(0,1);l=f.calcActiveOffset(k,e,h,I,y,m,B[r],r);e=h[l]}var C=e-s;e=[];var z;f.showScrollbar(k,g);for(h=0;h<=q;h++)z=h,z/=q,z--,z=s+C*(Math.pow(z,5)+1),e[e.length]=z;q=(l+y[r]+m)%m;for(h=s=0;h<e.length;h++){if(0==h||1<Math.abs(e[h]-s)||h>=e.length-2)s=e[h],v[h]=f.slowScrollHorizontalIntervalTimer(10*(h+1),c,a,e[h],g,d,I,O,J,K,l,w,x,u,m,A,r,D,q,k);0==h&&""!=k.onSlideStart&&(q=(B[r]+y[r]+m)%m,k.onSlideStart(new f.args("start", k,c,b(c).children(":eq("+q+")"),q,l)))}s=!1;k.infiniteSlider?q!=aa[r]&&(s=!0):l!=B[r]&&(s=!0);s&&""!=k.onSlideComplete&&(v[v.length]=f.onSlideCompleteTimer(10*(h+1),k,c,b(c).children(":eq("+q+")"),q,r));R[r]=v;f.hideScrollbar(k,v,h,e,g,d,I,J,K,r);f.autoSlide(c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k)},autoSlide:function(b,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D){if(!N[A].autoSlide)return!1;f.autoSlidePause(A);ja[A]=setTimeout(function(){!D.infiniteSlider&&B[A]>w.length-1&&(B[A]-=u);f.changeSlide(B[A]+y[A]+1,b,c, a,v,g,d,n,t,J,K,w,x,A,r,u,m,D);f.autoSlide(b,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D)},D.autoSlideTimer+D.autoSlideTransTimer)},autoSlidePause:function(b){clearTimeout(ja[b])},isUnselectable:function(e,c){return""!=c.unselectableSelector&&1==b(e).closest(c.unselectableSelector).length?!0:!1},slowScrollHorizontalIntervalTimer:function(b,c,a,v,g,d,n,t,y,B,w,x,A,r,u,m,D,k,l,q){return setTimeout(function(){f.slowScrollHorizontalInterval(c,a,v,g,d,n,t,y,B,w,x,A,r,u,m,D,k,l,q)},b)},onSlideCompleteTimer:function(b, c,a,v,g,d){return setTimeout(function(){f.onSlideComplete(c,a,v,g,d)},b)},hideScrollbarIntervalTimer:function(b,c,a,v,g,d,n,t,y,B){return setTimeout(function(){f.hideScrollbarInterval(c,a,v,g,d,n,t,y,B)},b)},updateBackfaceVisibilityTimer:function(b,c,a,v,g){return setTimeout(function(){f.updateBackfaceVisibility(c,a,v,g)},b)},updateBackfaceVisibility:function(e,c,a,v){c=(B[c]+y[c]+a)%a;for(var g=[],d=0;d<2*v.hardwareAccelBuffer;d++){var n=f.mod(c+d-v.hardwareAccelBuffer,a);if("visible"==b(e).eq(n).css("-webkit-backface-visibility")){g[g.length]= n;var t=f.mod(n+2*v.hardwareAccelBuffer,a),J=f.mod(n-2*v.hardwareAccelBuffer,a);b(e).eq(n).css("-webkit-backface-visibility","hidden");-1==g.indexOf(J)&&b(e).eq(J).css("-webkit-backface-visibility","");-1==g.indexOf(t)&&b(e).eq(t).css("-webkit-backface-visibility","")}}},mod:function(b,c){var a=b%c;return 0>a?a+c:a},args:function(e,c,a,v,g,d){this.prevSlideNumber=void 0==b(a).parent().data("args")?void 0:b(a).parent().data("args").prevSlideNumber;this.prevSlideObject=void 0==b(a).parent().data("args")? void 0:b(a).parent().data("args").prevSlideObject;this.targetSlideNumber=d+1;this.targetSlideObject=b(a).children(":eq("+d+")");this.slideChanged=!1;"load"==e?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==e?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==e?(this.slideChanged=!0,this.prevSlideNumber=void 0==b(a).parent().data("args")?c.startAtSlide:b(a).parent().data("args").currentSlideNumber,this.prevSlideObject=b(a).children(":eq("+this.prevSlideNumber+")")):"complete"== e&&(this.slideChanged=b(a).parent().data("args").slideChanged);this.settings=c;this.data=b(a).parent().data("iosslider");this.sliderObject=a;this.sliderContainerObject=b(a).parent();this.currentSlideObject=v;this.currentSlideNumber=g+1;this.currentSliderOffset=-1*f.getSliderOffset(a,"x")},preventDrag:function(b){b.preventDefault()},preventClick:function(b){b.stopImmediatePropagation();return!1},enableClick:function(){return!0}};f.setBrowserInfo();var $={init:function(e,c){ca=f.has3DTransform();var a= b.extend(!0,{elasticPullResistance:.6,frictionCoefficient:.92,elasticFrictionCoefficient:.6,snapFrictionCoefficient:.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarPaging:!1,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:.9,desktopClickDrag:!1, keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,hardwareAccelBuffer:5,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"", onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},e);void 0==c&&(c=this);return b(c).each(function(c){function e(){f.autoSlidePause(d);xa=b(F).find("a");Ba=b(F).find("[onclick]");ra=b(F).find("*");b(l).css("width","");b(l).css("height","");b(F).css("width","");E=b(F).children().not("script").get();ha=[];M=[];a.responsiveSlides&&b(E).css("width","");t[d]=0;p=[];m=b(l).parent().width();q=b(l).outerWidth(!0);a.responsiveSlideContainer&&(q=b(l).outerWidth(!0)> m?m:b(l).width());b(l).css({position:a.stageCSS.position,top:a.stageCSS.top,left:a.stageCSS.left,overflow:a.stageCSS.overflow,zIndex:a.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:q});b(a.unselectableSelector).css({cursor:"default"});for(var c=0;c<E.length;c++){ha[c]=b(E[c]).width();M[c]=b(E[c]).outerWidth(!0);var v=M[c];a.responsiveSlides&&(M[c]>q?(v=q+-1*(M[c]-ha[c]),ha[c]=v,M[c]=q):v=ha[c],b(E[c]).css({width:v}));b(E[c]).css({overflow:"hidden", position:"absolute"});p[c]=-1*t[d];t[d]=t[d]+v+(M[c]-ha[c])}a.snapSlideCenter&&(k=.5*(q-M[0]),a.responsiveSlides&&M[0]>q&&(k=0));qa[d]=2*t[d];for(c=0;c<E.length;c++)f.setSliderOffset(b(E[c]),-1*p[c]+t[d]+k),p[c]-=t[d];if(!a.infiniteSlider&&!a.snapSlideCenter){for(c=0;c<p.length&&!(p[c]<=-1*(2*t[d]-q));c++)ja=c;p.splice(ja+1,p.length);p[p.length]=-1*(2*t[d]-q)}for(c=0;c<p.length;c++)G[c]=p[c];L&&(N[d].startAtSlide=N[d].startAtSlide>p.length?p.length:N[d].startAtSlide,a.infiniteSlider?(N[d].startAtSlide= (N[d].startAtSlide-1+H)%H,B[d]=N[d].startAtSlide):(N[d].startAtSlide=0>N[d].startAtSlide-1?p.length-1:N[d].startAtSlide,B[d]=N[d].startAtSlide-1),aa[d]=B[d]);n[d]=t[d]+k;b(F).css({position:"relative",cursor:ea,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:t[d]+"px"});U=t[d];t[d]=2*t[d]-q+2*k;(V=U+k<q||0==q?!0:!1)&&b(F).css({cursor:"default"});D=b(l).parent().outerHeight(!0);s=b(l).height();a.responsiveSlideContainer&&(s=s>D?D:s);b(l).css({height:s});f.setSliderOffset(F,p[B[d]]);if(a.infiniteSlider&& !V){c=f.getSliderOffset(b(F),"x");for(v=(y[d]+H)%H*-1;0>v;){var g=0,z=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")<z&&(z=f.getSliderOffset(this,"x"),g=a)});var J=n[d]+U;f.setSliderOffset(b(E)[g],J);n[d]=-1*p[1]+k;t[d]=n[d]+U-q;p.splice(0,1);p.splice(p.length,0,-1*J+k);v++}for(;0<-1*p[0]-U+k&&a.snapSlideCenter&&L;){var O=0,P=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")>P&&(P=f.getSliderOffset(this,"x"),O=a)});J=n[d]-M[O];f.setSliderOffset(b(E)[O], J);p.splice(0,0,-1*J+k);p.splice(p.length-1,1);n[d]=-1*p[0]+k;t[d]=n[d]+U-q;y[d]--;B[d]++}for(;c<=-1*t[d];)g=0,z=f.getSliderOffset(b(E[0]),"x"),b(E).each(function(a){f.getSliderOffset(this,"x")<z&&(z=f.getSliderOffset(this,"x"),g=a)}),J=n[d]+U,f.setSliderOffset(b(E)[g],J),n[d]=-1*p[1]+k,t[d]=n[d]+U-q,p.splice(0,1),p.splice(p.length,0,-1*J+k),y[d]++,B[d]--}f.setSliderOffset(F,p[B[d]]);f.updateBackfaceVisibility(E,d,H,a);a.desktopClickDrag||b(F).css({cursor:"default"});a.scrollbar&&(b("."+K).css({margin:a.scrollbarMargin, overflow:"hidden",display:"none"}),b("."+K+" ."+w).css({border:a.scrollbarBorder}),h=parseInt(b("."+K).css("marginLeft"))+parseInt(b("."+K).css("marginRight")),C=parseInt(b("."+K+" ."+w).css("borderLeftWidth"),10)+parseInt(b("."+K+" ."+w).css("borderRightWidth"),10),r=""!=a.scrollbarContainer?b(a.scrollbarContainer).width():q,u=q/U*(r-h),a.scrollbarHide||(ca=a.scrollbarOpacity),b("."+K).css({position:"absolute",left:0,width:r-h+"px",margin:a.scrollbarMargin}),"top"==a.scrollbarLocation?b("."+K).css("top", "0"):b("."+K).css("bottom","0"),b("."+K+" ."+w).css({borderRadius:a.scrollbarBorderRadius,background:a.scrollbarBackground,height:a.scrollbarHeight,width:u-C+"px",minWidth:a.scrollbarHeight,border:a.scrollbarBorder,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:ca,filter:"alpha(opacity:"+100*ca+")",boxShadow:a.scrollbarShadow}),f.setSliderOffset(b("."+K+" ."+w),Math.floor((-1*p[B[d]]-n[d]+k)/(t[d]-n[d]+k)*(r-h-u))),b("."+K).css({display:"block"}),x=b("."+K+" ."+ w),A=b("."+K));a.scrollbarDrag&&!V&&b("."+K+" ."+w).css({cursor:ea});a.infiniteSlider&&(S=(t[d]+q)/3);""!=a.navSlideSelector&&b(a.navSlideSelector).each(function(c){b(this).css({cursor:"pointer"});b(this).unbind(Q).bind(Q,function(e){"touchstart"==e.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=e.type+".iosSliderEvent";f.changeSlide(c,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)})});""!=a.navPrevSelector&&(b(a.navPrevSelector).css({cursor:"pointer"}),b(a.navPrevSelector).unbind(Q).bind(Q, function(c){"touchstart"==c.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=c.type+".iosSliderEvent";c=(B[d]+y[d]+H)%H;(0<c||a.infiniteSlider)&&f.changeSlide(c-1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)}));""!=a.navNextSelector&&(b(a.navNextSelector).css({cursor:"pointer"}),b(a.navNextSelector).unbind(Q).bind(Q,function(c){"touchstart"==c.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=c.type+".iosSliderEvent";c=(B[d]+y[d]+ H)%H;(c<p.length-1||a.infiniteSlider)&&f.changeSlide(c+1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)}));a.autoSlide&&!V&&""!=a.autoSlideToggleSelector&&(b(a.autoSlideToggleSelector).css({cursor:"pointer"}),b(a.autoSlideToggleSelector).unbind(Q).bind(Q,function(c){"touchstart"==c.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=c.type+".iosSliderEvent";ka?(f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a),ka=!1,b(a.autoSlideToggleSelector).removeClass("on")):(f.autoSlidePause(d), ka=!0,b(a.autoSlideToggleSelector).addClass("on"))}));f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a);b(l).bind("mouseleave.iosSliderEvent",function(){if(ka)return!0;f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});b(l).bind("touchend.iosSliderEvent",function(){if(ka)return!0;f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});a.autoSlideHoverPause&&b(l).bind("mouseenter.iosSliderEvent",function(){f.autoSlidePause(d)});b(l).data("iosslider",{obj:Ca,settings:a,scrollerNode:F,slideNodes:E,numberOfSlides:H, centeredSlideOffset:k,sliderNumber:d,originalOffsets:G,childrenOffsets:p,sliderMax:t[d],scrollbarClass:w,scrollbarWidth:u,scrollbarStageWidth:r,stageWidth:q,scrollMargin:h,scrollBorder:C,infiniteSliderOffset:y[d],infiniteSliderWidth:S,slideNodeOuterWidths:M,shortContent:V});L=!1;return!0}oa++;var d=oa,I=[];N[d]=b.extend({},a);n[d]=0;t[d]=0;var O=[0,0],J=[0,0],K="scrollbarBlock"+oa,w="scrollbar"+oa,x,A,r,u,m,D,k=0,l=b(this),q,s,h,C,z,L=!0;c=-1;var p,G=[],ca=0,P=0,ia=0,F=b(this).children(":first-child"), E,ha,M,H=b(F).children().not("script").length,W=!1,ja=0,ya=!1,sa=void 0,S;y[d]=0;var V=!1,ka=!1;wa[d]=!1;var Z,ta=!1,la=!1,Q="touchstart.iosSliderEvent click.iosSliderEvent",U,xa,Ba,ra;fa[d]=!1;R[d]=[];a.scrollbarDrag&&(a.scrollbar=!0,a.scrollbarHide=!1);var Ca=b(this);if(void 0!=Ca.data("iosslider"))return!0;var ma="".split(""),na=Math.floor(12317*Math.random());b(F).parent().append("").append("");b(".i"+na).css({position:"absolute",right:"10px", bottom:"10px",zIndex:1E3,fontStyle:"normal",background:"#fff",opacity:.2}).eq(1).css({bottom:"auto",right:"auto",top:"10px",left:"10px"});for(c=0;c<ma.length;c++)b(".i"+na).html(b(".i"+na).html()+ma[c]);14.2<=parseInt(b().jquery.split(".").join(""),10)?b(this).delegate("img","dragstart.iosSliderEvent",function(a){a.preventDefault()}):b(this).find("img").bind("dragstart.iosSliderEvent",function(a){a.preventDefault()});a.infiniteSlider&&(a.scrollbar=!1);a.infiniteSlider&&1==H&&(a.infiniteSlider=!1); a.scrollbar&&(""!=a.scrollbarContainer?b(a.scrollbarContainer).append("<div class = '"+K+"'><div class = '"+w+"'></div></div>"):b(F).parent().append("<div class = '"+K+"'><div class = '"+w+"'></div></div>"));if(!e())return!0;b(this).find("a").bind("mousedown",f.preventDrag);b(this).find("[onclick]").bind("click",f.preventDrag).each(function(){b(this).data("onclick",this.onclick)});c=f.calcActiveOffset(a,f.getSliderOffset(b(F),"x"),p,q,y[d],H,void 0,d);c=(c+y[d]+H)%H;c=new f.args("load",a,F,b(F).children(":eq("+ c+")"),c,c);b(l).data("args",c);if(""!=a.onSliderLoaded)a.onSliderLoaded(c);a.scrollbarPaging&&a.scrollbar&&!V&&(b(A).css("cursor","pointer"),b(A).bind("click.iosSliderEvent",function(a){this==a.target&&(a.pageX>b(x).offset().left?$.nextPage(l):$.prevPage(l))}));if(N[d].responsiveSlides||N[d].responsiveSlideContainer)c=Ea?"orientationchange":"resize",b(window).bind(c+".iosSliderEvent-"+d,function(){if(!e())return!0;var c=b(l).data("args");if(""!=a.onSliderResize)a.onSliderResize(c)});!a.keyboardControls&& !a.tabToAdvance||V||b(document).bind("keydown.iosSliderEvent",function(b){da||Y||(b=b.originalEvent);if("INPUT"==b.target.nodeName||fa[d])return!0;if(37==b.keyCode&&a.keyboardControls)b.preventDefault(),b=(B[d]+y[d]+H)%H,(0<b||a.infiniteSlider)&&f.changeSlide(b-1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a);else if(39==b.keyCode&&a.keyboardControls||9==b.keyCode&&a.tabToAdvance)b.preventDefault(),b=(B[d]+y[d]+H)%H,(b<p.length-1||a.infiniteSlider)&&f.changeSlide(b+1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});if(Da|| a.desktopClickDrag){var ba=!1,za=!1;c=b(F);var ua=b(F),Aa=!1;a.scrollbarDrag&&(c=c.add(x),ua=ua.add(A));b(c).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(c){b(window).one("scroll.iosSliderEvent",function(a){ba=!1});if(ba)return!0;ba=!0;za=!1;"touchstart"==c.type?b(ua).unbind("mousedown.iosSliderEvent"):b(ua).unbind("touchstart.iosSliderEvent");if(fa[d]||V||(Aa=f.isUnselectable(c.target,a)))return W=ba=!1,!0;Z=b(this)[0]===b(x)[0]?x:F;da||Y||(c=c.originalEvent);f.autoSlidePause(d); ra.unbind(".disableClick");if("touchstart"==c.type)eventX=c.touches[0].pageX,eventY=c.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(e){}else document.selection.empty();eventX=c.pageX;eventY=c.pageY;ya=!0;sa=F;b(this).css({cursor:va})}O=[0,0];J=[0,0];X=0;W=!1;for(c=0;c<I.length;c++)clearTimeout(I[c]); c=f.getSliderOffset(F,"x");c>-1*n[d]+k+U?(c=-1*n[d]+k+U,f.setSliderOffset(b("."+w),c),b("."+w).css({width:u-C+"px"})):c<-1*t[d]&&(c=-1*t[d],f.setSliderOffset(b("."+w),r-h-u),b("."+w).css({width:u-C+"px"}));c=b(this)[0]===b(x)[0]?n[d]:0;P=-1*(f.getSliderOffset(this,"x")-eventX-c);f.getSliderOffset(this,"y");O[1]=eventX;J[1]=eventY;la=!1});b(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(c){da||Y||(c=c.originalEvent);if(fa[d]||V||Aa||!ba)return!0;var e=0;if("touchmove"== c.type)eventX=c.touches[0].pageX,eventY=c.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(v){}else document.selection.empty();eventX=c.pageX;eventY=c.pageY;if(!ya||!pa&&("undefined"!=typeof c.webkitMovementX||"undefined"!=typeof c.webkitMovementY)&&0===c.webkitMovementY&&0===c.webkitMovementX)return!0}O[0]=O[1];O[1]=eventX;X= (O[1]-O[0])/2;J[0]=J[1];J[1]=eventY;ga=(J[1]-J[0])/2;if(!W){var g=(B[d]+y[d]+H)%H,g=new f.args("start",a,F,b(F).children(":eq("+g+")"),g,void 0);b(l).data("args",g);if(""!=a.onSlideStart)a.onSlideStart(g)}(ga>a.verticalSlideLockThreshold||ga<-1*a.verticalSlideLockThreshold)&&"touchmove"==c.type&&!W&&(ta=!0);(X>a.horizontalSlideLockThreshold||X<-1*a.horizontalSlideLockThreshold)&&"touchmove"==c.type&&c.preventDefault();if(X>a.slideStartVelocityThreshold||X<-1*a.slideStartVelocityThreshold)W=!0;if(W&& !ta){var g=f.getSliderOffset(F,"x"),m=b(Z)[0]===b(x)[0]?n[d]:k,s=b(Z)[0]===b(x)[0]?(n[d]-t[d]-k)/(r-h-u):1,A=b(Z)[0]===b(x)[0]?a.scrollbarElasticPullResistance:a.elasticPullResistance,D=a.snapSlideCenter&&b(Z)[0]===b(x)[0]?0:k,K=a.snapSlideCenter&&b(Z)[0]===b(x)[0]?k:0;"touchmove"==c.type&&(ia!=c.touches.length&&(P=-1*g+eventX),ia=c.touches.length);if(a.infiniteSlider){if(g<=-1*t[d]){var I=b(F).width();if(g<=-1*qa[d]){var L=-1*G[0];b(E).each(function(a){f.setSliderOffset(b(E)[a],L+k);a<p.length&& (p[a]=-1*L);L+=M[a]});P-=-1*p[0];n[d]=-1*p[0]+k;t[d]=n[d]+I-q;y[d]=0}else{var N=0,S=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")<S&&(S=f.getSliderOffset(this,"x"),N=a)});A=n[d]+I;f.setSliderOffset(b(E)[N],A);n[d]=-1*p[1]+k;t[d]=n[d]+I-q;p.splice(0,1);p.splice(p.length,0,-1*A+k);y[d]++}}if(g>=-1*n[d]||0<=g)if(I=b(F).width(),0<=g)for(L=-1*G[0],b(E).each(function(a){f.setSliderOffset(b(E)[a],L+k);a<p.length&&(p[a]=-1*L);L+=M[a]}),P+=-1*p[0],n[d]=-1*p[0]+k,t[d]=n[d]+ I-q,y[d]=H;0<-1*p[0]-I+k;){var Q=0,R=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")>R&&(R=f.getSliderOffset(this,"x"),Q=a)});A=n[d]-M[Q];f.setSliderOffset(b(E)[Q],A);p.splice(0,0,-1*A+k);p.splice(p.length-1,1);n[d]=-1*p[0]+k;t[d]=n[d]+I-q;y[d]--;B[d]++}else Q=0,R=f.getSliderOffset(b(E[0]),"x"),b(E).each(function(a){f.getSliderOffset(this,"x")>R&&(R=f.getSliderOffset(this,"x"),Q=a)}),A=n[d]-M[Q],f.setSliderOffset(b(E)[Q],A),p.splice(0,0,-1*A+k),p.splice(p.length-1, 1),n[d]=-1*p[0]+k,t[d]=n[d]+I-q,y[d]--}else I=b(F).width(),g>-1*n[d]+k&&(e=(n[d]+-1*(P-m-eventX+D)*s-m)*A*-1/s),g<-1*t[d]&&(e=(t[d]+K+-1*(P-m-eventX)*s-m)*A*-1/s);f.setSliderOffset(F,-1*(P-m-eventX-e)*s-m+K);a.scrollbar&&(f.showScrollbar(a,w),T=Math.floor((P-eventX-e-n[d]+D)/(t[d]-n[d]+k)*(r-h-u)*s),g=u,0>=T?(g=u-C- -1*T,f.setSliderOffset(b("."+w),0),b("."+w).css({width:g+"px"})):T>=r-h-C-u?(g=r-h-C-T,f.setSliderOffset(b("."+w),T),b("."+w).css({width:g+"px"})):f.setSliderOffset(b("."+w),T));"touchmove"== c.type&&(z=c.touches[0].pageX);c=!1;e=f.calcActiveOffset(a,-1*(P-eventX-e),p,q,y[d],H,void 0,d);g=(e+y[d]+H)%H;a.infiniteSlider?g!=aa[d]&&(c=!0):e!=B[d]&&(c=!0);if(c){B[d]=e;aa[d]=g;la=!0;g=new f.args("change",a,F,b(F).children(":eq("+g+")"),g,g);b(l).data("args",g);if(""!=a.onSlideChange)a.onSlideChange(g);f.updateBackfaceVisibility(E,d,H,a)}}});ma=b(window);if(Y||da)ma=b(document);b(c).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent",function(b){b=b.originalEvent;if(za)return!1;za=!0;if(fa[d]|| V||Aa)return!0;if(0!=b.touches.length)for(var c=0;c<b.touches.length;c++)b.touches[c].pageX==z&&f.slowScrollHorizontal(F,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);else f.slowScrollHorizontal(F,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);ba=ta=!1;return!0});b(ma).bind("mouseup.iosSliderEvent-"+d,function(c){W?xa.unbind("click.disableClick").bind("click.disableClick",f.preventClick):xa.unbind("click.disableClick").bind("click.disableClick",f.enableClick);Ba.each(function(){this.onclick=function(a){if(W)return!1; b(this).data("onclick")&&b(this).data("onclick").call(this,a||window.event)};this.onclick=b(this).data("onclick")});1.8<=parseFloat(b().jquery)?ra.each(function(){var a=b._data(this,"events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!W)return!1;b(this).one("click.disableClick",f.preventClick);var a=b._data(this,"events").click,c=a.pop();a.splice(0,0,c)}}):1.6<=parseFloat(b().jquery)&&ra.each(function(){var a=b(this).data("events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!= a.click[0].namespace){if(!W)return!1;b(this).one("click.disableClick",f.preventClick);var a=b(this).data("events").click,c=a.pop();a.splice(0,0,c)}});if(!wa[d]){if(V)return!0;a.desktopClickDrag&&b(F).css({cursor:ea});a.scrollbarDrag&&b(x).css({cursor:ea});ya=!1;if(void 0==sa)return!0;f.slowScrollHorizontal(sa,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);sa=void 0}ba=ta=!1})}})},destroy:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a=b(this),c=a.data("iosslider");if(void 0==c)return!1; void 0==e&&(e=!0);f.autoSlidePause(c.sliderNumber);wa[c.sliderNumber]=!0;b(window).unbind(".iosSliderEvent-"+c.sliderNumber);b(document).unbind(".iosSliderEvent-"+c.sliderNumber);b(document).unbind("keydown.iosSliderEvent");b(this).unbind(".iosSliderEvent");b(this).children(":first-child").unbind(".iosSliderEvent");b(this).children(":first-child").children().unbind(".iosSliderEvent");b(c.settings.scrollbarBlockNode).unbind(".iosSliderEvent");e&&(b(this).attr("style",""),b(this).children(":first-child").attr("style", ""),b(this).children(":first-child").children().attr("style",""),b(c.settings.navSlideSelector).attr("style",""),b(c.settings.navPrevSelector).attr("style",""),b(c.settings.navNextSelector).attr("style",""),b(c.settings.autoSlideToggleSelector).attr("style",""),b(c.settings.unselectableSelector).attr("style",""));c.settings.scrollbar&&b(".scrollbarBlock"+c.sliderNumber).remove();for(var c=R[c.sliderNumber],g=0;g<c.length;g++)clearTimeout(c[g]);a.removeData("iosslider");a.removeData("args")})},update:function(e){void 0== e&&(e=this);return b(e).each(function(){var c=b(this),a=c.data("iosslider");if(void 0==a)return!1;a.settings.startAtSlide=c.data("args").currentSlideNumber;$.destroy(!1,this);1!=a.numberOfSlides&&a.settings.infiniteSlider&&(a.settings.startAtSlide=(B[a.sliderNumber]+1+y[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides);$.init(a.settings,this);c=new f.args("update",a.settings,a.scrollerNode,b(a.scrollerNode).children(":eq("+(a.settings.startAtSlide-1)+")"),a.settings.startAtSlide-1,a.settings.startAtSlide- 1);b(a.stageNode).data("args",c);if(""!=a.settings.onSliderUpdate)a.settings.onSliderUpdate(c)})},addSlide:function(e,c){return this.each(function(){var a=b(this),f=a.data("iosslider");if(void 0==f)return!1;0==b(f.scrollerNode).children().length?(b(f.scrollerNode).append(e),a.data("args").currentSlideNumber=1):f.settings.infiniteSlider?(1==c?b(f.scrollerNode).children(":eq(0)").before(e):b(f.scrollerNode).children(":eq("+(c-2)+")").after(e),-1>y[f.sliderNumber]&&B[f.sliderNumber]--,a.data("args").currentSlideNumber>= c&&B[f.sliderNumber]++):(c<=f.numberOfSlides?b(f.scrollerNode).children(":eq("+(c-1)+")").before(e):b(f.scrollerNode).children(":eq("+(c-2)+")").after(e),a.data("args").currentSlideNumber>=c&&a.data("args").currentSlideNumber++);a.data("iosslider").numberOfSlides++;$.update(this)})},removeSlide:function(e){return this.each(function(){var c=b(this),a=c.data("iosslider");if(void 0==a)return!1;b(a.scrollerNode).children(":eq("+(e-1)+")").remove();B[a.sliderNumber]>e-1&&B[a.sliderNumber]--;c.data("iosslider").numberOfSlides--; $.update(this)})},goToSlide:function(e,c,a){void 0==a&&(a=this);return b(a).each(function(){var a=b(this).data("iosslider");if(void 0==a||a.shortContent)return!1;e=e>a.childrenOffsets.length?a.childrenOffsets.length-1:e-1;void 0!=c&&(a.settings.autoSlideTransTimer=c);f.changeSlide(e,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber, a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},prevSlide:function(e){return this.each(function(){var c=b(this).data("iosslider");if(void 0==c||c.shortContent)return!1;var a=(B[c.sliderNumber]+y[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=e&&(c.settings.autoSlideTransTimer=e);(0<a||c.settings.infiniteSlider)&&f.changeSlide(a-1,b(c.scrollerNode),b(c.slideNodes),R[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin, c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);B[c.sliderNumber]=a})},nextSlide:function(e){return this.each(function(){var c=b(this).data("iosslider");if(void 0==c||c.shortContent)return!1;var a=(B[c.sliderNumber]+y[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=e&&(c.settings.autoSlideTransTimer=e);(a<c.childrenOffsets.length-1||c.settings.infiniteSlider)&&f.changeSlide(a+ 1,b(c.scrollerNode),b(c.slideNodes),R[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);B[c.sliderNumber]=a})},prevPage:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;var c=f.getSliderOffset(a.scrollerNode,"x")+a.stageWidth; void 0!=e&&(a.settings.autoSlideTransTimer=e);f.changeOffset(c,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},nextPage:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;var c=f.getSliderOffset(a.scrollerNode, "x")-a.stageWidth;void 0!=e&&(a.settings.autoSlideTransTimer=e);f.changeOffset(c,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},lock:function(){return this.each(function(){var e=b(this).data("iosslider");if(void 0==e||e.shortContent)return!1;b(e.scrollerNode).css({cursor:"default"}); fa[e.sliderNumber]=!0})},unlock:function(){return this.each(function(){var e=b(this).data("iosslider");if(void 0==e||e.shortContent)return!1;b(e.scrollerNode).css({cursor:ea});fa[e.sliderNumber]=!1})},getData:function(){return this.each(function(){var e=b(this).data("iosslider");return void 0==e||e.shortContent?!1:e})},autoSlidePause:function(){return this.each(function(){var e=b(this).data("iosslider");if(void 0==e||e.shortContent)return!1;N[e.sliderNumber].autoSlide=!1;f.autoSlidePause(e.sliderNumber); return e})},autoSlidePlay:function(){return this.each(function(){var e=b(this).data("iosslider");if(void 0==e||e.shortContent)return!1;N[e.sliderNumber].autoSlide=!0;f.autoSlide(b(e.scrollerNode),b(e.slideNodes),R[e.sliderNumber],e.scrollbarClass,e.scrollbarWidth,e.stageWidth,e.scrollbarStageWidth,e.scrollMargin,e.scrollBorder,e.originalOffsets,e.childrenOffsets,e.slideNodeOuterWidths,e.sliderNumber,e.infiniteSliderWidth,e.numberOfSlides,e.centeredSlideOffset,e.settings);return e})}};b.fn.iosSlider= function(e){if($[e])return $[e].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof e&&e)b.error("invalid method call!");else return $.init.apply(this,arguments)}})(jQuery);

/***/ }),

/***/ "./www/assets/js/mmenu.js":
/*!********************************!*\
  !*** ./www/assets/js/mmenu.js ***!
  \********************************/
/***/ (() => {

$(document).ready(function(){

	$('#mmenu').click(function(){
		$(this).toggleClass('sel');
		if ($(this).hasClass('sel')) $('header nav').slideDown(250); else $('header nav').slideUp(250,function(){
			$(this).attr('style','');
		});
		return false;
	});

});

/***/ }),

/***/ "./www/assets/js/nette.ajax.js":
/*!*************************************!*\
  !*** ./www/assets/js/nette.ajax.js ***!
  \*************************************/
/***/ (() => {

/**
 * AJAX Nette Framework plugin for jQuery
 *
 * @copyright Copyright (c) 2009, 2010 Jan Marek
 * @copyright Copyright (c) 2009, 2010 David Grudl
 * @copyright Copyright (c) 2012-2014 Vojtěch Dobeš
 * @license MIT
 *
 * @version 2.0.0
 */

(function(window, $, undefined) {

if (typeof $ !== 'function') {
	return console.error('nette.ajax.js: jQuery is missing, load it please');
}

var nette = function () {
	var inner = {
		self: this,
		initialized: false,
		contexts: {},
		on: {
			init: {},
			load: {},
			prepare: {},
			before: {},
			start: {},
			success: {},
			complete: {},
			error: {}
		},
		fire: function () {
			var result = true;
			var args = Array.prototype.slice.call(arguments);
			var props = args.shift();
			var name = (typeof props === 'string') ? props : props.name;
			var off = (typeof props === 'object') ? props.off || {} : {};
			args.push(inner.self);
			$.each(inner.on[name], function (index, reaction) {
				if (reaction === undefined || $.inArray(index, off) !== -1) return true;
				var temp = reaction.apply(inner.contexts[index], args);
				return result = (temp === undefined || temp);
			});
			return result;
		},
		requestHandler: function (e) {
			var xhr = inner.self.ajax({}, this, e);
			if (xhr && xhr._returnFalse) { // for IE 8
				return false;
			}
		},
		ext: function (callbacks, context, name) {
			while (!name) {
				name = 'ext_' + Math.random();
				if (inner.contexts[name]) {
					name = undefined;
				}
			}

			$.each(callbacks, function (event, callback) {
				inner.on[event][name] = callback;
			});
			inner.contexts[name] = $.extend(context ? context : {}, {
				name: function () {
					return name;
				},
				ext: function (name, force) {
					var ext = inner.contexts[name];
					if (!ext && force) throw "Extension '" + this.name() + "' depends on disabled extension '" + name + "'.";
					return ext;
				}
			});
		}
	};

	/**
	 * Allows manipulation with extensions.
	 * When called with 1. argument only, it returns extension with given name.
	 * When called with 2. argument equal to false, it removes extension entirely.
	 * When called with 2. argument equal to hash of event callbacks, it adds new extension.
	 *
	 * @param  {string} Name of extension
	 * @param  {bool|object|null} Set of callbacks for any events OR false for removing extension.
	 * @param  {object|null} Context for added extension
	 * @return {$.nette|object} Provides a fluent interface OR returns extensions with given name
	 */
	this.ext = function (name, callbacks, context) {
		if (typeof name === 'object') {
			inner.ext(name, callbacks);
		} else if (callbacks === undefined) {
			return inner.contexts[name];
		} else if (!callbacks) {
			$.each(['init', 'load', 'prepare', 'before', 'start', 'success', 'complete', 'error'], function (index, event) {
				inner.on[event][name] = undefined;
			});
			inner.contexts[name] = undefined;
		} else if (typeof name === 'string' && inner.contexts[name] !== undefined) {
			throw "Cannot override already registered nette-ajax extension '" + name + "'.";
		} else {
			inner.ext(callbacks, context, name);
		}
		return this;
	};

	/**
	 * Initializes the plugin:
	 * - fires 'init' event, then 'load' event
	 * - when called with any arguments, it will override default 'init' extension
	 *   with provided callbacks
	 *
	 * @param  {function|object|null} Callback for 'load' event or entire set of callbacks for any events
	 * @param  {object|null} Context provided for callbacks in first argument
	 * @return {$.nette} Provides a fluent interface
	 */
	this.init = function (load, loadContext) {
		if (inner.initialized) throw 'Cannot initialize nette-ajax twice.';

		if (typeof load === 'function') {
			this.ext('init', null);
			this.ext('init', {
				load: load
			}, loadContext);
		} else if (typeof load === 'object') {
			this.ext('init', null);
			this.ext('init', load, loadContext);
		} else if (load !== undefined) {
			throw 'Argument of init() can be function or function-hash only.';
		}

		inner.initialized = true;

		inner.fire('init');
		this.load();
		return this;
	};

	/**
	 * Fires 'load' event
	 *
	 * @return {$.nette} Provides a fluent interface
	 */
	this.load = function () {
		inner.fire('load', inner.requestHandler);
		return this;
	};

	/**
	 * Executes AJAX request. Attaches listeners and events.
	 *
	 * @param  {object} settings
	 * @param  {Element|null} ussually Anchor or Form
	 * @param  {event|null} event causing the request
	 * @return {jqXHR|null}
	 */
	this.ajax = function (settings, ui, e) {
		if (!settings.nette && ui && e) {
			var $el = $(ui), xhr, originalBeforeSend;
			var analyze = settings.nette = {
				e: e,
				ui: ui,
				el: $el,
				isForm: $el.is('form'),
				isSubmit: $el.is('input[type=submit]') || $el.is('button[type=submit]'),
				isImage: $el.is('input[type=image]'),
				form: null
			};

			if (analyze.isSubmit || analyze.isImage) {
				analyze.form = analyze.el.closest('form');
			} else if (analyze.isForm) {
				analyze.form = analyze.el;
			}

			if (!settings.url) {
				settings.url = analyze.form ? analyze.form.attr('action') : ui.href;
			}
			if (!settings.type) {
				settings.type = analyze.form ? analyze.form.attr('method') : 'get';
			}

			if ($el.is('[data-ajax-off]')) {
				var rawOff = $el.attr('data-ajax-off');
				if (rawOff.indexOf('[') === 0) {
					settings.off = $el.data('ajaxOff');
				} else if (rawOff.indexOf(',') !== -1) {
					settings.off = rawOff.split(',');
				} else if (rawOff.indexOf(' ') !== -1) {
					settings.off = rawOff.split(' ');
				} else {
					settings.off = rawOff;
				}
				if (typeof settings.off === 'string') settings.off = [settings.off];
				settings.off = $.grep($.each(settings.off, function (off) {
					return $.trim(off);
				}), function (off) {
					return off.length;
				});
			}
		}

		inner.fire({
			name: 'prepare',
			off: settings.off || {}
		}, settings);
		if (settings.prepare) {
			settings.prepare(settings);
		}

		originalBeforeSend = settings.beforeSend;
		settings.beforeSend = function (xhr, settings) {
			var result = inner.fire({
				name: 'before',
				off: settings.off || {}
			}, xhr, settings);
			if ((result || result === undefined) && originalBeforeSend) {
				result = originalBeforeSend(xhr, settings);
			}
			return result;
		};

		return this.handleXHR($.ajax(settings), settings);
	};

	/**
	 * Binds extension callbacks to existing XHR object
	 *
	 * @param  {jqXHR|null}
	 * @param  {object} settings
	 * @return {jqXHR|null}
	 */
	this.handleXHR = function (xhr, settings) {
		settings = settings || {};

		if (xhr && (typeof xhr.statusText === 'undefined' || xhr.statusText !== 'canceled')) {
			xhr.done(function (payload, status, xhr) {
				inner.fire({
					name: 'success',
					off: settings.off || {}
				}, payload, status, xhr, settings);
			}).fail(function (xhr, status, error) {
				inner.fire({
					name: 'error',
					off: settings.off || {}
				}, xhr, status, error, settings);
			}).always(function (xhr, status) {
				inner.fire({
					name: 'complete',
					off: settings.off || {}
				}, xhr, status, settings);
			});
			inner.fire({
				name: 'start',
				off: settings.off || {}
			}, xhr, settings);
			if (settings.start) {
				settings.start(xhr, settings);
			}
		}
		return xhr;
	};
};

$.nette = new ($.extend(nette, $.nette ? $.nette : {}));

$.fn.netteAjax = function (e, options) {
	return $.nette.ajax(options || {}, this[0], e);
};

$.fn.netteAjaxOff = function () {
	return this.off('.nette');
};

$.nette.ext('validation', {
	before: function (xhr, settings) {
		if (!settings.nette) return true;
		else var analyze = settings.nette;
		var e = analyze.e;

		var validate = $.extend({
			keys: true,
			url: true,
			form: true
		}, settings.validate || (function () {
			if (!analyze.el.is('[data-ajax-validate]')) return;
			var attr = analyze.el.data('ajaxValidate');
			if (attr === false) return {
				keys: false,
				url: false,
				form: false
			}; else if (typeof attr === 'object') return attr;
 		})() || {});

		var passEvent = false;
		if (analyze.el.attr('data-ajax-pass') !== undefined) {
			passEvent = analyze.el.data('ajaxPass');
			passEvent = typeof passEvent === 'bool' ? passEvent : true;
		}

		if (validate.keys) {
			// thx to @vrana
			var explicitNoAjax = e.button || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;

			if (analyze.form) {
				if (explicitNoAjax && analyze.isSubmit) {
					this.explicitNoAjax = true;
					return false;
				} else if (analyze.isForm && this.explicitNoAjax) {
					this.explicitNoAjax = false;
					return false;
				}
			} else if (explicitNoAjax) return false;
		}

		if (validate.form && analyze.form && !((analyze.isSubmit || analyze.isImage) && analyze.el.attr('formnovalidate') !== undefined)) {
			var ie = this.ie();
			if (analyze.form.get(0).onsubmit && analyze.form.get(0).onsubmit((typeof ie !== 'undefined' && ie < 9) ? undefined : e) === false) {
				e.stopImmediatePropagation();
				e.preventDefault();
				return false;
			}
		}

		if (validate.url) {
			// thx to @vrana
			if (/:|^#/.test(analyze.form ? settings.url : analyze.el.attr('href'))) return false;
		}

		if (!passEvent) {
			e.stopPropagation();
			e.preventDefault();
			xhr._returnFalse = true; // for IE 8
		}
		return true;
	}
}, {
	explicitNoAjax: false,
	ie: function (undefined) { // http://james.padolsey.com/javascript/detect-ie-in-js-using-conditional-comments/
		var v = 3;
		var div = document.createElement('div');
		var all = div.getElementsByTagName('i');
		while (
        		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);
		return v > 4 ? v : undefined;
	}
});

$.nette.ext('forms', {
	init: function () {
		var snippets;
		if (!window.Nette || !(snippets = this.ext('snippets'))) return;

		snippets.after(function ($el) {
			$el.find('form').each(function() {
				window.Nette.initForm(this);
			});
		});
	},
	prepare: function (settings) {
		var analyze = settings.nette;
		if (!analyze || !analyze.form) return;
		var e = analyze.e;
		var originalData = settings.data || {};
		var data = {};

		if (analyze.isSubmit) {
			data[analyze.el.attr('name')] = analyze.el.val() || '';
		} else if (analyze.isImage) {
			var offset = analyze.el.offset();
			var name = analyze.el.attr('name');
			var dataOffset = [ Math.max(0, e.pageX - offset.left), Math.max(0, e.pageY - offset.top) ];

			if (name.indexOf('[', 0) !== -1) { // inside a container
				data[name] = dataOffset;
			} else {
				data[name + '.x'] = dataOffset[0];
				data[name + '.y'] = dataOffset[1];
			}
		}
		
		// https://developer.mozilla.org/en-US/docs/Web/Guide/Using_FormData_Objects#Sending_files_using_a_FormData_object
		if (analyze.form.attr('method').toLowerCase() === 'post' && 'FormData' in window) {
			var formData = new FormData(analyze.form[0]);
			for (var i in data) {
				formData.append(i, data[i]);
			}

			if (typeof originalData !== 'string') {
				for (var i in originalData) {
					formData.append(i, originalData[i]);
				}
			}

			settings.data = formData;
			settings.processData = false;
			settings.contentType = false;
		} else {
			if (typeof originalData !== 'string') {
				originalData = $.param(originalData);
			}
			data = $.param(data);
			settings.data = analyze.form.serialize() + (data ? '&' + data : '') + '&' + originalData;
		}
	}
});

// default snippet handler
$.nette.ext('snippets', {
	success: function (payload) {
		if (payload.snippets) {
			this.updateSnippets(payload.snippets);
		}
	}
}, {
	beforeQueue: $.Callbacks(),
	afterQueue: $.Callbacks(),
	completeQueue: $.Callbacks(),
	before: function (callback) {
		this.beforeQueue.add(callback);
	},
	after: function (callback) {
		this.afterQueue.add(callback);
	},
	complete: function (callback) {
		this.completeQueue.add(callback);
	},
	updateSnippets: function (snippets, back) {
		var that = this;
		var elements = [];
		for (var i in snippets) {
			var $el = this.getElement(i);
			if ($el.get(0)) {
				elements.push($el.get(0));
			}
			this.updateSnippet($el, snippets[i], back);
		}
		$(elements).promise().done(function () {
			that.completeQueue.fire();
		});
	},
	updateSnippet: function ($el, html, back) {
		// Fix for setting document title in IE
		if ($el.is('title')) {
			document.title = html;
		} else {
			this.beforeQueue.fire($el);
			this.applySnippet($el, html, back);
			this.afterQueue.fire($el);
		}
	},
	getElement: function (id) {
		return $('#' + this.escapeSelector(id));
	},
	applySnippet: function ($el, html, back) {
		if (!back && $el.is('[data-ajax-append]')) {
			$el.append(html);
		} else if (!back && $el.is('[data-ajax-prepend]')) {
			$el.prepend(html);
		} else {
			$el.html(html);
		}
	},
	escapeSelector: function (selector) {
		// thx to @uestla (https://github.com/uestla)
		return selector.replace(/[\!"#\$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|\}~]/g, '\\$&');
	}
});

// support $this->redirect()
$.nette.ext('redirect', {
	success: function (payload) {
		if (payload.redirect) {
			window.location.href = payload.redirect;
			return false;
		}
	}
});

// current page state
$.nette.ext('state', {
	success: function (payload) {
		if (payload.state) {
			this.state = payload.state;
		}
	}
}, {state: null});

// abort last request if new started
$.nette.ext('unique', {
	start: function (xhr) {
		if (this.xhr) {
			this.xhr.abort();
		}
		this.xhr = xhr;
	},
	complete: function () {
		this.xhr = null;
	}
}, {xhr: null});

// option to abort by ESC (thx to @vrana)
$.nette.ext('abort', {
	init: function () {
		$('body').keydown($.proxy(function (e) {
			if (this.xhr && (e.keyCode.toString() === '27' // Esc
			&& !(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey))
			) {
				this.xhr.abort();
			}
		}, this));
	},
	start: function (xhr) {
		this.xhr = xhr;
	},
	complete: function () {
		this.xhr = null;
	}
}, {xhr: null});

$.nette.ext('load', {
	success: function () {
		$.nette.load();
	}
});

// default ajaxification (can be overridden in init())
$.nette.ext('init', {
	load: function (rh) {
		$(this.linkSelector).off('click.nette', rh).on('click.nette', rh);
		$(this.formSelector).off('submit.nette', rh).on('submit.nette', rh)
			.off('click.nette', ':image', rh).on('click.nette', ':image', rh)
			.off('click.nette', ':submit', rh).on('click.nette', ':submit', rh);
		$(this.buttonSelector).closest('form')
			.off('click.nette', this.buttonSelector, rh).on('click.nette', this.buttonSelector, rh);
	}
}, {
	linkSelector: 'a.ajax',
	formSelector: 'form.ajax',
	buttonSelector: 'input.ajax[type="submit"], button.ajax[type="submit"], input.ajax[type="image"]'
});

})(window, window.jQuery);


/***/ }),

/***/ "./www/assets/js/simple-lightbox.js":
/*!******************************************!*\
  !*** ./www/assets/js/simple-lightbox.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.10.3
*/
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=undefined;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u=undefined,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleLightbox = /*#__PURE__*/function () {
  function SimpleLightbox(elements, options) {
    var _this = this;

    _classCallCheck(this, SimpleLightbox);

    _defineProperty(this, "defaultOptions", {
      sourceAttr: 'href',
      overlay: true,
      overlayOpacity: 0.7,
      spinner: true,
      nav: true,
      navText: ['&lsaquo;', '&rsaquo;'],
      captions: true,
      captionDelay: 0,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'title',
      captionPosition: 'bottom',
      captionClass: '',
      close: true,
      closeText: '&times;',
      swipeClose: true,
      showCounter: true,
      fileExt: 'png|jpg|jpeg|gif|webp',
      animationSlide: true,
      animationSpeed: 250,
      preloading: true,
      enableKeyboard: true,
      loop: true,
      rel: false,
      docClose: true,
      swipeTolerance: 50,
      className: 'simple-lightbox',
      widthRatio: 0.8,
      heightRatio: 0.9,
      scaleImageToRatio: false,
      disableRightClick: false,
      disableScroll: true,
      alertError: true,
      alertErrorMessage: 'Image not found, next image will be loaded',
      additionalHtml: false,
      history: true,
      throttleInterval: 0,
      doubleTapZoom: 2,
      maxZoom: 10,
      htmlClass: 'has-lightbox',
      rtl: false,
      fixedClass: 'sl-fixed',
      fadeSpeed: 300,
      uniqueImages: true,
      focus: true,
      scrollZoom: true,
      scrollZoomFactor: 0.5
    });

    _defineProperty(this, "transitionPrefix", void 0);

    _defineProperty(this, "isPassiveEventsSupported", void 0);

    _defineProperty(this, "transitionCapable", false);

    _defineProperty(this, "isTouchDevice", 'ontouchstart' in window);

    _defineProperty(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));

    _defineProperty(this, "initialLocationHash", void 0);

    _defineProperty(this, "pushStateSupport", 'pushState' in history);

    _defineProperty(this, "isOpen", false);

    _defineProperty(this, "isAnimating", false);

    _defineProperty(this, "isClosing", false);

    _defineProperty(this, "isFadeIn", false);

    _defineProperty(this, "urlChangedOnce", false);

    _defineProperty(this, "hashReseted", false);

    _defineProperty(this, "historyHasChanges", false);

    _defineProperty(this, "historyUpdateTimeout", null);

    _defineProperty(this, "currentImage", void 0);

    _defineProperty(this, "eventNamespace", 'simplelightbox');

    _defineProperty(this, "domNodes", {});

    _defineProperty(this, "loadedImages", []);

    _defineProperty(this, "initialImageIndex", 0);

    _defineProperty(this, "currentImageIndex", 0);

    _defineProperty(this, "initialSelector", null);

    _defineProperty(this, "globalScrollbarWidth", 0);

    _defineProperty(this, "controlCoordinates", {
      swipeDiff: 0,
      swipeYDiff: 0,
      swipeStart: 0,
      swipeEnd: 0,
      swipeYStart: 0,
      swipeYEnd: 0,
      mousedown: false,
      imageLeft: 0,
      zoomed: false,
      containerHeight: 0,
      containerWidth: 0,
      containerOffsetX: 0,
      containerOffsetY: 0,
      imgHeight: 0,
      imgWidth: 0,
      capture: false,
      initialOffsetX: 0,
      initialOffsetY: 0,
      initialPointerOffsetX: 0,
      initialPointerOffsetY: 0,
      initialPointerOffsetX2: 0,
      initialPointerOffsetY2: 0,
      initialScale: 1,
      initialPinchDistance: 0,
      pointerOffsetX: 0,
      pointerOffsetY: 0,
      pointerOffsetX2: 0,
      pointerOffsetY2: 0,
      targetOffsetX: 0,
      targetOffsetY: 0,
      targetScale: 0,
      pinchOffsetX: 0,
      pinchOffsetY: 0,
      limitOffsetX: 0,
      limitOffsetY: 0,
      scaleDifference: 0,
      targetPinchDistance: 0,
      touchCount: 0,
      doubleTapped: false,
      touchmoveCount: 0
    });

    this.options = Object.assign(this.defaultOptions, options);
    this.isPassiveEventsSupported = this.checkPassiveEventsSupport();

    if (typeof elements === 'string') {
      this.initialSelector = elements;
      this.elements = Array.from(document.querySelectorAll(elements));
    } else {
      this.elements = typeof elements.length !== 'undefined' && elements.length > 0 ? Array.from(elements) : [elements];
    }

    this.relatedElements = [];
    this.transitionPrefix = this.calculateTransitionPrefix();
    this.transitionCapable = this.transitionPrefix !== false;
    this.initialLocationHash = this.hash; // this should be handled by attribute selector IMHO! => 'a[rel=bla]'...

    if (this.options.rel) {
      this.elements = this.getRelated(this.options.rel);
    }

    if (this.options.uniqueImages) {
      var imgArr = [];
      this.elements = Array.from(this.elements).filter(function (element) {
        var src = element.getAttribute(_this.options.sourceAttr);

        if (imgArr.indexOf(src) === -1) {
          imgArr.push(src);
          return true;
        }

        return false;
      });
    }

    this.createDomNodes();

    if (this.options.close) {
      this.domNodes.wrapper.appendChild(this.domNodes.closeButton);
    }

    if (this.options.nav) {
      this.domNodes.wrapper.appendChild(this.domNodes.navigation);
    }

    if (this.options.spinner) {
      this.domNodes.wrapper.appendChild(this.domNodes.spinner);
    }

    this.addEventListener(this.elements, 'click.' + this.eventNamespace, function (event) {
      if (_this.isValidLink(event.currentTarget)) {
        event.preventDefault();

        if (_this.isAnimating) {
          return false;
        }

        _this.initialImageIndex = _this.elements.indexOf(event.currentTarget);

        _this.openImage(event.currentTarget);
      }
    }); // close addEventListener click addEventListener doc

    if (this.options.docClose) {
      this.addEventListener(this.domNodes.wrapper, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], function (event) {
        if (_this.isOpen && event.target === event.currentTarget) {
          _this.close();
        }
      });
    } // disable rightclick


    if (this.options.disableRightClick) {
      this.addEventListener(document.body, 'contextmenu.' + this.eventNamespace, function (event) {
        if (event.target.parentElement.classList.contains("sl-image")) {
          event.preventDefault();
        }
      });
    } // keyboard-control


    if (this.options.enableKeyboard) {
      this.addEventListener(document.body, 'keyup.' + this.eventNamespace, this.throttle(function (event) {
        _this.controlCoordinates.swipeDiff = 0; // keyboard control only if lightbox is open

        if (_this.isAnimating && event.key === 'Escape') {
          _this.currentImage.setAttribute('src', '');

          _this.isAnimating = false;
          return _this.close();
        }

        if (_this.isOpen) {
          event.preventDefault();

          if (event.key === 'Escape') {
            _this.close();
          }

          if (!_this.isAnimating && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) > -1) {
            _this.loadImage(event.key === 'ArrowRight' ? 1 : -1);
          }
        }
      }, this.options.throttleInterval));
    }

    this.addEvents();
  }

  _createClass(SimpleLightbox, [{
    key: "checkPassiveEventsSupport",
    value: function checkPassiveEventsSupport() {
      // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
      // Test via a getter in the options object to see if the passive property is accessed
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
      } catch (e) {}

      return supportsPassive;
    }
  }, {
    key: "createDomNodes",
    value: function createDomNodes() {
      this.domNodes.overlay = document.createElement('div');
      this.domNodes.overlay.classList.add('sl-overlay');
      this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity;
      this.domNodes.closeButton = document.createElement('button');
      this.domNodes.closeButton.classList.add('sl-close');
      this.domNodes.closeButton.innerHTML = this.options.closeText;
      this.domNodes.spinner = document.createElement('div');
      this.domNodes.spinner.classList.add('sl-spinner');
      this.domNodes.spinner.innerHTML = '<div></div>';
      this.domNodes.navigation = document.createElement('div');
      this.domNodes.navigation.classList.add('sl-navigation');
      this.domNodes.navigation.innerHTML = "<button class=\"sl-prev\">".concat(this.options.navText[0], "</button><button class=\"sl-next\">").concat(this.options.navText[1], "</button>");
      this.domNodes.counter = document.createElement('div');
      this.domNodes.counter.classList.add('sl-counter');
      this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>';
      this.domNodes.caption = document.createElement('div');
      this.domNodes.caption.classList.add('sl-caption', 'pos-' + this.options.captionPosition);

      if (this.options.captionClass) {
        this.domNodes.caption.classList.add(this.options.captionClass);
      }

      this.domNodes.image = document.createElement('div');
      this.domNodes.image.classList.add('sl-image');
      this.domNodes.wrapper = document.createElement('div');
      this.domNodes.wrapper.classList.add('sl-wrapper');
      this.domNodes.wrapper.setAttribute('tabindex', -1);
      this.domNodes.wrapper.setAttribute('role', 'dialog');
      this.domNodes.wrapper.setAttribute('aria-hidden', false);

      if (this.options.className) {
        this.domNodes.wrapper.classList.add(this.options.className);
      }

      if (this.options.rtl) {
        this.domNodes.wrapper.classList.add('sl-dir-rtl');
      }
    }
  }, {
    key: "throttle",
    value: function throttle(func, limit) {
      var inThrottle;
      return function () {
        if (!inThrottle) {
          func.apply(this, arguments);
          inThrottle = true;
          setTimeout(function () {
            return inThrottle = false;
          }, limit);
        }
      };
    }
  }, {
    key: "isValidLink",
    value: function isValidLink(element) {
      return !this.options.fileExt || element.getAttribute(this.options.sourceAttr) && new RegExp('(' + this.options.fileExt + ')$', 'i').test(element.getAttribute(this.options.sourceAttr));
    }
  }, {
    key: "calculateTransitionPrefix",
    value: function calculateTransitionPrefix() {
      var s = (document.body || document.documentElement).style;
      return 'transition' in s ? '' : 'WebkitTransition' in s ? '-webkit-' : 'MozTransition' in s ? '-moz-' : 'OTransition' in s ? '-o' : false;
    }
  }, {
    key: "toggleScrollbar",
    value: function toggleScrollbar(type) {
      var scrollbarWidth = 0;
      var fixedElements = [].slice.call(document.querySelectorAll('.' + this.options.fixedClass));

      if (type === 'hide') {
        var fullWindowWidth = window.innerWidth;

        if (!fullWindowWidth) {
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }

        if (document.body.clientWidth < fullWindowWidth || this.isAppleDevice) {
          var scrollDiv = document.createElement('div'),
              paddingRight = parseInt(document.body.style.paddingRight || 0, 10);
          scrollDiv.classList.add('sl-scrollbar-measure');
          document.body.appendChild(scrollDiv);
          scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          document.body.dataset.originalPaddingRight = paddingRight;

          if (scrollbarWidth > 0 || scrollbarWidth == 0 && this.isAppleDevice) {
            document.body.classList.add('hidden-scroll');
            document.body.style.paddingRight = paddingRight + scrollbarWidth + 'px';
            fixedElements.forEach(function (element) {
              var actualPadding = element.style.paddingRight;
              var calculatedPadding = window.getComputedStyle(element)['padding-right'];
              element.dataset.originalPaddingRight = actualPadding;
              element.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
            });
          }
        }
      } else {
        document.body.classList.remove('hidden-scroll');
        document.body.style.paddingRight = document.body.dataset.originalPaddingRight;
        fixedElements.forEach(function (element) {
          var padding = element.dataset.originalPaddingRight;

          if (typeof padding !== 'undefined') {
            element.style.paddingRight = padding;
          }
        });
      }

      return scrollbarWidth;
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      if (!this.isOpen || this.isAnimating || this.isClosing) {
        return false;
      }

      this.isClosing = true;
      var element = this.relatedElements[this.currentImageIndex];
      element.dispatchEvent(new Event('close.simplelightbox'));

      if (this.options.history) {
        this.historyHasChanges = false;

        if (!this.hashReseted) {
          this.resetHash();
        }
      }

      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed);
      this.fadeOut(document.querySelectorAll('.sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter'), this.options.fadeSpeed, function () {
        if (_this2.options.disableScroll) {
          _this2.toggleScrollbar('show');
        }

        if (_this2.options.htmlClass && _this2.options.htmlClass !== '') {
          document.querySelector('html').classList.remove(_this2.options.htmlClass);
        }

        document.body.removeChild(_this2.domNodes.wrapper);
        document.body.removeChild(_this2.domNodes.overlay);
        _this2.domNodes.additionalHtml = null;
        element.dispatchEvent(new Event('closed.simplelightbox'));
        _this2.isClosing = false;
      });
      this.currentImage = null;
      this.isOpen = false;
      this.isAnimating = false; // reset touchcontrol coordinates

      for (var key in this.controlCoordinates) {
        this.controlCoordinates[key] = 0;
      }

      this.controlCoordinates.mousedown = false;
      this.controlCoordinates.zoomed = false;
      this.controlCoordinates.capture = false;
      this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);
      this.controlCoordinates.doubleTapped = false;
    }
  }, {
    key: "hash",
    get: function get() {
      return window.location.hash.substring(1);
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this3 = this;

      var index = this.currentImageIndex,
          length = this.relatedElements.length,
          next = index + 1 < 0 ? length - 1 : index + 1 >= length - 1 ? 0 : index + 1,
          prev = index - 1 < 0 ? length - 1 : index - 1 >= length - 1 ? 0 : index - 1,
          nextImage = new Image(),
          prevImage = new Image();
      nextImage.addEventListener('load', function (event) {
        var src = event.target.getAttribute('src');

        if (_this3.loadedImages.indexOf(src) === -1) {
          //is this condition even required... setting multiple times will not change usage...
          _this3.loadedImages.push(src);
        }

        _this3.relatedElements[index].dispatchEvent(new Event('nextImageLoaded.' + _this3.eventNamespace));
      });
      nextImage.setAttribute('src', this.relatedElements[next].getAttribute(this.options.sourceAttr));
      prevImage.addEventListener('load', function (event) {
        var src = event.target.getAttribute('src');

        if (_this3.loadedImages.indexOf(src) === -1) {
          _this3.loadedImages.push(src);
        }

        _this3.relatedElements[index].dispatchEvent(new Event('prevImageLoaded.' + _this3.eventNamespace));
      });
      prevImage.setAttribute('src', this.relatedElements[prev].getAttribute(this.options.sourceAttr));
    }
  }, {
    key: "loadImage",
    value: function loadImage(direction) {
      var _this4 = this;

      var slideDirection = direction;

      if (this.options.rtl) {
        direction = -direction;
      }

      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event('change.' + this.eventNamespace));
      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'next' : 'prev') + '.' + this.eventNamespace));
      var newIndex = this.currentImageIndex + direction;

      if (this.isAnimating || (newIndex < 0 || newIndex >= this.relatedElements.length) && this.options.loop === false) {
        return false;
      }

      this.currentImageIndex = newIndex < 0 ? this.relatedElements.length - 1 : newIndex > this.relatedElements.length - 1 ? 0 : newIndex;
      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;

      if (this.options.animationSlide) {
        this.slide(this.options.animationSpeed / 1000, -100 * slideDirection - this.controlCoordinates.swipeDiff + 'px');
      }

      this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function () {
        _this4.isAnimating = true;

        if (!_this4.isClosing) {
          setTimeout(function () {
            var element = _this4.relatedElements[_this4.currentImageIndex];

            _this4.currentImage.setAttribute('src', element.getAttribute(_this4.options.sourceAttr));

            if (_this4.loadedImages.indexOf(element.getAttribute(_this4.options.sourceAttr)) === -1) {
              _this4.show(_this4.domNodes.spinner);
            }

            if (_this4.domNodes.image.contains(_this4.domNodes.caption)) {
              _this4.domNodes.image.removeChild(_this4.domNodes.caption);
            }

            _this4.adjustImage(slideDirection);

            if (_this4.options.preloading) _this4.preload();
          }, 100);
        } else {
          _this4.isAnimating = false;
        }
      });
    }
  }, {
    key: "adjustImage",
    value: function adjustImage(direction) {
      var _this5 = this;

      if (!this.currentImage) {
        return false;
      }

      var tmpImage = new Image(),
          windowWidth = window.innerWidth * this.options.widthRatio,
          windowHeight = window.innerHeight * this.options.heightRatio;
      tmpImage.setAttribute('src', this.currentImage.getAttribute('src'));
      this.currentImage.dataset.scale = 1;
      this.currentImage.dataset.translateX = 0;
      this.currentImage.dataset.translateY = 0;
      this.zoomPanElement(0, 0, 1);
      tmpImage.addEventListener('error', function (event) {
        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('error.' + _this5.eventNamespace));

        _this5.isAnimating = false;
        _this5.isOpen = true;
        _this5.domNodes.spinner.style.display = 'none';
        var dirIsDefined = direction === 1 || direction === -1;

        if (_this5.initialImageIndex === _this5.currentImageIndex && dirIsDefined) {
          return _this5.close();
        }

        if (_this5.options.alertError) {
          alert(_this5.options.alertErrorMessage);
        }

        _this5.loadImage(dirIsDefined ? direction : 1);
      });
      tmpImage.addEventListener('load', function (event) {
        if (typeof direction !== 'undefined') {
          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('changed.' + _this5.eventNamespace));

          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'nextDone' : 'prevDone') + '.' + _this5.eventNamespace));
        } // history


        if (_this5.options.history) {
          _this5.updateURL();
        }

        if (_this5.loadedImages.indexOf(_this5.currentImage.getAttribute('src')) === -1) {
          _this5.loadedImages.push(_this5.currentImage.getAttribute('src'));
        }

        var imageWidth = event.target.width,
            imageHeight = event.target.height;

        if (_this5.options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {
          var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
          imageWidth /= ratio;
          imageHeight /= ratio;
        }

        _this5.domNodes.image.style.top = (window.innerHeight - imageHeight) / 2 + 'px';
        _this5.domNodes.image.style.left = (window.innerWidth - imageWidth - _this5.globalScrollbarWidth) / 2 + 'px';
        _this5.domNodes.image.style.width = imageWidth + 'px';
        _this5.domNodes.image.style.height = imageHeight + 'px';
        _this5.domNodes.spinner.style.display = 'none';

        if (_this5.options.focus) {
          _this5.forceFocus();
        }

        _this5.fadeIn(_this5.currentImage, _this5.options.fadeSpeed, function () {
          if (_this5.options.focus) {
            _this5.domNodes.wrapper.focus();
          }
        });

        _this5.isOpen = true;
        var captionContainer, captionText;

        if (typeof _this5.options.captionSelector === 'string') {
          captionContainer = _this5.options.captionSelector === 'self' ? _this5.relatedElements[_this5.currentImageIndex] : _this5.relatedElements[_this5.currentImageIndex].querySelector(_this5.options.captionSelector);
        } else if (typeof _this5.options.captionSelector === 'function') {
          captionContainer = _this5.options.captionSelector(_this5.relatedElements[_this5.currentImageIndex]);
        }

        if (_this5.options.captions && captionContainer) {
          if (_this5.options.captionType === 'data') {
            captionText = captionContainer.dataset[_this5.options.captionsData];
          } else if (_this5.options.captionType === 'text') {
            captionText = captionContainer.innerHTML;
          } else {
            captionText = captionContainer.getAttribute(_this5.options.captionsData);
          }
        }

        if (!_this5.options.loop) {
          if (_this5.currentImageIndex === 0) {
            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-prev'));
          }

          if (_this5.currentImageIndex >= _this5.relatedElements.length - 1) {
            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-next'));
          }

          if (_this5.currentImageIndex > 0) {
            _this5.show(_this5.domNodes.navigation.querySelector('.sl-prev'));
          }

          if (_this5.currentImageIndex < _this5.relatedElements.length - 1) {
            _this5.show(_this5.domNodes.navigation.querySelector('.sl-next'));
          }
        } else {
          if (_this5.relatedElements.length === 1) {
            _this5.hide(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
          } else {
            _this5.show(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
          }
        }

        if (direction === 1 || direction === -1) {
          if (_this5.options.animationSlide) {
            _this5.slide(0, 100 * direction + 'px');

            setTimeout(function () {
              _this5.slide(_this5.options.animationSpeed / 1000, 0 + 'px');
            }, 50);
          }

          _this5.fadeIn(_this5.domNodes.image, _this5.options.fadeSpeed, function () {
            _this5.isAnimating = false;

            _this5.setCaption(captionText, imageWidth);
          });
        } else {
          _this5.isAnimating = false;

          _this5.setCaption(captionText, imageWidth);
        }

        if (_this5.options.additionalHtml && !_this5.domNodes.additionalHtml) {
          _this5.domNodes.additionalHtml = document.createElement('div');

          _this5.domNodes.additionalHtml.classList.add('sl-additional-html');

          _this5.domNodes.additionalHtml.innerHTML = _this5.options.additionalHtml;

          _this5.domNodes.image.appendChild(_this5.domNodes.additionalHtml);
        }
      });
    }
  }, {
    key: "zoomPanElement",
    value: function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {
      this.currentImage.style[this.transitionPrefix + 'transform'] = 'translate(' + targetOffsetX + ',' + targetOffsetY + ') scale(' + targetScale + ')';
    }
  }, {
    key: "minMax",
    value: function minMax(value, min, max) {
      return value < min ? min : value > max ? max : value;
    }
  }, {
    key: "setZoomData",
    value: function setZoomData(initialScale, targetOffsetX, targetOffsetY) {
      this.currentImage.dataset.scale = initialScale;
      this.currentImage.dataset.translateX = targetOffsetX;
      this.currentImage.dataset.translateY = targetOffsetY;
    }
  }, {
    key: "hashchangeHandler",
    value: function hashchangeHandler() {
      if (this.isOpen && this.hash === this.initialLocationHash) {
        this.hashReseted = true;
        this.close();
      }
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this6 = this;

      // resize/responsive
      this.addEventListener(window, 'resize.' + this.eventNamespace, function (event) {
        //this.adjustImage.bind(this)
        if (_this6.isOpen) {
          _this6.adjustImage();
        }
      });
      this.addEventListener(this.domNodes.closeButton, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], this.close.bind(this));

      if (this.options.history) {
        setTimeout(function () {
          _this6.addEventListener(window, 'hashchange.' + _this6.eventNamespace, function (event) {
            if (_this6.isOpen) {
              _this6.hashchangeHandler();
            }
          });
        }, 40);
      }

      this.addEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace, function (event) {
        if (!event.currentTarget.tagName.match(/button/i)) {
          return true;
        }

        event.preventDefault();
        _this6.controlCoordinates.swipeDiff = 0;

        _this6.loadImage(event.currentTarget.classList.contains('sl-next') ? 1 : -1);
      });

      if (this.options.scrollZoom) {
        var scale = 1;
        this.addEventListener(this.domNodes.image, ['mousewheel', 'DOMMouseScroll'], function (event) {
          if (_this6.controlCoordinates.mousedown || _this6.isAnimating || _this6.isClosing || !_this6.isOpen) {
            return true;
          }

          if (_this6.controlCoordinates.containerHeight == 0) {
            _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
            _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
            _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
            _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
            _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
            _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
          }

          event.preventDefault();
          var delta = event.delta || event.wheelDelta;

          if (delta === undefined) {
            //we are on firefox
            delta = event.detail;
          }

          delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency
          // apply zoom

          scale += delta * _this6.options.scrollZoomFactor * scale;
          scale = Math.max(1, Math.min(_this6.options.maxZoom, scale));
          _this6.controlCoordinates.targetScale = scale;
          var scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop;
          _this6.controlCoordinates.pinchOffsetX = event.pageX;
          _this6.controlCoordinates.pinchOffsetY = event.pageY - scrollTopPos || 0; // need to substract the scroll position

          _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
          _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
          _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
          _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
          _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);

          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);

          if (_this6.controlCoordinates.targetScale > 1) {
            _this6.controlCoordinates.zoomed = true;

            if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
              _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
            }
          } else {
            if (_this6.controlCoordinates.initialScale === 1) {
              _this6.controlCoordinates.zoomed = false;

              if (_this6.domNodes.caption.style.display === 'none') {
                _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
              }
            }

            _this6.controlCoordinates.initialPinchDistance = null;
            _this6.controlCoordinates.capture = false;
          }

          _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
          _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
          _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
          _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;

          _this6.setZoomData(_this6.controlCoordinates.targetScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);

          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
        });
      }

      this.addEventListener(this.domNodes.image, ['touchstart.' + this.eventNamespace, 'mousedown.' + this.eventNamespace], function (event) {
        if (event.target.tagName === 'A' && event.type === 'touchstart') {
          return true;
        }

        if (event.type === 'mousedown') {
          event.preventDefault();
          _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
          _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
          _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
          _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
          _this6.controlCoordinates.capture = true;
        } else {
          _this6.controlCoordinates.touchCount = event.touches.length;
          _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
          _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;

          if (_this6.controlCoordinates.touchCount === 1)
            /* Single touch */
            {
              if (!_this6.controlCoordinates.doubleTapped) {
                _this6.controlCoordinates.doubleTapped = true;
                setTimeout(function () {
                  _this6.controlCoordinates.doubleTapped = false;
                }, 300);
              } else {
                _this6.currentImage.classList.add('sl-transition');

                if (!_this6.controlCoordinates.zoomed) {
                  _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;

                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

                  _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

                  if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                  }

                  _this6.controlCoordinates.zoomed = true;
                } else {
                  _this6.controlCoordinates.initialScale = 1;

                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

                  _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

                  _this6.controlCoordinates.zoomed = false;
                }

                setTimeout(function () {
                  if (_this6.currentImage) {
                    _this6.currentImage.classList.remove('sl-transition');
                  }
                }, 200);
                return false;
              }

              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
            } else if (_this6.controlCoordinates.touchCount === 2)
            /* Pinch */
            {
              _this6.controlCoordinates.initialPointerOffsetX2 = event.touches[1].clientX;
              _this6.controlCoordinates.initialPointerOffsetY2 = event.touches[1].clientY;
              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
              _this6.controlCoordinates.pinchOffsetX = (_this6.controlCoordinates.initialPointerOffsetX + _this6.controlCoordinates.initialPointerOffsetX2) / 2;
              _this6.controlCoordinates.pinchOffsetY = (_this6.controlCoordinates.initialPointerOffsetY + _this6.controlCoordinates.initialPointerOffsetY2) / 2;
              _this6.controlCoordinates.initialPinchDistance = Math.sqrt((_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) * (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) + (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2) * (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2));
            }

          _this6.controlCoordinates.capture = true;
        }

        if (_this6.controlCoordinates.mousedown) return true;

        if (_this6.transitionCapable) {
          _this6.controlCoordinates.imageLeft = parseInt(_this6.domNodes.image.style.left, 10);
        }

        _this6.controlCoordinates.mousedown = true;
        _this6.controlCoordinates.swipeDiff = 0;
        _this6.controlCoordinates.swipeYDiff = 0;
        _this6.controlCoordinates.swipeStart = event.pageX || event.touches[0].pageX;
        _this6.controlCoordinates.swipeYStart = event.pageY || event.touches[0].pageY;
        return false;
      });
      this.addEventListener(this.domNodes.image, ['touchmove.' + this.eventNamespace, 'mousemove.' + this.eventNamespace, 'MSPointerMove'], function (event) {
        if (!_this6.controlCoordinates.mousedown) {
          return true;
        }

        if (event.type === 'touchmove') {
          if (_this6.controlCoordinates.capture === false) {
            return false;
          }

          _this6.controlCoordinates.pointerOffsetX = event.touches[0].clientX;
          _this6.controlCoordinates.pointerOffsetY = event.touches[0].clientY;
          _this6.controlCoordinates.touchCount = event.touches.length;
          _this6.controlCoordinates.touchmoveCount++;

          if (_this6.controlCoordinates.touchCount > 1)
            /* Pinch */
            {
              _this6.controlCoordinates.pointerOffsetX2 = event.touches[1].clientX;
              _this6.controlCoordinates.pointerOffsetY2 = event.touches[1].clientY;
              _this6.controlCoordinates.targetPinchDistance = Math.sqrt((_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) * (_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) + (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2) * (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2));

              if (_this6.controlCoordinates.initialPinchDistance === null) {
                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
              }

              if (Math.abs(_this6.controlCoordinates.initialPinchDistance - _this6.controlCoordinates.targetPinchDistance) >= 1) {
                /* Initialize helpers */
                _this6.controlCoordinates.targetScale = _this6.minMax(_this6.controlCoordinates.targetPinchDistance / _this6.controlCoordinates.initialPinchDistance * _this6.controlCoordinates.initialScale, 1, _this6.options.maxZoom);
                _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);

                _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);

                if (_this6.controlCoordinates.targetScale > 1) {
                  _this6.controlCoordinates.zoomed = true;

                  if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                  }
                }

                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
              }
            } else {
            _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
            _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
            _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
            _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
            _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);

            if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
              _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
              _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
            }

            if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
              _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
              _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
            }

            _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);

            _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
          }
        }
        /* Mouse Move implementation */


        if (event.type === 'mousemove' && _this6.controlCoordinates.mousedown) {
          if (event.type == 'touchmove') return true;
          event.preventDefault();
          if (_this6.controlCoordinates.capture === false) return false;
          _this6.controlCoordinates.pointerOffsetX = event.clientX;
          _this6.controlCoordinates.pointerOffsetY = event.clientY;
          _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
          _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
          _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
          _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
          _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);

          if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
            _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
            _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
          }

          if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
            _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
            _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
          }

          _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);

          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
        }

        if (!_this6.controlCoordinates.zoomed) {
          _this6.controlCoordinates.swipeEnd = event.pageX || event.touches[0].pageX;
          _this6.controlCoordinates.swipeYEnd = event.pageY || event.touches[0].pageY;
          _this6.controlCoordinates.swipeDiff = _this6.controlCoordinates.swipeStart - _this6.controlCoordinates.swipeEnd;
          _this6.controlCoordinates.swipeYDiff = _this6.controlCoordinates.swipeYStart - _this6.controlCoordinates.swipeYEnd;

          if (_this6.options.animationSlide) {
            _this6.slide(0, -_this6.controlCoordinates.swipeDiff + 'px');
          }
        }
      });
      this.addEventListener(this.domNodes.image, ['touchend.' + this.eventNamespace, 'mouseup.' + this.eventNamespace, 'touchcancel.' + this.eventNamespace, 'mouseleave.' + this.eventNamespace, 'pointerup', 'pointercancel', 'MSPointerUp', 'MSPointerCancel'], function (event) {
        if (_this6.isTouchDevice && event.type === 'touchend') {
          _this6.controlCoordinates.touchCount = event.touches.length;

          if (_this6.controlCoordinates.touchCount === 0)
            /* No touch */
            {
              /* Set attributes */
              if (_this6.currentImage) {
                _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
              }

              if (_this6.controlCoordinates.initialScale === 1) {
                _this6.controlCoordinates.zoomed = false;

                if (_this6.domNodes.caption.style.display === 'none') {
                  _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                }
              }

              _this6.controlCoordinates.initialPinchDistance = null;
              _this6.controlCoordinates.capture = false;
            } else if (_this6.controlCoordinates.touchCount === 1)
            /* Single touch */
            {
              _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
              _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
            } else if (_this6.controlCoordinates.touchCount > 1)
            /* Pinch */
            {
              _this6.controlCoordinates.initialPinchDistance = null;
            }
        }

        if (_this6.controlCoordinates.mousedown) {
          _this6.controlCoordinates.mousedown = false;
          var possibleDir = true;

          if (!_this6.options.loop) {
            if (_this6.currentImageIndex === 0 && _this6.controlCoordinates.swipeDiff < 0) {
              possibleDir = false;
            }

            if (_this6.currentImageIndex >= _this6.relatedElements.length - 1 && _this6.controlCoordinates.swipeDiff > 0) {
              possibleDir = false;
            }
          }

          if (Math.abs(_this6.controlCoordinates.swipeDiff) > _this6.options.swipeTolerance && possibleDir) {
            _this6.loadImage(_this6.controlCoordinates.swipeDiff > 0 ? 1 : -1);
          } else if (_this6.options.animationSlide) {
            _this6.slide(_this6.options.animationSpeed / 1000, 0 + 'px');
          }

          if (_this6.options.swipeClose && Math.abs(_this6.controlCoordinates.swipeYDiff) > 50 && Math.abs(_this6.controlCoordinates.swipeDiff) < _this6.options.swipeTolerance) {
            _this6.close();
          }
        }
      });
      this.addEventListener(this.domNodes.image, ['dblclick'], function (event) {
        if (_this6.isTouchDevice) return;
        _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
        _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;

        _this6.currentImage.classList.add('sl-transition');

        if (!_this6.controlCoordinates.zoomed) {
          _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;

          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

          _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

          if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {
            _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
          }

          _this6.controlCoordinates.zoomed = true;
        } else {
          _this6.controlCoordinates.initialScale = 1;

          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

          _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

          _this6.controlCoordinates.zoomed = false;

          if (_this6.domNodes.caption.style.display === 'none') {
            _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
          }
        }

        setTimeout(function () {
          if (_this6.currentImage) {
            _this6.currentImage.classList.remove('sl-transition');

            _this6.currentImage.style[_this6.transitionPrefix + 'transform-origin'] = null;
          }
        }, 200);
        _this6.controlCoordinates.capture = true;
        return false;
      });
    }
  }, {
    key: "getDimensions",
    value: function getDimensions(element) {
      var styles = window.getComputedStyle(element),
          height = element.offsetHeight,
          width = element.offsetWidth,
          borderTopWidth = parseFloat(styles.borderTopWidth),
          borderBottomWidth = parseFloat(styles.borderBottomWidth),
          paddingTop = parseFloat(styles.paddingTop),
          paddingBottom = parseFloat(styles.paddingBottom),
          borderLeftWidth = parseFloat(styles.borderLeftWidth),
          borderRightWidth = parseFloat(styles.borderRightWidth),
          paddingLeft = parseFloat(styles.paddingLeft),
          paddingRight = parseFloat(styles.paddingRight);
      return {
        height: height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom,
        width: width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight
      };
    }
  }, {
    key: "updateHash",
    value: function updateHash() {
      var newHash = 'pid=' + (this.currentImageIndex + 1),
          newURL = window.location.href.split('#')[0] + '#' + newHash;
      this.hashReseted = false;

      if (this.pushStateSupport) {
        window.history[this.historyHasChanges ? 'replaceState' : 'pushState']('', document.title, newURL);
      } else {
        // what is the browser target of this?
        if (this.historyHasChanges) {
          window.location.replace(newURL);
        } else {
          window.location.hash = newHash;
        }
      }

      if (!this.historyHasChanges) {
        this.urlChangedOnce = true;
      }

      this.historyHasChanges = true;
    }
  }, {
    key: "resetHash",
    value: function resetHash() {
      this.hashReseted = true;

      if (this.urlChangedOnce) {
        history.back();
      } else {
        if (this.pushStateSupport) {
          history.pushState('', document.title, window.location.pathname + window.location.search);
        } else {
          window.location.hash = '';
        }
      } //
      //in case an history operation is still pending


      clearTimeout(this.historyUpdateTimeout);
    }
  }, {
    key: "updateURL",
    value: function updateURL() {
      clearTimeout(this.historyUpdateTimeout);

      if (!this.historyHasChanges) {
        this.updateHash(); // first time
      } else {
        this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800);
      }
    }
  }, {
    key: "setCaption",
    value: function setCaption(captionText, imageWidth) {
      var _this7 = this;

      if (this.options.captions && captionText && captionText !== '' && typeof captionText !== "undefined") {
        this.hide(this.domNodes.caption);
        this.domNodes.caption.style.width = imageWidth + 'px';
        this.domNodes.caption.innerHTML = captionText;
        this.domNodes.image.appendChild(this.domNodes.caption);
        setTimeout(function () {
          _this7.fadeIn(_this7.domNodes.caption, _this7.options.fadeSpeed);
        }, this.options.captionDelay);
      }
    }
  }, {
    key: "slide",
    value: function slide(speed, pos) {
      if (!this.transitionCapable) {
        return this.domNodes.image.style.left = pos;
      }

      this.domNodes.image.style[this.transitionPrefix + 'transform'] = 'translateX(' + pos + ')';
      this.domNodes.image.style[this.transitionPrefix + 'transition'] = this.transitionPrefix + 'transform ' + speed + 's linear';
    }
  }, {
    key: "getRelated",
    value: function getRelated(rel) {
      var elems;

      if (rel && rel !== false && rel !== 'nofollow') {
        elems = Array.from(this.elements).filter(function (element) {
          return element.getAttribute('rel') === rel;
        });
      } else {
        elems = this.elements;
      }

      return elems;
    }
  }, {
    key: "openImage",
    value: function openImage(element) {
      var _this8 = this;

      element.dispatchEvent(new Event('show.' + this.eventNamespace));

      if (this.options.disableScroll) {
        this.globalScrollbarWidth = this.toggleScrollbar('hide');
      }

      if (this.options.htmlClass && this.options.htmlClass !== '') {
        document.querySelector('html').classList.add(this.options.htmlClass);
      }

      document.body.appendChild(this.domNodes.wrapper);
      this.domNodes.wrapper.appendChild(this.domNodes.image);

      if (this.options.overlay) {
        document.body.appendChild(this.domNodes.overlay);
      }

      this.relatedElements = this.getRelated(element.rel);

      if (this.options.showCounter) {
        if (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter)) {
          this.domNodes.wrapper.removeChild(this.domNodes.counter);
        } else if (this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter)) {
          this.domNodes.wrapper.appendChild(this.domNodes.counter);
        }
      }

      this.isAnimating = true;
      this.currentImageIndex = this.relatedElements.indexOf(element);
      var targetURL = element.getAttribute(this.options.sourceAttr);
      this.currentImage = document.createElement('img');
      this.currentImage.style.display = 'none';
      this.currentImage.setAttribute('src', targetURL);
      this.currentImage.dataset.scale = 1;
      this.currentImage.dataset.translateX = 0;
      this.currentImage.dataset.translateY = 0;

      if (this.loadedImages.indexOf(targetURL) === -1) {
        this.loadedImages.push(targetURL);
      }

      this.domNodes.image.innerHTML = '';
      this.domNodes.image.setAttribute('style', '');
      this.domNodes.image.appendChild(this.currentImage);
      this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);
      this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton], this.options.fadeSpeed);
      this.show(this.domNodes.spinner);
      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;
      this.domNodes.counter.querySelector('.sl-total').innerHTML = this.relatedElements.length;
      this.adjustImage();

      if (this.options.preloading) {
        this.preload();
      }

      setTimeout(function () {
        element.dispatchEvent(new Event('shown.' + _this8.eventNamespace));
      }, this.options.animationSpeed);
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this9 = this;

      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.addEventListener(document, 'focusin.' + this.eventNamespace, function (event) {
        if (document !== event.target && _this9.domNodes.wrapper !== event.target && !_this9.domNodes.wrapper.contains(event.target)) {
          _this9.domNodes.wrapper.focus();
        }
      });
    } // utility

  }, {
    key: "addEventListener",
    value: function addEventListener(elements, events, callback, opts) {
      elements = this.wrap(elements);
      events = this.wrap(events);

      var _iterator = _createForOfIteratorHelper(elements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;

          if (!element.namespaces) {
            element.namespaces = {};
          } // save the namespaces addEventListener the DOM element itself


          var _iterator2 = _createForOfIteratorHelper(events),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var event = _step2.value;
              var options = opts || false;
              var needsPassiveFix = ['touchstart', 'touchmove'].indexOf(event.split('.')[0]) >= 0;

              if (needsPassiveFix && this.isPassiveEventsSupported) {
                if (_typeof(options) === 'object') {
                  options.passive = true;
                } else {
                  options = {
                    passive: true
                  };
                }
              }

              element.namespaces[event] = callback;
              element.addEventListener(event.split('.')[0], callback, options);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(elements, events) {
      elements = this.wrap(elements);
      events = this.wrap(events);

      var _iterator3 = _createForOfIteratorHelper(elements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;

          var _iterator4 = _createForOfIteratorHelper(events),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var event = _step4.value;

              if (element.namespaces && element.namespaces[event]) {
                element.removeEventListener(event.split('.')[0], element.namespaces[event]);
                delete element.namespaces[event];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(elements, duration, callback) {
      var _this10 = this;

      elements = this.wrap(elements);

      var _iterator5 = _createForOfIteratorHelper(elements),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var element = _step5.value;
          element.style.opacity = parseFloat(element) || window.getComputedStyle(element).getPropertyValue("opacity");
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      this.isFadeIn = false;

      var step = 16.66666 / (duration || this.options.fadeSpeed),
          fade = function fade() {
        var currentOpacity = parseFloat(elements[0].style.opacity);

        if ((currentOpacity -= step) < 0) {
          var _iterator6 = _createForOfIteratorHelper(elements),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var element = _step6.value;
              element.style.display = "none"; // element.style.opacity = '';

              element.style.opacity = 1;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          callback && callback.call(_this10, elements);
        } else {
          var _iterator7 = _createForOfIteratorHelper(elements),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _element = _step7.value;
              _element.style.opacity = currentOpacity;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          requestAnimationFrame(fade);
        }
      };

      fade();
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(elements, duration, callback, display) {
      var _this11 = this;

      elements = this.wrap(elements);

      var _iterator8 = _createForOfIteratorHelper(elements),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var element = _step8.value;
          element.style.opacity = 0;
          element.style.display = display || "block";
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.isFadeIn = true;

      var opacityTarget = parseFloat(elements[0].dataset.opacityTarget || 1),
          step = 16.66666 * opacityTarget / (duration || this.options.fadeSpeed),
          fade = function fade() {
        var currentOpacity = parseFloat(elements[0].style.opacity);

        if (!((currentOpacity += step) > opacityTarget)) {
          var _iterator9 = _createForOfIteratorHelper(elements),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var element = _step9.value;
              element.style.opacity = currentOpacity;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          if (!_this11.isFadeIn) return;
          requestAnimationFrame(fade);
        } else {
          var _iterator10 = _createForOfIteratorHelper(elements),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _element2 = _step10.value;
              _element2.style.opacity = opacityTarget;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          callback && callback.call(_this11, elements);
        }
      };

      fade();
    }
  }, {
    key: "hide",
    value: function hide(elements) {
      elements = this.wrap(elements);

      var _iterator11 = _createForOfIteratorHelper(elements),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var element = _step11.value;

          if (element.style.display != 'none') {
            element.dataset.initialDisplay = element.style.display;
          }

          element.style.display = 'none';
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "show",
    value: function show(elements, display) {
      elements = this.wrap(elements);

      var _iterator12 = _createForOfIteratorHelper(elements),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var element = _step12.value;
          element.style.display = element.dataset.initialDisplay || display || 'block';
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }, {
    key: "wrap",
    value: function wrap(input) {
      return typeof input[Symbol.iterator] === 'function' && typeof input !== 'string' ? input : [input];
    }
  }, {
    key: "on",
    value: function on(events, callback) {
      events = this.wrap(events);

      var _iterator13 = _createForOfIteratorHelper(this.elements),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var element = _step13.value;

          if (!element.fullyNamespacedEvents) {
            element.fullyNamespacedEvents = {};
          }

          var _iterator14 = _createForOfIteratorHelper(events),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var event = _step14.value;
              element.fullyNamespacedEvents[event] = callback;
              element.addEventListener(event, callback);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(events) {
      events = this.wrap(events);

      var _iterator15 = _createForOfIteratorHelper(this.elements),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var element = _step15.value;

          var _iterator16 = _createForOfIteratorHelper(events),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var event = _step16.value;

              if (typeof element.fullyNamespacedEvents !== 'undefined' && event in element.fullyNamespacedEvents) {
                element.removeEventListener(event, element.fullyNamespacedEvents[event]);
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return this;
    } // api

  }, {
    key: "open",
    value: function open(elem) {
      elem = elem || this.elements[0];

      if (typeof jQuery !== "undefined" && elem instanceof jQuery) {
        elem = elem.get(0);
      }

      this.initialImageIndex = this.elements.indexOf(elem);

      if (this.initialImageIndex > -1) {
        this.openImage(elem);
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.loadImage(1);
    }
  }, {
    key: "prev",
    value: function prev() {
      this.loadImage(-1);
    } // get some useful data

  }, {
    key: "getLighboxData",
    value: function getLighboxData() {
      return {
        currentImageIndex: this.currentImageIndex,
        currentImage: this.currentImage,
        globalScrollbarWidth: this.globalScrollbarWidth
      };
    } //close is exposed anyways..

  }, {
    key: "destroy",
    value: function destroy() {
      //remove all custom event listeners from elements
      this.off(['close.' + this.eventNamespace, 'closed.' + this.eventNamespace, 'nextImageLoaded.' + this.eventNamespace, 'prevImageLoaded.' + this.eventNamespace, 'change.' + this.eventNamespace, 'nextDone.' + this.eventNamespace, 'prevDone.' + this.eventNamespace, 'error.' + this.eventNamespace, 'changed.' + this.eventNamespace, 'next.' + this.eventNamespace, 'prev.' + this.eventNamespace, 'show.' + this.eventNamespace, 'shown.' + this.eventNamespace]);
      this.removeEventListener(this.elements, 'click.' + this.eventNamespace);
      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.removeEventListener(document.body, 'contextmenu.' + this.eventNamespace);
      this.removeEventListener(document.body, 'keyup.' + this.eventNamespace);
      this.removeEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace);
      this.removeEventListener(this.domNodes.closeButton, 'click.' + this.eventNamespace);
      this.removeEventListener(window, 'resize.' + this.eventNamespace);
      this.removeEventListener(window, 'hashchange.' + this.eventNamespace);
      this.close();

      if (this.isOpen) {
        document.body.removeChild(this.domNodes.wrapper);
        document.body.removeChild(this.domNodes.overlay);
      }

      this.elements = null;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.initialSelector) {
        throw 'refreshing only works when you initialize using a selector!';
      }

      var options = this.options,
          selector = this.initialSelector;
      this.destroy();
      this.constructor(selector, options);
      return this;
    }
  }]);

  return SimpleLightbox;
}();

var _default = SimpleLightbox;
exports["default"] = _default;
global.SimpleLightbox = SimpleLightbox;

}).call(this)}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);


/***/ }),

/***/ "./www/assets/js/support.js":
/*!**********************************!*\
  !*** ./www/assets/js/support.js ***!
  \**********************************/
/***/ (() => {

var uint;

$(function () {

    // pop-up banner
    setTimeout(function () {
        $('#popup').css('display', 'flex');
    }, 8000);

    $('.popOverlay .pop-end').on('click', function () {
        $('.popOverlay').hide();
        $.nette.ajax({
            url: '?do=popUpSeen'
        });
    });

    $(document).on('click', '#acceptCookies', function (e){
        $('#cookie').hide(300);
        $.nette.ajax({
            url: '?do=SetCookieAgreement'
        });
    });
    $(document).on('click', '#cookie span', function (){
        $('#cookie').hide(300);
    });

    // SLIDER BANNER
    // window.addEventListener('wheel', { passive: false });

    if ($('.iosSlider .slider .item').length>=1)
    {
        $('.iosSlider').iosSlider({
            snapToChildren: true,
            infiniteSlider: true,
            desktopClickDrag: true,
            navNextSelector: $('#topSlide .next'),
            navPrevSelector: $('#topSlide .prev'),
            autoSlide: true,
            autoSlideTimer: 9000,
            onSlideChange: schange
        });

        $('#topSlide .item').fadeIn(200);
    }

    if ($('.iosSlider .slider .item').length > 1) $('#topSlide .next, #topSlide .prev').fadeIn(200);

    function schange(arg)
    {
        if (arg.currentSlideObject.hasClass('video')) $(arg.currentSlideObject).find('video').get(0).play();
    }

    let width = $(document).width();
    // zobrazeni carSelectoru pri mobilnim zobrazeni
    // $(document).on('click', '#frm-carSelector-carSelector input', function () {
    //     if (width <= 480){
    //         $('#imark, #imodel, #imotor').prop("readonly", true);
    //     }
    // })


    //
    // VYBER ZNACKA | MODEL | MOTOR
    //

    //zobrazeni prvku carSelectoru
    $(document).on('focus','#imark',function(){
        $('#mark').slideDown(300);
        if (width <= 480){
            $('html, body').animate({ scrollTop: $("#imark").offset().top }, 250);
            $('#model, #motor, #imodel, #imotor').hide();
        }
    });
    $(document).on('click','#imark',function(){
        $('#model, #motor').hide();
    });

    $(document).on('focus','#imodel',function(){
        $('#model').slideDown(300);
        $('#motor, #mark').slideUp(300);
        if (width <= 480){
            $('html, body').animate({ scrollTop: $("#imodel").offset().top }, 250);
            $('#imotor').hide();
        }
    });
    $(document).on('blur', '#imodel', function (){
        if (width <= 480) {
            $('#imotor').show();
        }
    });
    $(document).on('focus','#imotor',function(){
        $('#motor').slideDown(300);
        $('#form2').addClass('loading').removeClass('shown');
        $('#frm-calculator-calculator :input').prop('disabled', true);
    });
    $(document).on('blur', '#imotor', function (){
        $('#motor').slideUp(300);
    });

    let $mb_to;

    // Výběr značky
    $(document).on('click', '.znackaLink', function (e) {
        // Tady tímto řádkem zakážu aby to udělalo default akci presmerovani
        e.preventDefault();

        $('#sel').addClass('loading');
        $('#motor').prop('disabled',true).val('').addClass('dis');

        // potrebuji snimat odkaz, nejcasteji se to dela data atributem
        let value = $(this).attr('data-key');
        let title = $(this).attr('title');


        setManufacturer(value, title);

        console.log(value, title, '-> VYBER znacky');
    });

    // vyhledávání značky
    $(document).on('keyup', '#imark', function (e) {
        e.preventDefault();
        let value = $(this).val();
        clearTimeout($mb_to);

        // Enter
        if (e.keyCode == 13 && value){
            let s = value.toUpperCase();
            let id = false;
            let title = false;
            let last = false;
            let lastTitle = false;
            let i = 0;
            $('.znackaLink').each(function() {
                let op = $(this).attr('data-key');
                let optitle = $(this).attr('title');
                if (optitle !== "") {
                    i++;
                    if (s === optitle) {
                        title = optitle;
                        id = op;
                        return true;
                    }
                    last = op;
                    lastTitle = title;
                }
            });
            console.log(id);
            console.log(i);
            console.log(title);
            if (id || i === 1) {
                if (!id) {
                    id = last;
                }
                if (!title) {
                    title = lastTitle;
                }
                console.log(title);
                //$('#imark').val(id);
                $('#imodel').val('');
                $('#imotor').val('');
                //$('#mark').val(id).change();

                return setManufacturer(id, title);
                //return true;

            }
        }

        $('#imark').addClass('loading');

        $mb_to = setTimeout(function (){

            $.nette.ajax({
                url: '?do=carSelector-searchManuf',
                data: {'carSelector-search': value}
            }).then(function (){
                $('#imark').removeClass('loading');
                $('#mark').show();
            });
        }, 300)
    });
    // Výběr modelu
    $(document).on('click', '#model a.modelLink', function (e) {
        e.preventDefault();
        $('#sel').addClass('loading');
        let value = $(this).attr('data-key');
        let title = $(this).attr('title');
        $('#imotor').focus();
        $('html, body').animate({ scrollTop: $("#imotor").offset().top }, 250);

        $.nette.ajax({
            url: '?do=carSelector-setModel',
            data: {'carSelector-modId': value}
        }).then(function (payload) { // toto je tzv promis, ktery se vykona az jakmile dobehne ta ajax Akce
            $('#model').slideUp(300);
            $('#motor').slideDown(300);
            $('#imodel').val(title);
            $('#sel').removeClass('loading');
            $('#form2').removeClass('shown');
            if (payload && payload.vehicleId !== undefined) {
                $('#form2').addClass('shown');
                $('#motor a.motorLink').click();
            }
        });
        console.log(value, title, '-> VYBER modelu');
    });
    // vyhledávání modelu
    $(document).on('keyup', '#imodel', function () {


        $('#imodel').addClass('loading');
        let manId = $('#manIdValue').text();
        let search = $(this).val();

        clearTimeout($mb_to);
        $mb_to = setTimeout(function (){


            $.nette.ajax({
                url: '?do=carSelector-setManufacturer',
                data: {'carSelector-manId': manId, 'carSelector-search': search}
            }).then(function () {
                console.log(manId, search);
                $('#imodel').removeClass('loading');
                if ($('#model').is(":hidden")){
                    $('#model').show();
                }
                $('#imodel').val(search).focus();
            });
        }, 300)
    });
    // Náhled vozidla u modelu
    $(document).on('hover', '#model .all > div', function (){
        $('#model .all figure').hide();
        $(this).children().show();
    })

    // vyhledavani v inputu motoru
    $(document).on('keyup', '#imotor', function () {

        $('#imotor').addClass('loading');

        let modId = $('#modIdValue').text();
        let search = $(this).val();
        console.log(modId, search);

        clearTimeout($mb_to);
        $mb_to = setTimeout(function() {

            $.nette.ajax({
                url: '?do=carSelector-setModel',
                data: { 'carSelector-modId': modId, 'carSelector-search': search }
            }).then(function() {
                $('#imotor').removeClass('loading');
                if ($('#motor').is(":hidden")) {
                    $('#motor').show();
                }
                $('#imotor').val(search).focus();
            });
        }, 300)
    });
    // Výběr motoru
    $(document).on('click', '#motor a.motorLink', function(e) {
        e.preventDefault();
        let value = $(this).attr('data-key');
        let title = $(this).attr('title');

        $('#imotor').val(title);
        $('#motor').slideUp(300);
        $('#sel').addClass('loading');

        $.nette.ajax({
            url: '?do=carSelector-saveData',
            data: { 'carSelector-vehicleId': value }
        }).then(function() {
            $('#imotor').val(title);
            $('html, body').animate({ scrollTop: $("#form2").offset().top }, 250);
            $('#pref-0, #koule-0, #el-0, #redukce-0').prop('checked', true);

            $('#frm-calculator-calculator :input').prop('disabled', false);
            $('#frm-orderForm-orderForm :input').prop('disabled', false);
            $('#redukce-0 , #redukce-1').prop('disabled', true);
            $('#sel').removeClass('loading');
            $('#form2').removeClass('loading').addClass('shown');
            $('#cenaPevne7').show();
        })
        console.log(value, title, '-> VYBER motoru');
    });


    // Komfortni vybava
    $(document).on('click', '#frm-carSelector-carSelector-komfort', function() {
        $('#form2').removeClass('shown');
        $('#sel').addClass('loading');

        let value = 0;
        if ($('#frm-carSelector-carSelector-komfort').is(':checked')) {
            value = 1;
        }
        $('#form2').addClass('loading');
        $.nette.ajax({
            url: '?do=carSelector-setComfort',
            data: { 'carSelector-comfort': value }
        }).then(function() {
            $('#cenaPevne7').show();
            $('#pref-0, #koule-0, #el-0, #redukce-0').prop('checked', true);
            $('#form2, #sel').addClass('shown').removeClass('loading');
        })
    });

    // KONFIGURATOR S KALKULACKOU
    $(document).on('click', '.radios div', function() {
        // prvni schovam vsechny ceny
        $('#snippet-calculator-summaryBox > div').hide();


        // vyber a zobrazeni spravne ceny

        // CENA?
        if ($('#pref-0').is(':checked')) {

            // pevne?
            if ($('#koule-0').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#cenaPevne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#cenaPevne13').show();
                }
            }
            // odnimatelne?
            if ($('#koule-1').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#cenaOdnimatelne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#cenaOdnimatelne13').show();
                }
            }
        }
        // KVALITA?
        if ($('#pref-1').is(':checked')) {

            // pevne?
            if ($('#koule-0').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#kvalitaPevne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#kvalitaPevne13').show();
                }
            }
            // odnimatelne?
            if ($('#koule-1').is(':checked')) {
                // 7pin?
                if ($('#el-0').is(':checked')) {
                    $('#kvalitaOdnimatelne7').show();
                }
                // 13pin?
                if ($('#el-1').is(':checked')) {
                    $('#kvalitaOdnimatelne13').show();
                }
            }
        }
    })

    // zasuvka prepina redukci
    $(document).on('click', '.el', function() {
        if ($('#el-1').is(':checked')) {
            $('#redukce-1').prop('checked', true);
        } else {
            $('#redukce-0').prop('checked', true);
        }
    });


    // odeslani vyplnenych dat po zadani mailu / prefinal request
    $(document).on('blur', '#frm-orderForm-orderForm-email', function() {
        // zjistim co vse vyplnil v kontaktu
        let email = document.querySelector('#frm-orderForm-orderForm-email').value;
        console.log(email);
        // handlerem poslu data k dalsimu zpracovani
        $.nette.ajax({
            url: '?do=orderForm-sendMail',
            data: { 'orderForm-email': email }
        });
    })

    // zablokovani odeslani formulare enterem
    $('#form2').on('keyup keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });


    // kontrola jestli jsou vyplneny povinne udaje, nastylovani
    $('#form2 .cta').click(function(e) {

        e.preventDefault();

        // zjistim jestli je vyplneny email
        let mailId = $('#frm-orderForm-orderForm-email');
        let validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let mail = mailId.val();

        if (!mail.match(validRegex)) {
            mailId.parent().addClass('error');
            $('.inputs p.complete').show();
            mailId.focus();
        } else {
            mailId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }

        // zjistim jestli je vyplneny telefon
        let telId = $('#frm-orderForm-orderForm-tel');
        let tel = telId.val();
        if (!tel || tel.length === 0) {
            telId.parent().addClass('error');
            $('.inputs p.complete').show();
            telId.focus();
        } else {
            telId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }

        // potvrzeno GDPR?
        let gdpr = 0;
        if ($('#frm-orderForm-orderForm-gdpr').is(':checked')) {
            gdpr = 1;
        }
        if (gdpr === 0) {
            $('.poptavka span > p').show().addClass('error');
            $('.inputs p.complete').show();
        } else {
            $('.poptavka span > p').removeClass('error');
            $('.poptavka span > p.hidden').hide();

        }
        let vehicleId = $('#imotor').val();

        // vytahnu info o zvolenych preferencich
        value = get_selected_radios_array();
        param = JSON.stringify(value);
        $.nette.ajax({
            url: '?do=calculator-setPref',
            data: { 'calculator-preference': param }
        }).then(function () {
            // pro odeslani pozadavku musi byt vyplnen email, telefon a zvolen motor
            if (mail && tel) {
                $('.inputs p.complete').hide();
                if (gdpr === 1) {
                    if (vehicleId) {
                        $('#form2 .cta input').prop('disabled', true);
                        $('#frm-orderForm-orderForm').addClass('loading').submit();
                        $('.final_loader').stop(true).delay(1000).fadeIn(200);
                    }
                }
            }
        });
    });



    // kontrola jestli jsou vyplneny povinne udaje v kontaktnim formulari
    $('#frm-contactForm .cta').click(function(e) {
        e.preventDefault();

        // zjistim jestli je vyplneny email
        let mailId = $('#frm-contactForm-email');
        let mail = mailId.val().toLowerCase();
        console.log(mail);
        let validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!mail.match(validRegex)) {
            mailId.parent().addClass('error');
            $('.inputs p.complete').show();
            mailId.focus();
        } else {
            mailId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }
        console.log(mail);

        // zjistim jestli je vyplneny telefon
        let telId = $('#frm-contactForm-tel');
        let tel = telId.val();
        if (!tel || tel.length === 0) {
            telId.parent().addClass('error');
            $('.inputs p.complete').show();
            telId.focus();
        } else {
            telId.parent().removeClass('error');
            $('.inputs p.complete').hide();
        }

        // potvrzeno GDPR?
        let gdpr = 0;
        if ($('#frm-contactForm-gdpr').is(':checked')) {
            gdpr = 1;
        }
        if (gdpr === 0) {
            $('.poptavka span > p').show().addClass('error');
            $('.inputs p.complete').show();
        } else {
            $('.poptavka span > p').removeClass('error');
            $('.poptavka span > p.hidden').hide();

        }

        if (mail && tel) {
            $('.inputs p.complete').hide();
            if (gdpr === 1) {
                $('#frm-contactForm').addClass('loading').submit();
                $('.final_loader').stop(true).delay(1000).fadeIn(200);
            }
        }
    });


    // navbar
    $('#navmail').on('hover', function() {
        $('.navmail').toggleClass('shown');
    });

    // nosice galerie
        new SimpleLightbox('.simpleGallery a', {htmlClass: 'd-block'});





    // FUNKCE

    // vytahuju hodnoty vsech radio buttonu na strance
    function get_selected_radios_array() {
        var ch_list = Array();
        $("input:radio[type=radio]:checked").each(function() { ch_list.push($(this).val()); });
        return ch_list;
    }

    // zvoleni znacky v carSelectoru
    function setManufacturer(value, title) {
        $.nette.ajax({
            url: '?do=carSelector-setManufacturer',
            data: {'carSelector-manId': value}
        }).then(function () { // toto je tzv promis, ktery se vykona az jakmile dobehne ta ajax Akce
            $('#imark').val(title);
            $('html, body').animate({scrollTop: $("#imark").offset().top}, 250);
            $('#mark').hide();
            $('#model').show();
            $('#sel').removeClass('loading');
            $('#form2').removeClass('shown');
            $('#imodel').focus();
        });
    }

})

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./www/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/base.css */ "./www/assets/css/base.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/home.css */ "./www/assets/css/home.css");
/* harmony import */ var _css_slides_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/slides.css */ "./www/assets/css/slides.css");
/* harmony import */ var _css_map_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/map.css */ "./www/assets/css/map.css");
/* harmony import */ var _css_langMenu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/langMenu.css */ "./www/assets/css/langMenu.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/navbar.css */ "./www/assets/css/navbar.css");
/* harmony import */ var _css_cookie_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/cookie.css */ "./www/assets/css/cookie.css");
/* harmony import */ var _css_simple_lightbox_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/simple-lightbox.css */ "./www/assets/css/simple-lightbox.css");
/* harmony import */ var _css_fa_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/fa.css */ "./www/assets/css/fa.css");
/* harmony import */ var _unpkg_flickity_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../unpkg/flickity.css */ "./www/assets/unpkg/flickity.css");
/* harmony import */ var _unpkg_fullscreen_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../unpkg/fullscreen.css */ "./www/assets/unpkg/fullscreen.css");
/* harmony import */ var _jquery_iosslider_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jquery.iosslider.min */ "./www/assets/js/jquery.iosslider.min.js");
/* harmony import */ var _jquery_iosslider_min__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_jquery_iosslider_min__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mmenu */ "./www/assets/js/mmenu.js");
/* harmony import */ var _mmenu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mmenu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _simple_lightbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simple-lightbox */ "./www/assets/js/simple-lightbox.js");
/* harmony import */ var _simple_lightbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_simple_lightbox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support */ "./www/assets/js/support.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_support__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _nette_ajax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nette.ajax */ "./www/assets/js/nette.ajax.js");
/* harmony import */ var _nette_ajax__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_nette_ajax__WEBPACK_IMPORTED_MODULE_15__);

    // import 'lodash';

    
    
    
    
    
    
    
    
    
    
    



    
    
    
    
    





})();

/******/ })()
;
//# sourceMappingURL=main.js.map