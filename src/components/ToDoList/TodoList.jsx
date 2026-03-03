import { useState } from "react";

import "./style.css"
import { useTodo } from "../../store/todo-store";


export const TodoList = () => {
  const [count, setCount] = useState("");
  const { todos, add, del, tog } = useTodo();

  return (
    <div className="todo-box">
      <div className="input-group">
        <input 
          value={count} 
          placeholder="Делааа..." 
          onChange={(e) => setCount(e.target.value)} 
        />
        <button onClick={() => { if(count.trim()) { add(count); setCount(""); } }}>+</button>
      </div>

      {todos.map((t) => (
        <div key={t.id} className="todo-item">
          <input type="checkbox" checked={t.done} onChange={() => tog(t.id)} />
          <span className={t.done ? "done" : ""}>{t.text}</span>
          <button className="del-btn" onClick={() => del(t.id)}>x</button>
        </div>
      ))}
    </div>
  );
};