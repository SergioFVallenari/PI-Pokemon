import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import HomePage from './pages/home/HomePage'
import Detail from './pages/detail/Detail'
import FormCreate from './pages/create/FormCreate'
import axios from 'axios'

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


  const createPokemon = async(pokemon) =>{
    const url = 'http://localhost:3001/pokemons'
    try {
       const response = await axios.post(url, pokemon)
      //  console.log(response);
       if (response.status === 200) {
         showAlert(response.data.message)
        }
      } 
      catch (error) {
        // console.log(error);
      if(error.response.status === 404){
        showAlert(error.response.data)
      }
  }
}

  const deletePokemon = async(id) =>{
      const url = 'http://localhost:3001/pokemons'
      try {
        await axios.delete(`${url}/${id}`)
        showAlert('Pokemon Deleted')
      } 
      catch (error) {
        
      }
  }



  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/detail/:id' element={<Detail deletePokemons={deletePokemon}/>}></Route>
        <Route path='/createpokemon' element={<FormCreate create={createPokemon} />}></Route>
      </Routes>
    </>
  )
}

export default App
