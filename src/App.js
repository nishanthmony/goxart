import './App.css';
import {Navbar} from './navbar/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import {Owned} from './pages/owned'
import {Cart} from './pages/cart'
import {Homepage} from './pages/homepage'
import {Contactus} from './pages/contactus'
import {Categories} from './pages/categories/categories'

function App() {
  return (
    <div className='mainScreen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path='/owned' element = {<Owned />} />
          <Route path='/categories' element = {<Categories />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path='/contactus' element = {<Contactus />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;