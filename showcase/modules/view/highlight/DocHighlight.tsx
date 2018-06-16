import * as classNames from "classnames";
import * as React from "react";
import xDocEditorStyle from "../editor/xDocEditorStyle";
import {Title} from "bambu/lib/elements/title/index";
import {bulma, Size6} from "bambu";
import Highlight from "component/code/highlight/Highlight";

export interface DocIconProps {
    title?: string;
    codes: string[];
    lang?: string;
    children: any;
}

const DocHighlight: React.SFC<DocIconProps> = (props: DocIconProps) => {
    const {codes, title, children} = props;
    return (
        <div key={title}>
            {title && (
                <Title key={`${title}-title`} bSize={Size6.is4} className={classNames(bulma.isSpaced, xDocEditorStyle.bdAnchorTitle)}>
                    <a key={`${title}-link`} className={xDocEditorStyle.bdAnchorLink}>
                        #&nbsp;
                    </a>
                    <span key={`${title}-span`} className={xDocEditorStyle.bdAnchorName}>
                        {title}
                    </span>
                </Title>
            )
            }
            {children}
            {
                codes && codes.map((code: string, index: number) => (
                    [
                        <br key={`${title}-br-${index}`}/>,
                        <Highlight language={props.lang} key={`${title}-editor-${index}`}>
                            {code}
                        </Highlight>
                    ]
                ))
            }
        </div>
    );
};

DocHighlight.defaultProps = {
    lang: "javascript"
}

export default DocHighlight;
