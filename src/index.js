import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import './index.css';
import * as serviceWorker from './serviceWorker';

import CourseCreator from './components/CourseCreator';
import CourseListItem from './components/CourseListItem';
import Header from './components/Header';
import Footer from './components/Footer';

const FEATURES = {
  STORE: 'STORE',
  MY_COURSES: 'MY COURSES',
  COURSE_CREATOR: 'COURSE CREATOR',
};

const App = () => {
  const [feature, setFeature] = useState(FEATURES.STORE);
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);

  const onNavChangeHandler = (nav) => {
    setFeature(nav.key);
  };

  const courseOnSelectHandler = (e, isSelected, course) => {
    if (isSelected) {
      setMyCourses(currentCourses => currentCourses.concat([course]))
    } else {
      setMyCourses(currentCourses => {
        return currentCourses.filter(courseI => courseI.id !== course.id)
      })
    }
  };

  const newCourseHandler = (course) => {
    setCourses(currentCourses => currentCourses.concat([course]))
  };

  let content;
  switch (feature) {
    case FEATURES.COURSE_CREATOR:
      content = <CourseCreator newCourseHandler={newCourseHandler} courses={courses} />;
      break;
    case FEATURES.MY_COURSES:
      content = myCourses.map((course) => {
        return (
          <CourseListItem
            key={course.id}
            course={course}
            onSelectHandler={(e, isSelected) => {
              courseOnSelectHandler(e, isSelected, course)
            }}
          />
        );
      });
      break;
    default:
      content = courses.map((course) => {
        return (
          <CourseListItem
            key={course.id}
            course={course}
            onSelectHandler={(e, isSelected) => {
              courseOnSelectHandler(e, isSelected, course)
            }}
          />
        );
      });
      break;
  }

  return (
    <Layout className="layout">
      <Header onNavChange={onNavChangeHandler} />
      <Layout.Content className="content-container">
        {content}
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
