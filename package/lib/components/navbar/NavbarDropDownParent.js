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
var Strings_1 = require("wasabi-common/lib/types/Strings");
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var ShowingState;
(function (ShowingState) {
    ShowingState["active"] = "active";
    ShowingState["hoverable"] = "hoverable";
})(ShowingState = exports.ShowingState || (exports.ShowingState = {}));
var NavbarDropdownParent = function (props) {
    var active = props.active, up = props.up, state = props.state, className = props.className, inputProps = __rest(props, ["active", "up", "state", "className"]);
    var showSateClassName = Strings_1.default.has(state) ? bulma_1.default["is" + Strings_1.default.capitalizeFirstLetter(state)] : undefined;
    var classNames = ClassNames([
        bulma_1.default.navbarItem,
        bulma_1.default.hasDropdown,
        active ? bulma_1.default.isActive : undefined,
        up ? bulma_1.default.hasDropdownUp : undefined,
        showSateClassName,
        className
    ]);
    return (React.createElement("div", __assign({ className: classNames }, inputProps), props.children));
};
NavbarDropdownParent.propTypes = __assign({}, HTML_1.default.propTypes, { active: PropTypes.bool, up: PropTypes.bool });
NavbarDropdownParent.defaultProps = __assign({}, HTML_1.default.defaultProps, { active: false, up: false });
NavbarDropdownParent.displayName = 'NavbarDropdownParent';
exports.default = NavbarDropdownParent;
