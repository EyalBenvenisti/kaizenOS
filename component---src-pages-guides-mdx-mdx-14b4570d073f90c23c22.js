"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[104],{2917:function(e,t,a){a.r(t),a.d(t,{Title:function(){return s},_frontmatter:function(){return m},default:function(){return p}});var n,r=a(3366),l=(a(7294),a(4983)),i=a(4295),o=["components"],s=function(){return(0,l.kt)("span",null,"First line ",(0,l.kt)("br",null)," Second line")},m={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={Title:s,_frontmatter:m},u=i.Z;function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(u,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{mdxType:"PageDescription"},(0,l.kt)("p",null,"MDX allows for certain things beyond what markdown is capable of. Content here\nwill discuss using those features to augment or modify the default content\nlayout."),(0,l.kt)("p",null,"It’s extremly important that for any rich text, or images represented through\nmark down, that they are left aligned. This is true even if they are within a\ncomponent. Otherwise it will be processed as a regular string.")),(0,l.kt)("h2",null,"Frontmatter"),(0,l.kt)("p",null,"You can declare frontmatter in your ",(0,l.kt)("inlineCode",{parentName:"p"},".mdx")," files to provide specific metadata\nfor the theme to use."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title"),": Main page title: search results and SEO"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description"),": SEO and search results"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date"),": Enter a date that the page was last modified to be displayed at the\nbottom left corner of the page. Refer to the\n",(0,l.kt)("a",{parentName:"li",href:"https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/dates-and-times.html"},"IBM Style guide"),"\nfor the correct syntax."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keywords"),": just SEO (optional)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hiddenFromSearch"),": if true, page will be excluded from search")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: Markdown\ndescription: Usage instructions for the Markdown component\nkeywords: 'ibm,carbon,gatsby,mdx,markdown'\ndate: 27 January 2021\nhiddenFromSearch: true\n---\n")),(0,l.kt)("h2",null,"Smart quotes"),(0,l.kt)("p",null,"The theme has a remark for processing straight quotes, into ‘smart’ quotes (”).\nHowever, this plugin isn’t able to process text used in custom MDX components.\nWhen using quotes in custom components, content authors should manually use\n",(0,l.kt)("a",{parentName:"p",href:"https://www.figma.com/design-systems/"},"“smart quotes”")," to adhere to the IBM\nDesign Language content guidelines."),(0,l.kt)("h2",null,"Custom title"),(0,l.kt)("p",null,"You can export a ",(0,l.kt)("inlineCode",{parentName:"p"},"Title")," component in order to render a unique title for a\nsingle page. This is particularly useful for including line breaks at a specific\nlocation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You still need to provide a regular string title to the frontmatter\nfor search, navigation, and the HTML header title to work."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdx"},"---\ntitle: MDX\ndescription: custom title page\n---\n\nexport const Title = () => (\n  <span>\n    First line <br /> Second line\n  </span>\n);\n\n;\n")))}p.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(5426),s=a(4311),m=a(5900),c=a.n(m),d=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,m=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},p=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,m=new RegExp(o+"/?(#.*)?$"),d=r.replace(m,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),f=g,k=a(2881),b=a(6958),w=a(36),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,c=t.frontmatter,h=void 0===c?{}:c,g=t.relativePagePath,w=t.titleType,N=h.tabs,y=h.title,v=h.theme,x=h.description,P=h.keywords,T=h.date,C=(0,b.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,M=D?r.pathname.replace(D,""):r.pathname,S=N?M.split("/").filter(Boolean).slice(-1)[0]||l()(N[0],{lower:!0}):"",X=v||C;return n.createElement(s.Z,{tabs:N,homepage:!1,theme:X,pageTitle:y,pageDescription:x,pageKeywords:P,titleType:w},n.createElement(d,{title:m?n.createElement(m,null):y,label:"label",tabs:N,theme:X}),N&&n.createElement(f,{title:y,slug:M,tabs:N,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(E,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:M,tabs:N,currentTab:S}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-mdx-mdx-14b4570d073f90c23c22.js.map