import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }
  
  render() {
    
    return (
    
        <div className="login-container">
          <form className="form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
            <div className="username-container">{this.renderUsername()}</div>
            <div className="password-container">{this.renderPassword()}</div>
          </form>
        </div>
      
    )
  }
}

export default Login
