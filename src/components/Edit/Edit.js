import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { contactSelectors, updateContact } from '../../redux/contact/contactSlice'
function Edit() {
    const {id} = useParams()
    const contact = useSelector(state => contactSelectors.selectById(state, id))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name,setName] = useState(contact.name)
    const [number,setNumber] = useState(contact.phone_number)
    const [success,setSuccess] = useState(false)
    const handleEditSubmit = (e) => {
        e.preventDefault()
        if(!name || !number) return false;
        dispatch(updateContact({
            id,
            changes :{
                name,
                phone_number:number,
            }
        }))
        setSuccess(true)
        setTimeout(() => {
            navigate("/")
            setSuccess(false)
        },1300)
    }
  return (
    <>
    <h1>Edit</h1>
    <form onSubmit={handleEditSubmit}>
        <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}  />
        <input placeholder='phone number' type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
        {
            success ? <div className="loader"></div> : <button type='submit' className='btn'>Edit</button>
        }
        

    </form>
    </>
  )
}

export default Edit