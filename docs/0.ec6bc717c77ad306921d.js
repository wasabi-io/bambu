webpackJsonp([0],{

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StatelessComponent_1 = __webpack_require__(443);
class Overview extends StatelessComponent_1.default {
    getNavigations() {
        return [
            {
                text: 'Start',
                path: 'start',
                module: 'Start.tsx'
            },
            {
                text: 'Customize',
                path: 'customize',
                module: 'Customize.tsx'
            }
        ];
    }
    getModuleName() {
        return 'overview';
    }
}
exports.default = Overview;


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(31);
const tabs_1 = __webpack_require__(101);
const container_1 = __webpack_require__(100);
const Stateless_1 = __webpack_require__(13);
const AsyncComponent_1 = __webpack_require__(99);
const LocationStore_1 = __webpack_require__(74);
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
        return __webpack_require__(102)(`./${this.getModuleName()}/${module}`);
    }
}
exports.default = StatelessComponent;


/***/ })

});