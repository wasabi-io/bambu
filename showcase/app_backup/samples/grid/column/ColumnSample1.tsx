import * as React from 'react';
import { Columns, Column } from 'rebul/lib/grid/column'
import { Notification } from 'rebul/lib/elements/notification'
import { Color } from 'rebul/lib/base/css';

const ColumnSample: React.SFC<{}> = (props: {}) => {
  const style = { padding: '10px' };

  return (
    <Columns>
      <Column style={style}>
        <Notification color={Color.info} >
          First column
                </Notification>
      </Column>
      <Column style={style}>
        <Notification color={Color.success}>
          Second column
                </Notification>
      </Column>
      <Column style={style}>
        <Notification color={Color.warning} >
          Third column
                </Notification>
      </Column>
      <Column style={style}>
        <Notification color={Color.danger}>
          Fourth column
                </Notification>
      </Column>
    </Columns>
  );
};

export default ColumnSample;
