import React from "react";
import { GroceryInput } from "./GroceryInput";
import {v4 as uuid} from "uuid";
import { GroceryItem } from "./GroceryItem";


const Grocery = () => {
    
    const [data, setData] = React.useState([]); 
    const [showAll, setShowAll] = React.useState(false);

        const handleAdd = (title) =>{
            const payload = {
                title,
                status : false,
                id: uuid(),
            };
            setData([ ...data, payload]);
        }

        const handleToggle = (id)=>{
            const updatedData = data.map((item)=>item.id === id ? {...item, status : !item.status} : item);

            setData(updatedData);
        }
        const handleDelete = (id)=>{
            const updatedData = data.filter((item)=>item.id !== id);

            setData(updatedData);
        }

    return ( <div>
        <GroceryInput handleClick ={handleAdd} />       

        {
        data.filter((item) => (showAll ? true : !item.status))
        .map((item) =>(
            <GroceryItem { ...item } key = {item.id} handleToggle = {handleToggle} handleDelete = {handleDelete} />
            
        ))}
        <button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Only unbought items" : "Show All"}</button>
        </div>
        );
    
}

export {Grocery}    