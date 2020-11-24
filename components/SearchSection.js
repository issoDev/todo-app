import React from 'react'
import { TextInput, View, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function SearchSection({ searchText, setSearchText }) {
  // functions
  const search = text => {
    setSearchText(text);
  }

  return (
    <View style={styles.searchInputContainer}>
      <TextInput 
        style={styles.searchInput}
        placeholder="chercher une tâche" 
        autoCapitalize="none"
        autoCorrect={false}
        value={searchText}
        onChangeText={search}
      />
    </View>
  )
}

