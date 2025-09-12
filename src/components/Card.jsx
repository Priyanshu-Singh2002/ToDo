import React, { useState } from 'react'
import './Card.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";

const Card = (props) => {

    const [isEditing, setisEditing] = useState(false)

    return (
        <div className='Card'>
            <div className="first">
                <input type="checkbox" name="" id="" />
                {isEditing ?<input id='InnerInp' type="text" value={props.todo.text} onChange={(e)=> props.Edit(props.todo.id,e.target.value)} onBlur={() => setisEditing(!isEditing)} autoFocus /> : <span>{props.todo.text}</span>}
            </div>
            <div className="second">
                <button onClick={() => setisEditing(!isEditing)} className='list-button'><MdModeEdit /></button>
                <button onClick={() => props.Delete(props.todo.id)} className='list-button'><FaRegTrashCan /></button>
            </div>
        </div>
    )
}

export default Card