import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Suggestions from './Components/Suggestions';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feedbackedit from './Components/Feedbackedit';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
 
    <div className="App">
    <Navbar/>
    <Routes>
  
      <Route path='/feedback' element={<Suggestions/>} />
      <Route path='/' element={<Signup/>} />
      <Route path='/log' element={<Login/>} />
      <Route path='/edit' element={<Feedbackedit/>} />     
    

    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
