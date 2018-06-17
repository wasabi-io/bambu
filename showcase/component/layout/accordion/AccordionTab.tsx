import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import accordionStyle from "./accordionStyle";
import {HTMLComponent, HTMLDivProps} from "bambu";
import AsyncComponent from "../../lazy/AsyncComponent";

export type AccordionTabHeader = React.ReactChild;

export interface AccordionTabProps extends HTMLDivProps {
    activeTab?: string;
    name: string;
    header: AccordionTabHeader;
    elementRef?: (ref: any) => any;
    getContent?: (props?: AccordionTabProps) => Promise<JSX.Element>;
    onToggle?: (name?: string) => any;
    renderer?: (id: string, props?: AccordionTabProps) => React.ReactChild;
}

export default class AccordionTab extends Stateless<AccordionTabProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        activeTab: PropTypes.string,
        name: PropTypes.string,
        header: PropTypes.object,
        getContent: PropTypes.func,
        onToggle: PropTypes.func,
        renderer: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        renderer: AccordionTab.renderHeader
    };

    public constructor(props: AccordionTabProps) {
        super(props);
    }

    public render() {
        const {activeTab, getContent, name, header, renderer, className, children, ...props} = this.props;

        const classNames = ClassNames(
            accordionStyle.accordionTab,
            className
        );

        return (
            <div className={classNames} {...props}>
                {renderer(this.id, this.props)}
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

    public static renderHeader(id: string, props: AccordionTabProps) {
        const key = `at-${props.name}-${id}`;
        return (
            <>
                <input key={key} id={key} onChange={(e?: any) => {
                    e.target.value = e.target.checked;
                    props.onToggle(props.name);
                }} type="checkbox" checked={props.name === props.activeTab} name={props.name}/>
                <label key={`${key}-label`} htmlFor={key}>
                    {props.header}
                </label>
            </>
        );
    }
}
