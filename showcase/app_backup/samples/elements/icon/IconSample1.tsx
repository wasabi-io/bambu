import * as React from 'react';
import Icon from 'rebul/lib/elements/icon/Icon';
import { Size } from 'rebul/lib/base/css';

const IconSample1: React.SFC<{}> = (props: {}) => {
  return (
    <div>
      <Icon icon="home" size={Size.small} />
      <Icon icon="home" size={Size.small} />
      <Icon icon="home" size={Size.medium} />
      <Icon icon="home" size={Size.large} />
    </div>

  );
};

export default IconSample1;
