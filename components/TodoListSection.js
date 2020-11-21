import React from 'react'
import { Text, View } from 'react-native'

export default function TodoListSection({ todo }) {
  return (
    <View>
      <Text>{todo.todo}</Text>
    </View>
  )
}
