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
var Level = function (props) {
    var responsive = props.responsive, className = props.className, levelProps = __rest(props, ["responsive", "className"]);
    var classNames = ClassNames(bulma_1.default.level, bulma_1.default[responsive], className);
    return (React.createElement("nav", __assign({ className: classNames }, levelProps), props.children));
};
Level.propTypes = __assign({}, HTML_1.default.propTypes, { responsive: PropTypes.oneOf(css_1.ResponsiveValues) });
Level.defaultProps = HTML_1.default.defaultProps;
Level.displayName = 'Level';
exports.default = Level;
