import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoFound from './components/NoFound/NoFound';
import AddProduct from './components/Admin/AddProduct/AddProduct'
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import CheckOut from './components/Home/CheckOut/CheckOut';
import PrivateRoute from './components/Home/PrivateRouter/PrivateRouter';

export const UserContext = createContext()


function App() {

  const [login, setLogin] = useState({})
  return (
    <UserContext.Provider value = {[login, setLogin]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/admin">
            <AddProduct></AddProduct>
        </Route>
        <PrivateRoute path="/checkOut">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="*">
            <NoFound></NoFound>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
