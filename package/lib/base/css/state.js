"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objects_1 = require("wasabi-common/lib/types/Objects");
var State;
(function (State) {
    State["hovered"] = "isHovered";
    State["focused"] = "isFocused";
    State["active"] = "isActive";
    State["loading"] = "isLoading";
    State["static"] = "isStatic";
})(State = exports.State || (exports.State = {}));
exports.StateValues = Objects_1.default.values(State);
