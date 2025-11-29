import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { NavTabs } from './components/NavTabs/NavTabs';

export default function App() {
  return (
    <NavigationContainer>
      <NavTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
