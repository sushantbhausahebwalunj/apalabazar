import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
function Side() {
  return (
    <div >
<Sidebar className=' h-[85vh]'>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: 'rgb(201 201 201 / 70%)',
          color: '#b6c8d9',
        },
      },
    }}
  >

    <SubMenu label="Account Details">
      <MenuItem component={<Link to="/profile/details" />}>Profile</MenuItem>
      <MenuItem component={<Link to="/profile/address" />}>Address</MenuItem>
      <MenuItem component={<Link to="/profile/card" />}>Saved Card</MenuItem>
    </SubMenu>
    <MenuItem component={<Link to="/profile/orders" />}>Orders</MenuItem>
   
  </Menu>
</Sidebar>
    </div>
  )
}

export default Side
