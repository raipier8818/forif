import { Firestore } from '@firebase/firestore';
import { User } from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import firebase from '../firebase';
import { TodoModel } from '../types/TodoModel';
import TodoContainer from './todoContainer';
import TodoCreateBtn from './todoCreateBtn';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import "../styles/style.css";

let countTodo = 0;

function TodoComponent() {
  const [state, setState] = useState<{data: TodoModel, id:string}[]>([]);
  const [loginState, setLogin] = useState<{
    token: string | null,
    user: User | null,
    isLoggedIn : boolean,
  }>({
    token: JSON.parse(localStorage.getItem('token') ?? '{}') ?? null,
    user: JSON.parse(localStorage.getItem('user') ?? '{}') ?? null,
    isLoggedIn : false,
  });

  const setAuth = ({ token, user }: {token: string | null, user: User | null}) => {
    setLogin({
      token,
      user,
      isLoggedIn: user === null ? false : true,
    });


    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
  };

  const loadData = async (db: Firestore) => {
    const collection = firebase.collection(db, 'todo_collection');
    const snapshot = await firebase.getDocs(collection);
    const docs = snapshot.docs.map(
      doc => ({
        data: doc.data() as TodoModel,
        id: doc.id,
      })
    );

    setState(docs);
  };

  const createTodo = async (todo: TodoModel) => {
    const {id, CreatedDate, Content} = todo;
    const newTodo = {
      CreatedDate,
      Content,
      id,
    };

    const collection = firebase.collection(firebase.db, 'todo_collection');
    const ref = await firebase.addDoc(collection, newTodo);
    setState([
      ...state,
      {
        data: newTodo,
        id: ref.id,
      }
    ]);

    countTodo += 1;
  };

  const deleteTodo = async (id: string) => {
    setState(state.filter( todo => todo.id !== id));

    const collection = firebase.collection(firebase.db, 'todo_collection');
    await firebase.deleteDoc(firebase.doc(collection, id));

    countTodo -= 1;
  };

  useEffect(() => {
    loadData(firebase.db);
  }, []);


  return (
    <div className="todoComponent">
      {
        loginState.isLoggedIn ?
        <div>
          <LogoutButton onLogout={
            () => setAuth({
              token: null,
              user: null,
            })
          }/>
        </div> : 
        <div>
          <LoginButton onLogin = {setAuth} />
        </div>
      }

      {
        state.map((doc, index) => {
          return (
            <TodoContainer
              key = {index}
              id = {doc.id}
              data = {doc.data}
              deleteTodo = {deleteTodo}
            />
          );
        })
      }
      <TodoCreateBtn countTodo={countTodo} createTodo={createTodo}></TodoCreateBtn>
    </div>
  );
}

export default TodoComponent;