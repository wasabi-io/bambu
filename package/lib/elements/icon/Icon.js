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
var ClassNames = require("classnames");
var PropTypes = require("prop-types");
var React = require("react");
var wasabi_common_1 = require("wasabi-common");
var JSXUtil_1 = require("wasabi-ui/lib/jsx/JSXUtil");
var HTML_1 = require("../../base/html/HTML");
var FaIcon_1 = require("./FaIcon");
var bulma_1 = require("../../bulma");
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.renderIcon = function (icon, size) {
        if (!wasabi_common_1.has(icon)) {
            return null;
        }
        if (typeof icon === 'string') {
            return React.createElement(FaIcon_1.default, { name: icon, size: size });
        }
        if (icon.type) {
            if (JSXUtil_1.default.isJsx(icon)) {
                return icon;
            }
        }
        return React.createElement(FaIcon_1.default, __assign({}, icon));
    };
    Icon.prototype.render = function () {
        var _a = this.props, size = _a.size, icon = _a.icon, className = _a.className, props = __rest(_a, ["size", "icon", "className"]);
        var classNames = ClassNames(bulma_1.default.icon, className);
        return (React.createElement("span", __assign({ className: classNames }, props), Icon.renderIcon(icon, size)));
    };
    Icon.propTypes = __assign({}, HTML_1.default.propTypes, { icon: PropTypes.any, size: PropTypes.oneOf(FaIcon_1.IconSizeValues) });
    Icon.defaultProps = HTML_1.default.defaultProps;
    return Icon;
}(HTML_1.default));
exports.default = Icon;
