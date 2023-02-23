import Input from "./Input";
import ButtonSubmit from "./ButtonSubmit";
import useTodoForm from "../hooks/useTodoForm";
import { formInitValues } from "../App";


const Form = () => {
    const { todoItem, setTodoItem, mutate } = useTodoForm()
    const { title, content } = todoItem

  return (
    <form
        className='tasks__form'
        onSubmit={(e) => {
            e.preventDefault()
            mutate({ title, content })
            setTodoItem(formInitValues)
        }}
    >
        <Input
            placeholder='Enter your task title ...'
            value={ title }
            required={ true }
            onChange={(e) => {
                setTodoItem({...todoItem, title: e.currentTarget.value})
            }}
        />
        <Input
            placeholder='Enter your task content ...'
            value={ content }
            required={ false }
            onChange={(e) => {
                setTodoItem({...todoItem, content: e.currentTarget.value})
            }}
        />
        <ButtonSubmit />
    </form>
  )
};

export default Form;
