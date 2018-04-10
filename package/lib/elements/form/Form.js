"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HTML_1 = require("../../base/html/HTML");
var Form = function (props) {
    return (React.createElement("form", __assign({}, props), props.children));
};
Form.propTypes = HTML_1.default.propTypes;
Form.defaultProps = HTML_1.default.defaultProps;
Form.displayName = 'Form';
exports.default = Form;
