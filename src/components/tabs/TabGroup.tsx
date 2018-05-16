import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {Alignment, alignmentValues, bulma as TabGroupStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface TabGroupProps extends HTMLDivProps {
    alignment?: string | Alignment;
}


export default class TabGroup extends React.Component<TabGroupProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        alignment: PropTypes.oneOf(alignmentValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {alignment, className, children, ...inputProps} = this.props;

        const classNames = ClassNames(
            TabGroupStyle[alignment],
            className
        );

        return (
            <div className={classNames} {...inputProps}>
                {children}
            </div>
        );
    }
}
