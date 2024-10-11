import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import MyWatchListPage from "./pages/MyWatchListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddMoviePage from "./pages/AddMoviePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
        createRoutesFromElements(
          <>
          <Route path="/" element={ <AuthLayout />}>
            <Route path="/login" element={ <LoginPage />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/watchlist" element= { <MyWatchListPage /> } />
            <Route path="/add-movie" element= { <AddMoviePage/> } />
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
