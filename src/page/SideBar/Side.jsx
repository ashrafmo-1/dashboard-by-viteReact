import ActionExplor from '../../assets/ActionExplor.svg'
import toggleStar from '../../assets/toggleStar.svg'
import socialMessanger from '../../assets/socialMessanger.svg'
import tredline from '../../assets/tredline.svg'
import publicicon from '../../assets/public.svg'
import location from '../../assets/location.svg'

import avatar from '../../assets/avatar-1.png'
import avatar2 from '../../assets/avatar-2.png'
import avatar3 from '../../assets/avatar-3.png'
import IconPlus from '../../assets/IconPlus.svg'


import './side.css'

const Side = () => {
    return (
        <div className='sideAllContent d-flex justify-content-between'>
                <div className='side d-flex justify-content-center align-items-center gap-2'>
                    <div className='iconPages'><img src={ActionExplor} alt="" /></div>
                    <div className='iconPages'><img src={toggleStar} alt="" /></div>
                    <div className='iconPages'><img src={socialMessanger} alt="" /></div>
                    <div className='iconPages'> <img src={tredline} alt="" /> </div>
                    <div className='iconPages'><img src={publicicon} alt="" /></div>
                    <div className='iconPages'><img src={location} alt="" /></div>
                </div> 
                <div className='side d-flex justify-content-center align-items-center gap-2'>
                    <div className='avatar'><img src={avatar} alt="" /></div>
                    <div className='avatar'><img src={avatar2} alt="" /></div>
                    <div className='avatar'><img src={avatar3} alt="" /></div>
                    <div className='addNewUSer'><img src={IconPlus} alt="" /></div>
                </div>
            </div>
    )
}

export default Side