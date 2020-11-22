import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'

export default function CustomButton({ title, addTodo, inputText }) {
  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={() => addTodo(inputText)}
    >
      <View style={styles.customButton}>
        <Text style={styles.textCustomButton}> {title} </Text>
      </View>
    </TouchableOpacity>

  )
}

