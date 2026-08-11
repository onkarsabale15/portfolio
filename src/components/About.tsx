import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TimelineEvent } from '../types';
import './About.css';

const About: React.FC = () => {
    const [storyRef, storyInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [journeyRef, journeyInView] = useInView({
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
        <>
            {/* Story So Far Section */}
            <section id="story" className="section story-so-far">
                <div className="story-bg">
                    <div className="story-orb story-orb-1"></div>
                    <div className="story-orb story-orb-2"></div>
                </div>
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={storyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        Story So Far
                    </motion.h2>

                    <motion.div
                        ref={storyRef}
                        className="story-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={storyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="story-text">
                            I got into CS because I was my family's default tech support—if the WiFi, printer, or power failed, it was somehow my fault. I figured I should learn how things work since I was already taking the blame. I started with useless programs, fell into a love-hate relationship with C++, GO, JS, and eventually fled CSS for backend development—where things break logically, not emotionally. Today, I build scalable APIs, microservices, and queue systems, hunting down race conditions and reading logs for emotional support. I love solving complex backend bugs, and my goal is simple: build reliable systems that don't break unexpectedly. (And if they do… at least I know who to blame.)
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* My Journey Section */}
            <section id="about" className="section about">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        My Journey
                    </motion.h2>

                    <motion.div
                        ref={journeyRef}
                        className="about-content"
                        initial={{ opacity: 0 }}
                        animate={journeyInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="timeline">
                            {timeline.map((event, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={journeyInView ? { opacity: 1, x: 0 } : {}}
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
        </>
    );
};

export default About;
