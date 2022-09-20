
// import './App.css';
import Intro from './component/Intro';
import Main from '../src/component/main'
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/signup';
// import Example from './component/Menu';
import Fororganization from './component/Fororganization';
import KidsWeLearn from './component/KidsWeLearn';
import Footer from './component/footer';
import JoinWeLearn from './component/JoinWeLearn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Main/>
<Login/>   
<Signup/>  
<Fororganization/> 
<KidsWeLearn/>
{/* <Card/> */}
<JoinWeLearn/>
<Footer/>
    </div>
  );
}

export default App;
