import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/styles'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>MY TODO APP 📝</Text>
      <Text style={styles.headerText}>0 tâche(s) à faire</Text>
    </View>
  )
}

