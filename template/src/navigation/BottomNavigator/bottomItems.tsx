import {IndicatorStack} from 'navigation/stacks';
import {TabListType} from './types';
import {FireIcon, HomeIcon} from 'components';
import DetailsScreen from 'screens/Details';

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
