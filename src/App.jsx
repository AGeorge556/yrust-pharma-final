import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import HomePage from './Components/HomePage/HomePage'
import Products from "./Components/Products/Products";
import Team from "./Components/Team/Team";
function App() {

  return (
    <div className='site'>
    <HomePage/>
    <AboutUs/>
    <Products/>
    <Team/>
    </div>
  )
}

export default App
