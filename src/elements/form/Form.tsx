import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLFormProps} from '../../base/html/HTML';

export interface FormProps extends HTMLFormProps {
    elementRef?: (ref: any) => any;
}

export default class Form extends React.Component<FormProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {children, elementRef, ...props} = this.props;
        return (
            <form ref={elementRef} {...props}>
                {children}
            </form>
        );
    }
}
