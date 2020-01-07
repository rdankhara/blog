const baseUri = 'http://57642d7b.ngrok.io';
const blogPostUri = `${baseUri}/blogposts`;

const getPostOrPutConfig = (method, payload) => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accpet', 'json');
    return { 
        method,
        headers,
        body: JSON.stringify(payload)
    }
}
const blogPostApi = { 
    getAll: () => { 
        return fetch(blogPostUri, { method: 'get'})
    },
    post: (payload) => { 

        return fetch(blogPostUri, getPostOrPutConfig('post', payload));
    },
    put: ({id, ...rest}) => {
        return fetch(`${blogPostUri}/${id}`, getPostOrPutConfig('put', rest));
    },
    delete: (id) => fetch(`${blogPostUri}/${id}`, {method: 'delete'})
}

export { blogPostApi }