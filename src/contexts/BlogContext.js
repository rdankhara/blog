import { createDataContext } from './createDataContext';

const blogReducer = (state, action) => {
    const { type, payload} = action;
    switch(type) {
        case 'add_blogpost':
            const id = Math.floor(Math.random() * 99999);
            return [...state, {id, ...payload}];
        case 'delete_blogpost': 
            return state.filter(x => x.id !== payload)
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: {title, content}});
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = dispatch => { 
    return (payload) => {
        dispatch({type: 'delete_blogpost', payload})
    }
}

export const { Context: BlogContext, Provider: BlogProvider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [])