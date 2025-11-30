import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = () => {
    alert("Login successful!");
    navigate("/");
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} maxWidth={400} margin="auto" mt={5}>
      <Typography variant="h4">Login</Typography>
      
      <TextField 
        label="Email" 
        {...register("email", { required: "Email is required" })} 
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField 
        label="Password" 
        type='password'
        {...register("password", { required: "Password is required"})} 
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button 
        variant="contained" 
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
      
    </Box>
  );
  
}

export default Login;