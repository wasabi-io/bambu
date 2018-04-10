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
var Modal = function (props) {
    var isActive = props.isActive, hasCloseButton = props.hasCloseButton, onCloseButtonClick = props.onCloseButtonClick, buttonSize = props.buttonSize, className = props.className, modalProps = __rest(props, ["isActive", "hasCloseButton", "onCloseButtonClick", "buttonSize", "className"]);
    var classNames = ClassNames(bulma_1.default.modal, (_a = {},
        _a["" + bulma_1.default.isActive] = isActive,
        _a), className);
    return React.createElement("div", __assign({ className: classNames }, modalProps),
        React.createElement("div", { className: bulma_1.default.modalBackground }),
        React.createElement("div", { className: bulma_1.default.modalContent }, props.children),
        hasCloseButton && React.createElement("button", { onClick: onCloseButtonClick, className: ClassNames(bulma_1.default.modalClose, bulma_1.default[buttonSize]), "aria-label": "close" }));
    var _a;
};
Modal.propTypes = __assign({}, HTML_1.default.propTypes, { buttonSize: PropTypes.oneOf(css_1.SizeValues), hasCloseButton: PropTypes.bool, onCloseButtonClick: PropTypes.func });
Modal.defaultProps = __assign({}, HTML_1.default.defaultProps, { buttonSize: 'isLarge', hasCloseButton: true });
Modal.displayName = 'Modal';
exports.default = Modal;
