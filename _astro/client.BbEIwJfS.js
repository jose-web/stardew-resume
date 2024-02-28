import{i as L,d as h,e as B,f as D,g as $,h as q,j as z,k as _,l as R,m as G,n as W,p as j,q as H,s as F,u as K,v as d,S as U}from"./runtime-core.esm-bundler.Ct3ryYbf.js";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const X="http://www.w3.org/2000/svg",y="http://www.w3.org/1998/Math/MathML",u=typeof document<"u"?document:null,b=u&&u.createElement("template"),V={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?u.createElementNS(X,e):t==="mathml"?u.createElementNS(y,e):u.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{b.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const c=b.content;if(i==="svg"||i==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},J=Symbol("_vtc");function Q(e,t,n){const i=e[J];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const A=Symbol("_vod"),Y=Symbol("_vsh"),Z=Symbol(""),k=/(^|;)\s*display\s*:/;function tt(e,t,n){const i=e.style,s=h(n);let o=!1;if(n&&!s){if(t)if(h(t))for(const r of t.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&m(i,c,"")}else for(const r in t)n[r]==null&&m(i,r,"");for(const r in n)r==="display"&&(o=!0),m(i,r,n[r])}else if(s){if(t!==n){const r=i[Z];r&&(n+=";"+r),i.cssText=n,o=k.test(n)}}else t&&e.removeAttribute("style");A in e&&(e[A]=o?i.display:"",e[Y]&&(i.display="none"))}const v=/\s*!important$/;function m(e,t,n){if(_(n))n.forEach(i=>m(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=et(e,t);v.test(n)?e.setProperty(R(i),n.replace(v,""),"important"):e[i]=n}}const C=["Webkit","Moz","ms"],S={};function et(e,t){const n=S[t];if(n)return n;let i=G(t);if(i!=="filter"&&i in e)return S[t]=i;i=W(i);for(let s=0;s<C.length;s++){const o=C[s]+i;if(o in e)return S[t]=o}return t}const E="http://www.w3.org/1999/xlink";function nt(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(E,t.slice(6,t.length)):e.setAttributeNS(E,t,n);else{const o=j(t);n==null||o&&!H(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function it(e,t,n,i,s,o,r){if(t==="innerHTML"||t==="textContent"){i&&r(i,s,o),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?e.getAttribute("value")||"":e.value,a=n??"";(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let f=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=H(n):n==null&&l==="string"?(n="",f=!0):l==="number"&&(n=0,f=!0)}try{e[t]=n}catch{}f&&e.removeAttribute(t)}function st(e,t,n,i){e.addEventListener(t,n,i)}function rt(e,t,n,i){e.removeEventListener(t,n,i)}const w=Symbol("_vei");function ot(e,t,n,i,s=null){const o=e[w]||(e[w]={}),r=o[t];if(i&&r)r.value=i;else{const[c,f]=ct(t);if(i){const l=o[t]=at(i,s);st(e,c,l,f)}else r&&(rt(e,c,r,f),o[t]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function ct(e){let t;if(N.test(e)){t={};let i;for(;i=e.match(N);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):R(e.slice(2)),t]}let g=0;const lt=Promise.resolve(),ft=()=>g||(lt.then(()=>g=0),g=Date.now());function at(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;F(ut(i,n.value),t,5,[i])};return n.value=e,n.attached=ft(),n}function ut(e,t){if(_(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const M=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,pt=(e,t,n,i,s,o,r,c,f)=>{const l=s==="svg";t==="class"?Q(e,i,l):t==="style"?tt(e,n,i):q(t)?z(t)||ot(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):dt(e,t,i,l))?it(e,t,i,o,r,c,f):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),nt(e,t,i,l))};function dt(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&M(t)&&L(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return M(t)&&h(n)?!1:t in e}const O=$({patchProp:pt},V);let p,T=!1;function mt(){return p||(p=B(O))}function ht(){return p=T?p:D(O),T=!0,p}const St=(...e)=>{const t=mt().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=I(i);if(!s)return;const o=t._component;!L(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,P(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t},gt=(...e)=>{const t=ht().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=I(i);if(s)return n(s,!0,P(s))},t};function P(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function I(e){return h(e)?document.querySelector(e):e}const bt=()=>{},At=K({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:e,value:t,hydrate:n}){if(!t)return()=>null;let i=n?"astro-slot":"astro-static-slot";return()=>d(i,{name:e,innerHTML:t})}}),Et=e=>async(t,n,i,{client:s})=>{if(!e.hasAttribute("ssr"))return;const o=t.name?`${t.name} Host`:void 0,r={};for(const[a,x]of Object.entries(i))r[a]=()=>d(At,{value:x,name:a==="default"?void 0:a});const c=s!=="only",l=(c?gt:St)({name:o,render(){let a=d(t,n,r);return vt(t.setup)&&(a=d(U,null,a)),a}});await bt(),l.mount(e,c),e.addEventListener("astro:unmount",()=>l.unmount(),{once:!0})};function vt(e){const t=e?.constructor;return t&&t.name==="AsyncFunction"}export{Et as default};
