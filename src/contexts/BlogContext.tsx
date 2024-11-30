import React, { createContext, useContext, useState, useEffect } from 'react';

interface BlogContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isLoading: boolean;
  error: string | null;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState('Alle Regio\'s');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <BlogContext.Provider value={{ 
      activeCategory, 
      setActiveCategory,
      isLoading,
      error
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
}