import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactSelectors, deleteAll } from '../../redux/contact/contactSlice'
import Item from '../Item/Item'

function List() {
    const contacts = useSelector(contactSelectors.selectAll)
    const dispatch = useDispatch()
    const handleDeleteAll = () => {
        if(window.confirm("Are you sure?"))
        dispatch(deleteAll())
    }
  return (
    <div className='list'>
        <div className='deleteAll'>
            {
                contacts.length > 0 && <span onClick={handleDeleteAll}>Delete All</span>
            }
            </div>
        <ul>
        {
            contacts.map(contact => (
                <Item key={contact.id} items={contact} />
            ))
        }
        </ul>
    </div>
  )
}

export default List