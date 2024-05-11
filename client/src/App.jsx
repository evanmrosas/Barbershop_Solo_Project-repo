import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './views/home'
import Book from './views/book'
import Staff from './views/staff'
import AppointmentList from './views/appList'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Book/>}/>
          <Route path="/staff" element={<Staff/>}/>
          <Route path="/appointments" element={<AppointmentList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
