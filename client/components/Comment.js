import React, {Component} from 'react'

export default class Comment extends Component {
  //nestedComments is not working, it does not render another Comment component
  render() {
    let commentForPass = this.props.comment
    let pass = {...commentForPass}
    const nestedComments = (this.props.comment.children || []).map(comment => {
      console.log("nested!", comment)
      return <div> nested<Comment comment={pass}/> nested2</div> ;
    });
    const comment = this.props.comment.comment
    return(
      <div>
        {comment && (
        <div>
        <span>{comment.content}</span>
        <a href="#"> {comment.account.name} </a>
        <div>
        {nestedComments}
        </div>
        </div>)}
      </div>
    )
  }
}
