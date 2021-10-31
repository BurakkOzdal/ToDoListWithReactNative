import React from "react";
import { Text, View } from "react-native";
import styles from "./Todo.styles";

function ToDoList({todo}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{todo.value}</Text>
        </View>
    )

}


export default ToDoList;