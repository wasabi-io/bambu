import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ControlProps extends HTMLDivProps {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
    isLoading?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Control extends React.Component<ControlProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        hasIconsLeft: PropTypes.bool,
        hasIconsRight: PropTypes.bool,
        isExpanded: PropTypes.bool,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        hasIconsLeft: false,
        hasIconsRight: false,
        isExpanded: false,
        isLoading: false,
    };

    public render(): JSX.Element {
        const {
            isExpanded,
            hasIconsLeft,
            hasIconsRight,
            isLoading,
            className,
            children,
            elementRef,
            ...props
        } = this.props;

        const classNames = ClassNames(
            FormStyle.control,
            {
                [`${FormStyle.isExpanded}`]: isExpanded,
                [`${FormStyle.hasIconsLeft}`]: hasIconsLeft,
                [`${FormStyle.hasIconsRight}`]: hasIconsRight,
                [`${FormStyle.isLoading}`]: isLoading,
            },
            className
        );

        return (
            <div className={classNames} {...props} ref={elementRef} >
                {children}
            </div>
        );
    }
}

