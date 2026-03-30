import './App.css'
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
  )
}
export default App;

