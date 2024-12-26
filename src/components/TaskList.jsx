import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

function TaskList({ tasks, onUpdate, onDelete }) {
  console.log("tasks", tasks);
  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <IconButton edge="end" onClick={() => onDelete(task.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            edge="start"
            checked={task.completed}
            onChange={() => onUpdate(task.id, { completed: !task.completed })}
          />
          <ListItemText
            primary={task.title}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
