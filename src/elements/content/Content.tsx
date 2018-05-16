import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import {bulma as ContentStyle, Size, sizeValues} from '../../';

export interface ContentProps extends HTMLElementProps {
    bSize?: string | Size;
}

export default class Content extends React.Component<ContentProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(sizeValues)
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, bSize, children, ...inputProps} = this.props;

        const classNames = ClassNames(
            ContentStyle.content,
            ContentStyle[bSize],
            className
        );

        return (
            <div className={classNames} {...inputProps} >
                {children}
            </div>
        );
    }
}
