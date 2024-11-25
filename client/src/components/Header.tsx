import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <img
          src="./src/assets/logo.png"
          alt="Logo"
          style={{
            marginRight: "10px",
            height: "50px",
            verticalAlign: "middle",
          }}
        />
        <Typography variant="h6" component="div">
          Library
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
