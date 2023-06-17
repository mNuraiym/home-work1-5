import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import MainPage from './pages/MainPage'
import PostList from './pages/PostList'
import Layout from './components/Layout'
import CreatePost from './pages/CreatePost'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route index element={<MainPage />} />
            <Route path='posts' element={<PostList />} />
            <Route path='create' element={<CreatePost />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
