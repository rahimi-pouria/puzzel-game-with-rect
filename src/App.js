//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  
// style 
import './App.css';
// components 
import Pazel from './commponents/Pazel';
import NameGame from './commponents/NameGame'
function App() {
  return (
    <>
      <div className="App">
        <div className='container'>
          <div className='row'>
          <div className='col-md-5 col-sm-12'>
            <Pazel />
              </div>
              <div className='col-md-7 col-sm-12'>
                 <NameGame />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
