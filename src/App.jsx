import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer.jsx';
import Error from './components/Error.jsx';
import Nosotros from './components/Nosotros.jsx';
import Detalle from './components/Detalle.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import CartContent from './components/CartContent/CartContent.jsx';
import { ContextProvider } from './Context/Context.jsx';
import SubirProductos from './SubirProductos.jsx';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
   <ContextProvider>
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
       <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:id' element={<Detalle/>}/>
        <Route path='/*' element={<Error/>}/>
         <Route path='/carrito' element={<CartContent/>}/>
       <Route path="/subir" element={<SubirProductos />} />
      <ToastContainer />
        
      </Route>

    </Routes>
      </BrowserRouter>
    </ContextProvider>
    </>
  )
}

export default App
