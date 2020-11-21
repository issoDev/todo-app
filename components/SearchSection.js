import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from '../styles/styles'

export default function SearchSection() {
  return (
    <View style={styles.searchInputContainer}>
      <TextInput 
        style={styles.searchInput}
        placeholder="chercher une tâche" 
      />
    </View>
  )
}

