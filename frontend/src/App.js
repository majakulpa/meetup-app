import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from './pages/Auth'
import Events from './pages/Events'
import Bookings from './pages/Bookings'
import MainNavigation from './components/Navigation/MainNavigation'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main className="main-content">
        <Switch>
          <Redirect path="/" to="/auth" exact />
          <Route path="/auth" component={Auth} />
          <Route path="/events" component={Events} />
          <Route path="/bookings" component={Bookings} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
