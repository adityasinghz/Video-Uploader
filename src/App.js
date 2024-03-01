import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UploadPage from './component/UploadPage';
import LoginPage from './component/loginPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={LoginPage} />
        <Route path='/home' Component={UploadPage} />
      </Routes>
    </div>
  );
}

export default App;
