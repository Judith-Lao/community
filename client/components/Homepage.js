import React, {Component} from 'react'
import axios from 'axios'

export default class Homepage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
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
