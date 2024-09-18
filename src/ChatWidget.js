import React, { useState } from 'react';
import './ChatWidget.css'; // Import custom styles
import { FaTelegramPlane, FaTimes } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return; // Prevent sending empty messages
        const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sender: 'user', message: input }),
        });
        const data = await response.json();
        const botMessages = data.map((msg) => ({ sender: 'bot', text: msg.text }));
        setMessages([...messages, { sender: 'user', text: input }, ...botMessages]);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent new line
            handleSend();
        }
    };

    return (
        <div className={`chat-widget ${isOpen ? 'open' : 'closed'}`}>
            <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
                <AiOutlineMessage size={28} />
            </div>
            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <span className="chat-title">PMSSS ChatBot</span>
                        <button className="chat-close" onClick={() => setIsOpen(false)}>
                            <FaTimes size={20} />
                        </button>
                    </div>
                    <div className="chat-content">
                        <div className="chatbox">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type a message..."
                            />
                            <button onClick={handleSend}>
                                <FaTelegramPlane size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
