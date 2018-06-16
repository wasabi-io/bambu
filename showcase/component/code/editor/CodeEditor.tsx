import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Stateless} from "wasabi-ui";
import Style from "./codeEditorStyle";
import {Column, Columns} from "bambu/lib/grid/column/index";
import Preview, {PreviewStore, PreviewStoreProps} from "../preview/Preview";
import CodeMirror, {CodeMirrorProps} from "../codemirror/CodeMirror";
import {FaIcon, Icon} from "bambu/lib/elements/icon/index";
import {observable} from "mobx";
import {observer} from "mobx-react";
import bulma from "bambu/lib/base/css/bulma";

export interface PreviewOptionalProps {
    className?: string;
}

export interface CodeMirrorOptionalProps extends CodeMirrorProps {
    className?: string;
}

export interface CodeEditorProps {
    preview?: PreviewOptionalProps;
    code?: CodeMirrorOptionalProps;
    hidePreview?: boolean;
    hideCode?: boolean;
    vertical?: boolean;
    snippet?: boolean;
    mode: string;
    theme: string;
    value: string;
    className?: string;
    transform?: (code: string) => Promise<PreviewStoreProps>;
}

@observer
export default class CodeEditor extends Stateless<CodeEditorProps> {
    @observable
    private isActive: boolean;
    public static propTypes = {
        preview: PropTypes.object,
        code: PropTypes.object,
        hidePreview: PropTypes.bool,
        hideCode: PropTypes.bool,
        vertical: PropTypes.bool,
        snippet: PropTypes.bool,
        mode: PropTypes.string,
        theme: PropTypes.string,
        value: PropTypes.string,
        className: PropTypes.string,
        transform: PropTypes.func
    };

    public static defaultProps = {
        vertical: false,
        preview: {},
        codeMirror: {},
        hidePreview: false,
        hideCode: false,
        transform: CodeEditor.defaultTransform,
        snippet: true
    };

    private previewStore: any = new PreviewStore({
        phase: "Initial",
        Component: null,
        success: true
    });

    public constructor(props: CodeEditorProps) {
        super(props);
        this.isActive = !props.hideCode;
    }

    public render() {
        const {hideCode, hidePreview, preview, code, vertical, snippet, mode, theme, value, className, children, ...props} = this.props;

        const editorClassNames = ClassNames(
            Style.codeEditor,
            className
        );

        const snippetClassName = ClassNames(
            {
                [`${Style.ceSnippet}`]: snippet,
                [`${Style.ceIsClipped}`]: snippet,
                [`${bulma.is3}`]: snippet
            },
            Style[vertical ? Style.ceIsVertical : Style.ceIsHorizontal]
        );
        const codeMirror = {...code, mode, theme, value};

        return (
            <div className={editorClassNames}>
                {children}
                <div className={snippetClassName}>
                    {vertical ? (this.renderVertical(vertical, hidePreview, preview, codeMirror))
                        : (this.renderHorizontal(vertical, hidePreview, preview, codeMirror))}
                </div>
            </div>
        );
    }

    public renderVertical(vertical: boolean, hidePreview: boolean, preview: PreviewOptionalProps, codeMirror: CodeMirrorOptionalProps) {
        return (
            <div>
                {!hidePreview && (
                    <Columns className={ClassNames(Style.ceColumns)}>
                        {this.renderPreview(preview)}
                    </Columns>
                )}
                {this.isActive ? (
                    <Columns className={ClassNames(Style.ceColumns)}>
                        {this.renderCodeMirror(codeMirror)}
                    </Columns>
                ) : (CodeEditor.renderShowCodeIcon(vertical, () => this.isActive = true))}
            </div>
        );
    }

    public renderHorizontal(vertical: boolean, hidePreview: boolean, preview: PreviewOptionalProps, codeMirror: CodeMirrorOptionalProps) {
        return (
            <Columns className={ClassNames(Style.ceColumns)}>
                {!hidePreview && this.renderPreview(preview)}
                {this.isActive ? (
                    <Columns className={ClassNames(Style.ceColumns)}>
                        {this.renderCodeMirror(codeMirror)}
                    </Columns>
                ) : (CodeEditor.renderShowCodeIcon(vertical, () => this.isActive = true))}
            </Columns>
        );
    }

    public renderPreview(options: PreviewOptionalProps) {
        const {className, ...props} = options;
        const classNames = ClassNames(
            Style.ceColumn,
            Style.cePreview,
            "is-paddingless",
            className,
        );
        return (
            <Column className={classNames}>
                <Preview store={this.previewStore} {...props} />
            </Column>
        );
    }

    public renderCodeMirror(options: CodeMirrorOptionalProps) {
        const {className, ...props} = options;
        const classNames = ClassNames(
            Style.ceColumn,
            Style.ceCodeMirror,
            className
        );
        return (
            <Column className={classNames}>
                <CodeMirror onChange={this.onChange} {...props} />
            </Column>
        );
    }

    public static renderShowCodeIcon(vertical: boolean, onShow: () => any) {
        const classNames = ClassNames(
            Style.ceShowIcon,
            Style[vertical ? Style.ceIsVertical : Style.ceIsHorizontal]
        );
        return (
            <div onClick={onShow} style={{cursor: "pointer"}} className={classNames}>
                <Icon><FaIcon name="code"/></Icon>
            </div>
        );
    }

    public componentDidMount() {
        this.onChange(this.props.value);
    }

    public onChange(code: string) {
        this.props.transform(code).then((props: PreviewStoreProps) => {
            this.previewStore.setResult(props);
        });
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
