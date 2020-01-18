import React, {useState} from 'react';
import { Button, PageHeader, Icon, Input, Collapse } from 'antd';
import './index.css';

import Course from '../../models/course';
import Subskill from '../../models/subskill';
import Checkpoint from '../../models/checkpoint';
import Task from '../../models/task';

const {Panel} = Collapse;

const CourseCreator = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subskills, setSubskills] = useState([]);

  const skillTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const skillDescriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const newSubskillHandler = () => {
    setSubskills(currentSubskills => subskills.concat([new Subskill(String(subskills.length), 'Subskill', [])]))
  };

  const subskillTitleChangeHandler = (subskillId, e) => {
    setSubskills(currentSubskills => {
      return currentSubskills.map(currentSubskill => {
        if (currentSubskill.id === subskillId) {
          currentSubskill.title = e.target.value;
        }

        return currentSubskill;
      });
    });

    e.persist();
  };

  const newCheckpointHandler = subskillId => {
    setSubskills(currentSubskills => {
      return currentSubskills.map(currentSubskill => {
        if (currentSubskill.id === subskillId) {
          currentSubskill.checkpoints.push(new Checkpoint(
            currentSubskill.checkpoints.length,
            'Checkpoint',
            []
          ));
        }

        return currentSubskill;
      });
    });
  };

  const checkpointTitleHandler = (subskillId, checkpointId, e) => {
    setSubskills(currentSubskills => {
      return currentSubskills.map(currentSubskill => {
        if (currentSubskill.id === subskillId) {
          currentSubskill.checkpoints.forEach((checkpoint, index) => {
            if (checkpoint.id === checkpointId) {
              currentSubskill.checkpoints[index].title = e.target.value;
            }
          });
        }

        return currentSubskill;
      });
    });

    e.persist();
  };

  const newTaskHandler = (subskillId, checkpointId) => {
    setSubskills(currentSubskills => {
      return currentSubskills.map(currentSubskill => {
        if (currentSubskill.id === subskillId) {
          currentSubskill.checkpoints = currentSubskill.checkpoints.map((checkpoint, index) => {
            if (checkpoint.id === checkpointId) {
              checkpoint.tasks.push(new Task(checkpoint.tasks.length, 'Task'));
            }

            return checkpoint
          });
        }

        return currentSubskill;
      });
    });
  };

  const taskTitleChangeHandler = (subskillId, checkpointId, taskId, e) => {
    setSubskills(currentSubskills => {
      return currentSubskills.map(currentSubskill => {
        if (currentSubskill.id === subskillId) {
          currentSubskill.checkpoints = currentSubskill.checkpoints.map((checkpoint, index) => {
            if (checkpoint.id === checkpointId) {
              checkpoint.tasks = checkpoint.tasks.map(task => {
                if (task.id === taskId) {
                  task.title = e.target.value;
                }

                return task;
              });
            }

            return checkpoint
          });
        }

        return currentSubskill;
      });
    });

    e.persist();
  };

  const saveCourseHandler = () => {
    props.newCourseHandler(new Course(props.courses.length, title, description, 'https://via.placeholder.com/1000', false, subskills));
    setTitle('');
    setDescription('');
    setSubskills([]);
  };

  return (
    <div className="course-creator">
      <PageHeader
        backIcon={false}
        title={
          <Input placeholder="Skill..." value={title} onChange={skillTitleChangeHandler} />
        }
        extra={[
          <Button shape="circle" icon="plus" key="NEW SUBSKILL" onClick={newSubskillHandler} />,
          <Button type="primary" key="SAVE" onClick={saveCourseHandler}>Save</Button>
        ]}
        className="course-creator-header"
      />

      <Input.TextArea rows={4} className="description-input" placeholder="Description..." value={description} onChange={skillDescriptionChangeHandler} />

      <Collapse accordion>
        {
          subskills.map(subskill => {
            return (
              <Panel header={subskill.title} key={subskill.id}>
                <Input className="subskill-input" placeholder="Subskill..." onChange={subskillTitleChangeHandler.bind(null, subskill.id)} />
                <Button className="new-checkpoint-button" type="primary" onClick={newCheckpointHandler.bind(null, subskill.id)}>New Checkpoint <Icon type="plus" /></Button>

                <Collapse className="subskill" accordion>
                  {
                    subskill.checkpoints.map(checkpoint => {
                      return (
                        <Panel header={checkpoint.title} key={checkpoint.id}>
                          <Input className="checkpoint-input" placeholder="Checkpoint..." onChange={checkpointTitleHandler.bind(null, subskill.id, checkpoint.id)} />
                          <Button className="new-task-button" type="primary" onClick={newTaskHandler.bind(null, subskill.id, checkpoint.id)}>New Task <Icon type="plus" /></Button>
                          {
                            checkpoint.tasks.map(task => {
                              return <Input className="task-input" placeholder="Task..." key={task.id} onChange={taskTitleChangeHandler.bind(null, subskill.id, checkpoint.id, task.id)} />;
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

export default CourseCreator;
