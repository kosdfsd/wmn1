import{o as Fe,r as i,j as s,p as Qe,c as le,q as oe,S as Nt,u as Tt,a as _t,B as ie,v as Xe,t as fe,w as St,x as kt,y as Pt,z as Et,A as Rt,C as ot,D as At,R as Lt}from"./index-C-xItanK.js";import{P as et,L as re,C as Mt,a as It,b as Dt,c as Ot,e as Ht,f as Gt,d as $t}from"./label-BdongPKI.js";import{T as zt,C as Ft}from"./textarea-Bcq1x-Ac.js";import{I as $e}from"./input-ChhE-7l_.js";import{c as at,u as lt,a as k,b as Ut}from"./index-CPuUejGw.js";import{u as Wt,a as Bt,c as ct,R as Vt,A as qt,P as it,b as Kt,D as Zt,C as Xt,d as Yt,e as Jt}from"./index-DpGzqsWh.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],de=Fe("Info",Qt);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ts=Fe("Plus",es);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],rs=Fe("Shuffle",ss);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],os=Fe("Trash",ns);var tt="Switch",[as,Us]=at(tt),[ls,cs]=as(tt),dt=i.forwardRef((e,t)=>{const{__scopeSwitch:r,name:n,checked:o,defaultChecked:a,required:l,disabled:d,value:c="on",onCheckedChange:m,form:h,...f}=e,[g,p]=i.useState(null),v=Qe(t,j=>p(j)),x=i.useRef(!1),y=g?h||!!g.closest("form"):!0,[b=!1,w]=lt({prop:o,defaultProp:a,onChange:m});return s.jsxs(ls,{scope:r,checked:b,disabled:d,children:[s.jsx(et.button,{type:"button",role:"switch","aria-checked":b,"aria-required":l,"data-state":mt(b),"data-disabled":d?"":void 0,disabled:d,value:c,...f,ref:v,onClick:k(e.onClick,j=>{w(C=>!C),y&&(x.current=j.isPropagationStopped(),x.current||j.stopPropagation())})}),y&&s.jsx(is,{control:g,bubbles:!x.current,name:n,value:c,checked:b,required:l,disabled:d,form:h,style:{transform:"translateX(-100%)"}})]})});dt.displayName=tt;var ut="SwitchThumb",ht=i.forwardRef((e,t)=>{const{__scopeSwitch:r,...n}=e,o=cs(ut,r);return s.jsx(et.span,{"data-state":mt(o.checked),"data-disabled":o.disabled?"":void 0,...n,ref:t})});ht.displayName=ut;var is=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,a=i.useRef(null),l=Wt(r),d=Bt(t);return i.useEffect(()=>{const c=a.current,m=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(m,"checked").set;if(l!==r&&f){const g=new Event("click",{bubbles:n});f.call(c,r),c.dispatchEvent(g)}},[l,r,n]),s.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:a,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function mt(e){return e?"checked":"unchecked"}var ds=dt,us=ht;function ze(e){const t=le.c(9);let r,n;t[0]!==e?({className:r,...n}=e,t[0]=e,t[1]=r,t[2]=n):(r=t[1],n=t[2]);let o;t[3]!==r?(o=oe("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",r),t[3]=r,t[4]=o):o=t[4];let a;t[5]===Symbol.for("react.memo_cache_sentinel")?(a=s.jsx(us,{"data-slot":"switch-thumb",className:oe("bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")}),t[5]=a):a=t[5];let l;return t[6]!==n||t[7]!==o?(l=s.jsx(ds,{"data-slot":"switch",className:o,...n,children:a}),t[6]=n,t[7]=o,t[8]=l):l=t[8],l}var[Ue,Ws]=at("Tooltip",[ct]),We=ct(),ft="TooltipProvider",hs=700,Ye="tooltip.open",[ms,st]=Ue(ft),pt=e=>{const{__scopeTooltip:t,delayDuration:r=hs,skipDelayDuration:n=300,disableHoverableContent:o=!1,children:a}=e,[l,d]=i.useState(!0),c=i.useRef(!1),m=i.useRef(0);return i.useEffect(()=>{const h=m.current;return()=>window.clearTimeout(h)},[]),s.jsx(ms,{scope:t,isOpenDelayed:l,delayDuration:r,onOpen:i.useCallback(()=>{window.clearTimeout(m.current),d(!1)},[]),onClose:i.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>d(!0),n)},[n]),isPointerInTransitRef:c,onPointerInTransitChange:i.useCallback(h=>{c.current=h},[]),disableHoverableContent:o,children:a})};pt.displayName=ft;var Be="Tooltip",[fs,pe]=Ue(Be),xt=e=>{const{__scopeTooltip:t,children:r,open:n,defaultOpen:o=!1,onOpenChange:a,disableHoverableContent:l,delayDuration:d}=e,c=st(Be,e.__scopeTooltip),m=We(t),[h,f]=i.useState(null),g=Ut(),p=i.useRef(0),v=l??c.disableHoverableContent,x=d??c.delayDuration,y=i.useRef(!1),[b=!1,w]=lt({prop:n,defaultProp:o,onChange:ge=>{ge?(c.onOpen(),document.dispatchEvent(new CustomEvent(Ye))):c.onClose(),a==null||a(ge)}}),j=i.useMemo(()=>b?y.current?"delayed-open":"instant-open":"closed",[b]),C=i.useCallback(()=>{window.clearTimeout(p.current),p.current=0,y.current=!1,w(!0)},[w]),T=i.useCallback(()=>{window.clearTimeout(p.current),p.current=0,w(!1)},[w]),xe=i.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{y.current=!0,w(!0),p.current=0},x)},[x,w]);return i.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),s.jsx(Vt,{...m,children:s.jsx(fs,{scope:t,contentId:g,open:b,stateAttribute:j,trigger:h,onTriggerChange:f,onTriggerEnter:i.useCallback(()=>{c.isOpenDelayed?xe():C()},[c.isOpenDelayed,xe,C]),onTriggerLeave:i.useCallback(()=>{v?T():(window.clearTimeout(p.current),p.current=0)},[T,v]),onOpen:C,onClose:T,disableHoverableContent:v,children:r})})};xt.displayName=Be;var Je="TooltipTrigger",gt=i.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,o=pe(Je,r),a=st(Je,r),l=We(r),d=i.useRef(null),c=Qe(t,d,o.onTriggerChange),m=i.useRef(!1),h=i.useRef(!1),f=i.useCallback(()=>m.current=!1,[]);return i.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),s.jsx(qt,{asChild:!0,...l,children:s.jsx(et.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...n,ref:c,onPointerMove:k(e.onPointerMove,g=>{g.pointerType!=="touch"&&!h.current&&!a.isPointerInTransitRef.current&&(o.onTriggerEnter(),h.current=!0)}),onPointerLeave:k(e.onPointerLeave,()=>{o.onTriggerLeave(),h.current=!1}),onPointerDown:k(e.onPointerDown,()=>{m.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:k(e.onFocus,()=>{m.current||o.onOpen()}),onBlur:k(e.onBlur,o.onClose),onClick:k(e.onClick,o.onClose)})})});gt.displayName=Je;var rt="TooltipPortal",[ps,xs]=Ue(rt,{forceMount:void 0}),yt=e=>{const{__scopeTooltip:t,forceMount:r,children:n,container:o}=e,a=pe(rt,t);return s.jsx(ps,{scope:t,forceMount:r,children:s.jsx(it,{present:r||a.open,children:s.jsx(Kt,{asChild:!0,container:o,children:n})})})};yt.displayName=rt;var ae="TooltipContent",vt=i.forwardRef((e,t)=>{const r=xs(ae,e.__scopeTooltip),{forceMount:n=r.forceMount,side:o="top",...a}=e,l=pe(ae,e.__scopeTooltip);return s.jsx(it,{present:n||l.open,children:l.disableHoverableContent?s.jsx(bt,{side:o,...a,ref:t}):s.jsx(gs,{side:o,...a,ref:t})})}),gs=i.forwardRef((e,t)=>{const r=pe(ae,e.__scopeTooltip),n=st(ae,e.__scopeTooltip),o=i.useRef(null),a=Qe(t,o),[l,d]=i.useState(null),{trigger:c,onClose:m}=r,h=o.current,{onPointerInTransitChange:f}=n,g=i.useCallback(()=>{d(null),f(!1)},[f]),p=i.useCallback((v,x)=>{const y=v.currentTarget,b={x:v.clientX,y:v.clientY},w=bs(b,y.getBoundingClientRect()),j=ws(b,w),C=js(x.getBoundingClientRect()),T=Ns([...j,...C]);d(T),f(!0)},[f]);return i.useEffect(()=>()=>g(),[g]),i.useEffect(()=>{if(c&&h){const v=y=>p(y,h),x=y=>p(y,c);return c.addEventListener("pointerleave",v),h.addEventListener("pointerleave",x),()=>{c.removeEventListener("pointerleave",v),h.removeEventListener("pointerleave",x)}}},[c,h,p,g]),i.useEffect(()=>{if(l){const v=x=>{const y=x.target,b={x:x.clientX,y:x.clientY},w=(c==null?void 0:c.contains(y))||(h==null?void 0:h.contains(y)),j=!Cs(b,l);w?g():j&&(g(),m())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[c,h,l,m,g]),s.jsx(bt,{...e,ref:a})}),[ys,vs]=Ue(Be,{isInside:!1}),bt=i.forwardRef((e,t)=>{const{__scopeTooltip:r,children:n,"aria-label":o,onEscapeKeyDown:a,onPointerDownOutside:l,...d}=e,c=pe(ae,r),m=We(r),{onClose:h}=c;return i.useEffect(()=>(document.addEventListener(Ye,h),()=>document.removeEventListener(Ye,h)),[h]),i.useEffect(()=>{if(c.trigger){const f=g=>{const p=g.target;p!=null&&p.contains(c.trigger)&&h()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[c.trigger,h]),s.jsx(Zt,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:f=>f.preventDefault(),onDismiss:h,children:s.jsxs(Xt,{"data-state":c.stateAttribute,...m,...d,ref:t,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[s.jsx(Nt,{children:n}),s.jsx(ys,{scope:r,isInside:!0,children:s.jsx(Yt,{id:c.contentId,role:"tooltip",children:o||n})})]})})});vt.displayName=ae;var wt="TooltipArrow",jt=i.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,o=We(r);return vs(wt,r).isInside?null:s.jsx(Jt,{...o,...n,ref:t})});jt.displayName=wt;function bs(e,t){const r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(r,n,o,a)){case a:return"left";case o:return"right";case r:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function ws(e,t,r=5){const n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r});break}return n}function js(e){const{top:t,right:r,bottom:n,left:o}=e;return[{x:o,y:t},{x:r,y:t},{x:r,y:n},{x:o,y:n}]}function Cs(e,t){const{x:r,y:n}=e;let o=!1;for(let a=0,l=t.length-1;a<t.length;l=a++){const d=t[a].x,c=t[a].y,m=t[l].x,h=t[l].y;c>n!=h>n&&r<(m-d)*(n-c)/(h-c)+d&&(o=!o)}return o}function Ns(e){const t=e.slice();return t.sort((r,n)=>r.x<n.x?-1:r.x>n.x?1:r.y<n.y?-1:r.y>n.y?1:0),Ts(t)}function Ts(e){if(e.length<=1)return e.slice();const t=[];for(let n=0;n<e.length;n++){const o=e[n];for(;t.length>=2;){const a=t[t.length-1],l=t[t.length-2];if((a.x-l.x)*(o.y-l.y)>=(a.y-l.y)*(o.x-l.x))t.pop();else break}t.push(o)}t.pop();const r=[];for(let n=e.length-1;n>=0;n--){const o=e[n];for(;r.length>=2;){const a=r[r.length-1],l=r[r.length-2];if((a.x-l.x)*(o.y-l.y)>=(a.y-l.y)*(o.x-l.x))r.pop();else break}r.push(o)}return r.pop(),t.length===1&&r.length===1&&t[0].x===r[0].x&&t[0].y===r[0].y?t:t.concat(r)}var _s=pt,Ss=xt,ks=gt,Ps=yt,Es=vt,Rs=jt;function ne(e){const t=le.c(6);let r,n;t[0]!==e?({delayDuration:n,...r}=e,t[0]=e,t[1]=r,t[2]=n):(r=t[1],n=t[2]);const o=n===void 0?0:n;let a;return t[3]!==o||t[4]!==r?(a=s.jsx(_s,{"data-slot":"tooltip-provider",delayDuration:o,...r}),t[3]=o,t[4]=r,t[5]=a):a=t[5],a}function ue(e){const t=le.c(4);let r;t[0]!==e?({...r}=e,t[0]=e,t[1]=r):r=t[1];let n;return t[2]!==r?(n=s.jsx(ne,{children:s.jsx(Ss,{"data-slot":"tooltip",...r})}),t[2]=r,t[3]=n):n=t[3],n}function he(e){const t=le.c(4);let r;t[0]!==e?({...r}=e,t[0]=e,t[1]=r):r=t[1];let n;return t[2]!==r?(n=s.jsx(ks,{"data-slot":"tooltip-trigger",...r}),t[2]=r,t[3]=n):n=t[3],n}function me(e){const t=le.c(13);let r,n,o,a;t[0]!==e?({className:n,sideOffset:a,children:r,...o}=e,t[0]=e,t[1]=r,t[2]=n,t[3]=o,t[4]=a):(r=t[1],n=t[2],o=t[3],a=t[4]);const l=a===void 0?0:a;let d;t[5]!==n?(d=oe("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",n),t[5]=n,t[6]=d):d=t[6];let c;t[7]===Symbol.for("react.memo_cache_sentinel")?(c=s.jsx(Rs,{className:"bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"}),t[7]=c):c=t[7];let m;return t[8]!==r||t[9]!==o||t[10]!==l||t[11]!==d?(m=s.jsx(Ps,{children:s.jsxs(Es,{"data-slot":"tooltip-content",sideOffset:l,className:d,...o,children:[r,c]})}),t[8]=r,t[9]=o,t[10]=l,t[11]=d,t[12]=m):m=t[12],m}const Bs=()=>{const e=le.c(123),t=Tt(),{includeNumbers:r,includeSymbols:n,includeUppercase:o,includeLowercase:a,randomLength:l,randomString:d,wordEntries:c}=_t(As),[m,h]=i.useState(!1),[f,g]=i.useState(""),[p,v]=i.useState(1),[x,y]=i.useState(null);let b,w;e[0]!==m?(b=()=>{if(m){const u=setTimeout(()=>h(!1),2e3);return()=>clearTimeout(u)}},w=[m],e[0]=m,e[1]=b,e[2]=w):(b=e[1],w=e[2]),i.useEffect(b,w);let j,C;e[3]!==d?(j=()=>{if(!d){y(null);return}const u=d.length,N=/[a-z]/.test(d),_=/[A-Z]/.test(d),S=/[0-9]/.test(d),ce=/[^a-zA-Z0-9]/.test(d),nt=[N,_,S,ce].filter(Boolean).length;u>=12&&nt>=3?y("strong"):u>=8&&nt>=2?y("medium"):y("weak")},C=[d],e[3]=d,e[4]=j,e[5]=C):(j=e[4],C=e[5]),i.useEffect(j,C);let T;e[6]===Symbol.for("react.memo_cache_sentinel")?(T=u=>{navigator.clipboard.writeText(u).then(()=>{h(!0),fe.success("Copied to clipboard",{description:"The content has been copied to your clipboard"})}).catch(Ls)},e[6]=T):T=e[6];const xe=T,ge=Is,Ct=Ds;let ye;e[7]!==t||e[8]!==a||e[9]!==r||e[10]!==n||e[11]!==o||e[12]!==l||e[13]!==c?(ye=()=>{if(c.length>0){const u=Ct(c);t(Xe(u)),fe.success("String Generated",{description:"Generated a string using repeated words"})}else{let u="";if(a&&(u="abcdefghijklmnopqrstuvwxyz"),o&&(u=u+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),r&&(u=u+"0123456789"),n&&(u=u+"!@#$%^&*()_-+=<>?"),u.length===0){fe.error("Error",{description:"Please select at least one character type"});return}let N="";const _=u.length;if(window.crypto&&window.crypto.getRandomValues){const S=new Uint32Array(l);window.crypto.getRandomValues(S);for(let ce=0;ce<l;ce++)N=N+u.charAt(S[ce]%_)}else for(let S=0;S<l;S++)N=N+u.charAt(Math.floor(Math.random()*_));t(Xe(N)),fe.success("String Generated",{description:`Generated a ${l} character string`})}},e[7]=t,e[8]=a,e[9]=r,e[10]=n,e[11]=o,e[12]=l,e[13]=c,e[14]=ye):ye=e[14];const Ve=ye;let ve;e[15]!==t||e[16]!==f||e[17]!==p?(ve=()=>{f.trim()!==""&&(t(St({word:f.trim(),times:p})),g(""),v(1))},e[15]=t,e[16]=f,e[17]=p,e[18]=ve):ve=e[18];const P=ve;let be;e[19]!==P?(be=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),P())},e[19]=P,e[20]=be):be=e[20];const qe=be;let we;e[21]===Symbol.for("react.memo_cache_sentinel")?(we=s.jsxs(It,{children:[s.jsx(Dt,{className:"text-2xl",children:"Random String Generator"}),s.jsx(Ot,{children:"Generate secure random strings with custom options"})]}),e[21]=we):we=e[21];let je;e[22]===Symbol.for("react.memo_cache_sentinel")?(je=s.jsx("h3",{className:"mb-3 font-medium",children:"Character Settings"}),e[22]=je):je=e[22];let Ce;e[23]===Symbol.for("react.memo_cache_sentinel")?(Ce=s.jsx(re,{htmlFor:"includeLowercase",children:"Include Lowercase"}),e[23]=Ce):Ce=e[23];let Ne;e[24]===Symbol.for("react.memo_cache_sentinel")?(Ne=s.jsxs("div",{className:"flex items-center gap-2",children:[Ce,s.jsx(ne,{children:s.jsxs(ue,{children:[s.jsx(he,{children:s.jsx(de,{className:"text-muted-foreground h-4 w-4"})}),s.jsx(me,{children:"Add Lowercase letters (A-Z) to your random string"})]})})]}),e[24]=Ne):Ne=e[24];let E;e[25]!==t?(E=u=>t(kt(u)),e[25]=t,e[26]=E):E=e[26];let R;e[27]!==a||e[28]!==E?(R=s.jsxs("div",{className:"flex items-center justify-between",children:[Ne,s.jsx(ze,{id:"includeLowercase",checked:a,onCheckedChange:E})]}),e[27]=a,e[28]=E,e[29]=R):R=e[29];let Te;e[30]===Symbol.for("react.memo_cache_sentinel")?(Te=s.jsx(re,{htmlFor:"includeUppercase",children:"Include Uppercase"}),e[30]=Te):Te=e[30];let _e;e[31]===Symbol.for("react.memo_cache_sentinel")?(_e=s.jsxs("div",{className:"flex items-center gap-2",children:[Te,s.jsx(ne,{children:s.jsxs(ue,{children:[s.jsx(he,{children:s.jsx(de,{className:"text-muted-foreground h-4 w-4"})}),s.jsx(me,{children:"Add uppercase letters (A-Z) to your random string"})]})})]}),e[31]=_e):_e=e[31];let A;e[32]!==t?(A=u=>t(Pt(u)),e[32]=t,e[33]=A):A=e[33];let L;e[34]!==o||e[35]!==A?(L=s.jsxs("div",{className:"flex items-center justify-between",children:[_e,s.jsx(ze,{id:"includeUppercase",checked:o,onCheckedChange:A})]}),e[34]=o,e[35]=A,e[36]=L):L=e[36];let Se;e[37]===Symbol.for("react.memo_cache_sentinel")?(Se=s.jsx(re,{htmlFor:"includeNumbers",children:"Include Numbers"}),e[37]=Se):Se=e[37];let ke;e[38]===Symbol.for("react.memo_cache_sentinel")?(ke=s.jsxs("div",{className:"flex items-center gap-2",children:[Se,s.jsx(ne,{children:s.jsxs(ue,{children:[s.jsx(he,{children:s.jsx(de,{className:"text-muted-foreground h-4 w-4"})}),s.jsx(me,{children:"Add numbers (0-9) to your random string"})]})})]}),e[38]=ke):ke=e[38];let M;e[39]!==t?(M=u=>t(Et(u)),e[39]=t,e[40]=M):M=e[40];let I;e[41]!==r||e[42]!==M?(I=s.jsxs("div",{className:"flex items-center justify-between",children:[ke,s.jsx(ze,{id:"includeNumbers",checked:r,onCheckedChange:M})]}),e[41]=r,e[42]=M,e[43]=I):I=e[43];let Pe;e[44]===Symbol.for("react.memo_cache_sentinel")?(Pe=s.jsx(re,{htmlFor:"includeSymbols",children:"Include Symbols"}),e[44]=Pe):Pe=e[44];let Ee;e[45]===Symbol.for("react.memo_cache_sentinel")?(Ee=s.jsxs("div",{className:"flex items-center gap-2",children:[Pe,s.jsx(ne,{children:s.jsxs(ue,{children:[s.jsx(he,{children:s.jsx(de,{className:"text-muted-foreground h-4 w-4"})}),s.jsx(me,{children:"Add special characters (!@#$%^&*()_-+=<>?) to your random string"})]})})]}),e[45]=Ee):Ee=e[45];let D;e[46]!==t?(D=u=>t(Rt(u)),e[46]=t,e[47]=D):D=e[47];let O;e[48]!==n||e[49]!==D?(O=s.jsxs("div",{className:"flex items-center justify-between",children:[Ee,s.jsx(ze,{id:"includeSymbols",checked:n,onCheckedChange:D})]}),e[48]=n,e[49]=D,e[50]=O):O=e[50];let H;e[51]!==R||e[52]!==L||e[53]!==I||e[54]!==O?(H=s.jsxs("div",{className:"bg-muted/30 rounded-lg p-4",children:[je,s.jsxs("div",{className:"space-y-3",children:[R,L,I,O]})]}),e[51]=R,e[52]=L,e[53]=I,e[54]=O,e[55]=H):H=e[55];let G;e[56]!==l?(G=s.jsxs(re,{htmlFor:"length",className:"text-sm font-medium",children:["Length (",l," characters)"]}),e[56]=l,e[57]=G):G=e[57];let $;e[58]!==t?($=u=>{const N=Number(u.target.value);t(ot(Math.min(Math.max(N,4),64)))},e[58]=t,e[59]=$):$=e[59];let z;e[60]!==l||e[61]!==$?(z=s.jsx($e,{id:"lengthInput",type:"number",value:l,onChange:$,min:4,max:64,className:"w-20"}),e[60]=l,e[61]=$,e[62]=z):z=e[62];let F;e[63]!==G||e[64]!==z?(F=s.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[G,z]}),e[63]=G,e[64]=z,e[65]=F):F=e[65];let U;e[66]!==t?(U=u=>t(ot(Number(u.target.value))),e[66]=t,e[67]=U):U=e[67];let W;e[68]!==l||e[69]!==U?(W=s.jsx($e,{id:"length",type:"range",value:l,onChange:U,min:4,max:64,className:"w-full"}),e[68]=l,e[69]=U,e[70]=W):W=e[70];let B;e[71]!==F||e[72]!==W?(B=s.jsxs("div",{children:[F,W]}),e[71]=F,e[72]=W,e[73]=B):B=e[73];let Re;e[74]===Symbol.for("react.memo_cache_sentinel")?(Re=s.jsx("h3",{className:"font-medium",children:"Word Repetitions"}),e[74]=Re):Re=e[74];let Ae;e[75]===Symbol.for("react.memo_cache_sentinel")?(Ae=s.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[Re,s.jsx(ne,{children:s.jsxs(ue,{children:[s.jsx(he,{children:s.jsx(de,{className:"text-muted-foreground h-4 w-4"})}),s.jsx(me,{children:"Add words that will be repeated and shuffled to create your random string"})]})})]}),e[75]=Ae):Ae=e[75];let Le;e[76]===Symbol.for("react.memo_cache_sentinel")?(Le=u=>g(u.target.value),e[76]=Le):Le=e[76];let V;e[77]!==qe||e[78]!==f?(V=s.jsx($e,{type:"text",placeholder:"Enter word",value:f,onChange:Le,onKeyDown:qe,className:"flex-1"}),e[77]=qe,e[78]=f,e[79]=V):V=e[79];let Me;e[80]===Symbol.for("react.memo_cache_sentinel")?(Me=u=>v(Number(u.target.value)||1),e[80]=Me):Me=e[80];let q;e[81]!==p?(q=s.jsx($e,{type:"number",placeholder:"Repeats",value:p,onChange:Me,min:1,className:"w-20"}),e[81]=p,e[82]=q):q=e[82];const Ke=!f.trim();let Ie,De;e[83]===Symbol.for("react.memo_cache_sentinel")?(Ie=s.jsx(ts,{className:"h-4 w-4"}),De=s.jsx("span",{className:"sr-only",children:"Add Word"}),e[83]=Ie,e[84]=De):(Ie=e[83],De=e[84]);let K;e[85]!==P||e[86]!==Ke?(K=s.jsxs(ie,{variant:"outline",onClick:P,type:"button",disabled:Ke,children:[Ie,De]}),e[85]=P,e[86]=Ke,e[87]=K):K=e[87];let Z;e[88]!==V||e[89]!==q||e[90]!==K?(Z=s.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[V,q,K]}),e[88]=V,e[89]=q,e[90]=K,e[91]=Z):Z=e[91];let X;e[92]!==c.length?(X=c.length===0&&s.jsx("p",{className:"text-muted-foreground text-sm italic",children:"No words added yet"}),e[92]=c.length,e[93]=X):X=e[93];let Y;if(e[94]!==t||e[95]!==c){let u;e[97]!==t?(u=(N,_)=>s.jsxs("div",{className:"bg-background flex items-center gap-2 rounded-md p-2",children:[s.jsx("div",{className:"flex-1 font-medium",children:N.word}),s.jsxs("div",{className:"text-muted-foreground text-sm",children:["× ",N.times]}),s.jsxs(ie,{variant:"ghost",size:"sm",onClick:()=>t(At(_)),type:"button",children:[s.jsx(os,{className:"text-destructive h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Remove"})]})]},_),e[97]=t,e[98]=u):u=e[98],Y=c.map(u),e[94]=t,e[95]=c,e[96]=Y}else Y=e[96];let J;e[99]!==X||e[100]!==Y?(J=s.jsxs("div",{className:"max-h-40 space-y-2 overflow-y-auto",children:[X,Y]}),e[99]=X,e[100]=Y,e[101]=J):J=e[101];let Q;e[102]!==Z||e[103]!==J?(Q=s.jsxs("div",{className:"bg-muted/30 rounded-lg p-4",children:[Ae,Z,J]}),e[102]=Z,e[103]=J,e[104]=Q):Q=e[104];const Ze=!n&&!r&&!o&&!a&&c.length===0;let Oe;e[105]===Symbol.for("react.memo_cache_sentinel")?(Oe=s.jsx(Lt,{className:"mr-2 h-4 w-4"}),e[105]=Oe):Oe=e[105];let ee;e[106]!==Ve||e[107]!==Ze?(ee=s.jsxs(ie,{onClick:Ve,className:"w-full",size:"lg",disabled:Ze,children:[Oe," Generate Random String"]}),e[106]=Ve,e[107]=Ze,e[108]=ee):ee=e[108];let te;e[109]!==m||e[110]!==t||e[111]!==x||e[112]!==d?(te=d&&s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(re,{children:"Generated String"}),x&&s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-xs",children:"Strength:"}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:oe("h-2 w-2 rounded-full",x==="weak"?"bg-red-500":"bg-gray-300",x==="medium"?"bg-yellow-500":"",x==="strong"?"bg-green-500":"")}),s.jsx("div",{className:oe("h-2 w-2 rounded-full",x==="weak"?"bg-gray-300":"",x==="medium"?"bg-yellow-500":"bg-gray-300",x==="strong"?"bg-green-500":"")}),s.jsx("div",{className:oe("h-2 w-2 rounded-full",x==="strong"?"bg-green-500":"bg-gray-300")}),s.jsx("span",{className:"text-xs capitalize",children:x})]})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx(zt,{value:d,readOnly:!0,className:"h-24 pr-24 font-mono text-lg"}),s.jsxs("div",{className:"absolute top-2 right-2 flex flex-col gap-1",children:[s.jsx(ie,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",onClick:()=>xe(d),title:"Copy to clipboard",children:m?s.jsx(Mt,{className:"h-4 w-4"}):s.jsx(Ft,{className:"h-4 w-4"})}),s.jsx(ie,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",onClick:()=>t(Xe(ge(d))),title:"Shuffle characters",children:s.jsx(rs,{className:"h-4 w-4"})})]})]}),s.jsxs("div",{className:"text-muted-foreground text-xs",children:[d.length," characters"]})]}),e[109]=m,e[110]=t,e[111]=x,e[112]=d,e[113]=te):te=e[113];let se;e[114]!==H||e[115]!==B||e[116]!==Q||e[117]!==ee||e[118]!==te?(se=s.jsxs(Ht,{className:"space-y-6",children:[H,B,Q,ee,te]}),e[114]=H,e[115]=B,e[116]=Q,e[117]=ee,e[118]=te,e[119]=se):se=e[119];let He;e[120]===Symbol.for("react.memo_cache_sentinel")?(He=s.jsxs(Gt,{className:"text-muted-foreground flex flex-col gap-1 text-xs",children:[s.jsx("p",{children:"Generated strings are created client-side and never stored or transmitted"}),s.jsx("p",{children:"For maximum security, use at least 12 characters with a mix of uppercase, numbers, and symbols"})]}),e[120]=He):He=e[120];let Ge;return e[121]!==se?(Ge=s.jsxs($t,{className:"border-2 shadow-md",children:[we,se,He]}),e[121]=se,e[122]=Ge):Ge=e[122],Ge};function As(e){return e.randomString}function Ls(e){console.error("Failed to copy:",e),fe.error("Copy failed",{description:"Unable to copy to clipboard"})}function Ms(){return Math.random()-.5}function Is(e){return e.split("").sort(Ms).join("")}function Ds(e){const t=[];e.forEach(r=>{for(let n=0;n<r.times;n++)t.push(r.word)});for(let r=t.length-1;r>0;r--){const n=Math.floor(Math.random()*(r+1)),[o,a]=[t[n],t[r]];t[r]=o,t[n]=a}return t.join("")}export{Bs as default};
