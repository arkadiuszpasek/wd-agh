import {
  Article,
  Dialpad,
  Home,
  Logout,
  Menu,
  Person,
  School,
  Today,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { L10n } from "../../models/intl/L10n/L10n";
import { useUser } from "../../models/user";

export const Bar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { setUser } = useUser();
  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 350 }} onClick={() => setIsDrawerOpen(false)}>
          <List>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/university">
              <ListItem button>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary={<L10n id="nav.university" />} />
              </ListItem>
            </Link>
            <Link to="/profile">
              <ListItem button>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary={<L10n id="nav.profile" />} />
              </ListItem>
            </Link>
            <Link to="/calendar">
              <ListItem button>
                <ListItemIcon>
                  <Today />
                </ListItemIcon>
                <ListItemText primary={<L10n id="nav.calendar" />} />
              </ListItem>
            </Link>
            <Link to="/news">
              <ListItem button>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary={<L10n id="nav.news" />} />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/contact">
              <ListItem button>
                <ListItemIcon>
                  <Dialpad />
                </ListItemIcon>
                <ListItemText primary={<L10n id="nav.contact" />} />
              </ListItem>
            </Link>
            <ListItem button onClick={() => setUser(undefined)}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary={<L10n id="nav.logout" />} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <Menu />
            </IconButton>
            <Link to="/">
              <Typography
                variant="h6"
                component="p"
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "flex-start",
                }}
              >
                <L10n id="virtual-university" />
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
