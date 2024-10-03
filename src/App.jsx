
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
  import { Vacaciones1 } from './components/Vacaciones1';
  import { Vacaciones2 } from './components/Vacaciones2';
  import { Vacaciones3 } from './components/Vacaciones3';
  import { Vacaciones4 } from './components/Vacaciones4';
  import { Vacaciones5 } from './components/Vacaciones5';
  import { Vacaciones6 } from './components/Vacaciones6';
  import { Navigation } from './components/Navigation';
  
  function App() {

    return (
    <>
    < BrowserRouter>
    <div>
      <h1 className='text-center my-4'>Gallery Project</h1>
    </div>
    <div className='container d-flex justify-content-center'>
    <Routes>
      <Route  path = '/vacaciones1' element= {< Vacaciones1 className='main-img-container'/>} />
      <Route  path = '/vacaciones2' element= {< Vacaciones2 className='main-img-container'/>} />
      <Route  path = '/vacaciones3' element= {< Vacaciones3 className='main-img-container'/>} />
      <Route  path = '/vacaciones4' element= {< Vacaciones4 className='main-img-container'/>} />
      <Route  path = '/vacaciones5' element= {< Vacaciones5 className='main-img-container'/>} />
      <Route  path = '/vacaciones6' element= {< Vacaciones6 className='main-img-container'/>} />    
    </Routes>
    </div>
    <div className='container' >
    < Navigation />

    </div>
    </BrowserRouter>


    </>
    
  );
};

export default App
