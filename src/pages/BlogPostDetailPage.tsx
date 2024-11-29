import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';
import { useBlogPosts } from '../contexts/BlogPostContext';

export function BlogPostDetailPage() {
  const { slug } = useParams();
  const { getBlogPost } = useBlogPosts();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Blog post niet gevonden</h1>
              <p className="text-gray-600">Het opgevraagde artikel bestaat niet of is niet meer beschikbaar.</p>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <article className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-600 space-x-4">
                  <time>{new Date(post.date).toLocaleDateString('nl-NL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </div>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}