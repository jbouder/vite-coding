import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  useMediaQuery,
  PaletteMode,
} from "@mui/material";
import {
  Routes,
  Route,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useMemo, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Sidebar width
const drawerWidth = 240;
const drawerCollapsedWidth = 65;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDrawerCollapsed, setIsDrawerCollapsed] = useState(true);
  const location = useLocation();

  // Add mode state for theme toggling
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerCollapse = () => {
    setIsDrawerCollapsed(!isDrawerCollapsed);
  };

  // Toggle between light and dark modes
  const handleThemeToggle = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Create theme with mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#556cd6",
          },
          secondary: {
            main: "#19857b",
          },
          background: {
            default: mode === "light" ? "#f5f5f5" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1e1e1e",
          },
        },
      }),
    [mode]
  );

  const drawer = (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        {!isDrawerCollapsed && (
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
        )}
        <IconButton onClick={handleDrawerCollapse}>
          {isDrawerCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Tooltip title={isDrawerCollapsed ? "Home" : ""} placement="right">
            <ListItemButton
              component={RouterLink}
              to="/"
              selected={location.pathname === "/"}
              sx={{
                minHeight: 48,
                justifyContent: isDrawerCollapsed ? "center" : "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isDrawerCollapsed ? "auto" : 3,
                  justifyContent: "center",
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              {!isDrawerCollapsed && <ListItemText primary="Home" />}
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title={isDrawerCollapsed ? "About" : ""} placement="right">
            <ListItemButton
              component={RouterLink}
              to="/about"
              selected={location.pathname === "/about"}
              sx={{
                minHeight: 48,
                justifyContent: isDrawerCollapsed ? "center" : "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isDrawerCollapsed ? "auto" : 3,
                  justifyContent: "center",
                }}
              >
                <InfoIcon />
              </ListItemIcon>
              {!isDrawerCollapsed && <ListItemText primary="About" />}
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Tooltip
            title={isDrawerCollapsed ? "Toggle Dark Mode" : ""}
            placement="right"
          >
            <ListItemButton
              onClick={handleThemeToggle}
              sx={{
                minHeight: 48,
                justifyContent: isDrawerCollapsed ? "center" : "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isDrawerCollapsed ? "auto" : 3,
                  justifyContent: "center",
                }}
              >
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </ListItemIcon>
              {!isDrawerCollapsed && <ListItemText primary="Dark Mode" />}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </>
  );

  const currentDrawerWidth = isDrawerCollapsed
    ? drawerCollapsedWidth
    : drawerWidth;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* App Bar */}
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${currentDrawerWidth}px)` },
            ml: { sm: `${currentDrawerWidth}px` },
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vibe Coding
            </Typography>

            {/* App Bar Theme Toggle Button */}
            <IconButton
              sx={{ ml: 1 }}
              onClick={handleThemeToggle}
              color="inherit"
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Sidebar / Navigation Drawer */}
        <Box
          component="nav"
          sx={{
            width: { sm: currentDrawerWidth },
            flexShrink: { sm: 0 },
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }}
        >
          {/* Mobile drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                transition: theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              },
            }}
          >
            {drawer}
          </Drawer>

          {/* Desktop drawer */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: currentDrawerWidth,
                overflowX: "hidden",
                transition: theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
                borderRight: `1px solid ${theme.palette.divider}`,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            width: { sm: `calc(100% - ${currentDrawerWidth}px)` },
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginTop: "64px", // Toolbar height
            alignSelf: "flex-start",
            height: "calc(100vh - 64px)", // Subtract the AppBar height
            overflowY: "auto", // Allow content to scroll if needed
            display: "block", // Using block instead of flex to avoid flex behaviors
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 1,
              p: 3, // Add some padding to the content
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
