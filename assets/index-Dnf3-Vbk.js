import{k as n,m as r,Y as l,n as i,j as e,P as m,X as t,o as c}from"./index-DHEB7O8M.js";import{L as d}from"./vendor-iLaNCrNf.js";import{T as u}from"./ThirdPartyAuth-Bv5z_p9F.js";const x=()=>{const a=n({newPassword:r().required("Please enter your new password"),confirmPassword:r().oneOf([l("newPassword")],"Passwords must match")}),{control:s,handleSubmit:o}=i({resolver:c(a),defaultValues:{newPassword:"password",confirmPassword:"password"}});return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Reset Password"}),e.jsxs("form",{onSubmit:o(()=>{}),className:"mt-10 shrink",children:[e.jsx(t,{label:"New Password",containerClassName:"mb-4",name:"newPassword",labelClassName:"block text-base/normal text-zinc-200 font-semibold",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:s}),e.jsx(t,{label:"Confirm New Password",containerClassName:"mb-4",name:"confirmPassword",labelClassName:"block text-base/normal text-zinc-200 font-semibold",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:s}),e.jsx("div",{className:"mb-6 flex flex-col justify-center gap-4",children:e.jsx("button",{type:"submit",className:"relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700",children:"Reset Password"})})]}),e.jsx(u,{}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Back To ?",e.jsx(d,{to:"/auth/sign-in",className:"ms-1 text-primary",children:e.jsx("b",{children:"Login"})})]})]})};export{x as default};
