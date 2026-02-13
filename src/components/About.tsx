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
                                My journey in tech began in 2020 when I started my engineering degree. What started as
                                curiosity quickly turned into passion. From being part of Google DSC to
                                diving deep into competitive programming with Python on LeetCode and CodeChef in my second
                                year, I was constantly pushing my boundaries.
                            </p>
                            <p className="story-text">
                                The turning point came when I explored cybersecurity through OWASP Top 10 and bug bounty
                                programs, which taught me to think like both a builder and a breaker. By my third year,
                                I had fallen in love with Cyber Security and Full Stack Development, mastering the MERN stack while
                                building real-world applications.
                            </p>
                            <p className="story-text">
                                In May 2023, I joined Herbs Magic as a Software Engineer, where I honed my skills in
                                production environments. By May 2024, I moved to Thinkitive, Where I was <strong>runner up at internal Systems Design Competition</strong> and in December 2025 I was <strong>Star Performer of the Year</strong>.
                                Today, I'm building scalable enterprise solutions and loving every moment of it.
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

