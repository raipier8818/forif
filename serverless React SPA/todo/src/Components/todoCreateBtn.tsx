import React from "react";
import { TodoModel } from "../types/TodoModel";

interface TodoCreateBtnProps{
    countTodo: number,
    createTodo: (todo:TodoModel) => Promise<void>,
}

function getDate(){
    
    const today = new Date();
    
    const year = today.getFullYear().toString().slice(-2);
    const temp_month = today.getMonth() + 1;
    const month = temp_month >= 10 ? temp_month.toString() : "0" + temp_month.toString();
    const temp_day = today.getDate();
    const day = temp_day >= 10 ? temp_day.toString() : "0" + temp_day.toString();

    return year + month + day;
}    

function makeTodo(count:number, content:string){
    const newDate = getDate();
    const newTodo:TodoModel = {
        CreatedDate: newDate,
        id: count.toString(),
        Content: content
    };

    return newTodo;
}

class TodoCreateBtn extends React.Component<TodoCreateBtnProps>{
    constructor(props:TodoCreateBtnProps){
        super(props);
    }

    state = {
        clicked: false,
        content: ""
    }

    createOnOff = () => {
        if(this.state.clicked){
            this.setState({clicked: false});
        }else{
            this.setState({clicked: true});
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        
    }


    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(this.state.content);
        if(this.state.content === "") {
            this.setState({clicked:false});
            return;
        }

        this.props.createTodo(makeTodo(this.props.countTodo, this.state.content));

        this.setState({
            clicked: false,
            content: ""
        });
    }

    render(){
        if(this.state.clicked){
            return(
                <div className="todoCreateBtn">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="content" id="todo" placeholder="To do" onChange={this.onChange}/>
                        <input type="submit" value="save"/>
                    </form>
                </div>
            );
        }else{
            return(
                <div className="todoCreateBtn">
                    <button onClick={() => {this.createOnOff();}}>Create new Todo</button>
                </div>
            );
        }
    }
}

export default TodoCreateBtn;