import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MediaStyle, HTMLArticleProps, HTMLComponent} from '../../';

export interface MediaProps extends HTMLArticleProps {
    elementRef?: (ref: any) => any;
}

/**
 *
 */
export default class Media extends React.Component<MediaProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            MediaStyle.media,
            className
        );

        return (
            <article className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </article>
        );
    }
}
