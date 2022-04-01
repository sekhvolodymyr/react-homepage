import './App.css';
import Menu from './Menu'
import MyHeader from './MyHeader';
import Main from './func-homepage/main-home-page'
import Button from './func-homepage/button';
import Footer from './func-homepage/footer';

function App() {
  return (
    <div className="App">
        <div className ="MyMenu">
      <Menu/>
      </div>
      <div className = "myheader">
        <MyHeader/>
      </div>
      <Main/>
      <Button/>
      <Footer/>
    </div>
  );
}

export default App;
