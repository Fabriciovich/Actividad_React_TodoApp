import { Title } from "../../src/components/Title.jsx"
import { AddTodo } from "../../src/components/AddTodo.jsx"
import { TodoList } from "../../src/components/TodoList.jsx"
export const TodoApp = () => {


  return (
    <>
      <Title />
      <TodoList />
      <AddTodo />
    </>
  )
}