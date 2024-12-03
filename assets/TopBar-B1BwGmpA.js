import{L as c,a as d,b as a,j as e,c as o,d as m,e as u,u as x,f,g as h,l as p}from"./index-7EdNtETD.js";import{d as b,L as i,r as j}from"./vendor-iLaNCrNf.js";const g=[{name:"Dashboard",link:"/admin/dashboard",icon:c},{name:"Client",link:"/admin/clients",icon:d},{name:"Commandes en attentes",link:"/admin/commandes-en-attentes",icon:a},{name:"Commandes rejetées",link:"/admin/commandes-rejetees",icon:a},{name:"Commandes Approuvées",link:"/admin/commandes-approuvees",icon:a},{name:"Commandes à Credit",link:"/admin/commandes-a-credit",icon:a}],w=()=>{const{pathname:t}=b();return e.jsx("nav",{className:"admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50",children:e.jsx("div",{className:"custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5",children:g.map((n,l)=>{const s=n.icon;return e.jsx("div",{className:"shrink-0 snap-center px-2",children:e.jsxs(i,{to:n.link,className:o("inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary",t===n.link&&"active"),children:[e.jsx(s,{className:"size-5"}),e.jsx("span",{children:n.name})]})},l)})})})},v=()=>{const[t,n]=j.useState(!1),l=()=>{const s=window.document;s.body.classList.add("fullscreen-enable"),!s.fullscreenElement&&!s.mozFullScreenElement&&!s.webkitFullscreenElement?(s.documentElement.requestFullscreen?s.documentElement.requestFullscreen():s.documentElement.mozRequestFullScreen?s.documentElement.mozRequestFullScreen():s.documentElement.webkitRequestFullscreen&&s.documentElement.webkitRequestFullscreen(),n(!0)):(s.cancelFullScreen?s.cancelFullScreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitCancelFullScreen&&s.webkitCancelFullScreen(),n(!1));const r=()=>{!s.webkitIsFullScreen&&!s.mozFullScreen&&!s.msFullscreenElement&&s.body.classList.remove("fullscreen-enable")};s.addEventListener("fullscreenchange",r),s.addEventListener("webkitfullscreenchange",r),s.addEventListener("mozfullscreenchange",r)};return e.jsx("button",{onClick:l,type:"button",className:"inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:t?e.jsx(m,{className:"size-5"}):e.jsx(u,{className:"size-5"})})},N="/assets/img-1-DlR3_OtN.jpg",k=()=>{const{isAuthenticated:t,role:n,session:l}=x();return e.jsxs("div",{className:"hs-dropdown relative inline-flex",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all",children:[e.jsx("img",{className:"inline-block size-9 rounded-full",src:N}),e.jsxs("div",{className:"hidden text-start lg:block",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:l.user_info.name}),e.jsx("p",{className:"mt-1 text-xs font-semibold text-zinc-400",children:"Admin"})]})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs(i,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/admin/profil",children:[e.jsx(f,{className:"size-4"}),"Mon Profil"]}),e.jsx("hr",{className:"-mx-2 my-2 border-default-200"}),e.jsxs(i,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10",to:"/auth/sign-in",children:[e.jsx(h,{className:"size-4"}),"Déconnexion"]})]})]})},F=()=>e.jsxs("header",{className:"sticky top-0 z-50",children:[e.jsx("div",{className:"z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4",children:e.jsxs("nav",{className:"container flex w-full items-center justify-between gap-6",children:[e.jsx("div",{children:e.jsx(i,{to:"/admin/dashboard",className:"block",children:e.jsx("img",{src:p,className:"flex h-16",alt:"images"})})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"hidden sm:flex",children:e.jsx(v,{})}),e.jsx("div",{className:"flex",children:e.jsx(k,{})})]})]})}),e.jsx(w,{})]});export{F as default};
