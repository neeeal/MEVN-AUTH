import axios from 'axios';

export default axiousInstance = axios.create({    
    baseURL: import.meta.env.VITE_API_URI,
    witCredentials: true,
    headers:{
        'Content-Type':'application/json'
    }
})