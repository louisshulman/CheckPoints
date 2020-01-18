import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import './index.css';

const Header = props => {
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
        className="nav-buttons"
        defaultSelectedKeys={['STORE']}
        onClick={props.onNavChange}
      >
        <Menu.Item key="STORE">Store</Menu.Item>
        <Menu.Item key="MY COURSES">My Courses</Menu.Item>
        <Menu.Item key="COURSE CREATOR">Course Creator</Menu.Item>

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