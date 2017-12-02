import * as React from "react";
import {Size6} from "rebul/lib/base/css";
import Title from "rebul/lib/elements/title/Title";
import Stateless from "wasabi-ui/lib/Stateless";
import Sample, {SampleProps} from "./Sample";

export interface ShowSampleProps {
    name: string;
    subs: SampleProps[];
}

export default class ShowSample extends Stateless<ShowSampleProps> {

    public static renderSubs(subs: SampleProps[]) {
        const element = [];
        for (const sub of subs) {
            element.push(<div key = {sub.name} ><Sample {...sub} /></div>);
        }
        return element;
    }

    public render(): JSX.Element {
        return (
            <div>
                <Title size={Size6.is5}>{this.props.name}</Title>
                {ShowSample.renderSubs(this.props.subs)}
            </div>
        );
    }
}
