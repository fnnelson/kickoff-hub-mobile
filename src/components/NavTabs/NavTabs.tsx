import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import ExtraScreen from '../ExtraScreen/ExtraScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import ThirdScreen from '../ThirdScreen/ThirdScreen';

// to add react navigation
// https://reactnavigation.org/docs/bottom-tab-navigator/?config=dynamic
const Tab = createBottomTabNavigator();

export function NavTabs() {
    return (
        <Tab.Navigator
        // uncomment to use custom tab bar
        // tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="ExtraScreen" component={ExtraScreen} />
            <Tab.Screen name="ThirdScreen" component={ThirdScreen} />
        </Tab.Navigator>
    );
}
