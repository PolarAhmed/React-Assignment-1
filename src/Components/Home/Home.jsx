import React from 'react'

export default function Home() {
  return <>

  <div className='home d-flex align-items-center justify-content-center' style={{ minHeight: "90vh"}}>
   <div className='text-center text-white'>
    <img className='mb-3' src="src/assets/avataaars.svg" width={250} height={250}></img>
    <div className='text-center pt-4'>
      <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start framework</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line me-3'></div>
        <i className='fa-solid fa-star'></i>
        <div className='line ms-3'></div>
      </div>
      <div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
   </div>
  </div> 

  </>
}