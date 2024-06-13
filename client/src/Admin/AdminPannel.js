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
import AdminDashboard from "./components/Dashboard/Dashboard";
import CreateProductForm from "./components/createProduct/CreateProductForm";
import OrdersTable from "./components/Orders/OrdersTable";
import ProductsTable from "./components/Products/ProductsTable";
import Customers from "./components/Customer/Customer";
import UpdateProducts from "./components/updateProduct/UpdateProducts";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddIcon from '@mui/icons-material/Add';

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PersonOutlineIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  { name: "Add Products", path: "/admin/product/create", icon: <AddIcon /> },
];

function AdminPanel() {
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
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        // Remove borders
        border: "none",
        // Tailwind CSS classes for interactive design
        transition: "all 0.3s",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          transform: "scale(1.02)",
        },
      }}
      className="bg-white"
    >
      {isLargeScreen && <Toolbar />}

      <List>
        {menu.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
            className="cursor-pointer"
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <List>
        <ListItem disablePadding>
          <ListItemButton>
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
          className="bg-white"
        >
          {drawer}
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/product/create" element={<CreateProductForm />} />
            <Route path="products" element={<ProductsTable />} />
            <Route path="/orders" element={<OrdersTable />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default AdminPanel;
