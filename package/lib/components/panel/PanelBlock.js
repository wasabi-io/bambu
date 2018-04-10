"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bulma_1 = require("../../bulma");
var HTML_1 = require("../../base/html/HTML");
var icon_1 = require("../../elements/icon");
/**
 * Card parent elements.
 */
var PanelBlock = /** @class */ (function (_super) {
    __extends(PanelBlock, _super);
    function PanelBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBlock.renderIcon = function (icon, iconSize, iconParent) {
        if (!wasabi_common_1.has(icon)) {
            return null;
        }
        var className = iconParent.className, iconParentProps = __rest(iconParent, ["className"]);
        var classNames = ClassNames([bulma_1.default.panelIcon, className]);
        return (React.createElement(icon_1.Icon, __assign({ className: classNames, icon: icon, size: iconSize }, iconParentProps)));
    };
    /**
     * renders Card element.
     * @returns {JSX.Element}
     */
    PanelBlock.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, icon = _a.icon, iconSize = _a.iconSize, iconParent = _a.iconParent, className = _a.className, inputProps = __rest(_a, ["isActive", "icon", "iconSize", "iconParent", "className"]);
        var classNames = ClassNames([
            bulma_1.default.panelBlock,
            isActive ? bulma_1.default.isActive : undefined,
            className
        ]);
        return (React.createElement("span", __assign({ className: classNames }, inputProps),
            PanelBlock.renderIcon(icon, iconSize, iconParent),
            this.props.children));
    };
    /**
     * Desribe propTypes
     */
    PanelBlock.propTypes = __assign({}, HTML_1.default.propTypes, { icon: PropTypes.any, iconParent: {}, iconSize: PropTypes.oneOf(icon_1.IconSizeValues), isActive: PropTypes.bool });
    /**
     * default props types for Card Element.
     * @type {{className: string; style: {}}}
     */
    PanelBlock.defaultProps = __assign({}, HTML_1.default.defaultProps, { isActive: false });
    return PanelBlock;
}(HTML_1.default));
exports.default = PanelBlock;
