import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import HTMLComponent, {HTMLFormProps} from '../../base/html/HTML';

export interface FormProps extends HTMLFormProps {
}

export default class Form extends React.Component<FormProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {children, ...props} = this.props;
        return (
            <form {...props} >
                {children}
            </form>
        );
    }
}
