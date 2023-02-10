import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPage from './Pages/FormPage';
import Summary from './Pages/Summary';
import EditPage from './Pages/EditPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/view" element={<Summary />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
