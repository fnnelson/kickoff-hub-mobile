import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProp } from '../../types/navigation';

export default function ThirdScreen() {
    const navigation = useNavigation<TabNavigationProp>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Third Screen</Text>
        </View>
    );
}