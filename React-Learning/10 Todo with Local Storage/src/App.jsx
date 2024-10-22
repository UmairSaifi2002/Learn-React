import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    /*
//       [{ id: Date.now(), ...todo }, ...prev]: 
//       A new todo object is created here:
//       id: Date.now(): Generates a unique timestamp as the ID for the new todo.
//       ...todo: Spreads the properties of the passed-in todo object into the new todo object.
//       The new todo is added at the beginning of the array ([newTodo, ...prev]), 
//       ensuring the latest task appears at the top.
//       New todo is added first (...prev ensures the older todos come after it).
//       This is why the newest todo appears at the top of the list.
//     */
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    /*
//       setTodos((prev) => ...):
//       setTodos updates the current todos array stored in the component's state.
//       prev represents the previous state (the current list of todos).

//       .map((prevTodo) => ...):
//       The map function is used to loop over each todo (called prevTodo) in the prev list.
//       It creates a new array, either by keeping the original todo or replacing it with the updated one.
      
//       prevTodo.id === id ? todo : prevTodo:
//       For each todo, it checks if prevTodo.id matches the id of the todo you want to update:
//       If it matches: The todo will be replaced with the updated todo (todo).
//       If it doesn’t match: The original todo (prevTodo) will remain unchanged.
//     */
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))    
  }

  const deleteTodo = (id) => {
    /*
//       deleteTodo(id):

//     This is a function that takes the id of the todo that you want to delete from the list.
//     setTodos((prev) => ...):

//     setTodos is the state update function for managing the current list of todos.
//     prev refers to the previous state (i.e., the current array of todos).
//     .filter((todo) => todo.id !== id):

//     .filter() is a method that creates a new array by removing elements that don't match a condition.
//     Here, the condition is: todo.id !== id.
//     This means: Keep only those todos whose id is NOT equal to the id passed to deleteTodo().
//     Updating the State:

//     The new array created by filter (which excludes the todo with the matching ID) is passed to setTodos to update the state.
//     */
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    /*
//       toggleComplete(id):
//       This function toggles the completed status of a specific todo (based on its id).

//       setTodos((prev) => ...):
//       setTodos is used to update the state of the todos list.
//       prev is the previous state (i.e., the current array of todos).

//       prev.map(...):
//       .map() creates a new array by applying the given function to each element of the original array.
//       In this case, it’s checking each prevTodo to see if its id matches the given id that we want to toggle.

//       Condition: prevTodo.id === id:
//       If the current todo’s ID matches the one passed to toggleComplete, it will toggle its completed status.
//       If not, it will return the todo as-is.

//       Toggling the completed Status:
//       If the todo's id matches, it creates a new object with all the same properties of prevTodo ({ ...prevTodo }) but updates the completed property to its opposite value:

//       {...prevTodo, completed: !prevTodo.completed}
//       If completed was true, it becomes false.
//       If completed was false, it becomes true.

//       Returning the New Array:
//       The new array with the updated completed status is passed to setTodos to update the state.
//     */
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    // we make another useEffect because we want to set the data of todos
//     // if we do this in previous useEffect then useEffect first get the element and then set the element 
//     // which is not a optimised approach
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className=" min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-10 text-white bg-[rgb(105,107,111)] ">
                    <h1 className="text-4xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4 shadow-xl text-md">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3 shadow-2xl text-xl">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App