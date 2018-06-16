import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import accordionStyle from "./accordionStyle";
import {HTMLComponent, HTMLDivProps} from "bambu";
import {AccordionTabProps} from "./AccordionTab";
import {AccordionTab} from "./index";
import {observable} from "mobx";
import {observer} from "mobx-react";
import Panel from "bambu/lib/components/panel/Panel";

export interface AccordionProps extends HTMLDivProps {
    header?: string;
    tabs: AccordionTabProps[];
    activeTab?: string;
    getContent?: (props?: AccordionTabProps) => Promise<JSX.Element>;
    elementRef?: (ref: any) => any;
}

@observer
export default class Accordion extends Stateless<AccordionProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    @observable
    private activeTab: string;

    public constructor(props: AccordionProps) {
        super(props);
        this.activeTab = props.activeTab;
    }

    public static defaultProps = HTMLComponent.defaultProps;

    public render() {
        const {tabs, activeTab, header, getContent, className, children} = this.props;

        const classNames = ClassNames(
            accordionStyle.accordion,
            className
        );

        return (
            <Panel className={classNames} title={header}>
                {tabs.map((tab: AccordionTabProps) => {
                    return (
                        <AccordionTab key={tab.name} {...tab} getContent={getContent} activeTab={this.activeTab} onToggle={(name: string) => {
                            console.log(name);
                            this.activeTab = (this.activeTab === name) ? null : name ;
                        }}/>
                    );
                })}
            </Panel>
        );
    }
}
