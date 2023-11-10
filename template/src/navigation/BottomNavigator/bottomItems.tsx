import { FireIcon, HomeIcon } from 'assets/Svg';
import { HomeStack } from 'navigation/stacks';
import DetailsScreen from 'screens/Details';

import {TabListType} from './types';

export const BottomItemsArr: TabListType = [
  {
    key: 1,
    label: 'Inicio',
    stack: 'HOME_ROUTES',
    component: HomeStack,
    icon: HomeIcon,
  },
  {
    key: 2,
    label: 'Detalles',
    stack: 'DETAILS_SCREEN_ROUTE',
    component: DetailsScreen,
    icon: FireIcon,
  },
];
