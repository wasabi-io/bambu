import * as React from 'react';
import { Column, Columns } from 'rebul/lib/grid/column';
import { Notification } from 'rebul/lib/elements/notification';

const ColumnSample2: React.SFC<{}> = (props: {}) => {

  const style = { padding: '10px' };

  return (<div>
    <Columns>
      <Column size="isThreeQuarters" style={style}>
        <Notification color="isInfo">
          is-three-quarters
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
                    </Notification>
      </Column>
    </Columns>
    <Columns>
      <Column size="isTwoThirds" style={style}>
        <Notification color="isInfo">
          is-two-thirds
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
                    </Notification>
      </Column>
    </Columns>
    <Columns>
      <Column size="isHalf" style={style}>
        <Notification color="isInfo">
          is-half
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
                    </Notification>
      </Column>
    </Columns>
    <Columns>
      <Column size="isOneThird" style={style}>
        <Notification color="isInfo">
          is-one-third
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
                    </Notification>
      </Column>
    </Columns>
    <Columns>
      <Column size="isOneQuarter" style={style}>
        <Notification color="isInfo">
          is-one-quarter
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
                    </Notification>
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
                    </Notification>
      </Column>
    </Columns>
  </div>
  );
};

export default ColumnSample2;
