import React from 'react';
import { messages } from '../../data/dummyData';
import Button from '../common/Button';

const ChatPanel = () => {
    return (
        <div className="chat-panel">
            <div className="chat-header">
                <h3>💬 Team Chat</h3>
            </div>
            <div className="chat-messages">
                {messages.map(msg => (
                    <div className={`message ${msg.own ? 'own' : ''}`} key={msg.id}>
                        {!msg.own && (
                            <div className="message-avatar" style={{ background: msg.color }}>
                                {msg.initials}
                            </div>
                        )}
                        <div className="message-content">
                            {!msg.own && <span className="message-sender">{msg.sender}</span>}
                            <p className="message-text">{msg.text}</p>
                            <span className="message-time">{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
                <Button variant="primary">Send</Button>
            </div>
        </div>
    );
};

export default ChatPanel;
