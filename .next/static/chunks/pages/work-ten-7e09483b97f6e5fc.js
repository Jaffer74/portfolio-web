(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{1588:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-ten",function(){return a(5585)}])},5946:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return r},noSSR:function(){return n}});let s=a(7677);a(4848),a(6540);let l=s._(a(5645));function i(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){return delete t.webpack,delete t.modules,e(t)}function r(e,t){let a=l.default,s={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e});let r=(s={...s,...t}).loader;return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?a({...s,loader:()=>null!=r?r().then(i):Promise.resolve(i(()=>null))}):(delete s.webpack,delete s.modules,n(a,s))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4319:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return s}});let s=a(7677)._(a(6540)).default.createContext(null)},5645:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let s=a(7677)._(a(6540)),l=a(4319),i=[],n=[],r=!1;function o(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function o(){if(!i){let t=new c(e,a);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!r){let e=a.webpack?a.webpack():a.modules;e&&n.push(t=>{for(let a of e)if(t.includes(a))return o()})}function d(e,t){!function(){o();let e=s.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let n=s.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),s.default.useMemo(()=>{var t;return n.loading||n.error?s.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?s.default.createElement((t=n.loaded)&&t.default?t.default:t,e):null},[e,n])}return d.preload=()=>o(),d.displayName="LoadableComponent",s.default.forwardRef(d)}(o,e)}function u(e,t){let a=[];for(;e.length;){let s=e.pop();a.push(s(t))}return Promise.all(a).then(()=>{if(e.length)return u(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{u(i).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let a=()=>(r=!0,t());u(n,e).then(a,a)})),window.__NEXT_PRELOADREADY=d.preloadReady;let m=d},5585:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var s=a(4848),l=a(4953),i=a.n(l),n=a(1106),r=a.n(n),o=a(6540),c=a(7411);let d=i()(()=>Promise.all([a.e(334),a.e(710)]).then(a.bind(a,6710)),{loadableGenerated:{webpack:()=>[6710]},ssr:!1}),u=()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(c.A,{pageClassName:"portfolio-template",children:[(0,s.jsxs)("section",{className:"section section-inner started-heading",children:[(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"m-titles align-left",children:[(0,s.jsx)("h1",{className:"m-title splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,s.jsx)("span",{children:"Automated Leukemia Detection and Classification Using Deep Learning Technique"})}),(0,s.jsx)("div",{className:"m-subtitle splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,s.jsx)("span",{children:"Computer Vision  "})})]})}),(0,s.jsx)("div",{className:"v-line v-line-right v-line-top",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-8 col-lg-8",children:(0,s.jsxs)("div",{className:"m-details",children:[(0,s.jsxs)("div",{className:"details-label",children:[(0,s.jsx)("span",{children:"Year:"}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{children:"2024"})})]}),(0,s.jsxs)("div",{className:"details-label",children:[(0,s.jsx)("span",{children:"Technology:"}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{children:" Deep Learning, Convolutional Neural Networks (CNNs), Image Classification, Data Augmentation  "})})]}),(0,s.jsxs)("div",{className:"details-label",children:[(0,s.jsx)("span",{children:"Categories:"}),(0,s.jsx)("strong",{children:(0,s.jsx)("span",{children:"Computer Vision  "})})]})]})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right",children:(0,s.jsx)("a",{target:"_blank",href:"https://github.com/Jaffer74/Automated-Leukemia-Detection-and-Classification-Using-Deep-Learning-Techniques",className:"btn scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,s.jsx)("span",{children:"Click here for details !"})})})]})})})]}),(0,s.jsx)("div",{className:"section section-inner",children:(0,s.jsx)("div",{className:"m-image-large",children:(0,s.jsx)("div",{className:"image",children:(0,s.jsx)("div",{className:"img js-parallax",style:{backgroundImage:"url(https://www.mdpi.com/applsci/applsci-12-06317/article_deploy/html/images/applsci-12-06317-g001.png)"}})})})}),(0,s.jsx)("section",{className:"section section-inner",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("h4",{children:"Description"})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"The Automated Leukemia Detection and Classification project uses deep learning techniques to automatically classify microscopic blood cell images as healthy (HEM) or leukemia-affected (ALL). By employing Convolutional Neural Networks (CNNs), specifically VGG16 and MobileNet models, the system accurately identifies different stages of leukemia from optical images of blood cells."})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"The model is trained using data augmentation techniques to improve accuracy and prevent overfitting. The project highlights the power of transfer learning to enhance model performance, leveraging pretrained models for more efficient classification, while achieving high classification accuracy and robust performance in medical diagnostics."})})})]})})}),(0,s.jsx)("div",{className:"section section-inner",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(d,{})})}),(0,s.jsx)("section",{className:"section section-inner",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("h4",{children:"Conclusion"})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"This deep learning-based approach demonstrates the potential of CNNs in automating the classification of medical images, providing faster and more accurate diagnostics for leukemia. The use of transfer learning with models like VGG16 has proven to be highly effective, reducing the need for large datasets while maintaining excellent accuracy."})})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("p",{children:"By integrating these technologies, the system offers a reliable and scalable solution for medical professionals, allowing for early detection and more effective treatment planning. This approach has the potential to be expanded for other medical imaging tasks, ultimately improving healthcare outcomes through automation and AI."})})})]})})}),(0,s.jsx)("div",{className:"section section-inner m-page-navigation",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"navigation-row",children:(0,s.jsx)("div",{className:"previous-post",children:(0,s.jsx)(r(),{legacyBehavior:!0,href:"/",children:(0,s.jsx)("a",{className:"btn m-btn-next",children:"Back to Home"})})})})})})]})}},4953:(e,t,a)=>{e.exports=a(5946)}},e=>{var t=t=>e(e.s=t);e.O(0,[289,411,636,593,792],()=>t(1588)),_N_E=e.O()}]);