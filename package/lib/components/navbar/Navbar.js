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
var wasabi_common_1 = require("wasabi-common");
var css_1 = require("../../base/css");
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var navBarArialLabel;
(function (navBarArialLabel) {
    navBarArialLabel["main"] = "main";
    navBarArialLabel["dropdown"] = "dropdown";
})(navBarArialLabel = exports.navBarArialLabel || (exports.navBarArialLabel = {}));
var navBarRole;
(function (navBarRole) {
    navBarRole["navigation"] = "navigation";
})(navBarRole = exports.navBarRole || (exports.navBarRole = {}));
var Navbar = function (props) {
    var color = props.color, arialLabel = props.arialLabel, isFixed = props.isFixed, hasShadow = props.hasShadow, isTransparent = props.isTransparent, className = props.className, navbarProps = __rest(props, ["color", "arialLabel", "isFixed", "hasShadow", "isTransparent", "className"]);
    var fixedClassName = wasabi_common_1.Strings.has(isFixed) ? "isFixed" + wasabi_common_1.Strings.capitalizeFirstLetter(isFixed) : undefined;
    var classNames = ClassNames(bulma_1.default.navbar, bulma_1.default[fixedClassName], (_a = {},
        _a["" + bulma_1.default.hasShadow] = hasShadow,
        _a["" + bulma_1.default.isTransparent] = isTransparent,
        _a["" + bulma_1.default[color]] = color ? true : false,
        _a), className);
    return (React.createElement("nav", __assign({ className: classNames, "aria-label": arialLabel + " navigation" }, navbarProps), props.children));
    var _a;
};
Navbar.propTypes = __assign({}, HTML_1.default.propTypes, { arialLabel: PropTypes.oneOf(wasabi_common_1.Objects.values(navBarArialLabel)), color: PropTypes.oneOf(css_1.colorValues), isFixed: PropTypes.oneOf(css_1.verticalValues), hasShadow: PropTypes.bool, role: PropTypes.oneOf(wasabi_common_1.Objects.values(navBarRole)), isTransparent: PropTypes.bool });
Navbar.defaultProps = __assign({}, HTML_1.default.defaultProps, { arialLabel: 'main', hasShadow: false, role: navBarRole.navigation, isTransparent: false });
Navbar.displayName = 'Navbar';
exports.default = Navbar;
