import React from 'react' 
import Slideshow from './components/slideshow';
import Topnavbar from './components/topnavbar';
import Bottomnavbar from './components/bottomnavbar'
import Downslide from './components/downslide';
import Downslide2 from './components/downslide2';
import Contattaci  from './contattaci';
import Chisiamo from'./chisiamo';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Topnavbar/>
      <Slideshow/>
      <Route exact path='/contatti' component={Contattaci}/>
      <Route exact path='/chisiamo' component={Chisiamo}/>
      <Bottomnavbar/>
      <Route exact path='/' component={Downslide}/>
      <Route exact path='/' component={Downslide2}/>
      </div>
  );
}

export default App;
