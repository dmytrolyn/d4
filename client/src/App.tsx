import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header, Footer } from "@/components";
import { CvePage, InfoPage, NotFoundPage } from "./pages";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/cve" replace />} />
            <Route path="/cve" element={<CvePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </>
  );
};
