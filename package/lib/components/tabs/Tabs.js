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
var tabsStyle;
(function (tabsStyle) {
    tabsStyle["boxed"] = "isBoxed";
    tabsStyle["toggle"] = "isToggle";
})(tabsStyle = exports.tabsStyle || (exports.tabsStyle = {}));
var Tabs = function (props) {
    var isFullwidth = props.isFullwidth, alignment = props.alignment, size = props.size, tabStyle = props.tabStyle, className = props.className, inputProps = __rest(props, ["isFullwidth", "alignment", "size", "tabStyle", "className"]);
    var classNames = ClassNames(bulma_1.default.tabs, bulma_1.default[alignment], bulma_1.default[size], bulma_1.default[tabStyle], (_a = {},
        _a["" + bulma_1.default.isFullwidth] = isFullwidth,
        _a), className);
    return (React.createElement("div", __assign({ className: classNames }, inputProps),
        React.createElement("ul", null, props.children)));
    var _a;
};
Tabs.propTypes = __assign({}, HTML_1.default.propTypes, { alignment: PropTypes.oneOf(css_1.AlignmentValues), isFullwidth: PropTypes.bool, size: PropTypes.oneOf(css_1.SizeValues), tabStyle: PropTypes.oneOf(Objects_1.default.values(tabsStyle)) });
Tabs.defaultProps = __assign({}, HTML_1.default.defaultProps, { isFullwidth: false });
Tabs.displayName = 'Tabs';
exports.default = Tabs;
