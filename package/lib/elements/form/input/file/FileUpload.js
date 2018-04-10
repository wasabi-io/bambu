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
var css_1 = require("../../../../base/css");
var icon_1 = require("../../../icon");
var lib_1 = require("wasabi-common/lib");
var Strings_1 = require("wasabi-common/lib/types/Strings");
var HTML_1 = require("../../../../base/html/HTML");
var ControlLabel_1 = require("../../ControlLabel");
var bulma_1 = require("../../../../bulma");
var FileUpload = function (props) {
    var color = props.color, iSize = props.iSize, className = props.className, icon = props.icon, iconSize = props.iconSize, label = props.label, hasName = props.hasName, isFullwidth = props.isFullwidth, isBoxed = props.isBoxed, alignment = props.alignment, placeholder = props.placeholder, fileUploadProps = __rest(props, ["color", "iSize", "className", "icon", "iconSize", "label", "hasName", "isFullwidth", "isBoxed", "alignment", "placeholder"]);
    var classNames = ClassNames(bulma_1.default.file, bulma_1.default[color], bulma_1.default[iSize], bulma_1.default[alignment], className, (_a = {},
        _a["" + bulma_1.default.hasName] = hasName,
        _a["" + bulma_1.default.isFullwidth] = isFullwidth,
        _a["" + bulma_1.default.isFullwidth] = isFullwidth,
        _a));
    var hasIcon = lib_1.has(icon);
    var hasLabel = Strings_1.default.has(label);
    return (React.createElement("div", { className: classNames },
        React.createElement(ControlLabel_1.default, { className: bulma_1.default.fileLabel },
            React.createElement("input", __assign({ className: bulma_1.default.fileInput }, fileUploadProps, { type: "file" })),
            (hasIcon || hasLabel) && React.createElement("span", { className: bulma_1.default.fileCta },
                hasIcon && React.createElement("span", { className: bulma_1.default.fileIcon },
                    React.createElement(icon_1.Icon, { icon: icon, size: iconSize })),
                hasLabel && React.createElement("span", { className: bulma_1.default.fileLabel },
                    " ",
                    label)),
            hasName && Strings_1.default.has(placeholder) && React.createElement("span", { className: bulma_1.default.fileName }, placeholder))));
    var _a;
};
FileUpload.propTypes = __assign({}, HTML_1.default.propTypes, { alignment: PropTypes.oneOf(css_1.AlignmentValues) });
FileUpload.defaultProps = __assign({}, HTML_1.default.defaultProps, { hasName: false });
FileUpload.displayName = 'FileUpload';
exports.default = FileUpload;
