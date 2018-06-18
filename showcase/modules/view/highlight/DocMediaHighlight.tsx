import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Media, MediaContent, MediaLeft} from "bambu/lib/components/media";
import {SubTitle, Title} from "bambu/lib/elements/title";
import {bulma, Size6, size6Values} from "bambu";
import Highlight from "component/code/highlight/Highlight";
import Generator from "wasabi-common/lib/util/Generator";

export interface DocMediaHighlightProps {
    className?: string;
    title?: React.ReactChild;
    titleSize?: string | Size6;
    contentTitle?: React.ReactChild;
    contentTitleSize?: string | Size6;
    contentSubTitle?: string | JSX.Element | JSX.Element[];
    contentSubTitleSize?: string | Size6;
    lang?: string;
    codes?: string[];
    children?: any;
}

const DocMediaHighlight: React.SFC<DocMediaHighlightProps> = ((props: DocMediaHighlightProps) => {
    const {title, titleSize, contentTitle, contentTitleSize, contentSubTitle, contentSubTitleSize, lang, codes, className, children} = props;
    const classNames = ClassNames(bulma.isLarge, className);
    const id = Generator.guid();
    return (
        <Media key={`media-${title}`} className={classNames}>
            {title && (
                <MediaLeft key={`media-left-${id}`}>
                    <Title bSize={titleSize}>{title}</Title>
                </MediaLeft>
            )}
            <MediaContent key={`media-content-${id}`}>
                {contentTitle && (
                    <Title key={`media-content-title-${id}`} bSize={contentTitleSize}>
                        {contentTitle}
                    </Title>
                )}
                <hr key={`media-content-hr-${id}`} style={{border: "1px dashed #e2e2e2", marginBottom: "10px"}}/>
                {contentSubTitle && (
                    <SubTitle key={`media-content-subtitle-${id}`} bSize={contentSubTitleSize}>
                        {contentSubTitle}
                    </SubTitle>
                )}
                {codes && props.codes.map((code: string, index: number) => (
                    <div key={`highlight-container-${index}`}>
                        <Highlight key={`highlight-${index}-${id}`} language={lang}>
                            {code}
                        </Highlight>
                    </div>
                ))}
            </MediaContent>
        </Media>
    );
});

DocMediaHighlight.propTypes = {
    title: PropTypes.string,
    titleSize: PropTypes.oneOf(size6Values),
    contentTitle: PropTypes.node,
    contentTitleSize: PropTypes.oneOf(size6Values),
    contentSubTitle: PropTypes.string,
    contentSubTitleSize: PropTypes.oneOf(size6Values),
    lang: PropTypes.string,
    codes: PropTypes.arrayOf(PropTypes.string)
};

DocMediaHighlight.defaultProps = {
    titleSize: Size6.is5,
    contentTitleSize: Size6.is5,
    contentSubTitleSize: Size6.is6,
    lang: "html"
};

export default DocMediaHighlight;
