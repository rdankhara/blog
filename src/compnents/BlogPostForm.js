import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const BlogPostForm = (props) => {
    const { onSubmit } = props;
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);

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
            <Button title='Save blog post'
                onPress={()=> onSubmit(title, content)} />   
        </View>
    )
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
export { BlogPostForm }
