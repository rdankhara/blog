const baseUri = 'http://57642d7b.ngrok.io';
const blogPostUri = `${baseUri}/blogposts`;
const getAll = () => { 
    return fetch(blogPostUri, { method: 'get'})
}

export { 
    getAll
}