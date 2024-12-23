import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react';

const AddTodo = () => {
  const [task, setTask] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setTask(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: { xs: 'block', sm: 'flex' },
        justifyContent: { xs: 'flex-start', sm: 'center' },
        m: { xs: 1, sm: 'auto' },
        height: { xs: '7.5rem' },
        sm: '5rem',
      }}
    >
      <TextField
        variant='outlined'
        color='success'
        sx={{
          minWidth: { xs: '100', sm: '50%' },
          height: { xs: '50px', m: 1 },
        }}
        onChange={handleChange}
      />
      <Button
        variant='contained'
        endIcon={<SaveIcon />}
        color='primary'
        sx={{
          minWidth: { xs: '100', sm: '15%' },
          height: { xs: '55px', m: 1 },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default AddTodo;
