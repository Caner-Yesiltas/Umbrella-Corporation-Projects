import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react';

interface IAddTodo {
  addTodo: (task: string) => Promise<void>;
}

const AddTodo = ({ addTodo }: IAddTodo) => {
  const [task, setTask] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setTask(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: { xs: 'block', sm: 'flex' },
        justifyContent: { xs: 'flex-start', sm: 'center' },
        m: { xs: 1, sm: 'auto' },
        height: { xs: '5.5rem', sm: '5rem' },
      }}
    >
      <TextField
        variant='outlined'
        color='warning'
        size='small' // small, medium veya
        sx={{
          minWidth: { xs: '100', sm: '30%' },
        }}
        // veya
        inputProps={{
          style: { height: '1rem' },
        }}
        onChange={handleChange}
        value={task}
      />
      <Button
        variant='contained'
        type='submit'
        endIcon={<SaveIcon />}
        color='warning'
        sx={{
          minWidth: { xs: '100', sm: '10%' },
          height: { xs: '35px', m: 1 },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default AddTodo;
