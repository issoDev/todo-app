import React from 'react'
import {View, TextInput } from 'react-native'
import { styles } from '../styles/styles'
import CustomButton from './CustomButton'

export default function InputSection({ inputText, setInputText, addTodo }) {
  // functions
  const newTodo = text => {
    setInputText(text);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder="ajouter une tâche ..." 
        value={inputText}
        onChangeText={newTodo}
      />
      <CustomButton 
        title="➕"
        inputText={inputText}
        addTodo={addTodo}
      />
    </View>
  )
}

