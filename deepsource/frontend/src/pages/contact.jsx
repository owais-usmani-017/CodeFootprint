import React from 'react'

function Contact() {
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Contact page</h1>
      <form action="" style={{border:'2px'}}>
        <label htmlFor="">Name:</label>
        <input type="text" placeholder='Name' />

        <label htmlFor="">Email:</label>
        <input type="text" placeholder='email' />

      </form>
    </div>
  )
}

export default Contact
