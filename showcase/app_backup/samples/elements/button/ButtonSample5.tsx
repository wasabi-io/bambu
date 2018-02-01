import * as React from 'react';
import { Color, State } from 'rebul/lib/base/css';
import { Button } from 'rebul/lib/elements/button';

const ButtonSample1: React.SFC<{}> = (props: {}) => {
  return (
    <div className="example" >
      <Button state={State.hovered}>Hovered</Button>
      <Button state={State.hovered} color={Color.white}>Hovered</Button>
      <Button state={State.hovered} color={Color.light}>Hovered</Button>
      <Button state={State.hovered} color={Color.dark}>Hovered</Button>
      <Button state={State.hovered} color={Color.black}>Hovered</Button>
      <Button state={State.hovered} color={Color.link}>Hovered</Button>
      <Button state={State.hovered} color={Color.primary}>Hovered</Button>
      <Button state={State.hovered} color={Color.info}>Hovered</Button>
      <Button state={State.hovered} color={Color.success}>Hovered</Button>
      <Button state={State.hovered} color={Color.warning}>Hovered</Button>
      <Button state={State.hovered} color={Color.danger}>Hovered</Button>
    </div>
  );
};

export default ButtonSample1;
