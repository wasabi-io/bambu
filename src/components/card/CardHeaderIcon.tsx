import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLAProps, HTMLComponent} from '../../';
import Icon, {IconOptions} from '../../elements/icon/Icon';

/**
 * Refers Html Props and Additional Props.
 */
export interface CardHeaderIconProps extends HTMLAProps {
    icon?: IconOptions;
    elementRef?: (ref: any) => any;
}

export default class CardHeaderIcon extends React.Component<CardHeaderIconProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        icon: PropTypes.any,
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {icon, className, elementRef, children, ...inputProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardHeaderIcon,
            className
        ]);

        return (
            <a className={classNames} {...inputProps} ref={elementRef}>
                {icon && <Icon icon={icon}/>}
                {children}
            </a>
        );
    }
}
