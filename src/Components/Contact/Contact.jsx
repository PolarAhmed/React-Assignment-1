import React from 'react'

export default function Contact() {
  return <>

  <div className='contact d-flex' style={{ minHeight: "90vh" }}>
    <div className='container'>
      <div className='container pt-5' style={{color:'#2c3e50'}}>
      <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>contact section</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line me-3' style={{backgroundColor:'#2c3e50'}}></div>
        <i className='fa-solid fa-star'></i>
        <div className='line ms-3' style={{backgroundColor:'#2c3e50'}}></div>
      </div>
    </div>
    <div className='container'>
      <form className='mx-auto mt-5 p-3 d-flex flex-column align-items-start' style={{ maxWidth: "800px" }}>
      <label className='py-3 pe-3 w-100'>
        <input className='form-control border-0 border-bottom py-3' type="text" placeholder="UserName:" />
      </label>
      <label className='py-3 pe-3 w-100'>
        <input className='form-control border-0 border-bottom py-3' type="text" placeholder="Age:" />
      </label>
      <label className='py-3 pe-3 w-100'>
        <input className='form-control border-0 border-bottom py-3' type="text" placeholder="Email:" />
      </label>
      <label className='py-3 pe-3 w-100'>
        <input className='form-control border-0 border-bottom py-3' type="text" placeholder="Password:" />
      </label>
      <button className='mt-3'>Send a Message</button>
    </form>
    </div>
    </div>
  </div>

  </>
}
