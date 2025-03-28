import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_c0vqx93', 'template_yp24xcx', form.current, 'iusr4HLt8WaFOjtMb')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  };
    
  return (
    <div>
      <div className="Join" id="join-us">
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>LISTO PARA </span>
                <span>SUBIR DE NIVEL</span>
            </div>
            <div>
                <span>TU CUERPO </span>
                <span className='stroke-text'>CONMIGO?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Ingresa tu correo' />
                <button className="btn btn-j">Ingresa ahora</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Join
