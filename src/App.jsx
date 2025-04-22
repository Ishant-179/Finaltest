import Navbar from './components/Navbar';
import { TaskProvider } from './context/TaskContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App(){
  return(
    <TaskProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </Router>
    </TaskProvider>
  )
}



export default App;