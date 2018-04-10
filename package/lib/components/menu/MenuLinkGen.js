"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var wasabi_common_1 = require("wasabi-common");
var Collection_1 = require("wasabi-common/lib/collection/Collection");
var Arrays_1 = require("wasabi-common/lib/types/Arrays");
var Stateless_1 = require("wasabi-ui/lib/Stateless");
var MenuLink_1 = require("./MenuLink");
var MenuLinkGen = /** @class */ (function (_super) {
    __extends(MenuLinkGen, _super);
    function MenuLinkGen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLinkGen.render = function (routes, parent) {
        if (!Arrays_1.default.has(routes)) {
            return null;
        }
        if (parent) {
            var elements = [];
            for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
                var route = routes_1[_i];
                var hierarchical = wasabi_common_1.getOrDefault(route.hierarchical, parent.hierarchical);
                var href = hierarchical ? parent.href + '' + route.href : route.href;
                elements.push(React.createElement(MenuLinkGen, __assign({}, route, { hierarchical: hierarchical, href: href })));
            }
            return elements;
        }
        return Collection_1.default.mapArray(routes, function (link) { return React.createElement(MenuLinkGen, __assign({}, link)); });
    };
    MenuLinkGen.prototype.render = function () {
        var _a = this.props, name = _a.name, hierarchical = _a.hierarchical, routes = _a.routes, props = __rest(_a, ["name", "hierarchical", "routes"]);
        return (React.createElement("li", null,
            React.createElement(MenuLink_1.default, __assign({}, props), name),
            MenuLinkGen.render(routes, this.props)));
    };
    return MenuLinkGen;
}(Stateless_1.default));
exports.default = MenuLinkGen;
