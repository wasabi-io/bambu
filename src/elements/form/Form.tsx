import * as React from 'react';

import HTMLComponent, {HTMLFormProps} from '../../base/html/HTML';

export type FormProps = HTMLFormProps;

const Form: React.SFC<FormProps> = (props: FormProps) => {

    return (
        <form {...props} >
            {props.children}
        </form>
    );
};

Form.propTypes = HTMLComponent.propTypes;

Form.defaultProps = HTMLComponent.defaultProps;

Form.displayName = 'Form';

export default Form;
