import { ChevronRightIcon } from "lucide-react";

export function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
        {props.tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}
            >
              {task.title}
            </button>
            <button className="bg-slate-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
