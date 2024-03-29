import { FaTimes } from "react-icons/fa";
const SoloTasks = ({ task, remove, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => remove(task.id)}
        />
      </h3>
    </div>
  );
};

export default SoloTasks;
