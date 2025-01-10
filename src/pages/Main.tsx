import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import axios from 'axios';
import TodoList from '../components/TodoList';
import { notify, SweetIcon } from '../helper/sweetalert';

const url = 'https://634ac3fc5df952851418480f.mockapi.io/api/todos';

const Main = () => {
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

  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });
      notify("New task added to Umbrella Database", SweetIcon.SUCCESS);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify("Nemesis eliminated task", SweetIcon.SUCCESS);  
      getTodos();
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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Main;
