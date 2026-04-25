import './assets/css/templatemo-stand-blog.css'
import './assets/css/flex-slider.css'
import './assets/css/fontawesome.css'
import './assets/css/owl.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <AppRoutes></AppRoutes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
