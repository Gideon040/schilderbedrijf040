import React from 'react';
import { BlogCard } from './BlogCard';
import { Link } from 'react-router-dom';

const relatedPosts = [
  {
    id: 'schilderwerk-veldhoven',
    title: 'Schilderwerk Veldhoven',
    excerpt: 'Professioneel schilderwerk in Veldhoven. Van moderne nieuwbouw tot karakteristieke panden.',
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80',
    category: 'Veldhoven',
    date: '2024-03-14',
  },
  {
    id: 'schilder-nuenen',
    title: 'Schilder Nuenen',
    excerpt: 'Uw betrouwbare schilder in Nuenen. Specialist in binnen- en buitenschilderwerk.',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    category: 'Nuenen',
    date: '2024-03-13',
  },
  {
    id: 'schildersbedrijf-best',
    title: 'Schildersbedrijf Best',
    excerpt: 'Vakkundig schilderwerk in Best. Ontdek onze projecten en diensten.',
    imageUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80',
    category: 'Best',
    date: '2024-03-12',
  },
];

export function RelatedPosts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ontdek Meer Regio's</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}