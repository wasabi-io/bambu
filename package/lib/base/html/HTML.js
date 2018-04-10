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
Object.defineProperty(exports, "__esModule", { value: true });
var ClassNames = require("classnames");
var PropTypes = require("prop-types");
var Stateless_1 = require("wasabi-ui/lib/Stateless");
/**
 * Provides abstraction from HTML Elements.
 */
var AbstractDom = /** @class */ (function (_super) {
    __extends(AbstractDom, _super);
    function AbstractDom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractDom.create = function () {
    };
    AbstractDom.prototype.classNames = function (clazzNames) {
        clazzNames.push(this.props.className);
        return ClassNames(clazzNames);
    };
    AbstractDom.propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    AbstractDom.defaultProps = {
        className: '',
        style: {},
    };
    return AbstractDom;
}(Stateless_1.default));
exports.default = AbstractDom;
