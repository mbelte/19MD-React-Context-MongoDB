import { TodoFullType } from "../assets/types";
import { formatDate } from "../assets/helpers";
import useTodoMutation from "../hooks/useTodoMutation";


const TodoListItem = ({ id, title, content, isDone, date }: TodoFullType) => {
  const { mutateStatus, mutateDelete } = useTodoMutation()

  const doneClass = isDone ? 'tasks__list-item--done' : ''

  return (
    <li className={`tasks__list-item ${ doneClass }`}>
      <div className="tasks__item">
        <h4 className="tasks__title">{ title }</h4>
        <span className="tasks__date">{ formatDate(date) }</span>
        <p className="tasks__content">{ content }</p>
      </div>
      <div className="tasks__controls">
        <input 
          type="checkbox" 
          className="tasks__chbox"
          id={ id }
          checked={ isDone } 
          onChange={() => {
            mutateStatus({
              id, isDone: !isDone
            })
          }}
        />
        <button
          className="tasks__delete-btn"
          onClick={() => {
            mutateDelete({ id })
          }}
        >x</button>
      </div>
    </li>
  );
};

export default TodoListItem;
