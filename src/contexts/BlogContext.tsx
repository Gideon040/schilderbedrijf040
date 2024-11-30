import React, { createContext, useContext, useState } from 'react';

interface BlogContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState('Alle Regio\'s');

  return (
    <BlogContext.Provider value={{ activeCategory, setActiveCategory }}>
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