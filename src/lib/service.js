import axios from 'axios'

export const saveTodo = (todo) => 
    axios.post('http://web:3080/api/todos', todo)

export const loadTodos = () =>
    axios.get('http:///web:3080/api/todos')

export const destroyTodo = (id) =>
    axios.delete(`http:///web:3080/api/todos/${id}`)

export const updateTodo = (todo) =>
    axios.put(`http://web:3080/api/todos/${todo.id}`, todo)