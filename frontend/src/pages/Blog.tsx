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
        <div className="min-h-screen bg-white pt-24 pb-16">
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
                <div className="space-y-10">
                    {visiblePosts.map(post => (
                        <article key={post.id} className="group overflow-hidden">
                            <div className="grid items-center gap-8 lg:grid-cols-[320px_1fr]">
                                <Link to={`/blog/${post.id}`}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-64 w-full rounded-[2rem] object-cover transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                                    />
                                </Link>
                                <div className="flex flex-col justify-center py-2">
                                    <div className="mb-4">
                                        <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                    </div>
                                    <h3 className="mb-4 text-3xl font-black tracking-[-0.03em] text-gray-900 transition-colors group-hover:text-emerald-600">
                                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <p className="mb-5 max-w-3xl text-base leading-8 text-gray-600">
                                        {post.excerpt}
                                    </p>
                                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-emerald-600 font-bold hover:underline mt-auto">
                                        Read Article <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-10 border-b border-slate-200"></div>
                        </article>
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="border border-slate-300 bg-white px-8 py-3 rounded-full text-gray-700 transition-colors font-medium hover:bg-gray-50"
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
