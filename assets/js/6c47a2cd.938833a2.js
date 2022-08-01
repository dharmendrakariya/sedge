"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:m,values:k,groupId:h,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[O,D]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=h){const e=N[h];null!=e&&e!==O&&b.some((t=>t.value===e))&&D(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==O&&(x(t),D(r),null!=h&&w(h,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},1762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:1,id:"dependencies"},s="Dependencies",c={unversionedId:"quickstart/dependencies",id:"quickstart/dependencies",title:"Dependencies",description:"Sedge requires only Docker with the Docker Compose plugin to work.",source:"@site/docs/quickstart/dependencies.mdx",sourceDirName:"quickstart",slug:"/quickstart/dependencies",permalink:"/docs/quickstart/dependencies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/dependencies.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"dependencies"},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/quickstart/"},next:{title:"Hardware requirements",permalink:"/docs/quickstart/hardware-requirements/"}},d={},p=[{value:"Using Sedge",id:"using-sedge",level:3},{value:"Using Docker official instructions",id:"using-docker-official-instructions",level:3},{value:"Docker Desktop",id:"docker-desktop",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Sedge requires only ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," plugin to work."),(0,a.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("h3",{id:"using-sedge"},"Using Sedge"),(0,a.kt)("p",null,"In case you want to, Sedge can install the required dependencies using predefined ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/sedge/tree/main/templates/setup/linux/docker"},"scripts")," (Only for Linux). Sedge will show you in every step what is going to execute. By default, a prompt will display the install instructions and will let you decide between installing the dependencies or exit and let you do it on your own. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-i/--install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-y/--yes")," flags to install dependencies without asking. (TODO: PUT LINK TO CONFIGURATION GUIDE)")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Sedge does a dependency check at the beginning of every command which require the use of the dependencies. If you have the dependencies installed on your machine, then Sedge will skip any prompt related to this topic.")),(0,a.kt)("p",null,"Supported Linux flavours for dependency installation:  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"OS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Versions"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Tested on last release"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Ubuntu"),(0,a.kt)("td",{parentName:"tr",align:"center"},"22.04, 21.10, 21.04, 20.04"),(0,a.kt)("td",{parentName:"tr",align:"center"},"22.04")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Debian"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11, 10, 9, 8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Fedora"),(0,a.kt)("td",{parentName:"tr",align:"center"},"35, 34"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CentOS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Arch"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Amazon Linux 2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Alpine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3.15, 3.14, 3.14.3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,a.kt)("h3",{id:"using-docker-official-instructions"},"Using Docker official instructions"),(0,a.kt)("p",null,"Check and follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"official instructions"),"."),(0,a.kt)("h3",{id:"docker-desktop"},"Docker Desktop"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/"},"Docker Desktop")," is an easy-to-install application with a GUI that comes with Docker Engine and Docker Compose (what Sedge needs). Is available on Windows, MacOS and Linux. To install Docker Desktop follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/linux-install/"},"official instructions"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may notice that, for the Sedge's dependency installation feature on Linux, we are still using the classic Docker Engine setup along with the Compose plugin. This is because we found it more convenient for servers in the cloud. Also is still recommended to install docker using specific instructions for every Linux distribution. This may change in the future."))),(0,a.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,"For macOS you need to install Docker Desktop. Follow instructions for Mac ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/mac-install/"},"here"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Apple silicon chip (M1) is supported")))))}m.isMDXComponent=!0}}]);