import { createDataContext } from './createDataContext';
import { blogPostApi } from '../api/blogPostApi';

const GET_BLOG_POSTS = 'get_blogposts';
const EDIT_BLOG_POST = 'edit_blogpost';
const DEELTE_BLOG_POST = 'delete_blogpost';
const ADD_BLOG_POST = 'add_blogpost';

const blogReducer = (state, action) => {
    const { type, payload} = action;
    switch(type) {
        case GET_BLOG_POSTS:
            return payload;
        case EDIT_BLOG_POST:
            return state.map(blogPost => 
                blogPost.id === payload.id ? payload : blogPost
            );
        case ADD_BLOG_POST:
            const id = Math.floor(Math.random() * 99999);
            return [...state, {id, ...payload}];
        case DEELTE_BLOG_POST: 
            return state.filter(x => x.id !== payload)
        default:
            return state;
    }
}

const getBlogPosts = dispatch => async () => {
    const response = await blogPostApi.getAll();
    const payload = await response.json();
    dispatch({type: GET_BLOG_POSTS, payload})
}

const addBlogPost = dispatch => async (title, content, callback) => {
    await blogPostApi.post({title, content});
    //dispatch({type: ADD_BLOG_POST, payload: {title, content}});
    if (callback && typeof callback === 'function') {
        callback();
    }
}

const deleteBlogPost = dispatch => async (payload) => {
    
    await blogPostApi.delete(payload);
    
    dispatch({type: DEELTE_BLOG_POST, payload})
}

const editBlogPost = dispatch => async (payload, callback) => {
    await blogPostApi.put(payload);

    dispatch({type: EDIT_BLOG_POST, payload});
    
    if (callback && typeof callback === 'function') {
        callback();
    }
    
}

export const { Context: BlogContext, Provider: BlogProvider } = createDataContext(blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, 
    [{id: 1, title: 'Test Title', content: 'Test Content'}])