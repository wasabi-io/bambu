import * as React from 'react';
import SubTitle from 'rebul/lib/elements/title/SubTitle';

const SubTitleSample: React.SFC<{}> = (props: {}) => {
  return (
    <div>
      <SubTitle size="is1">SubTitle</SubTitle>
      <SubTitle size="is2">SubTitle</SubTitle>
      <SubTitle size="is3">SubTitle</SubTitle>
      <SubTitle size="is4">SubTitle</SubTitle>
      <SubTitle size="is5">SubTitle</SubTitle>
      <SubTitle size="is6">SubTitle</SubTitle>
    </div>
  );
};

export default SubTitleSample;
