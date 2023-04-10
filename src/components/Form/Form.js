import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contact/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const [name,setName] = useState("")
    const [number,setNumber] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !number) return false;
        dispatch(addContact({id:nanoid(), name,phone_number:number}))
        setName("")
        setNumber("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='phone number' type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
        <button type='submit' className='btn'>Add</button>

    </form>
  )
}

export default Form