import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import accordionStyle from "./accordionStyle";
import {HTMLComponent, HTMLDivProps} from "bambu";
import AsyncComponent from "../../lazy/AsyncComponent";

export type AccordionTabHeader = string | JSX.Element;

export interface AccordionTabProps extends HTMLDivProps {
    activeTab?: string;
    name: string;
    header: AccordionTabHeader;
    elementRef?: (ref: any) => any;
    getContent?: (props?: AccordionTabProps) => Promise<JSX.Element>;
    onToggle?: (name?: string) => any;
}

export default class AccordionTab extends Stateless<AccordionTabProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public constructor(props: AccordionTabProps) {
        super(props);
    }

    public render() {
        const {activeTab, getContent, name, header, className, children, ...props} = this.props;

        const classNames = ClassNames(
            accordionStyle.accordionTab,
            className
        );

        return (
            <div className={classNames} {...props}>
                {this.renderHeader(this.props)}
                <div className={accordionStyle.accordionTabContent}>
                    {
                        this.getContent()
                    }
                </div>
            </div>
        );
    }

    public getContent() {
        if (this.props.activeTab !== this.props.name) {
            return null;
        }
        if (this.props.getContent) {
            return <AsyncComponent getComponent={() => this.props.getContent(this.props)}/>;
        }
        return this.props.children;
    }

    public renderHeader(props: AccordionTabProps) {
        return (
            <>
                <input id={`${props.name}${this.id}`} onChange={(e?: any) => {
                    e.target.value = e.target.checked;
                    props.onToggle(props.name);
                }} type="checkbox" checked={props.name === props.activeTab} name={props.name}/>
                <label htmlFor={`${props.name}${this.id}`}>
                    {props.header}
                </label>
            </>
        );
    }
}
