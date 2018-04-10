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
var HTML_1 = require("../../../../base/html/HTML");
var bulma_1 = require("../../../../bulma");
var Select = function (props) {
    var color = props.color, iSize = props.iSize, state = props.state, className = props.className, name = props.name, value = props.value, size = props.size, multiple = props.multiple, autoFocus = props.autoFocus, disabled = props.disabled, form = props.form, onChange = props.onChange, inputProps = __rest(props, ["color", "iSize", "state", "className", "name", "value", "size", "multiple", "autoFocus", "disabled", "form", "onChange"]);
    var classNames = ClassNames((_a = {},
        _a["" + bulma_1.default.isMultiple] = multiple,
        _a), bulma_1.default.select, bulma_1.default[color], bulma_1.default[iSize], bulma_1.default[state], className);
    return (React.createElement("div", __assign({ className: classNames }, inputProps),
        React.createElement("select", { name: name, multiple: multiple, form: form, autoFocus: autoFocus, disabled: disabled, size: size, value: value, onChange: onChange }, props.children)));
    var _a;
};
Select.propTypes = __assign({}, HTML_1.default.propTypes, { color: PropTypes.oneOf(css_1.colorValues), size: PropTypes.oneOf(css_1.SizeValues), state: PropTypes.oneOf(css_1.StateValues) });
Select.defaultProps = __assign({}, HTML_1.default.defaultProps, { multiple: false });
Select.displayName = 'Select';
exports.default = Select;
