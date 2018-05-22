import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MediaStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface MediaContentProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class MediaContent extends React.Component<MediaContentProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([
            MediaStyle.mediaContent,
            className
        ]);

        return (
            <div className={classNames} {...inputProps} ref={elementRef} >
                {children}
            </div>
        );
    }
}
