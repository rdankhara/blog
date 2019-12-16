import { createDataContext } from './createDataContext';

const blogReducer = (state, action) => {
    const { type, payload} = action;
    switch(type) {
        case 'add_blogpost':
            const id = Math.floor(Math.random() * 99999);
            return [...state, {title: `Blog Post ${state.length + 1}`, id}];
        case 'delete_blogpost': 
            return state.filter(x => x.id !== payload)
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return () => {
        dispatch({type: 'add_blogpost'});
    }
}

const deleteBlogPost = dispatch => { 
    return (payload) => {
        dispatch({type: 'delete_blogpost', payload})
    }
}

export const { Context: BlogContext, Provider: BlogProvider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [])