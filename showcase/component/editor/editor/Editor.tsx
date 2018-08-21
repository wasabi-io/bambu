import * as ClassNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";
import editorStyle from "./editorStyle";
import {HTMLComponent} from "bambu";
import Mirror, {MirrorOptions} from "../mirror/Mirror";
import Preview, {PreviewStore, PreviewStoreProps} from "../preview/Preview";
import {observable} from "mobx";
import {observer} from "mobx-react";
import CodeUtility from "../util/CodeUtility";
import Stateless from "../../Stateless";
import { Promise } from "es6-promise";

export interface EditorProps extends MirrorOptions {
    isVertical?: boolean;
    isSnippet?: boolean;
    isActive?: boolean;
    containerClassName?: string;
    previewClassName?: string;
    mirrorClassName?: string;
    mirrorContainerClassName?: string;
    hasPreview?: boolean;
    transform?: (code: string) => Promise<PreviewStoreProps>;
}

@observer
export default class Editor extends Stateless<EditorProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        isVertical: PropTypes.bool,
        isSnippet: PropTypes.bool,
        transform: PropTypes.func,
        hasPreview: PropTypes.bool
    };

    public static defaultProps = {
        ...Mirror.defaultProps,
        isVertical: false,
        isSnippet: true,
        transform: Editor.defaultTransform,
        hasPreview: true
    };

    private readonly previewStore: any = new PreviewStore({
        phase: "Initial",
        Component: null,
        success: true
    });

    private editorContainerId = `editor-mirror-container-${this.id}`;

    @observable
    public isActive: boolean;

    @observable
    public currentTheme: string;

    @observable
    public currentMode: string;

    private mirror: Mirror;

    public constructor(props: EditorProps) {
        super(props);
        this.isActive = props.isActive;
        this.currentTheme = props.theme;
        this.currentMode = props.mode;
    }

    public render() {
        const {isVertical, isSnippet, hasPreview, previewClassName, mirrorClassName, mirrorContainerClassName, containerClassName, className, children, ...options} = this.props;

        const containerClassNames = ClassNames(editorStyle.editorContainer, containerClassName);

        const classNames = ClassNames(editorStyle.editorPanel, {[`${editorStyle.isVertical}`]: isVertical}, className);

        return (
            <div className={containerClassNames}>
                <div className={classNames}>
                    {isSnippet && <div className={ClassNames(editorStyle.editorSnippet)} />}
                    {hasPreview && this.renderPreview(this.props)}
                    {this.renderMirror(options)}
                </div>
            </div>
        );
    }

    public componentDidMount() {
        this.onChange(this.props.value);
    }

    public renderPreview(props: EditorProps) {
        const {previewClassName, isVertical} = props;

        const classNames = ClassNames(
            editorStyle.editorItem,
            editorStyle.editorPreviewContainer,
            {[`${editorStyle.isVertical}`]: isVertical},
            {[`${editorStyle.isActive}`]: this.isActive},
            previewClassName
        );

        return (
            <div className={classNames}>
                <Preview className={editorStyle.editorPreview} store={this.previewStore}/>
            </div>
        );
    }

    public renderMirror(options: MirrorOptions) {

        const classNames = ClassNames(
            editorStyle.editorItem,
            editorStyle.editorMirrorContainer,
            {[`${editorStyle.isVertical}`]: this.props.isVertical},
            {[`${editorStyle.isActive}`]: this.isActive},
            this.props.mirrorContainerClassName
        );

        const editorClassNames = ClassNames(
            editorStyle.editorMirror,
            {[`${editorStyle.isVertical}`]: this.props.isVertical},
            this.props.mirrorClassName
        );

        return (
            <div id={this.editorContainerId} className={classNames}>
                {!this.isActive && <a className={editorStyle.editorMirrorHide} onClick={() => this.isActive = true}>&lt; /&gt;</a>}
                {this.isActive && (
                    <button onClick={this.onClickCopy}
                            onMouseOver={this.onMouseOverCopy}
                            onMouseOut={this.onMouseOutCopy}
                            className={editorStyle.editorCopy}
                    >Copy
                    </button>
                )}
                <Mirror ref={(ref: any) => this.mirror = ref} onChange={this.onChange} className={ClassNames(editorStyle.editorMirrorParent, {[`${editorStyle.isActive}`]: this.isActive})} editorClassName={editorClassNames} {...options} />
            </div>
        );
    }

    public onMouseOverCopy = (e: any) => {
        CodeUtility.addClassName(document.getElementById(this.editorContainerId), editorStyle.isHovering);
        e.stopPropagation();
    }
    public onMouseOutCopy = (e: any) => {
        CodeUtility.removeClass(document.getElementById(this.editorContainerId), editorStyle.isHovering);
        e.stopPropagation();
    }

    public onClickCopy = () => {
        this.mirror.copy();
    }

    public onChange = (code: string) => {
        if (this.props.hasPreview) {
            this.props.transform(code).then((props: PreviewStoreProps) => {
                this.previewStore.setResult(props);
            });
        }
    }

    private static defaultTransform(code: string): Promise<PreviewStoreProps> {
        return new Promise<PreviewStoreProps>((resolve, reject) => {
            resolve({
                phase: "Execute",
                Component: () => (<pre>{code}</pre>),
                success: true
            });
        });
    }
}
