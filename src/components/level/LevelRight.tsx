import * as ClassNames from 'classnames';
import * as PropTypes from "prop-types";
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as LevelStyle, HTMLAllAttributes, HTMLComponent} from '../../';

export interface LevelRightProps extends HTMLAllAttributes {
    tagName?: string;
    elementRef?: (ref: any) => any;
}

export default class LevelRight extends React.Component<LevelRightProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'div'
    };

    public render(): JSX.Element {
        const {tagName, className, children, elementRef, ...levelRightProps} = this.props;
        return React.createElement(tagName, {
            className: ClassNames(LevelStyle.levelRight, className),
            ref: elementRef,
            ...levelRightProps
        }, children);
    }
}

