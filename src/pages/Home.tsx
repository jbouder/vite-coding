import { Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";

// Define the scrolling animation
const marqueeAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export default function Home() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Home Page
      </Typography>

      {/* Scrolling Marquee */}
      <Box
        sx={{
          overflow: "hidden",
          bgcolor: "warning.light",
          color: "warning.contrastText",
          py: 1,
          mb: 3,
          borderRadius: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: `${marqueeAnimation} 15s linear infinite`,
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          🚧 UNDER CONSTRUCTION 🚧 UNDER CONSTRUCTION 🚧 UNDER CONSTRUCTION 🚧
          UNDER CONSTRUCTION 🚧 UNDER CONSTRUCTION 🚧
        </Box>
      </Box>

      <Typography variant="body1" paragraph>
        Welcome to Vibe Coding! This is the home page of our application.
      </Typography>
    </>
  );
}
