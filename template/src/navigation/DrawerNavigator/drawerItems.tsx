import {FireIcon, HomeIcon} from 'components';

import {DrawerItemType} from './types';

export const DrawerItemsArr: DrawerItemType[] = [
  {
    key: 1,
    label: 'Inicio',
    stack: 'HOME_ROUTES',
    screen: 'HOME',
    icon: HomeIcon,
  },
  {
    key: 2,
    label: 'Detalles',
    stack: 'BOTTOM_TABS_ROUTES',
    screen: 'DETAILS',
    icon: FireIcon,
  },
];
