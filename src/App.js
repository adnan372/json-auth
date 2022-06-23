import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Listing from './components/Listing';
import Sample from './components/Sample'
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
        <Route  exact path="listing" element={<Listing/>}  />
        <Route  exact path="sample" element={<Sample/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
