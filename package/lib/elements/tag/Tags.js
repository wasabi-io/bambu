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
var Tags = function (props) {
    var hasAddons = props.hasAddons, className = props.className, tagsProps = __rest(props, ["hasAddons", "className"]);
    var classNames = ClassNames(bulma_1.default.tags, (_a = {},
        _a["" + bulma_1.default.hasAddons] = hasAddons,
        _a), className);
    return (React.createElement("div", __assign({ className: classNames }, tagsProps), props.children));
    var _a;
};
Tags.propTypes = __assign({}, HTML_1.default.propTypes, { color: PropTypes.oneOf(css_1.colorValues) });
Tags.defaultProps = HTML_1.default.defaultProps;
Tags.displayName = 'Tag';
exports.default = Tags;
