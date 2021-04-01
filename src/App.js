import './App.css'
import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports'
import Team from './pages/Team'
const Login = ()=> {
  return(
    <div>tela de login</div>
  )
}
function App() {
  const logado = false
  return (

      <Router>
        {!logado && 
        <div>
          <Sidebar />
        <Switch>

          <Route path="/" exact component={Login} />
        </Switch>
        </div>

        }
      {logado && 
      <Switch>
          <Route path="/" exact component={Team} />

        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={Reports} />
        <Route path="/reports/reports2" exact component={Reports} />
        <Route path="/reports/reports3" exact component={Reports} />
        <Route path="/team" exact component={Team} />
        <Route path="/login" exact component={Team} />
      </Switch>}
    </Router>
  )
}

export default App
