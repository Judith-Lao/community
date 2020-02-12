import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class PostPreview extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const post = this.props.post
    return (
      <div key={post.id} className="single-post">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <br></br>by {post.account.name}<br></br>{post.content}
      </div>
    )
  }
}
