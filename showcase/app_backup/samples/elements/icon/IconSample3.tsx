import * as React from 'react';
import Icon from 'rebul/lib/elements/icon/Icon';
import { Size } from 'rebul/lib/base/css';
import { default as FaIcon, IconSize } from 'rebul/lib/elements/icon/FaIcon';

const IconSample3: React.SFC<{}> = (props: {}) => {
  return (
    <div>
      <Icon icon="home" />
      <Icon icon={<FaIcon name="home" />} size={Size.small} />
      <Icon icon={<FaIcon name="home" />} size={Size.medium} />
      <Icon icon={<FaIcon name="home" />} size={Size.large} />
    </div>

  );
};

export default IconSample3;
