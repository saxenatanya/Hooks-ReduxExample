import React,{ useState } from "react";
import Todo from '../models/todo';

type TodosContextObj ={
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id:string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo:  () => {},
    removeTodo : (id:string) => {}
});


const TodosContextProvider: React.FC = (props) =>{
    const [todos, setTodos] = useState<Todo[]>([]);
  const addtodoHandler =(todoText:string) =>{
    const newTodo = new Todo(todoText);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    });
  };

  const onRemoveTodoHanlder = (todoId:string) =>{
setTodos((prevTods) =>{
  return prevTods.filter(todo => todo.id !== todoId);
})
  };

  const contextValue: TodosContextObj ={
      items:todos,
      addTodo: addtodoHandler,
      removeTodo: onRemoveTodoHanlder,
  }
   
   return <TodosContext.Provider value = {contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;