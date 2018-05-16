import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldBodyProps extends HTMLDivProps {
    bSize?: string | Size;
}

export default class FieldBody extends React.Component<FieldBodyProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(sizeValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {
            bSize,
            className,
            children,
            ...inputProps
        } = this.props;

        const classNames = ClassNames([
            FormStyle.fieldBody,
            FormStyle[bSize],
            className
        ]);

        return (
            <div className={classNames} {...inputProps} >
                {children}
            </div>
        );
    }
}
