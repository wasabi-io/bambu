import * as React from "react";
import Stateless from "component/Stateless";
import pageStyle from "css/pageStyle";
import {Content} from "bambu/lib/elements/content";
import {Tag, Tags} from "bambu/lib/elements/tag";
import {Color} from "bambu";
import XDocEditor from "../../../view/editor/XDocEditor";

const codes = {
    basic: require("!raw-loader?./code/1-basic"),
    disabled: require("!raw-loader?./code/2-disabled"),
    isCentered: require("!raw-loader?./code/3-isCentered"),
    isRight: require("!raw-loader?./code/4-isRight"),
    isRounded: require("!raw-loader?./code/5-isRounded"),
    sizeSmall: require("!raw-loader?./code/6-size-small"),
    sizeMedium: require("!raw-loader?./code/7-size-medium"),
    sizeLarge: require("!raw-loader?./code/8-size-large"),
};

const divider = (
    <span>
        <br/>
         <hr className="hr" style={{marginBottom: 0}}/>
        <br/>
    </span>
);

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div className={pageStyle.bdContent}>
                <Content>
                    <p>
                        The pagination component consists of several elements:
                    </p>
                    <ul>
                        <li>
                            <code>pagination-previous</code> and <code>pagination-next</code> for incremental navigation
                        </li>
                        <li>
                            <code>pagination-list</code> which displays page items:
                            <ul>
                                <li>
                                    <code>pagination-link</code> for the page numbers
                                </li>
                                <li>
                                    <code>pagination-ellipsis</code> for range separators
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        All elements are optional so you can compose your pagination as you wish.
                    </p>
                </Content>
                <XDocEditor vertical={true} codes={[codes.basic]}/>
                <br/>
                <Content>
                    <p>
                        You can disable some links if they are not active, or change the amount of page numbers available.
                    </p>
                </Content>
                <XDocEditor vertical={true} codes={[codes.disabled]}/>
                {divider}
                <Content>
                    <p>
                        By default on <strong>tablet</strong>, the list is located on the left, and the previous/next buttons on the right. But you can change the <strong>order</strong> of these elements by using the <code>is-centered</code> and <code>is-right</code> modifiers.
                    </p>
                </Content>
                <XDocEditor vertical={true} codes={[codes.isCentered, codes.isRight]}/>
                {divider}
                <XDocEditor vertical={true} title="Styles" codes={[codes.isRounded]}>
                    <Tags hasAddons>
                        <Tag>New!</Tag>
                        <Tag color={Color.info}>0.6.2</Tag>
                    </Tags>
                    <Content>
                        Add the <code>is-rounded</code> modifier to have rounded pagination items.
                    </Content>
                </XDocEditor>
                <XDocEditor vertical={true} title="Sizes" codes={[codes.sizeSmall, codes.sizeMedium, codes.sizeLarge]}>
                    <Content>
                        The pagination comes in <strong>3 additional sizes</strong>.<br/>
                        You only need to append the <strong>modifier</strong> <code>is-small</code>, <code>is-medium</code>, or <code>is-large</code> to the <code>pagination</code> component.
                    </Content>
                </XDocEditor>
            </div>
        );
    }
}
