import React from 'react'
import './Contact.scss'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'
import linkedin from '../../images/linkedin.svg'
import git from '../../images/git.png'
import DarkMail from '../../images/Darkmail.png'
import darkPhone from '../../images/DarkPhone.png'
import darkGit from '../../images/darkGit.png'
import { useTheme} from '../../Navbar/ThemeContext'

export default function Contact() {

const { selectedTheme } = useTheme();
  console.log(selectedTheme);
  return (
    <div className='contact-cnt flex' id='Contact'>
        <div className='cntct-frst-banner flex'>
            <h1 className='Grdtext'>Get in touch</h1>
            <p>Feel free to reach me, I will response in a very short time</p>
        </div>
        <div className='cntc-scnd-wrapper flex'>
        <div className='cntc-scnd-banner flex'>
            <div className='cntc-data flex'>
                {selectedTheme === 'light' ? (
                    <img src={mail} alt="" />
                ) : (
                    <img src={DarkMail} alt="" />
                )}
                <h2>trimzymberi22@gmail.com</h2>
            </div>
            <div className='cntc-data flex'>
                {selectedTheme === 'light' ? (
                    <img src={phone} alt="" />
                ) : (
                    <img src={darkPhone} alt="" />
                )}
                <h2>+38345452712</h2>
            </div>
            <div className='cntc-data flex'>
                <img src={linkedin} alt="" />
                <h2>Trim Zymberi</h2>
            </div>
            <div className='cntc-data flex'>
                {selectedTheme === 'light' ? (
                    <img src={git} alt="" />
                ) : (
                    <img src={darkGit} alt="" />
                )}
                <h2>trimzymberi</h2>
            </div>
        </div>
        </div>
    </div>
  )
}
