import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeStackParamList = {
  HOME: undefined;
};

export type WelcomeStackParamList = {
  LOGIN_SCREEN_ROUTE: undefined;
  WELCOME_SCREEN_ROUTE: undefined;
};

export type BottomTabStackParamList = {
  HOME_ROUTES: NavigatorScreenParams<HomeStackParamList>;
  DETAILS: undefined;
};

export type DrawerStackParamList = {
  BOTTOM_TABS_ROUTES: NavigatorScreenParams<BottomTabStackParamList>;
};
