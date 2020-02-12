import React, {Component} from 'react'
import axios from 'axios'

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      accounts: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/accounts')
    this.setState({
      accounts: data
    })
  }


  render() {
    return (
      <div className="login">
        <h1>Who are you?</h1>
        <h2>
          {this.state.accounts ? this.state.accounts.map(account =>
          <a className="account" onClick={() => this.props.incorporateLogin(account)}>{account.name}
          </a>) : null }
        </h2>
      </div>
    )
  }
}
