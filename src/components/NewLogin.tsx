import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Kasutajanimi:", username);
    console.log("Parool:", password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Kasutajanimi"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Parool"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Logi sisse
      </Button>
    </Box>
  );
};

export default Login;