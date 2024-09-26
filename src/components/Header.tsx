import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rakendus
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Avaleht
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Logi sisse
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Kasutaja
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;