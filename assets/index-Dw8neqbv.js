import{r as A,a4 as vt,a5 as Oe,j,P as ht,q as Ce,v as Ut,W as Se}from"./index-DrX9vI6I.js";function Fn(t){const e=A.useRef({value:t,previous:t});return A.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}function Ee(t){const[e,n]=A.useState(void 0);return vt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,c;if("borderBoxSize"in i){const l=i.borderBoxSize,a=Array.isArray(l)?l[0]:l;s=a.inlineSize,c=a.blockSize}else s=t.offsetWidth,c=t.offsetHeight;n({width:s,height:c})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}const De=["top","right","bottom","left"],U=Math.min,H=Math.max,ft=Math.round,lt=Math.floor,V=t=>({x:t,y:t}),Me={left:"right",right:"left",bottom:"top",top:"bottom"},Te={start:"end",end:"start"};function bt(t,e,n){return H(t,U(e,n))}function X(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function Ot(t){return t==="y"?"height":"width"}function Z(t){return["top","bottom"].includes(q(t))?"y":"x"}function Ct(t){return Pt(Z(t))}function Le(t,e,n){n===void 0&&(n=!1);const o=tt(t),r=Ct(t),i=Ot(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=ut(s)),[s,ut(s)]}function $e(t){const e=ut(t);return[At(t),e,At(e)]}function At(t){return t.replace(/start|end/g,e=>Te[e])}function ke(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}function Ne(t,e,n,o){const r=tt(t);let i=ke(q(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(At)))),i}function ut(t){return t.replace(/left|right|bottom|top/g,e=>Me[e])}function He(t){return{top:0,right:0,bottom:0,left:0,...t}}function Zt(t){return typeof t!="number"?He(t):{top:t,right:t,bottom:t,left:t}}function dt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function _t(t,e,n){let{reference:o,floating:r}=t;const i=Z(e),s=Ct(e),c=Ot(s),l=q(e),a=i==="y",f=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,h=o[c]/2-r[c]/2;let d;switch(l){case"top":d={x:f,y:o.y-r.height};break;case"bottom":d={x:f,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(tt(e)){case"start":d[s]-=h*(n&&a?-1:1);break;case"end":d[s]+=h*(n&&a?-1:1);break}return d}const Fe=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=_t(a,o,l),h=o,d={},p=0;for(let m=0;m<c.length;m++){const{name:w,fn:g}=c[m],{x,y:b,data:y,reset:v}=await g({x:f,y:u,initialPlacement:o,placement:h,strategy:r,middlewareData:d,rects:a,platform:s,elements:{reference:t,floating:e}});f=x??f,u=b??u,d={...d,[w]:{...d[w],...y}},v&&p<=50&&(p++,typeof v=="object"&&(v.placement&&(h=v.placement),v.rects&&(a=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):v.rects),{x:f,y:u}=_t(a,h,l)),m=-1)}return{x:f,y:u,placement:h,strategy:r,middlewareData:d}};async function ot(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:h=!1,padding:d=0}=X(e,t),p=Zt(d),w=c[h?u==="floating"?"reference":"floating":u],g=dt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:a,rootBoundary:f,strategy:l})),x=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),y=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},v=dt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:b,strategy:l}):x);return{top:(g.top-v.top+p.top)/y.y,bottom:(v.bottom-g.bottom+p.bottom)/y.y,left:(g.left-v.left+p.left)/y.x,right:(v.right-g.right+p.right)/y.x}}const We=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:l}=e,{element:a,padding:f=0}=X(t,e)||{};if(a==null)return{};const u=Zt(f),h={x:n,y:o},d=Ct(r),p=Ot(d),m=await s.getDimensions(a),w=d==="y",g=w?"top":"left",x=w?"bottom":"right",b=w?"clientHeight":"clientWidth",y=i.reference[p]+i.reference[d]-h[d]-i.floating[p],v=h[d]-i.reference[d],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let O=P?P[b]:0;(!O||!await(s.isElement==null?void 0:s.isElement(P)))&&(O=c.floating[b]||i.floating[p]);const M=y/2-v/2,N=O/2-m[p]/2-1,T=U(u[g],N),$=U(u[x],N),k=T,S=O-m[p]-$,C=O/2-m[p]/2+M,W=bt(k,C,S),E=!l.arrow&&tt(r)!=null&&C!==W&&i.reference[p]/2-(C<k?T:$)-m[p]/2<0,D=E?C<k?C-k:C-S:0;return{[d]:h[d]+D,data:{[d]:W,centerOffset:C-W-D,...E&&{alignmentOffset:D}},reset:E}}}),Be=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...w}=X(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const g=q(r),x=Z(c),b=q(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),v=h||(b||!m?[ut(c)]:$e(c)),P=p!=="none";!h&&P&&v.push(...Ne(c,m,p,y));const O=[c,...v],M=await ot(e,w),N=[];let T=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&N.push(M[g]),u){const C=Le(r,s,y);N.push(M[C[0]],M[C[1]])}if(T=[...T,{placement:r,overflows:N}],!N.every(C=>C<=0)){var $,k;const C=((($=i.flip)==null?void 0:$.index)||0)+1,W=O[C];if(W)return{data:{index:C,overflows:T},reset:{placement:W}};let E=(k=T.filter(D=>D.overflows[0]<=0).sort((D,R)=>D.overflows[1]-R.overflows[1])[0])==null?void 0:k.placement;if(!E)switch(d){case"bestFit":{var S;const D=(S=T.filter(R=>{if(P){const L=Z(R.placement);return L===x||L==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(L=>L>0).reduce((L,z)=>L+z,0)]).sort((R,L)=>R[1]-L[1])[0])==null?void 0:S[0];D&&(E=D);break}case"initialPlacement":E=c;break}if(r!==E)return{reset:{placement:E}}}return{}}}};function zt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function jt(t){return De.some(e=>t[e]>=0)}const _e=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=X(t,e);switch(o){case"referenceHidden":{const i=await ot(e,{...r,elementContext:"reference"}),s=zt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:jt(s)}}}case"escaped":{const i=await ot(e,{...r,altBoundary:!0}),s=zt(i,n.floating);return{data:{escapedOffsets:s,escaped:jt(s)}}}default:return{}}}}};async function ze(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=q(n),c=tt(n),l=Z(n)==="y",a=["left","top"].includes(s)?-1:1,f=i&&l?-1:1,u=X(e,t);let{mainAxis:h,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof p=="number"&&(d=c==="end"?p*-1:p),l?{x:d*f,y:h*a}:{x:h*a,y:d*f}}const je=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=e,l=await ze(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},Ve=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:g,y:x}=w;return{x:g,y:x}}},...l}=X(t,e),a={x:n,y:o},f=await ot(e,l),u=Z(q(r)),h=Pt(u);let d=a[h],p=a[u];if(i){const w=h==="y"?"top":"left",g=h==="y"?"bottom":"right",x=d+f[w],b=d-f[g];d=bt(x,d,b)}if(s){const w=u==="y"?"top":"left",g=u==="y"?"bottom":"right",x=p+f[w],b=p-f[g];p=bt(x,p,b)}const m=c.fn({...e,[h]:d,[u]:p});return{...m,data:{x:m.x-n,y:m.y-o,enabled:{[h]:i,[u]:s}}}}}},Ie=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:c=0,mainAxis:l=!0,crossAxis:a=!0}=X(t,e),f={x:n,y:o},u=Z(r),h=Pt(u);let d=f[h],p=f[u];const m=X(c,e),w=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const b=h==="y"?"height":"width",y=i.reference[h]-i.floating[b]+w.mainAxis,v=i.reference[h]+i.reference[b]-w.mainAxis;d<y?d=y:d>v&&(d=v)}if(a){var g,x;const b=h==="y"?"width":"height",y=["top","left"].includes(q(r)),v=i.reference[u]-i.floating[b]+(y&&((g=s.offset)==null?void 0:g[u])||0)+(y?0:w.crossAxis),P=i.reference[u]+i.reference[b]+(y?0:((x=s.offset)==null?void 0:x[u])||0)-(y?w.crossAxis:0);p<v?p=v:p>P&&(p=P)}return{[h]:d,[u]:p}}}},Ye=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:i,platform:s,elements:c}=e,{apply:l=()=>{},...a}=X(t,e),f=await ot(e,a),u=q(r),h=tt(r),d=Z(r)==="y",{width:p,height:m}=i.floating;let w,g;u==="top"||u==="bottom"?(w=u,g=h===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(g=u,w=h==="end"?"top":"bottom");const x=m-f.top-f.bottom,b=p-f.left-f.right,y=U(m-f[w],x),v=U(p-f[g],b),P=!e.middlewareData.shift;let O=y,M=v;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(M=b),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(O=x),P&&!h){const T=H(f.left,0),$=H(f.right,0),k=H(f.top,0),S=H(f.bottom,0);d?M=p-2*(T!==0||$!==0?T+$:H(f.left,f.right)):O=m-2*(k!==0||S!==0?k+S:H(f.top,f.bottom))}await l({...e,availableWidth:M,availableHeight:O});const N=await s.getDimensions(c.floating);return p!==N.width||m!==N.height?{reset:{rects:!0}}:{}}}};function mt(){return typeof window<"u"}function et(t){return Kt(t)?(t.nodeName||"").toLowerCase():"#document"}function F(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(Kt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Kt(t){return mt()?t instanceof Node||t instanceof F(t).Node:!1}function B(t){return mt()?t instanceof Element||t instanceof F(t).Element:!1}function I(t){return mt()?t instanceof HTMLElement||t instanceof F(t).HTMLElement:!1}function Vt(t){return!mt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof F(t).ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=_(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function Xe(t){return["table","td","th"].includes(et(t))}function gt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function St(t){const e=Et(),n=B(t)?_(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function qe(t){let e=K(t);for(;I(e)&&!Q(e);){if(St(e))return e;if(gt(e))return null;e=K(e)}return null}function Et(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(et(t))}function _(t){return F(t).getComputedStyle(t)}function wt(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(et(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vt(t)&&t.host||Y(t);return Vt(e)?e.host:e}function Gt(t){const e=K(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&it(e)?e:Gt(e)}function rt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Gt(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=F(r);if(i){const c=Rt(s);return e.concat(s,s.visualViewport||[],it(r)?r:[],c&&n?rt(c):[])}return e.concat(r,rt(r,[],n))}function Rt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Jt(t){const e=_(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=I(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,c=ft(n)!==i||ft(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function Dt(t){return B(t)?t:t.contextElement}function J(t){const e=Dt(t);if(!I(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=Jt(e);let s=(i?ft(n.width):n.width)/o,c=(i?ft(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Ue=V(0);function Qt(t){const e=F(t);return!Et()||!e.visualViewport?Ue:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ze(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==F(t)?!1:e}function G(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=Dt(t);let s=V(1);e&&(o?B(o)&&(s=J(o)):s=J(t));const c=Ze(i,n,o)?Qt(i):V(0);let l=(r.left+c.x)/s.x,a=(r.top+c.y)/s.y,f=r.width/s.x,u=r.height/s.y;if(i){const h=F(i),d=o&&B(o)?F(o):o;let p=h,m=Rt(p);for(;m&&o&&d!==p;){const w=J(m),g=m.getBoundingClientRect(),x=_(m),b=g.left+(m.clientLeft+parseFloat(x.paddingLeft))*w.x,y=g.top+(m.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,a*=w.y,f*=w.x,u*=w.y,l+=b,a+=y,p=F(m),m=Rt(p)}}return dt({width:f,height:u,x:l,y:a})}function Mt(t,e){const n=wt(t).scrollLeft;return e?e.left+n:G(Y(t)).left+n}function te(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(n?0:Mt(t,o)),i=o.top+e.scrollTop;return{x:r,y:i}}function Ke(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=Y(o),c=e?gt(e.floating):!1;if(o===s||c&&i)return n;let l={scrollLeft:0,scrollTop:0},a=V(1);const f=V(0),u=I(o);if((u||!u&&!i)&&((et(o)!=="body"||it(s))&&(l=wt(o)),I(o))){const d=G(o);a=J(o),f.x=d.x+o.clientLeft,f.y=d.y+o.clientTop}const h=s&&!u&&!i?te(s,l,!0):V(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+f.x+h.x,y:n.y*a.y-l.scrollTop*a.y+f.y+h.y}}function Ge(t){return Array.from(t.getClientRects())}function Je(t){const e=Y(t),n=wt(t),o=t.ownerDocument.body,r=H(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=H(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Mt(t);const c=-n.scrollTop;return _(o).direction==="rtl"&&(s+=H(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function Qe(t,e){const n=F(t),o=Y(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const a=Et();(!a||a&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:c,y:l}}function tn(t,e){const n=G(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=I(t)?J(t):V(1),s=t.clientWidth*i.x,c=t.clientHeight*i.y,l=r*i.x,a=o*i.y;return{width:s,height:c,x:l,y:a}}function It(t,e,n){let o;if(e==="viewport")o=Qe(t,n);else if(e==="document")o=Je(Y(t));else if(B(e))o=tn(e,n);else{const r=Qt(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return dt(o)}function ee(t,e){const n=K(t);return n===e||!B(n)||Q(n)?!1:_(n).position==="fixed"||ee(n,e)}function en(t,e){const n=e.get(t);if(n)return n;let o=rt(t,[],!1).filter(c=>B(c)&&et(c)!=="body"),r=null;const i=_(t).position==="fixed";let s=i?K(t):t;for(;B(s)&&!Q(s);){const c=_(s),l=St(s);!l&&c.position==="fixed"&&(r=null),(i?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||it(s)&&!l&&ee(t,s))?o=o.filter(f=>f!==s):r=c,s=K(s)}return e.set(t,o),o}function nn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?gt(e)?[]:en(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((a,f)=>{const u=It(e,f,r);return a.top=H(u.top,a.top),a.right=U(u.right,a.right),a.bottom=U(u.bottom,a.bottom),a.left=H(u.left,a.left),a},It(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function on(t){const{width:e,height:n}=Jt(t);return{width:e,height:n}}function rn(t,e,n){const o=I(e),r=Y(e),i=n==="fixed",s=G(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const l=V(0);if(o||!o&&!i)if((et(e)!=="body"||it(r))&&(c=wt(e)),o){const h=G(e,!0,i,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else r&&(l.x=Mt(r));const a=r&&!o&&!i?te(r,c):V(0),f=s.left+c.scrollLeft-l.x-a.x,u=s.top+c.scrollTop-l.y-a.y;return{x:f,y:u,width:s.width,height:s.height}}function xt(t){return _(t).position==="static"}function Yt(t,e){if(!I(t)||_(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Y(t)===n&&(n=n.ownerDocument.body),n}function ne(t,e){const n=F(t);if(gt(t))return n;if(!I(t)){let r=K(t);for(;r&&!Q(r);){if(B(r)&&!xt(r))return r;r=K(r)}return n}let o=Yt(t,e);for(;o&&Xe(o)&&xt(o);)o=Yt(o,e);return o&&Q(o)&&xt(o)&&!St(o)?n:o||qe(t)||n}const sn=async function(t){const e=this.getOffsetParent||ne,n=this.getDimensions,o=await n(t.floating);return{reference:rn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function cn(t){return _(t).direction==="rtl"}const ln={convertOffsetParentRelativeRectToViewportRelativeRect:Ke,getDocumentElement:Y,getClippingRect:nn,getOffsetParent:ne,getElementRects:sn,getClientRects:Ge,getDimensions:on,getScale:J,isElement:B,isRTL:cn};function oe(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function an(t,e){let n=null,o;const r=Y(t);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const a=t.getBoundingClientRect(),{left:f,top:u,width:h,height:d}=a;if(c||e(),!h||!d)return;const p=lt(u),m=lt(r.clientWidth-(f+h)),w=lt(r.clientHeight-(u+d)),g=lt(f),b={rootMargin:-p+"px "+-m+"px "+-w+"px "+-g+"px",threshold:H(0,U(1,l))||1};let y=!0;function v(P){const O=P[0].intersectionRatio;if(O!==l){if(!y)return s();O?s(!1,O):o=setTimeout(()=>{s(!1,1e-7)},1e3)}O===1&&!oe(a,t.getBoundingClientRect())&&s(),y=!1}try{n=new IntersectionObserver(v,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(v,b)}n.observe(t)}return s(!0),i}function fn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Dt(t),f=r||i?[...a?rt(a):[],...rt(e)]:[];f.forEach(g=>{r&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const u=a&&c?an(a,n):null;let h=-1,d=null;s&&(d=new ResizeObserver(g=>{let[x]=g;x&&x.target===a&&d&&(d.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=d)==null||b.observe(e)})),n()}),a&&!l&&d.observe(a),d.observe(e));let p,m=l?G(t):null;l&&w();function w(){const g=G(t);m&&!oe(m,g)&&n(),m=g,p=requestAnimationFrame(w)}return n(),()=>{var g;f.forEach(x=>{r&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),u==null||u(),(g=d)==null||g.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const un=je,dn=Ve,pn=Be,hn=Ye,mn=_e,Xt=We,gn=Ie,wn=(t,e,n)=>{const o=new Map,r={platform:ln,...n},i={...r.platform,_c:o};return Fe(t,e,{...r,platform:i})};var at=typeof document<"u"?A.useLayoutEffect:A.useEffect;function pt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!pt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!pt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function re(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function qt(t,e){const n=re(t);return Math.round(e*n)/n}function yt(t){const e=A.useRef(t);return at(()=>{e.current=t}),e}function xn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:l,open:a}=t,[f,u]=A.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,d]=A.useState(o);pt(h,o)||d(o);const[p,m]=A.useState(null),[w,g]=A.useState(null),x=A.useCallback(R=>{R!==P.current&&(P.current=R,m(R))},[]),b=A.useCallback(R=>{R!==O.current&&(O.current=R,g(R))},[]),y=i||p,v=s||w,P=A.useRef(null),O=A.useRef(null),M=A.useRef(f),N=l!=null,T=yt(l),$=yt(r),k=yt(a),S=A.useCallback(()=>{if(!P.current||!O.current)return;const R={placement:e,strategy:n,middleware:h};$.current&&(R.platform=$.current),wn(P.current,O.current,R).then(L=>{const z={...L,isPositioned:k.current!==!1};C.current&&!pt(M.current,z)&&(M.current=z,Oe.flushSync(()=>{u(z)}))})},[h,e,n,$,k]);at(()=>{a===!1&&M.current.isPositioned&&(M.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[a]);const C=A.useRef(!1);at(()=>(C.current=!0,()=>{C.current=!1}),[]),at(()=>{if(y&&(P.current=y),v&&(O.current=v),y&&v){if(T.current)return T.current(y,v,S);S()}},[y,v,S,T,N]);const W=A.useMemo(()=>({reference:P,floating:O,setReference:x,setFloating:b}),[x,b]),E=A.useMemo(()=>({reference:y,floating:v}),[y,v]),D=A.useMemo(()=>{const R={position:n,left:0,top:0};if(!E.floating)return R;const L=qt(E.floating,f.x),z=qt(E.floating,f.y);return c?{...R,transform:"translate("+L+"px, "+z+"px)",...re(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:L,top:z}},[n,c,E.floating,f.x,f.y]);return A.useMemo(()=>({...f,update:S,refs:W,elements:E,floatingStyles:D}),[f,S,W,E,D])}const yn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Xt({element:o.current,padding:r}).fn(n):{}:o?Xt({element:o,padding:r}).fn(n):{}}}},vn=(t,e)=>({...un(t),options:[t,e]}),bn=(t,e)=>({...dn(t),options:[t,e]}),An=(t,e)=>({...gn(t),options:[t,e]}),Rn=(t,e)=>({...pn(t),options:[t,e]}),Pn=(t,e)=>({...hn(t),options:[t,e]}),On=(t,e)=>({...mn(t),options:[t,e]}),Cn=(t,e)=>({...yn(t),options:[t,e]});var Sn="Arrow",ie=A.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return j.jsx(ht.svg,{...i,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:j.jsx("polygon",{points:"0,0 30,0 15,10"})})});ie.displayName=Sn;var En=ie,Tt="Popper",[se,Wn]=Ce(Tt),[Dn,ce]=se(Tt),le=t=>{const{__scopePopper:e,children:n}=t,[o,r]=A.useState(null);return j.jsx(Dn,{scope:e,anchor:o,onAnchorChange:r,children:n})};le.displayName=Tt;var ae="PopperAnchor",fe=A.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=ce(ae,n),s=A.useRef(null),c=Ut(e,s);return A.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:j.jsx(ht.div,{...r,ref:c})});fe.displayName=ae;var Lt="PopperContent",[Mn,Tn]=se(Lt),ue=A.forwardRef((t,e)=>{var $t,kt,Nt,Ht,Ft,Wt;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:l=!0,collisionBoundary:a=[],collisionPadding:f=0,sticky:u="partial",hideWhenDetached:h=!1,updatePositionStrategy:d="optimized",onPlaced:p,...m}=t,w=ce(Lt,n),[g,x]=A.useState(null),b=Ut(e,nt=>x(nt)),[y,v]=A.useState(null),P=Ee(y),O=(P==null?void 0:P.width)??0,M=(P==null?void 0:P.height)??0,N=o+(i!=="center"?"-"+i:""),T=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},$=Array.isArray(a)?a:[a],k=$.length>0,S={padding:T,boundary:$.filter($n),altBoundary:k},{refs:C,floatingStyles:W,placement:E,isPositioned:D,middlewareData:R}=xn({strategy:"fixed",placement:N,whileElementsMounted:(...nt)=>fn(...nt,{animationFrame:d==="always"}),elements:{reference:w.anchor},middleware:[vn({mainAxis:r+M,alignmentAxis:s}),l&&bn({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?An():void 0,...S}),l&&Rn({...S}),Pn({...S,apply:({elements:nt,rects:Bt,availableWidth:be,availableHeight:Ae})=>{const{width:Re,height:Pe}=Bt.reference,ct=nt.floating.style;ct.setProperty("--radix-popper-available-width",`${be}px`),ct.setProperty("--radix-popper-available-height",`${Ae}px`),ct.setProperty("--radix-popper-anchor-width",`${Re}px`),ct.setProperty("--radix-popper-anchor-height",`${Pe}px`)}}),y&&Cn({element:y,padding:c}),kn({arrowWidth:O,arrowHeight:M}),h&&On({strategy:"referenceHidden",...S})]}),[L,z]=he(E),st=Se(p);vt(()=>{D&&(st==null||st())},[D,st]);const ge=($t=R.arrow)==null?void 0:$t.x,we=(kt=R.arrow)==null?void 0:kt.y,xe=((Nt=R.arrow)==null?void 0:Nt.centerOffset)!==0,[ye,ve]=A.useState();return vt(()=>{g&&ve(window.getComputedStyle(g).zIndex)},[g]),j.jsx("div",{ref:C.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:D?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ye,"--radix-popper-transform-origin":[(Ht=R.transformOrigin)==null?void 0:Ht.x,(Ft=R.transformOrigin)==null?void 0:Ft.y].join(" "),...((Wt=R.hide)==null?void 0:Wt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:j.jsx(Mn,{scope:n,placedSide:L,onArrowChange:v,arrowX:ge,arrowY:we,shouldHideArrow:xe,children:j.jsx(ht.div,{"data-side":L,"data-align":z,...m,ref:b,style:{...m.style,animation:D?void 0:"none"}})})})});ue.displayName=Lt;var de="PopperArrow",Ln={top:"bottom",right:"left",bottom:"top",left:"right"},pe=A.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=Tn(de,o),s=Ln[i.placedSide];return j.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:j.jsx(En,{...r,ref:n,style:{...r.style,display:"block"}})})});pe.displayName=de;function $n(t){return t!==null}var kn=t=>({name:"transformOrigin",options:t,fn(e){var w,g,x;const{placement:n,rects:o,middlewareData:r}=e,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,c=s?0:t.arrowWidth,l=s?0:t.arrowHeight,[a,f]=he(n),u={start:"0%",center:"50%",end:"100%"}[f],h=(((g=r.arrow)==null?void 0:g.x)??0)+c/2,d=(((x=r.arrow)==null?void 0:x.y)??0)+l/2;let p="",m="";return a==="bottom"?(p=s?u:`${h}px`,m=`${-l}px`):a==="top"?(p=s?u:`${h}px`,m=`${o.floating.height+l}px`):a==="right"?(p=`${-l}px`,m=s?u:`${d}px`):a==="left"&&(p=`${o.floating.width+l}px`,m=s?u:`${d}px`),{data:{x:p,y:m}}}});function he(t){const[e,n="center"]=t.split("-");return[e,n]}var Bn=le,_n=fe,zn=ue,jn=pe,Nn="VisuallyHidden",me=A.forwardRef((t,e)=>j.jsx(ht.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));me.displayName=Nn;var Vn=me;export{_n as A,zn as C,Bn as R,me as V,Ee as a,Vn as b,Wn as c,jn as d,Fn as u};
