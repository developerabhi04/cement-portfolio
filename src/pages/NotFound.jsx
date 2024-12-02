import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';

// Error icon shake animation
const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: 'url(https://example.com/your-image.jpg)', // Background image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for readability
                    zIndex: 1,
                }}
            />
            <ErrorOutlineIcon
                sx={{
                    fontSize: '120px',
                    color: '#e53935', // Bright red color
                    marginBottom: '20px',
                    animation: `${shake} 1s infinite`, // Shake animation
                }}
            />
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 600,
                    color: '#ffffff', // White text color for contrast
                    marginBottom: '10px',
                    animation: 'fadeIn 2s ease-out', // Fade in animation for heading
                    zIndex: 2,
                }}
            >
                404 - Page Not Found
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    color: '#e0e0e0', // Lighter gray text for description
                    marginBottom: '20px',
                    fontSize: '16px',
                    animation: 'fadeIn 2s ease-out 0.5s', // Fade in animation for description
                    zIndex: 2,
                }}
            >
                Oops! The page you are looking for doesn't exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                    textTransform: 'none',
                    padding: '10px 20px',
                    fontWeight: 600,
                    backgroundColor: '#ff7043', // Warm color for the button
                    '&:hover': {
                        backgroundColor: '#f4511e', // Darker hover effect
                    },
                    animation: 'fadeIn 2s ease-out 1s', // Fade in animation for the button
                    zIndex: 2,
                }}
                onClick={handleGoHome}
            >
                Go to Homepage
            </Button>
        </Box>
    );
};

export default NotFound;
