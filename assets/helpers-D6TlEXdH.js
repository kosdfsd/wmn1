import{c as S,q as _,L as E,j as x,W as C,K as f,p as A,r as w}from"./index-BVT_mRDl.js";import{c as N}from"./index-C_pRtYqI.js";const T=E("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function D(t){const e=S.c(12);let s,a,l,r;e[0]!==t?({className:s,variant:r,asChild:l,...a}=t,e[0]=t,e[1]=s,e[2]=a,e[3]=l,e[4]=r):(s=e[1],a=e[2],l=e[3],r=e[4]);const m=(l===void 0?!1:l)?C:"span";let n;e[5]!==s||e[6]!==r?(n=_(T({variant:r}),s),e[5]=s,e[6]=r,e[7]=n):n=e[7];let d;return e[8]!==m||e[9]!==a||e[10]!==n?(d=x.jsx(m,{"data-slot":"badge",className:n,...a}),e[8]=m,e[9]=a,e[10]=n,e[11]=d):d=e[11],d}function P(t){const e=t+"CollectionProvider",[s,a]=N(e),[l,r]=s(e,{collectionRef:{current:null},itemMap:new Map}),b=u=>{const{scope:o,children:v}=u,i=f.useRef(null),c=f.useRef(new Map).current;return x.jsx(l,{scope:o,itemMap:c,collectionRef:i,children:v})};b.displayName=e;const m=t+"CollectionSlot",n=f.forwardRef((u,o)=>{const{scope:v,children:i}=u,c=r(m,v),p=A(o,c.collectionRef);return x.jsx(C,{ref:p,children:i})});n.displayName=m;const d=t+"CollectionItemSlot",R="data-radix-collection-item",h=f.forwardRef((u,o)=>{const{scope:v,children:i,...c}=u,p=f.useRef(null),y=A(o,p),g=r(d,v);return f.useEffect(()=>(g.itemMap.set(p,{ref:p,...c}),()=>void g.itemMap.delete(p))),x.jsx(C,{[R]:"",ref:y,children:i})});h.displayName=d;function M(u){const o=r(t+"CollectionConsumer",u);return f.useCallback(()=>{const i=o.collectionRef.current;if(!i)return[];const c=Array.from(i.querySelectorAll(`[${R}]`));return Array.from(o.itemMap.values()).sort((g,I)=>c.indexOf(g.ref.current)-c.indexOf(I.ref.current))},[o.collectionRef,o.itemMap])}return[{Provider:b,Slot:n,ItemSlot:h},M,a]}var j=w.createContext(void 0);function Z(t){const e=w.useContext(j);return t||e||"ltr"}const L=t=>({servers:/\b(sr|s)_[a-zA-Z0-9]{1,5}_[0-9]{1,4}\b/g,ips:/(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g,emails:/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,domains:/(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-_.]+\.[a-zA-Z]{2,})/gi})[t],k=async t=>{try{return await navigator.clipboard.writeText(t),!0}catch(e){return console.error("Failed to copy:",e),!1}},V=t=>t.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");export{D as B,P as a,V as b,k as c,L as g,Z as u};
