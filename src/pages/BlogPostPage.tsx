import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BlogPostContent } from '../components/blog/BlogPostContent';
import { RelatedPosts } from '../components/blog/RelatedPosts';
import { BlogCTA } from '../components/blog/BlogCTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function BlogPostPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <BlogPostContent postId={id} />
        <RelatedPosts />
        <BlogCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}