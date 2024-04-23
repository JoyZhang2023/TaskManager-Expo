import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import CheckBox from 'expo-checkbox';

export default function TodoItem({task, toggleCompleted}) {
    return(
        <View style={styles.todoItem}>
            <CheckBox 
                style={styles.checkbox}
                value={task.completed}
                onValueChange={() =>toggleCompleted(task.id)}
            />
            <Text style={styles.title}>
                {task.title}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    todoItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        borderBottomWidth: 1,
        borderRadius: 4,
    },
    checkbox: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    title: {
        textDecorationLine: task.completed ? 'line-through' : 'none',
        marginRight: 8,
        color: "#333",
    }
});