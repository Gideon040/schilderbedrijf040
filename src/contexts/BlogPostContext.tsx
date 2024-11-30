import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface BlogPostContextType {
  blogPosts: BlogPost[];
  isLoading: boolean;
  error: string | null;
  getBlogPost: (slug: string) => BlogPost | undefined;
  getAllBlogPosts: () => BlogPost[];
  getBlogPostsByCategory: (category: string) => BlogPost[];
  getRelatedPosts: (currentSlug: string, category: string) => BlogPost[];
}

const BlogPostContext = createContext<BlogPostContextType | undefined>(undefined);

export function BlogPostProvider({ children }: { children: React.ReactNode }) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        // Hier fetch je de data van waar Netlify CMS het opslaat
        const response = await fetch('/content/blog/index.json');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Er is een fout opgetreden');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const getBlogPost = (slug: string) => blogPosts.find(post => post.slug === slug);
  const getAllBlogPosts = () => blogPosts;
  const getBlogPostsByCategory = (category: string) => 
    blogPosts.filter(post => post.category === category);
  const getRelatedPosts = (currentSlug: string, category: string) => 
    blogPosts.filter(post => post.slug !== currentSlug && post.category === category).slice(0, 3);

  return (
    <BlogPostContext.Provider value={{ 
      blogPosts,
      isLoading,
      error,
      getBlogPost, 
      getAllBlogPosts, 
      getBlogPostsByCategory,
      getRelatedPosts 
    }}>
      {children}
    </BlogPostContext.Provider>
  );
}
// Voeg deze hook toe aan het einde van het bestand
export function useBlogPosts() {
  const context = useContext(BlogPostContext);
  if (context === undefined) {
    throw new Error('useBlogPosts must be used within a BlogPostProvider');
  }
  return context;
}