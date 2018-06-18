import * as React from "react";

export default class ComponentUtil {
    public static isClassComponent(component: any) {
        return (typeof component === 'function' && !!component.prototype.isReactComponent)
    }

    public static isFunctionComponent(component: any) {
        return (typeof component === 'function' && String(component).indexOf('return React.createElement') !== -1);
    }

    public static isReactComponent(component: any) {
        return ComponentUtil.isClassComponent(component) || ComponentUtil.isFunctionComponent(component);
    }

    public static isElement(element: any) {
        return React.isValidElement(element);
    }

    public static isDOMTypeElement(element: any) {
        return ComponentUtil.isElement(element) && typeof element.type === 'string';
    }

    public static isCompositeTypeElement(element: any) {
        return ComponentUtil.isElement(element) && typeof element.type === 'function';
    }
}