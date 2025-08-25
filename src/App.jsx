import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Manager />

      </div>
      <Footer />

    </>
  )
}

export default App
