import './App.css';
import Menu from './Menu'
import MyHeader from './MyHeader';

function App() {
  return (
    <div className="App">

        <div className ="MyMenu">
      <Menu/>
      </div>
      <div className = "myheader">
        <MyHeader/>
      </div>
    </div>
  );
}

export default App;
