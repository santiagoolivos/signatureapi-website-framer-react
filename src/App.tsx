import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import TopNavFramerComponent from './components/shared/top-nav'
import FooterFramerComponent from './components/shared/footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <Router basename="/signatureapi-website-framer-react">
      <div className='flex flex-col items-center gap-3 bg-[rgb(249,_249,_249)]'>
        <TopNavFramerComponent.Responsive/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        
        <FooterFramerComponent.Responsive/>
      </div>
    </Router>
  );
};