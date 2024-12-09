
import './App.css';
import DineOut from './components/DineOut';
import Login from './components/Login';
import  { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/dineout' element={<DineOut/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
