import React from 'react'

export default function Portfolio() {
  return <>

  <div className='portfolio d-flex align-items-center justify-content-center' style={{ minHeight: "90vh" }}>
    <div className='container'>
    <div className='container pt-4' style={{color:'#2c3e50'}}>
      <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line me-3' style={{backgroundColor:'#2c3e50'}}></div>
        <i className='fa-solid fa-star'></i>
        <div className='line ms-3' style={{backgroundColor:'#2c3e50'}}></div>
      </div>
    </div>
      <div className='container pb-5'>
        <div className='row g-5'>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100' src="src/assets/port1.png"></img>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100' src="src/assets/port2.png"></img>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100' src="src/assets/port3.png"></img>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100' src="src/assets/port1.png"></img>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100' src="src/assets/port2.png"></img>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100' src="src/assets/port3.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  </>
}

