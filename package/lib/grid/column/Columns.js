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
var Objects_1 = require("wasabi-common/lib/types/Objects");
var css_1 = require("../../base/css");
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var Columns = function (props) {
    var responsive = props.responsive, isMultiline = props.isMultiline, isVcentered = props.isVcentered, isGapless = props.isGapless, className = props.className, inputProps = __rest(props, ["responsive", "isMultiline", "isVcentered", "isGapless", "className"]);
    var classNames = ClassNames(bulma_1.default.columns, bulma_1.default[responsive], (_a = {},
        _a["" + bulma_1.default.isMultiline] = isMultiline,
        _a["" + bulma_1.default.isVcentered] = isVcentered,
        _a["" + bulma_1.default.isGapless] = isGapless,
        _a), className);
    return (React.createElement("div", __assign({ className: classNames }, inputProps), props.children));
    var _a;
};
Columns.propTypes = __assign({}, HTML_1.default.propTypes, { isGapless: PropTypes.bool, isMultiline: PropTypes.bool, responsive: PropTypes.oneOf(Objects_1.default.values(css_1.Responsive)) });
Columns.defaultProps = __assign({}, HTML_1.default.defaultProps, { isGapless: false, isMultiline: false });
Columns.displayName = 'Columns';
exports.default = Columns;
