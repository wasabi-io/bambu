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
var bulma_1 = require("../../bulma");
var TileContext;
(function (TileContext) {
    TileContext["ancestor"] = "isAncestor";
    TileContext["parent"] = "isParent";
    TileContext["child"] = "isChild";
})(TileContext = exports.TileContext || (exports.TileContext = {}));
var Tile = function (props) {
    var context = props.context, isDesktop = props.isDesktop, size = props.size, isVertical = props.isVertical, className = props.className, tileProps = __rest(props, ["context", "isDesktop", "size", "isVertical", "className"]);
    var classNames = ClassNames(bulma_1.default.tile, bulma_1.default[size], bulma_1.default[context], (_a = {},
        _a["" + bulma_1.default.isVertical] = isVertical,
        _a["" + bulma_1.default.isDesktop] = isDesktop,
        _a), className);
    return (React.createElement("div", __assign({ className: classNames }, tileProps), props.children));
    var _a;
};
Tile.propTypes = __assign({}, HTML_1.default.propTypes, { context: PropTypes.oneOf(Objects_1.default.values(TileContext)), size: PropTypes.oneOf(Objects_1.default.values(css_1.Size12Values)), isVertical: PropTypes.bool, isDesktop: PropTypes.bool });
Tile.defaultProps = __assign({}, HTML_1.default.defaultProps, { isDesktop: false, isVertical: false });
Tile.displayName = 'Tile';
exports.default = Tile;
