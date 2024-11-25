import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          style={{ marginRight: "10px", height: "40px" }}
        />
        <Typography variant="h6" component="div">
          My Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
