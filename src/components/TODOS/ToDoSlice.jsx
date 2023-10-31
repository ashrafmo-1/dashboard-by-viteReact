import './todoSlice.css'
const ToDoSlice = (props) => {
  return (
    <div className="ToDoSlice">
        <div className="headinfo d-flex justify-content-between align-items-center mb-1">
            <p>{props.descreptionTop}</p>
            <div className="images">
                <img className="img1" src={props.img} />
            </div>
        </div>
        <h2 className="title"> {props.title} </h2>
    </div>
  )
}

export default ToDoSlice