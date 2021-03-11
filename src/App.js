import TeamDetails from './components/TeamDetails/TeamDetails';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NoMatch from './components/NoMatch/NoMatch';



function App() {
 

  return (
    <div>
        <Router>
           <Switch>
             <Route exact path="/">
                <Home/>
             </Route>
             <Route path="/home">
               <Home/>
             </Route>
             <Route path="/team/details/:id">
               <TeamDetails/>
             </Route>
             <Route path="*">
               <NoMatch/>
             </Route>
           </Switch>
        </Router>
    </div>
  );
}

export default App;
