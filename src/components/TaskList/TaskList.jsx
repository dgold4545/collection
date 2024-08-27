import Task from "../Task/Task";
import css from "./TaskList.module.css";

export default function TaskList() {
  return (
    <ul className={css.list}>
      {[].map((task) => (
        <li className={css.item} key={task.id}>
          <Task />
        </li>
      ))}
    </ul>
  );
}
