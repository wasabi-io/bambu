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
var Container = function (props) {
    var isFluid = props.isFluid, isFullhd = props.isFullhd, isWidescreen = props.isWidescreen, isTextCentered = props.isTextCentered, className = props.className, inputProps = __rest(props, ["isFluid", "isFullhd", "isWidescreen", "isTextCentered", "className"]);
    var classNames = ClassNames(bulma_1.default.container, (_a = {},
        _a["" + bulma_1.default.isFluid] = isFluid,
        _a["" + bulma_1.default.isFullhd] = isFullhd,
        _a["" + bulma_1.default.isWidescreen] = isWidescreen,
        _a["" + bulma_1.default.isTextCentered] = isTextCentered,
        _a), className);
    return (React.createElement("div", __assign({ className: classNames }, inputProps), props.children));
    var _a;
};
Container.propTypes = __assign({}, HTML_1.default.propTypes, { isFluid: PropTypes.bool, isFullhd: PropTypes.bool, isTextCentered: PropTypes.bool, isWidescreen: PropTypes.bool });
Container.defaultProps = __assign({}, HTML_1.default.defaultProps, { isFluid: false, isFullhd: false, isTextCentered: false, isWidescreen: false });
Container.displayName = 'Container';
exports.default = Container;
