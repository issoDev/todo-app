import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import InputSection from './components/InputSection';
import { styles } from './styles/styles'

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <InputSection></InputSection>
    </SafeAreaView>
  );
}

