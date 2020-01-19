import React, {useState} from 'react';
import { Typography, Button, Icon } from 'antd';
import './index.css';

const CourseListItem = props => {
  const [isSelected, setIsSelected] = useState(props.course.isSelected);
  const [isHovering, setIsHovering] = useState(true);

  const hoverHandler = () => {
    setIsHovering(currentHovering => !currentHovering);
  }

  return (
    <div className="container">
      <img src={props.course.banner} alt="course-banner" className="course-banner"/>
      <Typography.Title level={3}>{props.course.title}</Typography.Title>
      <Typography.Text>{props.course.description}</Typography.Text>
      {
        isSelected
        ? <div>
            <Button
              onClick={(e) => {
                setIsSelected(false);
                props.onSelectHandler(e, false)
              }}
              onMouseEnter={hoverHandler}
              onMouseLeave={hoverHandler}
              type="primary"
              className="add-button selected"
            >
              {
                isHovering
                ? <Typography.Text className="selected-text">Remove Course <Icon type="close" /></Typography.Text>
                : <Typography.Text className="selected-text">Owned <Icon type="check" /></Typography.Text>
              }
            </Button>
            <Button
              type="primary"
              className="view-button"
              onClick={props.onViewCourse}
            >
              View Course
            </Button>
          </div>
        : <Button
            onClick={(e) => {
              setIsSelected(true);
              props.onSelectHandler(e, true)
            }}
            type="primary"
            className="add-button"
          >
            Add Course <Icon type="plus" />
          </Button>
      }
    </div>
  );
};

export default CourseListItem;
