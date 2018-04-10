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
var HTML_1 = require("../../base/html/HTML");
var bulma_1 = require("../../bulma");
var ImageSize;
(function (ImageSize) {
    ImageSize["is16X16"] = "is16X16";
    ImageSize["is24X24"] = "is24X24";
    ImageSize["is32X32"] = "is32X32";
    ImageSize["is48X48"] = "is48X48";
    ImageSize["is64X64"] = "is64X64";
    ImageSize["is96X96"] = "is96X96";
    ImageSize["is128X128"] = "is128X128";
})(ImageSize = exports.ImageSize || (exports.ImageSize = {}));
var ImageRatio;
(function (ImageRatio) {
    ImageRatio["isSquare"] = "isSquare";
    ImageRatio["is1By1"] = "is1By1";
    ImageRatio["is4By3"] = "is4By3";
    ImageRatio["is3By2"] = "is3By2";
    ImageRatio["is16By9"] = "is16By9";
    ImageRatio["is2By1"] = "is2By1";
})(ImageRatio = exports.ImageRatio || (exports.ImageRatio = {}));
var Image = function (props) {
    var size = props.size, ratio = props.ratio, pClassName = props.pClassName, pStyle = props.pStyle, inputProps = __rest(props, ["size", "ratio", "pClassName", "pStyle"]);
    var classNames = ClassNames(bulma_1.default.image, bulma_1.default[size], bulma_1.default[ratio], pClassName);
    return (React.createElement("figure", { className: classNames, style: pStyle },
        React.createElement("img", __assign({}, inputProps))));
};
Image.propTypes = __assign({}, HTML_1.default.propTypes, { alt: PropTypes.string, pClassName: PropTypes.string, pStyle: PropTypes.object, ratio: PropTypes.oneOf(Objects_1.default.values(ImageRatio)), size: PropTypes.oneOf(Objects_1.default.values(ImageSize)), src: PropTypes.string.isRequired });
Image.defaultProps = HTML_1.default.defaultProps;
Image.displayName = 'Image';
exports.default = Image;
