import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../contexts/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);

    return <View>
        <Text>Welcome to Context</Text>
        <Button title="Add Blog" onPress={addBlogPost}></Button>
        <FlatList data={data} 
            keyExtractor={bp => bp.title}
            renderItem={({item: {title}}) => {
                return(
                <Text>{title}</Text>
                )
            }}
        >

        </FlatList>
    </View>
}

export { IndexScreen }