import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import CardStyle from '../../bulma';
import Icon, {IconOptions} from '../../elements/icon/Icon';
import HTMLComponent, {HTMLAProps} from '../../base/html/HTML';

/**
 * Refers Html Props and Additional Props.
 */
export interface CardHeaderIconProps extends HTMLAProps {
    icon?: IconOptions;
}

const CardHeaderIcon: React.SFC<CardHeaderIconProps> = (props: CardHeaderIconProps) => {
    const {icon, className, ...inputProps} = props;

    const classNames = ClassNames([
        CardStyle.cardHeaderIcon,
        className
    ]);

    return (
        <a className={classNames} {...inputProps}>
            {icon && <Icon icon={icon}/>}
            {props.children}
        </a>
    );
};

CardHeaderIcon.propTypes = {
    ...HTMLComponent.propTypes,
    icon: PropTypes.any,
};

CardHeaderIcon.defaultProps = {
    ...HTMLComponent.defaultProps
};

CardHeaderIcon.displayName = 'CardHeaderIcon';

export default CardHeaderIcon;
