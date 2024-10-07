import { useState } from "react";
import { Tasks } from "./components/Tasks";
import { AddTasks } from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study programming",
      description: "Study programming until you become a full stack developer",
      isCompleted: false
    },
    {
      id: 2,
      title: "Study Pentest",
      description: "Studying pentest to improve security skills",
      isCompleted: false
    }
  ]);

  function onTaskClick(taskID) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function onDeleteTaskClick(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  }

  function onAddtaskSubmitt(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    };

    setTasks([...tasks, newTask]); 
  }

  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[500px] space-y-5">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTasks Add={onAddtaskSubmitt} /> 

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
