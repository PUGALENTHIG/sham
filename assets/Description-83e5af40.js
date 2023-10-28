import{h as a,o as Fe,p as ne,q as Me,t as De,j as e,v as Ie,w as ze,x as Be,y as g,z as R,C as U,E as ge,d as w,I as ae,M as me,G as fe,H as je,J as be,K as ve,L as we,N as Ae,B as $,O as Le,P as Ee,Q as Ge,R as L,F as W,S as _,T as F,U as He,V as ie,W as Ne,c as le,a as qe,b as Oe,u as Ve,k as de,s as P,n as We,D as ce,X as Te,Y as V,Z as ue,f as Ke,e as Ue}from"./index-41b88296.js";import{G as Q}from"./chunk-JARCRF6W-4c0ac644.js";import{M as ye,a as Ce,B as $e,S as _e}from"./chunk-3RSXBRAN-317166dd.js";import{t as Qe}from"./index-8d968404.js";import{L as Je}from"./Loading-877cd304.js";import{E as Xe}from"./Error-e92c2742.js";import{A as pe}from"./chunk-V7PAE35Z-0e4737a7.js";import{M as Ye}from"./index.esm-75e0a228.js";import{I as Ze}from"./chunk-6QYXN73V-674d8cfb.js";import{F as xe}from"./chunk-7COXQURZ-302e7018.js";import{T as es}from"./chunk-4IH3O7BJ-56b054d4.js";import"./chunk-5MKCW436-b59c9923.js";function ss(o){return o&&ne(o)&&ne(o.target)}function ke(o={}){const{onChange:t,value:l,defaultValue:s,name:r,isDisabled:d,isFocusable:h,isNative:y,...M}=o,[b,C]=a.useState(s||""),v=typeof l<"u",m=v?l:b,k=a.useRef(null),p=a.useCallback(()=>{const n=k.current;if(!n)return;let u="input:not(:disabled):checked";const S=n.querySelector(u);if(S){S.focus();return}u="input:not(:disabled)";const f=n.querySelector(u);f==null||f.focus()},[]),x=`radio-${a.useId()}`,E=r||x,z=a.useCallback(n=>{const u=ss(n)?n.target.value:n;v||C(u),t==null||t(String(u))},[t,v]),H=a.useCallback((n={},u=null)=>({...n,ref:Fe(u,k),role:"radiogroup"}),[]),I=a.useCallback((n={},u=null)=>({...n,ref:u,name:E,[y?"checked":"isChecked"]:m!=null?n.value===m:void 0,onChange(f){z(f)},"data-radiogroup":!0}),[y,E,z,m]);return{getRootProps:H,getRadioProps:I,name:E,ref:k,focus:p,setValue:C,value:m,onChange:z,isDisabled:d,isFocusable:h,htmlProps:M}}var[os,ts]=Me({name:"RadioGroupContext",strict:!1}),rs=De((o,t)=>{const{colorScheme:l,size:s,variant:r,children:d,className:h,isDisabled:y,isFocusable:M,...b}=o,{value:C,onChange:v,getRootProps:m,name:k,htmlProps:p}=ke(b),D=a.useMemo(()=>({name:k,size:s,onChange:v,colorScheme:l,value:C,variant:r,isDisabled:y,isFocusable:M}),[k,s,v,l,C,r,y,M]);return e.jsx(os,{value:D,children:e.jsx(Ie.div,{...m(p,t),className:ze("chakra-radio-group",h),children:d})})});rs.displayName="RadioGroup";var ns={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function as(o={}){const{defaultChecked:t,isChecked:l,isFocusable:s,isDisabled:r,isReadOnly:d,isRequired:h,onChange:y,isInvalid:M,name:b,value:C,id:v,"data-radiogroup":m,"aria-describedby":k,...p}=o,D=`radio-${a.useId()}`,x=Be(),z=!!ts()||!!m;let I=!!x&&!z?x.id:D;I=v??I;const n=r??(x==null?void 0:x.isDisabled),u=d??(x==null?void 0:x.isReadOnly),S=h??(x==null?void 0:x.isRequired),f=M??(x==null?void 0:x.isInvalid),[N,q]=a.useState(!1),[c,j]=a.useState(!1),[O,X]=a.useState(!1),[T,G]=a.useState(!1),[Se,Re]=a.useState(!!t),K=typeof l<"u",B=K?l:Se;a.useEffect(()=>Qe(q),[]);const Y=a.useCallback(i=>{if(u||n){i.preventDefault();return}K||Re(i.target.checked),y==null||y(i)},[K,n,u,y]),Z=a.useCallback(i=>{i.key===" "&&G(!0)},[G]),ee=a.useCallback(i=>{i.key===" "&&G(!1)},[G]),se=a.useCallback((i={},A=null)=>({...i,ref:A,"data-active":g(T),"data-hover":g(O),"data-disabled":g(n),"data-invalid":g(f),"data-checked":g(B),"data-focus":g(c),"data-focus-visible":g(c&&N),"data-readonly":g(u),"aria-hidden":!0,onMouseDown:R(i.onMouseDown,()=>G(!0)),onMouseUp:R(i.onMouseUp,()=>G(!1)),onMouseEnter:R(i.onMouseEnter,()=>X(!0)),onMouseLeave:R(i.onMouseLeave,()=>X(!1))}),[T,O,n,f,B,c,u,N]),{onFocus:oe,onBlur:te}=x??{},Pe=a.useCallback((i={},A=null)=>{const re=n&&!s;return{...i,id:I,ref:A,type:"radio",name:b,value:C,onChange:R(i.onChange,Y),onBlur:R(te,i.onBlur,()=>j(!1)),onFocus:R(oe,i.onFocus,()=>j(!0)),onKeyDown:R(i.onKeyDown,Z),onKeyUp:R(i.onKeyUp,ee),checked:B,disabled:re,readOnly:u,required:S,"aria-invalid":U(f),"aria-disabled":U(re),"aria-required":U(S),"data-readonly":g(u),"aria-describedby":k,style:ns}},[n,s,I,b,C,Y,te,oe,Z,ee,B,u,S,f,k]);return{state:{isInvalid:f,isFocused:c,isChecked:B,isActive:T,isHovered:O,isDisabled:n,isReadOnly:u,isRequired:S},getCheckboxProps:se,getRadioProps:se,getInputProps:Pe,getLabelProps:(i={},A=null)=>({...i,ref:A,onMouseDown:R(i.onMouseDown,is),"data-disabled":g(n),"data-checked":g(B),"data-invalid":g(f)}),getRootProps:(i,A=null)=>({...i,ref:A,"data-disabled":g(n),"data-checked":g(B),"data-invalid":g(f)}),htmlProps:p}}function is(o){o.preventDefault(),o.stopPropagation()}const ls=({img:o})=>{const{isOpen:t,onOpen:l,onClose:s}=ge();return e.jsxs(e.Fragment,{children:[e.jsx(Q,{templateColumns:"repeat(2, 1fr)",maxH:"xxl",gap:"10px",children:o==null?void 0:o.map((r,d)=>e.jsx(w,{children:e.jsx(ae,{src:r,onClick:l,cursor:"pointer"})},d))}),e.jsxs(me,{isOpen:t,onClose:s,size:"full",children:[e.jsx(fe,{}),e.jsxs(ye,{children:[e.jsx(je,{}),e.jsx(be,{}),e.jsx(ve,{children:e.jsx(Q,{templateColumns:["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"],gap:"15px",children:o==null?void 0:o.map((r,d)=>e.jsx(ae,{w:"100%",src:r},d))})}),e.jsx(Ce,{})]})]})]})},ds=o=>{const{getInputProps:t,getCheckboxProps:l}=as(o),s=t(),r=l(),{colorMode:d}=Ae();return e.jsxs(w,{as:"label",children:[e.jsx("input",{...s}),e.jsx(w,{onClick:o.onClick,...r,cursor:"pointer",borderWidth:"1px",borderRadius:"md",boxShadow:"md",_checked:{border:`2px solid ${d==="light"?"black":"white"}`},px:5,py:3,children:o.children})]})},cs=({size:o,setMySize:t})=>{const{getRootProps:l,getRadioProps:s}=ke({name:"SelectSize"}),r=l();return e.jsx(we,{...r,children:o==null?void 0:o.map(d=>{const h=s({value:d});return e.jsx(ds,{onClick:()=>{t(d)},...h,children:d},d)})})},he=({click:o,name:t,bgColor:l,color:s,hoverBg:r,hoverBorder:d,borderColor:h})=>e.jsx(e.Fragment,{children:e.jsx($,{onClick:o,h:"62px",bg:l,color:s,border:`1px solid ${h}`,borderRadius:"50px",w:"100%",fontSize:"17px",my:"10px",_hover:{bg:r,borderColor:d},children:t})});function J({rating:o,numReviews:t}){return e.jsxs(w,{display:"flex",alignItems:"center",children:[Array(5).fill("").map((l,s)=>{const r=t;return r-s>=1?e.jsx(Le,{style:{marginLeft:"1"},color:s<t/10?"teal.500":"gray.300"},s):r-s===.5?e.jsx(Ee,{style:{marginLeft:"1"}},s):e.jsx(Ge,{style:{marginLeft:"1"}},s)}),e.jsxs(w,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[t," review",t>1&&"s"]})]})}function us(o){const{name:t,reviewdescription:l,numReviews:s,...r}=o,d=L("secondaryGray.900","white"),h=L("white","navy.700");return e.jsx(w,{background:h,p:"14px",w:"full",children:e.jsxs(W,{align:"flex-start",direction:"row",children:[Math.random()*10%2>1?e.jsx(pe,{name:t,h:"60px",w:"60px",borderRadius:"8px",me:"20px"}):e.jsx(pe,{h:"60px",w:"60px",borderRadius:"8px",me:"20px"}),e.jsxs(W,{align:"flex-start",direction:"column",gap:1,w:"full",children:[e.jsxs(_,{w:"full",direction:"column",gap:0,children:[e.jsx(w,{mt:{base:"10px",md:"0"},children:e.jsx(F,{color:d,fontWeight:"500",fontSize:"md",mb:"4px",children:t})}),e.jsx(J,{numReviews:s})]}),e.jsx(w,{borderWidth:"1px",rounded:"lg",shadow:"lg",p:"2",pt:"2",w:"full",maxW:"sm",ml:"-10px",maxH:"150px",children:e.jsx(F,{color:d,fontWeight:"500",fontSize:"md",children:He(l)})})]})]})})}function ps({data:o}){var l;const t=L("white","gray.800");return L("gray.800","white"),e.jsx(W,{w:"full",alignItems:"center",justifyContent:"center",children:e.jsx(w,{bg:t,w:"full",borderWidth:"1px",rounded:"lg",shadow:"lg",p:"6",children:e.jsx(W,{direction:"column",justifyContent:"space-between",alignContent:"center",maxH:"360px",overflow:"auto",sx:{"&::-webkit-scrollbar":{display:"none"}},children:(l=o==null?void 0:o.ratings)==null?void 0:l.map(s=>{var r;return e.jsx(us,{name:((r=s==null?void 0:s.userName)==null?void 0:r.split(" ").length)>1?s.userName.split(" null")[0].charAt(0).toUpperCase()+s.userName.split(" null")[0].slice(1):"Venketesh Rushi",reviewdescription:s.reviewdes,numReviews:s.rating},s.reviewdes)})})})})}function Fs(){ie("(min-width: 995px)");const[o]=ie("(min-width: 1025px)"),[t,l]=a.useState(!1),[s,r]=a.useState({}),[d,h]=a.useState(!1),[y,M]=a.useState(!1);let[b,C]=a.useState({rating:5,reviewdes:""});const v=Ne(),m=le(c=>c.auth.token),k=le(c=>c.auth.user),p=qe(),D=Oe(),x=Ve();a.useEffect(()=>{q()},[v]);const E=L("14px 17px 40px 4px rgba(112, 144, 176, 0.18)","14px 17px 40px 4px rgba(112, 144, 176, 0.06)"),z=L("gray.800","white"),{isOpen:H,onOpen:I,onClose:n}=ge();let u=c=>{C({...b,[c.target.name]:c.target.value})},S=async()=>{if(m.length>0){if(b.reviewdes===""){P(p,"Please add description.","error");return}try{let c=await de.post("/product/addreview",{id:+v.id,rating:b.rating,reviewdes:b.reviewdes,userid:k.id});C({rating:5,reviewdes:""}),n(),P(p,"Review added successfuly.","success"),q()}catch(c){console.log(c)}}else P(p,"Please Login First","error")};const f=c=>{if(t===!1)P(p,"Please select a Size","error");else if(m.length>0){let j=["add",{...c,size:t,quantity:1},m,p];x(Ke(j)),D("/cart")}else P(p,"Please Login First","error")},N=async()=>{if(!m)P(p,"Please login first","error"),D("/login");else try{let j=await x(Ue([s,m,p])).unwrap();P(p,j.message?j.message:"Item added to the favourites","success")}catch(c){c.response.data.message==="Already present in the Favourite"?P(p,c.response.data.message,"info"):P(p,"Something went wrong!","error")}},q=async()=>{var c;h(!0);try{let j=await de.get(`/product/getsingleproduct/${v.id}`);console.log("product data",j.data.ratings);let O=(c=j==null?void 0:j.data)==null?void 0:c.ratings;r(j.data),h(!1)}catch{M(!0),P(p,"Product Not Found","error"),D(-1,{replace:!0})}};return d?e.jsx(Je,{}):y?e.jsx(Xe,{}):e.jsxs(Q,{p:"10px",gap:["40px","40px","4%","4%","4%"],templateColumns:["100%","100%","55% 41%","62% 34%","62% 34%"],w:["100%","100%","100%","100%","90%"],m:["40px auto 100px","40px auto 100px","40px auto 60px","40px auto 60px","40px auto 60px"],children:[e.jsx(ls,{img:s==null?void 0:s.img}),e.jsxs(w,{px:["20px","40px"],children:[e.jsx(F,{fontSize:"29px",children:s==null?void 0:s.title}),e.jsx(F,{children:s==null?void 0:s.description}),e.jsxs(F,{fontSize:"22px",mt:"20px",children:["₹ ",We(+(s==null?void 0:s.price))]}),e.jsx(F,{color:"gray",children:"incl. of taxes and duties"}),e.jsx(F,{fontSize:"18px",mt:"30px",mb:"10px",children:"Select Size"}),e.jsx(w,{mb:"30px",children:e.jsx(cs,{size:s==null?void 0:s.size,setMySize:l})}),e.jsx(he,{click:()=>f(s),name:"Add to Bag",bgColor:"black",color:"white",hoverBg:"#1e1e1e",borderColor:"transparent"}),e.jsx(he,{click:N,name:"Favourite",bgColor:"white",color:"black",hoverBorder:"black",borderColor:"#cecdce"}),e.jsx(ce,{my:"30px"}),e.jsx(F,{fontSize:"18px",mb:"10px",textDecoration:"underline",children:"Product Deatils"}),e.jsxs(Te,{fontSize:"18px",children:[e.jsxs(V,{children:["Gender: ",s==null?void 0:s.gender]}),e.jsxs(V,{children:["Category: ",s==null?void 0:s.category]}),e.jsxs(V,{children:["Colour: ",s==null?void 0:s.color]}),e.jsx(V,{children:e.jsxs(we,{direction:["column","row"],spacing:"5px",children:[e.jsx(F,{children:"Rating:"}),Object.keys(s).length>0?e.jsx(J,{numReviews:s.ratings.length}):e.jsx(J,{numReviews:0})]})})]}),o&&e.jsxs(e.Fragment,{children:[e.jsx(ce,{my:"18px"}),e.jsxs(w,{display:"flex",alignItems:"baseline",justifyContent:"space-between",mb:[5,5,5,3,3],children:[e.jsx($e,{rounded:"full",px:"2",fontSize:"0.8em",color:"#303030",children:e.jsx(F,{fontSize:"16px",color:z,children:"Customer Reviews"})}),e.jsx(Ze,{icon:e.jsx(Ye,{}),variant:"outline",onClick:I}),e.jsxs(me,{isOpen:H,onClose:n,isCentered:!0,children:[e.jsx(fe,{}),e.jsxs(ye,{children:[e.jsx(je,{children:"Add Review"}),e.jsx(be,{}),e.jsx(ve,{children:e.jsx(w,{rounded:"lg",bg:L("white","gray.700"),p:8,shadow:E,children:e.jsxs(_,{spacing:4,children:[e.jsxs(ue,{id:"ratingnum",children:[e.jsxs(xe,{children:["Please share your thoughts about this ",s.title," ","Product. How would you rate your experience using it?"]}),e.jsxs(_e,{name:"ratingnum",value:b.rating,onChange:u,placeholder:"Select option",children:[e.jsx("option",{defaultValue:!0,value:5,children:"5"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:1,children:"1"})]})]}),e.jsxs(ue,{id:"reviewdes",children:[e.jsx(xe,{children:"Feel free to share your thoughts about this product right here. How has your experience been so far?"}),e.jsx(es,{maxLength:"100",value:b.reviewdes,onChange:u,placeholder:"Enter your review description here...",size:"sm",name:"reviewdes"})]}),e.jsx(_,{spacing:10})]})})}),e.jsxs(Ce,{children:[e.jsx($,{color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},pt:5,pb:5,mr:3,textAlign:"center",onClick:S,children:"ADD"}),e.jsx($,{colorScheme:"blue",mr:3,onClick:n,children:"Close"})]})]})]})]}),e.jsx(ps,{data:s})]})]})]})}export{Fs as default};