import * as React from 'react';
import Columns from "bambu/lib/grid/column/Columns";
import Column from "bambu/lib/grid/column/Column";

const Grid: React.SFC<{}> = (props: {}) => {
    return (
        <Columns>
            <Column>First column</Column>
            <Column>Second column</Column>
            <Column>Third column</Column>
            <Column>Fourth column</Column>
        </Columns>
    );
};

export default Grid;
