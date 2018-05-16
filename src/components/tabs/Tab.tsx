import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as TabsStyle, HTMLComponent, HTMLLiProps} from '../../';

export interface TabProps extends HTMLLiProps {
    isActive?: boolean;
}

export default class Tab extends React.Component<TabProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
    };

    public render(): JSX.Element {
        const {isActive, className, children, ...inputProps} = this.props;

        const classNames = ClassNames(
            {
                [`${TabsStyle.isActive}`]: isActive,
            },
            className
        );

        return (
            <li className={classNames} {...inputProps}>
                {children}
            </li>
        );
    }
}
