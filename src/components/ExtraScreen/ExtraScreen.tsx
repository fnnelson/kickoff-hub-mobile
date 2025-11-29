import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { TabNavigationProp } from '../../types/navigation';

export default function ExtraScreen() {
    const navigation = useNavigation<TabNavigationProp>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Extra Screen</Text>
            <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
        </View>
    );
}