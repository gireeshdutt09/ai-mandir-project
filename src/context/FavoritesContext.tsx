import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoritesContextType {
  favorites: string[]; // Temple IDs
  toggleFavorite: (templeId: string) => void;
  isFavorite: (templeId: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kashi_saved_temples');
      return saved ? JSON.parse(saved) : ['kashi-vishwanath', 'sankat-mochan'];
    } catch {
      return ['kashi-vishwanath', 'sankat-mochan'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kashi_saved_temples', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = (templeId: string) => {
    setFavorites(prev => 
      prev.includes(templeId) 
        ? prev.filter(id => id !== templeId)
        : [...prev, templeId]
    );
  };

  const isFavorite = (templeId: string) => favorites.includes(templeId);

  const clearFavorites = () => setFavorites([]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
