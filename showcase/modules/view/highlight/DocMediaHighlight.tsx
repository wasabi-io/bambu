import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Media, MediaContent, MediaLeft} from "bambu/lib/components/media";
import {SubTitle, Title} from "bambu/lib/elements/title";
import {bulma, Size6, size6Values} from "bambu";
import Highlight from "component/code/highlight/Highlight";

export interface DocMediaHighlightProps {
    className?: string;
    title?: string | JSX.Element | JSX.Element[];
    titleSize?: string | Size6;
    contentTitle?: string | JSX.Element | JSX.Element[];
    contentTitleSize?: string | Size6;
    contentSubTitle?: string | JSX.Element | JSX.Element[];
    contentSubTitleSize?: string | Size6;
    lang?: string;
    codes?: string[];
}

const DocMediaHighlight: React.SFC<DocMediaHighlightProps> = ((props: DocMediaHighlightProps) => {
    const {title, titleSize, contentTitle, contentTitleSize, contentSubTitle, contentSubTitleSize, lang, codes, className} = props;
    const classNames = ClassNames(bulma.isLarge, className);
    return (
        <Media className={classNames}>
            {title && (
                <MediaLeft>
                    <Title bSize={titleSize}>{title}</Title>
                </MediaLeft>
            )}
            <MediaContent>
                {contentTitle && (
                    <Title key="title" bSize={contentTitleSize}>
                        {contentTitle}
                    </Title>
                )}
                {contentSubTitle && (
                    <SubTitle key="subtitle" bSize={contentSubTitleSize}>
                        {contentSubTitle}
                    </SubTitle>
                )}
                {codes && props.codes.map((code: string, index: number) => ([
                    <Highlight key={`highlight-${index}`} language={lang}>
                        {code}
                    </Highlight>,
                    <br/>
                ]))}
            </MediaContent>
        </Media>
    );
});

DocMediaHighlight.propTypes = {
    title: PropTypes.string,
    titleSize: PropTypes.oneOf(size6Values),
    contentTitle: PropTypes.string,
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
