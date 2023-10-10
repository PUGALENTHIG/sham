import{t as T,a3 as G,j as e,v,a4 as N,h,a5 as $,a6 as D,a7 as A,a8 as z,a9 as P,w as V,I as L,T as a,d as n,b as O,u as B,c as U,V as M,aa as Q,L as w,B as x}from"./index-d69c6439.js";import{G as F}from"./chunk-JARCRF6W-7866598e.js";import{E as Y}from"./Error-3d3db6ac.js";import{H as q}from"./chunk-7OLJDQMT-6a501237.js";function I(t){return N(t,r=>r==="auto"?"auto":`span ${r}/span ${r}`)}var c=T(function(r,o){const{area:l,colSpan:s,colStart:i,colEnd:d,rowEnd:f,rowSpan:m,rowStart:g,...b}=r,j=G({gridArea:l,gridColumn:I(s),gridRow:I(m),gridColumnStart:i,gridColumnEnd:d,gridRowStart:g,gridRowEnd:f});return e.jsx(v.div,{ref:o,__css:j,...b})});c.displayName="GridItem";function J(){const t=h.useRef(!0);return h.useEffect(()=>{t.current=!1},[]),t.current}function K(t){const r=h.useRef();return h.useEffect(()=>{r.current=t},[t]),r.current}var X=v("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),C=$("skeleton-start-color"),y=$("skeleton-end-color"),Z=D({from:{opacity:0},to:{opacity:1}}),ee=D({from:{borderColor:C.reference,background:C.reference},to:{borderColor:y.reference,background:y.reference}}),p=T((t,r)=>{const o={...t,fadeDuration:typeof t.fadeDuration=="number"?t.fadeDuration:.4,speed:typeof t.speed=="number"?t.speed:.8},l=A("Skeleton",o),s=J(),{startColor:i="",endColor:d="",isLoaded:f,fadeDuration:m,speed:g,className:b,fitContent:j,...k}=z(o),[_,S]=P("colors",[i,d]),H=K(f),R=V("chakra-skeleton",b),E={..._&&{[C.variable]:_},...S&&{[y.variable]:S}};if(f){const W=s||H?"none":`${Z} ${m}s`;return e.jsx(v.div,{ref:r,className:R,__css:{animation:W},...k})}return e.jsx(X,{ref:r,className:R,...k,__css:{width:j?"fit-content":void 0,...l,...E,_dark:{...l._dark,...E},animation:`${g}s linear infinite alternate ${ee}`}})});p.displayName="Skeleton";const u=({source:t})=>e.jsx(c,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",children:e.jsx(L,{className:"imgAnimation",src:t})}),te=({children:t})=>e.jsx(a,{fontWeight:600,letterSpacing:2,fontFamily:"'Anton', sans-serif",fontSize:["45px","55px","65px","70px","75px"],children:t}),re=({children:t})=>e.jsx(a,{mb:["22px"],px:["10px","15px","30px","50px","100px"],fontSize:["18px","18px","20px","22px","25px"],children:t}),oe=({heading:t,description:r,img:o,gender:l,handleSection:s})=>e.jsxs(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",children:[e.jsx(te,{children:t}),e.jsx(re,{children:r}),e.jsxs(F,{onClick:()=>{s()},gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[e.jsx(u,{source:o[0]}),e.jsx(u,{source:o[1]}),e.jsx(u,{source:o[2]}),e.jsx(u,{source:o[3]})]})]});function ne(){return e.jsx(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],children:e.jsxs(F,{mt:3,gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[e.jsx(c,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:e.jsx(p,{height:"100%",width:"100%"})}),e.jsx(c,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:e.jsx(p,{height:"100%",width:"100%"})}),e.jsx(c,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:e.jsx(p,{height:"100%",width:"100%"})}),e.jsx(c,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:e.jsx(p,{height:"100%",width:"100%"})})]})})}function ce(){const t=O(),r=B(),{loading:o,error:l,clothData:s}=U(i=>i.home);return M("(min-width: 420px)"),h.useEffect(()=>{r(Q())},[]),e.jsxs(n,{width:"100%",children:[e.jsxs(n,{width:"89%",m:"auto",display:"flex",flexDirection:"column",alignItems:["left","left","left","center"],justifyContent:"center",mt:6,mb:[4,5,7,8,9],textAlign:["left","left","left","center"],children:[e.jsxs(n,{children:[e.jsx(q,{fontSize:["40px","45px","50px","60px","65px"],fontFamily:"heading",children:"FEEL IT TO GET IT"}),e.jsx(a,{children:"UP TO 70% OFF EVERYTHING!"})]}),e.jsxs(w,{width:["90%","90%","80%","80%","70%"],align:"center",justifyContent:["flex-start","flex-start","flex-start","space-around","space-around"],mt:[3,3,4,4,5],gap:10,children:[e.jsx(x,{width:"35%",bgColor:"black",color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",fontWeight:0,_hover:{bgColor:"black"},onClick:()=>t("/sale"),children:"SHOP NOW"}),e.jsx(x,{width:"35%",bgColor:"black",color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",fontWeight:0,_hover:{bgColor:"black"},onClick:()=>t("/contactus"),children:"CONTACT US!"})]})]}),e.jsx(a,{m:"auto",width:"89%",fontSize:"24px",textAlign:"left",fontWeight:"500",marginBottom:2,children:"Featuerd"}),e.jsxs(n,{display:"flex",flexDirection:["column","column","row","row"],alignItems:"flex-start",justifyContent:"space-between",width:"90%",m:"auto",maxHeight:"max-content",children:[e.jsx(n,{background:"url(https://i1.adis.ws/i/boohooamplience/bmm40185_bright%20pink_xl/bright-pink-oversized-cord-shirt?$product_image_main_tablet$) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:e.jsxs(n,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",children:"Valentine's Day Looks"}),e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",children:"Partner Up and Reach those Goals"}),e.jsxs(w,{mt:5,children:[e.jsx(x,{fontWeight:0,bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",children:"Explore"}),e.jsx(x,{fontWeight:0,bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",children:"Top 10 Gifts"})]})]})}),e.jsx(n,{background:"url(https://media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom$&fmt=webp%201x,%20//media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom_2x$&fmt=webp%202x) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:e.jsxs(n,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",children:"Early Access"}),e.jsx(a,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",children:"Top Selling"}),e.jsx(w,{mt:5,children:e.jsx(x,{fontWeight:0,bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",children:"Get It First"})})]})})]}),e.jsx(n,{children:s==null?void 0:s.map((i,d)=>o?e.jsx(ne,{}):l?e.jsx(Y,{}):e.jsx(oe,{handleSection:()=>t(`/description/${i.id}`),...i},d))})]})}export{ce as default};