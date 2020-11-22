import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles/styles';
import { todolist } from './data/todolist';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import InputSection from './components/InputSection';
import TodoListSection from './components/TodoListSection';
import SearchSection from './components/SearchSection';

export default function App() {
  // states
  const [todos, setTodos] = useState(todolist);
  const [inputText, setInputText ] = useState('');
  const [editMode, setEditMode] = useState(false);

  //functions
  const addTodo = todo => {
    setTodos(prev => {
      return [...prev, { id: uuid(), todo }]
    })
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Header todosLength={todos.length} />
      <InputSection 
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo} 
      />
      <SearchSection />
      <FlatList 
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => {
          return(
            <TodoListSection todoItem={item.todo} todoId={item.id} />
          )
        }}
      />
    </SafeAreaView>
  );
}

