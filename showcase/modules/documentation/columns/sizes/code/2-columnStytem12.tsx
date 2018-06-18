import * as React from 'react';
import Columns from "bambu/lib/grid/column/Columns";
import {Column, RowSpan} from "bambu/lib/grid/column";
import {Color} from "bambu";

const generateColumn = (rowSpan: number) => {
    const elements: JSX.Element[] = [
        <Column color={Color.info} rowSpan={rowSpan as RowSpan}>{rowSpan}</Column>
    ];
    for (let i = rowSpan; i < 12; i = i + 1) {
        elements.push(<Column>1</Column>);
    }
    return elements;
};

const Index: React.SFC<{}> = (props: {}) => {
    const elements: JSX.Element[] = [];
    for (let i = 2; i < 12; i = i + 1) {
        elements.push(<Columns>{generateColumn(i as RowSpan)}</Columns>);
    }
    return (
        <div>
            {elements}
        </div>
    );
};

export default Index;
