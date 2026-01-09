import React, { useState, useRef, useEffect } from 'react';
import './CareerBot.css';

const knowledgeBase = {
    // Languages
    "java": {
        text: "Java is widely used in enterprise logic. Best resources:",
        links: [
            { title: "Oracle Java Docs", url: "https://docs.oracle.com/en/java/" },
            { title: "Java by Telusko (YouTube)", url: "https://www.youtube.com/user/javaboynavin" }
        ]
    },
    "python": {
        text: "Python is great for AI and Data Science. Start here:",
        links: [
            { title: "Official Python Docs", url: "https://docs.python.org/3/" },
            { title: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" }
        ]
    },
    "react": {
        text: "React is the top frontend library. Check these out:",
        links: [
            { title: "React Official Docs", url: "https://react.dev/" },
            { title: "FreeCodeCamp React Course", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" }
        ]
    },
    "javascript": {
        text: "JavaScript is the language of the web.",
        links: [
            { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { title: "Javascript.info", url: "https://javascript.info/" }
        ]
    },
    // Topics
    "salary": {
        text: "Salaries vary by region, but generally:\nExample: Java Devs avg $105k, React Devs avg $110k.",
        links: []
    },
    "roadmap": {
        text: "Check out roadmap.sh for detailed visual guides on any path.",
        links: [
            { title: "Developer Roadmaps", url: "https://roadmap.sh/" }
        ]
    },
    "default": {
        text: "I didn't quite catch that. Try asking about 'Java', 'Python', 'React', 'Salary', or 'Roadmap'.",
        links: []
    }
};

const CareerBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm your Career Assistant. Ask me about a technology (e.g., 'Java resources') or advice!", type: 'bot' }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // User Message
        const userMsg = { id: Date.now(), text: input, type: 'user' };
        setMessages(prev => [...prev, userMsg]);

        const userInputLower = input.toLowerCase();
        setInput('');

        // Simulate thinking delay
        setTimeout(() => {
            let response = knowledgeBase.default;

            // Simple Keyword Matching
            const keywords = Object.keys(knowledgeBase);
            for (let key of keywords) {
                if (key !== 'default' && userInputLower.includes(key)) {
                    response = knowledgeBase[key];
                    break;
                }
            }

            const botMsg = {
                id: Date.now() + 1,
                text: response.text,
                links: response.links,
                type: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    return (
        <>
            <button className="bot-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '🤖'}
            </button>

            {isOpen && (
                <div className="bot-container">
                    <div className="bot-header">
                        <h4>Career Assistant</h4>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>_</button>
                    </div>

                    <div className="bot-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.type === 'user' ? 'user-msg' : 'bot-msg'}`}>
                                {msg.text}
                                {msg.links && msg.links.map((link, idx) => (
                                    <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="bot-link">
                                        🔗 {link.title}
                                    </a>
                                ))}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="bot-input-area" onSubmit={handleSend}>
                        <input
                            type="text"
                            className="bot-input"
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" className="send-btn">➤</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default CareerBot;
