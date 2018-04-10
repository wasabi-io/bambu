"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bulma = require('bulma/bulma.sass');
function toCamelCase(str) {
    // Lower cases the string
    return str.toLowerCase()
        .replace(/[-_]+/g, ' ')
        .replace(/[^\w\s]/g, '')
        .replace(/ (.)/g, function ($1) {
        return $1.toUpperCase();
    })
        .replace(/ /g, '');
}
for (var key in bulma) {
    if (!bulma.hasOwnProperty(key)) {
        continue;
    }
    if (key.search(/[-_]+/g) === -1) {
        continue;
    }
    var camelCaseKey = toCamelCase(key);
    if (!bulma[camelCaseKey]) {
        bulma[camelCaseKey] = bulma[key];
    }
}
exports.default = bulma;
