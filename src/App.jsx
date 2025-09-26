
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'

function App() {

  return (
    <div className="font-inter text-text">
     <Header/>
     <section id="features"><Features/></section>
     <section id="reviews"><Reviews/></section>
     <section id="pricing"><Pricing/></section>
     <section id="contact"><Footer/></section>
    </div>
  )
}

export default App
