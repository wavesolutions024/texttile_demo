
import './App.scss'
import About from './comp/about/About'
import Blogs from './comp/blogs/Blogs'
import Collection from './comp/collection/Collection'
import Footer from './comp/footer/Footer'
import Header from './comp/Header/Header'
import Hero from './comp/hero/Hero'
import Newsltter from './comp/newsletter/Newsltter'
import Prd_list from './comp/prd_list/Prd_list'
import Testimoneal from './comp/testimoneal/Testimoneal'

function App() {


  return (
    <>
    <Header/>
    <Hero/>
   <Collection/>
   <About/>
   <Prd_list/>
   <Testimoneal/>
   <Blogs/>
   <Newsltter/>
   <Footer/>
    </>
  )
}

export default App
