import React, {useState} from "react";
import Comment from "./Comment";

function Comments({comments }) { 

    const [hide, setHide] = useState(true)
    


    const commentItems = comments.map((comment) => (
        // return comment.id comment.user comment.comment
        
        <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
        ))


        function hideFunction(){

            // {condition ? true : false}
            {hide ? setHide(false): setHide(true)}
            console.log("state", hide)

        }
        return (
            <div> 
                <button onClick = {hideFunction}> {hide ? "Hide Comments" : "Show Comments"} </button>
                <div> {hide ? commentItems : null} </div>
            </div>

            )
        }
        
        
export default Comments