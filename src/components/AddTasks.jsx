import { useState } from "react";

export function AddTasks({ Add }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-md flex flex-col">
      <input
        type="text"
        className="border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {Add(title, description);
                        setTitle("");
                        setDescription("")}
        } 
        className="bg-slate-600 rounded-md px-4 py-2 text-white"
      >
        Adicionar
      </button>
    </div>
  );
}
