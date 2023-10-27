import controls from '../../assets/Window Controls.svg'
import SidebarIcon from '../../assets/Icon • Sidebar.svg'
import ChevronLeft from '../../assets/Icon • Chevron Left.svg'
import ChevronRight from '../../assets/Icon • Chevron right.svg'
import Shield from '../../assets/Icon • Shield.svg'
import Clockwise from '../../assets/Icon • Clockwise Arrow.svg'
import Share from '../../assets/Icon • Share.svg'
import NewTab from '../../assets/Icon • New Tab.svg'
import tabs from '../../assets/Icon • Tab Overview.svg'
import './TopNav.css'

const TopNav = () => {
    return (
        <div className='top-navgations d-flex justify-content-between container-fluid'>
            <div className='d-flex'>
                <img className='' src={controls} alt="" />
                <img className='SidebarIcon' src={SidebarIcon} alt="" />
                <div className='Chevron d-flex'>
                    <img className='' src={ChevronLeft} alt="" />
                    <img className='' src={ChevronRight} alt="" />
                </div>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <img className='' src={Shield} alt="" />
                <input type="text" placeholder='constructor.spline.one' />
                <img className='Clockwise' src={Clockwise} alt="" />
            </div>
            <div>
                <img className='' src={Share} alt="" />
                <img className='' src={NewTab} alt="" />
                <img className='' src={tabs} alt="" />
            </div>
        </div>
    )
}

export default TopNav