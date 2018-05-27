import * as classNames from 'classnames';
import * as React from 'react';
import {Stateless} from "wasabi-ui";
import bulmaDocs from "../../css/bulmaDocs";
import {FaIcon, Icon} from "bambu/lib/elements/icon";

export interface ShowcaseLinkProps {
    href: string;
    title: string;
    icon: string;
    description: JSX.Element | string;
    iconClassName?: string;
}

export default class ShowCaseLink extends Stateless<ShowcaseLinkProps> {
    public render() {
        const {
            href,
            title,
            icon,
            description,
            iconClassName,
        } = this.props;
        return (
            <a className={bulmaDocs.bdLink} href={href}>
                <h2 className={bulmaDocs.bdLinkName}>
                    <figure className={bulmaDocs.bdLinkFigure}>
                        <span className={classNames(bulmaDocs.bdLinkIcon, iconClassName)}>
                            <Icon>
                                <FaIcon name={icon}/>
                            </Icon>
                        </span>
                    </figure>
                    {title}
                </h2>
                <p className={bulmaDocs.bdLinkSubtitle}>
                    {description}
                </p>
            </a>
        );
    }
}
