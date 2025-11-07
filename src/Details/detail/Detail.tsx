import React from 'react';
import { DetailFieldProps, DetailType } from '../details.model';
import LabelValueDetail from './LabelValueDetail';
import SectionDetail from './SectionDetail';

const Detail = <T,>({ values, ...props }: { values: T } & DetailFieldProps<T>) => {
  switch (props.type) {
    case DetailType.labelValue:
      return <LabelValueDetail values={values} {...props} />;
    case DetailType.section:
      return <SectionDetail {...props} />;
    default:
      throw new Error('Invalid Detail Type');
  }
};

export default Detail;
