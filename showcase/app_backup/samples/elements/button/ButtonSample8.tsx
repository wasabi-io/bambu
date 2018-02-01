import * as React from 'react';
import { Color, State } from 'rebul/lib/base/css';
import { Button } from 'rebul/lib/elements/button';

const ButtonSample1: React.SFC<{}> = (props: {}) => {
  return (
    <div className="example" >
      <Button state={State.loading}>Loading</Button>
      <Button state={State.loading} color={Color.white}>Loading</Button>
      <Button state={State.loading} color={Color.light}>Loading</Button>
      <Button state={State.loading} color={Color.dark}>Loading</Button>
      <Button state={State.loading} color={Color.black}>Loading</Button>
      <Button state={State.loading} color={Color.link}>Loading</Button>
      <Button state={State.loading} color={Color.primary}>Loading</Button>
      <Button state={State.loading} color={Color.info}>Loading</Button>
      <Button state={State.loading} color={Color.success}>Loading</Button>
      <Button state={State.loading} color={Color.warning}>Loading</Button>
      <Button state={State.loading} color={Color.danger}>Loading</Button>
    </div>
  );
};

export default ButtonSample1;
