import * as React from 'react';
import { Size } from 'rebul/lib/base/css';
import { Button } from 'rebul/lib/elements/button';

const ButtonSample1: React.SFC<{}> = (props: {}) => {
  return (
    <div className="example">
      <Button size={Size.small}>Small</Button>
      <Button>Normal</Button>
      <Button size={Size.medium}>Medium</Button>
      <Button size={Size.large}>Large</Button>
    </div>
  );
};

export default ButtonSample1;
