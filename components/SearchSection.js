import React from 'react'
import { TextInput, View, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function SearchSection({ searchText, setSearchText }) {
  const search = text => {
    setSearchText(text);
  }

  return (
    <View style={styles.searchInputContainer}>
      <TextInput 
        style={styles.searchInput}
        placeholder="search task" 
        autoCapitalize="none"
        autoCorrect={false}
        value={searchText}
        onChangeText={search}
      />
    </View>
  )
}

