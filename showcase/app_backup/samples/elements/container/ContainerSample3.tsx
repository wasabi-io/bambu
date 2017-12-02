import * as React from "react";
import { Container } from "rebul/lib/elements/container";
import { Notification } from "rebul/lib/elements/notification";
import {Color} from "rebul/lib/base/css";

const ContainerSample3: React.SFC<{}> = (props: {}) => {
    return (
        <Container fullHd>
            <Notification>
                This container is <strong>fullHd</strong> on desktop.
            </Notification>
        </Container>
    )
};

export default ContainerSample3;
