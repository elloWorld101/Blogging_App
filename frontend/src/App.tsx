import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Landing } from './pages/Landing'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} ></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
