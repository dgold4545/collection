import initialTasks from "../tasks.json";

import css from "./App.module.css";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";
import { useState } from "react";

function App() {
  return (
    <div className={css.container}>
      <Form />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
