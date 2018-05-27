import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import SCStore from "./SCStore";
import {BreadCrumb, BreadCrumbItem} from "bambu/lib/components/breadcrumb";
import {SubTitle, Title} from "bambu/lib/elements/title";
import bulmaDocs from "../../css/bulmaDocs";
import {Size6} from "bambu";
import components, {DocumentProps} from "./components";
import DynamicComponent from "./DynamicComponent";
import {observer} from "mobx-react";
import NotFound from "../../view/NotFound";
import {toJS} from "mobx";
import {Props} from "wasabi-common";
import * as classNames from "classnames";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Container} from "bambu/lib/elements/container/index";
import Strings from "wasabi-common/lib/types/Strings";

export interface DynamicRouterProps {
    store: SCStore;
}

export interface ComponentResult {
    component: DocumentProps;
    path: string;
    siblings?: Props<DocumentProps>;
}

@observer
export default class DynamicRouter extends Stateless<DynamicRouterProps> {

    public render() {
        const {paths} = this.props.store;
        const breads = toJS(paths);
        const props = DynamicRouter.getComponent(paths);
        if (!props || !props.component) {
            console.log();
            return (
                <NotFound/>
            );
        }
        return (
            <main className={bulmaDocs.bdMain}>
                <div className={bulmaDocs.bdSideBackground}/>
                <Container className={bulmaDocs.bdMainContainer}>
                    <div className={bulmaDocs.bdDuo}>
                        <div className={bulmaDocs.bdLead}>
                            {DynamicRouter.renderBreadCrumb(breads)}
                            <header className={bulmaDocs.bdHeader}>
                                <div className={bulmaDocs.bdHeaderTitles}>
                                    <Title>
                                        {props.component.title}
                                    </Title>
                                    <SubTitle bSize={Size6.is4}>
                                        {props.component.subTitle}
                                    </SubTitle>
                                </div>
                            </header>
                            <div className={bulmaDocs.bdContent}>
                                {props.component.children &&
                                <nav key={`nav-${props.component.title}`} className={bulmaDocs.bdLinks}>
                                    {DynamicRouter.renderReferences(props.component.children, breads)}
                                </nav>
                                }
                                {DynamicRouter.renderModule(props.component.module, this.props.store)}
                                {this.props.children}
                                {DynamicRouter.renderNextPrevious(props, paths)}
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        );
    }

    public static renderBreadCrumb(breads: string[]) {
        if (!breads || breads.length === 0) return null;

        const crumbs = ["Home", ...breads];
        return (
            <div className={bulmaDocs.bdBreadcrumb}>
                <BreadCrumb>
                    {
                        crumbs.map((item: string, index: number) => (
                            <BreadCrumbItem href={`#/${breads.slice(0, index).join("/")}`} key={item} isActive={crumbs.length - 1 === index}>
                                {Strings.capitalizeFirstLetter(item)}
                            </BreadCrumbItem>
                        ))
                    }
                </BreadCrumb>
            </div>
        );
    }

    public static renderNextPrevious(props: ComponentResult, paths: string[]) {
        if (!props.siblings) {
            return null;
        }
        const siblings: string[] = [];
        let indexOf = 0;
        let index = 0;
        for (const key in props.siblings) {
            if (props.siblings.hasOwnProperty(key)) {
                siblings.push(key);
                if (props.path === key.toLocaleLowerCase()) {
                    indexOf = index;
                }
                index = index + 1;
            }
        }
        const left = indexOf > 0 ? siblings[indexOf - 1] : null;
        const right = indexOf < siblings.length ? siblings[indexOf + 1] : null;
        if (!right && !left) {
            return null;
        }
        return (
            <nav className={bulmaDocs.bdPrevNextBis}>
                {left && this.renderNextPreviousLink(left, paths, props.siblings[left].title, true)}
                {right && this.renderNextPreviousLink(right, paths, props.siblings[right].title, false)}
            </nav>
        );
    }

    public static renderNextPreviousLink(link: string, paths: string[], title: string, isPrevious: boolean) {
        const linkPaths = paths.slice(0, paths.length - 1);
        linkPaths.push(link);
        const text = isPrevious ? `← ${title}` : `${title} →`;
        const className = isPrevious ? bulmaDocs.bdPrevNextBisPrevious : bulmaDocs.bdPrevNextBisNext;
        return (
            <a className={className} href={`#/${linkPaths.join("/")}`} title={title}>
                {text}
            </a>
        );
    }

    public static renderReferences(childs: Props<any>, breads: string[]) {
        const elements: JSX.Element[] = [];
        for (const key in childs) {
            if (childs.hasOwnProperty(key)) {
                const child = childs[key];
                const {name, title, subTitle, module, children, icon, iconStyle, iconClassName, ...props} = child;
                const paths = breads.slice(0);
                paths.push(name);
                const href = paths.join("/");
                elements.push(
                    <a key={href} className={bulmaDocs.bdLink} href={`#/${href}`}>
                        <h2 className={bulmaDocs.bdLinkName}>
                            <figure className={bulmaDocs.bdLinkFigure}>
                                {icon !== "linkCounter" ? (
                                    <span className={classNames(bulmaDocs.bdLinkIcon, iconClassName)}>
                                        <Icon><FaIcon iconStyle={iconStyle} name={icon} /></Icon>
                                    </span>
                                ) : <span className={bulmaDocs.bdLinkCounter}/>}
                            </figure>
                            {title}
                        </h2>
                        <p className={bulmaDocs.bdLinkSubtitle}>
                            {subTitle}
                        </p>
                    </a>
                );
            }
        }
        return elements;
    }

    public static getComponent(paths: string[]): ComponentResult {
        let comp = components[paths[0]];

        let siblings = null;
        let lastPath = null;
        for (let i = 1; i < paths.length; i = i + 1) {
            const path = paths[i];

            if (!comp) {
                throw new Error("Component Not Found");
            }
            if (!comp.children) {
                throw new Error("Component Children Not Found");
            }
            siblings = comp.children;
            lastPath = path.toLocaleLowerCase();
            comp = comp.children[lastPath];
        }
        return {
            siblings,
            path: lastPath,
            component: comp,
        };
    }

    public static renderModule(module: string, store: SCStore) {
        if (!module) {
            return null;
        }
        const component = <DynamicComponent store={store}/>;
        System.import(`${module}/index`).then((module: any) => {
            store.setComponent(module.default);
        });
        return component;
    }
}
