"use strict";
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
var PaginationEllipsis = function (props) {
    var className = props.className, paginationEllipsisProps = __rest(props, ["className"]);
    var classNames = ClassNames(bulma_1.default.paginationEllipsis, className);
    return (React.createElement("li", null,
        React.createElement("span", { className: classNames }, "\u2026")));
};
PaginationEllipsis.propTypes = HTML_1.default.propTypes;
PaginationEllipsis.defaultProps = HTML_1.default.defaultProps;
PaginationEllipsis.displayName = 'PaginationEllipsis';
exports.default = PaginationEllipsis;
