import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async (newObject) =>{
    try{
        const response = await axios.post(baseUrl, newObject)
        return response.data
    }catch(error){
        if(error.response && error.response.status === 400){
            throw new Error(error.response.data.error || 'BAD FUCKING REQUEST')
        }else{
            console.error('Unexpected Error:', error)

            throw error;
        }
    }
}

const remove = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObject) =>{
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {getAll, create, remove, update}