import * as React from 'react';
import {Color, HTMLSectionProps, Size6} from 'bambu';
import {Content} from 'bambu/lib/elements/content/index';
import {Control, Field} from 'bambu/lib/form/index';
import {Tag, Tags} from 'bambu/lib/elements/tag/index';
import {SubTitle, Title} from 'bambu/lib/elements/title/index';
import {Section} from 'bambu/lib/layout/section/index';
import Stateless from 'component/Stateless';
import {PagesIconProps} from "../../modules/documentation/PagesProps";
import {FaIcon, Icon} from "bambu/lib/elements/icon";

export interface PageProps extends HTMLSectionProps {
    header?: (key?: string) => React.ReactChild;
    headerSize?: string | Size6;
    headerClassName?: string;
    subTitle?: (key?: string) => React.ReactChild;
    subTitleSize?: string | Size6;
    hasMeta?: boolean;
    colors?: boolean;
    sizes?: boolean;
    variables?: boolean;
    icon?: PagesIconProps;
}

export default class Page extends Stateless<PageProps> {
    public render(): JSX.Element {
        const {header, headerSize, headerClassName, subTitle, subTitleSize, children, hasMeta, colors, sizes, variables, icon, ...props} = this.props;
        return (
            <Section {...props}>
                {header && (
                    <Title className={headerClassName} key={`page-title-${this.id}`} bSize={headerSize}>{header(`page-title-child-${this.id}`)}</Title>
                )}
                {this.renderSubTitle()}
                {
                    hasMeta && (
                        <Field key={`pageField-${this.id}`} isGrouped isGroupedMultiline>
                            {this.checkAttributes(colors, 'Colors')}
                            {this.checkAttributes(sizes, 'Sizes')}
                            {this.checkAttributes(variables, 'Variables')}
                        </Field>
                    )
                }
                <Content key={`pageContent-${this.id}`}>
                    {children}
                </Content>
            </Section>
        );
    }

    public renderSubTitle() {
        const {subTitle, subTitleSize, icon} = this.props;
        if (subTitle) {
            return (
                <SubTitle key={`page-subtitle-${this.id}`} bSize={subTitleSize}>
                    {Page.renderIcon(icon)}
                    {subTitle(`page-subtitle-span-${this.id}`)}
                </SubTitle>
            );
        }
    }

    public static renderIcon(icon: PagesIconProps) {
        const {iconClassName, ...iconProps} = (icon || {}) as any;
        if (!icon) {
            return null;
        }
        return (
            <span key={`icon-${iconProps.name}`} className={iconClassName}>
                <Icon><FaIcon {...iconProps} /></Icon>&nbsp;&nbsp;
            </span>
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

        return <Control key={text}>
            <Tags hasAddons>
                <Tag key={"text"}>{text}</Tag>
                <Tag key={"confirm"} {...attr} >
                    {value ? 'YES' : 'NO'}
                </Tag>
            </Tags>
        </Control>;
    }
}
