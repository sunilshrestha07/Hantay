import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPrivatePage from './pages/LoginPrivatePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route element={<LoginPrivatePage/>}>
            <Route path='/home' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
