import React from 'react'
import SaveForm from './useBuilder'

const CVInputs = () =>{ 

    const {values,handleChange} = SaveForm();

  return (
    <div className='form-left'>
        <h1>Fill in your details here </h1>
        <form className='form'>
            <div className='form-section'>
                <label className='form-label' htmlFor='firstname'>
                    First Name
                </label>
                <input 
                type = 'text'
                name = 'firstname'
                className='form-input'
                placeholder = 'First Name'
                value={values.firstname}
                onChange={handleChange}></input>
            </div>
            <div className='form-section'>
                <label className='form-label' htmlFor='lastname'>
                    Last Name 
                </label>
                <input 
                type = 'text'
                name = 'lastname'
                className='form-input'
                placeholder = 'Last Name'></input>
            </div>
            <div className='form-section'>
                <label className='form-label' htmlFor='email'>
                    Email 
                </label>
                <input 
                type = 'text'
                name = 'email'
                className='form-input'
                placeholder = 'Email'></input>
            </div>
            <div className='form-section'>
                <label className='form-label' htmlFor='profile-photo'>
                    Upload Profile Photo
                </label>
                <input 
                type = 'file'
                name = 'image'
                className='form-input'
                ></input>
            </div>
            <div className='form-section'>
                <label className='form-label' htmlFor='address'>
                    Address 
                </label>
                <input 
                type = 'text'
                name = 'address'
                className='form-input'
                placeholder = 'Address'></input>
            </div>
            <div className='form-section'>
                <label className='form-label' htmlFor='phone-number'>
                    Phone Number 
                </label>
                <input 
                type = 'text'
                name = 'phone-number'
                className='form-input'
                placeholder = 'Phone Number'></input>
            </div>
            <div className='form-section'>
                <label className='form-label' htmlFor='about-you'>
                    About You
                </label>
                <textarea 
                type = 'text'
                name = 'about-you'
                className='form-input'
                placeholder = 'Please write about you '
                rows="5"></textarea>
            </div>
            
        </form>
    </div>
  )
}

export default CVInputs