import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './routes/homeStack';

export default function App() {
  return (
        <Navigator />
  );
}
