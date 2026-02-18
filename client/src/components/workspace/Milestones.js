import React from 'react';
import { milestones } from '../../data/dummyData';

const Milestones = () => {
    return (
        <div className="milestones-section">
            <h3>🎯 Milestones</h3>
            <div className="milestones-list">
                {milestones.map((milestone, index) => (
                    <div className="milestone-item" key={milestone.id}>
                        <div className="milestone-indicator">
                            <div className={`milestone-dot ${milestone.status}`}>
                                {milestone.status === 'completed' ? '✓' : milestone.status === 'current' ? '●' : '○'}
                            </div>
                            {index < milestones.length - 1 && (
                                <div className={`milestone-line ${milestone.status}`}></div>
                            )}
                        </div>
                        <div className="milestone-content">
                            <h4 className="milestone-title">{milestone.title}</h4>
                            <p className="milestone-date">{milestone.date}</p>
                            <p className="milestone-description">{milestone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Milestones;
