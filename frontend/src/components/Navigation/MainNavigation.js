import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from './../../context/auth-context'
import './MainNavigation.css'

const mainNavigation = props => {
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <header className="main-navigation">
            <div className="main-navigation__logo">
              <h1>Meetups</h1>
            </div>
            <nav className="main-navigation__items">
              <ul>
                <li>
                  <NavLink to="/events">Events</NavLink>
                </li>
                {context.token && (
                  <React.Fragment>
                    <li>
                      <NavLink to="/bookings">Bookings</NavLink>
                    </li>
                    <li>
                      <button onClick={context.logout}>Logout</button>
                    </li>
                  </React.Fragment>
                )}
                {!context.token && (
                  <li>
                    <NavLink to="/auth">Login</NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </header>
        )
      }}
    </AuthContext.Consumer>
  )
}

export default mainNavigation
