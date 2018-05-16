import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MediaStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface MediaLeftProps extends HTMLDivProps {
}

export default class MediaLeft extends React.Component<MediaLeftProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...inputProps} = this.props;

        const classNames = ClassNames([MediaStyle.mediaLeft, className]);

        return (
            <div className={classNames} {...inputProps}>
                {children}
            </div>
        );
    }
}
