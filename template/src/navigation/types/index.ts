import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeStackParamList = {
  HOME_SCREEN_ROUTE: undefined;
  LOGIN_SCREEN_ROUTE: undefined;
};

export type BottomTabStackParamList = {
  HOME_ROUTES: NavigatorScreenParams<HomeStackParamList>;
  DETAILS_SCREEN_ROUTE: undefined;
};

export type DrawerStackParamList = {
  BOTTOM_TABS_ROUTES: NavigatorScreenParams<BottomTabStackParamList>;
};
