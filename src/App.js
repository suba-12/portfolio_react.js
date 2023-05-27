import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



import './assets/css/style.css'
import './assets/css/Home.css'
import './assets/css/Contact.css'

 import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";


function App() {
  return (
    <div className="App">
      
      { <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Contact" element={<Contact/>}/>

        </Routes>
      </Router> 
      }

      

      <div className="bar">
</div>

     
  </div> 


  );
}

export default App;

