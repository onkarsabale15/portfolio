import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Blog.css';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    url: string;
    tags: string[];
}

const Blog: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                // Medium RSS feed URL - replace with your Medium username
                const mediumUsername = 'onkars.dev';
                const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`;

                const response = await fetch(rssUrl);
                const data = await response.json();

                if (data.status === 'ok' && data.items) {
                    const posts = data.items.slice(0, 3).map((item: any) => {
                        // Extract text from HTML description
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = item.description;
                        const excerpt = tempDiv.textContent || tempDiv.innerText || '';

                        // Extract tags/categories
                        const tags = item.categories || [];

                        // Calculate read time (rough estimate: 200 words per minute)
                        const wordCount = excerpt.split(/\s+/).length;
                        const readTime = Math.ceil(wordCount / 200);

                        // Format date
                        const postDate = new Date(item.pubDate);
                        const formattedDate = postDate.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        });

                        return {
                            title: item.title,
                            excerpt: excerpt.substring(0, 200) + '...',
                            date: formattedDate,
                            readTime: `${readTime} min read`,
                            url: item.link,
                            tags: tags.slice(0, 3)
                        };
                    });

                    setBlogPosts(posts);
                }
            } catch (error) {
                console.error('Error fetching Medium posts:', error);
                // Fallback to placeholder posts if fetch fails
                setBlogPosts([
                    {
                        title: 'Unable to load blog posts',
                        excerpt: 'Please check your internet connection or visit my Medium profile directly.',
                        date: 'N/A',
                        readTime: 'N/A',
                        url: 'https://medium.com/@onkars.dev',
                        tags: []
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchMediumPosts();
    }, []);

    return (
        <section id="blog" className="section blog">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Recent Blog Posts
                </motion.h2>

                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Thoughts, insights, and experiences from my journey in tech
                </motion.p>

                {loading ? (
                    <div className="blog-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading latest articles...</p>
                    </div>
                ) : (
                    <div ref={ref} className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <motion.a
                                key={index}
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="blog-header">
                                    <div className="blog-meta">
                                        <span className="blog-date">{post.date}</span>
                                        <span className="blog-divider">•</span>
                                        <span className="blog-read-time">{post.readTime}</span>
                                    </div>
                                    <svg
                                        className="blog-external-icon"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>

                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>

                                {post.tags.length > 0 && (
                                    <div className="blog-tags">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="blog-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="blog-footer">
                                    <span className="blog-read-more">
                                        Read on Medium
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}

                <motion.div
                    className="blog-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a
                        href="https://medium.com/@onkars.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        View All Articles
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;

