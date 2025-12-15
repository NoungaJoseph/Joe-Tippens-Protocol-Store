import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SocialShare from '../components/SocialShare';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
            <Link to="/blog" className="text-emerald-600 hover:underline flex items-center gap-2">
                <ArrowLeft size={20} /> Back to Blog
            </Link>
        </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      
      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
         <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Health Hub
        </Link>
        
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-200">
            <img 
                src={post.image} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                    {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
                    <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                 <div className="prose prose-lg prose-emerald max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                 
                 <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <Tag size={18} /> <span className="font-semibold">Tags:</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {['Health', 'Wellness', post.category, 'Medical', 'Tips'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                #{tag}
                            </span>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
                {/* Share */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Share2 size={20} className="text-emerald-600" /> Share this article
                    </h3>
                    <SocialShare 
                        url={window.location.href} 
                        title={post.title} 
                        image={post.image}
                        className="justify-start" 
                    />
                </div>

                {/* Author Info */}
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h3 className="font-bold text-emerald-900 mb-2">About the Author</h3>
                    <p className="text-emerald-800 text-sm mb-4">
                        {post.author} is a dedicated contributor to the PureProtocol Health Hub, ensuring accurate and up-to-date medical information for our community.
                    </p>
                    <Link to="/about" className="text-emerald-600 font-bold text-sm hover:underline">
                        More about our team
                    </Link>
                </div>

                {/* Related Posts */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Related Articles</h3>
                    <div className="space-y-4">
                        {BLOG_POSTS
                            .filter(p => p.id !== post.id && p.category === post.category)
                            .slice(0, 3)
                            .map(related => (
                                <Link key={related.id} to={`/blog/${related.id}`} className="flex gap-4 group">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                        <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-emerald-600 leading-snug">
                                            {related.title}
                                        </h4>
                                        <span className="text-xs text-gray-500">{related.date}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPost;