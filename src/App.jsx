import { useState } from "react";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study programming",
      description: "Study programming until you become a full stack developer", // Corrigido 'description'
      isCompleted: false
    },
    {
      id: 2,
      title: "Study Pentest",
      description: "Studying pentest to improve security skills", // Corrigido 'description'
      isCompleted: false
    }
  ]);
  function onTaskClick(taskID) {
   const updatedTasks = tasks.map((task) => {
     // Atualizar a tarefa se o ID corresponder
     if (task.id === taskID) {
       return { ...task, isCompleted: !task.isCompleted };
     }
     // Retornar a tarefa sem modificações
     return task;
   });
 
   setTasks(updatedTasks);
 }
 

  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
