webpackJsonp([2],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(31);
const tabs_1 = __webpack_require__(97);
const container_1 = __webpack_require__(96);
const Stateless_1 = __webpack_require__(13);
const AsyncComponent_1 = __webpack_require__(95);
const LocationStore_1 = __webpack_require__(71);
class StatelessComponent extends Stateless_1.default {
    render() {
        const match = this.props.match;
        const paths = LocationStore_1.default.getPaths();
        const tabs = [];
        const routes = [];
        for (const navigaion of this.getNavigations()) {
            const path = `${match.url}/${navigaion.path}`;
            const module = navigaion.module;
            tabs.push(React.createElement(tabs_1.Tab, { key: navigaion.path, isActive: paths[1] === navigaion.path },
                React.createElement(react_router_dom_1.Link, { style: { borderBottomWidth: 3 }, to: path }, navigaion.text)));
            const COMPONENT = AsyncComponent_1.default(() => this.getModule(module).then(module => module.default));
            routes.push(React.createElement(react_router_dom_1.Route, { key: path, path: path, component: COMPONENT }));
        }
        return (React.createElement(container_1.Container, null,
            React.createElement(container_1.Container, null,
                React.createElement(tabs_1.Tabs, null, tabs)),
            routes));
    }
    getModule(module) {
        return __webpack_require__(98)(`./${this.getModuleName()}/${module}`);
    }
}
exports.default = StatelessComponent;


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StatelessComponent_1 = __webpack_require__(223);
class Columns extends StatelessComponent_1.default {
    getNavigations() {
        return [
            {
                text: 'Basics',
                path: 'basics',
                module: 'Basics.tsx'
            }
        ];
    }
    getModuleName() {
        return 'columns';
    }
}
exports.default = Columns;


/***/ })

});
//# sourceMappingURL=2.a075031a2b65cce223f8.js.map