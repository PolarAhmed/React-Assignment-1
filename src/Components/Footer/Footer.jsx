import React from 'react'

export default function Footer() {
  return <>
  
  <div className='footer'>
    <div className='card-group'>
        <div className='card'>
            <div className='card-body text-center text-white'>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
        </div>
        <div className='card'>
            <div className='card-body text-center text-white'>
                <h3>AROUND THE WEB</h3>
                <div className='icons'>
                    <a href='https://www.facebook.com/ahmed.ali.800345'><i className='fa-brands fa-facebook mx-2 link-light'></i></a>
                    <a href='https://wa.link/9l1wn3'><i className='fa-brands fa-whatsapp mx-2 link-light'></i></a>
                </div>
            </div>
        </div>
        <div className='card'>
            <div className='card-body text-center text-white'>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelancer is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    <div className='copyright text-white p-2'>
        <p className='mt-3'>Copyright Ahmed Ali™ 2025</p>
    </div>
  </div>

  </>
}


