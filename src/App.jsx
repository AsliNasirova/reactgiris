import './App.css';
import Main from './components/main';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import Todolist from './components/Todolist';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main></Main>
      <Footer/>
      <Todolist/>
     
      
      

    </div>

   
  );
}

export default App;
