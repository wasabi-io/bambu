import * as PropTypes from "prop-types";
import * as React from "react";
import Editor, {EditorProps} from "../../editor/Editor";
import {PreviewStoreProps} from "../../preview/Preview";
import { Promise } from "es6-promise";

export interface HtmlEditorProps extends EditorProps {
    style?: any;
    elementRef?: any;
    children?: any;
}

const transform = (code: string): Promise<PreviewStoreProps> => {
    return new Promise<PreviewStoreProps>((resolve, reject) => {
        try {
            resolve({
                phase: "Execute",
                Component: () => unescape(code),
                success: true
            });
        }catch (e) {
            resolve({
                phase: "Execute",
                Component: e,
                success: true
            });
        }
    });
};

const HtmlEditor: React.SFC<HtmlEditorProps> = (props: HtmlEditorProps) => {
    if (props.hasPreview) {
        return (
            <Editor readOnly={true} mode="htmlmixed" transform={transform} {...props}>{props.children}</Editor>
        );
    }
    return (
        <Editor readOnly={true} mode="htmlmixed" {...props}>{props.children}</Editor>
    );
};

HtmlEditor.propTypes = {
    ...Editor.propTypes,
    elementRef: PropTypes.func
} as any;

HtmlEditor.defaultProps = {};

export default HtmlEditor;
