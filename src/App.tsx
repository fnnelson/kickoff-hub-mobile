import { StatusBar, StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavTabs } from './components/NavTabs/NavTabs';

export default function App() {
  return (
    <>
      {/* Carrier, time, battery, etc. bar */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground
        source={require('./assets/images/CanvaName.jpeg')}
        style={styles.statusBarBg}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView />
      </ImageBackground>
      <View style={styles.container}>

        <NavigationContainer>
          <NavTabs />
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarBg: {
    height: 65,
    justifyContent: 'center'
  },
  imageStyle: {
    resizeMode: 'cover',
    height: 110,
  },
  container: {
    flex: 1,
  },
});