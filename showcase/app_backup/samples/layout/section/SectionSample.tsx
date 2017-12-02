import * as React from "react";
import { Section } from "rebul/lib/layout/section"
import Container from "rebul/lib/elements/container/Container";
import Title from "rebul/lib/elements/title/Title";
import SubTitle from "rebul/lib/elements/title/SubTitle";

const SectionSample: React.SFC<{}> = (props: {}) => {
    return (
        <Section>
            <Container>
                <Title>Section</Title>
                <SubTitle>
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </SubTitle>
            </Container>
        </Section>
    );
};

export default SectionSample;
