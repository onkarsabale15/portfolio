import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Achievement } from '../types';
import './Achievements.css';

const Achievements: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const achievements: Achievement[] = [
        {
            title: 'Star Performer of the Year',
            description: 'Recognized as Star Performer at Thinkitive for exceptional contributions and outstanding performance throughout 2025',
            year: '2025',
            icon: '⭐',
        },
        {
            title: 'Systems Design Competition Runner-up',
            description: 'Secured 2nd position in the internal Systems Design Competition at Thinkitive, showcasing strong architectural skills',
            year: '2024',
            icon: '🏆',
        }
        // {
        //     title: 'Client-Facing from Day One',
        //     description: 'Trusted to handle client calls and requirements gathering from the first month at Thinkitive',
        //     year: '2023',
        //     icon: '💼',
        // },
    ];

    return (
        <section id="achievements" className="section achievements">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Achievements & Recognition
                </motion.h2>

                <div ref={ref} className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card gradient-border"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="achievement-content">
                                <div className="achievement-icon">{achievement.icon}</div>
                                <div className="achievement-year">{achievement.year}</div>
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <p className="achievement-description">{achievement.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
