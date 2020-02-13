import React, {Component} from 'react'
import axios from 'axios'
import Comment from './Comment'

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
    let transformed = await this.nestComments(data.comments)
    this.setState({
      post: data,
      account: data.account,
      comments: transformed
    })
    console.log("data", this.state.comments)
  }


  nestComments(commentList) {
  let arr = []
  commentList.forEach(comment => this.transformComment(comment, commentList, arr))
  return arr
  }

  transformComment(comment, commentList, array) {
  const commentMap = {};

  //create key value pairs
  commentMap["id"] = comment.id
  commentMap["comment"] = comment
  commentMap["children"] = []

  // iterate over the comments again and correctly nest the children
  commentList.forEach(comment => {
    if(comment.commentId === commentMap["id"]) {
      const parent = commentMap["children"];
      parent.push(comment)
    }
  });
  array.push(commentMap)
  return array
  }


  render() {
    const post = this.state.post
    const comments = this.state.comments
    return (
      <div>
        {post &&
        <div>{post.title}<br></br>
        by {this.state.account.name}<br></br>{post.content}</div>
        }
        {comments && comments.map(comment => <Comment comment={comment}/>
        )}
      </div>
    )
  }
}
