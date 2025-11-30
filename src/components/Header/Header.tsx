import { Pressable, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

    // const navigation = useNavigation();
    // this needs to be within a NavigationContainer to work

    return (
        <ImageBackground
            source={require('../../assets/images/CanvaName.jpeg')}
            style={styles.statusBarBg}
            imageStyle={styles.imageStyle}
        >
            <Pressable style={styles.profileButton} onPress={() => { }}>
                <Ionicons name="person" size={20} color="#fff" />
            </Pressable>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    statusBarBg: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageStyle: {
        resizeMode: 'cover',
        height: 120,
    },
    profileButton: {
        backgroundColor: 'rgba(47, 47, 47, 0.75)',
        padding: 10,
        marginTop: 20,
        marginRight: 10,
        borderRadius: 25,
    },
});