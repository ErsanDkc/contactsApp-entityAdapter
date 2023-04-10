import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contact/contactSlice'
function Item({ items }) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteContact(id))

    }
    return (
        <li>
            <div>

            {items.name}
            </div>
            <div style={{marginRight:10}}>
                <span>{items.phone_number}</span>
                <div className='deleteBtn' onClick={() => handleDelete(items.id)}>x</div>
            </div>
            


        </li>
    )
}

export default Item