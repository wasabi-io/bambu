import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as BoxStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface BoxProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class Box extends React.Component<BoxProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...boxProps} = this.props;

        const classNames = ClassNames(BoxStyle.box, className);

        return (
            <div className={classNames} {...boxProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}

