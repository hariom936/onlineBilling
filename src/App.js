import './App.css';
import NavBar from './component/NavBar';
import Shop from './component/Shop';
function App() {
  return (
    <> 
      <NavBar />
      
      <div className='container'>
      <Shop />
      </div>

    </>
  );
}

export default App;
