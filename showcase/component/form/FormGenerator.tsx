import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import {Column, Columns} from "bambu/lib/grid/column";
import formManager from "./FormManager";
import {Color} from "bambu";
import {FieldProps, FormField} from "./FormField";
import {IEvent} from "../field/Field";

export interface FormGeneratorProps {
    fields: FormField[];
    input?: FieldProps;
    columnSize?: number;
    onChange?: (name: string, ev: IEvent) => any
}

export default class FormGenerator extends Stateless<FormGeneratorProps> {
    public static propTypes = {
        fields: PropTypes.arrayOf(PropTypes.object),
        input: PropTypes.object,
        columnSize: PropTypes.number
    };

    public static defaultProps = {
        columnSize: 2,
        input: {}
    };
    public createOnChange = (name: string, handler?: (e: IEvent) => any) => {
        return (ev: IEvent) => {
            if (this.props.onChange) {
                this.props.onChange(name, ev);
            }
            if (handler) {
                handler(ev);
            }
        };
    };

    public static renderField(formGen: FormGenerator, field: FormField) {
        const Component = formManager.get(field.type);
        if (!Component) {
            throw new Error(`${field.type} not found in form fields !`);
        }

        const fieldProp = formGen.props.input[field.name] || {};
        const helpColor = fieldProp.helpColor || Color.danger;
        const color = fieldProp.help ? helpColor : field.color;
        return (
            <Column key={field.name}>
                <Component
                    {...field}
                    key={field.name}
                    help={fieldProp.help}
                    onChange={formGen.createOnChange(field.name, fieldProp.onChange || field.onChange)}
                    {...fieldProp}
                    color={color}
                    helpColor={helpColor}
                />
            </Column>
        );
    }

    public render() {

        const elements: JSX.Element[] = [];

        for (let i = 0; i < this.props.fields.length; i = i + this.props.columnSize) {

            const columns = [];

            for (let j = i; j < i + this.props.columnSize; j++) {
                columns.push(j < this.props.fields.length ? FormGenerator.renderField(this, this.props.fields[j]) :
                    <Column key={j}/>);
            }

            elements.push(
                <Columns key={`rows-${i}`}>
                    {columns}
                </Columns>
            );
        }

        return elements;
    }
}
