import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BlogContext} from '../contexts/BlogContext';

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {data} = useContext(BlogContext);
    const blogPost = data.find(x => x.id === id);
    return (
        <View>
            <Text>Welcome to Show{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export { ShowScreen }