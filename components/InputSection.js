import React from 'react'
import {View, TextInput } from 'react-native'
import { styles } from '../styles/styles'
import CustomButton from './CustomButton'

export default function InputSection() {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder="ajouter une tâche" />
      <CustomButton title="ajouter"></CustomButton>
    </View>
  )
}

