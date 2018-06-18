import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MediaStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface MediaRightProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class MediaRight extends React.Component<MediaRightProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([MediaStyle.mediaRight, className]);

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
