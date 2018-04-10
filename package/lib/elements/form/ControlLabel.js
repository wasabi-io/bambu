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
var ControlLabel = function (props) {
    var size = props.size, className = props.className, isRadio = props.isRadio, inputProps = __rest(props, ["size", "className", "isRadio"]);
    var classNames = ClassNames((_a = {},
        _a["" + bulma_1.default.label] = !isRadio,
        _a["" + bulma_1.default.radio] = isRadio,
        _a), bulma_1.default[size], className);
    return (React.createElement("label", __assign({ className: classNames }, inputProps), props.children));
    var _a;
};
ControlLabel.propTypes = __assign({}, HTML_1.default.propTypes, { size: PropTypes.oneOf(css_1.SizeValues) });
ControlLabel.defaultProps = __assign({}, HTML_1.default.defaultProps, { isRadio: false });
ControlLabel.displayName = 'ControlLabel';
exports.default = ControlLabel;
