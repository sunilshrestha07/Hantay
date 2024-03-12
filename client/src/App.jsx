import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPrivatePage from './pages/LoginPrivatePage'
import AdminPrivatePage from './pages/AdminPrivatePage';
import AdminDashboard from './pages/AdminDashboard';

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
          <Route element={<AdminPrivatePage/>}>
            <Route path='/admindashboard' element={<AdminDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
