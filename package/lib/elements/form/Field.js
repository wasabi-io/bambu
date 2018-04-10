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
var Field = function (props) {
    var isHorizontal = props.isHorizontal, hasAddons = props.hasAddons, hasAddonsCentered = props.hasAddonsCentered, hasAddonsRight = props.hasAddonsRight, isGrouped = props.isGrouped, isGroupedCentered = props.isGroupedCentered, isGroupedRight = props.isGroupedRight, isGroupedMultiline = props.isGroupedMultiline, isNarrow = props.isNarrow, className = props.className, inputProps = __rest(props, ["isHorizontal", "hasAddons", "hasAddonsCentered", "hasAddonsRight", "isGrouped", "isGroupedCentered", "isGroupedRight", "isGroupedMultiline", "isNarrow", "className"]);
    var classNames = ClassNames(bulma_1.default.field, (_a = {},
        _a["" + bulma_1.default.isHorizontal] = isHorizontal,
        _a["" + bulma_1.default.hasAddons] = hasAddons,
        _a["" + bulma_1.default.hasAddonsCentered] = hasAddonsCentered,
        _a["" + bulma_1.default.hasAddonsRight] = hasAddonsRight,
        _a["" + bulma_1.default.isGrouped] = isGrouped,
        _a["" + bulma_1.default.isGroupedCentered] = isGroupedCentered,
        _a["" + bulma_1.default.isGroupedRight] = isGroupedRight,
        _a["" + bulma_1.default.isGroupedMultiline] = isGroupedMultiline,
        _a["" + bulma_1.default.isNarrow] = isNarrow,
        _a), className);
    return (React.createElement("div", __assign({ className: classNames }, inputProps), props.children));
    var _a;
};
Field.propTypes = __assign({}, HTML_1.default.propTypes, { hasAddons: PropTypes.bool, hasAddonsCentered: PropTypes.bool, hasAddonsRight: PropTypes.bool, isHorizontal: PropTypes.bool, isGrouped: PropTypes.bool, isGroupedCentered: PropTypes.bool, isGroupedMultiline: PropTypes.bool, isGroupedRight: PropTypes.bool, isNarrow: PropTypes.bool });
Field.defaultProps = __assign({}, HTML_1.default.defaultProps, { hasAddons: false, hasAddonsCentered: false, hasAddonsRight: false, isHorizontal: false, isGrouped: false, isGroupedCentered: false, isGroupedMultiline: false, isGroupedRight: false, isNarrow: false });
Field.displayName = 'Field';
exports.default = Field;
