var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,r)=>{for(var c in r||(r={}))n.call(r,c)&&i(e,c,r[c]);if(t)for(var c of t(r))o.call(r,c)&&i(e,c,r[c]);return e};function c(){}const s=e=>e;function a(e,t){for(const n in t)e[n]=t[n];return e}function l(e){return e()}function u(){return Object.create(null)}function f(e){e.forEach(l)}function d(e){return"function"==typeof e}function p(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function h(e,t,n,o){if(e){const i=g(e,t,n,o);return e[0](i)}}function g(e,t,n,o){return e[1]&&o?a(n.ctx.slice(),e[1](o(t))):n.ctx}function m(e,t,n,o,i,r,c){const s=function(e,t,n,o){if(e[2]&&o){const i=e[2](o(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|i[o];return e}return t.dirty|i}return t.dirty}(t,o,i,r);if(s){const i=g(t,n,o,c);e.p(i,s)}}function v(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}const y="undefined"!=typeof window;let b=y?()=>window.performance.now():()=>Date.now(),I=y?e=>requestAnimationFrame(e):c;const _=new Set;function x(e){_.forEach((t=>{t.c(e)||(_.delete(t),t.f())})),0!==_.size&&I(x)}function j(e){let t;return 0===_.size&&I(x),{promise:new Promise((n=>{_.add(t={c:e,f:n})})),abort(){_.delete(t)}}}let w=!1;function P(e,t,n,o){for(;e<t;){const i=e+(t-e>>1);n(i)<=o?e=i+1:t=i}return e}function O(e,t){w?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),o=new Int32Array(t.length);n[0]=-1;let i=0;for(let a=0;a<t.length;a++){const e=P(1,i+1,(e=>t[n[e]].claim_order),t[a].claim_order)-1;o[a]=n[e]+1;const r=e+1;n[r]=a,i=Math.max(r,i)}const r=[],c=[];let s=t.length-1;for(let a=n[i]+1;0!=a;a=o[a-1]){for(r.push(t[a-1]);s>=a;s--)c.push(t[s]);s--}for(;s>=0;s--)c.push(t[s]);r.reverse(),c.sort(((e,t)=>e.claim_order-t.claim_order));for(let a=0,l=0;a<c.length;a++){for(;l<r.length&&c[a].claim_order>=r[l].claim_order;)l++;const t=l<r.length?r[l]:null;e.insertBefore(c[a],t)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function $(e,t,n){w&&!n?O(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function M(e){e.parentNode.removeChild(e)}function A(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function S(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function C(){return E(" ")}function F(){return E("")}function D(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function T(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){for(const n in t)T(e,n,t[n])}function z(e){return Array.from(e.childNodes)}function R(e,t,n,o,i=!1){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0});const r=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const r=e[o];if(t(r))return n(r),e.splice(o,1),i||(e.claim_info.last_index=o),r}for(let o=e.claim_info.last_index-1;o>=0;o--){const r=e[o];if(t(r))return n(r),e.splice(o,1),i?e.claim_info.last_index--:e.claim_info.last_index=o,r}return o()})();return r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,r}function L(e,t,n,o){return R(e,(e=>e.nodeName===t),(e=>{const t=[];for(let o=0;o<e.attributes.length;o++){const i=e.attributes[o];n[i.name]||t.push(i.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>o?S(t):k(t)))}function q(e,t){return R(e,(e=>3===e.nodeType),(e=>{e.data=""+t}),(()=>E(t)),!0)}function U(e){return q(e," ")}function B(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function Q(e,t=document.body){return Array.from(t.querySelectorAll(e))}const V=new Set;let H,J=0;function Y(e,t,n,o,i,r,c,s=0){const a=16.666/o;let l="{\n";for(let m=0;m<=1;m+=a){const e=t+(n-t)*r(m);l+=100*m+`%{${c(e,1-e)}}\n`}const u=l+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${s}`,d=e.ownerDocument;V.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(k("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${i}ms 1 both`,J+=1,f}function K(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-o.length;i&&(e.style.animation=o.join(", "),J-=i,J||I((()=>{J||(V.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),V.clear())})))}function W(e){H=e}function X(){if(!H)throw new Error("Function called outside component initialization");return H}function Z(e){X().$$.on_mount.push(e)}function ee(e){X().$$.after_update.push(e)}function te(e,t){X().$$.context.set(e,t)}function ne(e){return X().$$.context.get(e)}function oe(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const ie=[],re=[],ce=[],se=[],ae=Promise.resolve();let le=!1;function ue(e){ce.push(e)}function fe(e){se.push(e)}let de=!1;const pe=new Set;function he(){if(!de){de=!0;do{for(let e=0;e<ie.length;e+=1){const t=ie[e];W(t),ge(t.$$)}for(W(null),ie.length=0;re.length;)re.pop()();for(let e=0;e<ce.length;e+=1){const t=ce[e];pe.has(t)||(pe.add(t),t())}ce.length=0}while(ie.length);for(;se.length;)se.pop()();le=!1,de=!1,pe.clear()}}function ge(e){if(null!==e.fragment){e.update(),f(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ue)}}let me;function ve(){return me||(me=Promise.resolve(),me.then((()=>{me=null}))),me}function ye(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const be=new Set;let Ie;function _e(){Ie={r:0,c:[],p:Ie}}function xe(){Ie.r||f(Ie.c),Ie=Ie.p}function je(e,t){e&&e.i&&(be.delete(e),e.i(t))}function we(e,t,n,o){if(e&&e.o){if(be.has(e))return;be.add(e),Ie.c.push((()=>{be.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const Pe={duration:0};function Oe(e,t,n){let o,i,r=t(e,n),a=!1,l=0;function u(){o&&K(e,o)}function f(){const{delay:t=0,duration:n=300,easing:f=s,tick:d=c,css:p}=r||Pe;p&&(o=Y(e,0,1,n,t,f,p,l++)),d(0,1);const h=b()+t,g=h+n;i&&i.abort(),a=!0,ue((()=>ye(e,!0,"start"))),i=j((t=>{if(a){if(t>=g)return d(1,0),ye(e,!0,"end"),u(),a=!1;if(t>=h){const e=f((t-h)/n);d(e,1-e)}}return a}))}let p=!1;return{start(){p||(K(e),d(r)?(r=r(),ve().then(f)):f())},invalidate(){p=!1},end(){a&&(u(),a=!1)}}}function $e(e,t,n){let o,i=t(e,n),r=!0;const a=Ie;function l(){const{delay:t=0,duration:n=300,easing:l=s,tick:u=c,css:d}=i||Pe;d&&(o=Y(e,1,0,n,t,l,d));const p=b()+t,h=p+n;ue((()=>ye(e,!1,"start"))),j((t=>{if(r){if(t>=h)return u(0,1),ye(e,!1,"end"),--a.r||f(a.c),!1;if(t>=p){const e=l((t-p)/n);u(1-e,e)}}return r}))}return a.r+=1,d(i)?ve().then((()=>{i=i(),l()})):l(),{end(t){t&&i.tick&&i.tick(1,0),r&&(o&&K(e,o),r=!1)}}}function Me(e,t){const n={},o={},i={$$scope:1};let r=e.length;for(;r--;){const c=e[r],s=t[r];if(s){for(const e in c)e in s||(o[e]=1);for(const e in s)i[e]||(n[e]=s[e],i[e]=1);e[r]=s}else for(const e in c)i[e]=1}for(const c in o)c in n||(n[c]=void 0);return n}function Ae(e){return"object"==typeof e&&null!==e?e:{}}function ke(e,t,n){const o=e.$$.props[t];void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function Se(e){e&&e.c()}function Ee(e,t){e&&e.l(t)}function Ce(e,t,n,o){const{fragment:i,on_mount:r,on_destroy:c,after_update:s}=e.$$;i&&i.m(t,n),o||ue((()=>{const t=r.map(l).filter(d);c?c.push(...t):f(t),e.$$.on_mount=[]})),s.forEach(ue)}function Fe(e,t){const n=e.$$;null!==n.fragment&&(f(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function De(e,t){-1===e.$$.dirty[0]&&(ie.push(e),le||(le=!0,ae.then(he)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Te(e,t,n,o,i,r,s=[-1]){const a=H;W(e);const l=e.$$={fragment:null,ctx:null,props:r,update:c,not_equal:i,bound:u(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:t.context||[]),callbacks:u(),dirty:s,skip_bound:!1};let d=!1;if(l.ctx=n?n(e,t.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return l.ctx&&i(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&De(e,t)),n})):[],l.update(),d=!0,f(l.before_update),l.fragment=!!o&&o(l.ctx),t.target){if(t.hydrate){w=!0;const e=z(t.target);l.fragment&&l.fragment.l(e),e.forEach(M)}else l.fragment&&l.fragment.c();t.intro&&je(e.$$.fragment),Ce(e,t.target,t.anchor,t.customElement),w=!1,he()}W(a)}class Ne{$destroy(){Fe(this,1),this.$destroy=c}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ze=[];function Re(e,t=c){let n;const o=[];function i(t){if(p(e,t)&&(e=t,n)){const t=!ze.length;for(let n=0;n<o.length;n+=1){const t=o[n];t[1](),ze.push(t,e)}if(t){for(let e=0;e<ze.length;e+=2)ze[e][0](ze[e+1]);ze.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,s=c){const a=[r,s];return o.push(a),1===o.length&&(n=t(i)||c),r(e),()=>{const e=o.indexOf(a);-1!==e&&o.splice(e,1),0===o.length&&(n(),n=null)}}}}function Le(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var qe=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.fullIcon=t.iconDefaults=t.minifyProps=t.matchName=void 0,t.matchName=/^[a-z0-9]+(-[a-z0-9]+)*$/,t.minifyProps=["width","height","top","left"],t.iconDefaults=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1}),t.fullIcon=function(e){return r(r({},t.iconDefaults),e)}})),Ue=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.validateIcon=t.stringToIcon=void 0;t.stringToIcon=(e,n,o,i="")=>{const r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const e=r.pop(),o=r.pop(),c={provider:r.length>0?r[0]:i,prefix:o,name:e};return n&&!t.validateIcon(c)?null:c}const c=r[0],s=c.split("-");if(s.length>1){const e={provider:i,prefix:s.shift(),name:s.join("-")};return n&&!t.validateIcon(e)?null:e}if(o&&""===i){const e={provider:i,prefix:"",name:c};return n&&!t.validateIcon(e,o)?null:e}return null};t.validateIcon=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(qe.matchName)||!(t&&""===e.prefix||e.prefix.match(qe.matchName))||!e.name.match(qe.matchName))})),Be=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.mergeIconData=void 0,t.mergeIconData=function(e,t){const n=r({},e);for(const o in qe.iconDefaults){const e=o;if(void 0!==t[e]){const o=t[e];if(void 0===n[e]){n[e]=o;continue}switch(e){case"rotate":n[e]=(n[e]+o)%4;break;case"hFlip":case"vFlip":n[e]=o!==n[e];break;default:n[e]=o}}}return n}})),Ge=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.parseIconSet=void 0;const n=Object.keys(qe.iconDefaults);function o(e,t,n,i=0){const r=e.parent;if(void 0!==t[r])return Be.mergeIconData(t[r],e);if(void 0!==n[r]){if(i>2)return null;const c=o(n[r],t,n,i+1);if(c)return Be.mergeIconData(c,e)}return null}t.parseIconSet=function(e,t,i="none"){const c=[];if("object"!=typeof e)return"none"!==i&&c;if(e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),"all"===i&&c.push(e)})),"object"!=typeof e.icons)return"none"!==i&&c;const s=Object.create(null);n.forEach((t=>{void 0!==e[t]&&"object"!=typeof e[t]&&(s[t]=e[t])}));const a=e.icons;if(Object.keys(a).forEach((e=>{const n=a[e];"string"==typeof n.body&&(t(e,Object.freeze(r(r(r({},qe.iconDefaults),s),n))),c.push(e))})),"object"==typeof e.aliases){const n=e.aliases;Object.keys(n).forEach((e=>{const i=o(n[e],a,n,1);i&&(t(e,Object.freeze(r(r(r({},qe.iconDefaults),s),i))),c.push(e))}))}return"none"===i?c.length>0:c}})),Qe=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.listIcons=t.getIcon=t.iconExists=t.addIcon=t.addIconSet=t.getStorage=t.newStorage=void 0;const n=Object.create(null);function o(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function i(e,t){void 0===n[e]&&(n[e]=Object.create(null));const i=n[e];return void 0===i[t]&&(i[t]=o(e,t)),i[t]}t.newStorage=o,t.getStorage=i,t.addIconSet=function(e,t,n="none"){const o=Date.now();return Ge.parseIconSet(t,((t,n)=>{null===n?e.missing[t]=o:e.icons[t]=n}),n)},t.addIcon=function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]=Object.freeze(qe.fullIcon(n)),!0}catch(o){}return!1},t.iconExists=function(e,t){return void 0!==e.icons[t]},t.getIcon=function(e,t){const n=e.icons[t];return void 0===n?null:n},t.listIcons=function(e,t){let o,r=[];return o="string"==typeof e?[e]:Object.keys(n),o.forEach((e=>{let o;o="string"==typeof e&&"string"==typeof t?[t]:void 0===n[e]?[]:Object.keys(n[e]),o.forEach((t=>{const n=i(e,t),o=Object.keys(n.icons).map((n=>(""!==e?"@"+e+":":"")+t+":"+n));r=r.concat(o)}))})),r}})),Ve=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.storageFunctions=t.addCollection=t.addIcon=t.getIconData=t.allowSimpleNames=void 0;let n=!1;function o(e){const t="string"==typeof e?Ue.stringToIcon(e,!0,n):e;return t?Qe.getIcon(Qe.getStorage(t.provider,t.prefix),t.name):null}function i(e,t){const o=Ue.stringToIcon(e,!0,n);if(!o)return!1;const i=Qe.getStorage(o.provider,o.prefix);return Qe.addIcon(i,o.name,t)}function c(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t="string"==typeof e.provider?e.provider:""),n&&""===t&&("string"!=typeof e.prefix||""===e.prefix)){let t=!1;return Ge.parseIconSet(e,((e,n)=>{null!==n&&i(e,n)&&(t=!0)})),t}if("string"!=typeof e.prefix||!Ue.validateIcon({provider:t,prefix:e.prefix,name:"a"}))return!1;const o=Qe.getStorage(t,e.prefix);return!!Qe.addIconSet(o,e)}t.allowSimpleNames=function(e){return"boolean"==typeof e&&(n=e),n},t.getIconData=o,t.addIcon=i,t.addCollection=c,t.storageFunctions={iconExists:e=>null!==o(e),getIcon:e=>{const t=o(e);return t?r({},t):null},listIcons:Qe.listIcons,addIcon:i,addCollection:c}})),He=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.replaceIDs=void 0;const n=/\sid="(\S+)"/g,o="([^A-Za-z0-9_-])";const i="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-";let r=0;t.replaceIDs=function(e,t=i){const c=[];let s;for(;s=n.exec(e);)c.push(s[1]);return c.length?(c.forEach((n=>{const i="function"==typeof t?t():t+r++;e=e.replace(new RegExp(o+"("+(n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")")+o,"g"),"$1"+i+"$3")})),e):e}})),Je=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.calculateSize=void 0;const n=/(-?[0-9.]*[0-9]+[0-9.]*)/g,o=/^-?[0-9.]*[0-9]+[0-9.]*$/g;t.calculateSize=function(e,t,i){if(1===t)return e;if(i=void 0===i?100:i,"number"==typeof e)return Math.ceil(e*t*i)/i;if("string"!=typeof e)return e;const r=e.split(n);if(null===r||!r.length)return e;const c=[];let s=r.shift(),a=o.test(s);for(;;){if(a){const e=parseFloat(s);isNaN(e)?c.push(s):c.push(Math.ceil(e*t*i)/i)}else c.push(s);if(s=r.shift(),void 0===s)return c.join("");a=!a}}})),Ye=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.mergeCustomisations=t.defaults=void 0,t.defaults=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0}),t.mergeCustomisations=function(e,t){const n={};for(const o in e){const i=o;if(n[i]=e[i],void 0===t[i])continue;const r=t[i];switch(i){case"inline":case"slice":"boolean"==typeof r&&(n[i]=r);break;case"hFlip":case"vFlip":!0===r&&(n[i]=!n[i]);break;case"hAlign":case"vAlign":"string"==typeof r&&""!==r&&(n[i]=r);break;case"width":case"height":("string"==typeof r&&""!==r||"number"==typeof r&&r||null===r)&&(n[i]=r);break;case"rotate":"number"==typeof r&&(n[i]+=r)}}return n}})),Ke=Le((function(e,t){function n(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}Object.defineProperty(t,"__esModule",{value:!0}),t.iconToSVG=void 0,t.iconToSVG=function(e,t){const o={left:e.left,top:e.top,width:e.width,height:e.height};let i,r,c=e.body;[e,t].forEach((e=>{const t=[],n=e.hFlip,i=e.vFlip;let r,s=e.rotate;switch(n?i?s+=2:(t.push("translate("+(o.width+o.left)+" "+(0-o.top)+")"),t.push("scale(-1 1)"),o.top=o.left=0):i&&(t.push("translate("+(0-o.left)+" "+(o.height+o.top)+")"),t.push("scale(1 -1)"),o.top=o.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:r=o.height/2+o.top,t.unshift("rotate(90 "+r+" "+r+")");break;case 2:t.unshift("rotate(180 "+(o.width/2+o.left)+" "+(o.height/2+o.top)+")");break;case 3:r=o.width/2+o.left,t.unshift("rotate(-90 "+r+" "+r+")")}s%2==1&&(0===o.left&&0===o.top||(r=o.left,o.left=o.top,o.top=r),o.width!==o.height&&(r=o.width,o.width=o.height,o.height=r)),t.length&&(c='<g transform="'+t.join(" ")+'">'+c+"</g>")})),null===t.width&&null===t.height?(r="1em",i=Je.calculateSize(r,o.width/o.height)):null!==t.width&&null!==t.height?(i=t.width,r=t.height):null!==t.height?(r=t.height,i=Je.calculateSize(r,o.width/o.height)):(i=t.width,r=Je.calculateSize(i,o.height/o.width)),"auto"===i&&(i=o.width),"auto"===r&&(r=o.height),i="string"==typeof i?i:i+"",r="string"==typeof r?r:r+"";const s={attributes:{width:i,height:r,preserveAspectRatio:n(t),viewBox:o.left+" "+o.top+" "+o.width+" "+o.height},body:c};return t.inline&&(s.inline=!0),s}})),We=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.builderFunctions=void 0,t.builderFunctions={replaceIDs:He.replaceIDs,calculateSize:Je.calculateSize,buildIcon:(e,t)=>Ke.iconToSVG(qe.fullIcon(e),Ye.mergeCustomisations(Ye.defaults,t))}})),Xe=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.coreModules=void 0,t.coreModules={}})),Ze=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultConfig=void 0,t.defaultConfig={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1}})),et=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.sendQuery=void 0,t.sendQuery=function(e,t,n,o,i){const r=e.resources.length,c=e.random?Math.floor(Math.random()*r):e.index;let s;if(e.random){let t=e.resources.slice(0);for(s=[];t.length>1;){const e=Math.floor(Math.random()*t.length);s.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}s=s.concat(t)}else s=e.resources.slice(c).concat(e.resources.slice(0,c));const a=Date.now();let l,u="pending",f=0,d=null,p=[],h=[];function g(){d&&(clearTimeout(d),d=null)}function m(){"pending"===u&&(u="aborted"),g(),p.forEach((e=>{e.abort&&e.abort(),"pending"===e.status&&(e.status="aborted")})),p=[]}function v(e,t){t&&(h=[]),"function"==typeof e&&h.push(e)}function y(){return{startTime:a,payload:t,status:u,queriesSent:f,queriesPending:p.length,subscribe:v,abort:m}}function b(){u="failed",h.forEach((e=>{e(void 0,l)}))}function I(){p=p.filter((e=>("pending"===e.status&&(e.status="aborted"),e.abort&&e.abort(),!1)))}function _(){if("pending"!==u)return;g();const o=s.shift();if(void 0===o){if(p.length){const t="function"==typeof e.timeout?e.timeout(a):e.timeout;if(t)return void(d=setTimeout((()=>{g(),"pending"===u&&(I(),b())}),t))}return void b()}const r={getQueryStatus:y,status:"pending",resource:o,done:(t,n)=>{!function(t,n,o){const r=void 0===n;switch(p=p.filter((e=>e!==t)),u){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if(r)return void 0!==o&&(l=o),void(p.length||(s.length?_():b()));if(g(),I(),i&&!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&i(n)}u="completed",h.forEach((e=>{e(n)}))}(r,t,n)}};p.push(r),f++;const c="function"==typeof e.rotate?e.rotate(f,a):e.rotate;d=setTimeout(_,c),n(o,t,r)}return"function"==typeof o&&h.push(o),setTimeout(_),y}})),tt=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.initRedundancy=void 0,t.initRedundancy=function(e){const t=function(e){if(!("object"==typeof e&&"object"==typeof e.resources&&e.resources instanceof Array&&e.resources.length))throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in Ze.defaultConfig)void 0!==e[n]?t[n]=e[n]:t[n]=Ze.defaultConfig[n];return t}(e);let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,i,r){const c=et.sendQuery(t,e,i,((e,t)=>{o(),r&&r(e,t)}),(e=>{t.index=e}));return n.push(c),c},find:function(e){const t=n.find((t=>e(t)));return void 0!==t?t:null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}})),nt=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.sortIcons=void 0,t.sortIcons=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const i=e.provider,r=e.prefix,c=e.name;void 0===n[i]&&(n[i]=Object.create(null));const s=n[i];void 0===s[r]&&(s[r]=Qe.getStorage(i,r));const a=s[r];let l;l=void 0!==a.icons[c]?t.loaded:""===r||void 0!==a.missing[c]?t.missing:t.pending;const u={provider:i,prefix:r,name:c};l.push(u)})),t}})),ot=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.storeCallback=t.updateCallbacks=t.callbacks=void 0,t.callbacks=Object.create(null);const n=Object.create(null);function o(e,n){e.forEach((e=>{const o=e.provider;if(void 0===t.callbacks[o])return;const i=t.callbacks[o],r=e.prefix,c=i[r];c&&(i[r]=c.filter((e=>e.id!==n)))}))}t.updateCallbacks=function(e,i){void 0===n[e]&&(n[e]=Object.create(null));const r=n[e];r[i]||(r[i]=!0,setTimeout((()=>{if(r[i]=!1,void 0===t.callbacks[e]||void 0===t.callbacks[e][i])return;const n=t.callbacks[e][i].slice(0);if(!n.length)return;const c=Qe.getStorage(e,i);let s=!1;n.forEach((t=>{const n=t.icons,r=n.pending.length;n.pending=n.pending.filter((t=>{if(t.prefix!==i)return!0;const o=t.name;if(void 0!==c.icons[o])n.loaded.push({provider:e,prefix:i,name:o});else{if(void 0===c.missing[o])return s=!0,!0;n.missing.push({provider:e,prefix:i,name:o})}return!1})),n.pending.length!==r&&(s||o([{provider:e,prefix:i}],t.id),t.callback(n.loaded.slice(0),n.missing.slice(0),n.pending.slice(0),t.abort))}))})))};let i=0;t.storeCallback=function(e,n,r){const c=i++,s=o.bind(null,r,c);if(!n.pending.length)return s;const a={id:c,icons:n,callback:e,abort:s};return r.forEach((e=>{const n=e.provider,o=e.prefix;void 0===t.callbacks[n]&&(t.callbacks[n]=Object.create(null));const i=t.callbacks[n];void 0===i[o]&&(i[o]=[]),i[o].push(a)})),s}})),it=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getAPIModule=t.setAPIModule=void 0;const n=Object.create(null);t.setAPIModule=function(e,t){n[e]=t},t.getAPIModule=function(e){return void 0===n[e]?n[""]:n[e]}})),rt=Le((function(e,t){function n(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:void 0===e.path?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:!0===e.random,index:e.index?e.index:0,dataAfterTimeout:!1!==e.dataAfterTimeout}}Object.defineProperty(t,"__esModule",{value:!0}),t.getAPIConfig=t.setAPIConfig=void 0;const o=Object.create(null),i=["https://api.simplesvg.com","https://api.unisvg.com"],r=[];for(;i.length>0;)1===i.length||Math.random()>.5?r.push(i.shift()):r.push(i.pop());o[""]=n({resources:["https://api.iconify.design"].concat(r)}),t.setAPIConfig=function(e,t){const i=n(t);return null!==i&&(o[e]=i,!0)};t.getAPIConfig=e=>o[e]})),ct=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getProviders=t.listToIcons=void 0,t.listToIcons=function(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const i="string"==typeof e?Ue.stringToIcon(e,!1,n):e;t&&!Ue.validateIcon(i,n)||o.push({provider:i.provider,prefix:i.prefix,name:i.name})})),o},t.getProviders=function(e){const t=Object.create(null);return e.forEach((e=>{t[e.provider]=!0})),Object.keys(t)}})),st=Le((function(e,t){function n(){}Object.defineProperty(t,"__esModule",{value:!0}),t.API=t.getRedundancyCache=void 0;const o=Object.create(null),i=Object.create(null),r=Object.create(null),c=Object.create(null),s=Object.create(null);function a(e){if(void 0===s[e]){const t=rt.getAPIConfig(e);if(!t)return;const n={config:t,redundancy:tt.initRedundancy(t)};s[e]=n}return s[e]}t.getRedundancyCache=a;const l=Object.create(null);function u(e,t,n){function s(){const n=(""===e?"":"@"+e+":")+t,o=Math.floor(Date.now()/6e4);l[n]<o&&(l[n]=o,console.error('Unable to retrieve icons for "'+n+'" because API is not configured properly.'))}void 0===i[e]&&(i[e]=Object.create(null));const u=i[e];void 0===c[e]&&(c[e]=Object.create(null));const f=c[e];void 0===o[e]&&(o[e]=Object.create(null));const d=o[e];let p;void 0===u[t]?u[t]=n:u[t]=u[t].concat(n).sort(),f[t]||(f[t]=!0,setTimeout((()=>{f[t]=!1;const n=u[t];delete u[t];const o=it.getAPIModule(e);if(!o)return void s();if(void 0===p){const t=a(e);if(void 0===t)return void s();p=t}o.prepare(e,t,n).forEach((n=>{p.redundancy.query(n,o.send,((o,i)=>{const c=Qe.getStorage(e,t);if("object"!=typeof o){if(404!==i)return;const e=Date.now();n.icons.forEach((t=>{c.missing[t]=e}))}else try{const n=Qe.addIconSet(c,o,"all");if("boolean"==typeof n)return;const i=d[t];n.forEach((e=>{delete i[e]})),Xe.coreModules.cache&&Xe.coreModules.cache(e,o)}catch(s){console.error(s)}!function(e,t){void 0===r[e]&&(r[e]=Object.create(null));const n=r[e];n[t]||(n[t]=!0,setTimeout((()=>{n[t]=!1,ot.updateCallbacks(e,t)})))}(e,t)}))}))})))}t.API={isPending:e=>void 0!==o[e.provider]&&void 0!==o[e.provider][e.prefix]&&void 0!==o[e.provider][e.prefix][e.name],loadIcons:(e,t)=>{const i=ct.listToIcons(e,!0,Ve.allowSimpleNames()),r=nt.sortIcons(i);if(!r.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(r.loaded,r.missing,r.pending,n)})),()=>{e=!1}}const c=Object.create(null),s=[];let a,l;r.pending.forEach((e=>{const t=e.provider,n=e.prefix;if(n===l&&t===a)return;a=t,l=n,s.push({provider:t,prefix:n}),void 0===o[t]&&(o[t]=Object.create(null));const i=o[t];void 0===i[n]&&(i[n]=Object.create(null)),void 0===c[t]&&(c[t]=Object.create(null));const r=c[t];void 0===r[n]&&(r[n]=[])}));const f=Date.now();return r.pending.forEach((e=>{const t=e.provider,n=e.prefix,i=e.name,r=o[t][n];void 0===r[i]&&(r[i]=f,c[t][n].push(i))})),s.forEach((e=>{const t=e.provider,n=e.prefix;c[t][n].length&&u(t,n,c[t][n])})),t?ot.storeCallback(t,r,s):n}}})),at=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.APIInternalFunctions=t.APIFunctions=void 0,t.APIFunctions={loadIcons:st.API.loadIcons,addAPIProvider:rt.setAPIConfig},t.APIInternalFunctions={getAPI:st.getRedundancyCache,getAPIConfig:rt.getAPIConfig,setAPIModule:it.setAPIModule}})),lt=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getAPIModule=void 0;let n=null,o="{prefix}.js?icons={icons}&callback={callback}";const i=Object.create(null),r=Object.create(null);function c(){if(null===n){const e=self;let t="Iconify",i=".cb";if(void 0===e[t])t="IconifyJSONP",i="",void 0===e[t]&&(e[t]=Object.create(null)),n=e[t];else{const o=e[t];void 0===o.cb&&(o.cb=Object.create(null)),n=o.cb}o=o.replace("{callback}",t+i+".{cb}")}return n}t.getAPIModule=e=>({prepare:(t,n,s)=>{const a=[];let l=i[t+":"+n];void 0===l&&(l=function(t,n){const s=e(t);if(!s)return 0;let a;if(s.maxURL){let e=0;s.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)})),c();const i=3;a=s.maxURL-e-s.path.length-o.replace("{provider}",t).replace("{prefix}",n).replace("{icons}","").length-i}else a=0;const l=t+":"+n;return r[l]=s.path,i[l]=a,a}(t,n));let u={provider:t,prefix:n,icons:[]},f=0;return s.forEach(((e,o)=>{f+=e.length+1,f>=l&&o>0&&(a.push(u),u={provider:t,prefix:n,icons:[]},f=e.length),u.icons.push(e)})),a.push(u),a},send:(e,t,n)=>{const i=t.provider,s=t.prefix,a=t.icons.join(","),l=i+":"+s,u=s.split("-").shift().slice(0,3),f=c();let d=function(e){let t,n=0;for(t=e.length-1;t>=0;t--)n+=e.charCodeAt(t);return n%999}(i+":"+e+":"+s+":"+a);for(;void 0!==f[u+d];)d++;const p=u+d,h=r[l]+o.replace("{provider}",i).replace("{prefix}",s).replace("{icons}",a).replace("{cb}",p);f[p]=e=>{delete f[p],n.done(e)};const g=e+h,m=document.createElement("script");m.type="text/javascript",m.async=!0,m.src=g,document.head.appendChild(m)}})})),ut=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getAPIModule=t.setFetch=void 0;const n="{prefix}.json?icons={icons}",o=Object.create(null),i=Object.create(null);let r=null;try{r=fetch}catch(c){}t.setFetch=function(e){r=e};t.getAPIModule=e=>({prepare:(t,r,c)=>{const s=[];let a=o[r];void 0===a&&(a=function(t,r){const c=e(t);if(!c)return 0;let s;if(c.maxURL){let e=0;c.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)})),s=c.maxURL-e-c.path.length-n.replace("{provider}",t).replace("{prefix}",r).replace("{icons}","").length}else s=0;const a=t+":"+r;return i[a]=c.path,o[a]=s,s}(t,r));let l={provider:t,prefix:r,icons:[]},u=0;return c.forEach(((e,n)=>{u+=e.length+1,u>=a&&n>0&&(s.push(l),l={provider:t,prefix:r,icons:[]},u=e.length),l.icons.push(e)})),s.push(l),s},send:(e,t,o)=>{const c=t.provider,s=t.prefix,a=t.icons.join(","),l=i[c+":"+s]+n.replace("{provider}",c).replace("{prefix}",s).replace("{icons}",a);r?r(e+l).then((e=>{if(200===e.status)return e.json();o.done(void 0,e.status)})).then((e=>{"object"==typeof e&&null!==e&&o.done(e)})).catch((e=>{o.done(void 0,e.errno)})):o.done(void 0,424)}})})),ft=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.storeCache=t.loadCache=t.mock=t.emptyList=t.count=t.config=void 0;const n="iconify2",o="iconify",i="iconify-count",r="iconify-version",c=36e5;t.config={local:!0,session:!0};let s=!1;t.count={local:0,session:0},t.emptyList={local:[],session:[]};let a="undefined"==typeof window?{}:window;function l(e){const n=e+"Storage";try{if(a&&a[n]&&"number"==typeof a[n].length)return a[n]}catch(o){}return t.config[e]=!1,null}function u(e,n,o){try{return e.setItem(i,o+""),t.count[n]=o,!0}catch(r){return!1}}function f(e){const t=e.getItem(i);if(t){const e=parseInt(t);return e||0}return 0}t.mock=function(e){s=!1,a=e};t.loadCache=()=>{if(s)return;s=!0;const e=Math.floor(Date.now()/c)-168;function i(i){const c=l(i);if(!c)return;const s=t=>{const n=o+t,i=c.getItem(n);if("string"!=typeof i)return!1;let r=!0;try{const t=JSON.parse(i);if("object"!=typeof t||"number"!=typeof t.cached||t.cached<e||"string"!=typeof t.provider||"object"!=typeof t.data||"string"!=typeof t.data.prefix)r=!1;else{const e=t.provider,n=t.data.prefix,o=Qe.getStorage(e,n);r=Qe.addIconSet(o,t.data)}}catch(s){r=!1}return r||c.removeItem(n),r};try{const e=c.getItem(r);if(e!==n)return e&&function(e){try{const t=f(e);for(let n=0;n<t;n++)e.removeItem(o+n)}catch(t){}}(c),void function(e,t){try{e.setItem(r,n)}catch(o){}u(e,t,0)}(c,i);let a=f(c);for(let n=a-1;n>=0;n--)s(n)||(n===a-1?a--:t.emptyList[i].push(n));u(c,i,a)}catch(a){}}for(const n in t.config)i(n)};t.storeCache=(e,n)=>{function i(i){if(!t.config[i])return!1;const r=l(i);if(!r)return!1;let s=t.emptyList[i].shift();if(void 0===s&&(s=t.count[i],!u(r,i,s+1)))return!1;try{const t={cached:Math.floor(Date.now()/c),provider:e,data:n};r.setItem(o+s,JSON.stringify(t))}catch(a){return!1}return!0}s||t.loadCache(),i("local")||i("session")}}));Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.toggleBrowserCache=void 0,t.toggleBrowserCache=function(e,t){switch(e){case"local":case"session":ft.config[e]=t;break;case"all":for(const e in ft.config)ft.config[e]=t}}}));var dt=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.alignmentFromString=t.flipFromString=void 0;const n=/[\s,]+/;t.flipFromString=function(e,t){t.split(n).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))},t.alignmentFromString=function(e,t){t.split(n).forEach((t=>{const n=t.trim();switch(n){case"left":case"center":case"right":e.hAlign=n;break;case"top":case"middle":case"bottom":e.vAlign=n;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}}))}})),pt=Le((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.rotateFromString=void 0,t.rotateFromString=function(e){const t=e.replace(/^-?[0-9.]*/,"");function n(e){for(;e<0;)e+=4;return e%4}if(""===t){const t=parseInt(e);return isNaN(t)?0:n(t)}if(t!==e){let o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-t.length));return isNaN(i)?0:(i/=o,i%1==0?n(i):0)}}return 0}}));const ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};Ve.storageFunctions.iconExists,Ve.storageFunctions.getIcon,Ve.storageFunctions.listIcons,Ve.storageFunctions.addIcon;const gt=Ve.storageFunctions.addCollection;We.builderFunctions.calculateSize,We.builderFunctions.replaceIDs,We.builderFunctions.buildIcon,at.APIFunctions.loadIcons,at.APIFunctions.addAPIProvider;const mt=at.APIInternalFunctions;Ve.allowSimpleNames(!0),Xe.coreModules.api=st.API;let vt=ut.getAPIModule;try{"undefined"!=typeof document&&"undefined"!=typeof window&&(vt="function"==typeof fetch&&"function"==typeof Promise?ut.getAPIModule:lt.getAPIModule)}catch(Pt){}if(it.setAPIModule("",vt(rt.getAPIConfig)),mt.setFetch=e=>{ut.setFetch(e),vt!==ut.getAPIModule&&(vt=ut.getAPIModule,it.setAPIModule("",vt(rt.getAPIConfig)))},"undefined"!=typeof document&&"undefined"!=typeof window){Xe.coreModules.cache=ft.storeCache,ft.loadCache();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!gt(e))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!=typeof o||!o||void 0===o.resources)continue;rt.setAPIConfig(e,o)||console.error(n)}catch(Ot){console.error(n)}}}}function yt(e,t){return e?function(e,t){const n=Ye.mergeCustomisations(Ye.defaults,t),o=Object.assign({},ht);let i="string"==typeof t.style?t.style:"";for(let a in t){const e=t[a];if(void 0!==e)switch(a){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":n[a]=!0===e||"true"===e||1===e;break;case"flip":"string"==typeof e&&dt.flipFromString(n,e);break;case"align":"string"==typeof e&&dt.alignmentFromString(n,e);break;case"color":i=i+(i.length>0&&";"!==i.trim().slice(-1)?";":"")+"color: "+e+"; ";break;case"rotate":"string"==typeof e?n[a]=pt.rotateFromString(e):"number"==typeof e&&(n[a]=e);break;case"ariaHidden":case"aria-hidden":!0!==e&&"true"!==e&&delete o["aria-hidden"];break;default:void 0===Ye.defaults[a]&&(o[a]=e)}}const r=Ke.iconToSVG(e,n);for(let a in r.attributes)o[a]=r.attributes[a];r.inline&&(i="vertical-align: -0.125em; "+i),""!==i&&(o.style=i);let c=0;const s=t.id;return{attributes:o,body:He.replaceIDs(r.body,s?()=>s+"-"+c++:"iconify-svelte-")}}(e,t):null}function bt(e){let t,n=e[0].body+"",o=[e[0].attributes],i={};for(let r=0;r<o.length;r+=1)i=a(i,o[r]);return{c(){t=S("svg"),this.h()},l(e){t=L(e,"svg",{},1),z(t).forEach(M),this.h()},h(){N(t,i)},m(e,o){$(e,t,o),t.innerHTML=n},p(e,r){1&r&&n!==(n=e[0].body+"")&&(t.innerHTML=n),N(t,i=Me(o,[1&r&&e[0].attributes]))},d(e){e&&M(t)}}}function It(e){let t,n=null!==e[0]&&bt(e);return{c(){n&&n.c(),t=F()},l(e){n&&n.l(e),t=F()},m(e,o){n&&n.m(e,o),$(e,t,o)},p(e,[o]){null!==e[0]?n?n.p(e,o):(n=bt(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:c,o:c,d(e){n&&n.d(e),e&&M(t)}}}function _t(e,t,n){const o={name:"",loading:null,destroyed:!1};let i,r=!1,c=0;function s(){n(3,c++,c)}var l;return Z((()=>{n(2,r=!0)})),l=()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))},X().$$.on_destroy.push(l),e.$$set=e=>{n(5,t=a(a({},t),v(e)))},e.$$.update=()=>{{const e=function(e,t,n,o,i){function r(){t.loading&&(t.loading.abort(),t.loading=null)}if("object"==typeof e&&null!==e&&"string"==typeof e.body)return t.name="",r(),{data:qe.fullIcon(e)};let c;if("string"!=typeof e||null===(c=Ue.stringToIcon(e,!1,!0)))return r(),null;const s=Ve.getIconData(c);if(null===s)return!n||t.loading&&t.loading.name===e||(r(),t.name="",t.loading={name:e,abort:st.API.loadIcons([c],o)}),null;r(),t.name!==e&&(t.name=e,i&&!t.destroyed&&i(e));const a=["iconify"];return""!==c.prefix&&a.push("iconify--"+c.prefix),""!==c.provider&&a.push("iconify--"+c.provider),{data:s,classes:a}}(t.icon,o,r,s,t.onLoad);n(0,i=e?yt(e.data,t):null),i&&e.classes&&n(0,i.attributes.class=("string"==typeof t.class?t.class+" ":"")+e.classes.join(" "),i)}},t=v(t),[i,o,r,c]}class xt extends Ne{constructor(e){super(),Te(this,e,_t,It,p,{})}}function jt(e){const t=e-1;return t*t*t+1}function wt(e,{delay:t=0,duration:n=400,easing:o=jt,x:i=0,y:r=0,opacity:c=0}={}){const s=getComputedStyle(e),a=+s.opacity,l="none"===s.transform?"":s.transform,u=a*(1-c);return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*i}px, ${(1-e)*r}px);\n\t\t\topacity: ${a-u*t}`}}export{Z as A,a as B,Re as C,ne as D,O as E,c as F,A as G,S as H,xt as I,D as J,h as K,Q as L,m as M,oe as N,G as O,ue as P,Oe as Q,$e as R,Ne as S,wt as T,fe as U,re as V,ke as W,f as X,z as a,T as b,L as c,M as d,k as e,$ as f,q as g,B as h,Te as i,Se as j,C as k,F as l,Ee as m,U as n,Ce as o,Me as p,Ae as q,_e as r,p as s,E as t,we as u,Fe as v,xe as w,je as x,te as y,ee as z};
