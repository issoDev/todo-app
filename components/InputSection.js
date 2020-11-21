import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from './CustomButton'

export default function InputSection() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="ajouter une tâche" />
      <CustomButton title="ajouter"></CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({})
