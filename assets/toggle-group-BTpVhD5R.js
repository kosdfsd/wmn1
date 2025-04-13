import{q as O,r as f,z as le,j as c,P as F,x as G,v as ce,w as P,W as de,X as x,Y as fe,c as V,y as K}from"./index-Bhchx0Ux.js";import{a as pe,u as L}from"./helpers-C_ryowx7.js";var A="rovingFocusGroup.onEntryFocus",ge={bubbles:!1,cancelable:!0},_="RovingFocusGroup",[N,U,ve]=pe(_),[me,B]=O(_,[ve]),[be,xe]=me(_),$=f.forwardRef((t,e)=>c.jsx(N.Provider,{scope:t.__scopeRovingFocusGroup,children:c.jsx(N.Slot,{scope:t.__scopeRovingFocusGroup,children:c.jsx(Ie,{...t,ref:e})})}));$.displayName=_;var Ie=f.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:r,orientation:o,loop:s=!1,dir:a,currentTabStopId:n,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:l,onEntryFocus:u,preventScrollOnEntryFocus:d=!1,...g}=t,v=f.useRef(null),I=ce(e,v),p=L(a),[h=null,E]=P({prop:n,defaultProp:i,onChange:l}),[b,T]=f.useState(!1),y=de(u),re=U(r),S=f.useRef(!1),[ne,k]=f.useState(0);return f.useEffect(()=>{const m=v.current;if(m)return m.addEventListener(A,y),()=>m.removeEventListener(A,y)},[y]),c.jsx(be,{scope:r,orientation:o,dir:p,loop:s,currentTabStopId:h,onItemFocus:f.useCallback(m=>E(m),[E]),onItemShiftTab:f.useCallback(()=>T(!0),[]),onFocusableItemAdd:f.useCallback(()=>k(m=>m+1),[]),onFocusableItemRemove:f.useCallback(()=>k(m=>m-1),[]),children:c.jsx(F.div,{tabIndex:b||ne===0?-1:0,"data-orientation":o,...g,ref:I,style:{outline:"none",...t.style},onMouseDown:G(t.onMouseDown,()=>{S.current=!0}),onFocus:G(t.onFocus,m=>{const se=!S.current;if(m.target===m.currentTarget&&se&&!b){const z=new CustomEvent(A,ge);if(m.currentTarget.dispatchEvent(z),!z.defaultPrevented){const j=re().filter(C=>C.focusable),ae=j.find(C=>C.active),ie=j.find(C=>C.id===h),ue=[ae,ie,...j].filter(Boolean).map(C=>C.ref.current);q(ue,d)}}S.current=!1}),onBlur:G(t.onBlur,()=>T(!1))})})}),Y="RovingFocusGroupItem",H=f.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:r,focusable:o=!0,active:s=!1,tabStopId:a,...n}=t,i=le(),l=a||i,u=xe(Y,r),d=u.currentTabStopId===l,g=U(r),{onFocusableItemAdd:v,onFocusableItemRemove:I}=u;return f.useEffect(()=>{if(o)return v(),()=>I()},[o,v,I]),c.jsx(N.ItemSlot,{scope:r,id:l,focusable:o,active:s,children:c.jsx(F.span,{tabIndex:d?0:-1,"data-orientation":u.orientation,...n,ref:e,onMouseDown:G(t.onMouseDown,p=>{o?u.onItemFocus(l):p.preventDefault()}),onFocus:G(t.onFocus,()=>u.onItemFocus(l)),onKeyDown:G(t.onKeyDown,p=>{if(p.key==="Tab"&&p.shiftKey){u.onItemShiftTab();return}if(p.target!==p.currentTarget)return;const h=Ce(p,u.orientation,u.dir);if(h!==void 0){if(p.metaKey||p.ctrlKey||p.altKey||p.shiftKey)return;p.preventDefault();let b=g().filter(T=>T.focusable).map(T=>T.ref.current);if(h==="last")b.reverse();else if(h==="prev"||h==="next"){h==="prev"&&b.reverse();const T=b.indexOf(p.currentTarget);b=u.loop?Ge(b,T+1):b.slice(T+1)}setTimeout(()=>q(b))}})})})});H.displayName=Y;var Te={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function he(t,e){return e!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function Ce(t,e,r){const o=he(t.key,r);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Te[o]}function q(t,e=!1){const r=document.activeElement;for(const o of t)if(o===r||(o.focus({preventScroll:e}),document.activeElement!==r))return}function Ge(t,e){return t.map((r,o)=>t[(e+o)%t.length])}var we=$,Fe=H,Re="Toggle",W=f.forwardRef((t,e)=>{const{pressed:r,defaultPressed:o=!1,onPressedChange:s,...a}=t,[n=!1,i]=P({prop:r,onChange:s,defaultProp:o});return c.jsx(F.button,{type:"button","aria-pressed":n,"data-state":n?"on":"off","data-disabled":t.disabled?"":void 0,...a,ref:e,onClick:G(t.onClick,()=>{t.disabled||i(!n)})})});W.displayName=Re;var w="ToggleGroup",[X,ze]=O(w,[B]),J=B(),D=x.forwardRef((t,e)=>{const{type:r,...o}=t;if(r==="single"){const s=o;return c.jsx(Pe,{...s,ref:e})}if(r==="multiple"){const s=o;return c.jsx(_e,{...s,ref:e})}throw new Error(`Missing prop \`type\` expected on \`${w}\``)});D.displayName=w;var[Q,Z]=X(w),Pe=x.forwardRef((t,e)=>{const{value:r,defaultValue:o,onValueChange:s=()=>{},...a}=t,[n,i]=P({prop:r,defaultProp:o,onChange:s});return c.jsx(Q,{scope:t.__scopeToggleGroup,type:"single",value:n?[n]:[],onItemActivate:i,onItemDeactivate:x.useCallback(()=>i(""),[i]),children:c.jsx(ee,{...a,ref:e})})}),_e=x.forwardRef((t,e)=>{const{value:r,defaultValue:o,onValueChange:s=()=>{},...a}=t,[n=[],i]=P({prop:r,defaultProp:o,onChange:s}),l=x.useCallback(d=>i((g=[])=>[...g,d]),[i]),u=x.useCallback(d=>i((g=[])=>g.filter(v=>v!==d)),[i]);return c.jsx(Q,{scope:t.__scopeToggleGroup,type:"multiple",value:n,onItemActivate:l,onItemDeactivate:u,children:c.jsx(ee,{...a,ref:e})})});D.displayName=w;var[Ee,ye]=X(w),ee=x.forwardRef((t,e)=>{const{__scopeToggleGroup:r,disabled:o=!1,rovingFocus:s=!0,orientation:a,dir:n,loop:i=!0,...l}=t,u=J(r),d=L(n),g={role:"group",dir:d,...l};return c.jsx(Ee,{scope:r,rovingFocus:s,disabled:o,children:s?c.jsx(we,{asChild:!0,...u,orientation:a,dir:d,loop:i,children:c.jsx(F.div,{...g,ref:e})}):c.jsx(F.div,{...g,ref:e})})}),R="ToggleGroupItem",te=x.forwardRef((t,e)=>{const r=Z(R,t.__scopeToggleGroup),o=ye(R,t.__scopeToggleGroup),s=J(t.__scopeToggleGroup),a=r.value.includes(t.value),n=o.disabled||t.disabled,i={...t,pressed:a,disabled:n},l=x.useRef(null);return o.rovingFocus?c.jsx(Fe,{asChild:!0,...s,focusable:!n,active:a,ref:l,children:c.jsx(M,{...i,ref:e})}):c.jsx(M,{...i,ref:e})});te.displayName=R;var M=x.forwardRef((t,e)=>{const{__scopeToggleGroup:r,value:o,...s}=t,a=Z(R,r),n={role:"radio","aria-checked":t.pressed,"aria-pressed":void 0},i=a.type==="single"?n:void 0;return c.jsx(W,{...i,...s,ref:e,onPressedChange:l=>{l?a.onItemActivate(o):a.onItemDeactivate(o)}})}),Se=D,je=te;const Ae=fe("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-2 min-w-9",sm:"h-8 px-1.5 min-w-8",lg:"h-10 px-2.5 min-w-10"}},defaultVariants:{variant:"default",size:"default"}}),oe=f.createContext({size:"default",variant:"default"});function Me(t){const e=V.c(20);let r,o,s,a,n;e[0]!==t?({className:o,variant:n,size:a,children:r,...s}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=s,e[4]=a,e[5]=n):(r=e[1],o=e[2],s=e[3],a=e[4],n=e[5]);let i;e[6]!==o?(i=K("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",o),e[6]=o,e[7]=i):i=e[7];let l;e[8]!==a||e[9]!==n?(l={variant:n,size:a},e[8]=a,e[9]=n,e[10]=l):l=e[10];let u;e[11]!==r||e[12]!==l?(u=c.jsx(oe.Provider,{value:l,children:r}),e[11]=r,e[12]=l,e[13]=u):u=e[13];let d;return e[14]!==s||e[15]!==a||e[16]!==i||e[17]!==u||e[18]!==n?(d=c.jsx(Se,{"data-slot":"toggle-group","data-variant":n,"data-size":a,className:i,...s,children:u}),e[14]=s,e[15]=a,e[16]=i,e[17]=u,e[18]=n,e[19]=d):d=e[19],d}function Oe(t){const e=V.c(16);let r,o,s,a,n;e[0]!==t?({className:o,children:r,variant:n,size:a,...s}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=s,e[4]=a,e[5]=n):(r=e[1],o=e[2],s=e[3],a=e[4],n=e[5]);const i=f.useContext(oe),l=i.variant||n,u=i.size||a,d=i.variant||n,g=i.size||a;let v;e[6]!==o||e[7]!==d||e[8]!==g?(v=K(Ae({variant:d,size:g}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",o),e[6]=o,e[7]=d,e[8]=g,e[9]=v):v=e[9];let I;return e[10]!==r||e[11]!==s||e[12]!==l||e[13]!==u||e[14]!==v?(I=c.jsx(je,{"data-slot":"toggle-group-item","data-variant":l,"data-size":u,className:v,...s,children:r}),e[10]=r,e[11]=s,e[12]=l,e[13]=u,e[14]=v,e[15]=I):I=e[15],I}export{Oe as T,Me as a};
