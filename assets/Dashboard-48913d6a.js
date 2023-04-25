import{r as i,u as l,j as s,F as m,a as e,L as v,N as p,O as k}from"./index-4e153b22.js";const b=()=>{const[n,c]=i.useState(),o=l();return s(m,{children:e("span",{className:"search-box-wrapper",children:[s("input",{type:"text",className:"search-input",name:"search-box",value:n,placeholder:"Search for anything"}),s("button",{className:"search-button"}),s("button",{className:"search-button small-search-button",onClick:o.SmallSearchBoxDisplayhandler})]})})};const u=()=>s(m,{children:s("img",{src:"../src/assets/icon/bellIcon.png",alt:"bell",className:"bell-icon"})});const I=()=>s(m,{children:s("div",{className:"avatar-container",children:s("img",{className:"avatar-image",src:"../../src/assets/image/avatar-image.svg",alt:"avatar",title:"Guest"})})});const S=()=>s("div",{className:"drop-down-container",children:s("img",{className:"dropdown-icon",src:"../../src/assets/icon/dropdownIcon.svg",alt:"drop"})});const w=()=>{const n=l(),c=l();return e("div",{className:"hamburger-wrapper",onClick:n.sideNavDisplayHandler,children:[s("div",{className:`bar ${c.toggleBar}`}),s("div",{className:`bar ${c.toggleBar}`}),s("div",{className:`bar ${c.toggleBar}`})]})},x=()=>{i.useState();const[n,c]=i.useState(),[o,r]=i.useState("Log-Out"),t=()=>{a.login(n)?(a.logout,r("Login")):(a.login(n),r("Logout"))},a=l();return s("header",{className:"header",children:e("div",{className:"header-component-wrapper",children:[s("div",{className:"hamburger-container header-component-box",children:s(w,{})}),s("div",{className:"logo-container header-component-box",children:s(v,{})}),s("div",{className:"search-container header-component-box",children:s(b,{})}),e("div",{className:"doc-bell-container header-component-box",children:[s("a",{className:"doc-link",href:"/dashboard",children:"Docs"}),s(u,{})]}),s("div",{className:"user-detail-container header-component-box",children:e("span",{className:"user-detail-wrapper",children:[s(I,{}),s("span",{className:"user-name",children:a.username}),s("span",{className:"drop-down-icon",children:s(S,{})}),e("div",{className:"user-dropdown-menu-container",children:[s("li",{children:a.username}),s("li",{children:a.user}),s("button",{className:"logout-button",onClick:t,children:o}),s("div",{className:"drop-angle"})]})]})})]})})};const L=()=>s("div",{className:"arrow-down-container",children:s("img",{className:"dropdown-icon",src:"../../src/assets/icon/arrowdownIcon.svg",alt:"arrow"})}),f=()=>{const n=({isActive:d})=>({color:d?"#213F7D":"",backgroundColor:d?"#39cdcd13":"",borderLeft:d?"4px solid #39CDCC":""});i.useState();const[c,o]=i.useState(),[r,t]=i.useState("Logout"),a=l(),h=l(),g=()=>{a.login(c)?(a.logout,t("Login")):(a.login(c),t("Logout"))},N=l();return e("nav",{className:`side-nav ${h.sideNav}`,children:[e("div",{className:"menu-container",children:[e("li",{className:"switch-organization link",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/briefcaseIcon.svg",alt:"icon"}),"Switch Organization",s(L,{})]}),e("li",{className:"dashboard link",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/homeIcon.svg",alt:"icon"}),"Dashboard"]}),s("li",{className:"menu-title-container link",children:s("span",{className:"menu-title",children:"Custormer"})}),e(p,{to:"/dashboard/user",className:"menu-link link ",style:n,children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/userIcon.svg",alt:"icon"}),"User"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/guarantorIcon.svg",alt:"icon"}),"Guarantors"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/loanIcon.svg",alt:"icon"}),"Loans"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/decisionModelIcon.svg",alt:"icon"}),"Decison Models"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/savingsIcon.svg",alt:"icon"}),"Savings"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/loanRequestIcon.svg",alt:"icon"}),"Loan Request"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/whitelistIcon.svg",alt:"icon"}),"Whitelist"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/karmaIcon.svg",alt:"icon"}),"Karma"]}),s("li",{className:"menu-title-container link",children:s("span",{className:"menu-title",children:"Business"})}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/organizationIcon.svg",alt:"icon"}),"Organization"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/loanProductsIcon.svg",alt:"icon"}),"Loan Products"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/savingsProductsIcon.svg",alt:"icon"}),"Savings Products"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/feesChargesIcon.svg",alt:"icon"}),"Fees and Charges"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/transactionsIcon.svg",alt:"icon"}),"Transactions"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/servicesIcon.svg",alt:"icon"}),"Services"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/serviceAccountIcon.svg",alt:"icon"}),"Service Account"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/settlementsIcon.svg",alt:"icon"}),"Settlements"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/reportsIcon.svg",alt:"icon"}),"Reports"]}),s("li",{className:"menu-title-container link",children:s("span",{className:"menu-title",children:"Settings"})}),e("li",{className:"menu-link link",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/preferencesIcon.svg",alt:"icon"}),"Preferences"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/feesPricingIcon.svg",alt:"icon"}),"Fees and Pricing"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/auditLogsIcon.svg",alt:"icon"}),"Audit Logs"]}),e("li",{className:"menu-link link ",children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/systemsMessagesIcon.svg",alt:"icon"}),"Systems Messages"]})]}),e("div",{className:"nav-footer-container",children:[e("li",{className:"menu-link link log-out",onClick:g,children:[s("img",{className:"menu-icon",src:"../../src/assets/icon/logOutIcon.svg",alt:"icon"}),r]}),s("li",{className:"menu-link link ",children:e("span",{className:"version",children:["v.1.2.0",s("a",{className:"doc-link",href:"/dashboard",children:"Docs"}),s(u,{}),s("button",{className:"search-button small-search-button",onClick:N.SmallSearchBoxDisplayhandler})]})})]})]})};const B=()=>{const[n,c]=i.useState(),o=l();return s(m,{children:s("div",{className:`small-search-box-container ${o.smallSearchBox}`,children:e("span",{className:"search-box-wrapper small-search-box-wrapper",children:[s("input",{type:"text",className:"search-input small-search-input",name:"search-box",value:n,placeholder:"Search for anything",autoFocus:!0}),s("button",{className:"small-search-submit-button"})]})})})},C=()=>((()=>{document.title="LendSqr test | Dashboard"})(),i.useState(""),e("div",{className:"page-body",children:[s(x,{}),s(f,{}),e("main",{className:"page-main",children:[s("div",{className:"sidenav-back-layer"}),e("span",{className:"content-section",children:[s(B,{}),s(k,{})]})]})]}));export{C as default};