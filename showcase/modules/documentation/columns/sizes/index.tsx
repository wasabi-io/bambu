import * as React from "react";
import {Stateless} from "wasabi-ui";
import XDocEditor from "modules/view/editor/XDocEditor";
import {Tag, Tags} from "bambu/lib/elements/tag";
import {Color} from "bambu";
import {Content} from "bambu/lib/elements/content";
import {ColumnSize} from "bambu/lib/grid/column/Column";
import {Message, MessageBody, MessageHeader} from "bambu/lib/components/message";

const codes = {
    sizes: require("!raw-loader?modules!./code/1-sizes"),
    columnStytem12: require("!raw-loader?modules!./code/2-columnStytem12")
};

const braces = (value: any) => {
    return `{${value}}`;
};

const columnSize = (columnSize: string) => {
    return `cSize={ColumnSize.${columnSize}} || cSize="${(ColumnSize as any)[columnSize]}"`;
};

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <p>If you want to change the <strong>size</strong> of a single column, you can use one of the following classes:</p>
                    <ul>
                        <li>
                            <code>{columnSize("isThreeQuarters")}</code>
                        </li>
                        <li>
                            <code>{columnSize("isTwoThirds")}</code>
                        </li>
                        <li>
                            <code>{columnSize("isHalf")}</code>
                        </li>
                        <li>
                            <code>{columnSize("isOneThird")}</code>
                        </li>
                        <li>
                            <code>{columnSize("isOneQuarter")}</code>
                        </li>
                    </ul>
                    <p>The <em>other</em> columns will fill up the <strong>remaining</strong> space automatically.</p>
                </Content>
                <Tags>
                    <Tag>New!</Tag>
                    <Tag color={Color.info}>0.6.1</Tag>
                </Tags>
                <Content>
                    <p>You can now use the following multiples of <code>20%</code> as well:</p>
                    <ul>
                        <li>
                            <code>{columnSize("isFourFifths")}</code>
                        </li>
                        <li>
                            <code>{columnSize("isThreeFifths")}</code>
                        </li>
                        <li>
                            <code>{columnSize("isTwoFifths")}</code>
                        </li>
                        <li>
                            <code>{columnSize("isOneFifth")}</code>
                        </li>
                    </ul>
                </Content>
                <XDocEditor vertical={true} hideCode={true} codes={[codes.sizes]}/>
                <hr/>
                <XDocEditor vertical={true} hideCode={true} title="12 columns system" codes={[codes.columnStytem12]}>
                    <Content>
                        <p>As the grid can be divided into <strong>12</strong> columns, there are size classes for each division:</p>
                        <ul>
                            <li><code>is-2</code></li>
                            <li><code>is-3</code></li>
                            <li><code>is-4</code></li>
                            <li><code>is-5</code></li>
                            <li><code>is-6</code></li>
                            <li><code>is-7</code></li>
                            <li><code>is-8</code></li>
                            <li><code>is-9</code></li>
                            <li><code>is-10</code></li>
                            <li><code>is-11</code></li>
                        </ul>
                    </Content>
                    <Message color={Color.info}>
                        <MessageHeader>Naming convention</MessageHeader>
                        <MessageBody>
                            Each modifier class is named after <strong>how many columns you want out of 12</strong>. So if you want 7 columns out of 12, use <code>is-7</code>.
                        </MessageBody>
                    </Message>
                </XDocEditor>
            </div>
        );
    }
}
