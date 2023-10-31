import HeaderBox from "../../../components/headerBox/HeaderBox"

// bgi
import bgBox from '../../../assets/Image.png'


// avatars
import avatar1 from '../../../assets/avatar-1.png'
import avatar2 from '../../../assets/avatar-2.png'
import avatar3 from '../../../assets/avatar-3.png'

// style
import './todo.css'
import ToDoSlice from "../../../components/TODOS/ToDoSlice"

// icons controls
// import newList from '../../../assets/newlist.svg'

const Todo = () => {
  return (
    <div>
    <HeaderBox title={'To Do'} number={'5'} />
    <div className="toDo">
        <div className="contentBoxes">
          <div className="boxImage">
            <img src={bgBox} className="w-100" alt=""/>
            <div className="BoxContent">
              <p className="headcontent d-flex justify-content-between align-items-center">
                <p>Space Tasks 2</p>
                <img src={avatar1} className="" alt="" />
              </p>
              <h2 className="title">Make Money Online Through</h2>
              <div className="contrlosBoxes d-flex gap-2 align-items-center">
                <div className="boxConltrol d-flex gap-1 align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M7 12C7.55 12 8 11.55 8 11C8 10.45 7.55 10 7 10C6.45 10 6 10.45 6 11C6 11.55 6.45 12 7 12ZM8 15C8 15.55 7.55 16 7 16C6.45 16 6 15.55 6 15C6 14.45 6.45 14 7 14C7.55 14 8 14.45 8 15ZM8 19C8 19.55 7.55 20 7 20C6.45 20 6 19.55 6 19C6 18.45 6.45 18 7 18C7.55 18 8 18.45 8 19ZM24 15C24 15.55 23.55 16 23 16H11C10.45 16 10 15.55 10 15C10 14.45 10.45 14 11 14H23C23.55 14 24 14.45 24 15ZM23 20C23.55 20 24 19.55 24 19C24 18.45 23.55 18 23 18H11C10.45 18 10 18.45 10 19C10 19.55 10.45 20 11 20H23ZM11 12C10.45 12 10 11.55 10 11C10 10.45 10.45 10 11 10H23C23.55 10 24 10.45 24 11C24 11.55 23.55 12 23 12H11Z" fill="#C3CAD9"/>
                  </svg>
                  <p>4</p>
                </div>
                <div className="boxConltrol d-flex gap-1 align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M20.2539 19.5H9.67393C7.58393 19.5 5.72393 17.97 5.52393 15.89C5.29393 13.51 7.16393 11.5 9.50393 11.5H21.8639C23.1739 11.5 24.3639 12.44 24.4939 13.74C24.6439 15.24 23.4739 16.5 22.0039 16.5H11.5039C10.9539 16.5 10.5039 16.05 10.5039 15.5C10.5039 14.95 10.9539 14.5 11.5039 14.5H20.2539C20.6639 14.5 21.0039 14.16 21.0039 13.75C21.0039 13.34 20.6639 13 20.2539 13H11.6439C10.3339 13 9.14393 13.94 9.01393 15.24C8.86393 16.74 10.0339 18 11.5039 18H21.8339C23.9239 18 25.7839 16.47 25.9839 14.39C26.2139 12 24.3439 10 22.0039 10H9.73393C6.86393 10 4.29393 12.1 4.02393 14.96C3.72393 18.25 6.28393 21 9.50393 21H20.2539C20.6639 21 21.0039 20.66 21.0039 20.25C21.0039 19.84 20.6639 19.5 20.2539 19.5Z" fill="#C3CAD9"/>
                  </svg>
                  <p>2</p>
                </div>
                <div className="boxConltrol d-flex gap-1 align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M18.4064 18.0314L15.0364 16.0314V11.5014C15.0364 11.1014 14.7164 10.7814 14.3164 10.7814H14.2564C13.8564 10.7814 13.5364 11.1014 13.5364 11.5014V16.2214C13.5364 16.5714 13.7164 16.9014 14.0264 17.0814L17.6764 19.2714C18.0164 19.4714 18.4564 19.3714 18.6564 19.0314C18.8664 18.6814 18.7564 18.2314 18.4064 18.0314ZM23.7164 7.79139L20.6364 5.23139C20.2164 4.88139 19.5864 4.93139 19.2264 5.36139C18.8764 5.78139 18.9364 6.41139 19.3564 6.77139L22.4264 9.33139C22.8464 9.68139 23.4764 9.63139 23.8364 9.20139C24.1964 8.78139 24.1364 8.15139 23.7164 7.79139ZM6.63638 9.33139L9.70638 6.77139C10.1364 6.41139 10.1964 5.78139 9.83638 5.36139C9.48638 4.93139 8.85638 4.88139 8.43638 5.23139L5.35638 7.79139C4.93638 8.15139 4.87638 8.78139 5.23638 9.20139C5.58638 9.63139 6.21638 9.68139 6.63638 9.33139ZM14.5364 6.78139C9.56638 6.78139 5.53638 10.8114 5.53638 15.7814C5.53638 20.7514 9.56638 24.7814 14.5364 24.7814C19.5064 24.7814 23.5364 20.7514 23.5364 15.7814C23.5364 10.8114 19.5064 6.78139 14.5364 6.78139ZM14.5364 22.7814C10.6764 22.7814 7.53638 19.6414 7.53638 15.7814C7.53638 11.9214 10.6764 8.78139 14.5364 8.78139C18.3964 8.78139 21.5364 11.9214 21.5364 15.7814C21.5364 19.6414 18.3964 22.7814 14.5364 22.7814Z" fill="#C3CAD9"/>
                  </svg>
                  <p>6 Days Left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="toDo">
      <div className="BoxContent">
        <ToDoSlice title={'Make Money Online Through'} descreptionTop={'Space Tasks 2'} img={avatar2} img2={avatar3} />
      </div>
    </div>
    <div className="toDo">
      <div className="BoxContent">
        <ToDoSlice title={'Search Engine Optimization ...'} descreptionTop={'Space Tasks 2'} img={avatar1} img2={avatar3} />
      </div>
    </div>
    <div className="toDo">
      <div className="BoxContent">
        <ToDoSlice title={'Characteristics Of A Successful'} descreptionTop={'Space Tasks 2'} img={avatar3} img2={avatar3} />
      </div>
    </div>
    <div className="toDo">
      <div className="BoxContent">
        <ToDoSlice title={'Getting Free Publicity'} descreptionTop={'Space Tasks 2'} img={avatar1} img2={avatar3} />
      </div>
    </div>
    <div className="toDo">
      <div className="BoxContent">
        <ToDoSlice title={'Importance Of The Custom ...'} descreptionTop={'Space Tasks 2'} img={avatar2} img2={avatar3} />
      </div>
    </div>
    </div>
  )
}

export default Todo