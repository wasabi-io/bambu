import * as React from "react";
import {Column, Columns} from "rebul/lib/grid/column"
import { Notification } from "rebul/lib/elements/notification"

const ColumnSample3: React.SFC<{}> = (props: {}) => {
    const style = {padding: '10px'};
    return (
        <Columns multiline >
            <Column size="is2" style={style}>
                <Notification color="isInfo">
                    2
                </Notification>
            </Column>
            <Column size="is10" style={style}>
                <Notification color="isWarning">
                    10
                </Notification>
            </Column>
            <Column size="is1" style={style}>
                <Notification color="isSuccess">
                    1
                </Notification>
            </Column>
            <Column size="is5" style={style}>
                <Notification color="isDanger">
                    5
                </Notification>
            </Column>
            <Column size="is6" style={style}>
                <Notification color="isPrimary">
                    6
                </Notification>
            </Column>
        </Columns>

    );
};

export default ColumnSample3;
