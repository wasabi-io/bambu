"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objects_1 = require("wasabi-common/lib/types/Objects");
var Direction;
(function (Direction) {
    Direction["top"] = "top";
    Direction["right"] = "right";
    Direction["bottom"] = "bottom";
    Direction["left"] = "left";
})(Direction = exports.Direction || (exports.Direction = {}));
var DirectionH;
(function (DirectionH) {
    DirectionH["right"] = "right";
    DirectionH["bottom"] = "bottom";
    DirectionH["left"] = "left";
})(DirectionH = exports.DirectionH || (exports.DirectionH = {}));
exports.directionHValues = Objects_1.default.values(DirectionH);
var Horizontal;
(function (Horizontal) {
    Horizontal["left"] = "left";
    Horizontal["right"] = "right";
})(Horizontal = exports.Horizontal || (exports.Horizontal = {}));
var Vertical;
(function (Vertical) {
    Vertical["top"] = "top";
    Vertical["bottom"] = "bottom";
})(Vertical = exports.Vertical || (exports.Vertical = {}));
exports.verticalValues = Objects_1.default.values(Vertical);
