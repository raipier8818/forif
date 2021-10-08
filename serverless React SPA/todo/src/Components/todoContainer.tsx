import React from "react";
import { TodoModel } from "../types/TodoModel";
import TodoDeleteBtn from "./todoDeleteBtn";

interface todoContainerProps {
  // key: number,
  id:string,
  data: TodoModel,
  deleteTodo: (id:string) => Promise<void>,
}

function TodoContainer(props:todoContainerProps){
  return(
    <div className="todoContainer" id={props.id}>
      <div className="todoDate">
        {props.data.CreatedDate}
      </div>
      <TodoDeleteBtn id={props.id} deleteTodo={props.deleteTodo}/>
      <div className="todoContent">
        {props.data.Content}
      </div>
    </div>
  );
}


export default TodoContainer;