import {IndicatorStack} from 'navigation/stacks';
import DetailsScreen from 'screens/Details';

import {FireIcon, HomeIcon} from 'components';

import {TabListType} from './types';

export const BottomItemsArr: TabListType = [
  {
    key: 1,
    label: 'Inicio',
    stack: 'HOME_ROUTES',
    component: IndicatorStack,
    icon: HomeIcon,
  },
  {
    key: 2,
    label: 'Detalles',
    stack: 'DETAILS',
    component: DetailsScreen,
    icon: FireIcon,
  },
];
