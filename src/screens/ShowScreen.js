import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BlogContext} from '../contexts/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {data} = useContext(BlogContext);
    const blogPost = data.find(x => x.id === id);
    
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Edit', {id: navigation.getParam('id')})
        }}>
            <EvilIcons name='pencil' size={30} />
        </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export { ShowScreen }