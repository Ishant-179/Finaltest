import { useState } from 'react';
import { useTask } from '../context/TaskContext';
import { IoIosSave } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [msg, setMsg] = useState(task.task);
  const { updateTask, deleteTask, toggleComplete } = useTask();

  const handleEdit = () => {
    updateTask(task.id, { ...task, task: msg });
    setIsEditing(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 text-black ${
        task.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-gray-900 ${
          isEditing ? 'border-black/10 px-2' : 'border-transparent'
        } ${task.completed ? 'line-through' : ''}`}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        readOnly={!isEditing}
      />

      <button
        className="w-8 h-8 rounded-lg flex text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
        onClick={() => {
          if (task.completed) return;
          isEditing ? handleEdit() : setIsEditing(true);
        }}
        disabled={task.completed}
      >
        {isEditing ? <IoIosSave /> : <MdEdit  /> }
      </button>

      <button
        className="w-8 h-8 rounded-lg text-sm flex border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
        onClick={() => deleteTask(task.id)}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default TaskItem;
