import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import FormStyle from "./FormStyle";

export type FormProps = HTMLDivProps;

const Form: React.SFC<FormProps> = (props: FormProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([FormStyle.box, className]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Form.propTypes = HTMLComponent.propTypes;

Form.defaultProps = HTMLComponent.defaultProps;

Form.displayName = "Form";

export default Form;
