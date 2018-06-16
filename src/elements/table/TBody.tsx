import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TableStyle, HTMLComponent, HTMLTbodyProps} from '../../';

export interface TBodyProps extends HTMLTbodyProps {
    elementRef?: (ref: any) => any;
}

export default class TBody extends React.Component<TBodyProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...tBodyProps} = this.props;

        const classNames = ClassNames(TableStyle.tr, className);

        return (
            <tbody className={classNames} {...tBodyProps} ref={elementRef}>
            {children}
            </tbody>
        );
    }
}
