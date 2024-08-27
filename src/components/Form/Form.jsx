import css from "./Form.module.css";
import { nanoid } from "nanoid";

export default function Form() {
  return (
    <form className={css.form}>
      <input className={css.field} type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
}
