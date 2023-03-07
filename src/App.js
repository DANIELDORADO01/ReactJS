import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Skills' element={<Skills />}/>
        
      </Routes>

      {/*<Home />
      <About />
  <Skills />*/}
    </>
  );

} 

export default App;
