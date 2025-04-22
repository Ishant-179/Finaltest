import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [ lightMode, setLightMode ] = useState(false)

useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
if(storedTasks?.length > 0) setTasks(storedTasks)
}, [])

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

const addTask = (taskText) => {
  const newTask = { id: Date.now(), task: taskText, completed: false }
  setTasks((prev) => [newTask, ...prev])
  toast.success("Task Added Successfully")
}

const updateTask = (id, updatedTask) => {
  setTasks((prev) => prev.map((task) => (task.id === id ? updatedTask : task)))
}

const deleteTask = (id) => {
  setTasks((prev) => prev.filter((task) => task.id !== id))
  toast.success("Task deleted successfully")
}

const toggleComplete = (id) => {
  setTasks((prev) => 
  prev.map((task) =>
  task.id === id ? {...task, completed: !task.completed} : task
  )
  )
}

return(
  <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleComplete, lightMode, setLightMode}}>
    {children}
  </TaskContext.Provider>
)
}

export const useTask = () => useContext(TaskContext)