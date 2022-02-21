import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCompany from './Components/AddCompany';
import Companies from './Components/Companies';
import EditCompany from './Components/EditCompany';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = { <Companies />} />
        <Route path="/add-company" element= { <AddCompany />} /> 
        <Route path="/edit-company/:id" element = { <EditCompany /> } />
      </Routes>
    </Router>
  );
}

export default App;
