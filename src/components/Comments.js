// import React, {useState} from "react";
import Comment from "./Comment";

function Comments({comments }) { 
    console.log(comments)
    const commentItems = comments.map((comment) => (
        // return comment.id comment.user comment.comment
        
        <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
        ))


        function hideFunction(){
                // const [hide, setHide] = useState()


                // {link ? (
                //     <p>
                //       <a href={link}>Link</a>
                //     </p>
                //   ) : null}

        }
        return (
            <div> 
                <button onClick = {hideFunction}> Hide Comments</button>
                <div> {commentItems} </div>
            </div>

            )
        }
        
        
export default Comments