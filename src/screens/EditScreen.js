import React, { useContext } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { BlogContext } from '../contexts/BlogContext';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { data } = useContext(BlogContext);
    const {title, content} = data.find(x => x.id === id);
    return(
        <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export { EditScreen }