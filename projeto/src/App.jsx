import './App.css';
import Feed from './components/Feed';
import AltButton from './components/AltButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MeioPagina from './components/MeioPagina';

function App() {

  return (
    <>
       <Navbar/>
       <div className="m-24 space-y-20 > *">
       <MeioPagina/>
       <Feed/>
       </div>
       <Footer/>
    </>
  )
}

export default App
