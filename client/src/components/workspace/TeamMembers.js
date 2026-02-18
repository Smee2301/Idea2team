import React from 'react';
import { teamMembers } from '../../data/dummyData';

const TeamMembers = () => {
    return (
        <div className="team-members">
            <h3>👥 Team Members</h3>
            <div className="team-list">
                {teamMembers.map(member => (
                    <div className="team-member" key={member.id}>
                        <div className="team-member-avatar">
                            <div className="avatar" style={{ background: member.color }}>
                                {member.initials}
                            </div>
                            <span className={`online-indicator ${member.online ? '' : 'offline'}`}></span>
                        </div>
                        <div className="team-member-info">
                            <p className="team-member-name">{member.name}</p>
                            <p className="team-member-role">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
