import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import DiscordLayout from './components/DiscordLayout'
import Homepage from './components/Homepage'

 export default class Main extends Component {
  render () {
    return (
      <Router>
      <div id='app'>
      <nav>
          <div>
            <Link to='/'>Home</Link>
            {/* <Link to='/discord'>Discord</Link> */}
          </div>
        </nav>

        <main>
          <h1>Community</h1>
          <div>
            {/* <Route exact path='/discord' component={DiscordLayout} /> */}
            <Route exact path='/' component={Homepage} />
          </div>
        </main>
      </div>
      </Router>
    )
  }
}
