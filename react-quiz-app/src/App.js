import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Quiz from './pages/Quiz/Quiz';
import CSS from './pages/Quiz/CSS';
import JavaScript from './pages/Quiz/JavaScript';
import Angular from './pages/Quiz/Angular';
import PHP from './pages/Quiz/PHP';
import SQL from './pages/Quiz/SQL';
import React from './pages/Quiz/React';
import Python from './pages/Quiz/Python';
import AddStudent from "./components/Signup/Signup";
import LogIn from "./components/Login/Login";
import Main from './components/Mainpage/Mainpage';
import Home from './components/Home/Home';


function App() {

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./background2.3.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%", overflow:"hidden"}}>
        <Header />

        <Switch>

          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/login' exact>
            <LogIn />
          </Route>
          <Route path='/signup' exact>
            <AddStudent />
          </Route>
          <Route path='/mainpage'>
            <Main/>
          </Route>
          <Route path='/quiz' exact>
            <Quiz/>
          </Route>
          <Route path='/css'>
            <CSS/>
          </Route>
          <Route path='/js'>
            <JavaScript/>
          </Route>
          <Route path='/angular'>
            <Angular/>
          </Route>
          <Route path='/php' exact>
            <PHP/>
          </Route>
          <Route path='/sql' exact>
            <SQL/>
          </Route>
          <Route path='/react' exact>
            <React/>
          </Route>
          <Route path='/python' exact>
            <Python/>
          </Route>


        </Switch>


      </div>
      
    </BrowserRouter>
  );
}

export default App;
