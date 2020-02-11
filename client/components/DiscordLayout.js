import React, {Component} from 'react'
import axios from 'axios'

export default class DiscordLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    let {data} = await axios.get('/api/posts')
    await this.setState({
      posts: data
    })
    console.log(this.state.posts)
  }

  render() {
    return (
      <div>
        Hello this is the Discord.
        <div>
          {this.state.posts && this.state.posts.map(post => <div>{post.content}</div>)}
        </div>
      </div>
    )
  }
}
