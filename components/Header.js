import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/styles'

export default function Header({ todosLength }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>MY TODO APP 📝</Text>
      <Text style={styles.headerText}>{todosLength} tasks(s) to do</Text>
    </View>
  )
}

