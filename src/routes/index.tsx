import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";
import Primary_Login from "../pages/Login/Login";

function AppRoutes() {
  const { toggleTheme } = useAppThemeContext()
  
  return (
    <Routes>
      <Route path="/login" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Teste</Button>} />
      <Route path="/entrar" Component={Primary_Login} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default AppRoutes;
