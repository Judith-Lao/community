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
      <div>
        <h1>Hello! Who are you?</h1>
        <h2>
          {this.state.accounts ? this.state.accounts.map(account =>
          <div key={account.id}>
          single account, {account.name}
          <button type="button" onClick={() => this.props.incorporateLogin(account)}>LoggedIn</button>
          </div>) : null }
        </h2>
      </div>
    )
  }
}
