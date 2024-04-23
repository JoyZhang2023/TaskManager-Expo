import { StyleSheet, View, Pressable, Text, TextInput, Button} from "react-native";
import React, {useState} from "react";
import Checkbox from "expo-checkbox";
{/*import TodoItem from "./TodoItem"; */}

export default function TaskManager() {
    const [tasks, setTasks] = useState([{
        id: 1,
        title:"sample task",
        completed: false        
    }]);
    
    var taskID = 1;
    const [text, setText] = useState('');

    const addTask = () => {
        const newTask = {id: taskID+1, title: text, completed:false}
        setTasks([...tasks, newTask]);
        setText('');
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task=> (task.id === id ? {...task, completed: !task.completed} : task)));
    }

    return (
        <View> 
            {tasks.map(task=> (
                <View style={styles.todoItem}>
                    <Checkbox 
                        style={styles.checkbox}
                        value={task.completed}
                        onValueChange={() =>toggleCompleted(task.id)}
                    />
                    <Text style={styles.title}>
                        {task.title}
                    </Text>
                </View>
            ))}

            {/* Add new task */}
            <TextInput 
                value={text}
                onChangeText={setText}
                placeholder="Write new task"
            />
            <Button title="Add" onPress={addTask} />
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
        textDecorationLine: 'none',
        marginRight: 8,
        color: "#333",
    }
});
