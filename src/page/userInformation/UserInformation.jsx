import account_circle from '../../assets/account_circle.svg'
import moreHoriz from '../../assets/more_horiz.svg'
import avatar2 from '../../assets/Imageavatar-2.png'
import Line from '../../assets/Line.svg'

import IconNotfgatuion from '../../assets/IconNotfgatuion.svg'
import playlist_add_check from '../../assets/playlist_add_check.svg'
import cloud from '../../assets/cloud.svg'
import email from '../../assets/email.svg'
import group from '../../assets/group.svg'
import event from '../../assets/event.svg'
import build from '../../assets/build.svg'

import socialLinkIcon1 from '../../assets/local_phone.svg'
import socialLinkIcon2 from '../../assets/mail.svg'
import socialLinkIcon3 from '../../assets/chrome_reader_mode.svg'
import socialLinkIcon4 from '../../assets/ic_telegram.svg'
import socialLinkIcon5 from '../../assets/ic_whatsapp.svg'

import './userInformation.css'

const UserInformation = () => {
  return (
    <div className='UserInformation'>
      <div className='portfolio d-flex justify-content-between'>
        <img className='portfolioIconsTOp' src={account_circle} alt="" />
        <img className='portfolioIconsTOp' src={moreHoriz} alt="" />
      </div>
      <div className='userHint d-flex align-items-center justify-content-center mt-4'>
        <div className='userImage'>
          <img className='portfolioImage' src={avatar2} alt="" />
          <img className='line' src={Line} alt="" />
        </div>
        <h2 className='portfolioName mt-5'>Hello Alfred Bryant</h2>
        <p className='portfolioEmail mt-2'>adrain.nader@yahoo.com</p>

        <div className="boxes mt-5 d-flex flex-wrap justify-content-center text-center">
          <div className="box active d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M7 16H13C13.55 16 14 15.55 14 15V7C14 6.45 13.55 6 13 6H7C6.45 6 6 6.45 6 7V15C6 15.55 6.45 16 7 16ZM7 24H13C13.55 24 14 23.55 14 23V19C14 18.45 13.55 18 13 18H7C6.45 18 6 18.45 6 19V23C6 23.55 6.45 24 7 24ZM17 24H23C23.55 24 24 23.55 24 23V15C24 14.45 23.55 14 23 14H17C16.45 14 16 14.45 16 15V23C16 23.55 16.45 24 17 24ZM16 7V11C16 11.55 16.45 12 17 12H23C23.55 12 24 11.55 24 11V7C24 6.45 23.55 6 23 6H17C16.45 6 16 6.45 16 7Z" fill="#3361FF"/>
            </svg>
            <p className="boxText">Dashboard</p>
          </div>
          <div className="box d-flex align-items-center justify-content-center">
            <img className="boxIcon" src={IconNotfgatuion} alt="" />
            <p className="boxText">Notes</p>
          </div>
          <div className="box d-flex align-items-center justify-content-center">
            <img className="boxIcon" src={playlist_add_check} alt="" />
            <p className="boxText">Tasks</p>
          </div>
          <div className="box d-flex align-items-center justify-content-center">
            <img className="boxIcon" src={cloud} alt="" />
            <p className="boxText">Files</p>
          </div>
          <div className="box d-flex align-items-center justify-content-center">
            <img className="boxIcon" src={email} alt="" />
            <p className="boxText">Emails</p>
          </div>
          <div className="box d-flex align-items-center justify-content-center">
            <img className="boxIcon" src={group} alt="" />
            <p className="boxText">clints</p>
          </div>
          <div className="box d-flex align-items-center justify-content-center">
            <img className="boxIcon" src={event} alt="" />
            <p className="boxText">Calenders</p>
          </div>
          <div className="box d-flex align-items-center justify-content-center" onClick={() => {
            document.querySelector('.box').classList.add('.active');
          }}>
            <img className="boxIcon" src={build} alt="" />
            <p className="boxText">Settings</p>
          </div>
        </div>
      <div className='AllsocialLinks d-flex align-items-center justify-content-center gap-2'>
        <div>
          <img className='socialLinkIcon' src={socialLinkIcon1} alt="" />
        </div>
        <div>
          <img className='socialLinkIcon' src={socialLinkIcon2} alt="" />
        </div>
        <div>
          <img className='socialLinkIcon' src={socialLinkIcon3} alt="" />
        </div>
        <div>
          <img className='socialLinkIcon' src={socialLinkIcon4} alt="" />
        </div>
        <div>
          <img className='socialLinkIcon' src={socialLinkIcon5} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default UserInformation