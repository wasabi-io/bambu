import * as React from "react";
import { Container } from "rebul/lib/elements/container";
import { Notification } from "rebul/lib/elements/notification";
import {Color} from "rebul/lib/base/css";

const ContainerSample2: React.SFC<{}> = (props: {}) => {
    return (
        <Container fluid>
            <Notification>
                This container is <strong>fluid</strong> on desktop.
            </Notification>
        </Container>
    )
};

export default ContainerSample2;
