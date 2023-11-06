import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Index from './pages/index';
import DisplayTable from './pages/display_table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/display_table" element={<DisplayTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
