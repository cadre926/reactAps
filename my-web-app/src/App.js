import './App.css';
import Counter from './components/Counter';
import About from './components/About';
import Galery from './components/Galery';
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom';
 
 
import HitDetails from './components/HitDetails';
function App() { 
  return (
    <Router>
      <nav className='navbar navbar-expand  navbar-brand m-2'>
        <ul className='navbar-nav'>
          <li>  <Link className='nav-link' to="/home">Home</Link></li>
          <li> <Link className='nav-link' to="/counter">Counter</Link></li>
          <li>   <Link  className='nav-link' to="/about">About</Link></li>
          <li>  <Link  className='nav-link' to="/galery">Galery</Link></li>
        </ul>
      </nav>
      <div className='m-4'>
        <Switch>
          <Route path="/home" /> 
          <Route   path="/counter"   component={Counter}/> 
          <Route path="/about"   component={About}/> 
          <Route path="/galery" component={Galery}/>
          <Route path="/HitDetails/:id" component={HitDetails}/>
        </Switch>
      </div>
    </Router>

    // <div className='m-3'>
    //   <Counter title="profil" value={1} image="images/profile.png" />
    //   <Counter title="cat" value={1} image="images/chat.jpg" />
    // </div>

  );
}

export default App;
