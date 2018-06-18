import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, HTMLComponent, HTMLLabelProps, Size, sizeValues} from '../index';

/**
 * Refers Html Props and Additional Props.
 */
export interface ControlLabelProps extends HTMLLabelProps {
    bSize?: string | Size;
    isRadio?: boolean;
    elementRef?: (ref: any) => any;
}

export default class ControlLabel extends React.Component<ControlLabelProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(sizeValues),
        isRadio: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isRadio: false
    };

    public render(): JSX.Element {
        const {
            bSize,
            className,
            isRadio,
            children,
            elementRef,
            ...inputProps
        } = this.props;

        const classNames = ClassNames(
            {
                [`${FormStyle.label}`]: !isRadio,
                [`${FormStyle.radio}`]: isRadio,
            },
            FormStyle[bSize],
            className
        );

        return (
            <label className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </label>
        );
    }
}
