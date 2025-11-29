import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { TabNavigationProp } from '../../types/navigation';

export default function HomeScreen() {
    const navigation = useNavigation<TabNavigationProp>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>I can see this on iPhone AND Android!</Text>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('ExtraScreen')}>
                Go to Extra Screen
            </Button>
        </View>
    );
}