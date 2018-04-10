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
var PaginationLink = function (props) {
    var page = props.page, isCurrent = props.isCurrent, className = props.className, paginationLinkProps = __rest(props, ["page", "isCurrent", "className"]);
    var classNames = ClassNames(bulma_1.default.paginationLink, className, (_a = {},
        _a["" + bulma_1.default.isCurrent] = isCurrent,
        _a));
    return (React.createElement("li", null,
        React.createElement("a", { className: classNames, "aria-label": "Goto Page " + page }, page)));
    var _a;
};
PaginationLink.propTypes = __assign({}, HTML_1.default.propTypes, { isCurrent: PropTypes.bool, page: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired });
PaginationLink.defaultProps = __assign({}, HTML_1.default.defaultProps, { isCurrent: false });
PaginationLink.displayName = 'PaginationLink';
exports.default = PaginationLink;
