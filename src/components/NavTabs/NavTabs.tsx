import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import TabBar from './TabBar';
import ExtraScreen from '../ExtraScreen/ExtraScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import ThirdScreen from '../ThirdScreen/ThirdScreen';
import FourthScreen from '../FourthScreen/FourthScreen';
import { Ionicons } from '@expo/vector-icons';

// to add react navigation
// https://reactnavigation.org/docs/bottom-tab-navigator/?config=dynamic
const Tab = createBottomTabNavigator();

export function NavTabs() {

    type ValidIoniconsNames =
        | 'home'
        | 'home-outline'
        | 'skull'
        | 'skull-outline'
        | 'beer'
        | 'beer-outline'
        | 'football'
        | 'football-outline'
        | 'help-outline';

    return (
        <Tab.Navigator
            // tabBar={props => <TabBar {...props} />}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: ValidIoniconsNames;

                    // icon examples here: https://ionic.io/ionicons
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'ExtraScreen') {
                        iconName = focused ? 'skull' : 'skull-outline';
                    } else if (route.name === 'ThirdScreen') {
                        iconName = focused ? 'beer' : 'beer-outline';
                    } else if (route.name === 'FourthScreen') {
                        iconName = focused ? 'football' : 'football-outline';
                    } else {
                        iconName = 'help-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home', tabBarLabelPosition: 'below-icon' }} />
            <Tab.Screen name="ExtraScreen" component={ExtraScreen} options={{ title: 'Extra Screen', tabBarLabelPosition: 'below-icon' }} />
            <Tab.Screen name="ThirdScreen" component={ThirdScreen} options={{ title: 'Third Screen', tabBarLabelPosition: 'below-icon' }} />
            <Tab.Screen name="FourthScreen" component={FourthScreen} options={{ title: 'Fourth Screen', tabBarLabelPosition: 'below-icon' }} />
        </Tab.Navigator >
    );
}
