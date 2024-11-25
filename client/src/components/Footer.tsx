import { Box, Container, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} CVE Library. All rights reserved.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          <Link
            href="https://underdefense.com/"
            color="inherit"
            underline="hover"
          >
            <Typography variant="body1" align="center">
              UnderDefence
            </Typography>
          </Link>
          <Link
            href="https://app.underdefense.com/"
            color="inherit"
            underline="hover"
          >
            <Typography variant="body1" align="center">
              MAXI UnderDefence
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
