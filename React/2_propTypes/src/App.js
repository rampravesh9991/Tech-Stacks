// import logo from './logo.svg'; 
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
    {/* <Navbar /> ----------------------just boiler plate */}
    <Navbar title="TextUtils" aboutText="Twilight"/> {/*---------------with props(sending data) */}
    <Navbar/>
    <Navbar title="TextUtils" aboutText="Twilight"/>
    </>
  );
}

export default App;
