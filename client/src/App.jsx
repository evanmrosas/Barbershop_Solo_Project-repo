import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './views/home'
import Staff from './views/staff'
import AppointmentList from './views/appList'
import UpdateBook from './views/updateBook'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/staff" element={<Staff/>}/>
          <Route path="/appointments" element={<AppointmentList/>}/>
          <Route path="/appointments/:id/edit" element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
