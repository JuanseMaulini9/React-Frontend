import './App.css'
import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { KatasPage } from './pages/KatasPage'
import { KatasDetailPage } from './pages/KatasDetailPage'

function App() {

  return (
  <div className='App'>
     <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/katas'>Katas</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/katas' element={<KatasPage/>}></Route>
        <Route path='/katas/:id' element={<KatasDetailPage/>}></Route>
        <Route path='/*' element={<Navigate to='/' replace/>}></Route>
      </Routes>


     </BrowserRouter>
    </div>
  )
}

export default App
