import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { PlusCircle, Trash2 } from "lucide-react";

const categories = [
  { name: "Learning", color: "bg-blue-500", emoji: "📘" },
  { name: "Education", color: "bg-purple-500", emoji: "🎓" },
  { name: "Health", color: "bg-green-500", emoji: "💪" },
  { name: "Work", color: "bg-yellow-500", emoji: "💼" },
  { name: "Personal", color: "bg-pink-500", emoji: "🧘‍♀️" },
  { name: "Fitness", color: "bg-red-500", emoji: "🏋️" },
  { name: "Finance", color: "bg-teal-500", emoji: "💰" },
  { name: "Travel", color: "bg-orange-500", emoji: "✈️" },
  { name: "Shopping", color: "bg-gray-500", emoji: "🛍️" },
  { name: "Entertainment", color: "bg-indigo-500", emoji: "🎬" },
];

const App = () => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Learning");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return toast.error("Please enter a task!");

    const newTodo = {
      id: Date.now(),
      text: task,
      category,
    };

    setTodos([newTodo, ...todos]);
    setTask("");
    toast.success("Task added!");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("Task removed");
  };

  const getCategoryDetails = (name) => categories.find((c) => c.name === name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 relative pb-32 p-4">
      <Toaster position="top-center" />
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Smart Insights ⭐</h1>

      <div className="space-y-4">
        {todos.length === 0 ? (
          <p className="text-center text-gray-600">Nothing here yet. Tap below to add your task !</p>
        ) : (
          todos.map((todo) => {
            const { emoji, color } = getCategoryDetails(todo.category);
            return (
              <div
                key={todo.id}
                className="bg-white rounded-xl shadow-md p-4 flex items-start justify-between relative"
              >
                <div className="absolute -top-2 -left-2 px-3 py-1 text-white text-sm rounded-br-xl rounded-tl-xl shadow-sm font-semibold"
                  style={{ backgroundColor: `${color.replace("bg-", "")}` }}>
                  {emoji} {todo.category}
                </div>
                <p className="pl-2 text-gray-800 font-medium">{todo.text}</p>
                <button onClick={() => deleteTask(todo.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 />
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Add Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner p-4 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-xl"
          placeholder="Type your task here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-xl border bg-gray-100"
        >
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.emoji} {cat.name}
            </option>
          ))}
        </select>
        <button onClick={addTask} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-1">
          <PlusCircle size={18} /> Add Task
        </button>
      </div>
    </div>
  );
};

export default App;
