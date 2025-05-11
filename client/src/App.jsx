
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import OpenRoute from './components/OpenRoute'
import AddVendor from './pages/AddVendor'
import NavBar from './components/NavBar'
import ShowVendor from './pages/ShowVendor'

function App() {
 

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <OpenRoute><Home/></OpenRoute>}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path='/add-vendor' element={<PrivateRoute><AddVendor/></PrivateRoute>}/>
        <Route path='/vendors' element={<PrivateRoute><ShowVendor/></PrivateRoute>}/>
        <Route path='/edit-vendor/:id' element={<PrivateRoute><AddVendor/></PrivateRoute>}/>
      </Routes>
      
 
    </>
  )
}

export default App
