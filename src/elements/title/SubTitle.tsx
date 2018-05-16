import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TitleStyle, HTMLComponent, HTMLPProps, Size6, size6Values} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface SubTitleProps extends HTMLPProps {
    bSize?: string | Size6;
    tagName?: string;
    elementRef?: any;
}

export default class SubTitle extends React.Component<SubTitleProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(size6Values),
        tagName: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'h2'
    };

    public render(): JSX.Element {
        const {tagName, bSize, className, children, elementRef, ...subTitleProps} = this.props;

        const classNames = ClassNames(
            TitleStyle.subtitle,
            TitleStyle[bSize],
            className
        );
        (subTitleProps as any).className = classNames;
        return React.createElement(tagName, {
            className: classNames,
            ref: elementRef,
            ...subTitleProps
        }, children);
    }
}

