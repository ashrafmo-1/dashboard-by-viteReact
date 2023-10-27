import navMenu from '../../assets/Icon.svg'
import moreHoriz from '../../assets/more_horiz.svg'
import account_circle from '../../assets/account_circle.svg'
import IconNotfgatuion from '../../assets/IconNotfgatuion.svg'
import Iconclose from '../../assets/Iconclose.svg'
import ActionSearch from '../../assets/ActionSearch.svg'
import ChevronRight from '../../assets/Icon • Chevron Right.svg'
import './nav.css'

const Nav = () => {
  return (
    <div className='navgationBar d-flex align-items-center'>
      <div className='d-flex align-items-center gap-5'>
        <img className='navgationMenu bg-light' src={navMenu} alt= "navMenu" />
        <h1 className="brandName"> Constructor </h1>
      </div>

      <div className='navbarLinks d-flex gap-4'>
        <span className='navbarLink'> Dashboard </span>
        <span className='navbarLink'> About Us </span>
        <span className='navbarLink'> News </span>
        <span className='navbarLink'> User Policy </span>
        <span className='navbarLink'> User Policy </span>
        <span className='navbarLink' style={{width: '30px', height: '30px'}}> <img src={moreHoriz} alt="" /> </span>
      </div>

      <div className='inputSearch'>
        <input type="text" placeholder='Search Products, Orders and Clients' />
        <img className='iconSearch' src={ActionSearch} alt="" />
        <img className='icon' src={ChevronRight} alt="" />
      </div>

      <div className='dataUser d-flex gap-4 align-items-center'>
        <div className='userInfo d-flex gap-1 align-items-center'>
          <img src={account_circle} alt="" />
          <span className='userName'> Clayton Santos </span>
        </div>
        <div className='controls d-flex gap-2 align-items-center'>
          <img className='iconNotvgation' src={IconNotfgatuion} alt="" />
          <img className='iconClose' src={Iconclose} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Nav