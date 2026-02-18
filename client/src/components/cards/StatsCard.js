import React from 'react';

const StatsCard = ({ icon, label, value, trend, trendDir = 'up', colorClass = 'primary' }) => {
    return (
        <div className="stats-card">
            <div className={`stats-card-icon ${colorClass}`}>
                {icon}
            </div>
            <div className="stats-card-content">
                <p className="stats-card-label">{label}</p>
                <h3 className="stats-card-value">{value}</h3>
                <span className={`stats-card-trend ${trendDir}`}>
                    {trendDir === 'up' ? '↑' : '↓'} {trend}
                </span>
            </div>
        </div>
    );
};

export default StatsCard;
