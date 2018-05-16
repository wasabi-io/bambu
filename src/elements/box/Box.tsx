import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as BoxStyle, HTMLComponent, HTMLDivProps} from '../../';

export type BoxProps = HTMLDivProps;

export default class Box extends React.Component<BoxProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...boxProps} = this.props;

        const classNames = ClassNames(BoxStyle.box, className);

        return (
            <div className={classNames} {...boxProps} >
                {children}
            </div>
        );
    }
}

