import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/contact/contactSlice'
import Item from '../Item/Item'

function List() {
    const contacts = useSelector(contactSelectors.selectAll)

  return (
    <div className='list'>
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