import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TimelineEvent } from '../types';
import './About.css';

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const timeline: TimelineEvent[] = [
        {
            year: '2020',
            title: 'Started Engineering Journey',
            description: 'Began engineering studies and became MyCaptain Campus Ambassador',
            icon: '🎓',
        },
        {
            year: '2021',
            title: 'Competitive Programming & Security',
            description: 'Started with Python on LeetCode and CodeChef. Learned OWASP Top 10 and Bug Bounty',
            icon: '💻',
        },
        {
            year: '2022',
            title: 'AI/ML & Full Stack Development',
            description: 'Dove into AI/ML and started with MERN Stack development',
            icon: '🤖',
        },
        {
            year: 'May 2023',
            title: 'Joined Herbs Magic',
            description: 'Started professional journey as a backend Developer',
            icon: '🚀',
        },
        {
            year: 'May 2024',
            title: 'Joined Thinkitive',
            description: 'Built a backend application from scratch integrated with 11+ thirdparty services, improved performance, added complete observability',
            icon: '⭐',
        },
        {
            year: 'July 2024',
            title: 'Completed Graduation B.Tech CSE(Cyber Security)',
            description: 'Officially Engineer Onkar Sabale',
            icon: '🎓',
        },
        {
            year: 'Late 2024',
            title: 'Systems Design Competition',
            description: 'Participated in Systems Design Competition and won 2nd place at Thinkitive Inc',
            icon: '🚀',
        },
        {
            year: 'December 2025',
            title: 'Star Performer of the Year',
            description: 'Recognized as Star Performer at Thinkitive',
            icon: '🏆',
        },
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My Journey
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="about-content"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="story-section">
                        <motion.div
                            className="story-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h3 className="story-title">Story So Far</h3>
                            <p className="story-text">
                                I got into Computer Science because at home, I was the designated person to shout at whenever anything went wrong with the PC 😅. WiFi not working? My fault. Printer not printing? My fault. Computer not turning on? Also my fault 😂. Power cut? Somehow still my fault (Because I didn't pay the bill my father told me to) 🤦.
                            </p>
                            <p className="story-text">
                                At that point, I figured I should at least learn how these things work, since I was already being held responsible 😄.<br/> I started with simple programs that did absolutely nothing useful, but felt like a huge achievement 🥳.<br/>Soon, I discovered JavaScript — and like every developer, I now have a love-hate relationship with it. It gives you freedom… and then gives you bugs that question your life choices 😭.
                            </p>
                            <p className="story-text">
                                I started with frontend development, but after spending more time fighting CSS than solving actual problems 😤, I moved to backend — where things break logically, not emotionally 😌.<br/> That's where I found my place. Since then, building APIs, microservices, and serverless systems. I enjoy working on problems where things break at scale, race conditions appear out of nowhere, and logs become the only source of truth and emotional support 🫠.
                            </p>
                            <p className="story-text">
                                I've built systems that handle real traffic, integrated queues that work silently in the background, and spent hours staring at dashboards hoping the error rate magically drops 🤞. Somewhere along the journey, debugging stopped being frustrating and started becoming fun. There's something satisfying about tracking down a bug that hides so well it almost deserves respect 🕵️.
                            </p>
                            <p className="story-text">
                                These days, I focus on building scalable and reliable backend systems. My goal is simple: build things that work well, scale properly, and don't break unexpectedly 🚀. And if they do break… at least I know who to shout at.<br/> (Myself.) 😂
                            </p>
                        </motion.div>
                    </div>

                    <div className="timeline">
                        {timeline.map((event, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="timeline-icon">{event.icon}</div>
                                <div className="timeline-content glass-card">
                                    <div className="timeline-year">{event.year}</div>
                                    <h3 className="timeline-title">{event.title}</h3>
                                    <p className="timeline-description">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

