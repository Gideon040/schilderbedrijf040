import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogContext } from '../../contexts/BlogContext';
import { BlogCard } from './BlogCard';

const blogPosts = [
  {
    id: 'schildersbedrijf-eindhoven',
    title: 'Schildersbedrijf Eindhoven',
    excerpt: 'Vakkundig schilderwerk in Eindhoven door lokale experts. Ontdek onze diensten en projecten in de lichtstad.',
    imageUrl: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80',
    category: 'Eindhoven',
    date: '2024-03-15',
  },
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
  // Add more blog posts for each region
];

export function BlogGrid() {
  const { activeCategory } = useBlogContext();

  const filteredPosts = activeCategory === 'Alle Regio\'s'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}