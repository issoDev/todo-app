import React from 'react'
import {View, TextInput } from 'react-native'
import { styles } from '../styles/styles'
import CustomButton from './CustomButton'

export default function InputSection({ inputText, setInputText, addTodo, editMode, setEditMode }) {
  const newTodo = text => {
    setInputText(text);
  }
  const editTheMode = () => {
    if (editMode === false) {
      return "➕";
    } else {
        return "✏️";
    }
  }

  return (
    <View style={ styles.inputContainer }>
      <TextInput 
        style={styles.textInput}
        placeholder="add task" 
        value={inputText}
        onChangeText={newTodo}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <CustomButton 
        title={editTheMode()}
        inputText={inputText}
        addTodo={addTodo}
        disabled={ inputText.length <= 3 }
        setEditMode={setEditMode}
      />
    </View>
  )
}

