import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {HTMLDivProps, HTMLComponent} from "bambu/lib/base/html";
import thumbnailStyle from "./thumbnailStyle";

export interface ThumbnailProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class Thumbnail extends React.Component<ThumbnailProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...props} = this.props;

        const classNames = ClassNames(thumbnailStyle.bThumbnailGallery, className);

        return (
            <div className={classNames} ref={elementRef} {...props}>
                {children}
            </div>
        );
    }
}
