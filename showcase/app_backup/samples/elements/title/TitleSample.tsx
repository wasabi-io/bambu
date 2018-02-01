import * as React from 'react';
import Title from 'rebul/lib/elements/title/Title';

const TitleSample: React.SFC<{}> = (props: {}) => {
  return (
    <div>
      <Title size="is1">Title</Title>
      <Title size="is2">Title</Title>
      <Title size="is3">Title</Title>
      <Title size="is4">Title</Title>
      <Title size="is5">Title</Title>
      <Title size="is6">Title</Title>
    </div>
  );
};

export default TitleSample;
