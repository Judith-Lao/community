import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import LoginScreen from './components/LoginScreen'

 export default class Main extends Component {
  render () {
    return (
      <Router>
      <div id='app'>
      <nav>
          <div>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/'>Login</Link>
          </div>
        </nav>

        <main>
          <h1>Community</h1>
          <div>
            <Route exact path='/' component={LoginScreen} />
          </div>
        </main>
      </div>
      </Router>
    )
  }
}
