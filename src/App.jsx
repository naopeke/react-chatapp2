import './App.css'
import Navbar from './components/Navbar'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route 
          path="/chat" 
          element={
            <PrivateRoute>
              <ChatRoom/>
            </PrivateRoute>
          } />  
      </Routes>
    </>
  )
}

export default App
