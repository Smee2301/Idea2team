import React from 'react';
import { tasks } from '../../data/dummyData';
import Button from '../common/Button';

const TaskBoard = () => {
    const columns = [
        { key: 'todo', title: 'To Do', headerClass: 'todo', items: tasks.todo },
        { key: 'inProgress', title: 'In Progress', headerClass: 'in-progress', items: tasks.inProgress },
        { key: 'done', title: 'Done', headerClass: 'done', items: tasks.done },
    ];

    return (
        <div className="task-board">
            <div className="task-board-header">
                <h3>📋 Task Board</h3>
                <Button variant="primary" size="sm">+ Add Task</Button>
            </div>
            <div className="task-columns">
                {columns.map(col => (
                    <div className="task-column" key={col.key}>
                        <div className={`task-column-header ${col.headerClass}`}>
                            <span className="task-column-title">{col.title}</span>
                            <span className="task-column-count">{col.items.length}</span>
                        </div>
                        <div className="task-list">
                            {col.items.map(task => (
                                <div className="task-card" key={task.id}>
                                    <div className="task-card-title">
                                        <span className={`task-card-priority ${task.priority}`}></span>
                                        {task.title}
                                    </div>
                                    <p className="task-card-description">{task.description}</p>
                                    <div className="task-card-footer">
                                        <span className="task-card-date">📅 {task.dueDate}</span>
                                        <div className="task-card-assignee">{task.assignee}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
