"use strict";(self.webpackChunkdatastrike_docs=self.webpackChunkdatastrike_docs||[]).push([[9817],{1310:(e,t,s)=>{s.d(t,{Z:()=>p});s(7294);var n=s(512),i=s(5281),a=s(2802),r=s(8596),c=s(3692),l=s(5999),o=s(4996),d=s(5893);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,o.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.Z,{"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const i="breadcrumbs__link";return n?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):s?(0,d.jsx)(c.Z,{className:i,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function v(e){let{children:t,active:s,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function p(){const e=(0,a.s1)(),t=(0,r.Ns)();return e?(0,d.jsx)("nav",{className:(0,n.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:n,index:s,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:n,children:t.label})},s)}))]})}):null}},4228:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});s(7294);var n=s(833),i=s(2802),a=s(4996),r=s(512),c=s(3692),l=s(3919),o=s(5999),d=s(2503);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(5893);function h(e){let{href:t,children:s}=e;return(0,u.jsx)(c.Z,{href:t,className:(0,r.Z)("card padding--lg",m.cardContainer),children:s})}function b(e){let{href:t,icon:s,title:n,description:i}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",m.cardTitle),title:n,children:[s," ",n]}),i&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",m.cardDescription),title:i,children:i})]})}function x(e){let{item:t}=e;const s=(0,i.LM)(t);return s?(0,u.jsx)(b,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const s=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return(0,u.jsx)(b,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(v,{item:t});case"category":return(0,u.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,i.jA)();return(0,u.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(g,{...e});const n=(0,i.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",s),children:n.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(p,{item:e})},t)))})}var f=s(49),N=s(3120),Z=s(4364),_=s(1310);const k={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function L(e){let{categoryGeneratedIndex:t}=e;return(0,u.jsx)(n.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.Z)(t.image)})}function T(e){let{categoryGeneratedIndex:t}=e;const s=(0,i.jA)();return(0,u.jsxs)("div",{className:k.generatedIndexPage,children:[(0,u.jsx)(N.Z,{}),(0,u.jsx)(_.Z,{}),(0,u.jsx)(Z.Z,{}),(0,u.jsxs)("header",{children:[(0,u.jsx)(d.Z,{as:"h1",className:k.title,children:t.title}),t.description&&(0,u.jsx)("p",{children:t.description})]}),(0,u.jsx)("article",{className:"margin-top--lg",children:(0,u.jsx)(j,{items:s.items,className:k.list})}),(0,u.jsx)("footer",{className:"margin-top--lg",children:(0,u.jsx)(f.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function I(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(L,{...e}),(0,u.jsx)(T,{...e})]})}},49:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(5999),i=s(2244),a=s(5893);function r(e){const{previous:t,next:s}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(i.Z,{...t,subLabel:(0,a.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,a.jsx)(i.Z,{...s,subLabel:(0,a.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var n=s(512),i=s(5999),a=s(5281),r=s(4477),c=s(5893);function l(e){let{className:t}=e;const s=(0,r.E)();return s.badge?(0,c.jsx)("span",{className:(0,n.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,s)=>{s.d(t,{Z:()=>v});s(7294);var n=s(512),i=s(2263),a=s(3692),r=s(5999),c=s(143),l=s(5281),o=s(373),d=s(4477),m=s(5893);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,m.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(a.Z,{to:s,onClick:n,children:(0,m.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,i.Z)(),{pluginId:r}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,o.J)(r),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,c.Jo)(r),v=u??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,m.jsxs)("div",{className:(0,n.Z)(t,l.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:a,versionMetadata:s})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:t}=e;const s=(0,d.E)();return s.banner?(0,m.jsx)(x,{className:t,versionMetadata:s}):null}},2244:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(512),i=s(3692),a=s(5893);function r(e){const{permalink:t,title:s,subLabel:r,isNext:c}=e;return(0,a.jsxs)(i.Z,{className:(0,n.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,a.jsx)("div",{className:"pagination-nav__label",children:s})]})}}}]);