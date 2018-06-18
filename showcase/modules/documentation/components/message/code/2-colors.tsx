import * as React from "react";
import {Message, MessageBody, MessageHeader} from "bambu/lib/components/message";
import {Delete} from "bambu/lib/elements/delete";
import {Color} from "bambu";
import {Strings} from "wasabi-common";
import {Column, Columns} from "bambu/lib/grid/column";
import bulma from "bambu/lib/base/css/bulma";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <div>
                <Columns>
                    {Index.renderMessage("primary")}
                    {Index.renderMessage("info")}
                    {Index.renderMessage("success")}
                    {Index.renderMessage("warning")}
                </Columns>
                <Columns>
                    {Index.renderMessage("danger")}
                    {Index.renderMessage("link")}
                    {Index.renderMessage("white")}
                    {Index.renderMessage("light")}
                </Columns>
                <Columns>
                    {Index.renderMessage("dark")}
                    {Index.renderMessage("black")}
                    {Index.renderMessage("text")}
                </Columns>
            </div>
        );
    }

    public static renderMessage(color: string) {
        return (
            <Column className={bulma.is6} key={color}>
                <Message key={color} color={(Color as any)[color]}>
                    <MessageHeader>
                        {Strings.capitalizeFirstLetter(color)}<Delete/>
                    </MessageHeader>
                    <MessageBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                    </MessageBody>
                </Message>
            </Column>
        );
    }
}
