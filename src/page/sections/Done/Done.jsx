import ToDoSlice from "../../../components/TODOS/ToDoSlice"
import HeaderBox from "../../../components/headerBox/HeaderBox"
import avatar1 from '../../../assets/avatar-1.png'
const Done = () => {
    return (
        <div>
            <HeaderBox title={'Done'} number={'1'} />
            <div className="toDo">
            <div className="BoxContent">
                <ToDoSlice title={'Copper Canyon'} descreptionTop={'Space Tasks 2'} img={avatar1} />
            </div>
    </div>
        </div>
    )
}

export default Done