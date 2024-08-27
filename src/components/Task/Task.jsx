import css from "./Task.module.css";

export default function Task() {
  return (
    <div className={css.container}>
      <p className={css.text}></p>
      <button className={css.btn}>Delete</button>
    </div>
  );
}
