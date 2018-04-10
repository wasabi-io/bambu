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
require("font-awesome/css/font-awesome.css");
var PropTypes = require("prop-types");
var React = require("react");
var wasabi_common_1 = require("wasabi-common");
var css_1 = require("../../base/css");
var HTML_1 = require("../../base/html/HTML");
var IconSize;
(function (IconSize) {
    IconSize["lg"] = "lg";
    IconSize["x2"] = "2x";
    IconSize["x3"] = "3x";
    IconSize["x4"] = "4x";
    IconSize["x5"] = "5x";
})(IconSize = exports.IconSize || (exports.IconSize = {}));
exports.IconSizeValues = wasabi_common_1.Objects.values(IconSize);
var IconStack;
(function (IconStack) {
    IconStack["x1"] = "x1";
    IconStack["x2"] = "x2";
})(IconStack = exports.IconStack || (exports.IconStack = {}));
var IconEffect;
(function (IconEffect) {
    IconEffect["spin"] = "spin";
    IconEffect["pulse"] = "pulse";
})(IconEffect = exports.IconEffect || (exports.IconEffect = {}));
var FaIcon = /** @class */ (function (_super) {
    __extends(FaIcon, _super);
    function FaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaIcon.iconName = function (name) {
        if (!wasabi_common_1.has(name)) {
            return '';
        }
        var prefix = name.substring(0, 3);
        switch (prefix) {
            case 'fa ':
                return name;
            case 'fa-':
                return 'fa ' + name;
            default:
                return 'fa fa-' + name;
        }
    };
    FaIcon.preEffect = function (effect) {
        return wasabi_common_1.Strings.has(effect) ? "fa-" + effect : undefined;
    };
    FaIcon.preFlip = function (flip) {
        return wasabi_common_1.has(flip) ? "fa-" + flip : undefined;
    };
    FaIcon.prePull = function (pull) {
        return wasabi_common_1.has(pull) ? "fa-pull-" + pull : undefined;
    };
    FaIcon.preRotate = function (rotate) {
        return wasabi_common_1.has(rotate) ? "fa-rotate-" + rotate : undefined;
    };
    FaIcon.preSize = function (size) {
        return wasabi_common_1.Strings.has(size) ? "fa-" + size : undefined;
    };
    FaIcon.preStack = function (stack) {
        return wasabi_common_1.Strings.has(stack) ? "fa-stack-" + stack : undefined;
    };
    FaIcon.prototype.render = function () {
        var _a = this.props, className = _a.className, ariaHidden = _a.ariaHidden, border = _a.border, effect = _a.effect, fixed = _a.fixed, flip = _a.flip, inverse = _a.inverse, isList = _a.isList, name = _a.name, pull = _a.pull, rotate = _a.rotate, size = _a.size, stack = _a.stack, props = __rest(_a, ["className", "ariaHidden", "border", "effect", "fixed", "flip", "inverse", "isList", "name", "pull", "rotate", "size", "stack"]);
        var classNames = ClassNames(FaIcon.preEffect(effect), FaIcon.preFlip(flip), FaIcon.iconName(name), FaIcon.prePull(pull), FaIcon.preRotate(rotate), FaIcon.preSize(size), FaIcon.preStack(stack), {
            'fa-border': border,
            'fa-fw': fixed,
            'fa-inverse': inverse,
            'fa-li': isList,
        }, className);
        return (React.createElement("i", __assign({ className: classNames, "aria-hidden": ariaHidden }, props)));
    };
    FaIcon.propTypes = __assign({}, HTML_1.default.propTypes, { ariaHidden: PropTypes.bool, border: PropTypes.bool, effect: PropTypes.oneOf(wasabi_common_1.Objects.values(IconEffect)), fixed: PropTypes.bool, flip: PropTypes.oneOf(wasabi_common_1.Objects.values(css_1.Orientation)), inverse: PropTypes.bool, isList: PropTypes.bool, name: PropTypes.string.isRequired, pull: PropTypes.oneOf(wasabi_common_1.Objects.values(css_1.Horizontal)), rotate: PropTypes.number, size: PropTypes.oneOf(wasabi_common_1.Objects.values(IconSize)), stack: PropTypes.oneOf(wasabi_common_1.Objects.values(IconStack)) });
    FaIcon.defaultProps = __assign({}, HTML_1.default.defaultProps, { ariaHidden: false, border: false, fixed: false, inverse: false, isList: false });
    return FaIcon;
}(HTML_1.default));
exports.default = FaIcon;
