import  PriceSlider from '../components/pricing/price-slider'
import  PricingTailored from '../components/pricing/pricing-tailored'
import  Testimony from '../components/pricing/testimony'
import  Faq from '../components/pricing/faq'

export default function Pricing() {
  return (
    <>
      <PriceSlider.Responsive/>   
      <PricingTailored.Responsive/>
      <Testimony.Responsive />
      <Faq.Responsive />
    </> 
  )
}