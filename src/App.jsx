import { Routes, Route } from 'react-router'
import Home from './components/Home/Home.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </main>
  )
}

export default App 