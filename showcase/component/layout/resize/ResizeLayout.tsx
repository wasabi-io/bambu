import * as PropTypes from 'prop-types';
import * as React from 'react';
import {HTMLComponent, HTMLDivProps} from "bambu";

export interface DesignedPage {
    width: number;
    height: number;
}

export interface OnResize {
    (designedPage: DesignedPage): any;
}

export enum ResizeType {
    screen = "screen",
    page = "page"
}

export interface ResizeLayoutProps extends HTMLDivProps {
    type?: ResizeType;
    onResize: OnResize;
    onInit: OnResize;
    resizeEventDelay?: number;
    elementRef?: (ref: any) => any;
}

export default class ResizeLayout extends React.Component<ResizeLayoutProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        type: PropTypes.string,
        onResize: PropTypes.func,
        onInit: PropTypes.func,
        elementRef: PropTypes.func,
        resizeEventDelay: PropTypes.number
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        type: ResizeType.screen,
        resizeEventDelay: 50
    };

    private elementRef: HTMLElement;

    private currentDesignedPage: DesignedPage;

    private onResizingHandler: any;
    private onResizingTimer: any;
    private resizeThrottled = false;

    public constructor(props: ResizeLayoutProps) {
        super(props);
        this.initResizedEvent();
    }

    private initResizedEvent() {
        this.onResizingHandler = this.props.resizeEventDelay > 0 ? this.onResizingWithTimer : this.onResizing;
    }

    private onResizingWithTimer = () => {
        if (!this.resizeThrottled) {
            // actual callback action
            this.onResizing();
            // we're throttled!
            this.resizeThrottled = true;
            this.createOnResizingTimer();
        } else {
            this.clearTimer();
            this.createOnResizingTimer();
        }
    }

    private createOnResizingTimer = () => {
        // set a timeout to un-throttle
        this.onResizingTimer = setTimeout(() => {
            this.resizeThrottled = false;
            this.clearTimer();
            this.onResizing();
        }, this.props.resizeEventDelay);
    }

    public clearTimer() {
        if (this.onResizingTimer) {
            clearTimeout(this.onResizingTimer);
            this.onResizingTimer = null;
        }
    }

    public render() {

        const {type, onResize, onInit, elementRef, resizeEventDelay, children, ...props} = this.props;

        return (
            <div ref={this.setElementRef} {...props}>
                {children}
            </div>
        );
    }

    private setElementRef = (ref: HTMLElement) => {
        this.elementRef = ref;
        if (this.props.elementRef) {
            this.props.elementRef(ref);
        }
    }

    public componentDidMount() {
        const designedPage = this.getDesignedPage();
        this.props.onInit(designedPage);
        window.addEventListener("resize", this.onResizingHandler);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.onResizingHandler);
    }

    private onResizing = () => {
        const designedPage = this.getDesignedPage();
        if (!this.isEqual(designedPage)) {
            this.currentDesignedPage = designedPage;
            this.props.onResize(designedPage);
        }
    }

    private getDesignedPage() {
        return this.props.type === ResizeType.screen ?
            ResizeLayout.getWindow() :
            ResizeLayout.getPage(this.elementRef);
    }

    public isEqual(designedPage: DesignedPage) {
        return this.currentDesignedPage && this.currentDesignedPage.width === designedPage.width && this.currentDesignedPage.height === designedPage.height;
    }

    public static getWindow() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    public static getPage(page: HTMLElement) {
        return {
            width: page.offsetWidth,
            height: page.offsetHeight
        };
    }
}
