import more_horiz from '../../assets/more_horiz.svg'
import './headerBox.css'

const HeaderBox = (props) => {
    return (
        <>
            <div className="boxHeader d-flex align-items-center w-100 justify-content-between">
                <div className="boxContent d-flex gap-2 align-items-center">
                <h4 className="boxtitle">{props.title}</h4>
                <h6 className="boxDoneNumber">5</h6>
                </div>
            <div className='controls'>
                <img src={more_horiz} alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path  d="M21 16H16V21C16 21.55 15.55 22 15 22C14.45 22 14 21.55 14 21V16H9C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14H14V9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9V14H21C21.55 14 22 14.45 22 15C22 15.55 21.55 16 21 16Z" fill="#C3CAD9"/>
                </svg>
            </div>
            </div>
        </>
    )
}

export default HeaderBox