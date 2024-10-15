import { Route, Router, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SecureRoute from "./route/SecureRoute"
import HomePage from "./pages/HomePage";
import MyWatchListPage from "./pages/MyWatchListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddMoviePage from "./pages/AddMoviePage";
import LoginPage from "./pages/LoginPage";
import { MovieProvider } from "./context/MovieContext";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/auth" element={ <AuthLayout />}>
        <Route path="login" element={ <LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={ <SecureRoute> <HomePage /> </SecureRoute>} />
        <Route path="watchlist" element= { <SecureRoute> <MovieProvider> <MyWatchListPage /> </MovieProvider> </SecureRoute> } />
        <Route path="add-movie" element= {  <SecureRoute> <AddMoviePage/> </SecureRoute> } />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      </>
  )
);

  return <RouterProvider router={router} />

}

export default App
