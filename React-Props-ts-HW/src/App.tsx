import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Movies from './component/Movies'
import TVShows from './component/TVShows'
function App() {
  

  return (
 <>
<nav>
  <Nav/>
</nav>

<h1 >Movies:</h1>
<div className='container'>
<Movies/>
</div>
<h1 id='tv'>TV-Shows:</h1>
<div className='container'>
<TVShows/>
</div>

<footer>
  <Footer/>
</footer>

 </>
  )
}

export default App
