import React from "react";


const GroceryItem = ({title, status, id, handleToggle, handleDelete}) => {

    return (<div> 
        <h1>{title}</h1>
        <h3>{status ? "Completed" : "Not Completed"}</h3>
        <button onClick={() => handleToggle(id)}>Toggle</button>
        <button onClick={() => handleDelete(id) }>Delete</button>
    </div>
    );
}

export {GroceryItem}