import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import './index.css';
import * as serviceWorker from './serviceWorker';

import CourseListItem from './components/CourseListItem'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Layout.Content className="content-container">
        <CourseListItem />
        <CourseListItem />
        <CourseListItem />
        <CourseListItem />
        <CourseListItem />
        <CourseListItem />
        <CourseListItem />
        <CourseListItem />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
