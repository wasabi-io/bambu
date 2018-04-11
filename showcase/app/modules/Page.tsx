import * as React from 'react';
import {Color} from 'bambu/lib/base/css';
import {Content} from 'bambu/lib/elements/content';
import {Control, Field} from 'bambu/lib/elements/form';
import {Tag, Tags} from 'bambu/lib/elements/tag';
import {SubTitle, Title} from 'bambu/lib/elements/title';
import {Section} from 'bambu/lib/layout/section';
import Stateless from 'wasabi-ui/lib/Stateless';

export interface PageProps {
    title?: string;
    subTitle?: string | JSX.Element;
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
                        {this.checkAttributes(this.props.colors, 'Colors')}
                        {this.checkAttributes(this.props.sizes, 'Sizes')}
                        {this.checkAttributes(this.props.variables, 'Variables')}
                    </Field>
                }
                <hr/>
                <Content>
                    {this.props.children}
                </Content>
            </Section>
        );
    }

    private checkAttributes(value: boolean, text: string) {
        const attr: any = {};
        if (value) {
            // attr['tagName'] = 'a';
            // attr['href'] = '#' + text;
            attr['color'] = Color.success;
        } else {
            attr['color'] = Color.danger;
        }

        return <Control>
            <Tags hasAddons>
                <Tag>{text}</Tag>
                <Tag {...attr} >
                    {value ? 'YES' : 'NO'}
                </Tag>
            </Tags>
        </Control>;
    }
}
