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
var Pagination = function (props) {
    var previous = props.previous, previousText = props.previousText, next = props.next, nextText = props.nextText, size = props.size, alignment = props.alignment, isRounded = props.isRounded, className = props.className, paginationProps = __rest(props, ["previous", "previousText", "next", "nextText", "size", "alignment", "isRounded", "className"]);
    var classNames = ClassNames(bulma_1.default.pagination, bulma_1.default[size], bulma_1.default[alignment], className, (_a = {}, _a["" + bulma_1.default.isRounded] = isRounded, _a));
    return (React.createElement("nav", __assign({ role: "navigation", "aria-label": "pagination", className: classNames }, paginationProps),
        previous && React.createElement("a", { className: bulma_1.default.paginationPrevious }, previousText),
        next && React.createElement("a", { className: bulma_1.default.paginationNext }, nextText),
        props.children));
    var _a;
};
Pagination.propTypes = __assign({}, HTML_1.default.propTypes);
Pagination.defaultProps = __assign({}, HTML_1.default.defaultProps, { previous: true, previousText: 'Previous', next: true, nextText: 'Next' });
Pagination.displayName = 'Pagination';
exports.default = Pagination;
