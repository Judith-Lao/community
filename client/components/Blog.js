import React, {Component} from 'react'
import axios from 'axios'

export default class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      communities: []
    }
  }

  async componentDidMount() {
    console.log(this.props.currentAccount)
  }

  render() {
    return (
      <div className="blog">
        This is the blog.
      </div>
    )
  }
}
