import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AllUsers from "./Components/AllUsers";
import Adduser from "./Components/Adduser";
import NotFound from "./Components/NotFound";
import Edituser from "./Components/Edituser";
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Login from "./Components/Login";

function App() {
  return (<>
  <BrowserRouter>
   <NavBar/>
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/Login" component={Login} />
   <Route exact path="/all" component={AllUsers} />
   <Route exact path="/add" component={Adduser} />
   <Route exact path="/edit/:id" component={Edituser} />
   <Route component={NotFound} />
   
   </Switch>
  </BrowserRouter> 
  </>);
}

export default App;


// "dev":"concurrently 'npm start''npm run json-server'",