import { Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Paper elevation={3} sx={{ py: 5, px: 3, maxWidth: 500, mx: "auto" }}>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            size="large"
          >
            Go Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
