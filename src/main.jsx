import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/style.css'
import './styles/section.css'
import './styles/signup.css'
import './styles/mediaqueries.css'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import Signup from './auth/Signup.jsx'
import Signin from './auth/Signin.jsx'
import LinkTree from './components/LinkTree.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/linktree' element={<LinkTree />}/>

      </Routes>
    </StrictMode>,  
  </BrowserRouter>
)
