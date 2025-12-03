import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface SignUpFormInputs {
  email: string;
  password: string;
}

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newUser: SignUpFormInputs) => {
      const response = await fetch('https://user-registration-app-duan.onrender.com/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
      }
      
      return response.json();
    },
    onSuccess: () => {
      alert("Registration Successful! 🎉");
    },
    onError: (error: Error) => {
      alert(`Registration Failed: ${error.message}`);
    }
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    mutation.mutate(data);
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} maxWidth={400} margin="auto" mt={5}>
      <Typography variant="h4">Sign Up</Typography>
      
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
        {...register("password", { 
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters"
          }
        })} 
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      
      <Button 
        variant="contained" 
        onClick={handleSubmit(onSubmit)}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Registering...' : 'Register'} 
      </Button>

      <Typography variant="body2" textAlign="center">
        Already have an account?{' '}
        <Link 
          component="button" 
          variant="body2" 
          onClick={() => navigate('/login')}
        >
          Login
        </Link>
      </Typography>
    </Box>
  );
}

export default SignUp;