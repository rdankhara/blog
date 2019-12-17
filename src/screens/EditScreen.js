import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';
import { BlogContext } from '../contexts/BlogContext';
import { BlogPostForm } from '../compnents/BlogPostForm';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { data, editBlogPost } = useContext(BlogContext);
    const {title, content} = data.find(x => x.id === id);
    return(
        <BlogPostForm 
            title={title}
            content={content} 
            onSubmit={(title, content) => {
                editBlogPost({id, title, content}, ()=> navigation.pop());
        }} />
    )
}

const styles = StyleSheet.create({

})

export { EditScreen }