import css from "./Form.module.css";
import { nanoid } from "nanoid";

export default function Form({ onAdd }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      text: event.target.elements.text.value,
      id: nanoid(),
    });

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
}
