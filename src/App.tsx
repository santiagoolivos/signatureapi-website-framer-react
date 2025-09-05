import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import TopNavFramerComponent from './components/shared/top-nav'
import FooterFramerComponent from './components/shared/footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <Router>
      <div className='flex flex-col items-center bg-[rgb(249,_249,_249)]'>
        <TopNavFramerComponent.Responsive/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        
        <div className='flex flex-col items-center w-full justify-center bg-[rgb(24,_24,_27)]'>
          <FooterFramerComponent.Responsive />
        </div>
      </div>
    </Router>
  );
};