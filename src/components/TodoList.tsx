import { Grid, Typography } from '@mui/material';
import TodoItem from './TodoItem'; 
import '../styles/App.css';

interface ITodolist {
  todos: ITodoType[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoList: React.FC<ITodolist> = ({ todos, toggleTodo, deleteTodo }) => {
  const inProgressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        mt: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position='relative'
        className='myscrooll scrooll-progress'
        sx={{
          minHeight: '350px',
          maxHeight: '350px',
          overflow: 'auto',
          border: '1px solid purple',
          borderRadius: '0.5rem',
          color: 'green',
          fontWeight: 'bold',
        }}
      >
        <Typography
          className='title'
          color='secondary'
          align='center'
          variant='h4'
        >
          Testing Phase
        </Typography>
        {inProgressTodos.length ? (
          inProgressTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color='error' my={3}>
            No Testing Phase!
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position='relative'
        className='myscrooll scrooll-progress'
        sx={{
          minHeight: '350px',
          maxHeight: '350px',
          overflow: 'auto',
          border: '1px solid purple',
          borderRadius: '0.5rem',
          color: 'purple',
          fontWeight: 'bold',
        }}
      >
        <Typography
          className='title'
          sx={{ color: 'green' }}
          align='center'
          variant='h4'
        >
          Project Success
        </Typography>

        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color='error' mt={3}>
            Project Failed!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
