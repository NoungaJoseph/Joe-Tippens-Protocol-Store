import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import blogBg from '../assets/images/blog-bg.jpg';

const Blog: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(9);
    const visiblePosts = BLOG_POSTS.slice(0, visibleCount);
    const hasMore = visibleCount < BLOG_POSTS.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 9);
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-16">
            {/* Header */}
            <section className="bg-emerald-900 text-white py-16 mb-12 relative overflow-hidden">
                {/* Use imported background image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${blogBg})` }}></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Health Hub</h1>
                    <p className="text-emerald-100 text-lg max-w-2xl mx-auto">Latest news, research, and wellness tips from the PureProtocol team.</p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visiblePosts.map(post => (
                        <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                            <div className="h-56 overflow-hidden relative">
                                <Link to={`/blog/${post.id}`}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                                    />
                                </Link>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-emerald-600 font-bold hover:underline mt-auto">
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium shadow-sm hover:shadow-md"
                        >
                            Load More Articles
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;