import React from 'react'
import './Card.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";

const Card = (props) => {
    return (
        <div className='Card'>
            <div className="first">
                <input type="checkbox" name="" id="" />
                <span>{props.todo}</span>
            </div>
            <div className="second">
                <button className='list-button'><MdModeEdit /></button>
                <button className='list-button'><FaRegTrashCan /></button>
            </div>
        </div>
    )
}

export default Card