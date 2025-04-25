import logo from './logo.svg';
import './App.css';

import{BrowserRouter,Routes,Route} from "react-router-dom"

import Store from './components/Store/Store';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store/>} />
      </Routes>
    </BrowserRouter>  
   );
 }
 

export default App;
