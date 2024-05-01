import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  AppBarProps,
  Toolbar,
  List,
  Divider,
  IconButton,
  Badge,
  Paper,
  Typography,
  Container,
  Grid,
} from "@mui/material";

import { Menu, ChevronLeft, Logout, Notifications } from "@mui/icons-material";

import { MenuItems } from "./MenuItems";
import { useState } from "react";

const drawerWidth: number = 240;

interface AppNavBarProps extends AppBarProps {
  open?: boolean;
}

const AppNavBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppNavBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerMenu = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const myTheme = createTheme();

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <AppNavBar position="absolute" open={open}>
          <Toolbar sx={{ pr: "24px" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36x",
                ...(open && {
                  display: "none",
                }),
              }}
            >
              <Menu></Menu>
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
              }}
            >
              Code Verification Katas
            </Typography>

            <IconButton color="inherit">
              <Badge badgeContent={10} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton color="inherit">
              <Logout />
            </IconButton>
          </Toolbar>
        </AppNavBar>

        <DrawerMenu variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton color="inherit" onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{MenuItems}</List>
        </DrawerMenu>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth="lg"
            sx={{
              mt: 4,
              mb: 4,
            }}
          >
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              ></Paper>
            </Grid>


          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
