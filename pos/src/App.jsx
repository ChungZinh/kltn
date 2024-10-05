import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Begin from './pages/Begin'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Begin />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
