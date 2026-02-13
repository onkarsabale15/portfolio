import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    SiNodedotjs,
    SiNestjs,
    SiExpress,
    SiPython,
    SiTypescript,
    SiGraphql,
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiHtml5,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiRedis,
    SiPrisma,
    SiDocker,
    SiGit,
    SiGithubactions,
    SiVercel,
    SiNetlify,
    SiTensorflow,
    SiPytorch,
    SiGo,
    SiElasticsearch,
    SiSequelize,
    SiLangchain,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaDatabase, FaBrain, FaServer, FaAws } from 'react-icons/fa';
import { MdAnalytics } from 'react-icons/md';
import './Skills.css';

const Skills: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Icon mapping for technologies
    const techIcons: Record<string, React.ReactNode> = {
        'Node.js': <SiNodedotjs />,
        'NestJS': <SiNestjs />,
        'Express': <SiExpress />,
        'Python': <SiPython />,
        'GoLang': <SiGo />,
        'TypeScript': <SiTypescript />,
        'GraphQL': <SiGraphql />,
        'REST APIs': <TbApi />,
        'Microservices': <FaServer />,
        'React': <SiReact />,
        'Next.js': <SiNextdotjs />,
        'JavaScript': <SiJavascript />,
        'HTML/CSS': <SiHtml5 />,
        'Tailwind CSS': <SiTailwindcss />,
        'PostgreSQL': <SiPostgresql />,
        'MongoDB': <SiMongodb />,
        'MySQL': <SiMysql />,
        'Redis': <SiRedis />,
        'Prisma': <SiPrisma />,
        'TypeORM': <FaDatabase />,
        'AWS': <FaAws />,
        'Docker': <SiDocker />,
        'CI/CD': <SiGithubactions />,
        'Git': <SiGit />,
        'GitHub Actions': <SiGithubactions />,
        'Vercel': <SiVercel />,
        'Netlify': <SiNetlify />,
        'Machine Learning': <FaBrain />,
        'TensorFlow': <SiTensorflow />,
        'PyTorch': <SiPytorch />,
        'Data Analysis': <MdAnalytics />,
        'Elasticsearch': <SiElasticsearch />,
        'Sequelize': <SiSequelize />,
        'Serverless': <FaServer />,
        'RAG': <FaBrain />,
        'AI Agents': <FaBrain />,
        'MCP': <FaServer />,
        'LangChain.js': <SiLangchain />,
    };

    const skillCategories = [
        {
            title: 'Backend Technologies',
            icon: '🔧',
            color: '#a855f7',
            skills: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'GraphQL', 'REST APIs', 'Microservices', 'GoLang', 'Serverless'],
        },
        {
            title: 'Frontend Technologies',
            icon: '🎨',
            color: '#3b82f6',
            skills: ['Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
        },
        {   
            title: 'Databases & ORMs',
            icon: '💾',
            color: '#06b6d4',
            skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize', 'Elasticsearch'],
        },
        {
            title: 'Cloud & DevOps',
            icon: '☁️',
            color: '#8b5cf6',
            skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub Actions'],
        },
        {
            title: 'AI/ML & Data',
            icon: '🤖',
            color: '#ec4899',
            skills: ['RAG', 'AI Agents', 'MCP', 'LangChain.js'],
        },
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="skills-label">MY EXPERTISE</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                </motion.div>

                <div ref={ref} className="skills-list">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            className="skill-row"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            <div className="skill-category-header">
                                <div className="category-icon-wrapper" style={{ backgroundColor: `${category.color}20` }}>
                                    <span className="category-icon">{category.icon}</span>
                                </div>
                                <h3 className="category-name">{category.title}</h3>
                                <div className="category-dot" style={{ backgroundColor: category.color }}></div>
                            </div>

                            <div className="skill-badges">
                                {category.skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        className="skill-badge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {techIcons[skill] && <span className="tech-icon">{techIcons[skill]}</span>}
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
