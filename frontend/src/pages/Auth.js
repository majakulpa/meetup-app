import React, { Component } from 'react'
import './Auth.css'

class AuthPage extends Component {
  state = {
    isLogin: true
  }

  constructor(props) {
    super(props)
    this.emailEl = React.createRef()
    this.passwordEl = React.createRef()
    this.nameEl = React.createRef()
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin }
    })
  }

  submitHandler = event => {
    event.preventDefault()
    const email = this.emailEl.current.value
    const password = this.passwordEl.current.value
    const name = !this.state.isLogin ? this.nameEl.current.value : ''

    if (email.trim().length === 0 || password.trim().length === 0) {
      return
    }

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `
    }

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {name: "${name}", email: "${email}", password: "${password}"}) {
              _id
              name
              email
            }
          }
        `
      }
    }

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!')
        }
        return res.json()
      })
      .then(resData => {
        console.log(resData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        {!this.state.isLogin && (
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              autoComplete="current-name"
              ref={this.nameEl}
            />
          </div>
        )}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autoComplete="current-email"
            ref={this.emailEl}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            ref={this.passwordEl}
          />
        </div>
        <div className="form-actions">
          <button type="submit">
            {!this.state.isLogin ? 'Signup' : 'Login'}
          </button>
          <button type="button" onClick={this.switchModeHandler}>
            Switch to {this.state.isLogin ? 'Signup' : 'Login'}
          </button>
        </div>
      </form>
    )
  }
}

export default AuthPage
