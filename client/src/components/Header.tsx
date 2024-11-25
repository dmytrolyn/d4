import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
        <Box sx={{ margin: "0 30px" }}>
          <Button
            component={Link}
            to="/cve"
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: "500",
              fontSize: "18px",
              marginRight: "15px",
            }}
          >
            CVE
          </Button>
          <Button
            component={Link}
            to="/info"
            color="inherit"
            sx={{ textTransform: "none", fontWeight: "500", fontSize: "18px" }}
          >
            Info
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
