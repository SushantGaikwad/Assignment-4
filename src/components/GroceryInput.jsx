import React from "react";

 
const GroceryInput = ({handleClick}) => {

    const [title,setTitle] = React.useState("");


    return <div>
            <input placeholder="Add Something" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <button onClick={()=> { handleClick(title); setTitle("")}}>Add</button> 
         </div>
}

export {GroceryInput}  