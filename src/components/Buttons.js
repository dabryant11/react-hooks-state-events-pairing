import React, {useState} from "react";


function Buttons({upvotes, downvotes }) { 
    
    const [up, setUp] = useState(9210)
    const [down, setDown] = useState(185)
    function handleClick(e) {
        if(e.target.name === "up"){
            setUp(up + 1)
        }
        if(e.target.name === "down"){
            setDown(down - 1)
        }
    }
    
    
    
    
    return (
        <div>

<button name = "up"  onClick = {handleClick} > {up} 👍🏾</button>
<button name = "down"  onClick = {handleClick}> {down} 👎</button>
        </div>
    )
}


export default Buttons


// onClick = {handleClick}