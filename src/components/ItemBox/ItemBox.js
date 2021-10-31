import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './ItemBox.styles';


const ItemBox = ({todo, setTodo, value, setValue}) => {
  const handleClick = () => {
   
    setTodo([...todo, {value}]);
    setValue('');
  };
  const handleChange = item => setValue(item);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor="gray"
        onChangeText={handleChange}
        value={value}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleClick}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ItemBox;