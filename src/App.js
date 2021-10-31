import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ItemBox from './components/ItemBox';
import ToDoList from './components/ToDoList';


function App() {
  const [todo, setTodo] = useState([])
  const [value, setValue] = useState('')

  const handleLongPress = item => {
    setTodo(todo.filter(i => i !== item));

  };
  const renderTodo = ({ item }) => {
    return (
      <TouchableOpacity  onLongPress={() => handleLongPress(item)}>
        <ToDoList todo={item} />
      </TouchableOpacity>

    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Yapılacaklar</Text>
          <Text style={styles.counter} >{todo.length}</Text>
        </View>
        <View>
          <FlatList
            data={todo}
            renderItem={renderTodo}
          />
        </View>
      </View>
      <View style={styles.bottom_container}>
        <ItemBox todo={todo} setTodo={setTodo} value={value} setValue={setValue} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    flex: 1,
  },
  top_container: {
    flex: 1
  },
  title_container: {
    flexDirection: 'row',
    marginTop: 7
  },
  title: {
    flex: 1,
    fontSize: 30,
    margin: 10
  },
  counter: {
    fontSize: 30,
    marginRight: 10
  },
 
 
});

export default App;