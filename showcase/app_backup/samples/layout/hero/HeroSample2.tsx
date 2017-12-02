import * as React from "react";
import { Hero, HeroBody } from "rebul/lib/layout/hero"
import Container from "rebul/lib/elements/container/Container";
import Title from "rebul/lib/elements/title/Title";
import SubTitle from "rebul/lib/elements/title/SubTitle";
import HeroHead from "rebul/lib/layout/hero/HeroHead";
import HeroFoot from "rebul/lib/layout/hero/HeroFoot";

const HeroSample2: React.SFC<{}> = (props: {}) => {
    return (
        <Hero color="isPrimary" size="isMedium">
            <HeroHead>

            </HeroHead>
            <HeroBody>
                <Container textCentered>
                    <Title>Hero title</Title>
                    <SubTitle>Hero subtitle</SubTitle>
                </Container>
            </HeroBody>
            <HeroFoot>

            </HeroFoot>
        </Hero>
    );
};

export default HeroSample2;
