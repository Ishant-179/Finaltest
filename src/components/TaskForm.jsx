import { useState } from 'react';
import { useTask } from '../context/TaskContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 p-4">
      <input
        className="border rounded p-2 text-black flex-grow"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
