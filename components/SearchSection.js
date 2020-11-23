import React from 'react'
import { TextInput, View, Button } from 'react-native'
import { colors } from '../styles/colors';
import { styles } from '../styles/styles'

export default function SearchSection({ searchText, setSearchText, searchTodo }) {
  // functions
  const search = text => {
    setSearchText(text);
  }

  return (
    <View style={styles.searchInputContainer}>
      <TextInput 
        style={styles.searchInput}
        placeholder="chercher une tâche" 
        value={searchText}
        onChangeText={search}
        onChange={() => searchTodo(searchText)}
      />
    </View>
  )
}

