import{j as e,C as b,k as j,P as y,D as N,h as w,i as t,E as v,U as m,o as k}from"./index-DHlyfRUS.js";import{r as d}from"./vendor-iLaNCrNf.js";import{T as q}from"./TopNavBar-RZBFqri0.js";function F({children:i,title:n}){return e.jsx("div",{className:"min-h-screen m-8 bg-gray-100 flex items-center justify-center",children:e.jsx("div",{className:"w-full max-w-4xl flex flex-col items-center",children:e.jsxs("div",{className:"w-full bg-gray-200 rounded shadow-lg z-0 mt-16 p-4",children:[e.jsx("h2",{className:"text-center md:text-lg lg:text-3xl font-extrabold text-gray-900",children:n}),e.jsx("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:i})]})})})}const L=w({name:t().required("Veuillez entrer votre nom"),email:t().email("Veuillez entrer un email valide").required("L'email est requis"),phone:t().required("Le numéro de téléphone est requis"),adresse:t().required("L'adresse est requise"),intitule:t().required("L'intitulé est requis"),profession:t().required("La profession est requise"),lieu_naissance:t().required("Le lieu de naissance est requis"),pays_residence:t().required("Le pays de résidence est requis"),date_naissance:v().required("La date de naissance est requise").max(new Date,"La date ne peut pas être dans le futur"),sexe:t().oneOf(["Masculin","Féminin"],"Veuillez sélectionner un sexe valide").required("Le sexe est requis"),password:t().required("Le mot de passe est requis").min(8,"Le mot de passe doit contenir au moins 8 caractères")});function E(){const[i,n]=d.useState("idle"),[u,x]=d.useState(""),[a,l]=d.useState(!1),{urlApi:p}=d.useContext(b),{register:r,reset:h,handleSubmit:g,formState:{errors:s}}=j({resolver:k(L)}),f=async c=>{l(!0);try{const o=await fetch(p+"create-demandeur",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(console.log(c),console.log(o),o.ok)m.success("Compte créé avec succès"),h();else throw m.error(o.statusText||"Erreur lors de la création du compte"),new Error(o.statusText||"Une erreur est survenue lors de l'inscription");l(!1),n("success")}catch(o){console.log(o),l(!1),n("error"),x(o.message)}};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Inscription en tant que demandeur"}),e.jsx(q,{menuItems:["Accueil","A propos","Fonctionnalités","Nos Services","Tarification","Contact","FAQ"],position:"fixed",hasDownloadButton:!0}),e.jsxs(F,{title:"Créer un compte",children:[i==="success"&&e.jsxs("div",{className:"mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded",children:[e.jsx("p",{className:"font-bold",children:"Succès"}),e.jsx("p",{children:"Votre inscription a été effectuée avec succès. Vous recevrez bientôt un email de confirmation."})]}),i==="error"&&e.jsxs("div",{className:"mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded",children:[e.jsx("p",{className:"font-bold",children:"Erreur"}),e.jsx("p",{children:u})]}),e.jsxs("form",{onSubmit:g(f),className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nom complet"}),e.jsx("input",{id:"name",...r("name"),className:"mt-1 block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.name&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.name.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{id:"email",type:"email",...r("email"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.email&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.email.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Numéro de téléphone"}),e.jsx("input",{id:"phone",...r("phone"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.phone&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.phone.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"adresse",className:"block text-sm font-medium text-gray-700",children:"Adresse"}),e.jsx("input",{id:"adresse",...r("adresse"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.adresse&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.adresse.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"intitule",className:"block text-sm font-medium text-gray-700",children:"Intitulé"}),e.jsx("input",{id:"intitule",...r("intitule"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.intitule&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.intitule.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"profession",className:"block text-sm font-medium text-gray-700",children:"Profession"}),e.jsx("input",{id:"profession",...r("profession"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.profession&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.profession.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"lieu_naissance",className:"block text-sm font-medium text-gray-700",children:"Lieu de naissance"}),e.jsx("input",{id:"lieu_naissance",...r("lieu_naissance"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.lieu_naissance&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.lieu_naissance.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pays_residence",className:"block text-sm font-medium text-gray-700",children:"Pays de résidence"}),e.jsx("input",{id:"pays_residence",...r("pays_residence"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.pays_residence&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.pays_residence.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"date_naissance",className:"block text-sm font-medium text-gray-700",children:"Date de naissance"}),e.jsx("input",{id:"date_naissance",type:"date",...r("date_naissance"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.date_naissance&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.date_naissance.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sexe",className:"block text-sm font-medium text-gray-700",children:"Sexe"}),e.jsxs("select",{id:"sexe",...r("sexe"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[e.jsx("option",{value:"",children:"Sélectionnez votre sexe"}),e.jsx("option",{value:"Masculin",children:"Masculin"}),e.jsx("option",{value:"Féminin",children:"Féminin"})]}),s.sexe&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.sexe.message})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Mot de passe"}),e.jsx("input",{id:"password",type:"password",...r("password"),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),s.password&&e.jsx("p",{className:"mt-2 text-sm text-red-600",children:s.password.message})]}),e.jsx("div",{children:e.jsxs("button",{type:"submit",disabled:a,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blueLogo focus:outline-none  ${a?"cursor-not-allowed":"cursor-pointer hover:bg-rougeLogo"}  `,children:[a?"Inscription...":"S'inscrire",a&&e.jsx(N,{className:"animate-spin"})]})})]})]})]})}export{E as default};