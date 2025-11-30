import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, type SubmitHandler } from 'react-hook-form';4
import { useMutation } from '@tanstack/react-query';

interface SignUpFormInputs {
  email: string;
  password: string;
}

function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();

  const mutation = useMutation({
    mutationFn: async (newUser: SignUpFormInputs) => {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      return response.json();
    },
    onSuccess: () => {
      alert("Registration Successful! 🎉");
    },
    onError: () => {
      alert("Registration Failed 😢");
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
        disabled={mutation.isPending} // <--- preventing double clicks!
      >
        {mutation.isPending ? 'Registering...' : 'Register'} 
      </Button>
      
    </Box>
  );
  
}

export default SignUp;