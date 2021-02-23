import Comment from "./Comment";

function Comments({comments }) { 
    console.log(comments)
    const commentItems = comments.map((comment) => (
        // return comment.id comment.user comment.comment
        
        <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
        ))
        return (
            
                <div> {commentItems} </div>

            )
        }
        
        
export default Comments