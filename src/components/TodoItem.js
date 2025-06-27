import React from "react";
import { XCircle } from "lucide-react";

const categoryEmoji = {
  Learning: "📘",
  Education: "🎓",
  Health: "🏃‍♀️",
  Personal: "🧘‍♂️",
  Work: "💼",
};

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
      <div className="flex items-center gap-2">
        <span>{categoryEmoji[todo.category]}</span>
        <div>
          <p className="font-medium">{todo.text}</p>
          <p className="text-sm text-gray-500">{todo.category}</p>
        </div>
      </div>
      <button onClick={() => onDelete(todo.id)} className="text-red-500">
        <XCircle size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
