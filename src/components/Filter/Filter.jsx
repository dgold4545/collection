import css from "./Filter.module.css";

export default function Filter() {
  return (
    <div>
      <p className={css.label}>Search by name</p>
      <input type="text" />
    </div>
  );
}
