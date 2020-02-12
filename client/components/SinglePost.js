import React, {Component} from 'react'
import axios from 'axios'

export default class SinglePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
      account: {}
    }
  }

  async componentDidMount() {
    let {data} = await axios.get(`/api/posts/${this.props.match.params.postId}`)
    this.setState({
      post: data,
      account: data.account
    })
  }

  render() {
    const post = this.state.post
    return (
      <div>
        {post ? <div>{post.title}<br></br>by {this.state.account.name}<br></br>{post.content}</div> : <div>Loading</div>}

      </div>
    )
  }
}
