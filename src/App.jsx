import { Route, Router, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SecureRoute from "./route/SecureRoute"
import HomePage from "./pages/HomePage";
import MyWatchListPage from "./pages/MyWatchListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddMoviePage from "./pages/AddMoviePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
        createRoutesFromElements(
          <>
          <Route path="/" element={ <AuthLayout />}>
            <Route index element={ <LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/app" element={<MainLayout />}>
            <Route path="home" element={ <SecureRoute> <HomePage /> </SecureRoute>} />
            <Route path="watchlist" element= { <SecureRoute> <MyWatchListPage /> </SecureRoute> } />
            <Route path="add-movie" element= {  <SecureRoute> <AddMoviePage/> </SecureRoute> } />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          </>
      )
);


function App() {

  const appTitle = 'Movie Watchlist'

  return <RouterProvider router={router} />

}

export default App
