import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import HomePage from './pages/home/HomePage'
import Detail from './pages/detail/Detail'
import FormCreate from './pages/create/FormCreate'
import axios from 'axios'
import About from './pages/about/About'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPokemons, getTypes } from './redux/actions/actions'
import Loading from './components/loading/Loading'
import Pokememo from './pages/pokememo/Pokememo'

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.className = 'custom-alert';
  alertContainer.textContent = message;

  document.body.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};


function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {  //Se muestran todos los pokemones ni bien se monta el componente
    const fetchData = async () => {
      try {
        setLoading(true)
        await dispatch(getAllPokemons());
        await dispatch(getTypes());
      } catch (error) {

      }
      finally {
        // Oculta el loader después de cargar los datos
        setLoading(false);
      }
    }
    fetchData()

  }, [dispatch])

  const url = 'http://localhost:3001/pokemons'

  const createPokemon = async (pokemon) => {
    try {
      const response = await axios.post(url, pokemon)
      //  console.log(response);
      if (response.status === 200) {
        showAlert(response.data.message)
      }
    }
    catch (error) {
      // console.log(error);
      if (error.response.status === 404) {
        showAlert(error.response.data)
      }
    }
  }

  const deletePokemon = async (id) => {
    try {
      await axios.delete(`${url}/${id}`)
      showAlert('Pokemon Deleted')
    }
    catch (error) {
      showAlert('Pokemon not found')
    }
  }


  // fn para el paginado

  const [actualPage, setActualPage] = useState(1)


  const handlePageChange = (newPage) => {
    setActualPage(newPage);
  };





  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/home' element={loading ?
          <Loading /> :
          <HomePage handlePageChange={handlePageChange} actualPage={actualPage} setActualPage={(num) => setActualPage(num)} />}></Route>
        <Route path='/detail/:id' element={<Detail deletePokemons={deletePokemon} />}></Route>
        <Route path='/pokememo' element={<Pokememo/>}/>
        <Route path='/createpokemon' element={<FormCreate create={createPokemon} />}></Route>
      </Routes>
    </>
  )
}

export default App
