webpackJsonp([2],{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(31);
const tabs_1 = __webpack_require__(99);
const container_1 = __webpack_require__(98);
const Stateless_1 = __webpack_require__(13);
const AsyncComponent_1 = __webpack_require__(97);
const LocationStore_1 = __webpack_require__(73);
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
        return __webpack_require__(100)(`./${this.getModuleName()}/${module}`);
    }
}
exports.default = StatelessComponent;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StatelessComponent_1 = __webpack_require__(239);
class Elements extends StatelessComponent_1.default {
    getNavigations() {
        return [
            {
                text: 'Box',
                path: 'box',
                module: 'Box.tsx'
            },
            {
                text: 'Button',
                path: 'button',
                module: 'Button.tsx'
            }
        ];
    }
    getModuleName() {
        return 'elements';
    }
}
exports.default = Elements;


/***/ })

});
//# sourceMappingURL=2.e085ebd16131872de349.js.map