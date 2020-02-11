import React, {Component} from 'react'
import axios from 'axios'

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      accounts: [],
      currentAccount: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/accounts')
    this.setState({
      accounts: data
    })
    console.log("accounts in componentMounted", this.state.accounts)
  }

  handleClick(account) {
    this.setState({
      currentAccount: account
    })
  }

  render() {
    return (
      <div>
        <h1>Hello! Who are you?</h1>

        <h2>{this.state.accounts ? this.state.accounts.map(account =>

        <div key={account.id}>
          single account, {account.name}

          <button type="button" onClick={() => this.handleClick(account)}>LoggedIn</button>
        </div>) : null }
        </h2>

      </div>
    )
  }
}
