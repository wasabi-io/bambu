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
var Message = function (props) {
    var children = props.children, className = props.className, color = props.color, size = props.size, ownProps = __rest(props, ["children", "className", "color", "size"]);
    var classNames = ClassNames(bulma_1.default.message, bulma_1.default[color], bulma_1.default[size], className);
    return (React.createElement("article", __assign({ className: classNames }, ownProps), children));
};
Message.propTypes = __assign({}, HTML_1.default.propTypes, { color: PropTypes.string });
Message.defaultProps = __assign({}, HTML_1.default.defaultProps);
Message.displayName = 'Message';
exports.default = Message;
