import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TableStyle, HTMLComponent, HTMLTbodyProps} from '../../';

export interface TBodyProps extends HTMLTbodyProps {
}

export default class TBody extends React.Component<TBodyProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...tBodyProps} = this.props;

        const classNames = ClassNames(TableStyle.tr, className);

        return (
            <tbody className={classNames} {...tBodyProps} >
            {children}
            </tbody>
        );
    }
}
