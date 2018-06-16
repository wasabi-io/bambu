import * as React from "react";

export default class ReactUtil {
    public static join(children: React.ReactNode, separator: (key: string) => JSX.Element, wrapper?: (child: JSX.Element, key?: string) => JSX.Element) {
        const elements: JSX.Element[] = [];
        const wrapperChildren = wrapper || ReactUtil.onWrapper;
        let i = 0;
        React.Children.forEach(children, (child: JSX.Element) => {
            if (child) {
                i = i + 1;
                elements.push(wrapperChildren(child, `wrapper-${i}`));
                elements.push(separator(`seperator-${i}`));
            }
        });
        if (elements.length > 0) {
            elements.splice(elements.length - 1, 1);
        }
        return elements;
    }

    private static onWrapper(child: JSX.Element): JSX.Element {
        return child;
    }
}
