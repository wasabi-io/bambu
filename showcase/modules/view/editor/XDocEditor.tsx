import * as classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import xDocEditorStyle from "./xDocEditorStyle";
import {SubTitle, Title} from "bambu/lib/elements/title";
import {bulma, Size6} from "bambu";
import TsxEditor from "../../../component/code/tsx/TsxEditor";

export interface XDocEditorCode {
    code: string;
    title: string;
}

export interface XDocEditorProps {
    title?: string;
    vertical?: boolean;
    snippet?: boolean;
    codes: (string | XDocEditorCode) [];
    children?: any;
    hideCode?: boolean;
    previewClassName?: string;
}

const XDocEditor: React.SFC<XDocEditorProps> = (props: XDocEditorProps) => {
    const {title, hideCode, vertical, snippet, codes, previewClassName, children} = props;

    const previewClassNames = classNames({[`${previewClassName}`]: !vertical});

    return (
        <div key={title}>
            {title && (
                <Title key={`${title}-title`} bSize={Size6.is4} className={classNames(bulma.isSpaced, xDocEditorStyle.bdAnchorTitle)}>
                    <a key={`${title}-link`} className={xDocEditorStyle.bdAnchorLink}>#&nbsp;</a>
                    <span key={`${title}-span`} className={xDocEditorStyle.bdAnchorName}>{title}</span>
                </Title>
            )}
            {children}
            {
                codes && codes.map((code: string | XDocEditorCode, index: number) => (
                    <TsxEditor preview={{className: previewClassNames}} vertical={vertical} hideCode={hideCode} snippet={snippet} key={`${title}-editor-${index}`} value={typeof code === "string" ? code : code.code}>
                        {typeof code !== "string" ? <SubTitle key={"subtitle"}>{code.title}</SubTitle> : null}
                        <br key={`${title}-br-${index}`}/>
                    </TsxEditor>
                ))
            }
        </div>
    );
};

XDocEditor.propTypes = {
    title: PropTypes.string,
    vertical: PropTypes.bool,
    snippet: PropTypes.bool,
    codes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node
};

XDocEditor.defaultProps = {
    previewClassName: bulma.is6
};

export default XDocEditor;
