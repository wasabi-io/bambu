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
var ControlLabel_1 = require("../../elements/form/ControlLabel");
var Objects_1 = require("wasabi-common/lib/types/Objects");
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var FieldLabelSize;
(function (FieldLabelSize) {
    FieldLabelSize["normal"] = "isNormal";
    FieldLabelSize["small"] = "isSmall";
    FieldLabelSize["medium"] = "isMedium";
    FieldLabelSize["large"] = "isLarge";
})(FieldLabelSize = exports.FieldLabelSize || (exports.FieldLabelSize = {}));
var FieldLabel = function (props) {
    var size = props.size, className = props.className, labelProps = props.labelProps, inputProps = __rest(props, ["size", "className", "labelProps"]);
    var classNames = ClassNames([
        bulma_1.default.fieldLabel,
        bulma_1.default[size],
        className
    ]);
    return (React.createElement("div", __assign({ className: classNames }, inputProps),
        React.createElement(ControlLabel_1.default, __assign({}, labelProps), props.children)));
};
FieldLabel.propTypes = __assign({}, HTML_1.default.propTypes, { size: PropTypes.oneOf(Objects_1.default.values(FieldLabelSize)) });
FieldLabel.defaultProps = __assign({}, HTML_1.default.defaultProps, { size: FieldLabelSize.normal });
FieldLabel.displayName = 'FieldLabel';
exports.default = FieldLabel;
