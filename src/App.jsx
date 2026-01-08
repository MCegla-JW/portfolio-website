import { Routes, Route } from 'react-router'
import Home from './components/Home/Home.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import About from './components/About/About.jsx'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </main>
  )
}

export default App 