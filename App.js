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
  const [searchText, setSearchText ] = useState('');
  const [editMode, setEditMode] = useState(false);
  const filteredTodos = todos.filter(t => {
    return t.todo.toLowerCase().includes(searchText.toLowerCase())
  });

  //functions
  /* add a todo */
  const addTodo = todo => {
    setTodos(prev => {
      return [...prev, { id: uuid(), todo }]
    });
    setInputText('');
  }
  /* delete a todo */
  const deleteTodo = todoId => {
    setTodos(prev => {
      return prev.filter(t => t.id !== todoId)
    })
  }
  /* edit a todo */
  const editTodo = todo => {
    setInputText(todo);
    setEditMode(true);
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Header todosLength={todos.length} />
      <InputSection 
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <SearchSection
        searchText={searchText} 
        setSearchText={setSearchText} 
      />
      <FlatList 
        keyExtractor={item => item.id}
        data={filteredTodos}
        renderItem={({ item }) => {
          return(
            <TodoListSection 
              todoItem={item.todo} 
              todoId={item.id} 
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        }}
      />
    </SafeAreaView>
  );
}

