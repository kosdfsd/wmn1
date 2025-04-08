import{r as h,p as ct,j as $,V as Me,al as Fe}from"./index-C-xItanK.js";import{e as tt,d as yt,a as At,c as We}from"./index-CPuUejGw.js";import{P as J,g as ke}from"./label-BdongPKI.js";function lo(t){const e=h.useRef({value:t,previous:t});return h.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}function $e(t){const[e,n]=h.useState(void 0);return tt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,a;if("borderBoxSize"in i){const l=i.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}function Be(t,e=globalThis==null?void 0:globalThis.document){const n=yt(t);h.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[n,e])}var _e="DismissableLayer",Rt="dismissableLayer.update",He="dismissableLayer.pointerDownOutside",Ie="dismissableLayer.focusOutside",Ut,ee=h.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ze=h.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:i,onInteractOutside:s,onDismiss:a,...l}=t,c=h.useContext(ee),[f,u]=h.useState(null),m=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,d]=h.useState({}),p=ct(e,x=>u(x)),g=Array.from(c.layers),[w]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(w),v=f?g.indexOf(f):-1,E=c.layersWithOutsidePointerEventsDisabled.size>0,b=v>=y,A=Ue(x=>{const O=x.target,T=[...c.branches].some(C=>C.contains(O));!b||T||(r==null||r(x),s==null||s(x),x.defaultPrevented||a==null||a())},m),P=Ye(x=>{const O=x.target;[...c.branches].some(C=>C.contains(O))||(i==null||i(x),s==null||s(x),x.defaultPrevented||a==null||a())},m);return Be(x=>{v===c.layers.size-1&&(o==null||o(x),!x.defaultPrevented&&a&&(x.preventDefault(),a()))},m),h.useEffect(()=>{if(f)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Ut=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Yt(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=Ut)}},[f,m,n,c]),h.useEffect(()=>()=>{f&&(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Yt())},[f,c]),h.useEffect(()=>{const x=()=>d({});return document.addEventListener(Rt,x),()=>document.removeEventListener(Rt,x)},[]),$.jsx(J.div,{...l,ref:p,style:{pointerEvents:E?b?"auto":"none":void 0,...t.style},onFocusCapture:At(t.onFocusCapture,P.onFocusCapture),onBlurCapture:At(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:At(t.onPointerDownCapture,A.onPointerDownCapture)})});ze.displayName=_e;var je="DismissableLayerBranch",Ve=h.forwardRef((t,e)=>{const n=h.useContext(ee),o=h.useRef(null),r=ct(e,o);return h.useEffect(()=>{const i=o.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),$.jsx(J.div,{...t,ref:r})});Ve.displayName=je;function Ue(t,e=globalThis==null?void 0:globalThis.document){const n=yt(t),o=h.useRef(!1),r=h.useRef(()=>{});return h.useEffect(()=>{const i=a=>{if(a.target&&!o.current){let l=function(){ne(He,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);o.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",i),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>o.current=!0}}function Ye(t,e=globalThis==null?void 0:globalThis.document){const n=yt(t),o=h.useRef(!1);return h.useEffect(()=>{const r=i=>{i.target&&!o.current&&ne(Ie,n,{originalEvent:i},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Yt(){const t=new CustomEvent(Rt);document.dispatchEvent(t)}function ne(t,e,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),o?ke(r,i):r.dispatchEvent(i)}const Xe=["top","right","bottom","left"],q=Math.min,k=Math.max,pt=Math.round,ut=Math.floor,j=t=>({x:t,y:t}),qe={left:"right",right:"left",bottom:"top",top:"bottom"},Ke={start:"end",end:"start"};function Ot(t,e,n){return k(t,q(e,n))}function Y(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function nt(t){return t.split("-")[1]}function Dt(t){return t==="x"?"y":"x"}function Lt(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(X(t))?"y":"x"}function Nt(t){return Dt(K(t))}function Ze(t,e,n){n===void 0&&(n=!1);const o=nt(t),r=Nt(t),i=Lt(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=ht(s)),[s,ht(s)]}function Ge(t){const e=ht(t);return[Ct(t),e,Ct(e)]}function Ct(t){return t.replace(/start|end/g,e=>Ke[e])}function Je(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}function Qe(t,e,n,o){const r=nt(t);let i=Je(X(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(Ct)))),i}function ht(t){return t.replace(/left|right|bottom|top/g,e=>qe[e])}function tn(t){return{top:0,right:0,bottom:0,left:0,...t}}function oe(t){return typeof t!="number"?tn(t):{top:t,right:t,bottom:t,left:t}}function gt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Xt(t,e,n){let{reference:o,floating:r}=t;const i=K(e),s=Nt(e),a=Lt(s),l=X(e),c=i==="y",f=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,m=o[a]/2-r[a]/2;let d;switch(l){case"top":d={x:f,y:o.y-r.height};break;case"bottom":d={x:f,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(nt(e)){case"start":d[s]-=m*(n&&c?-1:1);break;case"end":d[s]+=m*(n&&c?-1:1);break}return d}const en=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=Xt(c,o,l),m=o,d={},p=0;for(let g=0;g<a.length;g++){const{name:w,fn:y}=a[g],{x:v,y:E,data:b,reset:A}=await y({x:f,y:u,initialPlacement:o,placement:m,strategy:r,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});f=v??f,u=E??u,d={...d,[w]:{...d[w],...b}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:f,y:u}=Xt(c,m,l)),g=-1)}return{x:f,y:u,placement:m,strategy:r,middlewareData:d}};async function it(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=Y(e,t),p=oe(d),w=a[m?u==="floating"?"reference":"floating":u],y=gt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:l})),v=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,E=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),b=await(i.isElement==null?void 0:i.isElement(E))?await(i.getScale==null?void 0:i.getScale(E))||{x:1,y:1}:{x:1,y:1},A=gt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:E,strategy:l}):v);return{top:(y.top-A.top+p.top)/b.y,bottom:(A.bottom-y.bottom+p.bottom)/b.y,left:(y.left-A.left+p.left)/b.x,right:(A.right-y.right+p.right)/b.x}}const nn=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:f=0}=Y(t,e)||{};if(c==null)return{};const u=oe(f),m={x:n,y:o},d=Nt(r),p=Lt(d),g=await s.getDimensions(c),w=d==="y",y=w?"top":"left",v=w?"bottom":"right",E=w?"clientHeight":"clientWidth",b=i.reference[p]+i.reference[d]-m[d]-i.floating[p],A=m[d]-i.reference[d],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let x=P?P[E]:0;(!x||!await(s.isElement==null?void 0:s.isElement(P)))&&(x=a.floating[E]||i.floating[p]);const O=b/2-A/2,T=x/2-g[p]/2-1,C=q(u[y],T),F=q(u[v],T),W=C,D=x-g[p]-F,S=x/2-g[p]/2+O,_=Ot(W,S,D),L=!l.arrow&&nt(r)!=null&&S!==_&&i.reference[p]/2-(S<W?C:F)-g[p]/2<0,N=L?S<W?S-W:S-D:0;return{[d]:m[d]+N,data:{[d]:_,centerOffset:S-_-N,...L&&{alignmentOffset:N}},reset:L}}}),on=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...w}=Y(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const y=X(r),v=K(a),E=X(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=m||(E||!g?[ht(a)]:Ge(a)),P=p!=="none";!m&&P&&A.push(...Qe(a,g,p,b));const x=[a,...A],O=await it(e,w),T=[];let C=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&T.push(O[y]),u){const S=Ze(r,s,b);T.push(O[S[0]],O[S[1]])}if(C=[...C,{placement:r,overflows:T}],!T.every(S=>S<=0)){var F,W;const S=(((F=i.flip)==null?void 0:F.index)||0)+1,_=x[S];if(_)return{data:{index:S,overflows:C},reset:{placement:_}};let L=(W=C.filter(N=>N.overflows[0]<=0).sort((N,R)=>N.overflows[1]-R.overflows[1])[0])==null?void 0:W.placement;if(!L)switch(d){case"bestFit":{var D;const N=(D=C.filter(R=>{if(P){const M=K(R.placement);return M===v||M==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(M=>M>0).reduce((M,z)=>M+z,0)]).sort((R,M)=>R[1]-M[1])[0])==null?void 0:D[0];N&&(L=N);break}case"initialPlacement":L=a;break}if(r!==L)return{reset:{placement:L}}}return{}}}};function qt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Kt(t){return Xe.some(e=>t[e]>=0)}const rn=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=Y(t,e);switch(o){case"referenceHidden":{const i=await it(e,{...r,elementContext:"reference"}),s=qt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Kt(s)}}}case"escaped":{const i=await it(e,{...r,altBoundary:!0}),s=qt(i,n.floating);return{data:{escapedOffsets:s,escaped:Kt(s)}}}default:return{}}}}};async function sn(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=X(n),a=nt(n),l=K(n)==="y",c=["left","top"].includes(s)?-1:1,f=i&&l?-1:1,u=Y(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof p=="number"&&(d=a==="end"?p*-1:p),l?{x:d*f,y:m*c}:{x:m*c,y:d*f}}const cn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:a}=e,l=await sn(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},an=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:y,y:v}=w;return{x:y,y:v}}},...l}=Y(t,e),c={x:n,y:o},f=await it(e,l),u=K(X(r)),m=Dt(u);let d=c[m],p=c[u];if(i){const w=m==="y"?"top":"left",y=m==="y"?"bottom":"right",v=d+f[w],E=d-f[y];d=Ot(v,d,E)}if(s){const w=u==="y"?"top":"left",y=u==="y"?"bottom":"right",v=p+f[w],E=p-f[y];p=Ot(v,p,E)}const g=a.fn({...e,[m]:d,[u]:p});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:i,[u]:s}}}}}},ln=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Y(t,e),f={x:n,y:o},u=K(r),m=Dt(u);let d=f[m],p=f[u];const g=Y(a,e),w=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const E=m==="y"?"height":"width",b=i.reference[m]-i.floating[E]+w.mainAxis,A=i.reference[m]+i.reference[E]-w.mainAxis;d<b?d=b:d>A&&(d=A)}if(c){var y,v;const E=m==="y"?"width":"height",b=["top","left"].includes(X(r)),A=i.reference[u]-i.floating[E]+(b&&((y=s.offset)==null?void 0:y[u])||0)+(b?0:w.crossAxis),P=i.reference[u]+i.reference[E]+(b?0:((v=s.offset)==null?void 0:v[u])||0)-(b?w.crossAxis:0);p<A?p=A:p>P&&(p=P)}return{[m]:d,[u]:p}}}},fn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:i,platform:s,elements:a}=e,{apply:l=()=>{},...c}=Y(t,e),f=await it(e,c),u=X(r),m=nt(r),d=K(r)==="y",{width:p,height:g}=i.floating;let w,y;u==="top"||u==="bottom"?(w=u,y=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(y=u,w=m==="end"?"top":"bottom");const v=g-f.top-f.bottom,E=p-f.left-f.right,b=q(g-f[w],v),A=q(p-f[y],E),P=!e.middlewareData.shift;let x=b,O=A;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(O=E),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(x=v),P&&!m){const C=k(f.left,0),F=k(f.right,0),W=k(f.top,0),D=k(f.bottom,0);d?O=p-2*(C!==0||F!==0?C+F:k(f.left,f.right)):x=g-2*(W!==0||D!==0?W+D:k(f.top,f.bottom))}await l({...e,availableWidth:O,availableHeight:x});const T=await s.getDimensions(a.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function xt(){return typeof window<"u"}function ot(t){return re(t)?(t.nodeName||"").toLowerCase():"#document"}function B(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function U(t){var e;return(e=(re(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function re(t){return xt()?t instanceof Node||t instanceof B(t).Node:!1}function H(t){return xt()?t instanceof Element||t instanceof B(t).Element:!1}function V(t){return xt()?t instanceof HTMLElement||t instanceof B(t).HTMLElement:!1}function Zt(t){return!xt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof B(t).ShadowRoot}function at(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=I(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function un(t){return["table","td","th"].includes(ot(t))}function vt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Tt(t){const e=Mt(),n=H(t)?I(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function dn(t){let e=Z(t);for(;V(e)&&!et(e);){if(Tt(e))return e;if(vt(e))return null;e=Z(e)}return null}function Mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(ot(t))}function I(t){return B(t).getComputedStyle(t)}function bt(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Z(t){if(ot(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Zt(t)&&t.host||U(t);return Zt(e)?e.host:e}function ie(t){const e=Z(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&at(e)?e:ie(e)}function st(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=ie(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=B(r);if(i){const a=St(s);return e.concat(s,s.visualViewport||[],at(r)?r:[],a&&n?st(a):[])}return e.concat(r,st(r,[],n))}function St(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function se(t){const e=I(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=V(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,a=pt(n)!==i||pt(o)!==s;return a&&(n=i,o=s),{width:n,height:o,$:a}}function Ft(t){return H(t)?t:t.contextElement}function Q(t){const e=Ft(t);if(!V(e))return j(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=se(e);let s=(i?pt(n.width):n.width)/o,a=(i?pt(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const mn=j(0);function ce(t){const e=B(t);return!Mt()||!e.visualViewport?mn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==B(t)?!1:e}function G(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=Ft(t);let s=j(1);e&&(o?H(o)&&(s=Q(o)):s=Q(t));const a=pn(i,n,o)?ce(i):j(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,f=r.width/s.x,u=r.height/s.y;if(i){const m=B(i),d=o&&H(o)?B(o):o;let p=m,g=St(p);for(;g&&o&&d!==p;){const w=Q(g),y=g.getBoundingClientRect(),v=I(g),E=y.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,b=y.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,c*=w.y,f*=w.x,u*=w.y,l+=E,c+=b,p=B(g),g=St(p)}}return gt({width:f,height:u,x:l,y:c})}function Wt(t,e){const n=bt(t).scrollLeft;return e?e.left+n:G(U(t)).left+n}function ae(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(n?0:Wt(t,o)),i=o.top+e.scrollTop;return{x:r,y:i}}function hn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=U(o),a=e?vt(e.floating):!1;if(o===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},c=j(1);const f=j(0),u=V(o);if((u||!u&&!i)&&((ot(o)!=="body"||at(s))&&(l=bt(o)),V(o))){const d=G(o);c=Q(o),f.x=d.x+o.clientLeft,f.y=d.y+o.clientTop}const m=s&&!u&&!i?ae(s,l,!0):j(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+f.x+m.x,y:n.y*c.y-l.scrollTop*c.y+f.y+m.y}}function gn(t){return Array.from(t.getClientRects())}function wn(t){const e=U(t),n=bt(t),o=t.ownerDocument.body,r=k(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=k(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Wt(t);const a=-n.scrollTop;return I(o).direction==="rtl"&&(s+=k(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:a}}function yn(t,e){const n=B(t),o=U(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,a=0,l=0;if(r){i=r.width,s=r.height;const c=Mt();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:a,y:l}}function xn(t,e){const n=G(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=V(t)?Q(t):j(1),s=t.clientWidth*i.x,a=t.clientHeight*i.y,l=r*i.x,c=o*i.y;return{width:s,height:a,x:l,y:c}}function Gt(t,e,n){let o;if(e==="viewport")o=yn(t,n);else if(e==="document")o=wn(U(t));else if(H(e))o=xn(e,n);else{const r=ce(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return gt(o)}function le(t,e){const n=Z(t);return n===e||!H(n)||et(n)?!1:I(n).position==="fixed"||le(n,e)}function vn(t,e){const n=e.get(t);if(n)return n;let o=st(t,[],!1).filter(a=>H(a)&&ot(a)!=="body"),r=null;const i=I(t).position==="fixed";let s=i?Z(t):t;for(;H(s)&&!et(s);){const a=I(s),l=Tt(s);!l&&a.position==="fixed"&&(r=null),(i?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||at(s)&&!l&&le(t,s))?o=o.filter(f=>f!==s):r=a,s=Z(s)}return e.set(t,o),o}function bn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?vt(e)?[]:vn(e,this._c):[].concat(n),o],a=s[0],l=s.reduce((c,f)=>{const u=Gt(e,f,r);return c.top=k(u.top,c.top),c.right=q(u.right,c.right),c.bottom=q(u.bottom,c.bottom),c.left=k(u.left,c.left),c},Gt(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function An(t){const{width:e,height:n}=se(t);return{width:e,height:n}}function En(t,e,n){const o=V(e),r=U(e),i=n==="fixed",s=G(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const l=j(0);if(o||!o&&!i)if((ot(e)!=="body"||at(r))&&(a=bt(e)),o){const m=G(e,!0,i,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&(l.x=Wt(r));const c=r&&!o&&!i?ae(r,a):j(0),f=s.left+a.scrollLeft-l.x-c.x,u=s.top+a.scrollTop-l.y-c.y;return{x:f,y:u,width:s.width,height:s.height}}function Et(t){return I(t).position==="static"}function Jt(t,e){if(!V(t)||I(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return U(t)===n&&(n=n.ownerDocument.body),n}function fe(t,e){const n=B(t);if(vt(t))return n;if(!V(t)){let r=Z(t);for(;r&&!et(r);){if(H(r)&&!Et(r))return r;r=Z(r)}return n}let o=Jt(t,e);for(;o&&un(o)&&Et(o);)o=Jt(o,e);return o&&et(o)&&Et(o)&&!Tt(o)?n:o||dn(t)||n}const Pn=async function(t){const e=this.getOffsetParent||fe,n=this.getDimensions,o=await n(t.floating);return{reference:En(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Rn(t){return I(t).direction==="rtl"}const On={convertOffsetParentRelativeRectToViewportRelativeRect:hn,getDocumentElement:U,getClippingRect:bn,getOffsetParent:fe,getElementRects:Pn,getClientRects:gn,getDimensions:An,getScale:Q,isElement:H,isRTL:Rn};function ue(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Cn(t,e){let n=null,o;const r=U(t);function i(){var a;clearTimeout(o),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const c=t.getBoundingClientRect(),{left:f,top:u,width:m,height:d}=c;if(a||e(),!m||!d)return;const p=ut(u),g=ut(r.clientWidth-(f+m)),w=ut(r.clientHeight-(u+d)),y=ut(f),E={rootMargin:-p+"px "+-g+"px "+-w+"px "+-y+"px",threshold:k(0,q(1,l))||1};let b=!0;function A(P){const x=P[0].intersectionRatio;if(x!==l){if(!b)return s();x?s(!1,x):o=setTimeout(()=>{s(!1,1e-7)},1e3)}x===1&&!ue(c,t.getBoundingClientRect())&&s(),b=!1}try{n=new IntersectionObserver(A,{...E,root:r.ownerDocument})}catch{n=new IntersectionObserver(A,E)}n.observe(t)}return s(!0),i}function Sn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Ft(t),f=r||i?[...c?st(c):[],...st(e)]:[];f.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),i&&y.addEventListener("resize",n)});const u=c&&a?Cn(c,n):null;let m=-1,d=null;s&&(d=new ResizeObserver(y=>{let[v]=y;v&&v.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var E;(E=d)==null||E.observe(e)})),n()}),c&&!l&&d.observe(c),d.observe(e));let p,g=l?G(t):null;l&&w();function w(){const y=G(t);g&&!ue(g,y)&&n(),g=y,p=requestAnimationFrame(w)}return n(),()=>{var y;f.forEach(v=>{r&&v.removeEventListener("scroll",n),i&&v.removeEventListener("resize",n)}),u==null||u(),(y=d)==null||y.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const Dn=cn,Ln=an,Nn=on,Tn=fn,Mn=rn,Qt=nn,Fn=ln,Wn=(t,e,n)=>{const o=new Map,r={platform:On,...n},i={...r.platform,_c:o};return en(t,e,{...r,platform:i})};var mt=typeof document<"u"?h.useLayoutEffect:h.useEffect;function wt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!wt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!wt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function de(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function te(t,e){const n=de(t);return Math.round(e*n)/n}function Pt(t){const e=h.useRef(t);return mt(()=>{e.current=t}),e}function kn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[f,u]=h.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,d]=h.useState(o);wt(m,o)||d(o);const[p,g]=h.useState(null),[w,y]=h.useState(null),v=h.useCallback(R=>{R!==P.current&&(P.current=R,g(R))},[]),E=h.useCallback(R=>{R!==x.current&&(x.current=R,y(R))},[]),b=i||p,A=s||w,P=h.useRef(null),x=h.useRef(null),O=h.useRef(f),T=l!=null,C=Pt(l),F=Pt(r),W=Pt(c),D=h.useCallback(()=>{if(!P.current||!x.current)return;const R={placement:e,strategy:n,middleware:m};F.current&&(R.platform=F.current),Wn(P.current,x.current,R).then(M=>{const z={...M,isPositioned:W.current!==!1};S.current&&!wt(O.current,z)&&(O.current=z,Me.flushSync(()=>{u(z)}))})},[m,e,n,F,W]);mt(()=>{c===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[c]);const S=h.useRef(!1);mt(()=>(S.current=!0,()=>{S.current=!1}),[]),mt(()=>{if(b&&(P.current=b),A&&(x.current=A),b&&A){if(C.current)return C.current(b,A,D);D()}},[b,A,D,C,T]);const _=h.useMemo(()=>({reference:P,floating:x,setReference:v,setFloating:E}),[v,E]),L=h.useMemo(()=>({reference:b,floating:A}),[b,A]),N=h.useMemo(()=>{const R={position:n,left:0,top:0};if(!L.floating)return R;const M=te(L.floating,f.x),z=te(L.floating,f.y);return a?{...R,transform:"translate("+M+"px, "+z+"px)",...de(L.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:M,top:z}},[n,a,L.floating,f.x,f.y]);return h.useMemo(()=>({...f,update:D,refs:_,elements:L,floatingStyles:N}),[f,D,_,L,N])}const $n=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Qt({element:o.current,padding:r}).fn(n):{}:o?Qt({element:o,padding:r}).fn(n):{}}}},Bn=(t,e)=>({...Dn(t),options:[t,e]}),_n=(t,e)=>({...Ln(t),options:[t,e]}),Hn=(t,e)=>({...Fn(t),options:[t,e]}),In=(t,e)=>({...Nn(t),options:[t,e]}),zn=(t,e)=>({...Tn(t),options:[t,e]}),jn=(t,e)=>({...Mn(t),options:[t,e]}),Vn=(t,e)=>({...$n(t),options:[t,e]});var Un="Arrow",me=h.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return $.jsx(J.svg,{...i,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:$.jsx("polygon",{points:"0,0 30,0 15,10"})})});me.displayName=Un;var Yn=me,kt="Popper",[pe,fo]=We(kt),[Xn,he]=pe(kt),ge=t=>{const{__scopePopper:e,children:n}=t,[o,r]=h.useState(null);return $.jsx(Xn,{scope:e,anchor:o,onAnchorChange:r,children:n})};ge.displayName=kt;var we="PopperAnchor",ye=h.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=he(we,n),s=h.useRef(null),a=ct(e,s);return h.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:$.jsx(J.div,{...r,ref:a})});ye.displayName=we;var $t="PopperContent",[qn,Kn]=pe($t),xe=h.forwardRef((t,e)=>{var Bt,_t,Ht,It,zt,jt;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:f=0,sticky:u="partial",hideWhenDetached:m=!1,updatePositionStrategy:d="optimized",onPlaced:p,...g}=t,w=he($t,n),[y,v]=h.useState(null),E=ct(e,rt=>v(rt)),[b,A]=h.useState(null),P=$e(b),x=(P==null?void 0:P.width)??0,O=(P==null?void 0:P.height)??0,T=o+(i!=="center"?"-"+i:""),C=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},F=Array.isArray(c)?c:[c],W=F.length>0,D={padding:C,boundary:F.filter(Gn),altBoundary:W},{refs:S,floatingStyles:_,placement:L,isPositioned:N,middlewareData:R}=kn({strategy:"fixed",placement:T,whileElementsMounted:(...rt)=>Sn(...rt,{animationFrame:d==="always"}),elements:{reference:w.anchor},middleware:[Bn({mainAxis:r+O,alignmentAxis:s}),l&&_n({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?Hn():void 0,...D}),l&&In({...D}),zn({...D,apply:({elements:rt,rects:Vt,availableWidth:De,availableHeight:Le})=>{const{width:Ne,height:Te}=Vt.reference,ft=rt.floating.style;ft.setProperty("--radix-popper-available-width",`${De}px`),ft.setProperty("--radix-popper-available-height",`${Le}px`),ft.setProperty("--radix-popper-anchor-width",`${Ne}px`),ft.setProperty("--radix-popper-anchor-height",`${Te}px`)}}),b&&Vn({element:b,padding:a}),Jn({arrowWidth:x,arrowHeight:O}),m&&jn({strategy:"referenceHidden",...D})]}),[M,z]=Ae(L),lt=yt(p);tt(()=>{N&&(lt==null||lt())},[N,lt]);const Pe=(Bt=R.arrow)==null?void 0:Bt.x,Re=(_t=R.arrow)==null?void 0:_t.y,Oe=((Ht=R.arrow)==null?void 0:Ht.centerOffset)!==0,[Ce,Se]=h.useState();return tt(()=>{y&&Se(window.getComputedStyle(y).zIndex)},[y]),$.jsx("div",{ref:S.setFloating,"data-radix-popper-content-wrapper":"",style:{..._,transform:N?_.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ce,"--radix-popper-transform-origin":[(It=R.transformOrigin)==null?void 0:It.x,(zt=R.transformOrigin)==null?void 0:zt.y].join(" "),...((jt=R.hide)==null?void 0:jt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:$.jsx(qn,{scope:n,placedSide:M,onArrowChange:A,arrowX:Pe,arrowY:Re,shouldHideArrow:Oe,children:$.jsx(J.div,{"data-side":M,"data-align":z,...g,ref:E,style:{...g.style,animation:N?void 0:"none"}})})})});xe.displayName=$t;var ve="PopperArrow",Zn={top:"bottom",right:"left",bottom:"top",left:"right"},be=h.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=Kn(ve,o),s=Zn[i.placedSide];return $.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:$.jsx(Yn,{...r,ref:n,style:{...r.style,display:"block"}})})});be.displayName=ve;function Gn(t){return t!==null}var Jn=t=>({name:"transformOrigin",options:t,fn(e){var w,y,v;const{placement:n,rects:o,middlewareData:r}=e,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,a=s?0:t.arrowWidth,l=s?0:t.arrowHeight,[c,f]=Ae(n),u={start:"0%",center:"50%",end:"100%"}[f],m=(((y=r.arrow)==null?void 0:y.x)??0)+a/2,d=(((v=r.arrow)==null?void 0:v.y)??0)+l/2;let p="",g="";return c==="bottom"?(p=s?u:`${m}px`,g=`${-l}px`):c==="top"?(p=s?u:`${m}px`,g=`${o.floating.height+l}px`):c==="right"?(p=`${-l}px`,g=s?u:`${d}px`):c==="left"&&(p=`${o.floating.width+l}px`,g=s?u:`${d}px`),{data:{x:p,y:g}}}});function Ae(t){const[e,n="center"]=t.split("-");return[e,n]}var uo=ge,mo=ye,po=xe,ho=be,Qn="Portal",to=h.forwardRef((t,e)=>{var a;const{container:n,...o}=t,[r,i]=h.useState(!1);tt(()=>i(!0),[]);const s=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?Fe.createPortal($.jsx(J.div,{...o,ref:e}),s):null});to.displayName=Qn;function eo(t,e){return h.useReducer((n,o)=>e[n][o]??n,t)}var no=t=>{const{present:e,children:n}=t,o=oo(e),r=typeof n=="function"?n({present:o.isPresent}):h.Children.only(n),i=ct(o.ref,ro(r));return typeof n=="function"||o.isPresent?h.cloneElement(r,{ref:i}):null};no.displayName="Presence";function oo(t){const[e,n]=h.useState(),o=h.useRef({}),r=h.useRef(t),i=h.useRef("none"),s=t?"mounted":"unmounted",[a,l]=eo(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return h.useEffect(()=>{const c=dt(o.current);i.current=a==="mounted"?c:"none"},[a]),tt(()=>{const c=o.current,f=r.current;if(f!==t){const m=i.current,d=dt(c);t?l("MOUNT"):d==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(f&&m!==d?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),tt(()=>{if(e){let c;const f=e.ownerDocument.defaultView??window,u=d=>{const g=dt(o.current).includes(d.animationName);if(d.target===e&&g&&(l("ANIMATION_END"),!r.current)){const w=e.style.animationFillMode;e.style.animationFillMode="forwards",c=f.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=w)})}},m=d=>{d.target===e&&(i.current=dt(o.current))};return e.addEventListener("animationstart",m),e.addEventListener("animationcancel",u),e.addEventListener("animationend",u),()=>{f.clearTimeout(c),e.removeEventListener("animationstart",m),e.removeEventListener("animationcancel",u),e.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:h.useCallback(c=>{c&&(o.current=getComputedStyle(c)),n(c)},[])}}function dt(t){return(t==null?void 0:t.animationName)||"none"}function ro(t){var o,r;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var io="VisuallyHidden",Ee=h.forwardRef((t,e)=>$.jsx(J.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Ee.displayName=io;var go=Ee;export{mo as A,po as C,ze as D,no as P,uo as R,Ee as V,$e as a,to as b,fo as c,go as d,ho as e,lo as u};
