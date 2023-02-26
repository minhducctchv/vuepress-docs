(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{287:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"deploying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploying"}},[t._v("#")]),t._v(" Deploying")]),t._v(" "),s("p",[t._v("Tình trạng:")]),t._v(" "),s("ul",[s("li",[t._v("con trỏ terminal đang ở "),s("code",[t._v("docs")]),t._v(" "),s("em",[t._v("(thư mục to nhất project)")])]),t._v(" "),s("li",[t._v("vị trí build là "),s("code",[t._v("docs/dist")])]),t._v(" "),s("li",[t._v("lệnh build trong "),s("code",[t._v("package.json")]),t._v(" là")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build src"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("trong file "),s("code",[t._v("config.js")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/ten-repo/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* thư mục output build, root là docs */")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dest")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Set đúng "),s("code",[t._v("base")]),t._v(" trong "),s("code",[t._v("docs/.vuepress/config.js")]),t._v(".")]),t._v(" "),s("p",[t._v("nếu deploy vào "),s("code",[t._v("https://<USERNAME>.github.io/")]),t._v(", thì "),s("code",[t._v("base")]),t._v(" mặc định là "),s("code",[t._v('"/"')]),t._v(" => ko cần set base.")]),t._v(" "),s("p",[t._v("nếu deploy vào "),s("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v(", VD "),s("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v(", thì "),s("code",[t._v("base")]),t._v(" là "),s("code",[t._v('"/<REPO>/"')]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Tạo "),s("code",[t._v("deploy.sh")]),t._v(", và run để deploy:")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# abort on errors")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# navigate into the build output directory")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to a custom domain")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" https://github.com/minhducctchv/vuepress-docs.git master:gh-pages\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can also run the above script in your CI setup to enable automatic deployment on each push.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When you use a "),s("strong",[t._v("Custom Domain name")]),t._v(", you MUST add the CNAME file into /docs/.vuepress/public folder (Create the folder if it isn’t there). Otherwise, your CNAME file will always be removed with each deploy and never work.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);