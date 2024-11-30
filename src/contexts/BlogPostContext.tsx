import React, { createContext, useContext } from 'react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
  author: string;
}

const blogPosts: Record<string, BlogPost> = {
  'sigma-coatings-duurzaam-schilderwerk': {
    id: 'sigma-coatings-duurzaam-schilderwerk',
    slug: 'sigma-coatings-duurzaam-schilderwerk',
    title: 'Sigma Coatings: De Beste Keuze voor Duurzaam Schilderwerk',
    excerpt: 'Ontdek waarom wij kiezen voor Sigma Coatings en wat dit betekent voor uw schilderproject.',
    content: `
      <p>Als professioneel schildersbedrijf kiezen wij bewust voor hoogwaardige materialen. In dit artikel bespreken we waarom Sigma Coatings onze voorkeur heeft voor duurzaam schilderwerk.</p>
      
      <h2>Waarom Sigma Coatings?</h2>
      <p>Sigma Coatings staat bekend om hun innovatieve verfproducten die niet alleen duurzaam zijn, maar ook uitstekende dekking bieden. Hun producten zijn specifiek ontwikkeld voor de Nederlandse weersomstandigheden.</p>
      
      <h2>Voordelen van Sigma Verf</h2>
      <ul>
        <li>Uitstekende dekking</li>
        <li>Lange levensduur</li>
        <li>Kleurvast</li>
        <li>Weerbestendig</li>
      </ul>
      
      <h2>Toepassingen</h2>
      <p>Of het nu gaat om binnenschilderwerk of buitenschilderwerk, Sigma biedt voor elke situatie de juiste oplossing. Van grondverf tot aflak, het complete systeem zorgt voor een perfect eindresultaat.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    category: 'Verfproducten',
    date: '2024-03-15',
    author: 'Team Schildersbedrijf040'
  },
  'beste-verf-voor-buitenschilderwerk': {
    id: 'beste-verf-voor-buitenschilderwerk',
    slug: 'beste-verf-voor-buitenschilderwerk',
    title: 'De Beste Verf voor Buitenschilderwerk: Een Complete Gids',
    excerpt: 'Lees onze uitgebreide gids over de beste verfkeuzes voor buitenschilderwerk.',
    content: `
      <p>Het kiezen van de juiste verf voor buitenschilderwerk is cruciaal voor een duurzaam resultaat. In deze gids delen we onze expertise over de beste verfkeuzes.</p>
      
      <h2>Factoren bij Verfkeuze</h2>
      <p>Bij de keuze van buitenverf spelen verschillende factoren een rol:</p>
      <ul>
        <li>Weersbestendigheid</li>
        <li>UV-bestendigheid</li>
        <li>Duurzaamheid</li>
        <li>Ondergrond</li>
      </ul>
      
      <h2>Onze Aanbevelingen</h2>
      <p>Voor optimale resultaten adviseren wij hoogwaardige verfsystemen die specifiek zijn ontwikkeld voor het Nederlandse klimaat.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80',
    category: 'Verfproducten',
    date: '2024-03-10',
    author: 'Team Schildersbedrijf040'
  }
};

interface BlogPostContextType {
  getBlogPost: (slug: string) => BlogPost | undefined;
  getAllBlogPosts: () => BlogPost[];
  getBlogPostsByCategory: (category: string) => BlogPost[];
  getRelatedPosts: (currentSlug: string, category: string) => BlogPost[];
}

const BlogPostContext = createContext<BlogPostContextType | undefined>(undefined);

export function BlogPostProvider({ children }: { children: React.ReactNode }) {
  const getBlogPost = (slug: string) => blogPosts[slug];
  
  const getAllBlogPosts = () => Object.values(blogPosts);
  
  const getBlogPostsByCategory = (category: string) => 
    Object.values(blogPosts).filter(post => post.category === category);
  
  const getRelatedPosts = (currentSlug: string, category: string) => 
    Object.values(blogPosts)
      .filter(post => post.slug !== currentSlug && post.category === category)
      .slice(0, 3);

  return (
    <BlogPostContext.Provider value={{ 
      getBlogPost, 
      getAllBlogPosts, 
      getBlogPostsByCategory,
      getRelatedPosts 
    }}>
      {children}
    </BlogPostContext.Provider>
  );
}

export function useBlogPosts() {
  const context = useContext(BlogPostContext);
  if (context === undefined) {
    throw new Error('useBlogPosts must be used within a BlogPostProvider');
  }
  return context;
}