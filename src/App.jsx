import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <>
      <NavBar/>  
      <ItemListContainer greeting={'Hola!'} /> {/* //llamado a la funcion ItemListContainer*/}
    </>
  )
}

export default App

// para correr la web npm run dev