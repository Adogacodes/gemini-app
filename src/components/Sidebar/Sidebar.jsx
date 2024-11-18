import React, { useContext, useState } from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
    // State to manage sidebar expansion
    const [extended, setExtended] = useState(false);

    // Context values for application logic
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    // Function to load a previously used prompt
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt); // Update the current prompt
        await onSent(prompt); // Send the prompt
    };

    return (
        <div className="sidebar">
            {/* Top section of the sidebar */}
            <div className="top">
                {/* Menu toggle button */}
                <img 
                    src={assets.menu_icon} 
                    alt="Menu Icon" 
                    className="menu" 
                    onClick={() => setExtended(!extended)} 
                />

                {/* New chat button */}
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="Plus Icon" />
                    {extended && <p>New Chat</p>}
                </div>

                {/* Recent prompts section */}
                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompt.map((item, index) => (
                            <div 
                                key={index} 
                                onClick={() => loadPrompt(item)} 
                                className="recent-entry"
                            >
                                <img src={assets.message_icon} alt="Message Icon" />
                                <p>{item.slice(0, 18)}...</p> {/* Display truncated prompt */}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom section of the sidebar */}
            <div className="bottom">
                {/* Help section */}
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help Icon" />
                    {extended && <p>Help</p>}
                </div>

                {/* Activity section */}
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History Icon" />
                    {extended && <p>Activity</p>}
                </div>

                {/* Settings section */}
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings Icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
