import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";

const apiUrl = "http://localhost:3000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("tasks", tasks);

  console.log("apiurl", apiUrl);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/todos`);
      console.log("response", response);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (title) => {
    try {
      await axios.post(`${apiUrl}/todos`, { title, completed: false });
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const updateTask = async (id, updatedFields) => {
    try {
      await axios.put(`${apiUrl}/todos/${id}`, updatedFields);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${apiUrl}/todos/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Task Manager
      </Typography>
      <TaskForm onSubmit={createTask} />
      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      ) : (
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      )}
    </Container>
  );
}

export default App;
