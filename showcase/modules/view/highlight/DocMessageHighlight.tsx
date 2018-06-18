import * as PropTypes from "prop-types";
import * as React from "react";
import {Color} from "bambu";
import Highlight from "component/code/highlight/Highlight";
import {Message, MessageBody, MessageHeader} from "bambu/lib/components/message";

export interface DocMessageHighlightProps {
    className?: string;
    color?: string | Color;
    header?: string | JSX.Element | JSX.Element[];
    lang?: string;
    codes: string[];
    children: any;
}

const DocMessageHighlight: React.SFC<DocMessageHighlightProps> = ((props: DocMessageHighlightProps) => {
    const {color, header, lang, codes, className, children} = props;
    return (
        <Message color={color} className={className}>
            {header && (
                <MessageHeader>
                    title
                </MessageHeader>
            )}
            <MessageBody>
                {children}
                {codes && props.codes.map((code: string, index: number) => (
                    <div key={`highlight-container-${index}`}>
                        <Highlight language={lang}>
                            {code}
                        </Highlight>
                        <br/>
                    </div>
                ))}
            </MessageBody>
        </Message>
    );
});

DocMessageHighlight.propTypes = {
    header: PropTypes.string,
    lang: PropTypes.string,
    codes: PropTypes.arrayOf(PropTypes.string)
};

DocMessageHighlight.defaultProps = {
    color: Color.info,
    lang: "html"
};

export default DocMessageHighlight;
