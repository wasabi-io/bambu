import * as React from 'react';
import Progress from 'rebul/lib/elements/progress/Progress';
import { Color, Size } from 'rebul/lib/base/css';
import Collection from 'wasabi-common/lib/collection/Collection';

const renderProgress = (color: any, size: any) => {
  return (
    <div>
      <Progress value={Math.floor(Math.random() * 100) + 1} max={100} style={{ marginBottom: '5px' }} color={color} size={size} />
    </div>
  )
};

const ProgressSample: React.SFC<{}> = (props: {}) => {
  return (
    <div>
      {Collection.mapObject(Color as any, color => Collection.mapObject(Size as any, size => renderProgress(color, size)))}
    </div>
  );
};

export default ProgressSample;
