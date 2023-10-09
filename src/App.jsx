import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './components/addContact';
import ListContact from './components/listContact';
import EditContact from './components/editContact';


function App() {

  return (
    <>
    <h1 style={{padding: "50px"}}>BTPN Frontend Test</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListContact/>}/>
        <Route path='/add' element={<AddContact/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
