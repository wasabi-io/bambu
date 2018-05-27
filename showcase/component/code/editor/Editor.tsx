import * as PropTypes from "prop-types";
import * as React from "react";
import {Stateless} from "wasabi-ui";
import cmirror from 'codemirror';
import CodeMirror, {CodeMirrorStore} from "../mirror/CodeMirror";
import Preview, {PreviewStore} from "../preview/Preview";
import transformer from "../transform/transformer";
import {IInstance} from "react-codemirror2";
import Layer, {LayerProps} from "../../layout/Layer";
import Style from "../Styles";
import classNames = require("classnames");

export interface EditorProps extends LayerProps {
    preview?: boolean;
    isSnippet?: boolean;
    code?: string;
}

export default class Editor extends Stateless<EditorProps> {
    public static propTypes = {
        preview: PropTypes.bool,
        code: PropTypes.string.isRequired
    };

    public static defaultProps = {
        preview: true,
        isSnippet: false
    };

    private previewStore: PreviewStore;
    private codeMirrorStore: CodeMirrorStore;

    public constructor(props: EditorProps) {
        super(props);
        this.codeMirrorStore = new CodeMirrorStore({
            code: this.getCode()
        });
        if (this.props.preview) {
            this.previewStore = Editor.createPreviewStore(this.props.code);
        }
    }

    private getCode() {
        let code = this.props.code;
        if (!code) {
            code = this.props.children as any;
        }
        if (typeof code === "string") {
            return code;
        }
        if (typeof code === "function") {
            return code();
        }
        return null;
    }

    private static createPreviewStore(code: string) {
        const result = transformer.execute(code);
        return new PreviewStore(result);
    }

    public render() {
        const {preview, isSnippet, code, className, ...props} = this.props;
        const classnames = classNames({[`${Style.bdSnippet}`]: isSnippet}, className);
        return (
            <div className={classnames}>
                {Editor.renderPreview(this.previewStore, preview)}
                {this.renderEditor()}
            </div>
        );
    }

    public renderEditor() {
        return (
            <CodeMirror
                store={this.codeMirrorStore}
                onBeforeChange={this.onBeforeChange}
                onChange={this.onChange}
            />
        );
    }

    public onBeforeChange = (editor: IInstance, data: cmirror.EditorChange, code: string) => {
        this.codeMirrorStore.setCode(code);
    }

    public onChange = (editor: IInstance, data: cmirror.EditorChange, code: string) => {
        try {
            // eslint-disable-next-line
            const result = transformer.execute(code);
            this.previewStore.setResult(result);
        } catch (e) {
            console.log(e);
        }
    }

    public static renderPreview(store: PreviewStore, preview: boolean) {
        if (!preview) {
            return null;
        }
        return (
            <Preview store={store}/>
        );
    }

}
