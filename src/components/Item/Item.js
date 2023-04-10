import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contact/contactSlice'
import { NavLink } from 'react-router-dom'
function Item({ items }) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        if (window.confirm("Are you sure?"))
            dispatch(deleteContact(id))

    }
    
    return (
        <li>
            <span className='name'>
                {items.name}
            </span>

            <span className='number' style={{ marginRight: 20 }}>{items.phone_number}</span>
            <span style={{marginRight: -50}}>
                <span className='edit' ><NavLink to={`/edit/${items.id}`}>e</NavLink></span>
                <span className='delete' onClick={() => handleDelete(items.id)}>x</span>

            </span>


        </li>
    )
}

export default Item