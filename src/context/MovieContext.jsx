import { useState, useContext, createContext } from "react";

// Create the context
const MovieContext = createContext();

// Create a provider component
export const MovieProvider = ({ children }) => {
  const [userMovies, setUserMovies] = useState([]);

  const removeFromUserMovie = (id) => {
    setUserMovies(userMovies.filter(movie => movie.id !== id));
    console.log(`Removing movie with ID: ${id}`);
  };

  // You might want to include `setUserMovies` or other functions in the context
  return (
    <MovieContext.Provider value={{ removeFromUserMovie, userMovies, setUserMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

// Hook to use the context
export const useMovieContext = () => useContext(MovieContext);
