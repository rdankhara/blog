import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { BlogContext } from '../contexts/BlogContext';

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(BlogContext);

    return(
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput style={styles.input} 
                placeholder={'Title'}
                value={title}
                onChangeText={setTitle}
                >
                </TextInput>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input}
                value={content} 
                placeholder={'Content'}
                onChangeText={setContent}
                >
                </TextInput>
            <Button title='Add blog post'
                onPress={()=> addBlogPost(title, content, ()=> navigation.navigate('Index'))} />   
        </View>
    )
}
CreateScreen.navigationOptions = () => {
    return { 
        title: 'Create Blog'
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin:5,
        marginBottom: 10
    },
    label: {
        fontSize: 19,
        marginBottom: 10,
        marginHorizontal: 5
    }
})
export { CreateScreen }
