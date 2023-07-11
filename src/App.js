import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import VC from './Components/VC';
import Administration from './Components/Administration';
import Admissions from './Components/Admissions';
import Academics from './Components/Academics';
import Facilities from './Components/Facilities';
import Library from './Components/Library';
import ContactUs from './Components/ContactUs';
import Careers from './Components/Careers';
import MinhasArtGallery from './Components/MinhasArtGallery';
import Vision from './Components/Vision';
import Overview from './Components/Overview';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import RightBlock from './BuildingComponents/RightBlock';
import LeftBlock from './BuildingComponents/LeftBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Logo" src="GC_Logo.PNG" />
        
        <BrowserRouter>
        <Navbar1 />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="VC" element={<VC />}/>
        <Route path='Administration' element={<Administration />}/>
        <Route path='Admissions' element={<Admissions />}/>
        <Route path="Academics" element={<Academics />}/>
        <Route path='Facilities' element={<Facilities />}/>
        <Route path='Library' element={<Library />}/>
        <Route path='ContactUs' element={<ContactUs />}/>
        <Route path='Careers' element={<Careers />}/>
        </Routes>
        
        <br/>
        
        <RightBlock />
        <LeftBlock />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Navbar2 />
        <Routes>
        <Route path='' element={<Overview />}/>
        <Route path="Vision" element={<Vision />}/>
        <Route path='Administration' element={<Administration />}/>
        <Route path='Admissions' element={<Admissions />}/>
        <Route path="Academics" element={<Academics />}/>
        <Route path='Facilities' element={<Facilities />}/>
        <Route path='Library' element={<Library />}/>
        <Route path='MinhasArtGallery' element={<MinhasArtGallery />}/>
        </Routes>
        
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
