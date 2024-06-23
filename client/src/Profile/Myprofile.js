import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Route, Routes } from "react-router-dom";
import Order from "./components/Orders/Order";
import Profile from "./components/Profilemain/Profile";
// import AdminDashboard from "./components/Dashboard/Dashboard";
// import CreateProductForm from "./components/createProduct/CreateProductForm";
// import OrdersTable from "./components/Orders/OrdersTable";
// import ProductsTable from "./components/Products/ProductsTable";
// import Customers from "./components/Customer/Customer";
// import UpdateProducts from "./components/updateProduct/UpdateProducts";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddIcon from '@mui/icons-material/Add';
import Navbar from "../customer/Components/Navbar/Navbar";

const menu = [

  { name: "Myprofile", path: "/myprofile/profile" },
  { name: "Orders", path: "/myprofile/order" },

];

function Myprofile() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        boxShadow: "rgba(135, 206, 250, 0.5) 0px 3px 8px",
        // Remove borders
        border: "none",
        // Tailwind CSS classes for interactive design
        transition: "all 0.3s",
        "&:hover": {
          boxShadow: "rgba(135, 206, 250, 0.5) 0px 5px 15px",
          transform: "scale(1.02)",
        },
      }}
      className="bg-white"
    >
      {isLargeScreen && <Toolbar />}

      <List>

        {menu.map((item) => (
          <ListItem
            sx={{
              color: "Black",

            }}
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
            className="cursor-pointer"
          >
            <ListItemButton sx={{

              "&:hover": {
                bgcolor: "rgba(135, 206, 250, 0.5)",
                transform: "scale(1.02)",
              },
            }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{

            "&:hover": {
              bgcolor: "rgba(135, 206, 250, 0.5)",
              transform: "scale(1.02)",
            },
          }}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
              <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: '15%',
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: '15%',
              boxSizing: 'border-box',
              // Ensure Tailwind CSS classes are applied correctly
              '&:hover': {
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                transform: "scale(1.02)",

              },
            },
          }}
          className="bg-white mt-12 "
        >
          {drawer}
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "rgba(135, 206, 250, 0.5)", p: 3, minHeight: '150vh' }}
        >
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/orders" element={<Order/>} />
          </Routes>
        </Box>
      </Box>
      </div>

  );
}

export default Myprofile;
