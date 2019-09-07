(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{51:function(t,s,a){t.exports=a.p+"assets/img/3-1presets-es.ed908d67.png"},52:function(t,s,a){t.exports=a.p+"assets/img/3-1presets-stage.93f5aa39.png"},97:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"_3-1-使用-es6-语言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-使用-es6-语言","aria-hidden":"true"}},[t._v("#")]),t._v(" 3-1 使用 ES6 语言")]),n("p",[t._v("ECMAScript 6.0 是 2015 年发布的下一代 JavaScript 语言标准，它引入了新的语法和 API 来提升开发效率。")]),n("p",[t._v("想学习更多 ES6 的新特性，推荐阅读阮一峰的《ECMAScript 6 入门》：")]),n("p",[n("img",{attrs:{src:"http://es6.ruanyifeng.com/images/cover_thumbnail_3rd.jpg",alt:""}}),t._v("\n虽然目前部分浏览器和 Node.js 已经支持 ES6，但由于它们对 ES6 所有的标准支持不全，这导致在开发中不敢全面地使用 ES6。")]),n("p",[t._v("通常我们需要把采用 ES6 编写的代码转换成目前已经支持良好的 ES5 代码，这包含 2 件事：")]),n("ol",[n("li",[t._v("把新的 ES6 语法用 ES5 实现，例如 ES6 的 "),n("code",[t._v("class")]),t._v(" 语法用 ES5 的 "),n("code",[t._v("prototype")]),t._v(" 实现。")]),n("li",[t._v("给新的 API 注入 "),n("code",[t._v("polyfill")]),t._v(" ，例如使用新的 fetch API 时注入对应的 "),n("code",[t._v("polyfill")]),t._v(" 后才能让低端浏览器正常运行。")])]),n("h2",{attrs:{id:"babel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#babel","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel")]),n("p",[t._v("Babel 可以方便的完成以上 2 件事。 Babel 是一个 JavaScript 编译器，能将 ES6 代码转为 ES5 代码，让你使用最新的语言特性而不用担心兼容性问题，并且可以通过插件机制根据需求灵活的扩展。 在 Babel 执行编译的过程中，会从项目根目录下的 "),n("code",[t._v(".babelrc")]),t._v(" 文件读取配置。"),n("code",[t._v(".babelrc")]),t._v(" 是一个 JSON 格式的文件，内容大致如下：")]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transform-runtime"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"polyfill"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es2015"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"modules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stage-2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugins")]),n("p",[n("code",[t._v("plugins")]),t._v(" 属性告诉 Babel 要使用哪些插件，插件可以控制如何转换代码。")]),n("p",[t._v("以上配置文件里的 "),n("code",[t._v("transform-runtime")]),t._v(" 对应的插件全名叫做 "),n("code",[t._v("babel-plugin-transform-runtime")]),t._v("，即在前面加上了 "),n("code",[t._v("babel-plugin-")]),t._v("，要让 Babel 正常运行我们必须先安装它：")]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D babel-plugin-transform-runtime\n")])])]),n("p",[n("code",[t._v("babel-plugin-transform-runtime")]),t._v(" 是 Babel 官方提供的一个插件，作用是[减少冗余代码]。 Babel 在把 ES6 代码转换成 ES5 代码时通常需要一些 ES5 写的辅助函数来完成新语法的实现，例如在转换 "),n("code",[t._v("class extent")]),t._v(" 语法时会在转换后的 ES5 代码里注入 "),n("code",[t._v("_extent")]),t._v(" 辅助函数用于实现继承：")]),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_extent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" source "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这会导致每个使用了 "),n("code",[t._v("class extent")]),t._v(" 语法的文件都被注入重复的"),n("code",[t._v("_extent")]),t._v(" 辅助函数代码，"),n("code",[t._v("babel-plugin-transform-runtime")]),t._v(" 的作用在于不把辅助函数内容注入到文件里，而是注入一条导入语句：")]),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _extent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-runtime/helpers/_extent"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("这样能减小 Babel 编译出来的代码的文件大小。")]),n("p",[t._v("同时需要注意的是由于 "),n("code",[t._v("babel-plugin-transform-runtime")]),t._v(" 注入了 "),n("code",[t._v("require('babel-runtime/helpers/_extent')")]),t._v(" 语句到编译后的代码里，需要安装 "),n("code",[t._v("babel-runtime")]),t._v(" 依赖到你的项目后，代码才能正常运行。")]),n("p",[t._v("也就是说 "),n("code",[t._v("babel-plugin-transform-runtime")]),t._v(" 和 "),n("code",[t._v("babel-runtime")]),t._v(" 需要配套使用，使用了 "),n("code",[t._v("babel-plugin-transform-runtime")]),t._v(" 后一定需要 "),n("code",[t._v("babel-runtime")]),t._v("。")]),n("h2",{attrs:{id:"presets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#presets","aria-hidden":"true"}},[t._v("#")]),t._v(" Presets")]),n("p",[n("code",[t._v("presets")]),t._v(" 属性告诉 Babel 要转换的源码使用了哪些新的语法特性，一个 Presets 对一组新语法特性提供支持，多个 Presets 可以叠加。 Presets 其实是"),n("strong",[t._v("一组 Plugins 的集合")]),t._v("，每一个 Plugin 完成一个新语法的转换工作。Presets 是按照 ECMAScript 草案来组织的，通常可以分为以下三大类：")]),n("ol",[n("li",[t._v("已经被写入 ECMAScript 标准里的特性，由于之前每年都有新特性被加入到标准里，所以又可细分为：")])]),n("ul",[n("li",[t._v("es2015 包含在 2015 里加入的新特性；")]),n("li",[t._v("es2016 包含在 2016 里加入的新特性；")]),n("li",[t._v("es2017 包含在 2017 里加入的新特性；")]),n("li",[t._v("es2017 包含在 2017 里加入的新特性；")]),n("li",[n("code",[t._v("env")]),t._v(" 包含当前所有 ECMAScript 标准里的最新特性。")])]),n("p",[t._v("它们之间的关系如图：")]),n("p",[n("img",{attrs:{src:a(51),alt:"图3.1.1 ECMAScript 标准里的特性关系图"}})]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("被社区提出来的但还未被写入 ECMAScript 标准里特性，这其中又分为以下四种：")])]),n("ul",[n("li",[t._v("stage0 只是一个美好激进的想法，有 Babel 插件实现了对这些特性的支持，但是不确定是否会被定为标准；")]),n("li",[t._v("stage1 值得被纳入标准的特性；")]),n("li",[t._v("stage2 该特性规范已经被起草，将会被纳入标准里；")]),n("li",[t._v("stage3 该特性规范已经定稿，各大浏览器厂商和 Node.js 社区开始着手实现；")]),n("li",[t._v("stage4 在接下来的一年将会加入到标准里去。")])]),n("p",[t._v("它们之间的关系如图：")]),n("p",[n("img",{attrs:{src:a(52),alt:"图3.1.2 stage 关系图"}})]),n("p",[t._v("为了支持一些特定应用场景下的语法，和 ECMAScript 标准没有关系，例如 "),n("code",[t._v("babel-preset-react")]),t._v(" 是为了支持 React 开发中的 JSX 语法。\n在实际应用中，你需要根据项目源码所使用的语法去安装对应的 Plugins 或 Presets。")]),n("h2",{attrs:{id:"接入-babel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接入-babel","aria-hidden":"true"}},[t._v("#")]),t._v(" 接入 Babel")]),n("p",[t._v("在了解 Babel 后，下一步要知道如何在 Webpack 中使用它。 由于 Babel 所做的事情是转换代码，所以应该通过 Loader 去接入 Babel，Webpack 配置如下：")]),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 source-map 方便直接调试 ES6 源码")]),t._v("\n  devtool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source-map"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("配置命中了项目目录下所有的 JavaScript 文件，通过 "),n("code",[t._v("babel-loader")]),t._v(" 去调用 Babel 完成转换工作。 在重新执行构建前，需要先安装新引入的依赖：")]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Webpack 接入 Babel 必须依赖的模块")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D babel-core babel-loader\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据你的需求选择不同的 Plugins 或 Presets")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D babel-preset-env\n")])])])])}],e=a(0),r=Object(e.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=r.exports}}]);