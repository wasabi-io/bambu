"use strict";
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
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var NavbarMenu = function (props) {
    var isActive = props.isActive, className = props.className, navbarMenuProps = __rest(props, ["isActive", "className"]);
    var classNames = ClassNames(bulma_1.default.navbarMenu, (_a = {},
        _a["" + bulma_1.default.isActive] = isActive,
        _a), className);
    return (React.createElement("div", __assign({ className: classNames }, navbarMenuProps), props.children));
    var _a;
};
NavbarMenu.propTypes = __assign({}, HTML_1.default.propTypes, { isActive: PropTypes.bool });
NavbarMenu.defaultProps = __assign({}, HTML_1.default.defaultProps, { isActive: false });
NavbarMenu.displayName = 'NavbarMenu';
exports.default = NavbarMenu;
