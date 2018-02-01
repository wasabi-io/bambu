import * as React from 'react';
import { Container } from 'rebul/lib/elements/container';
import { Notification } from 'rebul/lib/elements/notification';
import { Color } from 'rebul/lib/base/css';

const ContainerSample1: React.SFC<{}> = (props: {}) => {
  return (
    <Container>
      <Notification>
        This container is <strong>centered</strong> on desktop.
            </Notification>
    </Container>
  );
};

export default ContainerSample1;
