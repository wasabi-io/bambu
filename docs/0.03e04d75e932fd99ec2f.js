webpackJsonp([0],{

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst StatelessComponent_1 = __webpack_require__(443);\nclass Overview extends StatelessComponent_1.default {\n    getNavigations() {\n        return [\n            {\n                text: 'Start',\n                path: 'start',\n                module: 'Start.tsx'\n            },\n            {\n                text: 'Customize',\n                path: 'customize',\n                module: 'Customize.tsx'\n            }\n        ];\n    }\n    getModuleName() {\n        return 'overview';\n    }\n}\nexports.default = Overview;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/modules/overview/index.tsx\n// module id = 36\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/modules/overview/index.tsx?");

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(0);\nconst react_router_dom_1 = __webpack_require__(31);\nconst tabs_1 = __webpack_require__(101);\nconst container_1 = __webpack_require__(100);\nconst Stateless_1 = __webpack_require__(13);\nconst AsyncComponent_1 = __webpack_require__(99);\nconst LocationStore_1 = __webpack_require__(74);\nclass StatelessComponent extends Stateless_1.default {\n    render() {\n        const match = this.props.match;\n        const paths = LocationStore_1.default.getPaths();\n        const tabs = [];\n        const routes = [];\n        for (const navigaion of this.getNavigations()) {\n            const path = `${match.url}/${navigaion.path}`;\n            const module = navigaion.module;\n            tabs.push(React.createElement(tabs_1.Tab, { key: navigaion.path, isActive: paths[1] === navigaion.path },\n                React.createElement(react_router_dom_1.Link, { style: { borderBottomWidth: 3 }, to: path }, navigaion.text)));\n            const COMPONENT = AsyncComponent_1.default(() => this.getModule(module).then(module => module.default));\n            routes.push(React.createElement(react_router_dom_1.Route, { key: path, path: path, component: COMPONENT }));\n        }\n        return (React.createElement(container_1.Container, null,\n            React.createElement(container_1.Container, null,\n                React.createElement(tabs_1.Tabs, null, tabs)),\n            routes));\n    }\n    getModule(module) {\n        return __webpack_require__(102)(`./${this.getModuleName()}/${module}`);\n    }\n}\nexports.default = StatelessComponent;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/StatelessComponent.tsx\n// module id = 443\n// module chunks = 0 1 2 3 4\n\n//# sourceURL=webpack:///./app/StatelessComponent.tsx?");

/***/ })

});