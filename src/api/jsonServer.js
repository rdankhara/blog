import Axios from "axios";

const jsonServer = Axios.create({
    baseURL: ''
})

const getBaseUri = () => '';

export {
    jsonServer,
    getBaseUri
}