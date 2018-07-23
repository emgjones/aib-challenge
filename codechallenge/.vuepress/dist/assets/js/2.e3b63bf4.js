(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,t,r){e.exports=r.p+"assets/img/Eros_Anteros.42a65247.jpg"},159:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("img",{staticStyle:{display:"block",margin:"0 auto 0 auto"},attrs:{src:r(152)}}),s("p"),e._m(1),s("p"),s("p",[e._v("This is my second attempt at creating a blog. My original architecture was a half-baked solution that enabled me to develop some competencies in Spring Boot and Spring Cloud services. While it was a fun way to learn those development tools, this architecture seems to allow me to be more incremental with the enhancements that I give it and takes the complexity out of maintaining a full-stack app that's part CMS and part blog. If I'm going to be using a cms to journal my progress, I don't wnat to have to focus all of my writing on the technical implementation of this already better-solved problem. Given my goal of a simplified cms solution, I couldn't just keep it simple!")]),e._m(2),s("p",[e._v("The original archictecture used a postgresql database configured using docker compose(stack) with a volume paired with a couple of container-ized spring boot 2 services and a Vue.JS frontend.")]),e._m(3),s("p",[e._v("The original application split the spring app into two services")]),e._m(4),e._m(5),s("p",[e._v("This was really your standard bitbucket-hooked deployment pipeline.")]),e._m(6),e._m(7),s("p",[e._v("The previous version has a built-in CMS for creating, editing and deleting content hidden behind an authenticated route. I used quill editor with some highlight.js for the added \"Developer-blog Necessary\" functionality. Even before I'd migrated to typescript, my app bundle just wasn't cutting it. Which, is part of why I wanted to just move this puppy over to a more light-weight solution. Holy guacamole.")]),e._m(8),s("p",[e._v("This will be discussed in more detail in my next post, but I have a super basic vuepress app that has some nifty tricks for putting together UX features that I prefer for my web content presentation. Along with the technical implementation, I'll talk about some of the benefits of a statically rendered cms")]),e._m(9),e._m(10),s("p",[e._v("As I'd mentioned earlier, I wanted to migrate my app away from the overly-complex microservice orchestration + jenkins deployment automation and move towards something that took less effort. I think my next article will be the build pipeline for this current iteration of the blog.")]),s("h3",{attrs:{id:"layout-redesign-w-tailwind-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout-redesign-w-tailwind-css","aria-hidden":"true"}},[e._v("#")]),e._v(" Layout Redesign w/ "),s("a",{attrs:{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tailwind CSS"),s("OutboundLink")],1)]),s("p",[e._v("As much as I adore all of the goodness that is the Vuejs docs design, I HAVE to do some redesign, so look out for more articles about integrating UI libraries with Vuepress and my take on the resources I've used.")]),e._m(11),s("ul",[e._m(12),s("li",[s("p",[e._v("Media Consumtion Display and Aggregation Automation : I mostly just want somebody else to be able to know about all the sappy music I listen to (most recently: "),s("a",{attrs:{href:"http://theoathbreakerreigns.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oathbreaker"),s("OutboundLink")],1),e._v('\'s "Eros|Anteros", '),s("a",{attrs:{href:"http://www.wearehavemercy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Have Mercy"),s("OutboundLink")],1),e._v('\'s "The Earth Pushed Back", '),s("a",{attrs:{href:"https://myspace.com/verse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verse"),s("OutboundLink")],1),e._v("'s \"Aggression\" because THIS ISN'T NORMAL.")])])]),e._m(13),s("p",[e._v("With any luck, I'll have some friends submit some content in the near future about cool shit they're working on.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"let-s-try-this-with-a-little-more-gusto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-s-try-this-with-a-little-more-gusto","aria-hidden":"true"}},[this._v("#")]),this._v(" Let's Try This with a LITTLE more gusto")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#original-architecture"}},[e._v("Original Architecture")]),r("ul",[r("li",[r("a",{attrs:{href:"#spring-services"}},[e._v("Spring Services")])]),r("li",[r("a",{attrs:{href:"#jenkins-deployment-pipeline"}},[e._v("Jenkins Deployment Pipeline")])]),r("li",[r("a",{attrs:{href:"#features"}},[e._v("Features")])])])]),r("li",[r("a",{attrs:{href:"#new-architecture-vuepress-typescript"}},[e._v("New Architecture - Vuepress & Typescript")])]),r("li",[r("a",{attrs:{href:"#moving-forward"}},[e._v("Moving Forward")]),r("ul",[r("li",[r("a",{attrs:{href:"#ci-cd"}},[e._v("CI/CD")])]),r("li",[r("a",{attrs:{href:"#layout-redesign-w-tailwind-css-https-tailwindcss-com"}},[e._v("Layout Redesign w/ Tailwind CSS")])]),r("li",[r("a",{attrs:{href:"#vuepress-feature-enhancement"}},[e._v("Vuepress Feature Enhancement")])])])]),r("li",[r("a",{attrs:{href:"#bonus-friend-plugs"}},[e._v("Bonus - Friend Plugs")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"original-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#original-architecture","aria-hidden":"true"}},[this._v("#")]),this._v(" Original Architecture")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"spring-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Oauth2-via-JWT Auth server")]),t("li",[this._v("Resource management server for the content management -\n"),t("ul",[t("li",[this._v("The Blog's various text elements")]),t("li",[this._v("The posts")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"jenkins-deployment-pipeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-deployment-pipeline","aria-hidden":"true"}},[this._v("#")]),this._v(" Jenkins Deployment Pipeline")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Bitbucket tells my publicly available endpoint that I made a commit")]),t("li",[this._v("Jenkins pulls the newest code")]),t("li",[this._v("Jenkins tests new code")]),t("li",[this._v("Jenkins builds code and ssh's it to my server")]),t("li",[this._v("Run some systemctl commands and kick off some test-polls")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"new-architecture-vuepress-typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-architecture-vuepress-typescript","aria-hidden":"true"}},[this._v("#")]),this._v(" New Architecture - Vuepress & Typescript")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"moving-forward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moving-forward","aria-hidden":"true"}},[this._v("#")]),this._v(" Moving Forward")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ci-cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd","aria-hidden":"true"}},[this._v("#")]),this._v(" CI/CD")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vuepress-feature-enhancement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-feature-enhancement","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuepress Feature Enhancement")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Comments : I wanna be able to provide a space where others are able to interact with my content and each other.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"bonus-friend-plugs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bonus-friend-plugs","aria-hidden":"true"}},[this._v("#")]),this._v(" Bonus - Friend Plugs")])}],!1,null,null,null);t.default=i.exports}}]);