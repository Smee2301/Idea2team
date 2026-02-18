import React from 'react';
import { messages } from '../../data/dummyData';

const ChatPanel = () => {
    return (
        <div className="chat-panel">
            <div className="chat-header">
                <h3>💬 Team Chat</h3>
                <span className="chat-online-count">
                    <span className="dot"></span> 3 online
                </span>
            </div>
            <div className="chat-messages">
                {messages.map(msg => (
                    <div className={`chat-message ${msg.own ? 'own' : ''}`} key={msg.id}>
                        <div className="chat-message-avatar" style={{ background: msg.color }}>
                            {msg.initials}
                        </div>
                        <div className="chat-message-body">
                            <p className="chat-message-name">{msg.sender}</p>
                            <div className="chat-bubble">{msg.text}</div>
                            <span className="chat-message-time">{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
                <button className="chat-send-btn">➤</button>
            </div>
        </div>
    );
};

export default ChatPanel;
