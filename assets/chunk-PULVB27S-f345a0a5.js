import{f as r,u as d,o as y,j as i,c as l,a as g}from"./index-8591c970.js";function j(a){const e=Object.assign({},a);for(let t in e)e[t]===void 0&&delete e[t];return e}var N=r(function(e,t){const s=d("Text",e),{className:n,align:c,decoration:o,casing:v,...f}=y(e),m=j({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i.jsx(l.p,{ref:t,className:g("chakra-text",e.className),...m,...f,__css:s})});N.displayName="Text";var x=l("div");x.displayName="Box";var u=r(function(e,t){const{size:s,centerContent:n=!0,...c}=e,o=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.jsx(x,{ref:t,boxSize:s,__css:{...o,flexShrink:0,flexGrow:0},...c})});u.displayName="Square";var T=r(function(e,t){const{size:s,...n}=e;return i.jsx(u,{size:s,ref:t,borderRadius:"9999px",...n})});T.displayName="Circle";export{x as B,N as T,j as c};