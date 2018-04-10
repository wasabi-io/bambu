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
var bulma_1 = require("../../bulma");
var Icon_1 = require("../../elements/icon/Icon");
var HTML_1 = require("../../base/html/HTML");
var CardHeaderIcon = function (props) {
    var icon = props.icon, className = props.className, inputProps = __rest(props, ["icon", "className"]);
    var classNames = ClassNames([
        bulma_1.default.cardHeaderIcon,
        className
    ]);
    return (React.createElement("a", __assign({ className: classNames }, inputProps),
        icon && React.createElement(Icon_1.default, { icon: icon }),
        props.children));
};
CardHeaderIcon.propTypes = __assign({}, HTML_1.default.propTypes, { icon: PropTypes.any });
CardHeaderIcon.defaultProps = __assign({}, HTML_1.default.defaultProps);
CardHeaderIcon.displayName = 'CardHeaderIcon';
exports.default = CardHeaderIcon;
