import Layout from 'layout/Layout';
import Marketplace from 'pages/Marketplace';
import User from 'pages/User';
import Tables from 'pages/Tables';
import Kanban from 'pages/Kanban';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Layout />} >
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="user" element={<User />} />
          <Route path="table" element={<Tables />} />
          <Route path="kanban" element={<Kanban />} />
          {/* <Route path="tables" element={<Tables />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
