import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const sarcasticMessages = [
        "Yes, an AI built this. No, it won't take your job... yet 🤖",
        "100% AI-generated, 0% human creativity harmed in the process 🎨",
        "Proof that AI can code better than me at 3 AM ☕",
        "Built by AI. Debugged by AI. Existential crisis also by AI 🤔",
        "This portfolio was made by Claude. I just took the credit 😎",
        "AI did the work. I just vibed and approved ✨",
        "Antigravity + Claude = Me pretending I coded this 🚀",
        "Plot twist: The AI is reading this right now �",
    ];

    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % sarcasticMessages.length);
        }, 5000); // Change message every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    Vibecoded with ❤️ using{' '}
                    <a
                        href="https://deepmind.google/technologies/gemini/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Antigravity
                    </a>
                    {' '}and{' '}
                    <a
                        href="https://www.anthropic.com/claude"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Claude
                    </a>
                </p>
                <p className="footer-sarcasm">{sarcasticMessages[messageIndex]}</p>
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Onkar Sabale. All rights vibed.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
