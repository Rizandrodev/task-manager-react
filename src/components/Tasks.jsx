import { ChevronRightIcon, TrashIcon } from "lucide-react";

export function Tasks({tasks,onTaskClick,onDeleteTaskClick}) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
        {tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() =>onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}
            >
              {task.title}
            </button>

            <button className="bg-slate-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>
            <button
            onClick={()=>onDeleteTaskClick(task.id)}
             className={`bg-slate-400 text-white p-2 rounded-md`}>
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
