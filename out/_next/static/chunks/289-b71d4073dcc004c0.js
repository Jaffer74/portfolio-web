(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{1989:(e,t,i)=>{"use strict";let o,n,s,r,a;i.r(t),i.d(t,{jarallax:()=>M,jarallaxElement:()=>D,jarallaxVideo:()=>_});var l={type:"scroll",speed:.5,containerClass:"jarallax-container",imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null,videoClass:"jarallax-video",videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,disableVideo:!1,onVideoInsert:null,onVideoWorkerInit:null};"undefined"!=typeof window?o=window:void 0!==i.g?o=i.g:"undefined"!=typeof self?o=self:o={};var p=o;let{navigator:u}=p,d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent);function c(){n=p.innerWidth||document.documentElement.clientWidth,d?(!r&&document.body&&((r=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(r)),s=(r?r.clientHeight:0)||p.innerHeight||document.documentElement.clientHeight):s=p.innerHeight||document.documentElement.clientHeight}function h(){return{width:n,height:s}}c(),p.addEventListener("resize",c),p.addEventListener("orientationchange",c),p.addEventListener("load",c),function(e){"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener("DOMContentLoaded",e,{capture:!0,once:!0,passive:!0})}(()=>{c()});let m=[];function f(){if(!m.length)return;let{width:e,height:t}=h();m.forEach((i,o)=>{let{instance:n,oldData:s}=i;if(!n.isVisible())return;let r=n.$item.getBoundingClientRect(),a={width:r.width,height:r.height,top:r.top,bottom:r.bottom,wndW:e,wndH:t},l=!s||s.wndW!==a.wndW||s.wndH!==a.wndH||s.width!==a.width||s.height!==a.height,p=l||!s||s.top!==a.top||s.bottom!==a.bottom;m[o].oldData=a,l&&n.onResize(),p&&n.onScroll()}),p.requestAnimationFrame(f)}let g=new p.IntersectionObserver(e=>{e.forEach(e=>{e.target.jarallax.isElementInViewport=e.isIntersecting})},{rootMargin:"50px"}),{navigator:y}=p,v=0;class b{constructor(e,t){let i=this;i.instanceID=v,v+=1,i.$item=e,i.defaults={...l};let o=i.$item.dataset||{},n={};if(Object.keys(o).forEach(e=>{let t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==i.defaults[t]&&(n[t]=o[e])}),i.options=i.extend({},i.defaults,n,t),i.pureOptions=i.extend({},i.options),Object.keys(i.options).forEach(e=>{"true"===i.options[e]?i.options[e]=!0:"false"===i.options[e]&&(i.options[e]=!1)}),i.options.speed=Math.min(2,Math.max(-1,parseFloat(i.options.speed))),"string"==typeof i.options.disableParallax&&(i.options.disableParallax=new RegExp(i.options.disableParallax)),i.options.disableParallax instanceof RegExp){let e=i.options.disableParallax;i.options.disableParallax=()=>e.test(y.userAgent)}if("function"!=typeof i.options.disableParallax){let e=i.options.disableParallax;i.options.disableParallax=()=>!0===e}if("string"==typeof i.options.disableVideo&&(i.options.disableVideo=new RegExp(i.options.disableVideo)),i.options.disableVideo instanceof RegExp){let e=i.options.disableVideo;i.options.disableVideo=()=>e.test(y.userAgent)}if("function"!=typeof i.options.disableVideo){let e=i.options.disableVideo;i.options.disableVideo=()=>!0===e}let s=i.options.elementInViewport;s&&"object"==typeof s&&void 0!==s.length&&([s]=s),s instanceof Element||(s=null),i.options.elementInViewport=s,i.image={src:i.options.imgSrc||null,$container:null,useImgTag:!1,position:"fixed"},i.initImg()&&i.canInitParallax()&&i.init()}css(e,t){return"string"==typeof t?p.getComputedStyle(e).getPropertyValue(t):(Object.keys(t).forEach(i=>{e.style[i]=t[i]}),e)}extend(e,...t){return function(e,...t){return e=e||{},Object.keys(t).forEach(i=>{t[i]&&Object.keys(t[i]).forEach(o=>{e[o]=t[i][o]})}),e}(e,...t)}getWindowData(){let{width:e,height:t}=h();return{width:e,height:t,y:document.documentElement.scrollTop}}initImg(){let e=this.options.imgElement;return e&&"string"==typeof e&&(e=this.$item.querySelector(e)),e instanceof Element||(this.options.imgSrc?(e=new Image).src=this.options.imgSrc:e=null),e&&(this.options.keepImg?this.image.$item=e.cloneNode(!0):(this.image.$item=e,this.image.$itemParent=e.parentNode),this.image.useImgTag=!0),!!this.image.$item||(null===this.image.src&&(this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",this.image.bgImage=this.css(this.$item,"background-image")),!(!this.image.bgImage||"none"===this.image.bgImage))}canInitParallax(){return!this.options.disableParallax()}init(){let e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},t={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden"};if(!this.options.keepImg){let e=this.$item.getAttribute("style");if(e&&this.$item.setAttribute("data-jarallax-original-styles",e),this.image.useImgTag){let e=this.image.$item.getAttribute("style");e&&this.image.$item.setAttribute("data-jarallax-original-styles",e)}}if("static"===this.css(this.$item,"position")&&this.css(this.$item,{position:"relative"}),"auto"===this.css(this.$item,"z-index")&&this.css(this.$item,{zIndex:0}),this.image.$container=document.createElement("div"),this.css(this.image.$container,e),this.css(this.image.$container,{"z-index":this.options.zIndex}),"fixed"===this.image.position&&this.css(this.image.$container,{"-webkit-clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)","clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),this.image.$container.setAttribute("id",`jarallax-container-${this.instanceID}`),this.options.containerClass&&this.image.$container.setAttribute("class",this.options.containerClass),this.$item.appendChild(this.image.$container),this.image.useImgTag?t=this.extend({"object-fit":this.options.imgSize,"object-position":this.options.imgPosition,"max-width":"none"},e,t):(this.image.$item=document.createElement("div"),this.image.src&&(t=this.extend({"background-position":this.options.imgPosition,"background-size":this.options.imgSize,"background-repeat":this.options.imgRepeat,"background-image":this.image.bgImage||`url("${this.image.src}")`},e,t))),("opacity"===this.options.type||"scale"===this.options.type||"scale-opacity"===this.options.type||1===this.options.speed)&&(this.image.position="absolute"),"fixed"===this.image.position){let e=(function(e){let t=[];for(;null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t})(this.$item).filter(e=>{let t=p.getComputedStyle(e),i=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return i&&"none"!==i||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])});this.image.position=e.length?"absolute":"fixed"}t.position=this.image.position,this.css(this.image.$item,t),this.image.$container.appendChild(this.image.$item),this.onResize(),this.onScroll(!0),this.options.onInit&&this.options.onInit.call(this),"none"!==this.css(this.$item,"background-image")&&this.css(this.$item,{"background-image":"none"}),m.push({instance:this}),1===m.length&&p.requestAnimationFrame(f),g.observe(this.options.elementInViewport||this.$item)}destroy(){var e;e=this,m.forEach((t,i)=>{t.instance.instanceID===e.instanceID&&m.splice(i,1)}),g.unobserve(e.options.elementInViewport||e.$item);let t=this.$item.getAttribute("data-jarallax-original-styles");if(this.$item.removeAttribute("data-jarallax-original-styles"),t?this.$item.setAttribute("style",t):this.$item.removeAttribute("style"),this.image.useImgTag){let e=this.image.$item.getAttribute("data-jarallax-original-styles");this.image.$item.removeAttribute("data-jarallax-original-styles"),e?this.image.$item.setAttribute("style",t):this.image.$item.removeAttribute("style"),this.image.$itemParent&&this.image.$itemParent.appendChild(this.image.$item)}this.image.$container&&this.image.$container.parentNode.removeChild(this.image.$container),this.options.onDestroy&&this.options.onDestroy.call(this),delete this.$item.jarallax}coverImage(){let{height:e}=h(),t=this.image.$container.getBoundingClientRect(),i=t.height,{speed:o}=this.options,n="scroll"===this.options.type||"scroll-opacity"===this.options.type,s=0,r=i,a=0;return n&&(o<0?(s=o*Math.max(i,e),e<i&&(s-=o*(i-e))):s=o*(i+e),o>1?r=Math.abs(s-e):o<0?r=s/o+Math.abs(s):r+=(e-i)*(1-o),s/=2),this.parallaxScrollDistance=s,a=n?(e-r)/2:(i-r)/2,this.css(this.image.$item,{height:`${r}px`,marginTop:`${a}px`,left:"fixed"===this.image.position?`${t.left}px`:"0",width:`${t.width}px`}),this.options.onCoverImage&&this.options.onCoverImage.call(this),{image:{height:r,marginTop:a},container:t}}isVisible(){return this.isElementInViewport||!1}onScroll(e){if(!e&&!this.isVisible())return;let{height:t}=h(),i=this.$item.getBoundingClientRect(),o=i.top,n=i.height,s={},r=Math.max(0,o),a=Math.max(0,n+o),l=Math.max(0,-o),p=Math.max(0,o+n-t),u=Math.max(0,n-(o+n-t)),d=Math.max(0,-o+t-n),c=1-(t-o)/(t+n)*2,m=1;if(n<t?m=1-(l||p)/n:a<=t?m=a/t:u<=t&&(m=u/t),("opacity"===this.options.type||"scale-opacity"===this.options.type||"scroll-opacity"===this.options.type)&&(s.transform="translate3d(0,0,0)",s.opacity=m),"scale"===this.options.type||"scale-opacity"===this.options.type){let e=1;this.options.speed<0?e-=this.options.speed*m:e+=this.options.speed*(1-m),s.transform=`scale(${e}) translate3d(0,0,0)`}if("scroll"===this.options.type||"scroll-opacity"===this.options.type){let e=this.parallaxScrollDistance*c;"absolute"===this.image.position&&(e-=o),s.transform=`translate3d(0,${e}px,0)`}this.css(this.image.$item,s),this.options.onScroll&&this.options.onScroll.call(this,{section:i,beforeTop:r,beforeTopEnd:a,afterTop:l,beforeBottom:p,beforeBottomEnd:u,afterBottom:d,visiblePercent:m,fromViewportCenter:c})}onResize(){this.coverImage()}}let $=function(e,t,...i){let o;("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);let n=e.length,s=0;for(;s<n;s+=1)if("object"==typeof t||void 0===t?e[s].jarallax||(e[s].jarallax=new b(e[s],t)):e[s].jarallax&&(o=e[s].jarallax[t].apply(e[s].jarallax,i)),void 0!==o)return o;return e};$.constructor=b;var I={autoplay:!1,loop:!1,mute:!1,volume:100,showControls:!0,accessibilityHidden:!1,startTime:0,endTime:0};let A=0;class x{type="none";constructor(e,t){this.url=e,this.options_default={...I},this.options=function(e,...t){return e=e||{},Object.keys(t).forEach(i=>{t[i]&&Object.keys(t[i]).forEach(o=>{e[o]=t[i][o]})}),e}({},this.options_default,t),this.videoID=this.constructor.parseURL(e),this.videoID&&this.init()}isValid(){return!!this.videoID}init(){this.ID=A,A+=1,this.playerID=`VideoWorker-${this.ID}`}on(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}off(e,t){this.userEventsList&&this.userEventsList[e]&&(t?this.userEventsList[e].forEach((i,o)=>{i===t&&(this.userEventsList[e][o]=!1)}):delete this.userEventsList[e])}fire(e,...t){this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(e=>{e&&e.apply(this,t)})}static parseURL(e){return!1}play(e){}pause(){}mute(){}unmute(){}setVolume(e=!1){}getVolume(e){}getMuted(e){}setCurrentTime(e=!1){}getCurrentTime(e){}getImageURL(e){}getVideo(e){}}"undefined"!=typeof window?a=window:void 0!==i.g?a=i.g:"undefined"!=typeof self?a=self:a={};var E=a;function w(){this.doneCallbacks=[],this.failCallbacks=[]}w.prototype={execute(e,t){let i=e.length;for(t=Array.prototype.slice.call(t);i;)e[i-=1].apply(null,t)},resolve(...e){this.execute(this.doneCallbacks,e)},reject(...e){this.execute(this.failCallbacks,e)},done(e){this.doneCallbacks.push(e)},fail(e){this.failCallbacks.push(e)}};let T=0,C=0,V=new w;class P extends x{type="youtube";static parseURL(e){let t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/);return!!t&&11===t[1].length&&t[1]}init(){super.init(),function(){if(T)return;T=!0;let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="https://www.youtube.com/iframe_api",t.appendChild(e)}()}play(e){let t=this;t.player&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),E.YT.PlayerState.PLAYING!==t.player.getPlayerState()&&(t.options.endTime&&!t.options.loop?t.getCurrentTime(e=>{e<t.options.endTime&&t.player.playVideo()}):t.player.playVideo()))}pause(){this.player&&this.player.pauseVideo&&E.YT.PlayerState.PLAYING===this.player.getPlayerState()&&this.player.pauseVideo()}mute(){this.player&&this.player.mute&&this.player.mute()}unmute(){this.player&&this.player.unMute&&this.player.unMute()}setVolume(e=!1){this.player&&"number"==typeof e&&this.player.setVolume&&this.player.setVolume(e)}getVolume(e){if(!this.player){e(!1);return}this.player.getVolume&&e(this.player.getVolume())}getMuted(e){if(!this.player){e(null);return}this.player.isMuted&&e(this.player.isMuted())}setCurrentTime(e=!1){this.player&&"number"==typeof e&&this.player.seekTo&&this.player.seekTo(e)}getCurrentTime(e){this.player&&this.player.getCurrentTime&&e(this.player.getCurrentTime())}getImageURL(e){let t=this;if(t.videoImage){e(t.videoImage);return}let i=["maxresdefault","sddefault","hqdefault","0"],o=0,n=new Image;n.onload=function(){120!==(this.naturalWidth||this.width)||o===i.length-1?(t.videoImage=`https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`,e(t.videoImage)):(o+=1,this.src=`https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`)},n.src=`https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`}getVideo(e){var t;let i=this;if(i.$video){e(i.$video);return}t=()=>{let t,o,n;i.$video||((t=document.createElement("div")).style.display="none"),i.playerOptions={host:"https://www.youtube-nocookie.com",videoId:i.videoID,playerVars:{autohide:1,rel:0,autoplay:0,playsinline:1}},i.options.showControls||(i.playerOptions.playerVars.iv_load_policy=3,i.playerOptions.playerVars.modestbranding=1,i.playerOptions.playerVars.controls=0,i.playerOptions.playerVars.showinfo=0,i.playerOptions.playerVars.disablekb=1),i.playerOptions.events={onReady(e){i.options.mute?e.target.mute():"number"==typeof i.options.volume&&e.target.setVolume(i.options.volume),i.options.autoplay&&i.play(i.options.startTime),i.fire("ready",e),i.options.loop&&!i.options.endTime&&(i.options.endTime=i.player.getDuration()-.1),setInterval(()=>{i.getVolume(t=>{i.options.volume!==t&&(i.options.volume=t,i.fire("volumechange",e))})},150)},onStateChange(e){i.options.loop&&e.data===E.YT.PlayerState.ENDED&&i.play(i.options.startTime),o||e.data!==E.YT.PlayerState.PLAYING||(o=1,i.fire("started",e)),e.data===E.YT.PlayerState.PLAYING&&i.fire("play",e),e.data===E.YT.PlayerState.PAUSED&&i.fire("pause",e),e.data===E.YT.PlayerState.ENDED&&i.fire("ended",e),e.data===E.YT.PlayerState.PLAYING?n=setInterval(()=>{i.fire("timeupdate",e),i.options.endTime&&i.player.getCurrentTime()>=i.options.endTime&&(i.options.loop?i.play(i.options.startTime):i.pause())},150):clearInterval(n)},onError(e){i.fire("error",e)}};let s=!i.$video;if(s){let e=document.createElement("div");e.setAttribute("id",i.playerID),t.appendChild(e),document.body.appendChild(t)}i.player=i.player||new E.YT.Player(i.playerID,i.playerOptions),s&&(i.$video=document.getElementById(i.playerID),i.options.accessibilityHidden&&(i.$video.setAttribute("tabindex","-1"),i.$video.setAttribute("aria-hidden","true")),i.videoWidth=parseInt(i.$video.getAttribute("width"),10)||1280,i.videoHeight=parseInt(i.$video.getAttribute("height"),10)||720),e(i.$video)},void 0!==E.YT&&0!==E.YT.loaded||C?"object"==typeof E.YT&&1===E.YT.loaded?t():V.done(()=>{t()}):(C=1,E.onYouTubeIframeAPIReady=function(){E.onYouTubeIframeAPIReady=null,V.resolve("done"),t()})}}let j=0,L=0,O=new w;class R extends x{type="vimeo";static parseURL(e){let t=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);return!!t&&!!t[3]&&t[3]}static parseURLHash(e){let t=e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);return t&&5===t.length?t[4]:null}init(){super.init(),function(){if(j||(j=!0,void 0!==E.Vimeo))return;let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="https://player.vimeo.com/api/player.js",t.appendChild(e)}()}play(e){let t=this;t.player&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(e=>{e&&(t.options.endTime&&!t.options.loop?t.getCurrentTime(e=>{e<t.options.endTime&&t.player.play()}):t.player.play())}))}pause(){let e=this;e.player&&e.player.getPaused().then(t=>{t||e.player.pause()})}mute(){this.player&&this.player.setVolume&&this.setVolume(0)}unmute(){this.player&&this.player.setVolume&&this.setVolume(this.options.volume||100)}setVolume(e=!1){this.player&&"number"==typeof e&&this.player.setVolume&&this.player.setVolume(e/100)}getVolume(e){if(!this.player){e(!1);return}this.player.getVolume&&this.player.getVolume().then(t=>{e(100*t)})}getMuted(e){if(!this.player){e(null);return}this.player.getVolume&&this.player.getVolume().then(t=>{e(!!t)})}setCurrentTime(e=!1){this.player&&"number"==typeof e&&this.player.setCurrentTime&&this.player.setCurrentTime(e)}getCurrentTime(e){this.player&&this.player.getCurrentTime&&this.player.getCurrentTime().then(t=>{e(t)})}getImageURL(e){let t=this;if(t.videoImage){e(t.videoImage);return}let i=E.innerWidth||1920;E.devicePixelRatio&&(i*=E.devicePixelRatio),i=Math.min(i,1920);let o=new XMLHttpRequest;o.open("GET",`https://vimeo.com/api/oembed.json?url=${t.url}&width=${i}`,!0),o.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){let i=JSON.parse(this.responseText);i.thumbnail_url&&(t.videoImage=i.thumbnail_url,e(t.videoImage))}},o.send()}getVideo(e){let t=this;if(t.$video){e(t.$video);return}!function(e){if(void 0!==E.Vimeo||L)void 0!==E.Vimeo?e():O.done(()=>{e()});else{L=1;let t=setInterval(()=>{void 0!==E.Vimeo&&(clearInterval(t),O.resolve("done"),e())},20)}}(()=>{let i,o;t.$video||((i=document.createElement("div")).style.display="none"),t.playerOptions={dnt:1,id:t.videoID,autopause:0,transparent:0,autoplay:t.options.autoplay?1:0,loop:t.options.loop?1:0,muted:t.options.mute||0===t.options.volume?1:0};let n=t.constructor.parseURLHash(t.url);if(n&&(t.playerOptions.h=n),t.options.showControls||(t.playerOptions.controls=0),!t.options.showControls&&t.options.loop&&t.options.autoplay&&(t.playerOptions.background=1),!t.$video){let e="";Object.keys(t.playerOptions).forEach(i=>{""!==e&&(e+="&"),e+=`${i}=${encodeURIComponent(t.playerOptions[i])}`}),t.$video=document.createElement("iframe"),t.$video.setAttribute("id",t.playerID),t.$video.setAttribute("src",`https://player.vimeo.com/video/${t.videoID}?${e}`),t.$video.setAttribute("frameborder","0"),t.$video.setAttribute("mozallowfullscreen",""),t.$video.setAttribute("allowfullscreen",""),t.$video.setAttribute("title","Vimeo video player"),t.options.accessibilityHidden&&(t.$video.setAttribute("tabindex","-1"),t.$video.setAttribute("aria-hidden","true")),i.appendChild(t.$video),document.body.appendChild(i)}t.player=t.player||new E.Vimeo.Player(t.$video,t.playerOptions),t.options.mute||"number"!=typeof t.options.volume||t.setVolume(t.options.volume),t.options.startTime&&t.options.autoplay&&t.player.setCurrentTime(t.options.startTime),t.player.getVideoWidth().then(e=>{t.videoWidth=e||1280}),t.player.getVideoHeight().then(e=>{t.videoHeight=e||720}),t.player.on("timeupdate",e=>{o||(t.fire("started",e),o=1),t.fire("timeupdate",e),t.options.endTime&&e.seconds>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),t.player.on("play",e=>{t.fire("play",e),t.options.startTime&&0===e.seconds&&t.play(t.options.startTime)}),t.player.on("pause",e=>{t.fire("pause",e)}),t.player.on("ended",e=>{t.fire("ended",e)}),t.player.on("loaded",e=>{t.fire("ready",e)}),t.player.on("volumechange",e=>{t.getVolume(e=>{t.options.volume=e}),t.fire("volumechange",e)}),t.player.on("error",e=>{t.fire("error",e)}),e(t.$video)})}}class k extends x{type="local";static parseURL(e){let t=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),i={},o=0;return t.forEach(e=>{let t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(i["ogv"===t[1]?"ogg":t[1]]=t[2],o=1)}),!!o&&i}play(e){let t=this;t.player&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&(t.options.endTime&&!t.options.loop?t.getCurrentTime(e=>{e<t.options.endTime&&t.player.play()}):t.player.play()))}pause(){this.player&&!this.player.paused&&this.player.pause()}mute(){this.player&&(this.$video.muted=!0)}unmute(){this.player&&(this.$video.muted=!1)}setVolume(e=!1){this.player&&"number"==typeof e&&(this.$video.volume=e/100)}getVolume(e){if(!this.player){e(!1);return}e(100*this.$video.volume)}getMuted(e){if(!this.player){e(null);return}e(this.$video.muted)}setCurrentTime(e=!1){this.player&&"number"==typeof e&&(this.$video.currentTime=e)}getCurrentTime(e){this.player&&e(this.player.currentTime)}getImageURL(e){this.videoImage&&e(this.videoImage)}getVideo(e){let t,i;let o=this;if(o.$video){e(o.$video);return}o.$video||((t=document.createElement("div")).style.display="none"),o.$video||(o.$video=document.createElement("video"),o.player=o.$video,o.options.showControls&&(o.$video.controls=!0),"number"==typeof o.options.volume&&o.setVolume(o.options.volume),o.options.mute&&o.mute(),o.options.loop&&(o.$video.loop=!0),o.$video.setAttribute("playsinline",""),o.$video.setAttribute("webkit-playsinline",""),o.options.accessibilityHidden&&(o.$video.setAttribute("tabindex","-1"),o.$video.setAttribute("aria-hidden","true")),o.$video.setAttribute("id",o.playerID),t.appendChild(o.$video),document.body.appendChild(t),Object.keys(o.videoID).forEach(e=>{!function(e,t,i){let o=document.createElement("source");o.src=t,o.type=i,e.appendChild(o)}(o.$video,o.videoID[e],`video/${e}`)})),o.player.addEventListener("playing",e=>{i||o.fire("started",e),i=1}),o.player.addEventListener("timeupdate",function(e){o.fire("timeupdate",e),o.options.endTime&&this.currentTime>=o.options.endTime&&(o.options.loop?o.play(o.options.startTime):o.pause())}),o.player.addEventListener("play",e=>{o.fire("play",e)}),o.player.addEventListener("pause",e=>{o.fire("pause",e)}),o.player.addEventListener("ended",e=>{o.fire("ended",e)}),o.player.addEventListener("loadedmetadata",function(){o.videoWidth=this.videoWidth||1280,o.videoHeight=this.videoHeight||720,o.fire("ready"),o.options.autoplay&&o.play(o.options.startTime)}),o.player.addEventListener("volumechange",e=>{o.getVolume(e=>{o.options.volume=e}),o.fire("volumechange",e)}),o.player.addEventListener("error",e=>{o.fire("error",e)}),e(o.$video)}}function S(e,t){let i=!1;return Object.keys(S.providers).forEach(o=>{!i&&S.providers[o].parseURL(e)&&(i=new S.providers[o](e,t))}),i||new x(e,t)}S.BaseClass=x,S.providers={Youtube:P,Vimeo:R,Local:k};let M=$,_=function(){return function(e=p.jarallax){if(void 0===e)return;let t=e.constructor,i=t.prototype.onScroll;t.prototype.onScroll=function(){let e=this;i.apply(e),e.isVideoInserted||!e.video||e.options.videoLazyLoading&&!e.isElementInViewport||e.options.disableVideo()||(e.isVideoInserted=!0,e.video.getVideo(t=>{let i=t.parentNode;e.css(t,{position:e.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",margin:0,zIndex:-1}),e.$video=t,"local"===e.video.type&&(e.image.src?e.$video.setAttribute("poster",e.image.src):e.image.$item&&"IMG"===e.image.$item.tagName&&e.image.$item.src&&e.$video.setAttribute("poster",e.image.$item.src)),e.options.videoClass&&e.$video.setAttribute("class",`${e.options.videoClass} ${e.options.videoClass}-${e.video.type}`),e.image.$container.appendChild(t),i.parentNode.removeChild(i),e.options.onVideoInsert&&e.options.onVideoInsert.call(e)}))};let o=t.prototype.coverImage;t.prototype.coverImage=function(){let e=o.apply(this),t=!!this.image.$item&&this.image.$item.nodeName;if(e&&this.video&&t&&("IFRAME"===t||"VIDEO"===t)){let i=e.image.height,o=i*this.image.width/this.image.height,n=(e.container.width-o)/2,s=e.image.marginTop;e.container.width>o&&(i=(o=e.container.width)*this.image.height/this.image.width,n=0,s+=(e.image.height-i)/2),"IFRAME"===t&&(i+=400,s-=200),this.css(this.$video,{width:`${o}px`,marginLeft:`${n}px`,height:`${i}px`,marginTop:`${s}px`})}return e};let n=t.prototype.initImg;t.prototype.initImg=function(){let e=n.apply(this);return(this.options.videoSrc||(this.options.videoSrc=this.$item.getAttribute("data-jarallax-video")||null),this.options.videoSrc)?(this.defaultInitImgResult=e,!0):e};let s=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){let e=this,t=s.apply(e);if(!e.options.videoSrc)return t;let i=new S(e.options.videoSrc,{autoplay:!0,loop:e.options.videoLoop,showControls:!1,accessibilityHidden:!0,startTime:e.options.videoStartTime||0,endTime:e.options.videoEndTime||0,mute:!e.options.videoVolume,volume:e.options.videoVolume||0});function o(){e.image.$default_item&&(e.image.$item=e.image.$default_item,e.image.$item.style.display="block",e.coverImage(),e.onScroll())}if(e.options.onVideoWorkerInit&&e.options.onVideoWorkerInit.call(e,i),i.isValid()){if(this.options.disableParallax()&&(t=!0,e.image.position="absolute",e.options.type="scroll",e.options.speed=1),t){if(i.on("ready",()=>{if(e.options.videoPlayOnlyVisible){let t=e.onScroll;e.onScroll=function(){t.apply(e),e.videoError||!e.options.videoLoop&&(e.options.videoLoop||e.videoEnded)||(e.isVisible()?i.play():i.pause())}}else i.play()}),i.on("started",()=>{e.image.$default_item=e.image.$item,e.image.$item=e.$video,e.image.width=e.video.videoWidth||1280,e.image.height=e.video.videoHeight||720,e.coverImage(),e.onScroll(),e.image.$default_item&&(e.image.$default_item.style.display="none")}),i.on("ended",()=>{e.videoEnded=!0,e.options.videoLoop||o()}),i.on("error",()=>{e.videoError=!0,o()}),e.video=i,!e.defaultInitImgResult&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"!==i.type))return i.getImageURL(t=>{e.image.bgImage=`url("${t}")`,e.init()}),!1}else e.defaultInitImgResult||i.getImageURL(t=>{let i=e.$item.getAttribute("style");i&&e.$item.setAttribute("data-jarallax-original-styles",i),e.css(e.$item,{"background-image":`url("${t}")`,"background-position":"center","background-size":"cover"})})}return t};let r=t.prototype.destroy;t.prototype.destroy=function(){this.image.$default_item&&(this.image.$item=this.image.$default_item,delete this.image.$default_item),r.apply(this)}}(M)},D=function(){return function(e=p.jarallax){if(console.warn("Jarallax Element extension is DEPRECATED, please, avoid using it. We recommend you look at something like `lax.js` library <https://github.com/alexfoxy/lax.js>. It is much more powerful and has a less code (in cases when you don't want to add parallax backgrounds)."),void 0===e)return;let t=e.constructor;["initImg","canInitParallax","init","destroy","coverImage","isVisible","onScroll","onResize"].forEach(e=>{let i=t.prototype[e];t.prototype[e]=function(...t){if("initImg"===e&&null!==this.$item.getAttribute("data-jarallax-element")&&(this.options.type="element",this.pureOptions.speed=this.$item.getAttribute("data-jarallax-element")||"100"),"element"!==this.options.type)return i.apply(this,t);switch(this.pureOptions.threshold=this.$item.getAttribute("data-threshold")||"",e){case"init":{let e=`${this.pureOptions.speed}`.split(" ");this.options.speed=this.pureOptions.speed||0,this.options.speedY=e[0]?parseFloat(e[0]):0,this.options.speedX=e[1]?parseFloat(e[1]):0;let o=this.pureOptions.threshold.split(" ");this.options.thresholdY=o[0]?parseFloat(o[0]):null,this.options.thresholdX=o[1]?parseFloat(o[1]):null,i.apply(this,t);let n=this.$item.getAttribute("data-jarallax-original-styles");return n&&this.$item.setAttribute("style",n),!0}case"onResize":{let e=this.css(this.$item,"transform");this.css(this.$item,{transform:""});let t=this.$item.getBoundingClientRect();this.itemData={width:t.width,height:t.height,y:t.top+this.getWindowData().y,x:t.left},this.css(this.$item,{transform:e});break}case"onScroll":{let e=this.getWindowData(),t=(e.y+e.height/2-this.itemData.y-this.itemData.height/2)/(e.height/2),i=t*this.options.speedY,o=t*this.options.speedX,n=i,s=o;null!==this.options.thresholdY&&i>this.options.thresholdY&&(n=0),null!==this.options.thresholdX&&o>this.options.thresholdX&&(s=0),this.css(this.$item,{transform:`translate3d(${s}px,${n}px,0)`});break}case"initImg":case"isVisible":case"coverImage":return!0}return i.apply(this,t)}})}(M)}},627:(e,t)=>{"use strict";var i,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{ACTION_HMR_REFRESH:function(){return p},ACTION_NAVIGATE:function(){return s},ACTION_PREFETCH:function(){return l},ACTION_REFRESH:function(){return n},ACTION_RESTORE:function(){return r},ACTION_SERVER_ACTION:function(){return u},ACTION_SERVER_PATCH:function(){return a},PrefetchCacheEntryStatus:function(){return o},PrefetchKind:function(){return i}});let n="refresh",s="navigate",r="restore",a="server-patch",l="prefetch",p="hmr-refresh",u="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(i||(i={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(o||(o={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5157:(e,t,i)=>{"use strict";function o(e,t,i,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),i(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return I}});let o=i(7677),n=i(4848),s=o._(i(6540)),r=i(6847),a=i(7785),l=i(2772),p=i(1278),u=i(6185),d=i(7644),c=i(9258),h=i(6334),m=i(5157),f=i(296),g=i(627),y=i(1903),v=new Set;function b(e,t,i,o,n,s){if(s||(0,a.isLocalURL)(t)){if(!o.bypassPrefetchedCheck&&!s){let n=t+"%"+i+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(v.has(n))return;v.add(n)}(async()=>s?e.prefetch(t,n):e.prefetch(t,i,o))().catch(e=>{})}}function $(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let I=s.default.forwardRef(function(e,t){let i,o;let{href:l,as:v,children:I,prefetch:A=null,passHref:x,replace:E,shallow:w,scroll:T,locale:C,onClick:V,onMouseEnter:P,onTouchStart:j,legacyBehavior:L=!1,...O}=e;i=I,L&&("string"==typeof i||"number"==typeof i)&&(i=(0,n.jsx)("a",{children:i}));let R=s.default.useContext(d.RouterContext),k=s.default.useContext(c.AppRouterContext),S=null!=R?R:k,M=!R,_=!1!==A,D=null===A?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:N,as:H}=s.default.useMemo(()=>{if(!R){let e=$(l);return{href:e,as:v?$(v):e}}let[e,t]=(0,r.resolveHref)(R,l,!0);return{href:e,as:v?(0,r.resolveHref)(R,v):t||e}},[R,l,v]),Y=s.default.useRef(N),U=s.default.useRef(H);L&&(o=s.default.Children.only(i));let z=L?o&&"object"==typeof o&&o.ref:t,[W,B,F]=(0,h.useIntersection)({rootMargin:"200px"}),G=s.default.useCallback(e=>{(U.current!==H||Y.current!==N)&&(F(),U.current=H,Y.current=N),W(e)},[H,N,F,W]),q=(0,y.useMergedRef)(G,z);s.default.useEffect(()=>{S&&B&&_&&b(S,N,H,{locale:C},{kind:D},M)},[H,N,B,C,_,null==R?void 0:R.locale,S,M,D]);let K={ref:q,onClick(e){L||"function"!=typeof V||V(e),L&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,i,o,n,r,l,p,u){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(i)))return;e.preventDefault();let c=()=>{let e=null==l||l;"beforePopState"in t?t[n?"replace":"push"](i,o,{shallow:r,locale:p,scroll:e}):t[n?"replace":"push"](o||i,{scroll:e})};u?s.default.startTransition(c):c()}(e,S,N,H,E,w,T,C,M)},onMouseEnter(e){L||"function"!=typeof P||P(e),L&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(_||!M)&&b(S,N,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:D},M)},onTouchStart:function(e){L||"function"!=typeof j||j(e),L&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(_||!M)&&b(S,N,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:D},M)}};if((0,p.isAbsoluteUrl)(H))K.href=H;else if(!L||x||"a"===o.type&&!("href"in o.props)){let e=void 0!==C?C:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,m.getDomainLocale)(H,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);K.href=t||(0,f.addBasePath)((0,u.addLocale)(H,e,null==R?void 0:R.defaultLocale))}return L?s.default.cloneElement(o,K):(0,n.jsx)("a",{...O,...K,children:i})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let o=i(6540),n=i(4959),s="function"==typeof IntersectionObserver,r=new Map,a=[];function l(e){let{rootRef:t,rootMargin:i,disabled:l}=e,p=l||!s,[u,d]=(0,o.useState)(!1),c=(0,o.useRef)(null),h=(0,o.useCallback)(e=>{c.current=e},[]);return(0,o.useEffect)(()=>{if(s){if(p||u)return;let e=c.current;if(e&&e.tagName)return function(e,t,i){let{id:o,observer:n,elements:s}=function(e){let t;let i={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===i.root&&e.margin===i.margin);if(o&&(t=r.get(o)))return t;let n=new Map;return t={id:i,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:n},a.push(i),r.set(i,t),t}(i);return s.set(e,t),n.observe(e),function(){if(s.delete(e),n.unobserve(e),0===s.size){n.disconnect(),r.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:i})}else if(!u){let e=(0,n.requestIdleCallback)(()=>d(!0));return()=>(0,n.cancelIdleCallback)(e)}},[p,i,t,u,c.current]),[h,u,(0,o.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=i(6540);function n(e,t){let i=(0,o.useRef)(()=>{}),n=(0,o.useRef)(()=>{});return(0,o.useMemo)(()=>e&&t?o=>{null===o?(i.current(),n.current()):(i.current=s(e,o),n.current=s(t,o))}:e||t,[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1106:(e,t,i)=>{e.exports=i(6397)},9348:function(e){var t;t=function(){"use strict";var e=document,t=e.createTextNode.bind(e);function i(e,t,i){e.style.setProperty(t,i)}function o(e,t){return e.appendChild(t)}function n(t,i,n,s){var r=e.createElement("span");return i&&(r.className=i),n&&(s||r.setAttribute("data-"+i,n),r.textContent=n),t&&o(t,r)||r}function s(e,t){return e.getAttribute("data-"+t)}function r(t,i){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(i||e).querySelectorAll(t)):[]}function a(e){for(var t=[];e--;)t[e]=[];return t}function l(e,t){e&&e.some(t)}function p(e){return function(t){return e[t]}}var u={};function d(e,t,i,o){return{by:e,depends:t,key:i,split:o}}function c(e){u[e.by]=e}function h(e,i,s,a,p){e.normalize();var u=[],d=document.createDocumentFragment();a&&u.push(e.previousSibling);var c=[];return r(e.childNodes).some(function(e){if(e.tagName&&!e.hasChildNodes()){c.push(e);return}if(e.childNodes&&e.childNodes.length){c.push(e),u.push.apply(u,h(e,i,s,a,p));return}var o=e.wholeText||"",r=o.trim();r.length&&(" "===o[0]&&c.push(t(" ")),l(""===s&&"function"==typeof Intl.Segmenter?Array.from(new Intl.Segmenter().segment(r)).map(function(e){return e.segment}):r.split(s),function(e,t){t&&p&&c.push(n(d,"whitespace"," ",p));var o=n(d,i,e);u.push(o),c.push(o)})," "===o[o.length-1]&&c.push(t(" ")))}),l(c,function(e){o(d,e)}),e.innerHTML="",o(e,d),u}var m="words",f=d(m,0,"word",function(e){return h(e,"word",/\s+/,0,1)}),g="chars",y=d(g,[m],"char",function(e,t,i){var o=[];return l(i[m],function(e,i){o.push.apply(o,h(e,"char","",t.whitespace&&i))}),o});function v(e){var t=(e=e||{}).key;return r(e.target||"[data-splitting]").map(function(o){var n=o["\uD83C\uDF4C"];if(!e.force&&n)return n;n=o["\uD83C\uDF4C"]={el:o};var r=e.by||s(o,"splitting");r&&"true"!=r||(r=g);var a=(function e(t,i,o){var n=o.indexOf(t);if(-1==n){o.unshift(t);var s=u[t];if(!s)throw Error("plugin not loaded: "+t);l(s.depends,function(i){e(i,t,o)})}else{var r=o.indexOf(i);o.splice(n,1),o.splice(r,0,t)}return o})(r,0,[]).map(p(u)),d=function(e,t){for(var i in t)e[i]=t[i];return e}({},e);return l(a,function(e){if(e.split){var s,r,a=e.by,p=(t?"-"+t:"")+e.key,u=e.split(o,d,n);p&&(r=(s="--"+p)+"-index",l(u,function(e,t){Array.isArray(e)?l(e,function(e){i(e,r,t)}):i(e,r,t)}),i(o,s+"-total",u.length)),n[a]=u,o.classList.add(a)}}),o.classList.add("splitting"),n})}function b(e,t,i){var o=r(t.matching||e.children,e),n={};return l(o,function(e){var t=Math.round(e[i]);(n[t]||(n[t]=[])).push(e)}),Object.keys(n).map(Number).sort($).map(p(n))}function $(e,t){return e-t}v.html=function(e){var t=(e=e||{}).target=n();return t.innerHTML=e.content,v(e),t.outerHTML},v.add=c;var I=d("lines",[m],"line",function(e,t,i){return b(e,{matching:i[m]},"offsetTop")}),A=d("items",0,"item",function(e,t){return r(t.matching||e.children,e)}),x=d("rows",0,"row",function(e,t){return b(e,t,"offsetTop")}),E=d("cols",0,"col",function(e,t){return b(e,t,"offsetLeft")}),w=d("grid",["rows","cols"]),T="layout",C=d(T,0,0,function(e,t){var a=t.rows=+(t.rows||s(e,"rows")||1),l=t.columns=+(t.columns||s(e,"columns")||1);if(t.image=t.image||s(e,"image")||e.currentSrc||e.src,t.image){var p=r("img",e)[0];t.image=p&&(p.currentSrc||p.src)}t.image&&i(e,"background-image","url("+t.image+")");for(var u=a*l,d=[],c=n(0,"cell-grid");u--;){var h=n(c,"cell");n(h,"cell-inner"),d.push(h)}return o(e,c),d}),V=d("cellRows",[T],"row",function(e,t,i){var o=t.rows,n=a(o);return l(i[T],function(e,t,i){n[Math.floor(t/(i.length/o))].push(e)}),n}),P=d("cellColumns",[T],"col",function(e,t,i){var o=t.columns,n=a(o);return l(i[T],function(e,t){n[t%o].push(e)}),n}),j=d("cells",["cellRows","cellColumns"],"cell",function(e,t,i){return i[T]});return c(f),c(y),c(I),c(A),c(x),c(E),c(w),c(C),c(V),c(P),c(j),v},e.exports=t()}}]);