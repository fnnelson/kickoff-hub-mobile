import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header/Header';
import { NavTabs } from './components/NavTabs/NavTabs';

export default function App() {
  return (
    <>
      {/* Carrier, time, battery, etc. bar - doesn't matter where it goes */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Header />
      <View style={styles.container}>
        <NavigationContainer>
          <NavTabs />
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});