import Navbar from './components/Navbar';
import Displayfruits from './components/Displayfruits';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Addfruits from './components/Addfruits';
import Updateform from './components/Updateform';
import Demofile from './components/Demofile';

function App() {
  return (
    <BrowserRouter>
    <div  style={{background: 'black'}}>
    <Navbar/>
     
      <Routes>
        <Route path='/add' Component={Addfruits}/>
        <Route path='/display' Component={Displayfruits}/>
        <Route exact path='/update/:id' Component={Updateform}/>
        
      </Routes>
      </div>
      </BrowserRouter>

      
     
     
    
  );
}

export default App;
