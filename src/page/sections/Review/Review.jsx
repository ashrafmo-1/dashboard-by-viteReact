import ToDoSlice from "../../../components/TODOS/ToDoSlice"
import HeaderBox from "../../../components/headerBox/HeaderBox"
import avatar2 from '../../../assets/avatar-2.png'
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
    </div>
  )
}

export default Review