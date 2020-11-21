import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function CustomButton() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View>
        <Text> Ajouter </Text>
      </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({})
