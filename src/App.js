import './App.css';
import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import ListUsers from './Components/ListUsers/ListUsers'
import User from './Components/User/User'
import Admin from './Components/Admin/Admin'
import NavBar from './Components/NavBar/NavBar'
function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
<Route exact path='/' component={Home}/>
<Route exact path='/users' component={ListUsers}/>
<Route  path='/users/user/:id' component={User}/>
<Route  path='/admin' component={Admin}/>




      </Switch>
    </div>
  )
}

export default App
