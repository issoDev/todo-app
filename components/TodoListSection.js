import React from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function TodoListSection({ todoItem, todoId, deleteTodo }) {
  return (
    <View>
      <TouchableOpacity style={styles.todoListcontainer} >
      <View style={styles.todoItemStyle}>
        <Text style={styles.todoItemTextStyle}> {todoItem} </Text>
        <TouchableOpacity onPress={() => deleteTodo(todoId)}>
          <Text style={styles.todoItemRemove}>X</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    </View>
  )
}
