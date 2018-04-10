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
var PropTypes = require("prop-types");
var React = require("react");
var wasabi_common_1 = require("wasabi-common");
var Stateless_1 = require("wasabi-ui/lib/Stateless");
var MenuLabel_1 = require("./MenuLabel");
var MenuLinkGen_1 = require("./MenuLinkGen");
var MenuList_1 = require("./MenuList");
var MenuGen = /** @class */ (function (_super) {
    __extends(MenuGen, _super);
    function MenuGen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuGen.prototype.render = function () {
        var elements = [];
        for (var _i = 0, _a = this.props.routes; _i < _a.length; _i++) {
            var route = _a[_i];
            var routes = route.routes, label = route.label, props = __rest(route, ["routes", "label"]);
            elements.push(React.createElement(MenuLabel_1.default, __assign({}, props), label));
            elements.push(React.createElement(MenuList_1.default, null, MenuLinkGen_1.default.render(routes, {
                hierarchical: wasabi_common_1.getOrDefault(route.hierarchical, this.props.hierarchical),
                href: "" + this.props.prefix + route.href
            })));
        }
        return elements;
    };
    MenuGen.propTypes = {
        hierarchical: PropTypes.bool,
        prefix: PropTypes.string,
        routes: PropTypes.object.isRequired
    };
    MenuGen.defaultProps = {
        hierarchical: false,
        prefix: '#',
    };
    return MenuGen;
}(Stateless_1.default));
exports.default = MenuGen;
