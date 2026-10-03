import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn Claude Code', completed: false },
    { id: 2, text: 'Build something cool', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const visibleTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: '480px', margin: '48px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '24px' }}>Todo App</h1>
      <TaskInput onAdd={addTask} />
      <label style={{ display: 'block', margin: '16px 0' }}>
        Show tasks:{' '}
        <select value={filter} onChange={event => setFilter(event.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
      {visibleTasks.length === 0 && <p>No {filter === 'all' ? '' : `${filter} `}tasks.</p>}
    </div>
  );
};

export default App;
