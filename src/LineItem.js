import React from "react";
import { BsTrash3Fill } from "react-icons/bs";

const LineItem = ({item, handleCheck, handleDelete}) => {
    return(
        <li className="item" key={item.id}>
        <input 
           type="checkbox"
           onChange={() => handleCheck(item.id)}
           checked={item.checked}
        />
        <label
           style={item.checked ? {textDecoration: 'line-through'} : null}
           onDoubleClick={() => handleCheck(item.id)}>
           {item.item}
        </label>
        <BsTrash3Fill 
           onClick={() => handleDelete(item.id)}
           role="button" 
           tabIndex="0"
           aria-label={`Delete ${item.item}`}
        />
    </li>
    )
}

export default LineItem;