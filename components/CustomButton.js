import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'

export default function CustomButton() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.customButton}>
        <Text style={styles.textCustomButton}> Ajouter </Text>
      </View>
    </TouchableOpacity>
    
  )
}

