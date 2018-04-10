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
var BreadCrumbSeperator;
(function (BreadCrumbSeperator) {
    BreadCrumbSeperator["arrow"] = "hasArrowSeparator";
    BreadCrumbSeperator["bullet"] = "hasBulletSeparator";
    BreadCrumbSeperator["dot"] = "hasDotSeparator";
    BreadCrumbSeperator["succeeds"] = "hasSucceedsSeparator";
})(BreadCrumbSeperator = exports.BreadCrumbSeperator || (exports.BreadCrumbSeperator = {}));
var BreadCrumb = function (props) {
    var alignment = props.alignment, size = props.size, separator = props.separator, className = props.className, breadCrumbProps = __rest(props, ["alignment", "size", "separator", "className"]);
    var classNames = ClassNames(bulma_1.default.breadcrumb, bulma_1.default[alignment], bulma_1.default[separator], bulma_1.default[size], className);
    return (React.createElement("nav", __assign({ className: classNames }, breadCrumbProps),
        React.createElement("ul", null, props.children)));
};
BreadCrumb.propTypes = __assign({}, HTML_1.default.propTypes, { alignment: PropTypes.oneOf(css_1.AlignmentValues), separator: PropTypes.oneOf(Objects_1.default.values(BreadCrumbSeperator)), size: PropTypes.oneOf(css_1.SizeValues) });
BreadCrumb.defaultProps = __assign({}, HTML_1.default.defaultProps);
BreadCrumb.displayName = 'BreadCrumb';
exports.default = BreadCrumb;
