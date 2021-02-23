import Comment from "./Comment";

function Comments({comments }) { 
    
    const commentItems = comments.map((comment) => (
        // return comment.id comment.user comment.comment
        
        <Comment key = {comment.id} user = {comment.user} comment = {comment.comment}/>
        ))
        return (
            <Comment/>

            )
        }
        
        
export default Comments