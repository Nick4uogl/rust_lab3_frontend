import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function TaskForm({ onSubmit }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onSubmit(description);
      setDescription("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        mb: 3,
      }}
    >
      <TextField
        label="Task Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{
          backgroundColor: "white", // Set background color to white
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}

export default TaskForm;
