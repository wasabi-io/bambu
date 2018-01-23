import * as React from 'react';
import { Color } from 'rebul/lib/base/css';
import { BtnStyle, Button } from 'rebul/lib/elements/button';

const ButtonSample1: React.SFC<{}> = (props: {}) => {
  return (
    <div className="example">
      <Button buttonStyle={BtnStyle.inverted}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.white}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.light}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.dark}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.black}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.link}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.primary}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.info}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.success}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.warning}>Inverted</Button>
      <Button buttonStyle={BtnStyle.inverted} color={Color.danger}>Inverted</Button>
    </div>
  );
};

export default ButtonSample1;
