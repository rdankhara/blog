import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { BlogContext } from '../contexts/BlogContext';
import { BlogPostForm } from '../compnents/BlogPostForm';

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(BlogContext);

    return(
       <BlogPostForm onSubmit={(title, content) => {
           addBlogPost(title, content, ()=> navigation.navigate('Index'));
       }}
       />
    )
}
CreateScreen.navigationOptions = () => {
    return { 
        title: 'Create Blog'
    }
}
const styles = StyleSheet.create({

})
export { CreateScreen }
