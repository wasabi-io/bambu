webpackJsonp([4],{28:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(401),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getNavigations=function(){return[{text:"Basics",path:"basics",module:"Basics.tsx"}]},e.prototype.getModuleName=function(){return"columns"},e}(r.default);e.default=u},401:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),u=n(27),a=n(77),i=n(76),c=n(10),s=n(75),p=n(54),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){for(var t=this,e=this.props.match,n=p.default.getPaths(),o=[],c=[],l=0,f=this.getNavigations();l<f.length;l++){var h=f[l];!function(i){var p=e.url+"/"+i.path,l=i.module;o.push(r.createElement(a.Tab,{key:i.path,isActive:n[1]===i.path},r.createElement(u.Link,{style:{borderBottomWidth:3},to:p},i.text)));var f=s.default(function(){return t.getModule(l).then(function(t){return t.default})});c.push(r.createElement(u.Route,{key:p,path:p,component:f}))}(h)}return r.createElement(i.Container,null,r.createElement(i.Container,null,r.createElement(a.Tabs,null,o)),c)},e.prototype.getModule=function(t){return n(78)("./"+this.getModuleName()+"/"+t)},e}(c.default);e.default=l}});