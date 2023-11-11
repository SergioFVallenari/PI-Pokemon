import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import HomePage from './pages/home/HomePage'
import Detail from './pages/detail/Detail'
import FormCreate from './pages/create/FormCreate'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/createpokemon' element={<FormCreate />}></Route>
      </Routes>
    </>
  )
}

export default App
