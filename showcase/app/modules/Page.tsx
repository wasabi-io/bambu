import * as React from 'react';
import { Color } from 'rebul/lib/base/css';
import { Content } from 'rebul/lib/elements/content';
import { Control, Field } from 'rebul/lib/elements/form';
import { Tag, Tags } from 'rebul/lib/elements/tag';
import { SubTitle, Title } from 'rebul/lib/elements/title';
import { Section } from 'rebul/lib/layout/section';
import Stateless from 'wasabi-ui/lib/Stateless';

export interface PageProps {
    title?: string;
    subTitle?: string;
    hasMeta?: boolean;
    colors?: boolean;
    sizes?: boolean;
    variables?: boolean;
}
export default class Page extends Stateless<PageProps> {
    public render(): JSX.Element {
        return (
            <Section>
                {this.props.title && <Title>{this.props.title}</Title>}
                {this.props.subTitle && <SubTitle>{this.props.subTitle}</SubTitle>}
                {
                    this.props.hasMeta && <Field isGrouped isGroupedMultiline>
                        {this.checkAttributes(this.props.colors, "Colors")}
                        {this.checkAttributes(this.props.sizes, "Sizes")}
                        {this.checkAttributes(this.props.variables, "Variables")}
                    </Field>
                }
                <hr />
                <Content>
                    {this.props.children}
                </Content>
            </Section>
        );
    }
    private checkAttributes(value: boolean, text: string) {
        let attr: any = {

        };
        if (value) {
            // attr["tagName"] = "a";
            // attr["href"] = "#" + text;
            attr["color"] = Color.success;
        } else {
            attr["color"] = Color.danger;
        }

        return <Control>
            <Tags hasAddons>
                <Tag>{text}</Tag>
                <Tag {...attr} >
                    {value ? "YES" : "NO"}
                </Tag>
            </Tags>
        </Control>

    }
}