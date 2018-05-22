import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as LevelStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface LevelItemProps extends HTMLDivProps {
    hasTextCentered?: boolean;
    elementRef?: (ref: any) => any;
}

export default class LevelItem extends React.Component<LevelItemProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        hasTextCentered: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        hasTextCentered: false
    };

    public render(): JSX.Element {
        const {hasTextCentered, className, children, elementRef, ...levelItemProps} = this.props;

        const classNames = ClassNames(
            LevelStyle.levelItem,
            {
                [`${LevelStyle.hasTextCentered}`]: hasTextCentered,
            },
            className
        );

        return (
            <div className={classNames} {...levelItemProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}

