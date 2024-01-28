
const TodoActions = ({len,filteredTodoLen}) => {
  return (
    <div className="meta">
        <div className="progress-wrapper">
            <progress value={filteredTodoLen} max={len}>
                {filteredTodoLen} / {len} completed
            </progress>
            <span>
            {filteredTodoLen} / {len} completed
            </span>
        </div>
        <div className="actions">
            <button className="actions__clear-btn">clear</button>
            <button className="actions__check-btn">check all</button>
        </div>
    </div>
  )
}

export default TodoActions
