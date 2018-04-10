import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import ContainerStyle from '../../bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface ContainerProps extends HTMLDivProps {
    isFluid?: boolean;
    isFullhd?: boolean;
    isTextCentered?: boolean;
    isWidescreen?: boolean;
}

const Container: React.SFC<ContainerProps> = (props: ContainerProps) => {

    const {isFluid, isFullhd, isWidescreen, isTextCentered, className, ...inputProps} = props;

    const classNames = ClassNames(
        ContainerStyle.container,
        {
            [`${ContainerStyle.isFluid}`]: isFluid,
            [`${ContainerStyle.isFullhd}`]: isFullhd,
            [`${ContainerStyle.isWidescreen}`]: isWidescreen,
            [`${ContainerStyle.isTextCentered}`]: isTextCentered,
        },
        className
    );

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Container.propTypes = {
    ...HTMLComponent.propTypes,
    isFluid: PropTypes.bool,
    isFullhd: PropTypes.bool,
    isTextCentered: PropTypes.bool,
    isWidescreen: PropTypes.bool,
};

Container.defaultProps = {
    ...HTMLComponent.defaultProps,
    isFluid: false,
    isFullhd: false,
    isTextCentered: false,
    isWidescreen: false,
};

Container.displayName = 'Container';

export default Container;
