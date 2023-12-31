import {FC, FunctionComponent} from 'react';
import { SvgProps } from 'assets/Svg';

import {BottomTabStackParamList} from '../../types';

export type TabType = {
  key: number;
  label: string;
  stack: keyof BottomTabStackParamList;
  component: FC;
  icon: FunctionComponent<SvgProps>;
};

export type TabListType = TabType[];
