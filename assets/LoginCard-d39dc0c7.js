import{j as e,d as m,u as B,U as D,$ as C,L as b,s as n,a0 as H,a1 as R}from"./index-8a3c36e6.js";import{G}from"./iconBase-d9cf2728.js";import{C as w}from"./chunk-FAWTVNS3-7a4711d7.js";import{B as p}from"./chunk-UVUR7MCU-307f6797.js";import{T as a,B as i}from"./chunk-PULVB27S-95d64159.js";import{u as P}from"./useDispatch-3b87a677.js";import{u as U}from"./chunk-BFUVSDI7-14b113a4.js";import{F as M}from"./chunk-KRPLQIP4-25210906.js";import{S as s}from"./chunk-ZHMYA64R-b5df3a53.js";import{H as y}from"./chunk-7OLJDQMT-4814291c.js";import{I as u}from"./chunk-6CVSDS6C-d80cd540.js";import{F as S}from"./chunk-R42ZB7PB-e6334cab.js";import{F as v}from"./chunk-7COXQURZ-e4bc04d9.js";import{C as V}from"./chunk-P675YKMR-dd10c5ca.js";import"./index-e50b25b7.js";import"./chunk-XRMX4GAI-af2b5461.js";import"./chunk-7D6N5TE5-7cfd80d5.js";import"./index-8d968404.js";function O(o){return G({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(o)}function W({name:o,handleGoogleLogin:l}){return e.jsx(w,{children:e.jsx(p,{w:"full",maxW:"md",variant:"outline",leftIcon:e.jsx(O,{}),onClick:l,children:e.jsx(w,{children:e.jsxs(a,{children:[o," with Google"]})})})})}function ie(){const[o,l]=m.useState({email:"",password:""}),[F,g]=m.useState(!1),[c,L]=m.useState(""),d=B(),h=P(),t=U(),x=D(),j=r=>{const{name:k,value:I}=r.target;l({...o,[k]:I})},T=async()=>{if(o.email===""||o.password==="")return n(t,"Please Fill All The Fields","error");try{const r=await h(H(o)).unwrap();n(t,"Login successfully","success"),x.state&&x.state.from?d(x.state.from,{replace:!0}):d("/")}catch(r){n(t,r.message?r.message:"Invalid Credentials","error"),console.error(r)}};let f=C("white","gray.700");const E=async()=>{c===""&&n(t,"Please Enter Your Email","error");try{const r=await h(R(c)).unwrap();n(t,"Reset OTP Sent To Your Email","success"),d("/resetpassword")}catch(r){n(t,r.message?r.message:"User Not Found","error"),console.error(r)}},z=()=>{n(t,"This Functionality Is Under Development","success")};return e.jsxs(e.Fragment,{children:[e.jsx(i,{marginTop:["-5px","-10px","-20px","-30px","-40px"]}),e.jsx(M,{minH:"75vh",align:"center",justify:"center",bg:C("gray.50","gray.800"),width:"100%",children:F?e.jsxs(s,{spacing:5,mx:"auto",maxW:"2xl",py:10,px:10,children:[e.jsxs(s,{align:"center",spacing:2,children:[e.jsx(y,{fontSize:"4xl",children:"Enter Your Email"}),e.jsx(a,{color:"gray.600",fontSize:"lg",children:"This OTP will be sent to your email."})]}),e.jsx(i,{rounded:"lg",bg:f,boxShadow:"lg",p:8,children:e.jsxs(s,{spacing:4,children:[e.jsx(a,{color:"gray.600",fontSize:"md",fontWeight:"bold",children:"Email Address"}),e.jsx(u,{type:"email",value:c,onChange:r=>L(r.target.value),variant:"filled",placeholder:"Enter your email address",required:!0}),e.jsxs(s,{spacing:3,children:[e.jsx(p,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:E,children:"Submit"}),e.jsxs(i,{justifyContent:"center",alignItems:"center",display:"flex",children:["Return To"," ",e.jsx(a,{ml:1,textDecorationLine:"underline",color:"blue.400",cursor:"pointer",onClick:()=>g(!1),children:"Login"})]})]})]})})]}):e.jsxs(s,{spacing:8,mx:"auto",maxW:"2xl",py:10,px:10,children:[e.jsxs(s,{align:"center",children:[e.jsx(y,{fontSize:"3xl",children:"Login to your account"}),e.jsxs(a,{fontSize:"lg",color:"gray.600",children:["to buy all of our cool ",e.jsx(b,{color:"blue.400",children:"Products"})," ","✌️"]})]}),e.jsx(i,{rounded:"lg",bg:f,boxShadow:"lg",p:9,children:e.jsxs(s,{spacing:3,children:[e.jsxs(S,{id:"email",isRequired:!0,children:[e.jsx(v,{children:"Email address"}),e.jsx(u,{name:"email",type:"email",onChange:j})]}),e.jsxs(S,{id:"password",isRequired:!0,children:[e.jsx(v,{children:"Password"}),e.jsx(u,{name:"password",onChange:j,type:"password"})]}),e.jsxs(s,{spacing:5,children:[e.jsxs(s,{direction:{base:"column",sm:"row"},align:"start",justify:"space-between",children:[e.jsx(V,{children:"Remember me"}),e.jsx(a,{cursor:"pointer",color:"blue.400",onClick:()=>g(!0),children:"Forgot password?"})]}),e.jsx(p,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:T,mb:-2,children:"Login"}),e.jsx(W,{name:"Login",handleGoogleLogin:z})]}),e.jsx(s,{children:e.jsxs(i,{justifyContent:"center",alignItems:"center",display:"flex",children:["Don't have a account?",e.jsx(b,{to:"/signup",children:e.jsx(a,{ml:1,textDecorationLine:"underline",color:"blue.400",children:"Sign Up"})})]})})]})})]})}),e.jsx(i,{marginTop:["-10px","-20px","-30px","-40px","-40px"]})]})}export{ie as default};
