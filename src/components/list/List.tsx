import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ListStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface ListProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

/**
 *
 */
export default class List extends React.Component<ListProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            ListStyle.list,
            className
        );

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
