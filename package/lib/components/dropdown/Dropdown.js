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
var React = require("react");
var Stateless_1 = require("wasabi-ui/lib/Stateless");
var bulma_1 = require("../../bulma");
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.onDropDown = _this.onDropDown.bind(_this);
        return _this;
    }
    Dropdown.prototype.onDropDown = function (e) {
        e.stopPropagation();
        this.dropdownRef.classList.toggle(bulma_1.default.isActive);
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, isHoverable = _a.isHoverable, isRight = _a.isRight, isUp = _a.isUp, dropdownProps = __rest(_a, ["children", "className", "isActive", "isHoverable", "isRight", "isUp"]);
        var classNames = ClassNames([
            bulma_1.default.dropdown,
            isActive ? bulma_1.default.isActive : undefined,
            isHoverable ? bulma_1.default.isHoverable : undefined,
            isRight ? bulma_1.default.isRight : undefined,
            isUp ? bulma_1.default.isUp : undefined,
            className
        ]);
        return (React.createElement("div", __assign({ className: classNames }, dropdownProps, { ref: function (ref) { return _this.dropdownRef = ref; }, onClick: this.onDropDown }), children));
    };
    ;
    return Dropdown;
}(Stateless_1.default));
exports.default = Dropdown;
