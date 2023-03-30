import React, { useEffect, useState } from 'react';

const Todo = () => {
    const [todos,setTodo] = useState([])
    useEffect(()=>{
       const fetchData = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const  data = await res.json()
        setTodo(data);
       }
       fetchData()
    },[])
    return (
        <>
            <h1>Todo Lenght: {todos.length}</h1>
            {
                todos.map(todo => console.log(todo))
            }
        </>
    );
};


const Display =(props)=>{
    console.log(props);
}

export default Todo;