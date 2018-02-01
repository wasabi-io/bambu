import * as React from 'react';
import Tag from 'rebul/lib/elements/tag/Tag';

const TagSample: React.SFC<{}> = (props: {}) => {
  return (
    <div className="example">
      <Tag>Tag</Tag>
      <Tag color="isDark">Dark</Tag>
      <Tag color="isPrimary">Primary</Tag>
      <Tag color="isInfo">Info</Tag>
      <Tag color="isSuccess">Success</Tag>
      <Tag color="isWarning">Warning</Tag>
      <Tag color="isDanger">Danger</Tag>
    </div>
  );
};

export default TagSample;
