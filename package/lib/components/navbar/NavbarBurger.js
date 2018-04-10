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
var css_1 = require("../../base/css");
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var NavbarBurger = function (props) {
    var tagName = props.tagName, isActive = props.isActive, color = props.color, className = props.className, dataTarget = props.dataTarget, inputProps = __rest(props, ["tagName", "isActive", "color", "className", "dataTarget"]);
    var classNames = ClassNames([
        bulma_1.default.navbarBurger,
        isActive ? bulma_1.default.isActive : undefined,
        color ? bulma_1.default[color] : undefined,
        className
    ]);
    inputProps.className = classNames;
    return React.createElement(tagName, inputProps, [props.children, React.createElement("span", { key: "navbar-burger-span-0" }), React.createElement("span", { key: "navbar-burger-span-1" }), React.createElement("span", { key: "navbar-burger-span-2" })]);
};
NavbarBurger.propTypes = __assign({}, HTML_1.default.propTypes, { color: PropTypes.oneOf(css_1.colorValues), isActive: PropTypes.bool, tagName: PropTypes.string });
NavbarBurger.defaultProps = __assign({}, HTML_1.default.defaultProps, { isActive: false, tagName: 'button' });
NavbarBurger.displayName = 'NavbarBurger';
exports.default = NavbarBurger;
