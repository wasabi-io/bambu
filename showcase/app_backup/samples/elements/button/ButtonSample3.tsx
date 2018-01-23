import * as React from 'react';
import { Color } from 'rebul/lib/base/css';
import { BtnStyle, Button } from 'rebul/lib/elements/button';

const ButtonSample1: React.SFC<{}> = (props: {}) => {
  return (
    <div className="example">
      <Button buttonStyle={BtnStyle.outlined}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.white}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.light}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.dark}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.black}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.link}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.primary}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.info}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.success}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.warning}>Outlined</Button>
      <Button buttonStyle={BtnStyle.outlined} color={Color.danger}>Outlined</Button>
    </div>
  );
};

export default ButtonSample1;
