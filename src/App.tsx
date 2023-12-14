import './App.css'
import Footer from './components/footer/footer'
import Intro from './components/intro/intro'
import Navbar from './components/navbar/navbar'
import Popular from './components/popular/popular'
import Review from './components/review/review'
import Gallery from './components/gallery/gallery'
import About from './components/about/about'

function App() {

  return (
    <>
      <Navbar/>
      <div className='all'>
        <br />
        <Intro/>
        <br />
        <Popular/>
        <br />
        <About/>
        <br />
        <Review/>
        <br />
        <Gallery/>
        <br />
      </div>
      <Footer/>
    </>
  )
}

export default App
