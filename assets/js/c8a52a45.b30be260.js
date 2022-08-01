"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,y=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return r?o.createElement(y,i(i({ref:t},d),{},{components:r})):o.createElement(y,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={id:"keystore"},i="Validator Keystore",c={unversionedId:"concepts/keystore",id:"concepts/keystore",title:"Validator Keystore",description:"The validator keystore is a folder where all the validator keys lie. There you can found the validator signing key, with which the validator sign on-chain duties such as attestations and block proposals; the validator public key, which allows the network to identify and associate between the validator and the ETH funds; and the withdrawal key, which is required to move (or withdraw) the validator balance.",source:"@site/docs/concepts/keystore.md",sourceDirName:"concepts",slug:"/concepts/keystore",permalink:"/docs/concepts/keystore",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/keystore.md",tags:[],version:"current",frontMatter:{id:"keystore"},sidebar:"tutorialSidebar",previous:{title:"Fee Recipient",permalink:"/docs/concepts/fee-recipient"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},s={},l=[],d={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validator-keystore"},"Validator Keystore"),(0,n.kt)("p",null,"The validator keystore is a folder where all the validator keys lie. There you can found the validator signing key, with which the validator sign on-chain duties such as attestations and block proposals; the validator public key, which allows the network to identify and associate between the validator and the ETH funds; and the withdrawal key, which is required to move (or withdraw) the validator balance."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"More information about all of these concepts and topic will be provided soon")))}p.isMDXComponent=!0}}]);