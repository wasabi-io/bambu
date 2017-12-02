import * as React from "react";
import { Footer } from "rebul/lib/layout/footer"
import Container from "rebul/lib/elements/container/Container";
import Content from "rebul/lib/elements/content/Content";

const HeroSample: React.SFC<{}> = (props: {}) => {
    const style = {padding: '10px'};
    return (
        <Footer>
            <Container>
                <Content>
                    <p style={{ textAlign: 'center'}}>
                        <strong>reBulma</strong> by <a href="https://github.com/bokuweb">bokuweb</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                    </p>
                    <p style={{ textAlign: 'center'}}>
                        <a className="icon" href="https://github.com/bokuweb/re-bulma">
                            <i className="fa fa-github"></i>
                        </a>
                    </p>
                </Content>
            </Container>
        </Footer>
    );
};

export default HeroSample;
