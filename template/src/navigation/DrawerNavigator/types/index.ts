import {FunctionComponent} from 'react';
import { SvgProps } from 'assets/Svg';

import {
  BottomTabStackParamList,
  DrawerStackParamList,
  HomeStackParamList,
} from '../../types';

export type DrawerItemType = {
  key: number;
  label: string;
  stack: keyof BottomTabStackParamList | keyof DrawerStackParamList;
  screen: keyof HomeStackParamList | keyof BottomTabStackParamList;
  icon: FunctionComponent<SvgProps>;
};
