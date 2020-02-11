import React, {Component} from 'react'
import LoginScreen from './LoginScreen'
import axios from 'axios'
import DiscordLayout from './DiscordLayout'
import Blog from './Blog'

export default class Homepage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      communities: [],
      currentAccount: {}
    }
    this.incorporateLogin = this.incorporateLogin.bind(this)
  }

  async componentDidMount() {

  }

  incorporateLogin(account) {
    this.setState({
      currentAccount: account
    })
  }


  render() {
    return (
      <div>
      <div>
        {this.state.currentAccount.id ?

        <div>current Account available, {this.state.currentAccount.name}
        <DiscordLayout currentAccount={this.state.currentAccount}/>
        <Blog currentAccount={this.state.currentAccount}/>
        </div>
        : <LoginScreen incorporateLogin={this.incorporateLogin}/>}
      </div>
      </div>

    )
  }
}
