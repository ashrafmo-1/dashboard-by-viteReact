import ToDoSlice from "../../../components/TODOS/ToDoSlice"
import HeaderBox from "../../../components/headerBox/HeaderBox"
import avatar1 from '../../../assets/avatar-1.png'
import avatar2 from '../../../assets/avatar-2.png'
import close from '../../../assets/close.svg'

// css
import './Review.css'

const Review = () => {
  return (
    <div>
            <HeaderBox title={'Review'} number={'16K'} />
      <div className="toDo">
      <div className="BoxContent">
        <ToDoSlice title={'Astronomy Or Astrology'} descreptionTop={'Space Tasks 2'} img={avatar2} />
      </div>
      </div>
      <div className="toDo">
        <div className="BoxContent">
          <ToDoSlice title={'Astronomy Binoculars A Great'} descreptionTop={'Space Tasks 2'} img={avatar2} />
        </div>
      </div>
      <div className="toDo">
        <div className="BoxContent">
          <ToDoSlice title={'Astronomy Binoculars A Great'} descreptionTop={'Space Tasks 2'} img={avatar2} />
        </div>
      </div>
      <div className="toDo">
        <div className="BoxContent">
          <div className="topInput d-flex align-items-center justify-content-between">
            <img src={close} alt="" />
            <input className="addNewToDo" type="text" placeholder="Task name or type " />
            <img className="avatar" src={avatar1} alt=""  />
          </div>
          <div className="controlSingleToDo d-flex align-items-center justify-content-between">
            <div className="d-flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4 9L17.16 7.8C17.07 7.34 16.66 7 16.18 7H9C8.45 7 8 7.45 8 8V23C8 23.55 8.45 24 9 24C9.55 24 10 23.55 10 23V17H15.6L15.84 18.2C15.93 18.67 16.34 19 16.82 19H22C22.55 19 23 18.55 23 18V10C23 9.45 22.55 9 22 9H17.4Z" fill="#C3CAD9"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2539 19.5H9.67393C7.58393 19.5 5.72393 17.97 5.52393 15.89C5.29393 13.51 7.16393 11.5 9.50393 11.5H21.8639C23.1739 11.5 24.3639 12.44 24.4939 13.74C24.6439 15.24 23.4739 16.5 22.0039 16.5H11.5039C10.9539 16.5 10.5039 16.05 10.5039 15.5C10.5039 14.95 10.9539 14.5 11.5039 14.5H20.2539C20.6639 14.5 21.0039 14.16 21.0039 13.75C21.0039 13.34 20.6639 13 20.2539 13H11.6439C10.3339 13 9.14393 13.94 9.01393 15.24C8.86393 16.74 10.0339 18 11.5039 18H21.8339C23.9239 18 25.7839 16.47 25.9839 14.39C26.2139 12 24.3439 10 22.0039 10H9.73393C6.86393 10 4.29393 12.1 4.02393 14.96C3.72393 18.25 6.28393 21 9.50393 21H20.2539C20.6639 21 21.0039 20.66 21.0039 20.25C21.0039 19.84 20.6639 19.5 20.2539 19.5Z" fill="#C3CAD9"/>
            </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 5C9.47 5 5 9.48 5 15C5 20.52 9.47 25 14.99 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 14.99 5ZM15 23C10.58 23 7 19.42 7 15C7 10.58 10.58 7 15 7C19.42 7 23 10.58 23 15C23 19.42 19.42 23 15 23ZM14.78 10H14.72C14.32 10 14 10.32 14 10.72V15.44C14 15.79 14.18 16.12 14.49 16.3L18.64 18.79C18.98 18.99 19.42 18.89 19.62 18.55C19.83 18.21 19.72 17.76 19.37 17.56L15.5 15.26V10.72C15.5 10.32 15.18 10 14.78 10Z" fill="#C3CAD9"/>
              </svg>
            </div>
              <button className="btnSaveTODo">Save</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Review