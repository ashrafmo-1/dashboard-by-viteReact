import playlist_add_check from '../../assets/playlist_add_check.svg'
// import dashboard from '../../assets/dashboard.svg'
import event from '../../assets/event.svg'
import Sort from '../../assets/IconSort.svg'
import Icon from '../../assets/Icon.svg'
import tredline from '../../assets/tredline.svg'

import './barsSections.css'

const BarSections = () => {
  return (
    <div className="BarSections d-flex align-items-center">
        <ul className="links d-flex align-items-center">
            <li className="d-flex align-items-center">
                <img src={playlist_add_check} alt="" />
                List Tasks
            </li>
            <li className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M7 16H13C13.55 16 14 15.55 14 15V7C14 6.45 13.55 6 13 6H7C6.45 6 6 6.45 6 7V15C6 15.55 6.45 16 7 16ZM7 24H13C13.55 24 14 23.55 14 23V19C14 18.45 13.55 18 13 18H7C6.45 18 6 18.45 6 19V23C6 23.55 6.45 24 7 24ZM17 24H23C23.55 24 24 23.55 24 23V15C24 14.45 23.55 14 23 14H17C16.45 14 16 14.45 16 15V23C16 23.55 16.45 24 17 24ZM16 7V11C16 11.55 16.45 12 17 12H23C23.55 12 24 11.55 24 11V7C24 6.45 23.55 6 23 6H17C16.45 6 16 6.45 16 7Z" fill="#3361FF"/>
            </svg>
            Boards
            </li>
            <li className="d-flex align-items-center">
                <img src={event} alt="" />
                Calenders
            </li>
            <li className="d-flex align-items-center">
                <img src={Sort} alt="" />
                Gantt
            </li>
            <li className="d-flex align-items-center">
                <img src={Icon} alt="" />
                Timeline
            </li>
            <li className="d-flex align-items-center">
                <img src={tredline} alt="" />
                Activity
            </li>
        </ul>
        <input type="text" placeholder='Search Tasks' />
    </div>
  )
}

export default BarSections