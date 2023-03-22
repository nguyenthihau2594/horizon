import Layout from 'layout/Layout';
import Marketplace from 'pages/Marketplace';
import Profile from 'pages/Profile';
import Tables from 'pages/Tables';
import Kanban from 'pages/Kanban';
import SignIn from 'pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import { useContext } from 'react';
import { ThemeContext } from 'hook/ThemeContext';

function App() {
  const context = useContext<any>(ThemeContext)

  return (
    <div data-theme={context.theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Layout />} >
            <Route path="dashboard" index element={<Dashboard />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="table" element={<Tables />} />
            <Route path="kanban" element={<Kanban />} />
          </Route>
          <Route path="/admin/login" element={<SignIn />} >
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
