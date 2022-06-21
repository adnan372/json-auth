import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter , Routes , Route , }  from 'react-router-dom';

function App() {



  return (
    <>
      {/* <Login /> */}
      {/* <LoginH /> */}
      
      <BrowserRouter>
        <Routes>
        <Route  exact path="/" element={<Login/>}  />
        <Route  exact path="login" element={<Login/>}/> 
        <Route  exact path="home" element={<Home/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
