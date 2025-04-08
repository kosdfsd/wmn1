import{c as ze,u as Me,a as Le,r as Fe,j as t,e as Oe,f as Ue,t as Ae,g as Be,h as ye,B as u,i as Ie,k as Ke,l as Xe,m as He,n as qe}from"./index-Bj-Dy4Xv.js";import{a as Ge,b as Je,c as Qe,L as f,C as Ve,d as We,e as Ye}from"./label-DjS9LDLW.js";import{I as Pe}from"./input-CPa8Ul-7.js";import{T as ke,C as Ze}from"./textarea-CFKz1ZDR.js";const rt=()=>{const e=ze.c(145),s=Me(),{inputField:d,sendTypes:r,testAfter:a,isSeeds:h,dataSeeds:i,returnPath:n,fromPath:c,deployId:o,offer:m}=Le(et),[ee,we]=Fe.useState(!1),[te,Ee]=Fe.useState("");let se;e[0]!==i||e[1]!==o||e[2]!==c||e[3]!==d||e[4]!==h||e[5]!==m||e[6]!==n||e[7]!==r||e[8]!==a?(se=()=>{const l="*".repeat(40),x=`
${l}
${d||"No input provided"}
${l}
Send Type : ${r.join(", ")||"Not specified"}
Test After : ${a}% INBOX
Data/Seeds : ${i}% ${h?"SEEDS":"DATA"}${n?`
Return Path: `+n:""}${c?`
From Path: `+c:""}${o?`
Deploy ID: `+o:""}${m?`
Offer: `+m:""}
${l}
`.trim();Ee(x)},e[0]=i,e[1]=o,e[2]=c,e[3]=d,e[4]=h,e[5]=m,e[6]=n,e[7]=r,e[8]=a,e[9]=se):se=e[9];let le;e[10]!==i||e[11]!==o||e[12]!==s||e[13]!==c||e[14]!==d||e[15]!==h||e[16]!==m||e[17]!==n||e[18]!==r||e[19]!==a?(le=[d,r,a,h,i,n,c,o,m,s],e[10]=i,e[11]=o,e[12]=s,e[13]=c,e[14]=d,e[15]=h,e[16]=m,e[17]=n,e[18]=r,e[19]=a,e[20]=le):le=e[20],Fe.useEffect(se,le);let ae;e[21]===Symbol.for("react.memo_cache_sentinel")?(ae=l=>{navigator.clipboard.writeText(l).then(()=>{we(!0),Ae.success("Copied to clipboard",{description:"The content has been copied to your clipboard"}),setTimeout(()=>we(!1),2e3)}).catch(tt)},e[21]=ae):ae=e[21];const Re=ae;let ie;e[22]===Symbol.for("react.memo_cache_sentinel")?(ie=t.jsxs(Ge,{children:[t.jsx(Je,{className:"text-2xl",children:"Details"}),t.jsx(Qe,{children:"Display formatted input details"})]}),e[22]=ie):ie=e[22];let re;e[23]===Symbol.for("react.memo_cache_sentinel")?(re=t.jsx(f,{className:"mb-2 block text-sm font-medium",htmlFor:"inputField",children:"INPUT"}),e[23]=re):re=e[23];let p;e[24]!==s?(p=l=>s(Be(l.target.value)),e[24]=s,e[25]=p):p=e[25];let j;e[26]!==d||e[27]!==p?(j=t.jsxs("div",{children:[re,t.jsx(ke,{id:"inputField",value:d,onChange:p,className:"h-24 w-full",placeholder:"Enter input data here..."})]}),e[26]=d,e[27]=p,e[28]=j):j=e[28];let ne;e[29]===Symbol.for("react.memo_cache_sentinel")?(ne=t.jsx(f,{className:"mb-2 block text-sm font-medium",children:"Send Type"}),e[29]=ne):ne=e[29];const ve=r.includes("DKIM")?"default":"outline";let b;e[30]!==s?(b=()=>s(ye("DKIM")),e[30]=s,e[31]=b):b=e[31];let N;e[32]!==ve||e[33]!==b?(N=t.jsx(u,{variant:ve,size:"sm",onClick:b,className:"rounded-md",children:"DKIM"}),e[32]=ve,e[33]=b,e[34]=N):N=e[34];const Se=r.includes("SPF")?"default":"outline";let y;e[35]!==s?(y=()=>s(ye("SPF")),e[35]=s,e[36]=y):y=e[36];let v;e[37]!==Se||e[38]!==y?(v=t.jsx(u,{variant:Se,size:"sm",onClick:y,className:"rounded-md",children:"SPF"}),e[37]=Se,e[38]=y,e[39]=v):v=e[39];const Ce=r.includes("DMARC")?"default":"outline";let S;e[40]!==s?(S=()=>s(ye("DMARC")),e[40]=s,e[41]=S):S=e[41];let C;e[42]!==Ce||e[43]!==S?(C=t.jsx(u,{variant:Ce,size:"sm",onClick:S,className:"rounded-md",children:"DMARC"}),e[42]=Ce,e[43]=S,e[44]=C):C=e[44];const _e=r.includes("NEUTRAL")?"default":"outline";let _;e[45]!==s?(_=()=>s(ye("NEUTRAL")),e[45]=s,e[46]=_):_=e[46];let g;e[47]!==_e||e[48]!==_?(g=t.jsx(u,{variant:_e,size:"sm",onClick:_,className:"rounded-md",children:"NEUTRAL"}),e[47]=_e,e[48]=_,e[49]=g):g=e[49];let D;e[50]!==N||e[51]!==v||e[52]!==C||e[53]!==g?(D=t.jsxs("div",{children:[ne,t.jsxs("div",{className:"flex flex-wrap gap-2",children:[N,v,C,g]})]}),e[50]=N,e[51]=v,e[52]=C,e[53]=g,e[54]=D):D=e[54];let ce;e[55]===Symbol.for("react.memo_cache_sentinel")?(ce=t.jsx(f,{className:"mb-2 text-sm font-medium",children:"Test After"}),e[55]=ce):ce=e[55];let T;e[56]!==a?(T=t.jsxs("div",{className:"flex items-center justify-between",children:[ce,t.jsxs("span",{className:"text-sm font-medium",children:[a,"% INBOX"]})]}),e[56]=a,e[57]=T):T=e[57];let oe;e[58]===Symbol.for("react.memo_cache_sentinel")?(oe=[0,1,2,3,4,5,6,7,8,9,10],e[58]=oe):oe=e[58];let $;e[59]!==s||e[60]!==a?($=t.jsx("div",{className:"flex",children:oe.map(l=>{const x=l*10;return t.jsx("div",{className:`h-2 flex-1 ${l>0?"ml-0.5":""} cursor-pointer rounded-sm ${x<=a?"bg-primary":"bg-muted"}`,onClick:()=>s(Oe(x))},l)})}),e[59]=s,e[60]=a,e[61]=$):$=e[61];let me;e[62]===Symbol.for("react.memo_cache_sentinel")?(me=t.jsxs("div",{className:"text-muted-foreground flex justify-between text-xs",children:[t.jsx("span",{children:"0%"}),t.jsx("span",{children:"50%"}),t.jsx("span",{children:"100%"})]}),e[62]=me):me=e[62];let F;e[63]!==$?(F=t.jsxs("div",{className:"space-y-2",children:[$,me]}),e[63]=$,e[64]=F):F=e[64];let k;e[65]!==T||e[66]!==F?(k=t.jsxs("div",{children:[T,F]}),e[65]=T,e[66]=F,e[67]=k):k=e[67];let de;e[68]===Symbol.for("react.memo_cache_sentinel")?(de=t.jsx(f,{className:"mb-2 text-sm font-medium",children:"Data/Seeds"}),e[68]=de):de=e[68];const ge=`px-3 py-1 ${h?"bg-primary text-primary-foreground":""}`;let w;e[69]!==s?(w=()=>s(Ie(!0)),e[69]=s,e[70]=w):w=e[70];let I;e[71]!==ge||e[72]!==w?(I=t.jsx(u,{variant:"outline",size:"sm",className:ge,onClick:w,children:"SEEDS"}),e[71]=ge,e[72]=w,e[73]=I):I=e[73];const De=`px-3 py-1 ${h?"":"bg-primary text-primary-foreground"}`;let P;e[74]!==s?(P=()=>s(Ie(!1)),e[74]=s,e[75]=P):P=e[75];let A;e[76]!==De||e[77]!==P?(A=t.jsx(u,{variant:"outline",size:"sm",className:De,onClick:P,children:"DATA"}),e[76]=De,e[77]=P,e[78]=A):A=e[78];let E;e[79]!==i?(E=t.jsxs("span",{className:"text-sm font-medium",children:[i,"%"]}),e[79]=i,e[80]=E):E=e[80];let R;e[81]!==I||e[82]!==A||e[83]!==E?(R=t.jsxs("div",{className:"flex items-center justify-between",children:[de,t.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[I,A,E]})]}),e[81]=I,e[82]=A,e[83]=E,e[84]=R):R=e[84];let fe;e[85]===Symbol.for("react.memo_cache_sentinel")?(fe=[0,1,2,3,4,5,6,7,8,9,10],e[85]=fe):fe=e[85];let z;e[86]!==i||e[87]!==s?(z=t.jsx("div",{className:"flex",children:fe.map(l=>{const x=l*10;return t.jsx("div",{className:`h-2 flex-1 ${l>0?"ml-0.5":""} cursor-pointer rounded-sm ${x<=i?"bg-primary":"bg-muted"}`,onClick:()=>s(Ue(x))},l)})}),e[86]=i,e[87]=s,e[88]=z):z=e[88];let he;e[89]===Symbol.for("react.memo_cache_sentinel")?(he=t.jsxs("div",{className:"text-muted-foreground flex justify-between text-xs",children:[t.jsx("span",{children:"0%"}),t.jsx("span",{children:"50%"}),t.jsx("span",{children:"100%"})]}),e[89]=he):he=e[89];let M;e[90]!==z?(M=t.jsxs("div",{className:"space-y-2",children:[z,he]}),e[90]=z,e[91]=M):M=e[91];let L;e[92]!==R||e[93]!==M?(L=t.jsxs("div",{children:[R,M]}),e[92]=R,e[93]=M,e[94]=L):L=e[94];let xe;e[95]===Symbol.for("react.memo_cache_sentinel")?(xe=t.jsx(f,{className:"mb-2 block text-sm font-medium",htmlFor:"returnPath",children:"Return Path"}),e[95]=xe):xe=e[95];let O;e[96]!==s?(O=l=>s(Ke(l.target.value)),e[96]=s,e[97]=O):O=e[97];let U;e[98]!==n||e[99]!==O?(U=t.jsxs("div",{children:[xe,t.jsx(ke,{id:"returnPath",value:n,onChange:O,className:"w-full"})]}),e[98]=n,e[99]=O,e[100]=U):U=e[100];let ue;e[101]===Symbol.for("react.memo_cache_sentinel")?(ue=t.jsx(f,{className:"mb-2 block text-sm font-medium",htmlFor:"fromPath",children:"From Path"}),e[101]=ue):ue=e[101];let B;e[102]!==s?(B=l=>s(Xe(l.target.value)),e[102]=s,e[103]=B):B=e[103];let K;e[104]!==c||e[105]!==B?(K=t.jsxs("div",{children:[ue,t.jsx(ke,{id:"fromPath",value:c,onChange:B,className:"w-full"})]}),e[104]=c,e[105]=B,e[106]=K):K=e[106];let pe;e[107]===Symbol.for("react.memo_cache_sentinel")?(pe=t.jsx(f,{className:"mb-2 block text-sm font-medium",htmlFor:"deployId",children:"Deploy ID"}),e[107]=pe):pe=e[107];let X;e[108]!==s?(X=l=>s(He(l.target.value)),e[108]=s,e[109]=X):X=e[109];let H;e[110]!==o||e[111]!==X?(H=t.jsxs("div",{children:[pe,t.jsx(Pe,{id:"deployId",value:o,onChange:X,className:"w-full"})]}),e[110]=o,e[111]=X,e[112]=H):H=e[112];let je;e[113]===Symbol.for("react.memo_cache_sentinel")?(je=t.jsx(f,{className:"mb-2 block text-sm font-medium",htmlFor:"offer",children:"Offer"}),e[113]=je):je=e[113];let q;e[114]!==s?(q=l=>s(qe(l.target.value)),e[114]=s,e[115]=q):q=e[115];let G;e[116]!==m||e[117]!==q?(G=t.jsxs("div",{children:[je,t.jsx(Pe,{id:"offer",value:m,onChange:q,className:"w-full"})]}),e[116]=m,e[117]=q,e[118]=G):G=e[118];let J;e[119]!==U||e[120]!==K||e[121]!==H||e[122]!==G?(J=t.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[U,K,H,G]}),e[119]=U,e[120]=K,e[121]=H,e[122]=G,e[123]=J):J=e[123];let be;e[124]===Symbol.for("react.memo_cache_sentinel")?(be=t.jsx(f,{className:"text-sm font-medium",children:"Details Summary"}),e[124]=be):be=e[124];let Q;e[125]!==te?(Q=()=>Re(te),e[125]=te,e[126]=Q):Q=e[126];let V;e[127]!==ee?(V=ee?t.jsx(Ve,{className:"mr-1 h-4 w-4"}):t.jsx(Ze,{className:"mr-1 h-4 w-4"}),e[127]=ee,e[128]=V):V=e[128];const Te=ee?"Copied":"Copy Results";let W;e[129]!==Q||e[130]!==V||e[131]!==Te?(W=t.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[be,t.jsxs(u,{variant:"outline",size:"sm",onClick:Q,children:[V,Te]})]}),e[129]=Q,e[130]=V,e[131]=Te,e[132]=W):W=e[132];const $e=te||"Fill in the fields above to see the formatted details";let Y;e[133]!==$e?(Y=t.jsx("div",{className:"bg-muted rounded-md p-3",children:t.jsx("div",{className:"font-mono text-sm whitespace-pre-wrap",children:$e})}),e[133]=$e,e[134]=Y):Y=e[134];let Z;e[135]!==W||e[136]!==Y?(Z=t.jsxs("div",{className:"mt-4 border-t pt-4",children:[W,Y]}),e[135]=W,e[136]=Y,e[137]=Z):Z=e[137];let Ne;return e[138]!==D||e[139]!==k||e[140]!==L||e[141]!==J||e[142]!==j||e[143]!==Z?(Ne=t.jsxs(We,{className:"border-2",children:[ie,t.jsxs(Ye,{className:"space-y-4",children:[j,D,k,L,J,Z]})]}),e[138]=D,e[139]=k,e[140]=L,e[141]=J,e[142]=j,e[143]=Z,e[144]=Ne):Ne=e[144],Ne};function et(e){return e.details}function tt(e){console.error("Failed to copy:",e),Ae.error("Copy failed",{description:"Unable to copy to clipboard"})}export{rt as default};
