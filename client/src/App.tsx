import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './page/Home'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' >

        </Route>
      </Routes>
    </>
  )
}

export default App
