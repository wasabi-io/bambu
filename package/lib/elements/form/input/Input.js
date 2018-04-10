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
var css_1 = require("../../../base/css");
var state_1 = require("../../../base/css/state");
var HTML_1 = require("../../../base/html/HTML");
var bulma_1 = require("../../../bulma");
var Input = function (props) {
    var color = props.color, iSize = props.iSize, state = props.state, type = props.type, className = props.className, inputProps = __rest(props, ["color", "iSize", "state", "type", "className"]);
    var typeClass = (!type || type === 'text' || type === 'password') ? 'input' : type;
    var classNames = ClassNames(bulma_1.default[typeClass], bulma_1.default[color], bulma_1.default[iSize], bulma_1.default[state], className);
    return (React.createElement("input", __assign({ type: type, className: classNames }, inputProps), props.children));
};
Input.propTypes = __assign({}, HTML_1.default.propTypes, { color: PropTypes.oneOf(css_1.colorValues), iSize: PropTypes.oneOf(css_1.SizeValues), state: PropTypes.oneOf(state_1.StateValues) });
Input.defaultProps = HTML_1.default.defaultProps;
Input.displayName = 'Input';
exports.default = Input;
