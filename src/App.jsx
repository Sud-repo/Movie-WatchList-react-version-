import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MyWatchListPage from "./pages/MyWatchListPage";


const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<MainLayout />}>
            <Route path="/watchlist" element= { <MyWatchListPage /> } />
            <Route index element={<HomePage />} />
          </Route>
      )
);


function App() {

  const appTitle = 'Movie Watchlist'

  return <RouterProvider router={router} />

}

export default App
