import React from 'react';
import { Typography, Button, Icon } from 'antd';
import './index.css';

const CourseListItem = () => {
  return (
    <div className="container">
      <img src="https://via.placeholder.com/1000" alt="course-banner" className="course-banner"/>
      <Typography.Title level={3}>Course Title</Typography.Title>
      <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography.Text>
      <Button type="primary" className="add-button">Add Course <Icon type="plus" /></Button>
    </div>
  );
};

export default CourseListItem;
