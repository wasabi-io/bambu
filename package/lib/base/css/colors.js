"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objects_1 = require("wasabi-common/lib/types/Objects");
var Color;
(function (Color) {
    Color["primary"] = "isPrimary";
    Color["info"] = "isInfo";
    Color["success"] = "isSuccess";
    Color["warning"] = "isWarning";
    Color["danger"] = "isDanger";
    Color["link"] = "isLink";
    Color["white"] = "isWhite";
    Color["light"] = "isLight";
    Color["dark"] = "isDark";
    Color["black"] = "isBlack";
    Color["text"] = "isText";
})(Color = exports.Color || (exports.Color = {}));
exports.colorValues = Objects_1.default.values(Color);
