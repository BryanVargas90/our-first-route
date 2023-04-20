import {useState} from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import './App.css';

function App() {
  const [user, setUser] = useState()
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <nav>
          <Link className='App-link'>Home</Link> |&nbsp;
          <Link className='App-link'>Login</Link> |&nbsp;
          <Link className='App-link'>Sign up</Link> 

        </nav>
        <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/" element={<h1>Home</h1>} />

        </Routes>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
