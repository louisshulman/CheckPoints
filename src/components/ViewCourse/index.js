import React from 'react';
import { PageHeader, Collapse, Checkbox } from 'antd';
import './index.css';

const {Panel} = Collapse;


const ViewCourse = props => {
  return (
    <div className="view-course">
      <PageHeader
        onBack={props.onBack}
        title={props.course.title}
        className="course-viewer-header"
      />

      <Collapse accordion>
        {
          props.course.subskills.map(subskill => {
            return (
              <Panel header={subskill.title} key={subskill.id}>
                <Collapse className="subskill" accordion>
                  {
                    subskill.checkpoints.map(checkpoint => {
                      return (
                        <Panel header={checkpoint.title} key={checkpoint.id}>
                          {
                            checkpoint.tasks.map(task => {
                              return (
                                <Checkbox key={task.id}>{task.title}</Checkbox>
                              );
                            })
                          }
                        </Panel>
                      );
                    })
                  }
                </Collapse>
              </Panel>
            );
          })
        }
      </Collapse>
    </div>
  );
};

export default ViewCourse;
