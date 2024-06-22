import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [toggle,setToggle] = useState(false);

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
      <nav className="transition-all w-full lg:hidden block bg-white/70 backdrop-blur-lg z-10 fixed" >
        <svg className="ml-8 mt-2 mb-2" onClick={() => setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
      
      <div className={`${toggle ? 'block':'hidden'} lg:block `}>
         {menu.map((item) => {
            return <Link to={`${item.path}`} className="flex  mb-1 pl-2 hover:underline">{item.name}</Link>
          })}
        </div>
      </nav>
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
          sx={{ flexGrow: 1, bgcolor: "rgba(135, 206, 250, 0.5)", p: 3, minHeight: '150vh' }}
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
