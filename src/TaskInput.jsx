import { useState } from 'react';

const TaskInput = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    onAdd(value);
    setValue('');
  };

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <input
          type="text"
          maxLength={100}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="New task..."
          aria-describedby="task-character-count"
          style={{ width: '100%', boxSizing: 'border-box', padding: '8px', fontSize: '16px' }}
        />
        <div id="task-character-count" style={{ marginTop: '4px', fontSize: '12px', color: '#666' }}>
          {value.length}/100 characters
        </div>
      </div>
      <button onClick={handleAdd} style={{ alignSelf: 'flex-start', padding: '8px 16px', fontSize: '16px' }}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
