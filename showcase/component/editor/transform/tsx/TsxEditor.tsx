import * as PropTypes from "prop-types";
import * as React from "react";
import transformer, {TransformResult} from "./transformer";
import Editor, {EditorProps} from "../../editor/Editor";
import { Promise } from "es6-promise";

export interface TsxEditorProps extends EditorProps {
    style?: any;
    elementRef?: any;
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
    if (props.hasPreview) {
        return (
            <Editor transform={transform} mode="jsx"{...props}>{props.children}</Editor>
        );
    }
    return (<Editor transform={transform} mode="jsx"{...props}>{props.children}</Editor>);
};

TsxEditor.propTypes = {
    ...Editor.propTypes,
    elementRef: PropTypes.func
} as any;

TsxEditor.defaultProps = {};

export default TsxEditor;
