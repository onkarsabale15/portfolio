import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Experience } from '../types';
import './Experience.css';

const ExperienceComponent: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const experiences: Experience[] = [
        {
            company: 'Thinkitive Inc.',
            role: 'Software Engineer - E2',
            period: 'Dec 2023 - Present',
            location: 'Pune, India',
            description: [
                "Built an EHR Bridge with the integration of 11+ EHR's",
                'Implemented Redis-based idempotency, request deduplication, and distributed locking to safely handle high-concurrency external API calls',
                'Optimized Lambda deployments by reducing package size from ~230MB to 43MB, cutting deployment time from 17 min to 2.5 min.',
                'Implemented end-to-end observability using Open Telemetry and SigNoz, improving debugging and reducing MTTR',
                'Built Disaster recovery compliant system',
                'Migrated services from .Net and Python to Node.js which handeled ~85 million requests per month',
            ],
            technologies: ['TypeScript', 'Node.js', 'NestJS', 'AWS', 'PostgreSQL', 'Serverless', 'Redis', 'EHR Integration', 'FHIR-R4', 'Open Telemetry', 'MicroServices' ],
        },
        {
            company: 'Herbs Magic',
            role: 'Backend Developer',
            period: 'May 2023 - May 2024',
            location: 'Remote',
            description: [
                'Developed full-stack web applications using MERN stack',
                'Implemented RESTful APIs and integrated third-party services',
                'Collaborated with cross-functional teams to deliver features',
                'Optimized application performance and user experience',
            ],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'AWS', 'Redis', 'RBAC', 'NextJS', 'JavaScript'],
        },
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Professional Experience
                </motion.h2>

                <div ref={ref} className="experience-list">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="experience-header">
                                <div>
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <h4 className="experience-company">{exp.company}</h4>
                                </div>
                                <div className="experience-meta">
                                    <span className="experience-period">{exp.period}</span>
                                    <span className="experience-location">{exp.location}</span>
                                </div>
                            </div>

                            <ul className="experience-description">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="experience-technologies">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceComponent;
