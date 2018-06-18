import * as React from "react";
import CodeEditor, {CodeMirrorOptionalProps, PreviewOptionalProps} from "../editor/CodeEditor";
import transformer, {TransformResult} from "../transform/transformer";
import * as PropTypes from "prop-types";

export interface TsxEditorProps {
    preview?: PreviewOptionalProps;
    code?: CodeMirrorOptionalProps;
    hidePreview?: boolean;
    hideCode?: boolean;
    vertical?: boolean;
    snippet?: boolean;
    theme?: string;
    value: string;
    className?: string;
    children?: any;
}

const transform = (code: string) => new Promise<TransformResult>((resolve, reject) => {
    try {
        const result = transformer.execute(code);
        resolve(result);
    } catch (e) {
        reject({
            phase: "Execute",
            Component: e,
            success: false
        });
    }
});

const TsxEditor: React.SFC<TsxEditorProps> = (props: TsxEditorProps) => {
    return (
        <CodeEditor
            mode="jsx"
            transform={transform}
            theme={props.theme}
            {...props}
        >
            {props.children}
        </CodeEditor>
    );
};

TsxEditor.propTypes = {
    preview: PropTypes.object,
    code: PropTypes.object,
    hidePreview: PropTypes.bool,
    hideCode: PropTypes.bool,
    vertical: PropTypes.bool,
    snippet: PropTypes.bool,
    theme: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string
};

TsxEditor.defaultProps = {
    theme: "mdn-like"
};

export default TsxEditor;
