import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Filedata from './Form.jsx'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Mainheader from './Mainheader'
import LoiginForm from './typeofForm/LoiginForm.jsx'
import Signin from './typeofForm/Signin.jsx'
import Details from './components/Card.jsx'

function App() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink> |{" "}
        <NavLink to='/about'>About</NavLink> |{" "}
        <NavLink to='/support'>Support</NavLink> |{" "}
        <NavLink to='/form'>Form</NavLink> |{" "}
        <NavLink to='/login'>Login</NavLink> |{" "}
        <NavLink to='/signin'>Sign in</NavLink> |{" "}
        <NavLink to='/Card'>Testimonial</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Mainheader />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='support' element={<Support />} />
          <Route path='form' element={<Filedata />} />
          <Route path='login' element={<LoiginForm />} />
          <Route path='signin' element={<Signin />} />
          <Route path='Card' element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
