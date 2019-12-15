import React, { useState } from 'react';

const BlogContext = React.createContext();

const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const addBlogPost = () => {
        const newPosts = [...blogPosts, {title: `Blog post ${blogPosts.length + 1}`}];
        setBlogPosts(newPosts);
    }

    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )
}

export { BlogContext, BlogProvider }