import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles/styles'
import { todolist } from './data/todolist'

import Header from './components/Header';
import InputSection from './components/InputSection';
import TodoListSection from './components/TodoListSection'
import SearchSection from './components/SearchSection';

export default function App() {
  // states
  const [todos, setTodos] = useState(todolist)
  return (
    <SafeAreaView style={styles.appContainer}>
      <Header/>
      <InputSection />
      <SearchSection />
      <FlatList 
        keyExtractor={item => item.id}
        data={todolist}
        renderItem={({ item }) => {
          return (
            <TodoListSection todo={item} />
          )
        }}
      />
    </SafeAreaView>
  );
}

