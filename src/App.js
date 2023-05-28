//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Signup';



function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/signup' element={<Registration />} />
      <Route path='/login' element={<Login />} />
     
    </Routes>
    </div>
  );
}

export default App;
