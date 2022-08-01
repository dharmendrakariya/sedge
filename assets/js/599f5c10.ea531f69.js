"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:m,values:h,groupId:g,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[O,T]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=g){const e=v[g];null!=e&&e!==O&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==O&&(x(t),T(a),null!=g&&w(g,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={sidebar_position:3,id:"install-guide"},s="Installation guide",u={unversionedId:"quickstart/install-guide",id:"quickstart/install-guide",title:"Installation guide",description:"Sedge is currently only available for Linux and macOS, and both amd64 and arm64 architectures. You can use any of the following methods to install Sedge:",source:"@site/docs/quickstart/install-guide.mdx",sourceDirName:"quickstart",slug:"/quickstart/install-guide",permalink:"/docs/quickstart/install-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/install-guide.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"install-guide"},sidebar:"tutorialSidebar",previous:{title:"Testnets",permalink:"/docs/quickstart/hardware-requirements/testnet-requirements"},next:{title:"Complete quickstart guide",permalink:"/docs/quickstart/complete-guide"}},d={},p=[{value:"Download binary from release page",id:"download-binary-from-release-page",level:2},{value:"Using Go",id:"using-go",level:2},{value:"Build from source",id:"build-from-source",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-guide"},"Installation guide"),(0,r.kt)("p",null,"Sedge is currently only available for Linux and macOS, and both amd64 and arm64 architectures. You can use any of the following methods to install Sedge:"),(0,r.kt)("h2",{id:"download-binary-from-release-page"},"Download binary from release page"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download correct binary for the machine you want to use for Sedge from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/sedge/releases"},"releases page"),", i.e choose the correct target OS / Arch. For example: if your machine is a Intel / M1 mac then download the ",(0,r.kt)("inlineCode",{parentName:"p"},"darwin-amd64")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"darwin-arm64")," binary. You can also download the binary from the CLI (command line interface) or Terminal with ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wget"),":"),(0,r.kt)(o.Z,{groupId:"download-cmds",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -OL https://github.com/NethermindEth/sedge/releases/download/<VERSION>/sedge-v<VERSION>-<OS>-<ARCH>\n"))),(0,r.kt)(i.Z,{value:"wget",label:"wget",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"wget https://github.com/NethermindEth/sedge/releases/download/<VERSION>/sedge-v<VERSION>-<OS>-<ARCH>\n")))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<VERSION>")," with the desired version number, e.g 0.1.2; ",(0,r.kt)("inlineCode",{parentName:"p"},"<OS>")," with your OS, e.g linux; and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ARCH>")," with your architecture, e.g amd64."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a console or terminal instance on the directory in which you downloaded the binary. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set binary as executable executing ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x <binary>")," in the terminal. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<binary>")," with the name of the downloaded binary.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run Sedge ",(0,r.kt)("inlineCode",{parentName:"p"},"./sedge --help")," to check if the executable is ok. The ",(0,r.kt)("inlineCode",{parentName:"p"},".")," represents the current directory (where your terminal session is pointing to)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Put the binary in your ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PATH_(variable)"},"PATH")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"cp <binary> /usr/local/bin/sedge")," so you can execute Sedge from any directory using the terminal. Try ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge --help")," now."))),(0,r.kt)("h2",{id:"using-go"},"Using Go"),(0,r.kt)("p",null,"First install the Go programmning language following the ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"official instructions"),". You need at least the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.18.2")," version."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to install Sedge in a M1 mac then you need the ",(0,r.kt)("inlineCode",{parentName:"p"},"darwin-arm64")," package. You can find it clicking on ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"other downloads")," from the Go install page.")),(0,r.kt)("p",null,"This command will install the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge")," executable along with the library and its dependencies in your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go install github.com/NethermindEth/sedge/cmd/sedge@latest\n")),(0,r.kt)("p",null,"The executable will be in your ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOBIN")," (",(0,r.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN")," is not in your PATH you can execute ",(0,r.kt)("inlineCode",{parentName:"p"},"echo $GOBIN")," from the terminal. If it doesn't print anything then is not in your PATH. To add ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN")," to your PATH add the following lines to your $HOME/.profile:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export GOBIN=$GOPATH/bin\nexport PATH=$GOBIN:$PATH\n")),(0,r.kt)("p",{parentName:"admonition"},"Changes made to a profile file may not apply until the next time you log into your computer. To apply the changes immediately, just run the shell commands directly or execute them from the profile using a command such as source $HOME/.profile.")),(0,r.kt)("h2",{id:"build-from-source"},"Build from source"),(0,r.kt)("p",null,"In this method you generate the binary manually (need Go installed) downloading and compiling the source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/NethermindEth/sedge.git\ncd sedge\nmkdir -p build\ngo build -o build/sedge cmd/sedge/main.go\n")),(0,r.kt)("p",null,"or if you have ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/NethermindEth/sedge.git\ncd sedge\nmake compile\n")),(0,r.kt)("p",null,"The executable will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In case you want the binary in your PATH (or if you used the ",(0,r.kt)("a",{parentName:"p",href:"#using-go"},"Using Go")," method and you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOBIN")," in your PATH), please copy the binary to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Using Go\nsudo cp $GOPATH/bin/sedge /usr/local/bin/\n\n# Build from source\nsudo cp sedge/build/sedge /usr/local/bin/\n")))}m.isMDXComponent=!0}}]);