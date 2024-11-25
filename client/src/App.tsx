import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "@/components";
import { CvePage, InfoPage, NotFoundPage } from "./pages";

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/cve" replace />} />
          <Route path="/cve" element={<CvePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};
