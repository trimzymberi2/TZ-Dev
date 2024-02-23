import React from 'react'
import './Contact.scss'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'
import linkedin from '../../images/linkedin.svg'
import git from '../../images/git.png'

export default function Contact() {
  return (
    <div className='contact-cnt flex' id='Contact'>
        <div className='cntct-frst-banner flex'>
            <h1 className='Grdtext'>Get in touch</h1>
            <p>Feel free to reach me, I will response in a very short time</p>
        </div>
        <div className='cntc-scnd-wrapper flex'>
        <div className='cntc-scnd-banner flex'>
            <div className='cntc-data flex'>
                <img src={mail} alt="" />
                <h2>trimzymberi22@gmail.com</h2>
            </div>
            <div className='cntc-data flex'>
                <img src={phone} alt="" />
                <h2>+38345452712</h2>
            </div>
            <div className='cntc-data flex'>
                <img src={linkedin} alt="" />
                <h2>Trim Zymberi</h2>
            </div>
            <div className='cntc-data flex'>
                <img src={git} alt="" />
                <h2>trimzymberi</h2>
            </div>
        </div>
        </div>
    </div>
  )
}
