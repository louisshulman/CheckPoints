import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import './index.css';

const Header = () => {
  return (
    <Layout.Header className="header">
      {
        /*
         * Logo
         */
      }
      <img src="icon.png" className="icon" alt="logo" />

      {
        /*
         * Nav Buttons
         */
      }
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className="nav-buttons"
      >
        <Menu.Item key="1">Store</Menu.Item>
        <Menu.Item key="2">My Courses</Menu.Item>
        <Menu.Item key="3">Course Creator</Menu.Item>

        {
          /*
           * User Menu
           */
        }
        <Menu.SubMenu
          title={
            <span>
              User Name <Icon type="caret-down" />
            </span>
          }
          className="user-menu"
        >
          <Button type="link" className="logout-button">Logout</Button>
        </Menu.SubMenu>
        <img src="https://via.placeholder.com/64" className="user-icon" alt="logo" />
      </Menu>
    </Layout.Header>
  );
};

export default Header;