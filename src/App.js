import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/home/Home'
import Memo from './pages/memo/Memo'
import Todo from './pages/todo/Todo'
import Classtimer from './pages/schedule/Classtimer'
import Tutorial from './pages/tutorial/Tutorial'
import Error from './pages/error/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/classtimer" element={<Classtimer />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
