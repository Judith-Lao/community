import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Homepage from './components/Homepage'

 export default class Main extends Component {
  render () {
    return (
      <Router>
      <div id='app'>
      <nav>
          <div>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/'>Home</Link>
          </div>
        </nav>

        <main>
          <h1>Community</h1>
          <div>
            <Route exact path='/' component={Homepage} />
          </div>
        </main>
      </div>
      </Router>
    )
  }
}
