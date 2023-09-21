import Main from './pages/Main'
import Map from './pages/Map'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Main}/>
          <Route path='/map' Component={Map}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
