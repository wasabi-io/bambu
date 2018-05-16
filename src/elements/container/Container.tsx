import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as ContainerStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ContainerProps extends HTMLDivProps {
    isFluid?: boolean;
    isFullhd?: boolean;
    isTextCentered?: boolean;
    isWidescreen?: boolean;
}

export default class Container extends React.Component<ContainerProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isFluid: PropTypes.bool,
        isFullhd: PropTypes.bool,
        isTextCentered: PropTypes.bool,
        isWidescreen: PropTypes.bool,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isFluid: false,
        isFullhd: false,
        isTextCentered: false,
        isWidescreen: false,
    };

    public render(): JSX.Element {
        const {isFluid, isFullhd, isWidescreen, isTextCentered, className, children, ...inputProps} = this.props;

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
                {children}
            </div>
        );
    }
}

