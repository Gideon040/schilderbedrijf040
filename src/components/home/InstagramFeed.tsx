import React from 'react';
import { Instagram, Play } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80',
    link: 'https://instagram.com/p/example1',
    isVideo: true,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    link: 'https://instagram.com/p/example2',
    isVideo: false,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80',
    link: 'https://instagram.com/p/example3',
    isVideo: true,
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    link: 'https://instagram.com/p/example4',
    isVideo: false,
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    link: 'https://instagram.com/p/example5',
    isVideo: true,
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    link: 'https://instagram.com/p/example6',
    isVideo: false,
  },
];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 px-4 py-2 rounded-full mb-4">
            <Instagram className="w-5 h-5 text-primary-500" />
            <span className="text-primary-500 font-medium">@schildersbedrijf040</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Recente Projecten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Volg ons op Instagram voor dagelijkse updates en inspiratie
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-gray-100 rounded-lg"
            >
              <img
                src={post.imageUrl}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {post.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2">
                    <Instagram className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">Bekijk op Instagram</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}