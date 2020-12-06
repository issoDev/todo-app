import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../styles/colors'
import { styles } from '../styles/styles'

export default function CustomButton({ title, addTodo, inputText, disabled, setEditMode }) {
  const addOneTodo = () => {
    inputText.length > 3 ? addTodo(inputText) : null;
    setEditMode(false);
  }
  const buttonColor = () => {
    if (disabled) {
      return colors.lightyellow;
    } else {
        return colors.yellow;
    }
  }

  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={addOneTodo}
    >
      <View style={[styles.customButton, { backgroundColor: buttonColor() }]}>
        <Text style={styles.textCustomButton}> {title} </Text>
      </View>
    </TouchableOpacity>
  )
}

