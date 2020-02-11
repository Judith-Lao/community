import React, {Component} from 'react'
import axios from 'axios'

export default class DiscordLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      communities: []
    }
  }

  async componentDidMount() {

  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}
