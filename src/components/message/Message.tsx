import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MessageStyle, Color, HTMLArticleProps, HTMLComponent, Size, sizeValues} from '../../';

export interface MessageProps extends HTMLArticleProps {
    color?: string | Color;
    bSize?: string | Size;
    elementRef?: (ref: any) => any;
}

/**
 * Colored message blocks, to emphasize part of your page
 */
export default class Message extends React.Component<MessageProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        color: PropTypes.string,
        bSize: PropTypes.oneOf(sizeValues),
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, color, bSize, children, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(MessageStyle.message, MessageStyle[color], MessageStyle[bSize], className);

        return (
            <article className={classNames} {...ownProps} ref={elementRef}>
                {children}
            </article>
        );
    }
}

