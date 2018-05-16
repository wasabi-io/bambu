import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownItemProps extends HTMLDivProps {
    tagName?: string;
    isActive?: boolean;
}

export default class DropdownItem extends React.Component<DropdownItemProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string,
        isActive: PropTypes.bool,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'a',
        isActive: false,
    };

    public render(): JSX.Element {
        const {tagName, isActive, children, className, ...ownProps} = this.props;

        const classNames = ClassNames(
            DropdownStyle.dropdownItem,
            {
                [`${DropdownStyle.isActive}`]: isActive
            },
            className
        );

        return React.createElement(tagName, {
            className: classNames,
            ...ownProps
        }, children);
    }
}

