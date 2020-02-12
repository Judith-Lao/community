import React, {Component} from 'react'
import axios from 'axios'
import SinglePost from './SinglePost'
import PostPreview from './PostPreview'

export default class DiscordLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    let {data} = await axios.get('/api/posts')
    this.setState({
      posts: data
    })
  }

  render() {
    //can refactor to create Post with links to SinglePost
    return (
      <div className="discord">
        Hello this is the Discord.
        <div>
          {this.state.posts && this.state.posts.map(post =>
          <PostPreview post={post}/>
          )}
        </div>
      </div>
    )
  }
}
