// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {title, id} = todoDetails

  const onDeleteee = () => {
    onDelete(id)
  }
  return (
    <div className="item-bg">
      <h1 className="head">Simple Todos</h1>
      <div className="div">
        <h1 className="name">{title}</h1>
        <button className="button" type="button" onClick={onDeleteee}>
          Delete
        </button>
      </div>
    </div>
  )
}
export default TodoItem
