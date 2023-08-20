import{c,j as E,A as ze,m as Ze,i as $,_ as he,G as zt,R as Zt,H as Kt,w as H,k as Ke,o as Qt,P as Jt,J as er,l as te,q as we,K as tr}from"./index-b78b9c99.js";import{w as Te,T as _e,i as rr}from"./chunk-ROURZMX4-d1911d7b.js";import{m as De}from"./index-32ccd240.js";function nr(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function ar(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var or=ar(),ur={enter:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:1,transition:(n=e==null?void 0:e.enter)!=null?n:Te.enter(_e.enter,r),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:0,transition:(n=e==null?void 0:e.exit)!=null?n:Te.exit(_e.exit,r),transitionEnd:t==null?void 0:t.exit}}},Qe={initial:"exit",animate:"enter",exit:"exit",variants:ur},ir=c.forwardRef(function(t,r){const{unmountOnExit:n,in:a,className:o,transition:i,transitionEnd:u,delay:v,...l}=t,d=a||n?"enter":"exit",s=n?a&&n:!0,m={transition:i,transitionEnd:u,delay:v};return E.jsx(ze,{custom:m,children:s&&E.jsx(Ze.div,{ref:r,className:$("chakra-fade",o),custom:m,...Qe,animate:d,...l})})});ir.displayName="Fade";var pe="data-focus-lock",Je="data-focus-lock-disabled",cr="data-no-focus-lock",sr="data-autofocus-inside",lr="data-no-autofocus";function fr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function dr(e,t){var r=c.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=t,r.facade}function et(e,t){return dr(t||null,function(r){return e.forEach(function(n){return fr(n,r)})})}var ce={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},k=function(){return k=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},k.apply(this,arguments)};function tt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function vr(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function rt(e){return e}function nt(e,t){t===void 0&&(t=rt);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var i=t(o,n);return r.push(i),function(){r=r.filter(function(u){return u!==i})}},assignSyncMedium:function(o){for(n=!0;r.length;){var i=r;r=[],i.forEach(o)}r={push:function(u){return o(u)},filter:function(){return r}}},assignMedium:function(o){n=!0;var i=[];if(r.length){var u=r;r=[],u.forEach(o),i=r}var v=function(){var d=i;i=[],d.forEach(o)},l=function(){return Promise.resolve().then(v)};l(),r={push:function(d){i.push(d),l()},filter:function(d){return i=i.filter(d),r}}}};return a}function Fe(e,t){return t===void 0&&(t=rt),nt(e,t)}function at(e){e===void 0&&(e={});var t=nt(null);return t.options=k({async:!0,ssr:!1},e),t}var ot=function(e){var t=e.sideCar,r=tt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return c.createElement(n,k({},r))};ot.isSideCarExport=!0;function mr(e,t){return e.useMedium(t),ot}var ut=Fe({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),it=Fe(),hr=Fe(),pr=at({async:!0}),br=[],Ee=c.forwardRef(function(t,r){var n,a=c.useState(),o=a[0],i=a[1],u=c.useRef(),v=c.useRef(!1),l=c.useRef(null),d=t.children,s=t.disabled,m=t.noFocusGuards,h=t.persistentFocus,b=t.crossFrame,f=t.autoFocus;t.allowTextSelection;var p=t.group,g=t.className,S=t.whiteList,w=t.hasPositiveIndices,F=t.shards,C=F===void 0?br:F,x=t.as,O=x===void 0?"div":x,P=t.lockProps,y=P===void 0?{}:P,W=t.sideCar,A=t.returnFocus,Bt=t.focusOptions,oe=t.onActivation,ue=t.onDeactivation,Lt=c.useState({}),Wt=Lt[0],jt=c.useCallback(function(){l.current=l.current||document&&document.activeElement,u.current&&oe&&oe(u.current),v.current=!0},[oe]),Ht=c.useCallback(function(){v.current=!1,ue&&ue(u.current)},[ue]);c.useEffect(function(){s||(l.current=null)},[]);var Ut=c.useCallback(function(I){var j=l.current;if(j&&j.focus){var ie=typeof A=="function"?A(j):A;if(ie){var Re=typeof ie=="object"?ie:void 0;l.current=null,I?Promise.resolve().then(function(){return j.focus(Re)}):j.focus(Re)}}},[A]),Gt=c.useCallback(function(I){v.current&&ut.useMedium(I)},[]),$t=it.useMedium,Vt=c.useCallback(function(I){u.current!==I&&(u.current=I,i(I))},[]),qt=he((n={},n[Je]=s&&"disabled",n[pe]=p,n),y),Ne=m!==!0,Yt=Ne&&m!=="tail",Xt=et([r,Vt]);return c.createElement(c.Fragment,null,Ne&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:s?-1:0,style:ce}),w?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:s?-1:1,style:ce}):null],!s&&c.createElement(W,{id:Wt,sideCar:pr,observed:o,disabled:s,persistentFocus:h,crossFrame:b,autoFocus:f,whiteList:S,shards:C,onActivation:jt,onDeactivation:Ht,returnFocus:Ut,focusOptions:Bt}),c.createElement(O,he({ref:Xt},qt,{className:g,onBlur:$t,onFocus:Gt}),d),Yt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:s?-1:0,style:ce}))});Ee.propTypes={};Ee.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const ct=Ee;function be(e,t){return be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},be(e,t)}function gr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,be(e,t)}function yr(e,t){function r(n){return n.displayName||n.name||"Component"}return function(a){var o=[],i;function u(){i=e(o.map(function(l){return l.props})),t(i)}var v=function(l){gr(d,l);function d(){return l.apply(this,arguments)||this}d.peek=function(){return i};var s=d.prototype;return s.componentDidMount=function(){o.push(this),u()},s.componentDidUpdate=function(){u()},s.componentWillUnmount=function(){var h=o.indexOf(this);o.splice(h,1),u()},s.render=function(){return Zt.createElement(a,this.props)},d}(c.PureComponent);return zt(v,"displayName","SideEffect("+r(a)+")"),v}}var M=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},Q=function(e){return Array.isArray(e)?e:[e]},st=function(e){return Array.isArray(e)?e[0]:e},Sr=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},lt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ft=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Cr=function(e,t){return!e||ft(e)||!Sr(e)&&t(lt(e))},dt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=Cr(t,dt.bind(void 0,e));return e.set(t,n),n},wr=function(e,t){return e&&!ft(e)?xr(e)?t(lt(e)):!1:!0},vt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=wr(t,vt.bind(void 0,e));return e.set(t,n),n},mt=function(e){return e.dataset},Fr=function(e){return e.tagName==="BUTTON"},ht=function(e){return e.tagName==="INPUT"},pt=function(e){return ht(e)&&e.type==="radio"},Er=function(e){return!((ht(e)||Fr(e))&&(e.type==="hidden"||e.disabled))},xr=function(e){var t=e.getAttribute(lr);return![!0,"true",""].includes(t)},xe=function(e){var t;return!!(e&&(!((t=mt(e))===null||t===void 0)&&t.focusGuard))},J=function(e){return!xe(e)},Or=function(e){return!!e},kr=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},bt=function(e,t,r){return M(e).map(function(n,a){return{node:n,index:a,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(kr)},Mr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Oe=Mr.join(","),Pr="".concat(Oe,", [data-focus-guard]"),gt=function(e,t){return M((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?Pr:Oe)?[n]:[],gt(n))},[])},Ir=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?re([e.contentDocument.body],t):[e]},re=function(e,t){return e.reduce(function(r,n){var a,o=gt(n,t),i=(a=[]).concat.apply(a,o.map(function(u){return Ir(u,t)}));return r.concat(i,n.parentNode?M(n.parentNode.querySelectorAll(Oe)).filter(function(u){return u===n}):[])},[])},Ar=function(e){var t=e.querySelectorAll("[".concat(sr,"]"));return M(t).map(function(r){return re([r])}).reduce(function(r,n){return r.concat(n)},[])},ke=function(e,t){return M(e).filter(function(r){return dt(t,r)}).filter(function(r){return Er(r)})},Be=function(e,t){return t===void 0&&(t=new Map),M(e).filter(function(r){return vt(t,r)})},ge=function(e,t,r){return bt(ke(re(e,r),t),!0,r)},Le=function(e,t){return bt(ke(re(e),t),!1)},Nr=function(e,t){return ke(Ar(e),t)},D=function(e,t){return e.shadowRoot?D(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:M(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var a=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return a?D(a,t):!1}return D(r,t)})},Rr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var a=n+1;a<r;a+=1){var o=e[n].compareDocumentPosition(e[a]);(o&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(o&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(i,u){return!t.has(u)})},yt=function(e){return e.parentNode?yt(e.parentNode):e},Me=function(e){var t=Q(e);return t.filter(Boolean).reduce(function(r,n){var a=n.getAttribute(pe);return r.push.apply(r,a?Rr(M(yt(n).querySelectorAll("[".concat(pe,'="').concat(a,'"]:not([').concat(Je,'="disabled"])')))):[n]),r},[])},Tr=function(e){try{return e()}catch{return}},U=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?U(t.shadowRoot):t instanceof HTMLIFrameElement&&Tr(function(){return t.contentWindow.document})?U(t.contentWindow.document):t}},_r=function(e,t){return e===t},Dr=function(e,t){return!!M(e.querySelectorAll("iframe")).some(function(r){return _r(r,t)})},St=function(e,t){return t===void 0&&(t=U(st(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Me(e).some(function(r){return D(r,t)||Dr(r,t)})},Br=function(e){e===void 0&&(e=document);var t=U(e);return t?M(e.querySelectorAll("[".concat(cr,"]"))).some(function(r){return D(r,t)}):!1},Lr=function(e,t){return t.filter(pt).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Pe=function(e,t){return pt(e)&&e.name?Lr(e,t):e},Wr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Pe(r,e))}),e.filter(function(r){return t.has(r)})},We=function(e){return e[0]&&e.length>1?Pe(e[0],e):e[0]},je=function(e,t){return e.length>1?e.indexOf(Pe(e[t],e)):t},Ct="NEW_FOCUS",jr=function(e,t,r,n){var a=e.length,o=e[0],i=e[a-1],u=xe(r);if(!(r&&e.indexOf(r)>=0)){var v=r!==void 0?t.indexOf(r):-1,l=n?t.indexOf(n):v,d=n?e.indexOf(n):-1,s=v-l,m=t.indexOf(o),h=t.indexOf(i),b=Wr(t),f=r!==void 0?b.indexOf(r):-1,p=f-(n?b.indexOf(n):v),g=je(e,0),S=je(e,a-1);if(v===-1||d===-1)return Ct;if(!s&&d>=0)return d;if(v<=m&&u&&Math.abs(s)>1)return S;if(v>=h&&u&&Math.abs(s)>1)return g;if(s&&Math.abs(p)>1)return d;if(v<=m)return S;if(v>h)return g;if(s)return Math.abs(s)>1?d:(a+d+s)%a}},Hr=function(e){return function(t){var r,n=(r=mt(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},Ur=function(e,t,r){var n=e.map(function(o){var i=o.node;return i}),a=Be(n.filter(Hr(r)));return a&&a.length?We(a):We(Be(t))},ye=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&ye(e.parentNode.host||e.parentNode,t),t},se=function(e,t){for(var r=ye(e),n=ye(t),a=0;a<r.length;a+=1){var o=r[a];if(n.indexOf(o)>=0)return o}return!1},wt=function(e,t,r){var n=Q(e),a=Q(t),o=n[0],i=!1;return a.filter(Boolean).forEach(function(u){i=se(i||u,u)||i,r.filter(Boolean).forEach(function(v){var l=se(o,v);l&&(!i||D(l,i)?i=l:i=se(l,i))})}),i},Gr=function(e,t){return e.reduce(function(r,n){return r.concat(Nr(n,t))},[])},$r=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(Or)},Vr=function(e,t){var r=U(Q(e).length>0?document:st(e).ownerDocument),n=Me(e).filter(J),a=wt(r||e,e,n),o=new Map,i=Le(n,o),u=ge(n,o).filter(function(h){var b=h.node;return J(b)});if(!(!u[0]&&(u=i,!u[0]))){var v=Le([a],o).map(function(h){var b=h.node;return b}),l=$r(v,u),d=l.map(function(h){var b=h.node;return b}),s=jr(d,v,r,t);if(s===Ct){var m=Ur(i,d,Gr(n,o));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return s===void 0?s:l[s]}},qr=function(e){var t=Me(e).filter(J),r=wt(e,e,t),n=new Map,a=ge([r],n,!0),o=ge(t,n).filter(function(i){var u=i.node;return J(u)}).map(function(i){var u=i.node;return u});return a.map(function(i){var u=i.node,v=i.index;return{node:u,index:v,lockItem:o.indexOf(u)>=0,guard:xe(u)}})},Yr=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},le=0,fe=!1,Ft=function(e,t,r){r===void 0&&(r={});var n=Vr(e,t);if(!fe&&n){if(le>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),fe=!0,setTimeout(function(){fe=!1},1);return}le++,Yr(n.node,r.focusOptions),le--}};function Ie(e){setTimeout(e,1)}var Xr=function(){return document&&document.activeElement===document.body},zr=function(){return Xr()||Br()},B=null,_=null,L=null,G=!1,Zr=function(){return!0},Kr=function(t){return(B.whiteList||Zr)(t)},Qr=function(t,r){L={observerNode:t,portaledElement:r}},Jr=function(t){return L&&L.portaledElement===t};function He(e,t,r,n){var a=null,o=e;do{var i=n[o];if(i.guard)i.node.dataset.focusAutoGuard&&(a=i);else if(i.lockItem){if(o!==e)return;a=null}else break}while((o+=r)!==t);a&&(a.node.tabIndex=0)}var en=function(t){return t&&"current"in t?t.current:t},tn=function(t){return t?!!G:G==="meanwhile"},rn=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},nn=function(t,r){return r.some(function(n){return rn(t,n,n)})},ee=function(){var t=!1;if(B){var r=B,n=r.observed,a=r.persistentFocus,o=r.autoFocus,i=r.shards,u=r.crossFrame,v=r.focusOptions,l=n||L&&L.portaledElement,d=document&&document.activeElement;if(l){var s=[l].concat(i.map(en).filter(Boolean));if((!d||Kr(d))&&(a||tn(u)||!zr()||!_&&o)&&(l&&!(St(s)||d&&nn(d,s)||Jr(d))&&(document&&!_&&d&&!o?(d.blur&&d.blur(),document.body.focus()):(t=Ft(s,_,{focusOptions:v}),L={})),G=!1,_=document&&document.activeElement),document){var m=document&&document.activeElement,h=qr(s),b=h.map(function(f){var p=f.node;return p}).indexOf(m);b>-1&&(h.filter(function(f){var p=f.guard,g=f.node;return p&&g.dataset.focusAutoGuard}).forEach(function(f){var p=f.node;return p.removeAttribute("tabIndex")}),He(b,h.length,1,h),He(b,-1,-1,h))}}}return t},Et=function(t){ee()&&t&&(t.stopPropagation(),t.preventDefault())},Ae=function(){return Ie(ee)},an=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||Qr(n,r)},on=function(){return null},xt=function(){G="just",Ie(function(){G="meanwhile"})},un=function(){document.addEventListener("focusin",Et),document.addEventListener("focusout",Ae),window.addEventListener("blur",xt)},cn=function(){document.removeEventListener("focusin",Et),document.removeEventListener("focusout",Ae),window.removeEventListener("blur",xt)};function sn(e){return e.filter(function(t){var r=t.disabled;return!r})}function ln(e){var t=e.slice(-1)[0];t&&!B&&un();var r=B,n=r&&t&&t.id===r.id;B=t,r&&!n&&(r.onDeactivation(),e.filter(function(a){var o=a.id;return o===r.id}).length||r.returnFocus(!t)),t?(_=null,(!n||r.observed!==t.observed)&&t.onActivation(),ee(),Ie(ee)):(cn(),_=null)}ut.assignSyncMedium(an);it.assignMedium(Ae);hr.assignMedium(function(e){return e({moveFocusInside:Ft,focusInside:St})});const fn=yr(sn,ln)(on);var Ot=c.forwardRef(function(t,r){return c.createElement(ct,he({sideCar:fn,ref:r},t))}),kt=ct.propTypes||{};kt.sideCar;nr(kt,["sideCar"]);Ot.propTypes={};const Ue=Ot;var dn=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],vn=dn.join(),mn=e=>e.offsetWidth>0&&e.offsetHeight>0;function hn(e){const t=Array.from(e.querySelectorAll(vn));return t.unshift(e),t.filter(r=>rr(r)&&mn(r))}var Ge,pn=(Ge=Ue.default)!=null?Ge:Ue,Mt=e=>{const{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:a,children:o,isDisabled:i,autoFocus:u,persistentFocus:v,lockFocusAcrossFrames:l}=e,d=c.useCallback(()=>{t!=null&&t.current?t.current.focus():n!=null&&n.current&&hn(n.current).length===0&&requestAnimationFrame(()=>{var b;(b=n.current)==null||b.focus()})},[t,n]),s=c.useCallback(()=>{var h;(h=r==null?void 0:r.current)==null||h.focus()},[r]),m=a&&!r;return E.jsx(pn,{crossFrame:l,persistentFocus:v,autoFocus:u,disabled:i,onActivation:d,onDeactivation:s,returnFocus:m,children:o})};Mt.displayName="FocusLock";var bn=or?c.useLayoutEffect:c.useEffect;function $e(e,t=[]){const r=c.useRef(e);return bn(()=>{r.current=e}),c.useCallback((...n)=>{var a;return(a=r.current)==null?void 0:a.call(r,...n)},t)}function gn(e,t){const r=c.useId();return c.useMemo(()=>e||[t,r].filter(Boolean).join("-"),[e,t,r])}function yn(e,t){const r=e!==void 0;return[r,r&&typeof e<"u"?e:t]}function ha(e={}){const{onClose:t,onOpen:r,isOpen:n,id:a}=e,o=$e(r),i=$e(t),[u,v]=c.useState(e.defaultIsOpen||!1),[l,d]=yn(n,u),s=gn(a,"disclosure"),m=c.useCallback(()=>{l||v(!1),i==null||i()},[l,i]),h=c.useCallback(()=>{l||v(!0),o==null||o()},[l,o]),b=c.useCallback(()=>{(d?m:h)()},[d,h,m]);return{isOpen:!!d,onOpen:h,onClose:m,onToggle:b,isControlled:l,getButtonProps:(f={})=>({...f,"aria-expanded":d,"aria-controls":s,onClick:Kt(f.onClick,b)}),getDisclosureProps:(f={})=>({...f,hidden:!d,id:s})}}var Sn=Object.defineProperty,Cn=(e,t,r)=>t in e?Sn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wn=(e,t,r)=>(Cn(e,typeof t!="symbol"?t+"":t,r),r),Fn=class{constructor(){wn(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},Se=new Fn;function Pt(e,t){const[r,n]=c.useState(0);return c.useEffect(()=>{const a=e.current;if(a){if(t){const o=Se.add(a);n(o)}return()=>{Se.remove(a),n(0)}}},[t,e]),r}var En=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},N=new WeakMap,q=new WeakMap,Y={},de=0,It=function(e){return e&&(e.host||It(e.parentNode))},xn=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=It(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},On=function(e,t,r,n){var a=xn(t,Array.isArray(e)?e:[e]);Y[r]||(Y[r]=new WeakMap);var o=Y[r],i=[],u=new Set,v=new Set(a),l=function(s){!s||u.has(s)||(u.add(s),l(s.parentNode))};a.forEach(l);var d=function(s){!s||v.has(s)||Array.prototype.forEach.call(s.children,function(m){if(u.has(m))d(m);else{var h=m.getAttribute(n),b=h!==null&&h!=="false",f=(N.get(m)||0)+1,p=(o.get(m)||0)+1;N.set(m,f),o.set(m,p),i.push(m),f===1&&b&&q.set(m,!0),p===1&&m.setAttribute(r,"true"),b||m.setAttribute(n,"true")}})};return d(t),u.clear(),de++,function(){i.forEach(function(s){var m=N.get(s)-1,h=o.get(s)-1;N.set(s,m),o.set(s,h),m||(q.has(s)||s.removeAttribute(n),q.delete(s)),h||s.removeAttribute(r)}),de--,de||(N=new WeakMap,N=new WeakMap,q=new WeakMap,Y={})}},kn=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=t||En(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),On(n,a,r,"aria-hidden")):function(){return null}};function Mn(e){const{isOpen:t,onClose:r,id:n,closeOnOverlayClick:a=!0,closeOnEsc:o=!0,useInert:i=!0,onOverlayClick:u,onEsc:v}=e,l=c.useRef(null),d=c.useRef(null),[s,m,h]=In(n,"chakra-modal","chakra-modal--header","chakra-modal--body");Pn(l,t&&i);const b=Pt(l,t),f=c.useRef(null),p=c.useCallback(y=>{f.current=y.target},[]),g=c.useCallback(y=>{y.key==="Escape"&&(y.stopPropagation(),o&&(r==null||r()),v==null||v())},[o,r,v]),[S,w]=c.useState(!1),[F,C]=c.useState(!1),x=c.useCallback((y={},W=null)=>({role:"dialog",...y,ref:De(W,l),id:s,tabIndex:-1,"aria-modal":!0,"aria-labelledby":S?m:void 0,"aria-describedby":F?h:void 0,onClick:H(y.onClick,A=>A.stopPropagation())}),[h,F,s,m,S]),O=c.useCallback(y=>{y.stopPropagation(),f.current===y.target&&Se.isTopModal(l.current)&&(a&&(r==null||r()),u==null||u())},[r,a,u]),P=c.useCallback((y={},W=null)=>({...y,ref:De(W,d),onClick:H(y.onClick,O),onKeyDown:H(y.onKeyDown,g),onMouseDown:H(y.onMouseDown,p)}),[g,p,O]);return{isOpen:t,onClose:r,headerId:m,bodyId:h,setBodyMounted:C,setHeaderMounted:w,dialogRef:l,overlayRef:d,getDialogProps:x,getDialogContainerProps:P,index:b}}function Pn(e,t){const r=e.current;c.useEffect(()=>{if(!(!e.current||!t))return kn(e.current)},[t,e,r])}function In(e,...t){const r=c.useId(),n=e||r;return c.useMemo(()=>t.map(a=>`${a}-${n}`),[n,t])}var[An,ne]=Ke({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Nn,V]=Ke({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Rn=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:r,children:n,autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:v,blockScrollOnMount:l,allowPinchZoom:d,preserveScrollBarGap:s,motionPreset:m,lockFocusAcrossFrames:h,onCloseComplete:b}=t,f=Qt("Modal",t),g={...Mn(t),autoFocus:a,trapFocus:o,initialFocusRef:i,finalFocusRef:u,returnFocusOnClose:v,blockScrollOnMount:l,allowPinchZoom:d,preserveScrollBarGap:s,motionPreset:m,lockFocusAcrossFrames:h};return E.jsx(Nn,{value:g,children:E.jsx(An,{value:f,children:E.jsx(ze,{onExitComplete:b,children:g.isOpen&&E.jsx(Jt,{...r,children:n})})})})};Rn.displayName="Modal";var Z="right-scroll-bar-position",K="width-before-scroll-bar",Tn="with-scroll-bars-hidden",_n="--removed-body-scroll-bar-size",At=at(),ve=function(){},ae=c.forwardRef(function(e,t){var r=c.useRef(null),n=c.useState({onScrollCapture:ve,onWheelCapture:ve,onTouchMoveCapture:ve}),a=n[0],o=n[1],i=e.forwardProps,u=e.children,v=e.className,l=e.removeScrollBar,d=e.enabled,s=e.shards,m=e.sideCar,h=e.noIsolation,b=e.inert,f=e.allowPinchZoom,p=e.as,g=p===void 0?"div":p,S=e.gapMode,w=tt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),F=m,C=et([r,t]),x=k(k({},w),a);return c.createElement(c.Fragment,null,d&&c.createElement(F,{sideCar:At,removeScrollBar:l,shards:s,noIsolation:h,inert:b,setCallbacks:o,allowPinchZoom:!!f,lockRef:r,gapMode:S}),i?c.cloneElement(c.Children.only(u),k(k({},x),{ref:C})):c.createElement(g,k({},x,{className:v,ref:C}),u))});ae.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ae.classNames={fullWidth:K,zeroRight:Z};var Ve,Dn=function(){if(Ve)return Ve;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Bn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Dn();return t&&e.setAttribute("nonce",t),e}function Ln(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Wn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var jn=function(){var e=0,t=null;return{add:function(r){e==0&&(t=Bn())&&(Ln(t,r),Wn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Hn=function(){var e=jn();return function(t,r){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},Nt=function(){var e=Hn(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},Un={left:0,top:0,right:0,gap:0},me=function(e){return parseInt(e||"",10)||0},Gn=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[me(r),me(n),me(a)]},$n=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Un;var t=Gn(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},Vn=Nt(),qn=function(e,t,r,n){var a=e.left,o=e.top,i=e.right,u=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Tn,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(u,"px ").concat(n,`;
  }
  body {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(u,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Z,` {
    right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(K,` {
    margin-right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(Z," .").concat(Z,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(K," .").concat(K,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body {
    `).concat(_n,": ").concat(u,`px;
  }
`)},Yn=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n,o=c.useMemo(function(){return $n(a)},[a]);return c.createElement(Vn,{styles:qn(o,!t,a,r?"":"!important")})},Ce=!1;if(typeof window<"u")try{var X=Object.defineProperty({},"passive",{get:function(){return Ce=!0,!0}});window.addEventListener("test",X,X),window.removeEventListener("test",X,X)}catch{Ce=!1}var R=Ce?{passive:!1}:!1,Xn=function(e){return e.tagName==="TEXTAREA"},Rt=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!Xn(e)&&r[t]==="visible")},zn=function(e){return Rt(e,"overflowY")},Zn=function(e){return Rt(e,"overflowX")},qe=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=Tt(e,n);if(a){var o=_t(e,n),i=o[1],u=o[2];if(i>u)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},Kn=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},Qn=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},Tt=function(e,t){return e==="v"?zn(t):Zn(t)},_t=function(e,t){return e==="v"?Kn(t):Qn(t)},Jn=function(e,t){return e==="h"&&t==="rtl"?-1:1},ea=function(e,t,r,n,a){var o=Jn(e,window.getComputedStyle(t).direction),i=o*n,u=r.target,v=t.contains(u),l=!1,d=i>0,s=0,m=0;do{var h=_t(e,u),b=h[0],f=h[1],p=h[2],g=f-p-o*b;(b||g)&&Tt(e,u)&&(s+=g,m+=b),u=u.parentNode}while(!v&&u!==document.body||v&&(t.contains(u)||t===u));return(d&&(a&&s===0||!a&&i>s)||!d&&(a&&m===0||!a&&-i>m))&&(l=!0),l},z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ye=function(e){return[e.deltaX,e.deltaY]},Xe=function(e){return e&&"current"in e?e.current:e},ta=function(e,t){return e[0]===t[0]&&e[1]===t[1]},ra=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},na=0,T=[];function aa(e){var t=c.useRef([]),r=c.useRef([0,0]),n=c.useRef(),a=c.useState(na++)[0],o=c.useState(Nt)[0],i=c.useRef(e);c.useEffect(function(){i.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var f=vr([e.lockRef.current],(e.shards||[]).map(Xe),!0).filter(Boolean);return f.forEach(function(p){return p.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),f.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=c.useCallback(function(f,p){if("touches"in f&&f.touches.length===2)return!i.current.allowPinchZoom;var g=z(f),S=r.current,w="deltaX"in f?f.deltaX:S[0]-g[0],F="deltaY"in f?f.deltaY:S[1]-g[1],C,x=f.target,O=Math.abs(w)>Math.abs(F)?"h":"v";if("touches"in f&&O==="h"&&x.type==="range")return!1;var P=qe(O,x);if(!P)return!0;if(P?C=O:(C=O==="v"?"h":"v",P=qe(O,x)),!P)return!1;if(!n.current&&"changedTouches"in f&&(w||F)&&(n.current=C),!C)return!0;var y=n.current||C;return ea(y,p,f,y==="h"?w:F,!0)},[]),v=c.useCallback(function(f){var p=f;if(!(!T.length||T[T.length-1]!==o)){var g="deltaY"in p?Ye(p):z(p),S=t.current.filter(function(C){return C.name===p.type&&C.target===p.target&&ta(C.delta,g)})[0];if(S&&S.should){p.cancelable&&p.preventDefault();return}if(!S){var w=(i.current.shards||[]).map(Xe).filter(Boolean).filter(function(C){return C.contains(p.target)}),F=w.length>0?u(p,w[0]):!i.current.noIsolation;F&&p.cancelable&&p.preventDefault()}}},[]),l=c.useCallback(function(f,p,g,S){var w={name:f,delta:p,target:g,should:S};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(F){return F!==w})},1)},[]),d=c.useCallback(function(f){r.current=z(f),n.current=void 0},[]),s=c.useCallback(function(f){l(f.type,Ye(f),f.target,u(f,e.lockRef.current))},[]),m=c.useCallback(function(f){l(f.type,z(f),f.target,u(f,e.lockRef.current))},[]);c.useEffect(function(){return T.push(o),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:m}),document.addEventListener("wheel",v,R),document.addEventListener("touchmove",v,R),document.addEventListener("touchstart",d,R),function(){T=T.filter(function(f){return f!==o}),document.removeEventListener("wheel",v,R),document.removeEventListener("touchmove",v,R),document.removeEventListener("touchstart",d,R)}},[]);var h=e.removeScrollBar,b=e.inert;return c.createElement(c.Fragment,null,b?c.createElement(o,{styles:ra(a)}):null,h?c.createElement(Yn,{gapMode:e.gapMode}):null)}const oa=mr(At,aa);var Dt=c.forwardRef(function(e,t){return c.createElement(ae,k({},e,{ref:t,sideCar:oa}))});Dt.classNames=ae.classNames;const ua=Dt;function pa(e){const{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:a,blockScrollOnMount:o,allowPinchZoom:i,finalFocusRef:u,returnFocusOnClose:v,preserveScrollBarGap:l,lockFocusAcrossFrames:d,isOpen:s}=V(),[m,h]=er();c.useEffect(()=>{!m&&h&&setTimeout(h)},[m,h]);const b=Pt(n,s);return E.jsx(Mt,{autoFocus:t,isDisabled:!r,initialFocusRef:a,finalFocusRef:u,restoreFocus:v,contentRef:n,lockFocusAcrossFrames:d,children:E.jsx(ua,{removeScrollBar:!l,allowPinchZoom:i,enabled:b===1&&o,forwardProps:!0,children:e.children})})}var ia=te((e,t)=>{const{className:r,...n}=e,{headerId:a,setHeaderMounted:o}=V();c.useEffect(()=>(o(!0),()=>o(!1)),[o]);const i=$("chakra-modal__header",r),v={flex:0,...ne().header};return E.jsx(we.header,{ref:t,className:i,id:a,...n,__css:v})});ia.displayName="ModalHeader";var ca=we(Ze.div),sa=te((e,t)=>{const{className:r,transition:n,motionProps:a,...o}=e,i=$("chakra-modal__overlay",r),v={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...ne().overlay},{motionPreset:l}=V(),s=a||(l==="none"?{}:Qe);return E.jsx(ca,{...s,__css:v,ref:t,className:i,...o})});sa.displayName="ModalOverlay";var la=te((e,t)=>{const{className:r,...n}=e,{bodyId:a,setBodyMounted:o}=V();c.useEffect(()=>(o(!0),()=>o(!1)),[o]);const i=$("chakra-modal__body",r),u=ne();return E.jsx(we.div,{ref:t,className:i,id:a,...n,__css:u.body})});la.displayName="ModalBody";var fa=te((e,t)=>{const{onClick:r,className:n,...a}=e,{onClose:o}=V(),i=$("chakra-modal__close-btn",n),u=ne();return E.jsx(tr,{ref:t,__css:u.closeButton,className:i,onClick:H(r,v=>{v.stopPropagation(),o()}),...a})});fa.displayName="ModalCloseButton";export{pa as M,ne as a,ha as b,Rn as c,sa as d,ia as e,fa as f,la as g,V as u};
