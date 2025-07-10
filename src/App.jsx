
import Dashoard from './pages/Dashoard'
import {Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'
import Products from './pages/Products'

function App() {
  return (
    <div>
      <NavBar/>
    <div>
      <Routes>
        <Route path='/' element={<Dashoard/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App