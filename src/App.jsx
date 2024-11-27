import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import { LoginForm } from './components/LoginForm'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<RegistrationForm/>} />
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </Router>
   </div>
  )
}

export default App
