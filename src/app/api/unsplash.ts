import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID TfZ7SvslTU7A9vubmvyMAtqwpk9U3mKZMAb5ySI3pHg"
    }
})