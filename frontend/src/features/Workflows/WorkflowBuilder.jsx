import React, { useState } from 'react';

const WorkflowBuilder = () => {
  const [workflow, setWorkflow] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setWorkflow([...workflow, task]);
      setTask('');
    }
  };

  const saveWorkflow = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/workflows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workflow }),
      });
      if (response.ok) {
        alert('Workflow saved successfully!');
      } else {
        alert('Failed to save workflow.');
      }
    } catch (err) {
      console.error('Error saving workflow:', err);
    }
  };

  return (
    <div className="workflow-builder">
      <h3>Workflow Builder</h3>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded p-2 mb-2"
      />
      <button onClick={addTask} className="ml-2 bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
      <ul>
        {workflow.map((w, index) => (
          <li key={index}>{w}</li>
        ))}
      </ul>
      <button onClick={saveWorkflow} className="mt-2 bg-green-500 text-white p-2 rounded">
        Save Workflow
      </button>
    </div>
  );
};

export default WorkflowBuilder;