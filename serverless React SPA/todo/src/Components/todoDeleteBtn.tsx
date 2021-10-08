import React from "react";
import { TodoModel } from "../types/TodoModel";

interface TodoDeleteBtnProps{
    id:string,
    deleteTodo: (id:string) => Promise<void>,
}


class TodoDeleteBtn extends React.Component<TodoDeleteBtnProps>{
    constructor(props:TodoDeleteBtnProps){
        super(props);
    }

    deleteThis = () => {
        this.props.deleteTodo(this.props.id);
    }

    render(){
        return(
            <div className="todoDeleteBtn">
                <button onClick={() => {this.deleteThis()}}>
                    Delete
                </button>
            </div>
        );
    }
}

export default TodoDeleteBtn;