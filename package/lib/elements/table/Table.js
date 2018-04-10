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
var Table = function (props) {
    var isBordered = props.isBordered, isStriped = props.isStriped, isHoverable = props.isHoverable, isNarrow = props.isNarrow, isFullwidth = props.isFullwidth, className = props.className, tableProps = __rest(props, ["isBordered", "isStriped", "isHoverable", "isNarrow", "isFullwidth", "className"]);
    var classNames = ClassNames(bulma_1.default.table, className, (_a = {},
        _a["" + bulma_1.default.isBordered] = isBordered,
        _a["" + bulma_1.default.isStriped] = isStriped,
        _a["" + bulma_1.default.isNarrow] = isNarrow,
        _a["" + bulma_1.default.isHoverable] = isHoverable,
        _a["" + bulma_1.default.isFullwidth] = isFullwidth,
        _a));
    return (React.createElement("table", __assign({ className: classNames }, tableProps), props.children));
    var _a;
};
Table.propTypes = __assign({}, HTML_1.default.propTypes, { isBordered: PropTypes.bool, isNarrow: PropTypes.bool, isStriped: PropTypes.bool, isHoverable: PropTypes.bool, isFullwidth: PropTypes.bool });
Table.defaultProps = __assign({}, HTML_1.default.defaultProps, { isBordered: false, isNarrow: false, isStriped: false, isHoverable: false, isFullwidth: false });
Table.displayName = 'Table';
exports.default = Table;
