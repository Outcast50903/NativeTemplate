import {FunctionComponent} from 'react';
import {
  BottomTabStackParamList,
  DrawerStackParamList,
  HomeStackParamList,
} from '../../types';
import {SvgProps} from '../../../components';

export type DrawerItemType = {
  key: number;
  label: string;
  stack: keyof BottomTabStackParamList | keyof DrawerStackParamList;
  screen: keyof HomeStackParamList | keyof BottomTabStackParamList;
  icon: FunctionComponent<SvgProps>;
};
