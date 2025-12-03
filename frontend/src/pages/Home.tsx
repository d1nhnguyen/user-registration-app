import { Box, Button, Typography, Stack, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn, userEmail, logout } = useAuth();

  if (isLoggedIn) {
    return (
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
        gap={3}
      >
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="success.main">
            ✅ Login Successful!
          </Typography>
          
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Welcome, {userEmail}
          </Typography>

          <Button 
            variant="outlined" 
            color="error"
            onClick={logout}
          >
            Logout
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh"
      gap={3}
    >
      <Typography variant="h2" component="h1">
        Welcome to User Registration App
      </Typography>
      
      <Typography variant="h6" color="text.secondary">
        Please login or sign up to continue
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
        
        <Button 
          variant="outlined" 
          size="large"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}