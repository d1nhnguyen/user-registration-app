import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface LoginFormInputs {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    login(data.email); // Save email to context
    navigate("/"); // Redirect to home
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} maxWidth={400} margin="auto" mt={5}>
      <Typography variant="h4">Login</Typography>
      
      <TextField 
        label="Email" 
        {...register("email", { 
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })} 
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

      <Typography variant="body2" textAlign="center">
        Don't have an account?{' '}
        <Link 
          component="button" 
          variant="body2" 
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
}

export default Login;