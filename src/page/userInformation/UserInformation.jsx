import account_circle from '../../assets/account_circle.svg'
import moreHoriz from '../../assets/more_horiz.svg'
import avatar2 from '../../assets/Imageavatar-2.png'
import Line from '../../assets/Line.svg'

import dashboard from '../../assets/dashboard.svg'
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
            <img className="boxIcon" src={dashboard} alt="" />
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
          <div className="box d-flex align-items-center justify-content-center">
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