"use strict";(self.webpackChunkdatastrike_docs=self.webpackChunkdatastrike_docs||[]).push([[608],{3169:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});t(7294);var a=t(3692),r=t(5999),i=t(1944),c=t(6040),n=t(2503),l=t(5893);function d(e){let{year:s,posts:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{as:"h3",id:s,children:s}),(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(a.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:s}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,{...e})},s)))})})})}function o(e){let{archive:s}=e;const t=(0,r.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,r.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const s=e.reduce(((e,s)=>{const t=s.metadata.date.split("-")[0],a=e.get(t)??[];return e.set(t,[s,...a])}),new Map);return Array.from(s,(e=>{let[s,t]=e;return{year:s,posts:t}}))}(s.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:t,description:a}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.Z,{as:"h1",className:"hero__title",children:t}),(0,l.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,l.jsx)("main",{children:d.length>0&&(0,l.jsx)(h,{years:d})})]})]})}}}]);