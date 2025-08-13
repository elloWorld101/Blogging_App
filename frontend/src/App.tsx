import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Landing } from './pages/Landing'
import { Blogs } from './pages/Blogs'
import { Dashboard } from './pages/Dashboard'
import { RecoilRoot } from 'recoil'


function App() {

  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Landing/>} ></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/post' element={<Blogs/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
