import React from 'react'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import { useTask } from '../context/TaskContext'

const Home = () => {const { lightMode } = useTask();

return (
  <div className={`${lightMode ? 'bg-gray-100 text-gray-900' : 'bg-[#172842] text-white'} min-h-screen w-full px-5 py-8`}>
    <div className={`${lightMode ? 'bg-white text-black' : 'bg-gray-800 text-white'} w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3`}>
             <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Tasks</h1>
             <div className='mb-4'>
               <TaskForm />
             </div>
             <div className='flex flex-wrap gap-y-3'>
         <TaskList />
             </div>
           </div>
         </div>
  )
}
const TaskList = () => {
    const { tasks } = useTask()
  
    return(
      <>
      {
        tasks.map((task) =>(
          <div className='w-full' key={task.id}>
              <TaskItem task={task} />
          </div>
        ))
      }
      </>
    )
  }

export default Home
