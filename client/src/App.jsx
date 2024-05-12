import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Book from './views/book'
import Staff from './views/staff'
import AppointmentList from './views/appList'
import UpdateBook from './views/updateBook'
import ConfirmApp from './views/confirmApp';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/confirm" element={<ConfirmApp/>}/>
          <Route path="/create" element={<Book/>}/>
          <Route path="/staff" element={<Staff/>}/>
          <Route path="/appointments" element={<AppointmentList/>}/>
          <Route path="/appointments/:id/edit" element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
