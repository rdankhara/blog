import { createDataContext } from './createDataContext';

const blogReducer = (state, action) => {
    const { type, payload} = action;
    switch(type) {
        case 'edit_blogpost':
            return state.map(blogPost => 
                blogPost.id === payload.id ? payload : blogPost
            );
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
        if (callback && typeof callback === 'function') {
            callback();
        }
    }
}

const deleteBlogPost = dispatch => { 
    return (payload) => {
        dispatch({type: 'delete_blogpost', payload})
    }
}

const editBlogPost = dispatch => { 
    return (payload, callback) => {
        dispatch({type: 'edit_blogpost', payload});
        if (callback && typeof callback === 'function') {
            callback();
        }
    }
}

export const { Context: BlogContext, Provider: BlogProvider } = createDataContext(blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost}, 
    [{id: 1, title: 'Test Title', content: 'Test Content'}])