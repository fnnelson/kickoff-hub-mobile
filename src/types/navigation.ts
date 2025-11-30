import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
    Home: undefined;
    ExtraScreen: undefined;
    ThirdScreen: undefined;
    FourthScreen: undefined;
};

export type TabNavigationProp = BottomTabNavigationProp<RootTabParamList>;
