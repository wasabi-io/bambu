import * as React from 'react';
import Columns from "bambu/lib/grid/column/Columns";
import Column, {ColumnSize} from "bambu/lib/grid/column/Column";

const Index: React.SFC<{}> = (props: {}) => {
    return (
        <div>
            <Columns>
                <Column bSize={ColumnSize.isFourFifths}>is-four-fifths</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isThreeQuarters}>is-three-quarters</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isTwoThirds}>is-two-thirds</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isThreeFifths}>is-three-fifths</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isHalf}>is-half</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isTwoFifths}>is-two-fifths</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isOneThird}>is-one-third</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isOneQuarter}>is-one-quarter</Column>
                <Column>Auto</Column>
            </Columns>
            <Columns>
                <Column bSize={ColumnSize.isOneFifth}>is-one-fifth</Column>
                <Column>Auto</Column>
                <Column>Auto</Column>
            </Columns>
        </div>
    );
};

export default Index;
