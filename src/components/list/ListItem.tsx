import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ListStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface ListItemProps extends HTMLDivProps {
    isActive?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 *
 */
export default class ListItem extends React.Component<ListItemProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, isActive, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            ListStyle.listItem,
            {
                [`${ListStyle.isActive}`]: isActive
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
