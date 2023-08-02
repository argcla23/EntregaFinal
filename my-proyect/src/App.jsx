import NavBar from './component/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={
      <ItemListContainer
        texto="Bienvenido amante del automotor"/>
      }/>

      <Route path='/item' element ={<ItemDetailContainer/>}/>
       


      </Routes>
      <ItemDetailContainer/>
      </BrowserRouter>
      
      )
}

export default App