import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as LevelStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface LevelItemProps extends HTMLDivProps {
    hasTextCentered?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * For each individual element in <code>{&lt;LevelLeft />} or  {<LevelRight /&gt;}</code> components.
 */
export default class LevelItem extends React.Component<LevelItemProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        hasTextCentered: PropTypes.bool,
        elementRef: PropTypes.func
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

