import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ContainerStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ContainerProps extends HTMLDivProps {
    isFluid?: boolean;
    isFullhd?: boolean;
    isTextCentered?: boolean;
    isWidescreen?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Container extends React.Component<ContainerProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isFluid: PropTypes.bool,
        isFullhd: PropTypes.bool,
        isTextCentered: PropTypes.bool,
        isWidescreen: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isFluid: false,
        isFullhd: false,
        isTextCentered: false,
        isWidescreen: false,
    };

    public render(): JSX.Element {
        const {isFluid, isFullhd, isWidescreen, isTextCentered, className, children, elementRef, ...inputProps} = this.props;

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
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
