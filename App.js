import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles/styles'

import Header from './components/Header';
import InputSection from './components/InputSection';


export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Header/>
      <InputSection/>
    </SafeAreaView>
  );
}

