import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import axios from 'axios';
import TodoList from '../components/TodoList';

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  owner?: string;
}

const url = 'https://634ac3fc5df952851418480f.mockapi.io/api/todos';

const Main = () => {
  // const [todos, setTodos] = useState([] as ITodoType[])
  const [todos, setTodos] = useState<ITodoType[]>([]);
  console.log(todos);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //* 1. path
  // const addTodo = async(task:string)=> {
  //   try {
  //     await axios.post(url,{task,isDone:false})
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //* 2. path
  type AddFn = (task: string) => Promise<void>;

  const addTodo: AddFn = async (task: string) => {
    try {
      await axios.post(url, { task, isDone: false });
      getTodos()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </Container>
  );
};

export default Main;
