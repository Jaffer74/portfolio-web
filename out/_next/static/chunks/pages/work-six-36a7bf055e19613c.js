(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[808],{6386:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-six",function(){return a(5048)}])},5946:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return r},noSSR:function(){return i}});let s=a(7677);a(4848),a(6540);let l=s._(a(5645));function n(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function r(e,t){let a=l.default,s={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e});let r=(s={...s,...t}).loader;return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?a({...s,loader:()=>null!=r?r().then(n):Promise.resolve(n(()=>null))}):(delete s.webpack,delete s.modules,i(a,s))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4319:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return s}});let s=a(7677)._(a(6540)).default.createContext(null)},5645:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let s=a(7677)._(a(6540)),l=a(4319),n=[],i=[],r=!1;function o(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function o(){if(!n){let t=new c(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!r){let e=a.webpack?a.webpack():a.modules;e&&i.push(t=>{for(let a of e)if(t.includes(a))return o()})}function d(e,t){!function(){o();let e=s.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let i=s.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),s.default.useMemo(()=>{var t;return i.loading||i.error?s.default.createElement(a.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?s.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return d.preload=()=>o(),d.displayName="LoadableComponent",s.default.forwardRef(d)}(o,e)}function m(e,t){let a=[];for(;e.length;){let s=e.pop();a.push(s(t))}return Promise.all(a).then(()=>{if(e.length)return m(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{m(n).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let a=()=>(r=!0,t());m(i,e).then(a,a)})),window.__NEXT_PRELOADREADY=d.preloadReady;let u=d},5048:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s=a(4848),l=a(4953),n=a.n(l),i=a(1106),r=a.n(i),o=a(6540),c=a(7411);let d=n()(()=>Promise.all([a.e(334),a.e(919)]).then(a.bind(a,9919)),{loadableGenerated:{webpack:()=>[9919]},ssr:!1}),m=()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(c.A,{pageClassName:"portfolio-template",children:[(0,s.jsxs)("section",{className:"section section-inner started-heading",children:[(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"m-titles align-left",children:[(0,s.jsx)("h1",{className:"m-title splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,s.jsx)("span",{children:"Helix Jump: A Unity 3D Game with Machine Learning Integration"})}),(0,s.jsx)("div",{className:"m-subtitle splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,s.jsx)("span",{children:"Game Development , AI ML Solutions  "})})]})}),(0,s.jsx)("div",{className:"v-line v-line-right v-line-top",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-8 col-lg-8",children:(0,s.jsxs)("div",{className:"m-details",children:[(0,s.jsxs)("div",{className:"details-label",children:[(0,s.jsx)("span",{children:"Year:"}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{children:"2024"})})]}),(0,s.jsxs)("div",{className:"details-label",children:[(0,s.jsx)("span",{children:"Technology:"}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{children:"Unity 3D, C#, AI/ML Integration, Game Development "})})]}),(0,s.jsxs)("div",{className:"details-label",children:[(0,s.jsx)("span",{children:"Categories:"}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{children:"AI ML Solutions ,Game Development   "})})]})]})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right",children:(0,s.jsx)("a",{target:"_blank",href:"https://github.com/Jaffer74/Helix-Jump-Game-in-Unity-Using-CSharp-",className:"btn scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,s.jsx)("span",{children:"Click here for details !"})})})]})})})]}),(0,s.jsx)("div",{className:"section section-inner",children:(0,s.jsx)("div",{className:"m-image-large",children:(0,s.jsx)("div",{className:"image",children:(0,s.jsx)("div",{className:"img js-parallax",style:{backgroundImage:"url(https://images.crazygames.com/games/helix-jump/cover_16x9-1733222901873.png?auto=format,compress&q=75&cs=strip)"}})})})}),(0,s.jsx)("section",{className:"section section-inner",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("h4",{children:"Description"})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"The Helix Jump Game in Unity is a 3D arcade-style game developed using Unity 3D and C#. The game features rotating helix towers with obstacles and power-ups, creating an engaging and dynamic gameplay experience. Machine learning is integrated into the game to adjust the difficulty level and optimize level design, making the game adaptive and challenging for players."})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"Incorporating AI-driven elements into the gameplay, the system learns from player actions and adjusts game mechanics in real-time. The project demonstrates how machine learning can be used in game development to create a personalized and evolving user experience."})})})]})})}),(0,s.jsx)("div",{className:"section section-inner",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(d,{})})}),(0,s.jsx)("section",{className:"section section-inner",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("h4",{children:"Conclusion"})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"This project showcases the integration of machine learning in a Unity 3D game, offering an innovative approach to dynamic game design. By adapting the difficulty and level layout based on player performance, the game provides a more engaging and personalized experience."})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"The combination of game development and machine learning demonstrates the potential for AI to enhance user interaction and game mechanics, paving the way for more intelligent, responsive games in the future. This project highlights the convergence of entertainment and AI technology in modern game development."})})})]})})}),(0,s.jsx)("div",{className:"section section-inner m-page-navigation",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"h-titles h-navs",children:(0,s.jsx)(r(),{legacyBehavior:!0,href:"/work-seven",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("span",{className:"nav-arrow scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,s.jsx)("span",{children:"Next Project"})}),(0,s.jsx)("span",{className:"h-title splitting-text-anim-2 scroll-animate","data-splitting":"chars","data-animate":"active",children:(0,s.jsx)("span",{children:"Detecting Retinal Damage From OCT Images"})})]})})})})})]})}},4953:(e,t,a)=>{e.exports=a(5946)}},e=>{var t=t=>e(e.s=t);e.O(0,[289,411,636,593,792],()=>t(6386)),_N_E=e.O()}]);