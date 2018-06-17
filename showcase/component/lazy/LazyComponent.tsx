import * as React from "react";
import {Props} from "wasabi-common";
import lazyComponent from "./Async";

export interface GetComponent {
    (props: Props<any>): Promise<React.ComponentClass<Props<any>>>;
}

export interface LazyComponentProps extends Props<any> {
    getComponent: GetComponent;
}

const LazyComponent: React.SFC<LazyComponentProps> =  (props: LazyComponentProps) => {
    const { getComponent, ...componentProps } = props;
    const Component = lazyComponent(getComponent, componentProps);
    return <Component />;
};

export default LazyComponent;
