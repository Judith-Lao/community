import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import SinglePost from './components/SinglePost'
import Homepage from './components/Homepage'
import DiscordLayout from './components/DiscordLayout'

 export default class Main extends Component {
  render () {
    return (
      <Router>
      <div id='app'>
        <main>
          <nav>
            Community
          </nav>
          <div>
            <Route exact path='/posts/:postId' component={SinglePost} />
            <Route exact path='/posts/' component={DiscordLayout} />
            <Route exact path='/' component={Homepage} />
          </div>
        </main>
      </div>
      </Router>
    )
  }
}
