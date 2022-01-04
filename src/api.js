import axios from 'axios';


export const getAll=async()=>{
    return await axios.get('http://localhost:3001/todos');
}

export const createTodo=async(data)=>{
    const newTask={
        id:Math.floor(Math.random()*10000),
        name:data
    }
    return await axios.post('http://localhost:3001/todos',newTask)
}

export const deleteTodo=async(id)=>{
    return await axios.delete(`http://localhost:3001/todos/${id}`)
}
