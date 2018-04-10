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
var React = require("react");
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var ModalCardHeader = function (props) {
    var className = props.className, modalCardHeaderProps = __rest(props, ["className"]);
    var classNames = ClassNames(bulma_1.default.modalCardHead, className);
    return (React.createElement("header", __assign({ className: classNames }, modalCardHeaderProps),
        props.header && React.createElement("p", { className: bulma_1.default.modalCardTitle }, props.header),
        props.children));
};
ModalCardHeader.propTypes = __assign({}, HTML_1.default.propTypes);
ModalCardHeader.defaultProps = __assign({}, HTML_1.default.defaultProps);
ModalCardHeader.displayName = 'ModalCardHeader';
exports.default = ModalCardHeader;
