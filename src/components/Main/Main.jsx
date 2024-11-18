import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    // Destructure necessary values from the context
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">
            {/* Navigation bar with app title and user icon */}
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>

            <div className="main-container">
                {/* Conditionally render content based on whether results should be shown */}
                {!showResult ? (
                    <>
                        {/* Greeting section */}
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        {/* Suggestion cards */}
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass Icon" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Light Bulb Icon" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message Icon" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code Icon" />
                            </div>
                        </div>
                    </>
                ) : (
                    // Results section
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="User Icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Gemini Icon" />
                            {loading ? (
                                // Loading animation
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                // Render results safely with HTML content
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                {/* Search input and additional information */}
                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            type="text" 
                            placeholder="Enter a prompt here" 
                            onChange={(e) => setInput(e.target.value)} 
                            value={input} 
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            {input && <img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" />}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini can make mistakes. Check important info.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
