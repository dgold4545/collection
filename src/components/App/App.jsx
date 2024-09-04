import TaskList from "../TaskList/TaskList.jsx";
import initialTasks from "../../tasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import css from "./App.module.css";
import { useState, useEffect } from "react";

const LS_KEY = "booblik";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saveLS = window.localStorage.getItem(LS_KEY);

    return saveLS !== null ? JSON.parse(saveLS) : initialTasks;
  });

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter filterValue={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
