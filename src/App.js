import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
function App() {
  return (
    <div className='app-container'>
      <Header />
      <Nav />
      <Main />
      <Main str ="Test: X-Ray Test" />
      <div className='back-button-container'>
        <button className='back-button'>Back</button>
      </div>
    </div>
  );
}

export default App;
