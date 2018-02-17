webpackJsonp([3],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const css_1 = __webpack_require__(4);
const content_1 = __webpack_require__(99);
const notification_1 = __webpack_require__(226);
const column_1 = __webpack_require__(100);
const Stateless_1 = __webpack_require__(13);
const Page_1 = __webpack_require__(30);
class Basics extends Stateless_1.default {
    render() {
        return (React.createElement(Page_1.default, { title: "Columns", subTitle: "A simple way to build responsive columns" },
            React.createElement(content_1.Content, null,
                React.createElement("p", null, "Building a columns layout with Bulma is very simple:"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        "Add a ",
                        React.createElement("code", null, "Columns"),
                        " container"),
                    React.createElement("li", null,
                        "Add as many ",
                        React.createElement("code", null, "Column"),
                        " elements as you want")),
                React.createElement("p", null, "Each column will have an equal width, no matter the number of columns."),
                React.createElement(column_1.Columns, null,
                    React.createElement(column_1.Column, null,
                        React.createElement(notification_1.Notification, { color: css_1.Color.info, className: css_1.HelperStyle.hasTextCentered }, "First column")),
                    React.createElement(column_1.Column, null,
                        React.createElement(notification_1.Notification, { color: css_1.Color.success, className: css_1.HelperStyle.hasTextCentered }, "Second column")),
                    React.createElement(column_1.Column, null,
                        React.createElement(notification_1.Notification, { color: css_1.Color.warning, className: css_1.HelperStyle.hasTextCentered }, "Third column")),
                    React.createElement(column_1.Column, null,
                        React.createElement(notification_1.Notification, { color: css_1.Color.danger, className: css_1.HelperStyle.hasTextCentered }, "Fourth column"))))));
    }
}
exports.default = Basics;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@keyframes _2Y-fEuwgCdLEuexH3Ltn0N {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n._405er3YfaqCQuf6xl8joh:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.iAZL_M5nfMJrzvNbh4ruV {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px; }\n  .iAZL_M5nfMJrzvNbh4ruV:before, .iAZL_M5nfMJrzvNbh4ruV:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center; }\n  .iAZL_M5nfMJrzvNbh4ruV:before {\n    height: 2px;\n    width: 50%; }\n  .iAZL_M5nfMJrzvNbh4ruV:after {\n    height: 50%;\n    width: 2px; }\n  .iAZL_M5nfMJrzvNbh4ruV:hover, .iAZL_M5nfMJrzvNbh4ruV:focus {\n    background-color: rgba(10, 10, 10, 0.3); }\n  .iAZL_M5nfMJrzvNbh4ruV:active {\n    background-color: rgba(10, 10, 10, 0.4); }\n  .iAZL_M5nfMJrzvNbh4ruV._1KLi4u7nXqmqeQ8nGGeeAN {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px; }\n  .iAZL_M5nfMJrzvNbh4ruV._3z-00fCzM6QdXe4iuFGuw0 {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px; }\n  .iAZL_M5nfMJrzvNbh4ruV.SBn5Ocv4LGf8to4ugSNGB {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px; }\n\n._3AzJPupPTFgn9oIcDSdVrR {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n\n._3uAAFbNq0VAehf00CqvU0- {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0; }\n  ._3uAAFbNq0VAehf00CqvU0-:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  ._3uAAFbNq0VAehf00CqvU0- pre {\n    overflow: auto;\n    max-width: 100%; }\n\n.dD8Peqq2y1IPZsE-IdPrl {\n  animation: _2Y-fEuwgCdLEuexH3Ltn0N 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n\n._3UKH1ZJDvijjb-RquY2Xcc {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n\n._1TcOJjoUXBeHEqiwuHvJqf {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative; }\n  ._1TcOJjoUXBeHEqiwuHvJqf:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  ._1TcOJjoUXBeHEqiwuHvJqf a:not(._1mj1cxfZRRX2oQ-OeOpw6k) {\n    color: currentColor;\n    text-decoration: underline; }\n  ._1TcOJjoUXBeHEqiwuHvJqf strong {\n    color: currentColor; }\n  ._1TcOJjoUXBeHEqiwuHvJqf code,\n  ._1TcOJjoUXBeHEqiwuHvJqf pre {\n    background: white; }\n  ._1TcOJjoUXBeHEqiwuHvJqf pre code {\n    background: transparent; }\n  ._1TcOJjoUXBeHEqiwuHvJqf > .iAZL_M5nfMJrzvNbh4ruV {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem; }\n  ._1TcOJjoUXBeHEqiwuHvJqf ._2wXdbXaTe62GBS8F6igAat,\n  ._1TcOJjoUXBeHEqiwuHvJqf ._3rW5IIC-DeQ6zMHuZsLT2u,\n  ._1TcOJjoUXBeHEqiwuHvJqf .Wa0ji48M8rYLUSuyD3v1N {\n    color: currentColor; }\n  ._1TcOJjoUXBeHEqiwuHvJqf.Pz9rAeOwl2J-X_xS3mFFY {\n    background-color: white;\n    color: #0a0a0a; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._13n2UfjZySr9t_Z1rtKq7X {\n    background-color: #0a0a0a;\n    color: white; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._2BANZU9mMikHd9cmDhW4FF {\n    background-color: whitesmoke;\n    color: #363636; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._2l3kS5yDHxUSjSVcsS0skj {\n    background-color: #363636;\n    color: whitesmoke; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._1lw9OjiQcXYZ6ONEw_mRua {\n    background-color: #00d1b2;\n    color: #fff; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._1AMBZhLMEOaeeEJALWB4At {\n    background-color: #3273dc;\n    color: #fff; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._3LPHTm3-VDRVamFAihCW4Y {\n    background-color: #209cee;\n    color: #fff; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._2nWpJRAI86_WL7Oy9ha-cy {\n    background-color: #23d160;\n    color: #fff; }\n  ._1TcOJjoUXBeHEqiwuHvJqf._1caKYEhkHr58WuHILHQr61 {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n  ._1TcOJjoUXBeHEqiwuHvJqf._34DdSszHPuSgwnHiVuf8J {\n    background-color: #ff3860;\n    color: #fff; }\n", ""]);

// exports
exports.locals = {
	"block": "_405er3YfaqCQuf6xl8joh",
	"delete": "iAZL_M5nfMJrzvNbh4ruV",
	"is-small": "_1KLi4u7nXqmqeQ8nGGeeAN",
	"isSmall": "_1KLi4u7nXqmqeQ8nGGeeAN",
	"is-medium": "_3z-00fCzM6QdXe4iuFGuw0",
	"isMedium": "_3z-00fCzM6QdXe4iuFGuw0",
	"is-large": "SBn5Ocv4LGf8to4ugSNGB",
	"isLarge": "SBn5Ocv4LGf8to4ugSNGB",
	"heading": "_3AzJPupPTFgn9oIcDSdVrR",
	"highlight": "_3uAAFbNq0VAehf00CqvU0-",
	"loader": "dD8Peqq2y1IPZsE-IdPrl",
	"spinAround": "_2Y-fEuwgCdLEuexH3Ltn0N",
	"number": "_3UKH1ZJDvijjb-RquY2Xcc",
	"notification": "_1TcOJjoUXBeHEqiwuHvJqf",
	"button": "_1mj1cxfZRRX2oQ-OeOpw6k",
	"title": "_2wXdbXaTe62GBS8F6igAat",
	"subtitle": "_3rW5IIC-DeQ6zMHuZsLT2u",
	"content": "Wa0ji48M8rYLUSuyD3v1N",
	"is-white": "Pz9rAeOwl2J-X_xS3mFFY",
	"isWhite": "Pz9rAeOwl2J-X_xS3mFFY",
	"is-black": "_13n2UfjZySr9t_Z1rtKq7X",
	"isBlack": "_13n2UfjZySr9t_Z1rtKq7X",
	"is-light": "_2BANZU9mMikHd9cmDhW4FF",
	"isLight": "_2BANZU9mMikHd9cmDhW4FF",
	"is-dark": "_2l3kS5yDHxUSjSVcsS0skj",
	"isDark": "_2l3kS5yDHxUSjSVcsS0skj",
	"is-primary": "_1lw9OjiQcXYZ6ONEw_mRua",
	"isPrimary": "_1lw9OjiQcXYZ6ONEw_mRua",
	"is-link": "_1AMBZhLMEOaeeEJALWB4At",
	"isLink": "_1AMBZhLMEOaeeEJALWB4At",
	"is-info": "_3LPHTm3-VDRVamFAihCW4Y",
	"isInfo": "_3LPHTm3-VDRVamFAihCW4Y",
	"is-success": "_2nWpJRAI86_WL7Oy9ha-cy",
	"isSuccess": "_2nWpJRAI86_WL7Oy9ha-cy",
	"is-warning": "_1caKYEhkHr58WuHILHQr61",
	"isWarning": "_1caKYEhkHr58WuHILHQr61",
	"is-danger": "_34DdSszHPuSgwnHiVuf8J",
	"isDanger": "_34DdSszHPuSgwnHiVuf8J"
};

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NotificationStyle = __webpack_require__(228);
exports.default = NotificationStyle;


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Notification_1 = __webpack_require__(227);
exports.Notification = Notification_1.default;
exports.NotificationProps = Notification_1.NotificationProps;
var NotificationStyle_1 = __webpack_require__(225);
exports.NotificationStyle = NotificationStyle_1.default;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
const ClassNames = __webpack_require__(2);
const PropTypes = __webpack_require__(1);
const React = __webpack_require__(0);
const css_1 = __webpack_require__(4);
const HTML_1 = __webpack_require__(3);
const NotificationStyle_1 = __webpack_require__(225);
class Notification extends HTML_1.default {
    static renderCloseButton(closeable, buttonProps) {
        if (closeable) {
            return React.createElement("button", Object.assign({ className: NotificationStyle_1.default.delete }, buttonProps));
        }
        return null;
    }
    render() {
        const _a = this.props, { color, closeable, closeButton, className } = _a, inputProps = __rest(_a, ["color", "closeable", "closeButton", "className"]);
        const classNames = ClassNames([
            NotificationStyle_1.default.notification,
            NotificationStyle_1.default[color],
            className
        ]);
        return (React.createElement("div", Object.assign({ className: classNames }, inputProps),
            Notification.renderCloseButton(closeable, closeButton),
            this.props.children));
    }
}
Notification.propTypes = Object.assign({}, HTML_1.default.propTypes, { closeButton: PropTypes.oneOf([
        PropTypes.node,
        PropTypes.object
    ]), closeable: PropTypes.bool, color: PropTypes.oneOf(css_1.colorValues) });
Notification.defaultProps = Object.assign({}, HTML_1.default.defaultProps, { closeable: false });
exports.default = Notification;


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"sourceMap":true,"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(224, function() {
			var newContent = __webpack_require__(224);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=3.a075031a2b65cce223f8.js.map