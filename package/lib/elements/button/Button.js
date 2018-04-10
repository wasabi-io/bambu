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
var Icon_1 = require("../icon/Icon");
var bulma_1 = require("../../bulma");
var ButtonTagNames;
(function (ButtonTagNames) {
    ButtonTagNames["a"] = "a";
    ButtonTagNames["button"] = "button";
    ButtonTagNames["input"] = "input";
})(ButtonTagNames = exports.ButtonTagNames || (exports.ButtonTagNames = {}));
var Button = function (props) {
    var tagName = props.tagName, isOutlined = props.isOutlined, isRounded = props.isRounded, isInverted = props.isInverted, icon = props.icon, state = props.state, color = props.color, size = props.size, className = props.className, children = props.children, disabled = props.disabled, onClick = props.onClick, buttonProps = __rest(props, ["tagName", "isOutlined", "isRounded", "isInverted", "icon", "state", "color", "size", "className", "children", "disabled", "onClick"]);
    var classNames = ClassNames(bulma_1.default.button, bulma_1.default[state], bulma_1.default[color], bulma_1.default[size], (_a = {},
        _a["" + bulma_1.default.isOutlined] = isOutlined,
        _a["" + bulma_1.default.isInverted] = isInverted,
        _a["" + bulma_1.default.isRounded] = isRounded,
        _a), className);
    if (tagName === ButtonTagNames.input) {
        return React.createElement(tagName, __assign({ onClick: onClick,
            disabled: disabled, className: classNames }, buttonProps));
    }
    return React.createElement(tagName, __assign({ disabled: disabled, onClick: disabled ? null : onClick, className: classNames }, buttonProps), icon && React.createElement(Icon_1.default, { icon: icon, size: size }), children);
    var _a;
};
Button.propTypes = __assign({}, HTML_1.default.propTypes, { tagName: PropTypes.oneOf(Objects_1.default.values(ButtonTagNames)), color: PropTypes.oneOf(css_1.colorValues), size: PropTypes.oneOf(css_1.SizeValues), state: PropTypes.oneOf(css_1.StateValues) });
Button.defaultProps = __assign({}, HTML_1.default.defaultProps, { tagName: 'a' });
Button.displayName = 'Button';
exports.default = Button;
