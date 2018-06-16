import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import ReactComponent, {ComponentDoc} from "./ReactComponent";

export interface ReactDocProps {
    value: ComponentDoc[];
}

export default class ReactDoc extends Stateless<ReactDocProps> {
    public render() {
        console.log("value", this.props.value);
        return (
            <div>
                {this.props.value.map((prop: ComponentDoc) => ReactDoc.renderComponent(prop))}
            </div>
        );
    }

    public static renderComponent(prop: ComponentDoc) {
        return (
            <ReactComponent key={prop.displayName} value={prop}/>
        );
    }
}
