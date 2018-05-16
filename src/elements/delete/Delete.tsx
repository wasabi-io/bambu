import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as DeleteStyle, HTMLAllAttributes, HTMLComponent, Size, sizeValues} from '../../';

export interface DeleteProps extends HTMLAllAttributes {
    tagName?: string;
    bSize?: string | Size;
    elementRef?: any;
}

export default class Delete extends React.Component<DeleteProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string,
        bSize: PropTypes.oneOf(sizeValues),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'a'
    };

    public render(): JSX.Element {
        const {tagName, bSize, className, children, elementRef, ...deleteProps} = this.props;

        const classNames = ClassNames(
            DeleteStyle.delete,
            DeleteStyle[bSize],
            className
        );

        return React.createElement(tagName, {
            className: classNames,
            ref: elementRef,
            ...deleteProps
        }, children);
    }
}

